import { useEffect, useRef, useState } from 'react';
import { Bell } from 'lucide-react';
import { getNotificationStats, listNotifications, markAsRead, markAllAsRead } from '../api/notifications';

export default function NotificationBell({ className }) {
  const [unreadCount, setUnreadCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(null);
  const panelRef = useRef(null);

  useEffect(() => {
    getNotificationStats().then((stats) => setUnreadCount(stats.unreadCount)).catch(() => {});
  }, []);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event) {
      if (panelRef.current && !panelRef.current.contains(event.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  function handleToggle() {
    const next = !open;
    setOpen(next);
    if (next && notifications === null) {
      listNotifications({ limit: 10 }).then(setNotifications).catch(() => setNotifications([]));
    }
  }

  async function handleReadOne(notification) {
    if (notification.readAt) return;
    try {
      await markAsRead([notification.id]);
      setNotifications((prev) => prev.map((n) => (n.id === notification.id ? { ...n, readAt: new Date().toISOString() } : n)));
      setUnreadCount((prev) => Math.max(0, prev - 1));
    } catch {
      // Leave the UI as-is if the mark-as-read call fails -- not worth a toast for this.
    }
  }

  async function handleReadAll() {
    try {
      await markAllAsRead();
      setNotifications((prev) => prev?.map((n) => ({ ...n, readAt: n.readAt ?? new Date().toISOString() })) ?? null);
      setUnreadCount(0);
    } catch {
      // Same as above -- a quiet failure here isn't worth interrupting the user.
    }
  }

  return (
    <div ref={panelRef} className="relative">
      <button
        type="button"
        onClick={handleToggle}
        aria-label="Notifications"
        className={className ?? 'relative flex h-11 w-11 items-center justify-center rounded-[18px] border border-zinc-200 bg-white text-zinc-400 transition hover:border-[#F5A800]/40 hover:text-[#D88B00]'}
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[8px] font-black text-white ring-2 ring-white">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-80 rounded-[20px] border border-zinc-100 bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]">
          <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4">
            <span className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-950">Notifications</span>
            <button type="button" onClick={handleReadAll} className="text-[10px] font-black uppercase tracking-[0.14em] text-[#D88B00] hover:underline">
              Mark all read
            </button>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {notifications === null ? (
              <p className="p-5 text-sm text-zinc-400">Loading...</p>
            ) : notifications.length === 0 ? (
              <p className="p-5 text-sm text-zinc-400">No notifications yet.</p>
            ) : (
              notifications.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  onClick={() => handleReadOne(n)}
                  className={`block w-full border-b border-zinc-50 px-5 py-4 text-left transition hover:bg-zinc-50 ${n.readAt ? '' : 'bg-[#F5A800]/5'}`}
                >
                  <p className="text-sm font-bold text-zinc-950">{n.title}</p>
                  <p className="mt-1 text-xs text-zinc-500 line-clamp-2">{n.message}</p>
                  <p className="mt-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-zinc-400">
                    {new Date(n.createdAt).toLocaleString()}
                  </p>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
