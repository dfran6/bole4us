import { apiFetch } from './client';

export async function listVendorDebts() {
  const data = await apiFetch('/vendors/debts');
  return {
    totalOwed: data.total_owed ?? '0',
    outstandingAgents: data.outstanding_agents,
    debts: (data.debts ?? []).map((debt) => ({
      agentId: debt.agent_id,
      status: debt.status,
      agentName: debt.agent_name ?? 'Unknown',
      amountOwed: debt.amount_owed ?? '0',
      lastDeliveryAt: debt.last_delivery_at,
    })),
  };
}

export function submitDebtPayout({ agentId, receiptImageUrl, missionId }) {
  return apiFetch('/vendors/debts/submit', {
    method: 'POST',
    query: { agent_id: agentId, receipt_image_url: receiptImageUrl, mission_id: missionId },
  });
}
