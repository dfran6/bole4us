import { apiFetch } from './client';
import { normalizeOrder } from './orders';

export async function listVendorOrders({ limit, offset } = {}) {
  const data = await apiFetch('/vendors/orders', { query: { limit, offset } });
  return { orders: data.orders.map(normalizeOrder), pagination: data.pagination };
}

export async function updateOrderStatus(orderId, status) {
  const data = await apiFetch(`/vendors/orders/${orderId}/status`, { method: 'PATCH', body: { status } });
  return normalizeOrder(data);
}
