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
  Zap,
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
  {
    label: 'Credits',
    value: '₦4,500',
    icon: Wallet,
    to: '/wallet',
  },
  {
    label: 'Loyalty',
    value: '820 XP',
    icon: Award,
  },
  {
    label: 'Signals',
    value: '12',
    icon: Zap,
  },
];

const Dashboard = () => {
  return (
    <UserLayout>
      <div className="dashboard-page relative isolate mx-auto w-full max-w-6xl overflow-hidden px-4 pb-20 pt-5 font-['DM_Sans'] selection:bg-[#F5A800]/20 sm:px-6 sm:pt-6 lg:px-8 xl:px-0">
        {/* Warm dashboard background */}
        <div
          className="pointer-events-none absolute inset-0 -z-20"
          style={{
            background: `
              radial-gradient(circle at 12% 8%, rgba(245, 168, 0, 0.13), transparent 30%),
              radial-gradient(circle at 88% 10%, rgba(255, 204, 51, 0.16), transparent 28%),
              linear-gradient(180deg, #FFFDF8 0%, #FFF9EA 42%, #FFFFFF 100%)
            `,
          }}
        />

        <div className="pointer-events-none absolute -left-44 top-28 -z-10 h-[360px] w-[360px] rounded-full bg-[#F5A800]/10 blur-[110px] sm:h-[420px] sm:w-[420px]" />
        <div className="pointer-events-none absolute -right-44 bottom-24 -z-10 h-[400px] w-[400px] rounded-full bg-zinc-950/5 blur-[120px] sm:h-[500px] sm:w-[500px]" />

        {/* Grain */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='dashboardNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23dashboardNoise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="space-y-9 sm:space-y-10 lg:space-y-12">
          {/* Header */}
          <header className="flex min-w-0 flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#F5A800]" />
                <span className="truncate text-[10px] font-black uppercase tracking-[0.22em] text-[#D88B00]">
                  Student dashboard
                </span>
              </div>

              <h1
                className="font-serif italic font-black leading-[0.88] tracking-[-0.065em] text-zinc-950"
                style={{ fontSize: 'clamp(48px, 13vw, 88px)' }}
              >
                Daily{' '}
                <span className="bg-gradient-to-r from-[#F5A800] via-[#FFB800] to-[#FF7A00] bg-clip-text not-italic font-semibold text-transparent">
                  Heat.
                </span>
              </h1>

              <p className="mt-5 max-w-[650px] text-[15px] leading-relaxed text-zinc-500 sm:text-[17px]">
                Welcome back,{' '}
                <span className="font-bold text-zinc-950">Uche</span> — you have{' '}
                <span className="font-bold text-zinc-950">
                  12 active signals
                </span>{' '}
                around campus today.
              </p>
            </div>

            <div className="flex w-full min-w-0 flex-col gap-3 lg:w-auto lg:flex-row lg:items-center">
              <div className="grid w-full overflow-hidden rounded-[28px] border border-white/70 bg-white/75 shadow-[0_24px_70px_-50px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:grid-cols-3 lg:w-auto">
                {quickStats.map((stat, index) => {
                  const Icon = stat.icon;

                  const content = (
                    <div className="group flex min-w-0 flex-row items-center justify-between gap-4 px-5 py-4 transition hover:bg-white sm:flex-col sm:justify-center sm:px-6 sm:text-center">
                      <div className="flex min-w-0 items-center gap-3 sm:flex-col sm:gap-1">
                        <Icon className="h-4 w-4 shrink-0 text-[#F5A800]" />
                        <span className="truncate text-[9px] font-black uppercase tracking-[0.16em] text-zinc-400">
                          {stat.label}
                        </span>
                      </div>

                      <span className="shrink-0 whitespace-nowrap text-base font-black text-zinc-950 sm:mt-1 sm:text-lg">
                        {stat.value}
                      </span>
                    </div>
                  );

                  const borderClass =
                    index !== quickStats.length - 1
                      ? 'border-b border-zinc-100 sm:border-b-0 sm:border-r'
                      : '';

                  return stat.to ? (
                    <Link key={stat.label} to={stat.to} className={borderClass}>
                      {content}
                    </Link>
                  ) : (
                    <div key={stat.label} className={borderClass}>
                      {content}
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                className="flex h-14 w-full shrink-0 items-center justify-center rounded-[22px] bg-zinc-950 text-white shadow-[0_18px_45px_-28px_rgba(0,0,0,0.75)] transition-all duration-300 hover:bg-[#F5A800] active:scale-95 lg:w-14"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5" />
              </button>
            </div>
          </header>

          {/* Reward Hero */}
          <section className="relative">
            <div className="absolute -inset-1 rounded-[34px] bg-gradient-to-r from-[#F5A800]/25 via-transparent to-[#F5A800]/10 blur-2xl sm:rounded-[42px]" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950 p-5 text-white shadow-[0_40px_110px_-55px_rgba(0,0,0,0.75)] sm:rounded-[40px] sm:p-8 md:p-10 lg:p-12">
              <div className="pointer-events-none absolute -right-20 -top-24 h-[300px] w-[300px] rounded-full bg-[#F5A800]/20 blur-[90px] sm:h-[380px] sm:w-[380px]" />
              <div className="pointer-events-none absolute -bottom-28 left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-white/5 blur-[90px] sm:h-[340px] sm:w-[340px]" />

              <div
                className="pointer-events-none absolute inset-0 opacity-[0.055] mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='rewardNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23rewardNoise)'/%3E%3C/svg%3E")`,
                }}
              />

              <div className="relative z-10 flex flex-col gap-8 md:gap-10 lg:flex-row lg:items-center">
                <div className="relative mx-auto shrink-0 lg:mx-0">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2.5 backdrop-blur-xl sm:h-36 sm:w-36 sm:p-3 md:h-40 md:w-40">
                    <div className="flex h-full w-full items-center justify-center rounded-full border-2 border-[#F5A800] bg-zinc-900 shadow-[inset_0_0_40px_rgba(245,168,0,0.12)]">
                      <Flame
                        className="h-11 w-11 text-[#F5A800] sm:h-14 sm:w-14 md:h-16 md:w-16"
                        fill="currentColor"
                      />
                    </div>
                  </div>

                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-[#F5A800] px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-zinc-950 shadow-[0_18px_45px_-24px_rgba(245,168,0,0.9)] sm:px-5 sm:py-2 sm:text-[10px]">
                    Rank 24
                  </div>
                </div>

                <div className="min-w-0 flex-1 text-center lg:text-left">
                  <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 backdrop-blur-xl">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#F5A800]" />
                    <span className="truncate text-[10px] font-black uppercase tracking-[0.18em] text-white/55">
                      Loyalty progress
                    </span>
                  </div>

                  <h2
                    className="font-serif italic font-black leading-[0.95] tracking-[-0.045em]"
                    style={{ fontSize: 'clamp(32px, 9vw, 58px)' }}
                  >
                    The “Spice Lord”
                    <br />
                    is close.
                  </h2>

                  <p className="mx-auto mt-5 max-w-[520px] text-[15px] leading-relaxed text-zinc-400 sm:text-[16px] lg:mx-0">
                    Complete 3 more missions this week to unlock{' '}
                    <span className="font-semibold text-white">
                      Elite Delivery
                    </span>{' '}
                    rewards and priority reservation perks.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="h-3 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[#F5A800] to-[#FF7A00] shadow-[0_0_30px_rgba(245,168,0,0.45)]" />
                    </div>

                    <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.16em] text-white/35">
                      <span>1,440 XP</span>
                      <span>2,000 XP</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/rewards"
                  className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-[24px] bg-[#F5A800] px-7 py-5 text-[12px] font-black uppercase tracking-[0.16em] text-white shadow-[0_24px_60px_-20px_rgba(245,168,0,0.65)] transition-all duration-300 hover:bg-white hover:text-zinc-950 active:scale-95 sm:w-auto lg:self-center"
                >
                  Reap Rewards
                  <Award className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
                </Link>
              </div>
            </div>
          </section>

          {/* Main Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Activity */}
            <section className="min-w-0 lg:col-span-7">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-serif italic text-3xl font-bold tracking-[-0.04em] text-zinc-950">
                    Activity
                  </h3>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                    Live updates
                  </p>
                </div>

                <Link
                  to="/orders"
                  className="shrink-0 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500 transition-all duration-300 hover:border-[#F5A800]/40 hover:text-[#D88B00]"
                >
                  View all
                </Link>
              </div>

              <div className="space-y-4">
                {activities.map((activity) => {
                  const Icon = activity.icon;

                  return (
                    <article
                      key={activity.title}
                      className="group relative min-w-0 overflow-hidden rounded-[26px] border border-white/70 bg-white/75 p-4 shadow-[0_24px_70px_-54px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-[#F5A800]/40 hover:bg-white hover:shadow-[0_34px_90px_-58px_rgba(0,0,0,0.55)] sm:rounded-[30px] sm:p-6"
                    >
                      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#F5A800]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="relative z-10 flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex min-w-0 items-start gap-4 sm:items-center sm:gap-5">
                          <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[18px] border border-[#F5A800]/20 bg-[#F5A800]/10 text-[#F5A800] sm:h-14 sm:w-14 sm:rounded-[20px]">
                            <Icon className="h-5 w-5" />
                          </div>

                          <div className="min-w-0">
                            <h4 className="truncate font-black tracking-[-0.02em] text-zinc-950">
                              {activity.title}
                            </h4>

                            <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-zinc-500">
                              {activity.desc}
                            </p>

                            <p className="mt-2 truncate text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
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
              <div className="mb-6 flex items-end justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-serif italic text-3xl font-bold tracking-[-0.04em] text-zinc-950">
                    Heat Map
                  </h3>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                    Nearby picks
                  </p>
                </div>

                <Link
                  to="/explore"
                  className="shrink-0 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500 transition-all duration-300 hover:border-[#F5A800]/40 hover:text-[#D88B00]"
                >
                  Explore
                </Link>
              </div>

              <div className="relative min-w-0 overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950 p-5 text-white shadow-[0_40px_110px_-60px_rgba(0,0,0,0.75)] sm:rounded-[36px] sm:p-7">
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F5A800]/20 blur-[90px]" />
                <div className="pointer-events-none absolute -bottom-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-[90px]" />

                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.055] mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='heatMapNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23heatMapNoise)'/%3E%3C/svg%3E")`,
                  }}
                />

                <div className="relative z-10 min-w-0">
                  {/* Mini map visual */}
                  <div className="relative mb-6 h-40 overflow-hidden rounded-[26px] border border-white/10 bg-white/5 sm:mb-7 sm:h-44 sm:rounded-[28px]">
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{
                        background:
                          'radial-gradient(circle at 22% 30%, rgba(245,168,0,0.38), transparent 18%), radial-gradient(circle at 72% 55%, rgba(245,168,0,0.28), transparent 20%), radial-gradient(circle at 48% 78%, rgba(34,197,94,0.18), transparent 18%), linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
                      }}
                    />

                    <div className="absolute left-[22%] top-[30%] h-4 w-4 rounded-full bg-[#F5A800] shadow-[0_0_0_10px_rgba(245,168,0,0.16)]">
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#F5A800]/60" />
                    </div>

                    <div className="absolute left-[72%] top-[55%] h-4 w-4 rounded-full bg-[#F5A800] shadow-[0_0_0_10px_rgba(245,168,0,0.16)]" />

                    <div className="absolute left-[48%] top-[78%] h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_0_10px_rgba(52,211,153,0.14)]" />

                    <div className="absolute bottom-4 left-4 right-4 sm:right-auto">
                      <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl">
                        <MapPin className="h-3.5 w-3.5 shrink-0 text-[#F5A800]" />
                        <span className="truncate text-[10px] font-black uppercase tracking-[0.16em] text-white/65">
                          3 hot spots nearby
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5">
                    {nearbyPicks.map((item, index) => (
                      <article key={item.name} className="space-y-5">
                        <div className="min-w-0 rounded-[26px] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.09] sm:rounded-[28px] sm:p-5">
                          <div className="mb-5 flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div className="min-w-0">
                              <h4 className="truncate text-base font-black tracking-[-0.03em] text-white sm:text-lg">
                                {item.name}
                              </h4>

                              <p className="mt-1 truncate text-sm text-white/45">
                                {item.vendor}
                              </p>
                            </div>

                            <span className="shrink-0 text-sm font-black text-[#F5A800]">
                              {item.price}
                            </span>
                          </div>

                          <div className="mb-5 flex flex-wrap gap-2">
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
                            className="group inline-flex w-full items-center justify-center gap-2 rounded-[20px] bg-[#F5A800] px-5 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-[0_24px_60px_-24px_rgba(245,168,0,0.75)] transition-all duration-300 hover:bg-white hover:text-zinc-950 active:scale-95"
                          >
                            Reserve now
                            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </button>
                        </div>

                        {index < nearbyPicks.length - 1 && (
                          <div className="h-px bg-white/10" />
                        )}
                      </article>
                    ))}
                  </div>

                  <Link
                    to="/explore"
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-4 text-center text-[11px] font-black uppercase tracking-[0.16em] text-white/45 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    Explore all vendors
                    <ChevronRight className="h-4 w-4 shrink-0" />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

          .dashboard-page {
            font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          }

          .font-serif {
            font-family: 'Playfair Display', serif;
          }

          @media (prefers-reduced-motion: reduce) {
            .dashboard-page * {
              animation-duration: 0.001ms !important;
              animation-iteration-count: 1 !important;
              scroll-behavior: auto !important;
              transition-duration: 0.001ms !important;
            }
          }
        `}</style>
      </div>
    </UserLayout>
  );
};

export default Dashboard;
