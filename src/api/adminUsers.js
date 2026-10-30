import { apiFetch } from './client';

// GET /auth/users' response schema is untyped in the OpenAPI spec -- this
// mapping is a best guess based on the field names every other user-shaped
// response in this API uses, pending live verification with an admin account.
function normalizeUser(raw) {
  return {
    id: raw.uid ?? raw.id,
    fullName: raw.full_name,
    email: raw.email,
    role: raw.role,
    isActive: raw.is_active,
    createdAt: raw.created_at,
  };
}

export async function listUsers({ limit, offset } = {}) {
  const data = await apiFetch('/auth/users', { query: { limit, offset } });
  const rawUsers = Array.isArray(data) ? data : data.users ?? [];
  return rawUsers.map(normalizeUser);
}

export function activateUser(email) {
  return apiFetch(`/auth/users/${encodeURIComponent(email)}/activate`, { method: 'POST' });
}

export function deactivateUser(email) {
  return apiFetch(`/auth/users/${encodeURIComponent(email)}/deactivate`, { method: 'POST' });
}
