const formatter = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 });

export function formatNaira(decimalString) {
  const amount = Number(decimalString);
  return formatter.format(Number.isFinite(amount) ? amount : 0);
}
