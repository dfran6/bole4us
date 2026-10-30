import { CheckCircle, ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import toast from 'react-hot-toast';
import VendorLayout from '../components/VendorLayout';
import { listVendorOrders, updateOrderStatus } from '../api/vendorOrders';
import { cancelOrder } from '../api/orders';
import { formatNaira } from '../utils/currency';

const COLUMNS = [
  { key: 'incoming', title: 'Incoming', dotClass: 'bg-orange-400', statuses: ['pending', 'confirmed'], nextStatus: 'preparing', actionLabel: 'Move to Grill' },
  { key: 'grilling', title: 'Grilling', dotClass: 'bg-[#F5A800]', statuses: ['preparing'], nextStatus: 'ready', actionLabel: 'Mark Ready' },
  { key: 'ready', title: 'Ready', dotClass: 'bg-emerald-500', statuses: ['ready'], nextStatus: null, actionLabel: null },
];

const VendorOrders = () => {
  const reduceMotion = useReducedMotion();
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState('loading');
  const cardMotionProps = {
    whileHover: reduceMotion ? undefined : { y: -4 },
    whileTap: reduceMotion ? undefined : { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 28 },
  };

  function refresh() {
    listVendorOrders({ limit: 50 })
      .then(({ orders: results }) => {
        setOrders(results);
        setStatus('loaded');
      })
      .catch(() => setStatus('error'));
  }

  useEffect(() => {
    refresh();
  }, []);

  async function handleAdvance(order, nextStatus) {
    try {
      await updateOrderStatus(order.id, nextStatus);
      setOrders((prev) => prev.map((o) => (o.id === order.id ? { ...o, status: nextStatus } : o)));
    } catch (error) {
      toast.error(error.message);
    }
  }

  async function handleDecline(order) {
    try {
      await cancelOrder(order.id);
      setOrders((prev) => prev.filter((o) => o.id !== order.id));
    } catch (error) {
      toast.error(error.message);
    }
  }

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
            </div>
          </div>
        </header>

        {status === 'loading' && <p className="text-zinc-400">Loading orders...</p>}
        {status === 'error' && <p className="text-zinc-400">Couldn't load orders. Try again shortly.</p>}

        {status === 'loaded' && (
          <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">
            {COLUMNS.map((column) => {
              const columnOrders = orders.filter((order) => column.statuses.includes(order.status));
              return (
                <section key={column.key} className="flex h-[calc(100vh-280px)] flex-col rounded-[20px] border border-zinc-100 bg-zinc-50/60 p-5">
                  <div className="mb-5 flex items-center justify-between px-2">
                    <h3 className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                      <span className={`h-2 w-2 rounded-full ${column.dotClass}`} />
                      {column.title}
                    </h3>
                    <span className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[10px] font-black text-zinc-950">
                      {columnOrders.length}
                    </span>
                  </div>

                  <div className="flex-1 space-y-3 overflow-y-auto pb-4 pr-1">
                    {columnOrders.length === 0 && <p className="text-xs text-zinc-400 px-2">Nothing here right now.</p>}
                    {columnOrders.map((order) => (
                      <motion.article
                        key={order.id}
                        {...cardMotionProps}
                        className="rounded-[16px] border border-zinc-100 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_10px_24px_-18px_rgba(0,0,0,0.25)] transition-colors duration-200 hover:border-[#F5A800]/30"
                      >
                        <div className="mb-4 flex items-start justify-between">
                          <div>
                            <span className="rounded-[8px] bg-zinc-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                              #{order.orderNumber ?? order.id}
                            </span>
                            <h4 className="mt-2 font-black uppercase tracking-[-0.02em] text-zinc-950">
                              {order.customerName ?? 'Customer'}
                            </h4>
                          </div>
                        </div>
                        <div className="mb-5 space-y-2 rounded-[12px] border border-zinc-100 bg-zinc-50 p-3.5">
                          {order.items.map((item) => (
                            <p key={item.id} className="flex justify-between text-xs font-bold text-zinc-950">
                              <span>{item.qty}x {item.name}</span>
                              <span className="text-zinc-400">{formatNaira(item.price)}</span>
                            </p>
                          ))}
                        </div>
                        {column.actionLabel ? (
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => handleAdvance(order, column.nextStatus)}
                              className="flex flex-1 items-center justify-center gap-2 rounded-[14px] bg-zinc-950 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:bg-[#F5A800] active:scale-95"
                            >
                              <CheckCircle className="h-4 w-4" />
                              {column.actionLabel}
                            </button>
                            {order.status === 'pending' && (
                              <button
                                type="button"
                                onClick={() => handleDecline(order)}
                                className="rounded-[14px] border border-zinc-200 px-4 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400 transition hover:border-red-100 hover:bg-red-50 hover:text-red-500"
                              >
                                Decline
                              </button>
                            )}
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 rounded-[14px] border border-emerald-100 bg-emerald-50 p-3 text-emerald-700">
                            <ShoppingBag className="h-4 w-4" />
                            <span className="text-[10px] font-black uppercase tracking-[0.14em]">Ready for pickup</span>
                          </div>
                        )}
                      </motion.article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
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
