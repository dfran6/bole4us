import { apiFetch } from './client';

function normalizeTicket(raw) {
  return {
    id: raw.id,
    userId: raw.user_id,
    orderId: raw.order_id,
    subject: raw.subject,
    message: raw.message,
    status: raw.status,
    createdAt: raw.created_at,
  };
}

export async function listTickets({ status, limit, offset } = {}) {
  const data = await apiFetch('/support', { query: { status, limit, offset } });
  return { tickets: data.support_tickets.map(normalizeTicket), pagination: data.pagination };
}

export async function createTicket({ subject, message, orderId }) {
  const data = await apiFetch('/support', { method: 'POST', body: { subject, message, order_id: orderId } });
  return normalizeTicket(data);
}

export async function getTicket(ticketId) {
  const data = await apiFetch(`/support/${ticketId}`);
  return normalizeTicket(data);
}
