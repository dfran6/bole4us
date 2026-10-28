import {
  ArrowUpRight,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Search,
  History,
  TrendingUp,
  Wallet,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import AgentLayout from '../components/AgentLayout';
import { getAgentAnalytics, listMissionHistory } from '../api/agents';
import { formatNaira } from '../utils/currency';

// vendors_owing is untyped in the API schema -- read whichever field names
// are actually present rather than assuming one shape.
function vendorDebtLabel(entry) {
  return entry?.vendor_name ?? entry?.name ?? entry?.agent_name ?? 'Vendor';
}
function vendorDebtAmount(entry) {
  return entry?.amount_owed ?? entry?.amount ?? entry?.total ?? '0';
}

const AgentEarnings = () => {
  const [analytics, setAnalytics] = useState(null);
  const [missions, setMissions] = useState([]);
  const [status, setStatus] = useState('loading');
  const [search, setSearch] = useState('');

  useEffect(() => {
    getAgentAnalytics().then(setAnalytics).catch(() => {});
    listMissionHistory()
      .then((results) => {
        setMissions(results);
        setStatus('loaded');
      })
      .catch(() => setStatus('error'));
  }, []);

  const traces = useMemo(() => {
    const q = search.trim().toLowerCase();
    return missions
      .filter((m) => !q || (m.vendorName ?? '').toLowerCase().includes(q) || m.id.toLowerCase().includes(q))
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [missions, search]);

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

        {status === 'loading' && <p className="text-zinc-400">Loading earnings...</p>}
        {status === 'error' && <p className="text-zinc-400">Couldn't load earnings. Try again shortly.</p>}

        {status === 'loaded' && (
          <>
            {/* Bento gains grid */}
            <section className="stagger-in grid grid-cols-1 gap-4 md:grid-cols-3">

              {/* Withdrawable balance: dark card */}
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
                      {formatNaira(analytics.totalOwedToMe)}
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
                      {formatNaira(analytics.vendorsOwing.reduce((sum, v) => sum + Number(vendorDebtAmount(v)), 0))}
                    </p>
                    <p className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                      Vendor Debt ({String(analytics.vendorsOwing.length).padStart(2, '0')} active)
                    </p>
                  </div>
                  {analytics.vendorsOwing.length > 0 && (
                    <div className="space-y-2 pt-1">
                      {analytics.vendorsOwing.map((v, i) => (
                        <div key={i} className="flex items-center justify-between gap-3 text-xs">
                          <span className="truncate font-bold text-zinc-600">{vendorDebtLabel(v)}</span>
                          <span className="shrink-0 font-black text-zinc-950">{formatNaira(vendorDebtAmount(v))}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Performance stat: amber tint */}
              <div className="rounded-[20px] border border-[#F5A800]/20 bg-[#F5A800]/[0.04] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(245,168,0,0.25)]">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#F5A800]/20 bg-white">
                      <TrendingUp className="h-5 w-5 text-[#F5A800]" />
                    </div>
                  </div>
                  <div>
                    <p className="font-serif italic text-4xl font-black tracking-[-0.04em] text-zinc-950">
                      {formatNaira(analytics.totalRevenue)}
                    </p>
                    <p className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#D88B00]">
                      Total Mission Revenue
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Gain traces */}
            <section className="fade-up overflow-hidden rounded-[20px] border border-zinc-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03),0_28px_54px_-32px_rgba(0,0,0,0.25)]">
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
                      Mission history
                    </p>
                  </div>
                </div>
                <div className="flex w-full gap-3 md:w-auto">
                  <div className="flex flex-1 items-center gap-3 rounded-[16px] border border-zinc-200 bg-zinc-50 px-4 py-3 md:w-56 md:flex-none">
                    <Search className="h-4 w-4 shrink-0 text-zinc-400" />
                    <input
                      className="w-full bg-transparent text-[10px] font-black uppercase tracking-[0.16em] text-zinc-700 outline-none placeholder:text-zinc-300"
                      placeholder="Search traces..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>
              </header>

              {traces.length === 0 ? (
                <p className="p-7 text-sm text-zinc-400">No mission traces yet.</p>
              ) : (
                <div className="divide-y divide-zinc-50">
                  {traces.map((trace) => {
                    const completed = trace.status === 'delivered';
                    return (
                      <div
                        key={trace.id}
                        className="group flex flex-col items-start justify-between gap-5 p-7 transition-colors hover:bg-zinc-50/50 md:flex-row md:items-center"
                      >
                        <div className="flex items-center gap-5">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-zinc-950 text-[#F5A800] shadow-[0_1px_2px_rgba(0,0,0,0.05),0_10px_20px_-12px_rgba(0,0,0,0.3)]">
                            <ArrowUpRight className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-black uppercase tracking-[-0.01em] text-zinc-950">
                              {trace.vendorName ?? 'Vendor'}
                            </h4>
                            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                              {trace.id.slice(0, 8)} · {new Date(trace.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-8">
                          <div className="text-right">
                            <p className="font-serif italic text-2xl font-black tracking-[-0.04em] text-zinc-950">
                              +{formatNaira(trace.deliveryFee)}
                            </p>
                            <p className={`mt-1 text-[9px] font-black uppercase tracking-[0.2em] ${completed ? 'text-emerald-500' : 'animate-pulse text-[#F5A800]'}`}>
                              {completed ? 'COMPLETED' : 'PENDING'}
                            </p>
                          </div>
                          <Calendar className="h-5 w-5 text-zinc-300" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          </>
        )}
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
