import { CheckCircle, ChevronRight, Filter, Package, Search } from 'lucide-react';
import AgentLayout from '../components/AgentLayout';

const AgentHistory = () => {
  const missions = [
    { id: '#ORD-9012', date: 'Oct 12, 2024', time: '14:20', vendor: 'Smoky Delta Grill', amount: '₦1,200', status: 'Delivered' },
    { id: '#ORD-9005', date: 'Oct 11, 2024', time: '18:45', vendor: 'Mama Joy Hub',       amount: '₦1,500', status: 'Delivered' },
    { id: '#ORD-8992', date: 'Oct 10, 2024', time: '12:30', vendor: 'Heat Master',        amount: '₦1,100', status: 'Delivered' },
    { id: '#ORD-8980', date: 'Oct 10, 2024', time: '11:15', vendor: 'Delta Grill',        amount: '₦1,400', status: 'Delivered' },
    { id: '#ORD-8975', date: 'Oct 09, 2024', time: '20:10', vendor: 'Bole Express',       amount: '₦1,200', status: 'Delivered' },
  ];

  return (
    <AgentLayout>
      <div className="agent-history mx-auto w-full max-w-6xl space-y-8 pb-20 xl:px-0">

        {/* Header */}
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#F5A800]" />
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#D88B00]">
                Mission logs
              </span>
            </div>
            <h2 className="font-serif italic text-4xl font-black leading-none tracking-[-0.04em] text-zinc-950 sm:text-5xl">
              Mission Logs
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-500">
              Archive of all completed heat deployments.
            </p>
          </div>
          <div className="flex w-full items-center gap-3 md:w-auto">
            <div className="relative flex-1 md:w-64 md:flex-none">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <input
                className="w-full rounded-[18px] border border-zinc-200 bg-white py-3.5 pl-11 pr-5 text-[11px] font-bold text-zinc-700 shadow-sm outline-none placeholder:text-zinc-300 focus:border-[#F5A800]/40 focus:ring-4 focus:ring-[#F5A800]/5"
                placeholder="Search ID or Vendor..."
              />
            </div>
            <button
              type="button"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[18px] border border-zinc-200 bg-white text-zinc-500 shadow-sm transition hover:bg-zinc-950 hover:text-white"
            >
              <Filter className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Table */}
        <section className="overflow-hidden rounded-[26px] border border-zinc-100 bg-white shadow-[0_20px_54px_-36px_rgba(0,0,0,0.3)]">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-zinc-100 bg-zinc-50/60">
                  {['Mission ID', 'Timestamp', 'Source Vendor', 'Earned', 'Status', ''].map((col) => (
                    <th
                      key={col}
                      className="px-7 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50">
                {missions.map((m) => (
                  <tr
                    key={m.id}
                    className="group cursor-pointer transition-colors hover:bg-zinc-50/60"
                  >
                    <td className="px-7 py-6">
                      <span className="text-sm font-black uppercase tracking-[-0.01em] text-zinc-950">
                        {m.id}
                      </span>
                    </td>
                    <td className="px-7 py-6">
                      <p className="text-sm font-bold text-zinc-950">{m.date}</p>
                      <p className="mt-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                        {m.time}
                      </p>
                    </td>
                    <td className="px-7 py-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-zinc-100">
                          <Package className="h-4 w-4 text-zinc-400" />
                        </div>
                        <span className="text-sm font-bold text-zinc-950">{m.vendor}</span>
                      </div>
                    </td>
                    <td className="px-7 py-6">
                      <span className="text-sm font-black text-zinc-950">{m.amount}</span>
                    </td>
                    <td className="px-7 py-6">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-emerald-600">
                        <CheckCircle className="h-3 w-3" />
                        {m.status}
                      </span>
                    </td>
                    <td className="px-7 py-6 text-right">
                      <ChevronRight className="inline-block h-5 w-5 text-zinc-300 transition-colors group-hover:text-[#F5A800]" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between border-t border-zinc-100 bg-zinc-50/40 px-7 py-5">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
              Showing last 5 completed missions
            </p>
            <button
              type="button"
              className="text-[10px] font-black uppercase tracking-[0.16em] text-[#D88B00] transition hover:underline"
            >
              Download Report (PDF)
            </button>
          </div>
        </section>
      </div>

      <style>{`
        .agent-history .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </AgentLayout>
  );
};

export default AgentHistory;
