import { CheckCircle, Download, ExternalLink, Search, XCircle } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import VendorLayout from '../components/VendorLayout';

const filters = ['All orders', 'Completed', 'Cancelled', 'Returns', 'Last 7 days', 'Last 30 days'];

const VendorOrderHistory = () => {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const orders = [
    { id: '#ORD-9012', customer: 'Uche K.',    items: '2x Smokey Bole, 1x Fish',   date: 'Oct 24, 14:20', total: '₦12,400', status: 'Completed', statusIcon: CheckCircle, statusColor: 'text-emerald-600' },
    { id: '#ORD-8998', customer: 'Bolanle A.', items: '1x Yam Bowl, 1x Herb Fish', date: 'Oct 24, 13:45', total: '₦8,200',  status: 'Completed', statusIcon: CheckCircle, statusColor: 'text-emerald-600' },
    { id: '#ORD-8954', customer: 'David O.',   items: '4x Signature Platter',      date: 'Oct 23, 19:10', total: '₦14,000', status: 'Cancelled', statusIcon: XCircle,     statusColor: 'text-red-500'    },
    { id: '#ORD-8921', customer: 'Sade W.',    items: '1x Spicy Fish, 2x Sides',   date: 'Oct 23, 18:30', total: '₦9,500',  status: 'Completed', statusIcon: CheckCircle, statusColor: 'text-emerald-600' },
  ];

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
              Every past order and receipt for The Urban Heat.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="group relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 transition group-focus-within:text-[#F5A800]" />
              <input
                type="text"
                placeholder="Search Order ID or Customer..."
                className="w-full rounded-[14px] border border-zinc-200 bg-white py-3.5 pl-11 pr-5 text-[11px] font-bold text-zinc-700 shadow-[0_1px_2px_rgba(0,0,0,0.03)] outline-none placeholder:text-zinc-300 focus:border-[#F5A800]/40 focus:ring-4 focus:ring-[#F5A800]/5 sm:w-72"
              />
            </div>
            <button
              type="button"
              className="flex items-center justify-center gap-2.5 rounded-[14px] bg-zinc-950 px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_12px_24px_-12px_rgba(0,0,0,0.5)] transition-colors duration-200 hover:bg-[#F5A800] active:scale-95"
            >
              <Download className="h-4 w-4" />
              Export
            </button>
          </div>
        </header>

        {/* Filter pills */}
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`relative whitespace-nowrap rounded-[14px] px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.16em] transition-colors duration-200 active:scale-95 ${
                  isActive
                    ? 'text-white'
                    : 'border border-zinc-200 bg-white text-zinc-400 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:border-[#F5A800]/30 hover:text-[#D88B00]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="history-filter-pill"
                    className="absolute inset-0 rounded-[14px] bg-[#F5A800] shadow-[0_10px_20px_-10px_rgba(245,168,0,0.6)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            );
          })}
        </div>

        {/* Table */}
        <section className="overflow-hidden rounded-[20px] border border-zinc-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03),0_20px_40px_-24px_rgba(0,0,0,0.2)]">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-zinc-100 bg-zinc-50/60">
                  {['Order ID', 'Customer', 'Items', 'Status', 'Total', ''].map((col) => (
                    <th
                      key={col}
                      className={`px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 ${!col ? 'text-right' : ''}`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50">
                {orders.map((order) => {
                  const StatusIcon = order.statusIcon;
                  return (
                    <tr
                      key={order.id}
                      className="group transition-colors hover:bg-zinc-50/60"
                    >
                      <td className="px-8 py-6">
                        <span className="text-sm font-black uppercase tracking-[-0.01em] text-zinc-950">
                          {order.id}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-sm font-bold text-zinc-950">{order.customer}</p>
                      </td>
                      <td className="px-8 py-6">
                        <p className="line-clamp-1 text-xs text-zinc-500">{order.items}</p>
                      </td>
                      <td className="px-8 py-6">
                        <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.14em] ${order.statusColor}`}>
                          <StatusIcon className="h-3.5 w-3.5" />
                          {order.status}
                        </div>
                        <p className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-zinc-400">
                          {order.date}
                        </p>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-sm font-black text-zinc-950">{order.total}</span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button
                          type="button"
                          className="rounded-[12px] p-2.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-[#D88B00]"
                        >
                          <ExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-zinc-100 bg-zinc-50/40 px-8 py-6">
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
              Page 1 of 42 · 168 orders total
            </span>
            <div className="flex gap-3">
              <button
                type="button"
                className="rounded-[12px] border border-zinc-200 bg-white px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.14em] text-zinc-300"
              >
                Previous
              </button>
              <button
                type="button"
                className="rounded-[12px] border border-zinc-200 bg-white px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.14em] text-zinc-950 transition hover:bg-zinc-950 hover:text-white active:scale-95"
              >
                Next
              </button>
            </div>
          </div>
        </section>
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
