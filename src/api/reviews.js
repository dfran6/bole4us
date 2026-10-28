import { apiFetch } from './client';

export function getVendorRatingStats(vendorId) {
  return apiFetch(`/ratings/vendors/${vendorId}/stats`);
}

export function getVendorRatings(vendorId) {
  return apiFetch(`/ratings/vendors/${vendorId}/ratings`);
}
