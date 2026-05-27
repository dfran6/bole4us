import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bike,
  CheckCircle,
  Clock,
  Flame,
  History,
  MapPin,
  Receipt,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import UserLayout from '../components/UserLayout';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const activeOrder = {
  id: 'ORD-4492',
  vendor: 'Urban Heat Grill',
  meal: 'Quarter Rack + Spicy Slaw',
  eta: '18:45',
  timeLeft: '12 mins',
  rider: 'Chuks Emeka',
  price: '₦4,500',
  progress: 65,
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCpG2ftZ7rNFhXT1RiE6EzN2Hpu-6lunR4CBLanbn9iZxNfTGCw0v2sgrDqiZC0m_FBjNc7NUk3w1DA0FeK9gxu3Du1nGfiUAr5sJglxMk97t5JwKoWNgv49nO_P1qDRHcdk5EvE6QrxmEuVCrewwLu_Vtt9q9T4ij8qyrDFqdWAC_hign0XY08F0AEITrR2t9IdAZXqewdkMoEM31xgkXJmhh8CjGenocHR9fHF-g6HAsrzajib1Pis_-BljkSMzIFT6DtQbEFQh4',
  map: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvJBPQB2BXV7t3B1sBdmpBufGPMdLpeZmId1pOgHiefD6D6hNJkMDiR_gxg5iyDncLRhDbwDvm77sS19QHS6A9-9k9yf8FSZbsYUiGjdLBEFj8ZdqDkekWhRmmO0Xfwol00sMn4FrsXptzFjh8tg-MbmM6oFeES5zqJM7acilSMhSUSKO8FtjBYjnKgJ0Q2tU8_yDbfNklVW89oPaH1ZkQ23qlogxYWLdDXhKqJQMSVYh3XHPeGNR7fuQRfOmnPUYO3itQZPu0-bM',
};

const orderSteps = [
  { label: 'Accepted', short: 'ACK', icon: CheckCircle, active: true },
  { label: 'Preparing', short: 'Prep', icon: Flame, active: true },
  { label: 'In transit', short: 'Transit', icon: Bike, active: true },
  { label: 'Drop-off', short: 'Drop', icon: MapPin, active: false },
];

const summary = [
  {
    label: 'Active orders',
    value: '1',
    desc: 'Currently moving',
    icon: Zap,
  },
  {
    label: 'Avg. arrival',
    value: '12m',
    desc: 'This week',
    icon: Clock,
  },
  {
    label: 'Completed',
    value: '18',
    desc: 'All-time orders',
    icon: CheckCircle,
  },
];

const recentOrders = [
  {
    id: 'ORD-4431',
    name: "Mama Put's Heat",
    date: 'Oct 28',
    price: '₦6.4k',
    status: 'Delivered',
  },
  {
    id: 'ORD-4388',
    name: 'The Charcoal Hub',
    date: 'Oct 24',
    price: '₦2.5k',
    status: 'Delivered',
  },
  {
    id: 'ORD-4320',
    name: 'Campus Fire Spot',
    date: 'Oct 18',
    price: '₦3.2k',
    status: 'Delivered',
  },
];

