import {
  Award,
  Bell,
  ChevronRight,
  Clock,
  Flame,
  MapPin,
  Star,
  TrendingUp,
  Wallet,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import UserLayout from '../components/UserLayout';

const activities = [
  {
    title: 'Order #ORD-4492',
    desc: 'Mama Titi is preparing your bole',
    meta: 'Arriving in 12 mins',
    status: 'Live',
    icon: Clock,
    tone: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
  {
    title: 'Mama Put Grill',
    desc: 'You rated this vendor 5.0 stars',
    meta: 'Completed today',
    status: 'Completed',
    icon: Star,
    tone: 'bg-[#F5A800]/10 text-[#D88B00] border-[#F5A800]/20',
  },
  {
    title: 'Credits Topped Up',
    desc: 'Added ₦5,000 to your wallet',
    meta: 'Wallet update',
    status: 'Wallet',
    icon: TrendingUp,
    tone: 'bg-blue-50 text-blue-700 border-blue-100',
  },
];

const nearbyPicks = [
  {
    name: 'Spicy Catfish Grill',
    vendor: 'Mama Titi',
    distance: '1.2km',
    price: '₦4,500',
    stock: 'Plenty',
    eta: '15 min',
  },
  {
    name: 'Smokey Plantain Bowl',
    vendor: 'Iya Bose',
    distance: '0.8km',
    price: '₦2,400',
    stock: 'Medium',
    eta: '10 min',
  },
];

const quickStats = [
  { label: 'Credits', value: '₦4,500', icon: Wallet, to: '/wallet' },
  { label: 'Loyalty', value: '820 XP', icon: Award, to: '/leaderboards' },
];

const Dashboard = () => {
  return (
    <UserLayout>
      <div className="dashboard-page mx-auto w-full max-w-6xl space-y-8 pb-20 xl:px-0">
        {/* Header */}
        <header className="flex min-w-0 flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <h1
              className="font-serif italic font-black leading-[0.9] tracking-[-0.04em] text-zinc-950"
              style={{ fontSize: 'clamp(34px, 7vw, 52px)' }}
            >
              Daily <span className="not-italic font-semibold text-[#D88B00]">Heat</span>
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-500">
              Welcome back, <span className="font-bold text-zinc-950">Uche</span> — 12 vendors are
              active around campus today.
            </p>
          </div>

          <div className="flex w-full min-w-0 flex-col gap-3 lg:w-auto lg:flex-row lg:items-center">
            <div className="grid w-full overflow-hidden rounded-[20px] border border-zinc-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.18)] sm:grid-cols-2 lg:w-auto">
              {quickStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Link
                    key={stat.label}
                    to={stat.to}
                    className={`group flex min-w-0 flex-row items-center justify-between gap-4 px-5 py-4 transition hover:bg-zinc-50 sm:flex-col sm:justify-center sm:px-7 sm:text-center ${
                      index === 0 ? 'border-b border-zinc-100 sm:border-b-0 sm:border-r' : ''
                    }`}
                  >
                    <div className="flex min-w-0 items-center gap-3 sm:flex-col sm:gap-1.5">
                      <Icon className="h-4 w-4 shrink-0 text-[#F5A800]" />
                      <span className="truncate text-[9px] font-black uppercase tracking-[0.16em] text-zinc-400">
                        {stat.label}
                      </span>
                    </div>
                    <span className="shrink-0 whitespace-nowrap text-base font-black text-zinc-950 sm:mt-1 sm:text-lg">
                      {stat.value}
                    </span>
                  </Link>
                );
              })}
            </div>

            <button
              type="button"
              className="flex h-14 w-full shrink-0 items-center justify-center rounded-[16px] bg-zinc-950 text-white shadow-[0_10px_24px_-12px_rgba(0,0,0,0.5)] transition-colors duration-200 hover:bg-[#F5A800] active:scale-95 lg:w-14"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Loyalty card */}
        <section className="rounded-[20px] bg-zinc-950 p-6 text-white shadow-[0_1px_1px_rgba(0,0,0,0.1),0_24px_48px_-24px_rgba(0,0,0,0.55)] sm:p-8">
          <div className="flex flex-col gap-8 md:gap-10 lg:flex-row lg:items-center">
            <div className="relative mx-auto shrink-0 lg:mx-0">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#F5A800] bg-zinc-900 sm:h-28 sm:w-28">
                <Flame className="h-10 w-10 text-[#F5A800] sm:h-12 sm:w-12" fill="currentColor" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-[#F5A800] px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-zinc-950 shadow-[0_10px_20px_-8px_rgba(245,168,0,0.6)]">
                Rank 24
              </div>
            </div>

            <div className="min-w-0 flex-1 text-center lg:text-left">
              <h2
                className="font-serif italic font-black leading-[0.95] tracking-[-0.03em] text-white"
                style={{ fontSize: 'clamp(26px, 6vw, 40px)' }}
              >
                “Spice Lord” status is close
              </h2>
              <p className="mx-auto mt-3 max-w-[520px] text-[14px] leading-relaxed text-zinc-400 lg:mx-0">
                Complete 3 more orders this week to unlock{' '}
                <span className="font-semibold text-white">Elite Delivery</span> priority
                reservation perks.
              </p>

              <div className="mt-6 space-y-3">
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[72%] rounded-full bg-[#F5A800]" />
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500">
                  <span>1,440 XP</span>
                  <span>2,000 XP</span>
                </div>
              </div>
            </div>

            <Link
              to="/leaderboards"
              className="press-scale group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-[16px] bg-[#F5A800] px-7 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-[0_14px_28px_-10px_rgba(245,168,0,0.55)] transition-colors duration-200 hover:bg-white hover:text-zinc-950 sm:w-auto lg:self-center"
            >
              View Leaderboard
              <Award className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Activity */}
          <section className="min-w-0 lg:col-span-7">
            <div className="mb-4 flex items-end justify-between gap-4">
              <div className="min-w-0">
                <h3 className="font-serif italic text-2xl font-bold tracking-[-0.03em] text-zinc-950">
                  Activity
                </h3>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                  Live updates
                </p>
              </div>
              <Link
                to="/orders"
                className="shrink-0 rounded-full border border-zinc-200 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition hover:border-[#F5A800]/40 hover:text-[#D88B00]"
              >
                View all
              </Link>
            </div>

            <div className="space-y-3">
              {activities.map((activity) => {
                const Icon = activity.icon;
                return (
                  <article
                    key={activity.title}
                    className="group rounded-[16px] border border-zinc-100 bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_10px_24px_-18px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F5A800]/30 sm:p-5"
                  >
                    <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex min-w-0 items-start gap-4 sm:items-center">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#F5A800]/10 text-[#F5A800]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="truncate font-black tracking-[-0.02em] text-zinc-950">
                            {activity.title}
                          </h4>
                          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-zinc-500">
                            {activity.desc}
                          </p>
                          <p className="mt-1.5 truncate text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                            {activity.meta}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`inline-flex w-fit shrink-0 rounded-full border px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] ${activity.tone}`}
                      >
                        {activity.status}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Heat Map / Nearby Picks */}
          <section className="min-w-0 lg:col-span-5">
            <div className="mb-4 flex items-end justify-between gap-4">
              <div className="min-w-0">
                <h3 className="font-serif italic text-2xl font-bold tracking-[-0.03em] text-zinc-950">
                  Heat Map
                </h3>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                  Nearby picks
                </p>
              </div>
              <Link
                to="/explore"
                className="shrink-0 rounded-full border border-zinc-200 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition hover:border-[#F5A800]/40 hover:text-[#D88B00]"
              >
                Explore
              </Link>
            </div>

            <div className="rounded-[20px] bg-zinc-950 p-5 text-white shadow-[0_1px_1px_rgba(0,0,0,0.1),0_24px_48px_-24px_rgba(0,0,0,0.55)] sm:p-6">
              {/* Mini map visual */}
              <div className="relative mb-5 h-36 overflow-hidden rounded-[16px] bg-white/5 sm:h-40">
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    background:
                      'radial-gradient(circle at 22% 30%, rgba(245,168,0,0.38), transparent 18%), radial-gradient(circle at 72% 55%, rgba(245,168,0,0.28), transparent 20%), radial-gradient(circle at 48% 78%, rgba(34,197,94,0.18), transparent 18%)',
                  }}
                />
                <div className="absolute left-[22%] top-[30%] h-4 w-4 rounded-full bg-[#F5A800]">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#F5A800]/60" />
                </div>
                <div className="absolute left-[72%] top-[55%] h-4 w-4 rounded-full bg-[#F5A800]" />
                <div className="absolute left-[48%] top-[78%] h-4 w-4 rounded-full bg-emerald-400" />
                <div className="absolute bottom-3 left-3 right-3 sm:right-auto">
                  <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-xl">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-[#F5A800]" />
                    <span className="truncate text-[10px] font-black uppercase tracking-[0.16em] text-white/65">
                      3 hot spots nearby
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {nearbyPicks.map((item, index) => (
                  <article key={item.name} className="space-y-4">
                    <div className="min-w-0 rounded-[16px] bg-white/[0.06] p-4 transition-colors duration-200 hover:bg-white/[0.09]">
                      <div className="mb-4 flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <h4 className="truncate text-base font-black tracking-[-0.02em] text-white">
                            {item.name}
                          </h4>
                          <p className="mt-1 truncate text-sm text-white/45">{item.vendor}</p>
                        </div>
                        <span className="shrink-0 text-sm font-black text-[#F5A800]">
                          {item.price}
                        </span>
                      </div>

                      <div className="mb-4 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-white/55">
                          <MapPin className="h-3 w-3 shrink-0 text-[#F5A800]" />
                          {item.distance}
                        </span>
                        <span className="rounded-full bg-emerald-400/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-emerald-200">
                          {item.stock}
                        </span>
                        <span className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-white/55">
                          {item.eta}
                        </span>
                      </div>

                      <button
                        type="button"
                        className="press-scale group inline-flex w-full items-center justify-center gap-2 rounded-[14px] bg-[#F5A800] px-5 py-3.5 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_-10px_rgba(245,168,0,0.55)] transition-colors duration-200 hover:bg-white hover:text-zinc-950"
                      >
                        Reserve now
                        <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    </div>
                    {index < nearbyPicks.length - 1 && <div className="h-px bg-white/10" />}
                  </article>
                ))}
              </div>

              <Link
                to="/explore"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-[14px] bg-white/[0.04] px-5 py-3.5 text-center text-[11px] font-black uppercase tracking-[0.16em] text-white/45 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                Explore all vendors
                <ChevronRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </section>
        </div>
      </div>

      <style>{`
        .dashboard-page .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </UserLayout>
  );
};

export default Dashboard;
