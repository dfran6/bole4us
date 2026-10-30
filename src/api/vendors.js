import { apiFetch } from './client';

function normalizeVendor(raw) {
  return {
    id: raw.id,
    uid: raw.uid,
    businessName: raw.business_name,
    category: raw.category,
    lat: raw.location_lat,
    lng: raw.location_lng,
    isOpen: raw.is_open,
    bankName: raw.bank_name,
    accountNumber: raw.account_number,
    accountName: raw.account_name,
    bannerUrl: raw.banner_url,
    rating: raw.rating,
    reviewCount: raw.review_count,
    menuItems: (raw.menu_items ?? []).map(normalizeMenuItem),
  };
}

export function normalizeMenuItem(raw) {
  return {
    id: raw.id,
    vendorId: raw.vendor_id,
    name: raw.name,
    description: raw.description,
    price: raw.price,
    category: raw.category,
    imageUrl: raw.image_url,
    stockQty: raw.stock_qty,
    isAvailable: raw.is_available,
  };
}

export async function listVendors({ lat, lng, radiusKm, category, ratingMin, limit, offset } = {}) {
  const data = await apiFetch('/vendors', {
    auth: false,
    query: { lat, lng, radius_km: radiusKm, category, rating_min: ratingMin, limit, offset },
  });
  return { vendors: data.vendors.map(normalizeVendor), pagination: data.pagination };
}

export async function getVendor(vendorId) {
  const data = await apiFetch(`/vendors/${vendorId}`, { auth: false });
  return normalizeVendor(data);
}

export async function updateVendorStatus(isOpen) {
  const data = await apiFetch('/vendors/status', { method: 'PATCH', body: { is_open: isOpen } });
  return normalizeVendor(data);
}

export async function searchProducts({ q, vendorId, limit, offset }) {
  const data = await apiFetch('/products/search', { query: { q, vendor_id: vendorId, limit, offset } });
  return {
    results: data.data.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      category: item.category,
      imageUrl: item.image_url,
      isAvailable: item.is_available,
    })),
    pagination: data.pagination,
  };
}

// Search results don't include vendor_id -- resolving which vendor a result
// belongs to needs a follow-up fetch of the full item.
export async function getMenuItem(itemId) {
  const data = await apiFetch(`/products/${itemId}`);
  return normalizeMenuItem(data);
}

// There is no "get my vendor profile" endpoint, and /auth/profile (which
// would otherwise carry vendor_id) 500s server-side. The only way to find
// the logged-in vendor's own profile id is to match it out of the public
// vendor list by the account id (uid) that created it.
export async function findMyVendorProfile(userId) {
  const { vendors } = await listVendors({ limit: 100 });
  return vendors.find((vendor) => vendor.uid === userId) ?? null;
}