const StudentOrders = () => {
  return (
    <UserLayout>
      <motion.div
        initial="hidden"
        animate="show"
        className="orders-page relative isolate mx-auto w-full max-w-[1440px] overflow-hidden font-['DM_Sans']"
      >
        <div className="space-y-8 sm:space-y-10 xl:space-y-12">
          {/* Header */}
          <motion.header
            variants={fadeUp}
            custom={0}
            className="flex flex-col gap-7 border-b border-zinc-200/70 pb-8 xl:flex-row xl:items-end xl:justify-between"
          >
            <div className="min-w-0">
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 shadow-[0_12px_30px_-22px_rgba(0,0,0,0.25)]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950 text-[#F5A800]">
                  <Zap className="h-3.5 w-3.5 fill-current" />
                </span>
                <span className="truncate text-[10px] font-black uppercase tracking-[0.2em] text-[#D88B00]">
                  Live order network
                </span>
              </div>

              <h1
                className="font-serif italic font-black leading-[0.9] tracking-[-0.06em] text-zinc-950"
                style={{ fontSize: 'clamp(46px, 8vw, 86px)' }}
              >
                Active{' '}
                <span className="bg-gradient-to-r from-[#F5A800] via-[#FFB800] to-[#FF7A00] bg-clip-text not-italic font-semibold text-transparent">
                  Heat.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-zinc-500 sm:text-[17px]">
                Track live orders, monitor delivery progress, and review your
                recent Bole4us reservations.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row xl:w-auto">
              <Link
                to="/orders/archive"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[18px] border border-zinc-200 bg-white px-5 text-[11px] font-black uppercase tracking-[0.15em] text-zinc-500 shadow-[0_16px_45px_-38px_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-zinc-300 hover:text-zinc-950"
              >
                <History className="h-4 w-4" />
                Archive
              </Link>

              <Link
                to="/explore"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[18px] bg-[#F5A800] px-6 text-[11px] font-black uppercase tracking-[0.15em] text-white shadow-[0_18px_45px_-24px_rgba(245,168,0,0.75)] transition-all duration-300 hover:bg-zinc-950 active:scale-95"
              >
                Order again
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.header>

          {/* Summary cards */}
          <motion.section
            variants={fadeUp}
            custom={1}
            className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {summary.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.label}
                  className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-[0_24px_70px_-55px_rgba(0,0,0,0.38)] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:p-6"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F5A800]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex items-center justify-between gap-5">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                        {item.label}
                      </p>
                      <p className="mt-3 text-3xl font-black tracking-[-0.05em] text-zinc-950">
                        {item.value}
                      </p>
                      <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-[#F5A800]/10 text-[#D88B00]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </article>
              );
            })}
          </motion.section>

          {/* Active Order */}
          <motion.section variants={fadeUp} custom={2}>
            <Link to={`/order/${activeOrder.id}`} className="block group">
              <article className="relative overflow-hidden rounded-[34px] border border-white/70 bg-white/85 shadow-[0_35px_100px_-65px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_45px_120px_-70px_rgba(0,0,0,0.65)]">
                <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#F5A800]/12 blur-[90px]" />
                <div className="pointer-events-none absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-zinc-950/[0.04] blur-[100px]" />

                <div className="relative z-10 grid grid-cols-1 gap-8 p-5 sm:p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-8 xl:p-10">
                  {/* Left: order details */}
                  <div className="min-w-0">
                    <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex min-w-0 items-center gap-4 sm:gap-5">
                        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-[24px] border border-zinc-100 bg-zinc-100 shadow-[0_18px_45px_-36px_rgba(0,0,0,0.45)] sm:h-24 sm:w-24 sm:rounded-[28px]">
                          <img
                            alt={activeOrder.vendor}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src={activeOrder.image}
                          />
                        </div>

                        <div className="min-w-0">
                          <p className="mb-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#D88B00]">
                            #{activeOrder.id}
                          </p>

                          <h3 className="truncate font-serif italic text-3xl font-black tracking-[-0.04em] text-zinc-950 sm:text-4xl">
                            {activeOrder.vendor}
                          </h3>

                          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-500 sm:text-base">
                            {activeOrder.meal}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 sm:flex sm:shrink-0">
                        <div className="rounded-[22px] bg-zinc-950 px-5 py-4 text-white shadow-[0_24px_60px_-38px_rgba(0,0,0,0.75)]">
                          <div className="mb-2 flex items-center gap-2">
                            <Clock className="h-4 w-4 text-[#F5A800]" />
                            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-white/40">
                              ETA
                            </p>
                          </div>
                          <p className="text-xl font-black tracking-[-0.03em]">
                            {activeOrder.eta}
                          </p>
                        </div>

                        <div className="rounded-[22px] border border-[#F5A800]/20 bg-[#F5A800]/10 px-5 py-4">
                          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#D88B00]">
                            Total
                          </p>
                          <p className="mt-2 text-xl font-black tracking-[-0.03em] text-zinc-950">
                            {activeOrder.price}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="rounded-[30px] border border-zinc-100 bg-white/70 p-5 sm:p-6">
                      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                            Order progress
                          </p>
                          <p className="mt-1 text-sm text-zinc-500">
                            Rider:{' '}
                            <span className="font-bold text-zinc-950">
                              {activeOrder.rider}
                            </span>
                          </p>
                        </div>

                        <span className="inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-emerald-700">
                          {activeOrder.timeLeft} away
                        </span>
                      </div>

                      <div className="mb-6 h-3 overflow-hidden rounded-full bg-zinc-100">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#F5A800] to-[#FF7A00] shadow-[0_0_30px_rgba(245,168,0,0.35)]"
                          style={{ width: `${activeOrder.progress}%` }}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {orderSteps.map((step) => {
                          const Icon = step.icon;

                          return (
                            <div
                              key={step.label}
                              className={`rounded-[22px] border p-4 text-center transition-all duration-300 ${
                                step.active
                                  ? 'border-zinc-950 bg-zinc-950 text-white'
                                  : 'border-zinc-100 bg-zinc-50 text-zinc-400'
                              }`}
                            >
                              <div
                                className={`mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-[16px] ${
                                  step.active
                                    ? 'bg-[#F5A800]/15 text-[#F5A800]'
                                    : 'bg-white text-zinc-300'
                                }`}
                              >
                                <Icon className="h-5 w-5" />
                              </div>

                              <p className="text-[10px] font-black uppercase tracking-[0.14em]">
                                {step.short}
                              </p>

                              <p
                                className={`mt-1 hidden text-xs sm:block ${
                                  step.active
                                    ? 'text-white/45'
                                    : 'text-zinc-400'
                                }`}
                              >
                                {step.label}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Right: map */}
                  <div className="min-w-0">
                    <div className="relative h-full min-h-[320px] overflow-hidden rounded-[32px] border border-zinc-100 bg-zinc-100 lg:min-h-full">
                      <img
                        alt="Order tracking map"
                        className="h-full w-full object-cover"
                        src={activeOrder.map}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/65 via-zinc-950/10 to-transparent" />

                      <div className="absolute left-[30%] top-[42%] h-5 w-5 rounded-full bg-[#F5A800] shadow-[0_0_0_12px_rgba(245,168,0,0.18)]">
                        <span className="absolute inset-0 animate-ping rounded-full bg-[#F5A800]/60" />
                        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                      </div>

                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="rounded-[24px] border border-white/15 bg-white/15 p-4 text-white backdrop-blur-2xl">
                          <div className="mb-3 flex items-center justify-between gap-3">
                            <div>
                              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/50">
                                Current location
                              </p>
                              <p className="mt-1 font-black tracking-[-0.02em]">
                                Near Faculty Gate
                              </p>
                            </div>

                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] bg-[#F5A800] text-white">
                              <MapPin className="h-5 w-5" />
                            </span>
                          </div>

                          <p className="text-sm leading-relaxed text-white/65">
                            Your rider is moving towards the pickup zone.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </motion.section>

          {/* Recent Orders */}
          <motion.section variants={fadeUp} custom={3} className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-[18px] bg-[#F5A800]/10 text-[#D88B00]">
                  <Receipt className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="font-serif italic text-3xl font-black tracking-[-0.04em] text-zinc-950">
                    Recent Orders
                  </h2>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                    Your completed reservations
                  </p>
                </div>
              </div>

              <Link
                to="/orders/archive"
                className="inline-flex w-full items-center justify-center gap-2 rounded-[18px] border border-zinc-200 bg-white px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500 transition-all duration-300 hover:border-[#F5A800]/40 hover:text-[#D88B00] sm:w-auto"
              >
                View all history
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              {recentOrders.map((receipt, index) => (
                <motion.article
                  key={receipt.id}
                  variants={fadeUp}
                  custom={index + 4}
                  className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-[0_24px_70px_-55px_rgba(0,0,0,0.38)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F5A800]/30 hover:bg-white"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F5A800]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#D88B00]">
                          #{receipt.id}
                        </p>

                        <h4 className="truncate font-black tracking-[-0.02em] text-zinc-950">
                          {receipt.name}
                        </h4>

                        <p className="mt-1 text-sm text-zinc-400">
                          {receipt.date}
                        </p>
                      </div>

                      <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-emerald-700">
                        {receipt.status}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-t border-zinc-100 pt-5">
                      <p className="text-xl font-black tracking-[-0.04em] text-zinc-950">
                        {receipt.price}
                      </p>

                      <Link
                        to={`/order/${receipt.id}`}
                        className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-zinc-950 text-white transition-all duration-300 group-hover:bg-[#F5A800]"
                        aria-label={`View ${receipt.id}`}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          <motion.footer
            variants={fadeUp}
            custom={8}
            className="border-t border-zinc-200/70 pt-8 text-center"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
              BOLE4US • 2026
            </p>
          </motion.footer>
        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

          .orders-page {
            font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          }

          .font-serif {
            font-family: 'Playfair Display', serif;
          }

          @media (prefers-reduced-motion: reduce) {
            .orders-page * {
              animation-duration: 0.001ms !important;
              animation-iteration-count: 1 !important;
              scroll-behavior: auto !important;
              transition-duration: 0.001ms !important;
            }
          }
        `}</style>
      </motion.div>
    </UserLayout>
  );
};

export default StudentOrders;
