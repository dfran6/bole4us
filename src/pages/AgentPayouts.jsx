import { ArrowUpRight, DollarSign, History, Info, Search, Upload, User } from 'lucide-react';
import { Link } from 'react-router-dom';
// NOTE: This page renders inside VendorLayout (vendor-side view of agent payouts — intentional)
import VendorLayout from '../components/VendorLayout';

const AgentPayouts = () => {
  return (
    <VendorLayout>
      <div className="agent-payouts mx-auto w-full max-w-6xl space-y-8 pb-20 xl:px-0">

        {/* Header */}
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#F5A800]" />
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#D88B00]">
                Agent payouts
              </span>
            </div>
            <h2 className="font-serif italic text-4xl font-black leading-none tracking-[-0.04em] text-zinc-950 sm:text-5xl">
              Agent Payouts
            </h2>
            <p className="text-[15px] leading-relaxed text-zinc-500">
              Manage and acknowledge payments to your{' '}
              <span className="font-bold text-zinc-950">Heat Logistics Partners</span>
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">

          {/* Left — pending + history (8 cols) */}
          <div className="min-w-0 lg:col-span-8 space-y-7">

            {/* Pending payouts */}
            <section className="rounded-[26px] border border-zinc-100 bg-white p-7 shadow-[0_20px_54px_-36px_rgba(0,0,0,0.3)]">
              <div className="mb-7 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif italic text-xl font-bold tracking-[-0.04em] text-zinc-950">
                    Pending Payouts
                  </h3>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                    Awaiting payment
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded-[16px] border border-zinc-200 bg-zinc-50 px-4 py-3">
                  <Search className="h-4 w-4 text-zinc-400" />
                  <input
                    className="w-36 bg-transparent text-[10px] font-black uppercase tracking-[0.16em] text-zinc-700 outline-none placeholder:text-zinc-300"
                    placeholder="Search agents..."
                  />
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { agent: 'Agent Tunde', id: '#AGT-440', orders: 3, total: '₦4,200', last: 'Now'   },
                  { agent: 'Agent Sarah', id: '#AGT-122', orders: 1, total: '₦1,200', last: '2h ago' },
                ].map((p) => (
                  <div
                    key={p.id}
                    className="rounded-[22px] border border-zinc-100 bg-zinc-50/60 p-6 transition-all duration-300 hover:border-[#F5A800]/25 hover:bg-white hover:shadow-[0_16px_42px_-26px_rgba(0,0,0,0.3)]"
                  >
                    <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
                      <div className="flex items-center gap-5">
                        <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-zinc-950 shadow-[0_14px_36px_-18px_rgba(0,0,0,0.65)]">
                          <User className="h-7 w-7 text-[#F5A800]" />
                        </div>
                        <div>
                          <h4 className="font-black uppercase tracking-[-0.02em] text-zinc-950">
                            {p.agent}
                          </h4>
                          <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                            {p.id} · {p.orders} Orders
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="font-serif italic text-3xl font-black tracking-[-0.04em] text-zinc-950">
                          {p.total}
                        </p>
                        <button
                          type="button"
                          className="flex items-center gap-2 rounded-[16px] bg-zinc-950 px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_12px_30px_-14px_rgba(0,0,0,0.55)] transition-all duration-300 hover:bg-[#F5A800] active:scale-95"
                        >
                          Initiate Payment <ArrowUpRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Payout history */}
            <section className="rounded-[26px] border border-zinc-100 bg-white p-7 shadow-[0_20px_54px_-36px_rgba(0,0,0,0.3)]">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-zinc-100">
                  <History className="h-5 w-5 text-zinc-950" />
                </div>
                <div>
                  <h3 className="font-serif italic text-xl font-bold tracking-[-0.04em] text-zinc-950">
                    Payout History
                  </h3>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                    Completed transfers
                  </p>
                </div>
              </div>
              <div className="divide-y divide-zinc-50">
                {[
                  { agent: 'Agent Kofi', date: 'Oct 22, 2024', amt: '₦12,500', status: 'Verified' },
                  { agent: 'Agent Jide', date: 'Oct 21, 2024', amt: '₦8,200',  status: 'Verified' },
                ].map((h) => (
                  <div key={h.agent} className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <div>
                        <p className="text-xs font-black uppercase tracking-[-0.01em] text-zinc-950">
                          {h.agent}
                        </p>
                        <p className="mt-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                          {h.date}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-zinc-950">{h.amt}</p>
                      <p className="mt-0.5 text-[9px] font-black uppercase tracking-[0.16em] text-emerald-500">
                        {h.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right — summary + finalize (4 cols) */}
          <aside className="min-w-0 lg:col-span-4 space-y-6">

            {/* Debt summary */}
            <section className="relative overflow-hidden rounded-[26px] bg-zinc-950 p-7 text-white shadow-[0_40px_100px_-55px_rgba(0,0,0,0.75)]">
              <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#F5A800]/12 blur-[60px]" />
              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 bg-white/10">
                    <DollarSign className="h-5 w-5 text-[#F5A800]" />
                  </div>
                  <h4 className="font-black uppercase tracking-[-0.01em] text-white">Total Debt</h4>
                </div>
                <div>
                  <p className="font-serif italic text-5xl font-black tracking-[-0.05em] text-white">
                    ₦12,400
                  </p>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                    Across 04 active Agents
                  </p>
                </div>
                <div className="flex gap-3.5 rounded-[18px] border border-white/[0.06] bg-white/[0.04] p-4">
                  <Info className="h-5 w-5 shrink-0 text-[#F5A800]" />
                  <p className="text-xs leading-relaxed text-zinc-400">
                    Pay agents directly. After transfer, upload the screenshot for agent validation.
                  </p>
                </div>
              </div>
            </section>

            {/* Finalize upload */}
            <div className="flex flex-col items-center gap-5 rounded-[26px] border-2 border-dashed border-zinc-200 p-8 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#F5A800]/10">
                <Upload className="h-6 w-6 text-[#F5A800]" />
              </div>
              <div>
                <h5 className="text-sm font-black uppercase tracking-[-0.01em] text-zinc-950">
                  Finalize Payout
                </h5>
                <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
                  Select an agent above to begin the acknowledgement process.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        .agent-payouts .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </VendorLayout>
  );
};

export default AgentPayouts;
