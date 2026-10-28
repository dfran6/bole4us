import { apiFetch } from './client';
import { setAccessToken, clearAccessToken } from './tokenStorage';

// UI role labels differ from the backend's UserRole enum.
const ROLE_TO_API = { student: 'customer', vendor: 'vendor', agent: 'agent', admin: 'admin' };
const ROLE_FROM_API = { customer: 'student', vendor: 'vendor', agent: 'agent', admin: 'admin' };

export function toApiRole(uiRole) {
  return ROLE_TO_API[uiRole] ?? uiRole;
}

export function toUiRole(apiRole) {
  return ROLE_FROM_API[apiRole] ?? apiRole;
}

// /auth/me returns location as a string; /auth/profile returns it as
// {lat, lng}. Normalize to one shape so callers don't need to know which
// endpoint a user object came from.
function normalizeLocation(location) {
  if (location && typeof location === 'object') return location;
  return null;
}

function normalizeUser(raw) {
  return {
    id: raw.uid ?? raw.id,
    fullName: raw.full_name,
    email: raw.email,
    role: toUiRole(raw.role),
    location: normalizeLocation(raw.location),
    phone: raw.phone,
    avatarUrl: raw.avatar_url,
    handle: raw.handle,
    businessName: raw.business_name,
    category: raw.category,
    bankDetails: raw.bank_details,
    isOpen: raw.is_open,
    vehicleClass: raw.vehicle_class,
  };
}

export async function login({ identifier, password }) {
  const data = await apiFetch('/auth/login', {
    method: 'POST',
    auth: false,
    body: { identifier, password },
  });
  setAccessToken(data.access_token);
  return normalizeUser(data);
}

// The backend requires phone+location for every role, plus handle, despite
// the OpenAPI schema marking all three optional (confirmed via live 400/500
// responses) -- omitting handle alone causes a 500, not a validation error.
// It also requires business_name/category/location_lat/location_lng for
// vendor, and primary_quadrant/vehicle_class/location_lat/location_lng for
// agent. Callers must always supply phone, location, and handle.
function deriveHandle(email) {
  return email.split('@')[0].toLowerCase().replace(/[^a-z0-9_]/g, '_');
}

export async function register({ fullName, email, password, phone, location, handle, role, businessName, category, locationLat, locationLng, vehicleClass, idDocumentUrl, primaryQuadrant }) {
  const data = await apiFetch('/auth/register', {
    method: 'POST',
    auth: false,
    body: { full_name: fullName, email, password, phone, location, handle: handle || deriveHandle(email), role: toApiRole(role) },
    query: {
      business_name: businessName,
      category,
      location_lat: locationLat,
      location_lng: locationLng,
      vehicle_class: vehicleClass,
      id_document_url: idDocumentUrl,
      primary_quadrant: primaryQuadrant,
    },
  });
  setAccessToken(data.access_token);
  return normalizeUser(data);
}

export async function getMe() {
  const data = await apiFetch('/auth/me');
  return normalizeUser(data);
}

export async function getProfile() {
  const data = await apiFetch('/auth/profile');
  return normalizeUser(data);
}

export async function updateProfile(updates) {
  const data = await apiFetch('/auth/profile', { method: 'PUT', body: updates });
  return normalizeUser(data);
}

export async function logout() {
  try {
    await apiFetch('/auth/logout');
  } finally {
    clearAccessToken();
  }
}

export function requestPasswordReset(email) {
  return apiFetch('/auth/password-reset-request', { method: 'POST', auth: false, body: { email } });
}

export function verifyOtp({ email, otp }) {
  return apiFetch('/auth/verify-otp', { method: 'POST', auth: false, body: { email, otp } });
}

export function verifyEmail(token) {
  return apiFetch(`/auth/verify/${token}`, { auth: false });
}

export function resetPassword({ token, newPassword, confirmNewPassword }) {
  return apiFetch(`/auth/password-reset/${token}`, {
    method: 'POST',
    auth: false,
    body: { new_password: newPassword, confirm_new_password: confirmNewPassword },
  });
}

export function changePassword({ currentPassword, newPassword, confirmNewPassword }) {
  return apiFetch('/auth/change-password', {
    method: 'POST',
    body: { current_password: currentPassword, new_password: newPassword, confirm_new_password: confirmNewPassword },
  });
}
