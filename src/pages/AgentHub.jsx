import {
  ArrowUpRight,
  CheckCircle,
  Clock,
  Flame,
  MapPin,
  Navigation,
  Package,
  Radio,
  Star,
  Target,
  TrendingUp,
  Wallet,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AgentLayout from '../components/AgentLayout';
import MapComponent from '../components/MapComponent';

const AgentHub = () => {
  const signalMarkers = [
    { title: 'Smoky Delta Grill',  lngLat: [3.3792, 6.5244], desc: 'Active Signal: #ORD-9012', color: '#FF4D00' },
    { title: 'Mama T Bole Hub',    lngLat: [3.3850, 6.5300], desc: 'Active Signal: #ORD-9015', color: '#FF4D00' },
  ];

  return (
    <AgentLayout>
      <div className="agent-hub relative isolate mx-auto w-full max-w-6xl space-y-10 pb-20 xl:px-0">

        {/* Ambient page layer */}
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(circle at 8% 5%, rgba(245, 168, 0, 0.10), transparent 28%),
              radial-gradient(circle at 92% 8%, rgba(245, 168, 0, 0.07), transparent 25%)
            `,
          }}
        />

        {/* Header */}
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#F5A800]" />
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#D88B00]">
                Agent dashboard
              </span>
            </div>
            <h1
              className="font-serif italic font-black leading-[0.9] tracking-[-0.05em] text-zinc-950"
              style={{ fontSize: 'clamp(38px, 9vw, 64px)' }}
            >
              Velocity{' '}
              <span className="bg-gradient-to-r from-[#F5A800] via-[#FFB800] to-[#FF7A00] bg-clip-text not-italic font-semibold text-transparent">
                Hub.
              </span>
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-500">
              Active deployment in{' '}
              <span className="font-bold text-zinc-950">Lekki-VI Sector</span>
            </p>
          </div>

          <div className="flex items-center overflow-hidden rounded-[22px] border border-zinc-200/80 bg-white/80 p-1.5 shadow-[0_16px_45px_-36px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="flex items-center gap-2.5 rounded-[18px] bg-emerald-50 px-5 py-2.5 border border-emerald-100">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700">
                Signal: Active
              </span>
            </div>
          </div>
        </header>

        {/* Analytics cards */}
        <section className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {[
            { label: 'Weekly Earnings',  value: '₦42,500', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-50',        border: 'border-emerald-100' },
            { label: 'Signal Success',   value: '98.4%',   icon: Target,     color: 'text-[#F5A800]',   bg: 'bg-[#F5A800]/[0.08]',  border: 'border-[#F5A800]/20' },
            { label: 'Active Missions',  value: '124',      icon: Zap,        color: 'text-yellow-500', bg: 'bg-yellow-50',         border: 'border-yellow-100' },
            { label: 'Hub Ranking',      value: '#12',      icon: Star,       color: 'text-blue-500',   bg: 'bg-blue-50',           border: 'border-blue-100' },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`group relative overflow-hidden rounded-[24px] border ${stat.border} ${stat.bg} p-6 shadow-[0_16px_42px_-30px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_60px_-34px_rgba(0,0,0,0.35)]`}
              >
                <div className="mb-5 flex items-start justify-between">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-[13px] bg-white shadow-sm ${stat.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.18em] text-zinc-400">
                    Live
                  </span>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                  {stat.label}
                </p>
                <h4 className="font-serif italic mt-1 text-3xl font-black tracking-[-0.04em] text-zinc-950">
                  {stat.value}
                </h4>
              </div>
            );
          })}
        </section>

        {/* Map */}
        <section className="h-[480px] w-full overflow-hidden rounded-[28px] border border-zinc-100 shadow-[0_32px_80px_-48px_rgba(0,0,0,0.45)]">
          <MapComponent center={[3.3792, 6.5244]} zoom={13} markers={signalMarkers} />
        </section>

        {/* Signals + Earnings grid */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">

          {/* Active Signals (7 cols) */}
          <div className="min-w-0 lg:col-span-7 space-y-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="font-serif italic text-2xl font-bold tracking-[-0.04em] text-zinc-950">
                  Active Signals
                </h3>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                  Available to grab
                </p>
              </div>
              <button
                type="button"
                className="flex items-center gap-2 shrink-0 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500 transition hover:border-[#F5A800]/40 hover:text-[#D88B00]"
              >
                <Radio className="h-3.5 w-3.5" /> Refresh Pool
              </button>
            </div>

            {[
              { id: '#ORD-9012', vendor: 'Smoky Delta Grill', dist: '0.8km', fee: '₦1,200', items: '3 Items' },
              { id: '#ORD-9015', vendor: 'Mama T Bole Hub',   dist: '1.4km', fee: '₦1,500', items: '5 Items' },
            ].map((order) => (
              <article
                key={order.id}
                className="group relative overflow-hidden rounded-[26px] border border-zinc-100 bg-white p-6 shadow-[0_20px_54px_-36px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1 hover:border-[#F5A800]/25 hover:shadow-[0_30px_70px_-40px_rgba(0,0,0,0.4)]"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#F5A800]/[0.06] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute right-5 top-5 flex flex-col items-end gap-1.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F5A800]/20 bg-[#F5A800]/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-[#D88B00]">
                    Unclaimed
                  </span>
                  <span className="font-serif italic text-2xl font-black tracking-[-0.04em] text-zinc-950">
                    {order.fee}
                  </span>
                </div>

                <div className="relative z-10 mb-6 flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-zinc-950 shadow-[0_14px_36px_-18px_rgba(0,0,0,0.65)] transition-transform duration-500 group-hover:scale-105">
                    <Flame className="h-7 w-7 fill-current text-[#F5A800]" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="truncate font-black uppercase tracking-[-0.02em] text-zinc-950">
                      {order.vendor}
                    </h4>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-zinc-400">
                      <MapPin className="h-3 w-3 shrink-0 text-[#F5A800]" />
                      {order.dist} · {order.items}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-[18px] bg-zinc-950 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_12px_30px_-14px_rgba(0,0,0,0.55)] transition-all duration-300 hover:bg-[#F5A800] active:scale-95"
                  >
                    Grab Mission <Navigation className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    className="rounded-[18px] border border-zinc-200 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-950"
                  >
                    Mission Details
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Earnings + Recent (5 cols) */}
          <div className="min-w-0 lg:col-span-5 space-y-7">

            {/* Earnings — dark card */}
            <section className="relative overflow-hidden rounded-[26px] bg-zinc-950 p-7 text-white shadow-[0_40px_100px_-55px_rgba(0,0,0,0.75)]">
              <div className="pointer-events-none absolute -right-12 -top-12 h-52 w-52 rounded-full bg-[#F5A800]/12 blur-[70px]" />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
              />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[16px] border border-white/10 bg-white/10">
                      <Wallet className="h-5 w-5 text-[#F5A800]" />
                    </div>
                    <h4 className="font-black uppercase tracking-[-0.02em] text-white">
                      My Earnings
                    </h4>
                  </div>
                  <Link
                    to="/agent/earnings"
                    className="flex h-9 w-9 items-center justify-center rounded-[12px] border border-white/10 bg-white/5 text-[#F5A800] transition hover:bg-[#F5A800] hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="space-y-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                        Owed to me
                      </p>
                      <p className="font-serif italic mt-1 text-5xl font-black tracking-[-0.05em] text-white">
                        ₦8,450
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                        3 Vendors
                      </p>
                      <p className="mt-1 flex items-center justify-end gap-1 text-xs font-bold text-emerald-500">
                        <CheckCircle className="h-3 w-3" /> All Validated
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 rounded-[20px] border border-white/[0.06] bg-white/[0.05] p-5">
                    {[
                      { vendor: 'Smoky Delta Grill', amt: '₦4,500', status: 'Pending Payout' },
                      { vendor: 'Mama T Bole Hub',   amt: '₦3,950', status: 'Processing'    },
                    ].map((v) => (
                      <div key={v.vendor} className="group flex cursor-pointer items-center justify-between">
                        <div>
                          <p className="text-xs font-black uppercase tracking-[-0.01em] text-white transition group-hover:text-[#F5A800]">
                            {v.vendor}
                          </p>
                          <p className="mt-0.5 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">
                            {v.status}
                          </p>
                        </div>
                        <span className="text-sm font-black text-white">{v.amt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/agent/earnings"
                  className="block w-full rounded-[18px] border border-white/10 bg-white/10 py-3.5 text-center text-[10px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-white/20"
                >
                  View Payout History
                </Link>
              </div>
            </section>

            {/* Recent missions */}
            <section className="rounded-[26px] border border-zinc-100 bg-white/80 p-7 shadow-[0_20px_54px_-36px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-zinc-200 bg-white shadow-sm">
                  <Package className="h-5 w-5 text-zinc-950" />
                </div>
                <div>
                  <h4 className="font-serif italic text-lg font-bold tracking-[-0.03em] text-zinc-950">
                    Recent Missions
                  </h4>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                    Completed today
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { id: '#ORD-8922', time: '1h ago',   status: 'Completed' },
                  { id: '#ORD-8910', time: 'Own pickup', status: 'Completed' },
                ].map((m) => (
                  <div
                    key={m.id}
                    className="flex items-center justify-between rounded-[18px] border border-zinc-100 bg-white p-4 transition hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)]"
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-zinc-300" />
                      <span className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                        {m.time}
                      </span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[-0.01em] text-zinc-950">
                      {m.id}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <style>{`
        .agent-hub .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </AgentLayout>
  );
};

export default AgentHub;
