import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Receipt,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import UserLayout from '../components/UserLayout';
import { getMyOrders } from '../api/orders';
import { formatNaira } from '../utils/currency';
import { describeOrderStatus } from '../utils/orderStatus';

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

const DONE_STATUSES = new Set(['completed', 'delivered', 'cancelled']);

const StudentOrders = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let active = true;
    getMyOrders()
      .then(({ orders: results }) => active && (setOrders(results), setStatus('loaded')))
      .catch(() => active && setStatus('error'));
    return () => {
      active = false;
    };
  }, []);

  const activeOrders = orders.filter((o) => !DONE_STATUSES.has(o.status));
  const pastOrders = orders.filter((o) => DONE_STATUSES.has(o.status));
  const featured = activeOrders[0];
  const completedCount = orders.filter((o) => o.status === 'completed' || o.status === 'delivered').length;
  const totalSpent = pastOrders
    .filter((o) => o.status !== 'cancelled')
    .reduce((sum, o) => sum + Number(o.grandTotal || 0), 0);

  const summary = [
    { label: 'Active orders', value: String(activeOrders.length), desc: 'Currently moving', icon: Zap },
    { label: 'Completed', value: String(completedCount), desc: 'All-time orders', icon: CheckCircle },
    { label: 'Total spent', value: formatNaira(totalSpent), desc: 'Delivered orders', icon: Receipt },
  ];

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

        {status === 'loading' && <p className="text-zinc-400">Loading your orders...</p>}
        {status === 'error' && <p className="text-zinc-400">Couldn't load your orders. Try again shortly.</p>}

        {status === 'loaded' && (
          <>
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
            {featured && (
              <motion.section variants={fadeUp} custom={2}>
                <Link to={`/order/${featured.id}`} className="block group">
                  <article className="overflow-hidden rounded-[24px] border border-zinc-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03),0_28px_54px_-32px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 p-5 sm:p-6 lg:p-8">
                    <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <p className="mb-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#D88B00]">
                          #{featured.orderNumber ?? featured.id}
                        </p>
                        <h3 className="truncate font-serif italic text-2xl font-black tracking-[-0.03em] text-zinc-950 sm:text-3xl">
                          {describeOrderStatus(featured.status).label}
                        </h3>
                        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-zinc-500">
                          {featured.deliveryAddress}
                        </p>
                      </div>

                      <div className="rounded-[16px] border border-[#F5A800]/20 bg-[#F5A800]/10 px-5 py-3.5 shrink-0">
                        <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#D88B00]">
                          Total
                        </p>
                        <p className="mt-1.5 text-xl font-black tracking-[-0.03em] text-zinc-950">
                          {formatNaira(featured.grandTotal)}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-[20px] border border-zinc-100 bg-zinc-50/60 p-5">
                      <p className="mb-4 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                        Delivery progress
                      </p>
                      <div className="mb-2 h-2 overflow-hidden rounded-full bg-zinc-100">
                        <div
                          className="h-full rounded-full bg-[#F5A800]"
                          style={{ width: `${describeOrderStatus(featured.status).progress}%` }}
                        />
                      </div>
                      <p className="flex items-center gap-2 text-sm text-zinc-500">
                        <MapPin className="h-4 w-4 text-[#F5A800]" />
                        {featured.deliveryMode === 'agent' ? 'Agent delivery' : 'Self pickup'}
                      </p>
                    </div>
                  </article>
                </Link>
              </motion.section>
            )}

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

              {pastOrders.length === 0 ? (
                <p className="text-zinc-400 text-sm">No past orders yet.</p>
              ) : (
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                  {pastOrders.map((receipt, index) => (
                    <motion.article
                      key={receipt.id}
                      variants={fadeUp}
                      custom={index + 4}
                      className="rounded-[20px] border border-zinc-100 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F5A800]/25"
                    >
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="mb-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#D88B00]">
                            #{receipt.orderNumber ?? receipt.id}
                          </p>
                          <h4 className="truncate font-black tracking-[-0.02em] text-zinc-950">{receipt.deliveryAddress}</h4>
                          <p className="mt-1 text-sm text-zinc-400">{new Date(receipt.createdAt).toLocaleDateString()}</p>
                        </div>
                        <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-emerald-700">
                          {describeOrderStatus(receipt.status).label}
                        </span>
                      </div>

                      <div className="flex items-center justify-between border-t border-zinc-100 pt-4">
                        <p className="text-xl font-black tracking-[-0.03em] text-zinc-950">{formatNaira(receipt.grandTotal)}</p>
                        <Link
                          to={`/order/${receipt.id}`}
                          className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-zinc-950 text-white transition-colors duration-200 hover:bg-[#F5A800]"
                          aria-label={`View ${receipt.orderNumber ?? receipt.id}`}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </motion.section>
          </>
        )}
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
