import {
  ArrowDownLeft,
  ArrowUpRight,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Filter,
  History,
  Search,
  TrendingUp,
  Wallet,
} from 'lucide-react';
import AgentLayout from '../components/AgentLayout';

const AgentEarnings = () => {
  const traces = [
    { label: 'Smoky Delta Grill',    id: 'MIS-9012', amt: '₦1,200',  date: 'Oct 24, 14:22', status: 'ACKNOWLEDGED', type: 'in'      },
    { label: 'Mama T Bole Hub',      id: 'MIS-8998', amt: '₦4,500',  date: 'Oct 24, 11:30', status: 'PENDING ACK',  type: 'pending' },
    { label: 'Withdrawal to Zenith', id: 'OUT-1022', amt: '₦10,000', date: 'Oct 23, 16:45', status: 'COMPLETED',    type: 'out'     },
    { label: 'Urban Heat Grill',     id: 'MIS-8822', amt: '₦1,200',  date: 'Oct 22, 19:40', status: 'ACKNOWLEDGED', type: 'in'      },
  ];

  return (
    <AgentLayout>
      <div className="agent-earnings mx-auto w-full max-w-6xl space-y-10 pb-20 xl:px-0">

        {/* Header */}
        <header className="fade-up flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <h2 className="font-serif italic text-4xl font-black leading-none tracking-[-0.03em] text-zinc-950 sm:text-5xl">
              Liquid Gains
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-500">
              Tracking{' '}
              <span className="font-bold text-zinc-950">mission revenue</span>{' '}
              and vendor payouts
            </p>
          </div>
        </header>

        {/* Bento gains grid */}
        <section className="stagger-in grid grid-cols-1 gap-4 md:grid-cols-3">

          {/* Withdrawable balance — dark card */}
          <div className="rounded-[20px] bg-zinc-950 p-6 text-white shadow-[0_1px_1px_rgba(0,0,0,0.1),0_24px_48px_-24px_rgba(0,0,0,0.55)]">
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-[16px] border border-white/10 bg-white/10">
                  <Wallet className="h-5 w-5 text-[#F5A800]" />
                </div>
                <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-500">
                  <CheckCircle className="h-4 w-4" /> Ready for Payout
                </span>
              </div>
              <div>
                <p className="font-serif italic text-4xl font-black tracking-[-0.04em] text-white">
                  ₦12,450
                </p>
                <p className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                  Available Gains
                </p>
              </div>
              <button
                type="button"
                className="w-full cursor-not-allowed rounded-[14px] bg-zinc-800 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-600"
              >
                Coming Soon (Withdraw to Bank)
              </button>
            </div>
          </div>

          {/* Outstanding from vendors */}
          <div className="rounded-[20px] border border-zinc-100 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.18)]">
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-zinc-200 bg-zinc-50">
                  <DollarSign className="h-5 w-5 text-zinc-400" />
                </div>
                <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                  <Clock className="h-4 w-4" /> Awaiting ACK
                </span>
              </div>
              <div>
                <p className="font-serif italic text-4xl font-black tracking-[-0.04em] text-zinc-950">
                  ₦8,200
                </p>
                <p className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  Vendor Debt (04 active)
                </p>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="flex h-9 w-9 items-center justify-center rounded-[10px] border-4 border-white bg-zinc-100 text-[10px] font-black text-zinc-500"
                    >
                      V{i}
                    </div>
                  ))}
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                  Follow up
                </p>
              </div>
            </div>
          </div>

          {/* Performance stat — amber tint */}
          <div className="rounded-[20px] border border-[#F5A800]/20 bg-[#F5A800]/[0.04] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(245,168,0,0.25)]">
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#F5A800]/20 bg-white">
                  <TrendingUp className="h-5 w-5 text-[#F5A800]" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#D88B00]">
                  +22% This week
                </span>
              </div>
              <div>
                <p className="font-serif italic text-4xl font-black tracking-[-0.04em] text-zinc-950">
                  ₦45,800
                </p>
                <p className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#D88B00]">
                  Monthly Mission Revenue
                </p>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-[#F5A800]/15">
                <div className="h-full w-[75%] rounded-full bg-[#F5A800] transition-all duration-1000" />
              </div>
            </div>
          </div>
        </section>

        {/* Gain traces */}
        <section className="fade-up overflow-hidden rounded-[20px] border border-zinc-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03),0_28px_54px_-32px_rgba(0,0,0,0.25)]" style={{ '--i': 3 }}>
          <header className="flex flex-col items-start justify-between gap-5 border-b border-zinc-100 p-7 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-zinc-950 text-[#F5A800]">
                <History className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif italic text-xl font-bold tracking-[-0.04em] text-zinc-950">
                  Gain Traces
                </h3>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                  Transaction history
                </p>
              </div>
            </div>
            <div className="flex w-full gap-3 md:w-auto">
              <div className="flex flex-1 items-center gap-3 rounded-[16px] border border-zinc-200 bg-zinc-50 px-4 py-3 md:w-56 md:flex-none">
                <Search className="h-4 w-4 shrink-0 text-zinc-400" />
                <input
                  className="w-full bg-transparent text-[10px] font-black uppercase tracking-[0.16em] text-zinc-700 outline-none placeholder:text-zinc-300"
                  placeholder="Search traces..."
                />
              </div>
              <button
                type="button"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] border border-zinc-200 bg-white text-zinc-400 transition hover:bg-zinc-950 hover:text-white"
              >
                <Filter className="h-5 w-5" />
              </button>
            </div>
          </header>

          <div className="divide-y divide-zinc-50">
            {traces.map((trace) => (
              <div
                key={trace.id}
                className="group flex flex-col items-start justify-between gap-5 p-7 transition-colors hover:bg-zinc-50/50 md:flex-row md:items-center"
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] shadow-[0_1px_2px_rgba(0,0,0,0.05),0_10px_20px_-12px_rgba(0,0,0,0.3)] ${
                      trace.type === 'in'
                        ? 'bg-zinc-950 text-[#F5A800]'
                        : trace.type === 'out'
                        ? 'bg-zinc-100 text-zinc-400'
                        : 'bg-[#F5A800]/10 text-[#F5A800]'
                    }`}
                  >
                    {trace.type === 'out' ? (
                      <ArrowDownLeft className="h-5 w-5" />
                    ) : (
                      <ArrowUpRight className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-[-0.01em] text-zinc-950">
                      {trace.label}
                    </h4>
                    <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                      Trace ID: {trace.id} · {trace.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <p
                      className={`font-serif italic text-2xl font-black tracking-[-0.04em] ${
                        trace.type === 'out' ? 'text-zinc-400' : 'text-zinc-950'
                      }`}
                    >
                      {trace.type === 'out' ? '-' : '+'}
                      {trace.amt}
                    </p>
                    <p
                      className={`mt-1 text-[9px] font-black uppercase tracking-[0.2em] ${
                        trace.type === 'pending' ? 'animate-pulse text-[#F5A800]' : 'text-emerald-500'
                      }`}
                    >
                      {trace.status}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="rounded-[14px] bg-zinc-100 p-3.5 text-zinc-400 transition hover:bg-zinc-950 hover:text-white"
                  >
                    <Calendar className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        .agent-earnings .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </AgentLayout>
  );
};

export default AgentEarnings;
