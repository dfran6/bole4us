import { ArrowUpRight, DollarSign, History, Info, Search, Upload, User } from 'lucide-react';
import VendorLayout from '../components/VendorLayout';

const VendorPayouts = () => {
  return (
    <VendorLayout>
      <div className="vendor-payouts mx-auto w-full max-w-6xl space-y-8 pb-20 xl:px-0">

        {/* Header */}
        <header className="fade-up flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0 space-y-3">
            <h2 className="font-serif italic text-4xl font-black leading-none tracking-[-0.03em] text-zinc-950 sm:text-5xl">
              Agent Payouts
            </h2>
            <p className="text-[15px] leading-relaxed text-zinc-500">
              Manage and acknowledge payments to your{' '}
              <span className="font-bold text-zinc-950">delivery agents</span>
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">

          {/* Left — pending + history (8 cols) */}
          <div className="min-w-0 lg:col-span-8 space-y-7">

            {/* Pending payouts */}
            <section className="fade-up rounded-[20px] border border-zinc-100 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_20px_40px_-24px_rgba(0,0,0,0.2)]">
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

              <div className="stagger-in space-y-3">
                {[
                  { agent: 'Agent Tunde', id: '#AGT-440', orders: 3, total: '₦4,200', last: 'Now'   },
                  { agent: 'Agent Sarah', id: '#AGT-122', orders: 1, total: '₦1,200', last: '2h ago' },
                ].map((p) => (
                  <div
                    key={p.id}
                    className="rounded-[16px] border border-zinc-100 bg-zinc-50/60 p-6 transition-colors duration-200 hover:border-[#F5A800]/25 hover:bg-white"
                  >
                    <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
                      <div className="flex items-center gap-5">
                        <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-zinc-950 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.5)]">
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
                        <p className="font-serif italic text-3xl font-black tracking-[-0.03em] text-zinc-950">
                          {p.total}
                        </p>
                        <button
                          type="button"
                          className="press-scale flex items-center gap-2 rounded-[14px] bg-zinc-950 px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_-12px_rgba(0,0,0,0.5)] transition-colors duration-200 hover:bg-[#F5A800]"
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
            <section className="fade-up rounded-[20px] border border-zinc-100 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_20px_40px_-24px_rgba(0,0,0,0.2)]" style={{ '--i': 1 }}>
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
          <aside className="fade-up min-w-0 lg:col-span-4 space-y-6" style={{ '--i': 1 }}>

            {/* Debt summary */}
            <section className="rounded-[20px] bg-zinc-950 p-7 text-white shadow-[0_1px_1px_rgba(0,0,0,0.1),0_24px_48px_-24px_rgba(0,0,0,0.55)]">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 bg-white/10">
                    <DollarSign className="h-5 w-5 text-[#F5A800]" />
                  </div>
                  <h4 className="font-black uppercase tracking-[-0.01em] text-white">Total Debt</h4>
                </div>
                <div>
                  <p className="font-serif italic text-4xl font-black tracking-[-0.04em] text-white">
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
            <div className="flex flex-col items-center gap-5 rounded-[20px] border-2 border-dashed border-zinc-200 p-8 text-center">
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
        .vendor-payouts .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </VendorLayout>
  );
};

export default VendorPayouts;
