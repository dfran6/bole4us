import { CheckCircle, Download, Search, XCircle } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import VendorLayout from '../components/VendorLayout';
import { listVendorOrders } from '../api/vendorOrders';
import { formatNaira } from '../utils/currency';

const DONE_STATUSES = new Set(['completed', 'delivered', 'cancelled']);

function downloadCsv(orders) {
  const header = ['Order ID', 'Customer', 'Date', 'Status', 'Total'];
  const rows = orders.map((o) => [
    o.orderNumber ?? o.id,
    o.customerName ?? '',
    new Date(o.createdAt).toISOString(),
    o.status,
    o.grandTotal,
  ]);
  const csv = [header, ...rows].map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'order-history.csv';
  link.click();
  URL.revokeObjectURL(url);
}

const VendorOrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState('loading');
  const [search, setSearch] = useState('');

  useEffect(() => {
    listVendorOrders({ limit: 100 })
      .then(({ orders: results }) => {
        setOrders(results.filter((o) => DONE_STATUSES.has(o.status)));
        setStatus('loaded');
      })
      .catch(() => setStatus('error'));
  }, []);

  const visibleOrders = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return orders;
    return orders.filter(
      (o) => (o.orderNumber ?? o.id).toLowerCase().includes(q) || (o.customerName ?? '').toLowerCase().includes(q)
    );
  }, [orders, search]);

  return (
    <VendorLayout>
      <div className="vendor-history mx-auto w-full max-w-6xl space-y-8 pb-20 xl:px-0">

        {/* Header */}
        <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0 space-y-3">
            <h2 className="font-serif italic text-4xl font-black leading-none tracking-[-0.04em] text-zinc-950 md:text-5xl">
              Order <span className="not-italic font-semibold text-[#D88B00]">History</span>
            </h2>
            <p className="text-[15px] leading-relaxed text-zinc-500">
              Every completed or cancelled order.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="group relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 transition group-focus-within:text-[#F5A800]" />
              <input
                type="text"
                placeholder="Search Order ID or Customer..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-[14px] border border-zinc-200 bg-white py-3.5 pl-11 pr-5 text-[11px] font-bold text-zinc-700 shadow-[0_1px_2px_rgba(0,0,0,0.03)] outline-none placeholder:text-zinc-300 focus:border-[#F5A800]/40 focus:ring-4 focus:ring-[#F5A800]/5 sm:w-72"
              />
            </div>
            <button
              type="button"
              onClick={() => downloadCsv(visibleOrders)}
              disabled={visibleOrders.length === 0}
              className="flex items-center justify-center gap-2.5 rounded-[14px] bg-zinc-950 px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_12px_24px_-12px_rgba(0,0,0,0.5)] transition-colors duration-200 hover:bg-[#F5A800] active:scale-95 disabled:opacity-40"
            >
              <Download className="h-4 w-4" />
              Export
            </button>
          </div>
        </header>

        {status === 'loading' && <p className="text-zinc-400">Loading order history...</p>}
        {status === 'error' && <p className="text-zinc-400">Couldn't load order history. Try again shortly.</p>}

        {status === 'loaded' && (
          <section className="overflow-hidden rounded-[20px] border border-zinc-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03),0_20px_40px_-24px_rgba(0,0,0,0.2)]">
            {visibleOrders.length === 0 ? (
              <p className="p-8 text-sm text-zinc-400">No past orders yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-zinc-100 bg-zinc-50/60">
                      {['Order ID', 'Customer', 'Items', 'Status', 'Total'].map((col) => (
                        <th key={col} className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-50">
                    {visibleOrders.map((order) => {
                      const isCancelled = order.status === 'cancelled';
                      const StatusIcon = isCancelled ? XCircle : CheckCircle;
                      return (
                        <tr key={order.id} className="group transition-colors hover:bg-zinc-50/60">
                          <td className="px-8 py-6">
                            <span className="text-sm font-black uppercase tracking-[-0.01em] text-zinc-950">
                              #{order.orderNumber ?? order.id}
                            </span>
                          </td>
                          <td className="px-8 py-6">
                            <p className="text-sm font-bold text-zinc-950">{order.customerName ?? 'Customer'}</p>
                          </td>
                          <td className="px-8 py-6">
                            <p className="line-clamp-1 text-xs text-zinc-500">
                              {order.items.map((i) => `${i.qty}x ${i.name}`).join(', ')}
                            </p>
                          </td>
                          <td className="px-8 py-6">
                            <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.14em] ${isCancelled ? 'text-red-500' : 'text-emerald-600'}`}>
                              <StatusIcon className="h-3.5 w-3.5" />
                              {order.status}
                            </div>
                            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-zinc-400">
                              {new Date(order.createdAt).toLocaleDateString()}
                            </p>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-sm font-black text-zinc-950">{formatNaira(order.grandTotal)}</span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            <div className="flex items-center justify-between border-t border-zinc-100 bg-zinc-50/40 px-8 py-6">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                {visibleOrders.length} orders
              </span>
            </div>
          </section>
        )}
      </div>

      <style>{`
        .vendor-history .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </VendorLayout>
  );
};

export default VendorOrderHistory;
