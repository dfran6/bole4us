import { AlertTriangle, Bike, CheckCircle, Clock, Filter, Flame, History, ShoppingBag } from 'lucide-react';
import VendorLayout from '../components/VendorLayout';

const VendorOrders = () => {
  return (
    <VendorLayout>
      <div className="vendor-orders flex h-full flex-col space-y-8">

        {/* Header */}
        <header className="flex flex-col gap-6 border-b border-zinc-100 pb-7 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <h2 className="font-serif italic text-4xl font-black leading-none tracking-[-0.04em] text-zinc-950 sm:text-5xl">
              Kitchen Board
            </h2>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F5A800]/20 bg-[#F5A800]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#D88B00]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#F5A800]" />
                Receiving Heat
              </span>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                <Clock className="h-4 w-4" />
                Est. Prep: 18m
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-[18px] border border-zinc-200 bg-white text-zinc-500 shadow-sm transition hover:bg-zinc-950 hover:text-white"
            >
              <Filter className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-[18px] border border-zinc-200 bg-white text-zinc-500 shadow-sm transition hover:bg-zinc-950 hover:text-white"
            >
              <History className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Kanban board */}
        <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">

          {/* Column 1 — Incoming */}
          <section className="flex h-[calc(100vh-280px)] flex-col rounded-[26px] border border-zinc-100 bg-zinc-50/60 p-5">
            <div className="mb-6 flex items-center justify-between px-2">
              <h3 className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
                Incoming
              </h3>
              <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-[10px] font-black text-zinc-950 shadow-sm">
                4
              </span>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto pb-4 pr-1">

              {/* Order card */}
              <article className="group cursor-grab rounded-[22px] border border-zinc-100 bg-white p-5 shadow-[0_16px_42px_-30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F5A800]/30 hover:shadow-[0_24px_60px_-34px_rgba(0,0,0,0.4)] active:cursor-grabbing">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <span className="rounded-[10px] bg-zinc-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                      #9012
                    </span>
                    <h4 className="mt-2 font-black uppercase tracking-[-0.02em] text-zinc-950">
                      Uche K.
                    </h4>
                  </div>
                  <span className="animate-pulse text-[10px] font-black uppercase tracking-[0.14em] text-red-500">
                    1m ago
                  </span>
                </div>
                <div className="mb-5 space-y-2 rounded-[16px] border border-zinc-100 bg-zinc-50 p-3.5">
                  <p className="flex justify-between text-xs font-bold text-zinc-950">
                    <span>2x Smokey Heat</span>
                    <span className="text-zinc-400">₦2,400</span>
                  </p>
                  <p className="flex justify-between text-xs font-bold text-zinc-950">
                    <span>1x Croaker Fish</span>
                    <span className="text-zinc-400">₦8,500</span>
                  </p>
                  <div className="mt-1 flex items-center gap-1.5 border-t border-red-100 pt-3 text-[10px] font-black uppercase tracking-[0.14em] text-red-600">
                    <AlertTriangle className="h-3 w-3 shrink-0" />
                    Extra Spicy Pepper
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full rounded-[18px] bg-zinc-950 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_12px_30px_-14px_rgba(0,0,0,0.55)] transition-all duration-300 hover:bg-[#F5A800] active:scale-95"
                >
                  Move to Grill
                </button>
              </article>

              <article className="group cursor-grab rounded-[22px] border border-zinc-100 bg-white p-5 shadow-[0_16px_42px_-30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F5A800]/30 active:cursor-grabbing">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <span className="rounded-[10px] bg-zinc-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                      #9014
                    </span>
                    <h4 className="mt-2 font-black uppercase tracking-[-0.02em] text-zinc-950">
                      Bolanle A.
                    </h4>
                  </div>
                </div>
                <div className="mb-5 space-y-2 rounded-[16px] border border-zinc-100 bg-zinc-50 p-3.5">
                  <p className="flex justify-between text-xs font-bold text-zinc-950">
                    <span>1x Large Yam Bowl</span>
                    <span className="text-zinc-400">₦3,200</span>
                  </p>
                </div>
                <button
                  type="button"
                  className="w-full rounded-[18px] bg-zinc-950 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#F5A800] active:scale-95"
                >
                  Move to Grill
                </button>
              </article>
            </div>
          </section>

          {/* Column 2 — Grilling (amber tint — in-progress semantic) */}
          <section className="flex h-[calc(100vh-280px)] flex-col rounded-[26px] border-2 border-[#F5A800]/15 bg-[#F5A800]/[0.04] p-5">
            <div className="mb-6 flex items-center justify-between px-2">
              <h3 className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#D88B00]">
                <Flame className="h-4 w-4 fill-current text-[#F5A800]" />
                Grilling
              </h3>
              <span className="rounded-full bg-[#F5A800] px-3 py-1 text-[10px] font-black text-white shadow-[0_8px_20px_-8px_rgba(245,168,0,0.6)]">
                2
              </span>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto pb-4 pr-1">

              {/* Active card */}
              <article className="relative cursor-grab overflow-hidden rounded-[22px] border-2 border-[#F5A800]/25 bg-white p-5 shadow-[0_20px_54px_-28px_rgba(245,168,0,0.2)] transition-all duration-300 hover:-translate-y-1 active:cursor-grabbing">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#F5A800]/[0.07]" />
                <div className="relative z-10 mb-4 flex items-start justify-between">
                  <div>
                    <span className="rounded-[10px] bg-[#F5A800] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white shadow-sm">
                      #8998
                    </span>
                    <h4 className="mt-2 font-black uppercase tracking-[-0.02em] text-zinc-950">
                      Chidi M.
                    </h4>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#D88B00]">
                      Live
                    </p>
                    <p className="mt-1 text-xs font-bold text-zinc-400">12m</p>
                  </div>
                </div>
                <div className="relative z-10 mb-5 space-y-2 rounded-[16px] border border-zinc-100 bg-zinc-50 p-3.5">
                  <p className="text-xs italic text-zinc-500">"Make it smoky!"</p>
                  <p className="text-sm font-black uppercase text-zinc-950">3x Signature Heat Platter</p>
                </div>
                <div className="relative z-10 mb-5 h-2 overflow-hidden rounded-full bg-zinc-100">
                  <div className="h-full w-[80%] animate-pulse rounded-full bg-[#F5A800]" />
                </div>
                <button
                  type="button"
                  className="relative z-10 flex w-full items-center justify-center gap-2 rounded-[18px] bg-zinc-950 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_12px_30px_-14px_rgba(0,0,0,0.55)] transition-all duration-300 hover:bg-[#F5A800] active:scale-95"
                >
                  <CheckCircle className="h-4 w-4" />
                  Mark Ready
                </button>
              </article>

              <article className="cursor-grab rounded-[22px] border border-zinc-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 active:cursor-grabbing">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <span className="rounded-[10px] bg-zinc-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                      #8999
                    </span>
                    <h4 className="mt-2 font-black uppercase tracking-[-0.02em] text-zinc-950">
                      Ngozi A.
                    </h4>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-zinc-300">
                      Started
                    </p>
                    <p className="mt-1 text-xs font-bold text-zinc-400">5m</p>
                  </div>
                </div>
                <div className="mb-5 space-y-1.5 rounded-[16px] border border-zinc-100 bg-zinc-50 p-3.5 text-xs font-bold text-zinc-600">
                  <p>1x Fire-Roasted Heat Yam</p>
                  <p>1x Grilled Titus Fish</p>
                </div>
                <div className="mb-5 h-2 overflow-hidden rounded-full bg-zinc-100">
                  <div className="h-full w-[30%] rounded-full bg-[#F5A800]/50" />
                </div>
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-[18px] border border-zinc-200 bg-zinc-100 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400 transition-all duration-300 hover:bg-zinc-950 hover:text-white active:scale-95"
                >
                  <CheckCircle className="h-4 w-4" />
                  Mark Ready
                </button>
              </article>
            </div>
          </section>

          {/* Column 3 — Ready (green semantic) */}
          <section className="flex h-[calc(100vh-280px)] flex-col rounded-[26px] border border-emerald-100 bg-emerald-50/30 p-5">
            <div className="mb-6 flex items-center justify-between px-2">
              <h3 className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">
                <ShoppingBag className="h-4 w-4" />
                Ready
              </h3>
              <span className="rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-black text-white shadow-[0_8px_20px_-8px_rgba(34,197,94,0.55)]">
                1
              </span>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto pb-4 pr-1">
              <article className="relative rounded-[22px] border-2 border-emerald-200 bg-white p-5 shadow-[0_16px_42px_-30px_rgba(34,197,94,0.2)] transition hover:border-emerald-400">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <span className="rounded-[10px] bg-emerald-500 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white shadow-sm">
                      #8992
                    </span>
                    <h4 className="mt-2 font-black uppercase tracking-[-0.02em] text-zinc-950">
                      David O.
                    </h4>
                    <p className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-zinc-400">
                      Rider: John T.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-[18px] border border-emerald-100 bg-emerald-50 p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-white shadow-sm">
                    <Bike className="h-5 w-5 animate-bounce text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-emerald-600">
                      Rider Arriving
                    </p>
                    <p className="mt-1 text-lg font-black text-emerald-900">2 Mins</p>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>

      <style>{`
        .vendor-orders .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </VendorLayout>
  );
};

export default VendorOrders;
