import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bike,
  CheckCircle,
  Clock,
  Flame,
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
  image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=200&q=80',
  map: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=900&q=80',
};

const orderSteps = [
  { label: 'Accepted', short: 'ACK', icon: CheckCircle, active: true },
  { label: 'Preparing', short: 'Prep', icon: Flame, active: true },
  { label: 'In transit', short: 'Transit', icon: Bike, active: true },
  { label: 'Drop-off', short: 'Drop', icon: MapPin, active: false },
];

const summary = [
  { label: 'Active orders', value: '1',   desc: 'Currently moving', icon: Zap },
  { label: 'Avg. arrival',  value: '12m', desc: 'This week',        icon: Clock },
  { label: 'Completed',     value: '18',  desc: 'All-time orders',  icon: CheckCircle },
];

const recentOrders = [
  { id: 'ORD-4431', name: "Mama Put's Heat",   date: 'Oct 28', price: '₦6,400', status: 'Delivered' },
  { id: 'ORD-4388', name: 'The Charcoal Hub',   date: 'Oct 24', price: '₦2,500', status: 'Delivered' },
  { id: 'ORD-4320', name: 'Campus Fire Spot',   date: 'Oct 18', price: '₦3,200', status: 'Delivered' },
];

const StudentOrders = () => {
  return (
    <UserLayout>
      <motion.div
        initial="hidden"
        animate="show"
        className="orders-page mx-auto w-full max-w-6xl space-y-8 pb-20 xl:px-0"
      >
        {/* Header */}
        <motion.header
          variants={fadeUp}
          custom={0}
          className="flex flex-col gap-6 border-b border-zinc-100 pb-7 xl:flex-row xl:items-end xl:justify-between"
        >
          <div className="min-w-0">
            <h1
              className="font-serif italic font-black leading-[0.9] tracking-[-0.04em] text-zinc-950"
              style={{ fontSize: 'clamp(34px, 7vw, 52px)' }}
            >
              Active <span className="not-italic font-semibold text-[#D88B00]">Orders</span>
            </h1>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-500">
              Track live orders, monitor delivery progress, and review your recent Bole4us
              reservations.
            </p>
          </div>

          <Link
            to="/explore"
            className="press-scale inline-flex h-12 w-full items-center justify-center gap-2 rounded-[14px] bg-[#F5A800] px-6 text-[11px] font-black uppercase tracking-[0.15em] text-white shadow-[0_10px_24px_-10px_rgba(245,168,0,0.55)] transition-colors duration-200 hover:bg-zinc-950 sm:w-auto"
          >
            Order again
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.header>

        {/* Summary cards */}
        <motion.section variants={fadeUp} custom={1} className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {summary.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.label}
                className="rounded-[20px] border border-zinc-100 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                      {item.label}
                    </p>
                    <p className="mt-2 text-3xl font-black tracking-[-0.03em] text-zinc-950">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#F5A800]/10 text-[#D88B00]">
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
            <article className="overflow-hidden rounded-[24px] border border-zinc-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03),0_28px_54px_-32px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5">
              <div className="grid grid-cols-1 gap-6 p-5 sm:p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-8">
                {/* Left: order details */}
                <div className="min-w-0">
                  <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="h-18 w-18 shrink-0 overflow-hidden rounded-[18px] bg-zinc-100 sm:h-20 sm:w-20">
                        <img
                          alt={activeOrder.vendor}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          src={activeOrder.image}
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="mb-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#D88B00]">
                          #{activeOrder.id}
                        </p>
                        <h3 className="truncate font-serif italic text-2xl font-black tracking-[-0.03em] text-zinc-950 sm:text-3xl">
                          {activeOrder.vendor}
                        </h3>
                        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-zinc-500">
                          {activeOrder.meal}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:flex sm:shrink-0">
                      <div className="rounded-[16px] bg-zinc-950 px-5 py-3.5 text-white shadow-[0_10px_24px_-12px_rgba(0,0,0,0.5)]">
                        <div className="mb-1.5 flex items-center gap-2">
                          <Clock className="h-4 w-4 text-[#F5A800]" />
                          <p className="text-[9px] font-black uppercase tracking-[0.16em] text-white/40">
                            ETA
                          </p>
                        </div>
                        <p className="text-xl font-black tracking-[-0.03em]">{activeOrder.eta}</p>
                      </div>

                      <div className="rounded-[16px] border border-[#F5A800]/20 bg-[#F5A800]/10 px-5 py-3.5">
                        <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#D88B00]">
                          Total
                        </p>
                        <p className="mt-1.5 text-xl font-black tracking-[-0.03em] text-zinc-950">
                          {activeOrder.price}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="rounded-[20px] border border-zinc-100 bg-zinc-50/60 p-5">
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                          Delivery progress
                        </p>
                        <p className="mt-1 text-sm text-zinc-500">
                          Rider: <span className="font-bold text-zinc-950">{activeOrder.rider}</span>
                        </p>
                      </div>
                      <span className="inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-emerald-700">
                        {activeOrder.timeLeft} away
                      </span>
                    </div>

                    <div className="mb-5 h-2 overflow-hidden rounded-full bg-zinc-100">
                      <div
                        className="h-full rounded-full bg-[#F5A800]"
                        style={{ width: `${activeOrder.progress}%` }}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                      {orderSteps.map((step) => {
                        const Icon = step.icon;
                        return (
                          <div
                            key={step.label}
                            className={`rounded-[16px] p-3.5 text-center transition-colors duration-200 ${
                              step.active ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-400'
                            }`}
                          >
                            <div
                              className={`mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-[12px] ${
                                step.active ? 'bg-[#F5A800]/15 text-[#F5A800]' : 'bg-zinc-50 text-zinc-300'
                              }`}
                            >
                              <Icon className="h-4 w-4" />
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-[0.14em]">
                              {step.short}
                            </p>
                            <p className={`mt-1 hidden text-xs sm:block ${step.active ? 'text-white/45' : 'text-zinc-400'}`}>
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
                  <div className="relative h-full min-h-[280px] overflow-hidden rounded-[20px] bg-zinc-100 lg:min-h-full">
                    <img alt="Order tracking map" className="h-full w-full object-cover" src={activeOrder.map} />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/65 via-zinc-950/10 to-transparent" />

                    <div className="absolute left-[30%] top-[42%] h-5 w-5 rounded-full bg-[#F5A800]">
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#F5A800]/60" />
                      <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="rounded-[16px] bg-white/15 p-4 text-white backdrop-blur-xl">
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/50">
                              Current location
                            </p>
                            <p className="mt-1 font-black tracking-[-0.02em]">Near Faculty Gate</p>
                          </div>
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#F5A800] text-white">
                            <MapPin className="h-4 w-4" />
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
        <motion.section variants={fadeUp} custom={3} className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#F5A800]/10 text-[#D88B00]">
              <Receipt className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-serif italic text-2xl font-bold tracking-[-0.03em] text-zinc-950">
                Recent Orders
              </h2>
              <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                Your completed reservations
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {recentOrders.map((receipt, index) => (
              <motion.article
                key={receipt.id}
                variants={fadeUp}
                custom={index + 4}
                className="rounded-[20px] border border-zinc-100 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F5A800]/25"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="mb-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#D88B00]">
                      #{receipt.id}
                    </p>
                    <h4 className="truncate font-black tracking-[-0.02em] text-zinc-950">{receipt.name}</h4>
                    <p className="mt-1 text-sm text-zinc-400">{receipt.date}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-emerald-700">
                    {receipt.status}
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-zinc-100 pt-4">
                  <p className="text-xl font-black tracking-[-0.03em] text-zinc-950">{receipt.price}</p>
                  <Link
                    to={`/order/${receipt.id}`}
                    className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-zinc-950 text-white transition-colors duration-200 hover:bg-[#F5A800]"
                    aria-label={`View ${receipt.id}`}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </motion.div>

      <style>{`
        .orders-page .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </UserLayout>
  );
};

export default StudentOrders;
