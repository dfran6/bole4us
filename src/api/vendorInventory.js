import { apiFetch } from './client';
import { normalizeMenuItem } from './vendors';

export async function listInventory({ limit, offset } = {}) {
  const data = await apiFetch('/vendors/inventory', { query: { limit, offset } });
  return { menuItems: data.menu_items.map(normalizeMenuItem), pagination: data.pagination };
}

export async function createMenuItem({ vendorId, name, description, price, category, imageUrl, stockQty, isAvailable }) {
  const data = await apiFetch('/vendors/inventory', {
    method: 'POST',
    body: {
      vendor_id: vendorId,
      name,
      description,
      price,
      category,
      image_url: imageUrl || null,
      stock_qty: stockQty,
      is_available: isAvailable,
    },
  });
  return normalizeMenuItem(data);
}

export async function updateMenuItem(itemId, updates) {
  const body = {};
  if (updates.name !== undefined) body.name = updates.name;
  if (updates.description !== undefined) body.description = updates.description;
  if (updates.price !== undefined) body.price = updates.price;
  if (updates.category !== undefined) body.category = updates.category;
  if (updates.imageUrl !== undefined) body.image_url = updates.imageUrl;
  if (updates.stockQty !== undefined) body.stock_qty = updates.stockQty;
  if (updates.isAvailable !== undefined) body.is_available = updates.isAvailable;

  const data = await apiFetch(`/vendors/inventory/${itemId}`, { method: 'PATCH', body });
  return normalizeMenuItem(data);
}

// Deletion lives under the Product tag, not Vendor -- there's no
// vendors/inventory/{id} DELETE, only /products/{id}.
export function deleteMenuItem(itemId) {
  return apiFetch(`/products/${itemId}`, { method: 'DELETE' });
}
