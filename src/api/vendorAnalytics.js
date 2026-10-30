import { apiFetch } from './client';

export async function getVendorAnalytics() {
  const data = await apiFetch('/vendors/analytics');
  return {
    todayRevenue: data.today_revenue ?? '0',
    activeOrders: data.active_orders,
    pendingPrep: data.pending_prep,
    rating: data.rating ?? '0',
    reviewCount: data.review_count,
    totalOrders30d: data.total_orders_30d,
    revenueChangePct: data.revenue_change_pct,
    topItems: (data.top_items ?? []).map((item) => ({
      menuItemId: item.menu_item_id,
      name: item.name,
      soldCount: item.sold_count,
      revenue: item.revenue,
    })),
  };
}
