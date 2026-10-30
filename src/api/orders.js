import { apiFetch } from './client';

export function normalizeOrder(raw) {
  return {
    id: raw.id,
    orderNumber: raw.order_number,
    vendorId: raw.vendor_id,
    customerName: raw.customer_name,
    deliveryMode: raw.delivery_mode,
    deliveryAddress: raw.delivery_address,
    deliveryInstructions: raw.delivery_instructions,
    foodTotal: raw.food_total,
    deliveryFee: raw.delivery_fee,
    grandTotal: raw.grand_total,
    status: raw.status,
    popImageUrl: raw.pop_image_url,
    agentId: raw.agent_id,
    createdAt: raw.created_at,
    // The customer-facing order endpoint returns item name/price as `name`/
    // `price`; the vendor-facing one denormalizes them as `item_name`/
    // `item_price`. Both are handled here so one normalizer covers both.
    items: (raw.order_items ?? []).map((item) => ({
      id: item.id,
      menuItemId: item.menu_item_id,
      name: item.name ?? item.item_name,
      qty: item.qty,
      price: item.price ?? item.item_price,
    })),
  };
}

export async function createOrder({ vendorId, deliveryMode, deliveryAddress, deliveryInstructions, items }) {
  const data = await apiFetch('/order/', {
    method: 'POST',
    body: {
      vendor_id: vendorId,
      delivery_mode: deliveryMode,
      delivery_address: deliveryAddress,
      delivery_instructions: deliveryInstructions,
      items: items.map((item) => ({ menu_item_id: item.menuItemId, qty: item.qty })),
    },
  });
  return normalizeOrder(data);
}

export async function getOrder(orderId) {
  const data = await apiFetch(`/order/${orderId}`);
  return normalizeOrder(data);
}

export async function trackOrder(orderId) {
  const data = await apiFetch(`/order/${orderId}/track`);
  return {
    id: data.id,
    status: data.status,
    timeline: data.timeline ?? [],
    foodTotal: data.food_total,
    deliveryFee: data.delivery_fee,
    grandTotal: data.grand_total,
    vendor: data.vendor,
    agent: data.agent,
    estimatedMinutes: data.estimated_minutes,
  };
}

export async function getMyOrders({ status, limit, offset } = {}) {
  const data = await apiFetch('/order/my-orders', { query: { status, limit, offset } });
  return { orders: data.orders.map(normalizeOrder), pagination: data.pagination };
}

export async function getOrderHistory({ limit, offset } = {}) {
  const data = await apiFetch('/order/history', { query: { limit, offset } });
  return { orders: data.orders.map(normalizeOrder), pagination: data.pagination };
}

export function cancelOrder(orderId) {
  return apiFetch(`/order/${orderId}/cancel`, { method: 'POST' });
}
