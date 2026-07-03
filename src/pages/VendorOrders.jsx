import { AlertTriangle, Bike, CheckCircle, Clock, Filter, Flame, History, ShoppingBag } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import VendorLayout from '../components/VendorLayout';

const VendorOrders = () => {
  const reduceMotion = useReducedMotion();
  const cardMotionProps = {
    whileHover: reduceMotion ? undefined : { y: -4 },
    whileTap: reduceMotion ? undefined : { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 28 },
  };

  return (
    <VendorLayout>
      <div className="vendor-orders flex h-full flex-col space-y-8">

        {/* Header */}
        <header className="flex flex-col gap-6 border-b border-zinc-100 pb-7 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <h2 className="font-serif italic text-4xl font-black leading-none tracking-[-0.03em] text-zinc-950 sm:text-5xl">
              Kitchen Board
            </h2>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold text-zinc-500">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                Receiving orders
              </span>
              <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400">
                <Clock className="h-4 w-4" />
                Est. Prep: 18m
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-[16px] border border-zinc-200 bg-white text-zinc-500 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_8px_16px_-12px_rgba(0,0,0,0.2)] transition hover:bg-zinc-950 hover:text-white"
            >
              <Filter className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-[16px] border border-zinc-200 bg-white text-zinc-500 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_8px_16px_-12px_rgba(0,0,0,0.2)] transition hover:bg-zinc-950 hover:text-white"
            >
              <History className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Kanban board */}
        <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">

          {/* Column 1 — Incoming */}
          <section className="flex h-[calc(100vh-280px)] flex-col rounded-[20px] border border-zinc-100 bg-zinc-50/60 p-5">
            <div className="mb-5 flex items-center justify-between px-2">
              <h3 className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                Incoming
              </h3>
              <span className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[10px] font-black text-zinc-950">
                4
              </span>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto pb-4 pr-1">

              {/* Order card */}
              <motion.article
                {...cardMotionProps}
                className="group cursor-grab rounded-[16px] border border-zinc-100 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_10px_24px_-18px_rgba(0,0,0,0.25)] transition-colors duration-200 hover:border-[#F5A800]/30 active:cursor-grabbing"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <span className="rounded-[8px] bg-zinc-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                      #9012
                    </span>
                    <h4 className="mt-2 font-black uppercase tracking-[-0.02em] text-zinc-950">
                      Uche K.
                    </h4>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.14em] text-red-500">
                    1m ago
                  </span>
                </div>
                <div className="mb-5 space-y-2 rounded-[12px] border border-zinc-100 bg-zinc-50 p-3.5">
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
                  className="w-full rounded-[14px] bg-zinc-950 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-[#F5A800] active:scale-95"
                >
                  Move to Grill
                </button>
              </motion.article>

              <motion.article
                {...cardMotionProps}
                className="group cursor-grab rounded-[16px] border border-zinc-100 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_10px_24px_-18px_rgba(0,0,0,0.25)] transition-colors duration-200 hover:border-[#F5A800]/30 active:cursor-grabbing"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <span className="rounded-[8px] bg-zinc-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                      #9014
                    </span>
                    <h4 className="mt-2 font-black uppercase tracking-[-0.02em] text-zinc-950">
                      Bolanle A.
                    </h4>
                  </div>
                </div>
                <div className="mb-5 space-y-2 rounded-[12px] border border-zinc-100 bg-zinc-50 p-3.5">
                  <p className="flex justify-between text-xs font-bold text-zinc-950">
                    <span>1x Large Yam Bowl</span>
                    <span className="text-zinc-400">₦3,200</span>
                  </p>
                </div>
                <button
                  type="button"
                  className="w-full rounded-[14px] bg-zinc-950 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-[#F5A800] active:scale-95"
                >
                  Move to Grill
                </button>
              </motion.article>
            </div>
          </section>

          {/* Column 2 — Grilling */}
          <section className="flex h-[calc(100vh-280px)] flex-col rounded-[20px] border border-[#F5A800]/20 bg-[#F5A800]/[0.03] p-5">
            <div className="mb-5 flex items-center justify-between px-2">
              <h3 className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#D88B00]">
                <Flame className="h-4 w-4 fill-current text-[#F5A800]" />
                Grilling
              </h3>
              <span className="rounded-full bg-[#F5A800] px-2.5 py-1 text-[10px] font-black text-white">
                2
              </span>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto pb-4 pr-1">

              {/* Active card */}
              <motion.article
                {...cardMotionProps}
                className="cursor-grab rounded-[16px] border border-[#F5A800]/25 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_14px_28px_-18px_rgba(245,168,0,0.35)] transition-colors duration-200 active:cursor-grabbing"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <span className="rounded-[8px] bg-[#F5A800] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white">
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
                <div className="mb-5 space-y-2 rounded-[12px] border border-zinc-100 bg-zinc-50 p-3.5">
                  <p className="text-xs italic text-zinc-500">"Make it smoky!"</p>
                  <p className="text-sm font-black uppercase text-zinc-950">3x Signature Heat Platter</p>
                </div>
                <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-zinc-100">
                  <div className="h-full w-[80%] rounded-full bg-[#F5A800]" />
                </div>
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-[14px] bg-zinc-950 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-[#F5A800] active:scale-95"
                >
                  <CheckCircle className="h-4 w-4" />
                  Mark Ready
                </button>
              </motion.article>

              <motion.article
                {...cardMotionProps}
                className="cursor-grab rounded-[16px] border border-zinc-100 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_10px_24px_-18px_rgba(0,0,0,0.25)] transition-colors duration-200 active:cursor-grabbing"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <span className="rounded-[8px] bg-zinc-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
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
                <div className="mb-5 space-y-1.5 rounded-[12px] border border-zinc-100 bg-zinc-50 p-3.5 text-xs font-bold text-zinc-600">
                  <p>1x Fire-Roasted Heat Yam</p>
                  <p>1x Grilled Titus Fish</p>
                </div>
                <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-zinc-100">
                  <div className="h-full w-[30%] rounded-full bg-[#F5A800]/50" />
                </div>
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-[14px] border border-zinc-200 bg-zinc-100 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400 transition-colors duration-200 hover:bg-zinc-950 hover:text-white active:scale-95"
                >
                  <CheckCircle className="h-4 w-4" />
                  Mark Ready
                </button>
              </motion.article>
            </div>
          </section>

          {/* Column 3 — Ready */}
          <section className="flex h-[calc(100vh-280px)] flex-col rounded-[20px] border border-emerald-100 bg-emerald-50/30 p-5">
            <div className="mb-5 flex items-center justify-between px-2">
              <h3 className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">
                <ShoppingBag className="h-4 w-4" />
                Ready
              </h3>
              <span className="rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-black text-white">
                1
              </span>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto pb-4 pr-1">
              <article className="rounded-[16px] border border-emerald-200 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_14px_28px_-18px_rgba(16,185,129,0.3)] transition-colors hover:border-emerald-400">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <span className="rounded-[8px] bg-emerald-500 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white">
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
                <div className="flex items-center gap-4 rounded-[14px] border border-emerald-100 bg-emerald-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-white">
                    <Bike className="h-5 w-5 text-emerald-600" />
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
