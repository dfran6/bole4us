import { apiFetch } from './client';

function normalizeNotification(raw) {
  return {
    id: raw.id,
    type: raw.notification_type,
    title: raw.title,
    message: raw.message,
    orderId: raw.order_id,
    missionId: raw.mission_id,
    readAt: raw.read_at,
    createdAt: raw.created_at,
  };
}

export async function listNotifications({ limit, offset, unreadOnly } = {}) {
  const data = await apiFetch('/notifications', { query: { limit, offset, unread_only: unreadOnly } });
  return data.map(normalizeNotification);
}

export async function getNotificationStats() {
  const data = await apiFetch('/notifications/stats');
  return {
    totalNotifications: data.total_notifications,
    unreadCount: data.unread_count,
  };
}

export function markAsRead(notificationIds) {
  return apiFetch('/notifications/mark-as-read', { method: 'POST', body: { notification_ids: notificationIds } });
}

export function markAllAsRead() {
  return apiFetch('/notifications/mark-all-as-read', { method: 'POST' });
}
