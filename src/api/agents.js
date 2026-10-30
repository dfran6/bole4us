import { apiFetch } from './client';

function normalizeAgentProfile(raw) {
  return {
    id: raw.id,
    uid: raw.uid,
    primaryQuadrant: raw.primary_quadrant,
    vehicleClass: raw.vehicle_class,
    lat: raw.location_lat,
    lng: raw.location_lng,
    isOpen: raw.is_open,
    bankName: raw.bank_name,
    accountNumber: raw.account_number,
    accountName: raw.account_name,
  };
}

function normalizeActiveOrder(raw) {
  return {
    id: raw.id,
    vendorId: raw.vendor_id,
    orderNumber: raw.order_number,
    customerName: raw.customer_name,
    deliveryMode: raw.delivery_mode,
    deliveryAddress: raw.delivery_address,
    deliveryInstructions: raw.delivery_instructions,
    foodTotal: raw.food_total,
    grandTotal: raw.grand_total,
    status: raw.status,
    createdAt: raw.created_at,
  };
}

function normalizeMission(raw) {
  return {
    id: raw.id,
    orderId: raw.order_id,
    agentId: raw.agent_id,
    vendorId: raw.vendor_id,
    vendorName: raw.vendor_name,
    deliveryFee: raw.delivery_fee,
    status: raw.status,
    deliveryAddress: raw.delivery_address,
    deliveryInstructions: raw.delivery_instructions,
    foodTotal: raw.food_total,
    grandTotal: raw.grand_total,
    popImageUrl: raw.pop_image_url,
    claimedAt: raw.claimed_at,
    createdAt: raw.created_at,
    completedAt: raw.completed_at,
  };
}

// There is no "get my agent profile" endpoint -- the only way to find the
// logged-in agent's own profile is to match it out of the public agent list
// by the account id (uid) that created it. Same workaround as vendors.
export async function findMyAgentProfile(userId) {
  const data = await apiFetch('/agents/', { query: { limit: 100 } });
  const match = data.find((agent) => agent.uid === userId);
  return match ? normalizeAgentProfile(match) : null;
}

export async function listActiveOrders() {
  const data = await apiFetch('/agents/active-orders');
  return data.map(normalizeActiveOrder);
}

export async function claimMission(orderId) {
  return apiFetch(`/agents/agent/missions/${orderId}/claim`, { method: 'POST' });
}

export async function getMission(missionId) {
  const data = await apiFetch(`/agents/missions/${missionId}`);
  return normalizeMission(data);
}

export async function updateMissionStatus(missionId, status) {
  const data = await apiFetch(`/agents/missions/${missionId}/update-status`, {
    method: 'PATCH',
    query: { new_status: status },
  });
  return data;
}

// Despite the name, this returns every mission regardless of status --
// callers split it into "active" vs "history" client-side by status.
export async function listMissionHistory() {
  const data = await apiFetch('/agents/missions/history');
  return data.map(normalizeMission);
}

export async function getAgentAnalytics() {
  const data = await apiFetch('/agents/analytics');
  return {
    totalMissions: data.total_missions,
    totalRevenue: data.total_revenue ?? '0',
    todayRevenue: data.today_revenue ?? '0',
    pendingMissions: data.pending_missions ?? 0,
    successRate: data.success_rate ?? 0,
    totalCompletedMissions: data.total_completed_missons ?? 0,
    rating: data.rating ?? 0,
    hubRanking: data.hub_ranking ?? 0,
    totalOwedToMe: data.total_owed_to_me ?? '0',
    vendorsOwing: data.vendors_owing ?? [],
  };
}
