// The backend's OrderStatus enum mixes two overlapping lifecycles (payment
// verification and food prep/delivery) into one 12-value list. This maps
// each value to a short display label and a 0-100 progress stage so the UI
// doesn't need to know the raw enum.
const STAGES = {
  pending: { label: 'Pending', progress: 5 },
  awaiting_pop: { label: 'Awaiting Payment Proof', progress: 15 },
  pop_uploaded: { label: 'Payment Submitted', progress: 25 },
  confirmed: { label: 'Confirmed', progress: 35 },
  verified: { label: 'Payment Verified', progress: 45 },
  preparing: { label: 'Preparing', progress: 55 },
  ready: { label: 'Ready', progress: 70 },
  claimed: { label: 'Agent Assigned', progress: 80 },
  delivering: { label: 'On The Way', progress: 90 },
  delivered: { label: 'Delivered', progress: 100 },
  completed: { label: 'Completed', progress: 100 },
  cancelled: { label: 'Cancelled', progress: 0 },
};

export function describeOrderStatus(status) {
  return STAGES[status] ?? { label: status, progress: 0 };
}

export function isCancellable(status) {
  return status === 'pending' || status === 'confirmed';
}
