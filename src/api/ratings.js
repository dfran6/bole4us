import { apiFetch } from './client';

export function createRating({ type, targetId, orderId, ratingValue, title, comment }) {
  const query = type === 'vendor' ? { vendor_id: targetId } : { agent_id: targetId };
  return apiFetch('/ratings', {
    method: 'POST',
    query,
    body: {
      rating_type: type,
      order_id: orderId,
      rating_value: ratingValue,
      title: title || 'Remark',
      comment,
    },
  });
}
