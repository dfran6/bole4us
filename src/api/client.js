import { getAccessToken, clearAccessToken } from './tokenStorage';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const REQUEST_TIMEOUT_MS = 15000;

export class ApiError extends Error {
  constructor(message, { status, kind }) {
    super(message);
    this.status = status;
    this.kind = kind;
  }
}

function buildUrl(path, query) {
  const url = new URL(`${BASE_URL}${path}`);
  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== null) url.searchParams.set(key, value);
    }
  }
  return url.toString();
}

function flattenDetail(detail) {
  if (Array.isArray(detail)) {
    return detail.map((item) => item.msg).filter(Boolean).join(', ') || 'Request failed';
  }
  if (typeof detail === 'string') return detail;
  if (detail && typeof detail === 'object' && typeof detail.error === 'string') {
    return detail.error.trim();
  }
  return 'Request failed';
}

async function parseErrorResponse(response) {
  try {
    const data = await response.json();
    return flattenDetail(data.detail ?? data.message ?? data.messaage);
  } catch {
    return response.statusText || 'Request failed';
  }
}

async function rawFetch(path, { method = 'GET', body, auth = true, isFormData = false, query, token } = {}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  const headers = {};
  if (!isFormData) headers['Content-Type'] = 'application/json';
  if (auth) {
    const accessToken = token ?? getAccessToken();
    if (accessToken) headers.Authorization = `Bearer ${accessToken}`;
  }

  try {
    // No credentials: 'include' -- the backend's CORS response pairs
    // Access-Control-Allow-Origin: * with Access-Control-Allow-Credentials:
    // true, a combination browsers reject outright, so a credentialed
    // request fails before it reaches application code.
    const response = await fetch(buildUrl(path, query), {
      method,
      headers,
      body: body === undefined ? undefined : isFormData ? body : JSON.stringify(body),
      signal: controller.signal,
    });
    return response;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new ApiError('Request timed out. Check your connection and try again.', { kind: 'network' });
    }
    throw new ApiError('Network error. Check your connection and try again.', { kind: 'network' });
  } finally {
    clearTimeout(timeoutId);
  }
}

// The backend reuses 401 for things that have nothing to do with the token
// (e.g. a broken endpoint's own permission check), so a bare status check
// isn't safe -- it would log the user out over an unrelated server bug.
// Only the specific phrasings the backend actually uses for a bad/expired/
// revoked token count; everything else is a normal error that propagates to
// the caller without touching the session.
const INVALID_TOKEN_PATTERN = /not authenticated|invalid or expired token|token has been revoked/i;

function isRevokedTokenResponse(status, message) {
  return (status === 401 || status === 403) && INVALID_TOKEN_PATTERN.test(message);
}

// No refresh token is ever issued to the client (login/register return only
// an access_token, and the backend's CORS response forbids credentialed
// requests), so there's no way to silently refresh a session -- an expired
// or revoked token just ends it.
export async function apiFetch(path, options = {}) {
  const response = await rawFetch(path, options);

  if (!response.ok) {
    const message = await parseErrorResponse(response);
    if (options.auth !== false && isRevokedTokenResponse(response.status, message)) {
      clearAccessToken();
      // storage events only fire in OTHER tabs, not this one, so AuthContext
      // needs a same-tab signal to drop the stale "authenticated" state.
      window.dispatchEvent(new CustomEvent('bole4us:auth-expired'));
      throw new ApiError('Session expired. Please log in again.', { status: response.status, kind: 'http' });
    }
    const kind = response.status === 422 ? 'validation' : 'http';
    throw new ApiError(message, { status: response.status, kind });
  }

  return response.status === 204 ? null : response.json();
}
