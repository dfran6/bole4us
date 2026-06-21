import { ArrowRight, CheckCircle, DollarSign, Eye, Flame, Package, TrendingUp, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import VendorLayout from '../components/VendorLayout';

const VendorHub = () => {
  return (
    <VendorLayout>
      <div className="vendor-hub relative isolate mx-auto w-full max-w-6xl space-y-10 pb-20 xl:px-0">

        {/* Page-level ambient layer */}
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
                Vendor dashboard
              </span>
            </div>
            <h1
              className="font-serif italic font-black leading-[0.9] tracking-[-0.05em] text-zinc-950"
              style={{ fontSize: 'clamp(38px, 9vw, 64px)' }}
            >
              Operations{' '}
              <span className="bg-gradient-to-r from-[#F5A800] via-[#FFB800] to-[#FF7A00] bg-clip-text not-italic font-semibold text-transparent">
                Center.
              </span>
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-500">
              Live updates for{' '}
              <span className="font-bold text-zinc-950">The Urban Heat</span>
            </p>
          </div>

          {/* Open/Closed toggle */}
          <div className="flex w-full shrink-0 items-center overflow-hidden rounded-[22px] border border-zinc-200/80 bg-white/80 p-1.5 shadow-[0_16px_45px_-36px_rgba(0,0,0,0.35)] backdrop-blur-xl md:w-auto">
            <button
              type="button"
              className="flex items-center gap-2 rounded-[18px] bg-emerald-500 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_10px_30px_-12px_rgba(34,197,94,0.65)]"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
              Open For Heat
            </button>
            <button
              type="button"
              className="px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400 transition hover:text-zinc-700"
            >
              Closed
            </button>
          </div>
        </header>

        {/* Stats grid — 3 bento cards */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* Earnings */}
          <div className="group relative overflow-hidden rounded-[28px] border border-zinc-100 bg-white p-7 shadow-[0_24px_60px_-42px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_34px_80px_-46px_rgba(0,0,0,0.45)]">
            <p className="mb-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
              Today's Revenue
            </p>
            <h3 className="font-serif italic text-4xl font-black tracking-[-0.04em] text-zinc-950">
              ₦142,500
            </h3>
            <p className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
              <TrendingUp className="h-3.5 w-3.5" />
              +12.5% from yesterday
            </p>
            <div className="pointer-events-none absolute -right-8 -bottom-8 opacity-[0.04] transition-opacity duration-500 group-hover:opacity-[0.07]">
              <TrendingUp className="h-40 w-40 text-zinc-950" />
            </div>
          </div>

          {/* Active sessions — dark card */}
          <div className="group relative overflow-hidden rounded-[28px] bg-zinc-950 p-7 shadow-[0_32px_80px_-48px_rgba(0,0,0,0.65)] transition-all duration-500 hover:-translate-y-1">
            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#F5A800]/15 blur-[70px]" />
            <div className="relative z-10">
              <p className="mb-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                Active Sessions
              </p>
              <h3 className="font-serif italic text-4xl font-black tracking-[-0.04em] text-white">
                08
              </h3>
              <p className="mt-3 text-[11px] font-black uppercase tracking-[0.16em] text-[#F5A800]">
                4 orders pending prep
              </p>
            </div>
            <div className="pointer-events-none absolute -right-8 -bottom-8 opacity-10 transition-opacity duration-500 group-hover:opacity-20">
              <Package className="h-40 w-40 text-white" />
            </div>
          </div>

          {/* Heat level — brand red card */}
          <div className="group relative overflow-hidden rounded-[28px] bg-[#bc0100] p-7 shadow-[0_32px_80px_-48px_rgba(188,1,0,0.45)] transition-all duration-500 hover:-translate-y-1">
            <div className="relative z-10">
              <p className="mb-5 text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                Grill Heat Level
              </p>
              <h3 className="font-serif italic text-4xl font-black tracking-[-0.04em] text-white">
                4.9 / 5.0
              </h3>
              <p className="mt-3 text-[11px] font-medium text-white/75">
                Customer satisfaction is peak
              </p>
            </div>
            <div className="pointer-events-none absolute -right-8 -bottom-8 opacity-20 transition-transform duration-700 group-hover:rotate-12">
              <Flame className="h-40 w-40 text-white" fill="currentColor" />
            </div>
          </div>
        </section>

        {/* Main grid */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">

          {/* Incoming orders (7 cols) */}
          <section className="min-w-0 lg:col-span-7 space-y-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="font-serif italic text-2xl font-bold tracking-[-0.04em] text-zinc-950">
                  Incoming Heat
                </h3>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                  Live orders
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F5A800]/20 bg-[#F5A800]/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-[#D88B00]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F5A800]" />
                Live
              </span>
            </div>

            {/* Order — payment verification needed */}
            <article className="group relative overflow-hidden rounded-[26px] border-2 border-[#F5A800]/20 bg-white p-6 shadow-[0_24px_60px_-42px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-[#F5A800]/40 hover:shadow-[0_34px_80px_-46px_rgba(0,0,0,0.45)]">
              <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#F5A800]/8 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute right-4 top-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5A800] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-white shadow-[0_8px_24px_-8px_rgba(245,168,0,0.6)]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  Action Required
                </span>
              </div>
              <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="h-28 w-20 shrink-0 overflow-hidden rounded-[18px] border border-zinc-100">
                  <div className="relative h-full w-full cursor-pointer bg-zinc-100">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ6m3Y6X5P8Z_X_WwU4_Dk5k-m3w0K1Fz3-8G6k7m4l-fVpB7s6H5r4w3v-2u1y9"
                      alt="Proof of payment"
                      className="h-full w-full object-cover blur-[2px] transition-all duration-500 hover:blur-0"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/40 transition-opacity hover:opacity-0">
                      <Eye className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="truncate font-black tracking-[-0.02em] text-zinc-950">
                    #ORD-9012 — <span className="text-zinc-400">Uche K.</span>
                  </h4>
                  <p className="mt-1.5 text-sm text-zinc-500">
                    Total: <span className="font-black text-zinc-950">₦8,700</span>{' '}
                    (Food: ₦7,500 + Del: ₦1,200)
                  </p>
                  <div className="mt-5 flex gap-3">
                    <button
                      type="button"
                      className="flex-1 rounded-[18px] bg-[#F5A800] px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_14px_36px_-14px_rgba(245,168,0,0.65)] transition-all duration-300 hover:bg-zinc-950 active:scale-95"
                    >
                      Verify Payment
                    </button>
                    <button
                      type="button"
                      className="rounded-[18px] border border-zinc-200 px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400 transition hover:border-red-100 hover:bg-red-50 hover:text-red-500"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Order — preparing */}
            <article className="flex items-center gap-5 rounded-[24px] border border-zinc-100 bg-white p-5 shadow-[0_16px_45px_-36px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-0.5">
              <div className="relative">
                <span className="absolute -right-1 -top-1 text-[9px] font-black uppercase tracking-[0.14em] text-[#F5A800]">
                  Prep
                </span>
              </div>
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-[18px] border border-zinc-100">
                <img
                  className="h-full w-full object-cover"
                  alt="Order food"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqxJIpUiDG5T7wHmNlKfyspcfBrjldvWFBsLB1CM6KB3iTbC5qGfdHKgByHokPO7NWCC-d-RIp1YEAFDjixZAAv58SvDsi1jcp4zKtulJcNUmP0ewJxUXva-bZy9PzIQU84L5eZauAcZgsd9zAQUNTTEm-QsfKCgv147Ej4rTS8Fbs_N0zhuWfmXFvPhVsNDyJ7WqBkI0rylUdj4Ll3vMKn3SNKb8e82IbFmbtEvxN2cvkK4IWCfbNIJ4SFcO4rSVnPY0gfxG-8s4"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="truncate font-black tracking-[-0.02em] text-zinc-950">
                  #ORD-8998 — <span className="font-medium text-zinc-400">Bolanle A.</span>
                </h4>
                <p className="mt-1 truncate text-sm text-zinc-500">1x Large Yam Bowl, 1x Herb Grilled Fish</p>
              </div>
              <button
                type="button"
                className="flex shrink-0 items-center gap-2 rounded-[18px] bg-zinc-950 px-4 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#F5A800] active:scale-95"
              >
                <CheckCircle className="h-4 w-4" />
                <span className="hidden sm:inline">Mark Ready</span>
              </button>
            </article>
          </section>

          {/* Right column (5 cols) */}
          <section className="min-w-0 lg:col-span-5 space-y-7">

            {/* Agent Debts module */}
            <div className="relative overflow-hidden rounded-[28px] bg-zinc-950 p-7 text-white shadow-[0_40px_100px_-55px_rgba(0,0,0,0.75)]">
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
                    <div className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-white/10 border border-white/10">
                      <DollarSign className="h-5 w-5 text-[#F5A800]" />
                    </div>
                    <h4 className="font-black uppercase tracking-[-0.02em] text-white">Agent Debts</h4>
                  </div>
                  <Link
                    to="/vendor/payouts"
                    className="text-[10px] font-black uppercase tracking-[0.16em] text-[#F5A800] hover:underline"
                  >
                    Details
                  </Link>
                </div>

                <div className="space-y-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                        Total Owed
                      </p>
                      <p className="font-serif italic mt-1 text-4xl font-black tracking-[-0.04em] text-white">
                        ₦12,400
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                        Outstanding
                      </p>
                      <p className="mt-1 text-lg font-bold text-[#F5A800]">04 Agents</p>
                    </div>
                  </div>

                  <div className="space-y-3 rounded-[20px] border border-white/[0.06] bg-white/[0.05] p-4">
                    {[
                      { name: 'Agent Tunde', owe: '₦4,200', time: '2h ago' },
                      { name: 'Agent Sarah', owe: '₦2,400', time: '5h ago' },
                    ].map((agent) => (
                      <div key={agent.name} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-zinc-800 text-[10px] font-black text-zinc-400">
                            {agent.name[6]}
                          </div>
                          <span className="font-bold text-zinc-400">{agent.name}</span>
                        </div>
                        <span className="font-black text-white">{agent.owe}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/vendor/payouts"
                  className="group flex w-full items-center justify-center gap-3 rounded-[20px] bg-[#F5A800] px-5 py-4 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_20px_50px_-20px_rgba(245,168,0,0.65)] transition-all duration-300 hover:bg-white hover:text-zinc-950 active:scale-95"
                >
                  Initiate Payout Flow
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Grill stock */}
            <div className="rounded-[28px] border border-zinc-100 bg-white/80 p-7 shadow-[0_24px_60px_-42px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-serif italic text-xl font-bold tracking-[-0.04em] text-zinc-950">
                    Grill Stock
                  </h3>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                    Live inventory
                  </p>
                </div>
                <button
                  type="button"
                  className="shrink-0 text-[10px] font-black uppercase tracking-[0.16em] text-[#D88B00] transition hover:underline"
                >
                  Quick Restock
                </button>
              </div>

              <div className="space-y-3">
                {[
                  { name: 'Classic Smokey Bole', qty: '42 portions', status: 'In Stock',  color: 'text-[#F5A800]', bg: 'bg-[#F5A800]/10',  dim: false },
                  { name: 'Fried Yam Sticks',    qty: '8 portions',  status: 'Low',       color: 'text-red-500',   bg: 'bg-red-50',       dim: false },
                  { name: 'Grilled Croaker',      qty: '0 portions',  status: 'Sold Out',  color: 'text-zinc-300',  bg: 'bg-zinc-100',     dim: true  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className={`flex items-center justify-between rounded-[18px] border border-zinc-100 bg-white p-4 transition-all duration-300 ${item.dim ? 'opacity-45 grayscale' : 'hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)]'}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-[14px] ${item.bg}`}>
                        <Flame className={`h-5 w-5 ${item.color} ${item.status === 'Sold Out' ? '' : 'fill-current'}`} />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-zinc-950">{item.name}</h5>
                        <p className={`mt-0.5 text-[10px] font-black uppercase tracking-[0.14em] ${item.status === 'Low' ? 'text-red-500' : 'text-zinc-400'}`}>
                          {item.qty}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-500 transition hover:bg-[#F5A800] hover:border-[#F5A800] hover:text-white"
                    >
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                ))}
              </div>

              <Link
                to="/vendor/inventory"
                className="mt-6 flex w-full items-center justify-center rounded-[20px] bg-zinc-950 px-5 py-4 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_16px_42px_-24px_rgba(0,0,0,0.55)] transition-all duration-300 hover:bg-[#F5A800] active:scale-95"
              >
                Manage Full Inventory
              </Link>
            </div>
          </section>
        </div>
      </div>

      <style>{`
        .vendor-hub .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </VendorLayout>
  );
};

export default VendorHub;
