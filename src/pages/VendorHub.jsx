import { ArrowRight, CheckCircle, DollarSign, Eye, Flame, Package, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import VendorLayout from '../components/VendorLayout';

const VendorHub = () => {
  const [kitchenOpen, setKitchenOpen] = useState(true);

  return (
    <VendorLayout>
      <div className="vendor-hub mx-auto w-full max-w-6xl space-y-10 pb-20 xl:px-0">

        {/* Header */}
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <h1
              className="font-serif italic font-black leading-[0.9] tracking-[-0.04em] text-zinc-950"
              style={{ fontSize: 'clamp(34px, 7vw, 52px)' }}
            >
              Operations <span className="not-italic font-semibold text-[#D88B00]">Center</span>
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-500">
              Live updates for <span className="font-bold text-zinc-950">The Urban Heat</span>
            </p>
          </div>

          {/* Open/Closed toggle */}
          <div className="relative flex w-full shrink-0 items-center overflow-hidden rounded-[18px] border border-zinc-200 bg-white p-1 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_8px_20px_-12px_rgba(0,0,0,0.15)] md:w-auto">
            <button
              type="button"
              onClick={() => setKitchenOpen(true)}
              className="relative flex items-center gap-2 rounded-[14px] px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.16em] transition-colors duration-200"
            >
              {kitchenOpen && (
                <motion.span
                  layoutId="kitchen-status-pill"
                  className="absolute inset-0 rounded-[14px] bg-emerald-500 shadow-[0_6px_16px_-6px_rgba(16,185,129,0.6)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className={`relative z-10 h-1.5 w-1.5 rounded-full ${kitchenOpen ? 'bg-white' : 'bg-zinc-300'}`} />
              <span className={`relative z-10 ${kitchenOpen ? 'text-white' : 'text-zinc-400'}`}>Open</span>
            </button>
            <button
              type="button"
              onClick={() => setKitchenOpen(false)}
              className="relative rounded-[14px] px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.16em] transition-colors duration-200"
            >
              {!kitchenOpen && (
                <motion.span
                  layoutId="kitchen-status-pill"
                  className="absolute inset-0 rounded-[14px] bg-zinc-950"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className={`relative z-10 ${!kitchenOpen ? 'text-white' : 'text-zinc-400 hover:text-zinc-700'}`}>Closed</span>
            </button>
          </div>
        </header>

        {/* Stats grid */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="group rounded-[20px] border border-zinc-100 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(0,0,0,0.04),0_24px_44px_-20px_rgba(0,0,0,0.22)]">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
              Today's Revenue
            </p>
            <h3 className="mt-4 font-serif italic text-3xl font-black tracking-[-0.03em] text-zinc-950">
              ₦142,500
            </h3>
            <p className="mt-2 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
              <TrendingUp className="h-3.5 w-3.5" />
              +12.5% from yesterday
            </p>
          </div>

          <div className="group rounded-[20px] border border-zinc-100 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(0,0,0,0.04),0_24px_44px_-20px_rgba(0,0,0,0.22)]">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
              Active Orders
            </p>
            <h3 className="mt-4 font-serif italic text-3xl font-black tracking-[-0.03em] text-zinc-950">
              08
            </h3>
            <p className="mt-2 text-[11px] font-bold text-zinc-500">
              4 pending prep
            </p>
          </div>

          <div className="group rounded-[20px] bg-zinc-950 p-6 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_20px_40px_-20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(0,0,0,0.15),0_28px_50px_-20px_rgba(0,0,0,0.55)]">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
              Rating
            </p>
            <h3 className="mt-4 font-serif italic text-3xl font-black tracking-[-0.03em] text-white">
              4.9 <span className="text-lg text-zinc-500">/ 5.0</span>
            </h3>
            <p className="mt-2 text-[11px] font-bold text-[#F5A800]">
              Customer satisfaction is peak
            </p>
          </div>
        </section>

        {/* Main grid */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">

          {/* Incoming orders (7 cols) */}
          <section className="min-w-0 lg:col-span-7 space-y-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="font-serif italic text-2xl font-bold tracking-[-0.03em] text-zinc-950">
                  Incoming Orders
                </h3>
              </div>
              <span className="inline-flex items-center gap-2 text-[10px] font-bold text-zinc-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                Live
              </span>
            </div>

            {/* Order — payment verification needed */}
            <article className="relative rounded-[20px] border border-[#F5A800]/25 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_20px_36px_-22px_rgba(245,168,0,0.35)]">
              <div className="absolute right-4 top-4">
                <span className="rounded-full bg-[#F5A800] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-white shadow-[0_6px_14px_-4px_rgba(245,168,0,0.6)]">
                  Action Required
                </span>
              </div>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="h-28 w-20 shrink-0 overflow-hidden rounded-[14px] border border-zinc-100">
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
                      className="flex-1 rounded-[14px] bg-[#F5A800] px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_10px_20px_-8px_rgba(245,168,0,0.55)] transition-colors duration-200 hover:bg-zinc-950 active:scale-95"
                    >
                      Verify Payment
                    </button>
                    <button
                      type="button"
                      className="rounded-[14px] border border-zinc-200 px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400 transition hover:border-red-100 hover:bg-red-50 hover:text-red-500"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Order — preparing */}
            <article className="flex items-center gap-5 rounded-[20px] border border-zinc-100 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_12px_28px_-20px_rgba(0,0,0,0.18)]">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-[14px] border border-zinc-100">
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
                className="flex shrink-0 items-center gap-2 rounded-[14px] bg-zinc-950 px-4 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#F5A800] active:scale-95"
              >
                <CheckCircle className="h-4 w-4" />
                <span className="hidden sm:inline">Mark Ready</span>
              </button>
            </article>
          </section>

          {/* Right column (5 cols) */}
          <section className="min-w-0 lg:col-span-5 space-y-6">

            {/* Agent Debts module */}
            <div className="rounded-[20px] bg-zinc-950 p-6 text-white shadow-[0_1px_1px_rgba(0,0,0,0.1),0_24px_48px_-24px_rgba(0,0,0,0.55)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-white/10">
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

              <div className="mt-6 space-y-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                      Total Owed
                    </p>
                    <p className="font-serif italic mt-1 text-3xl font-black tracking-[-0.03em] text-white">
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

                <div className="space-y-3 rounded-[16px] bg-white/[0.05] p-4">
                  {[
                    { name: 'Agent Tunde', owe: '₦4,200' },
                    { name: 'Agent Sarah', owe: '₦2,400' },
                  ].map((agent) => (
                    <div key={agent.name} className="flex items-center justify-between text-xs">
                      <span className="font-bold text-zinc-400">{agent.name}</span>
                      <span className="font-black text-white">{agent.owe}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/vendor/payouts"
                className="group mt-6 flex w-full items-center justify-center gap-3 rounded-[16px] bg-[#F5A800] px-5 py-4 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_14px_28px_-10px_rgba(245,168,0,0.55)] transition-colors duration-200 hover:bg-white hover:text-zinc-950 active:scale-95"
              >
                Initiate Payout Flow
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Grill stock */}
            <div className="rounded-[20px] border border-zinc-100 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.18)]">
              <div className="mb-5 flex items-end justify-between gap-4">
                <h3 className="font-serif italic text-xl font-bold tracking-[-0.03em] text-zinc-950">
                  Grill Stock
                </h3>
                <button
                  type="button"
                  className="shrink-0 text-[10px] font-black uppercase tracking-[0.16em] text-[#D88B00] transition hover:underline"
                >
                  Quick Restock
                </button>
              </div>

              <div className="space-y-2.5">
                {[
                  { name: 'Classic Smokey Bole', qty: '42 portions', status: 'In Stock',  color: 'text-[#F5A800]', bg: 'bg-[#F5A800]/10',  dim: false },
                  { name: 'Fried Yam Sticks',    qty: '8 portions',  status: 'Low',       color: 'text-red-500',   bg: 'bg-red-50',       dim: false },
                  { name: 'Grilled Croaker',      qty: '0 portions',  status: 'Sold Out',  color: 'text-zinc-300',  bg: 'bg-zinc-100',     dim: true  },
                ].map((item) => (
                  <div
                    key={item.name}
                    className={`flex items-center justify-between rounded-[14px] border border-zinc-100 p-3.5 ${item.dim ? 'opacity-50' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-[12px] ${item.bg}`}>
                        <Flame className={`h-4 w-4 ${item.color} ${item.status === 'Sold Out' ? '' : 'fill-current'}`} />
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
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition hover:bg-[#F5A800] hover:border-[#F5A800] hover:text-white"
                      aria-label={`Restock ${item.name}`}
                    >
                      <Package className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <Link
                to="/vendor/inventory"
                className="mt-5 flex w-full items-center justify-center rounded-[16px] bg-zinc-950 px-5 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_-12px_rgba(0,0,0,0.5)] transition-colors duration-200 hover:bg-[#F5A800] active:scale-95"
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
