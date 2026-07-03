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
      <div className="agent-hub mx-auto w-full max-w-6xl space-y-10 pb-20 xl:px-0">

        {/* Header */}
        <header className="fade-up flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <h1
              className="font-serif italic font-black leading-[0.9] tracking-[-0.04em] text-zinc-950"
              style={{ fontSize: 'clamp(34px, 7vw, 52px)' }}
            >
              Velocity <span className="not-italic font-semibold text-[#D88B00]">Hub</span>
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-500">
              Active deployment in <span className="font-bold text-zinc-950">Lekki-VI Sector</span>
            </p>
          </div>

          <div className="flex items-center gap-2.5 rounded-[18px] border border-blue-100 bg-blue-50 px-5 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_8px_20px_-12px_rgba(37,99,235,0.25)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-700">
              Signal: Active
            </span>
          </div>
        </header>

        {/* Analytics cards */}
        <section className="stagger-in grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { label: 'Weekly Earnings',  value: '₦42,500', icon: TrendingUp, color: 'text-emerald-600', shadow: 'rgba(16,185,129,0.18)' },
            { label: 'Signal Success',   value: '98.4%',   icon: Target,     color: 'text-[#F5A800]',   shadow: 'rgba(245,168,0,0.2)'   },
            { label: 'Active Missions',  value: '124',     icon: Zap,        color: 'text-amber-500',   shadow: 'rgba(245,158,11,0.18)' },
            { label: 'Hub Ranking',      value: '#12',     icon: Star,       color: 'text-blue-500',    shadow: 'rgba(59,130,246,0.18)' },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group rounded-[20px] border border-zinc-100 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.22)]"
              >
                <div className={`mb-5 flex h-10 w-10 items-center justify-center rounded-[13px] bg-zinc-50 ${stat.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  {stat.label}
                </p>
                <h4 className="font-serif italic mt-1 text-3xl font-black tracking-[-0.03em] text-zinc-950">
                  {stat.value}
                </h4>
              </div>
            );
          })}
        </section>

        {/* Map */}
        <section className="fade-up h-[420px] w-full overflow-hidden rounded-[20px] border border-zinc-100 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_28px_54px_-28px_rgba(0,0,0,0.3)]" style={{ '--i': 3 }}>
          <MapComponent center={[3.3792, 6.5244]} zoom={13} markers={signalMarkers} />
        </section>

        {/* Signals + Earnings grid */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">

          {/* Active Signals (7 cols) */}
          <div className="min-w-0 lg:col-span-7 space-y-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="font-serif italic text-2xl font-bold tracking-[-0.03em] text-zinc-950">
                  Active Signals
                </h3>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                  Available to grab
                </p>
              </div>
              <button
                type="button"
                className="press-scale flex shrink-0 items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:border-[#F5A800]/40 hover:text-[#D88B00]"
              >
                <Radio className="h-3.5 w-3.5" /> Refresh Pool
              </button>
            </div>

            <div className="stagger-in space-y-4">
              {[
                { id: '#ORD-9012', vendor: 'Smoky Delta Grill', dist: '0.8km', fee: '₦1,200', items: '3 Items' },
                { id: '#ORD-9015', vendor: 'Mama T Bole Hub',   dist: '1.4km', fee: '₦1,500', items: '5 Items' },
              ].map((order) => (
                <article
                  key={order.id}
                  className="group rounded-[20px] border border-zinc-100 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F5A800]/25 hover:shadow-[0_20px_40px_-20px_rgba(245,168,0,0.2)]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-zinc-950 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105">
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
                    <div className="flex flex-col items-end gap-1.5 text-right">
                      <span className="rounded-full bg-[#F5A800]/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-[#D88B00]">
                        Unclaimed
                      </span>
                      <span className="font-serif italic text-2xl font-black tracking-[-0.03em] text-zinc-950">
                        {order.fee}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      className="press-scale flex items-center justify-center gap-2 rounded-[14px] bg-zinc-950 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_-12px_rgba(0,0,0,0.5)] transition-colors duration-200 hover:bg-[#F5A800]"
                    >
                      Grab Mission <Navigation className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      className="rounded-[14px] border border-zinc-200 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-950"
                    >
                      Mission Details
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Earnings + Recent (5 cols) */}
          <div className="min-w-0 lg:col-span-5 space-y-6">

            {/* Earnings — dark card */}
            <section className="rounded-[20px] bg-zinc-950 p-6 text-white shadow-[0_1px_1px_rgba(0,0,0,0.1),0_24px_48px_-24px_rgba(0,0,0,0.55)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-white/10">
                    <Wallet className="h-5 w-5 text-[#F5A800]" />
                  </div>
                  <h4 className="font-black uppercase tracking-[-0.02em] text-white">
                    My Earnings
                  </h4>
                </div>
                <Link
                  to="/agent/earnings"
                  className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-white/5 text-[#F5A800] transition hover:bg-[#F5A800] hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                      Owed to me
                    </p>
                    <p className="font-serif italic mt-1 text-4xl font-black tracking-[-0.04em] text-white">
                      ₦8,450
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                      3 Vendors
                    </p>
                    <p className="mt-1 flex items-center justify-end gap-1 text-xs font-bold text-emerald-400">
                      <CheckCircle className="h-3 w-3" /> All Validated
                    </p>
                  </div>
                </div>

                <div className="space-y-3 rounded-[16px] bg-white/[0.05] p-4">
                  {[
                    { vendor: 'Smoky Delta Grill', amt: '₦4,500', status: 'Pending Payout' },
                    { vendor: 'Mama T Bole Hub',   amt: '₦3,950', status: 'Processing'    },
                  ].map((v) => (
                    <div key={v.vendor} className="flex items-center justify-between text-xs">
                      <div>
                        <p className="font-black uppercase tracking-[-0.01em] text-white">
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
                className="press-scale mt-6 block w-full rounded-[16px] bg-white/10 py-3.5 text-center text-[10px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-white/20"
              >
                View Payout History
              </Link>
            </section>

            {/* Recent missions */}
            <section className="rounded-[20px] border border-zinc-100 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.18)]">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-zinc-50">
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
              <div className="space-y-2.5">
                {[
                  { id: '#ORD-8922', time: '1h ago',   status: 'Completed' },
                  { id: '#ORD-8910', time: 'Own pickup', status: 'Completed' },
                ].map((m) => (
                  <div
                    key={m.id}
                    className="flex items-center justify-between rounded-[14px] border border-zinc-100 p-3.5"
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
