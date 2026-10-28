import { ArrowRight, CheckCircle, DollarSign, Flame, Package, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import VendorLayout from '../components/VendorLayout';
import { useAuth } from '../context/AuthContext';
import { updateVendorStatus, findMyVendorProfile } from '../api/vendors';
import { getVendorAnalytics } from '../api/vendorAnalytics';
import { listVendorDebts } from '../api/vendorDebts';
import { listInventory } from '../api/vendorInventory';
import { listVendorOrders, updateOrderStatus } from '../api/vendorOrders';
import { cancelOrder } from '../api/orders';
import { formatNaira } from '../utils/currency';

const NEXT_STATUS = {
  pending: { next: 'confirmed', label: 'Verify Payment' },
  confirmed: { next: 'preparing', label: 'Move to Grill' },
  preparing: { next: 'ready', label: 'Mark Ready' },
};

const LOW_STOCK_THRESHOLD = 10;

const VendorHub = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(true);
  const [vendorProfile, setVendorProfile] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [debts, setDebts] = useState(null);
  const [lowStockItems, setLowStockItems] = useState([]);
  const [incomingOrders, setIncomingOrders] = useState([]);

  useEffect(() => {
    findMyVendorProfile(user.id).then((vendor) => {
      if (vendor) {
        setVendorProfile(vendor);
        setIsOpen(vendor.isOpen);
      }
    });
    getVendorAnalytics().then(setAnalytics).catch(() => {});
    listVendorDebts().then(setDebts).catch(() => {});
    listInventory({ limit: 50 })
      .then(({ menuItems }) => setLowStockItems(menuItems.filter((item) => item.stockQty < LOW_STOCK_THRESHOLD)))
      .catch(() => {});
    listVendorOrders({ limit: 10 })
      .then(({ orders }) => setIncomingOrders(orders.filter((order) => NEXT_STATUS[order.status])))
      .catch(() => {});
  }, [user.id]);

  async function handleToggleOpen(nextOpen) {
    setIsOpen(nextOpen);
    try {
      await updateVendorStatus(nextOpen);
    } catch (error) {
      setIsOpen(!nextOpen);
      toast.error(error.message);
    }
  }

  async function handleAdvanceOrder(order) {
    const transition = NEXT_STATUS[order.status];
    if (!transition) return;
    try {
      await updateOrderStatus(order.id, transition.next);
      setIncomingOrders((prev) => prev.filter((o) => o.id !== order.id));
    } catch (error) {
      toast.error(error.message);
    }
  }

  async function handleDeclineOrder(order) {
    try {
      await cancelOrder(order.id);
      setIncomingOrders((prev) => prev.filter((o) => o.id !== order.id));
    } catch (error) {
      toast.error(error.message);
    }
  }

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
              Live updates for <span className="font-bold text-zinc-950">{vendorProfile?.businessName ?? user.fullName}</span>
            </p>
          </div>

          {/* Open/Closed toggle */}
          <div className="relative flex w-full shrink-0 items-center overflow-hidden rounded-[18px] border border-zinc-200 bg-white p-1 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_8px_20px_-12px_rgba(0,0,0,0.15)] md:w-auto">
            <button
              type="button"
              onClick={() => handleToggleOpen(true)}
              className="relative flex items-center gap-2 rounded-[14px] px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.16em] transition-colors duration-200"
            >
              {isOpen && (
                <motion.span
                  layoutId="kitchen-status-pill"
                  className="absolute inset-0 rounded-[14px] bg-emerald-500 shadow-[0_6px_16px_-6px_rgba(16,185,129,0.6)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className={`relative z-10 h-1.5 w-1.5 rounded-full ${isOpen ? 'bg-white' : 'bg-zinc-300'}`} />
              <span className={`relative z-10 ${isOpen ? 'text-white' : 'text-zinc-400'}`}>Open</span>
            </button>
            <button
              type="button"
              onClick={() => handleToggleOpen(false)}
              className="relative rounded-[14px] px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.16em] transition-colors duration-200"
            >
              {!isOpen && (
                <motion.span
                  layoutId="kitchen-status-pill"
                  className="absolute inset-0 rounded-[14px] bg-zinc-950"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className={`relative z-10 ${!isOpen ? 'text-white' : 'text-zinc-400 hover:text-zinc-700'}`}>Closed</span>
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
              {analytics ? formatNaira(analytics.todayRevenue) : '—'}
            </h3>
            {analytics?.revenueChangePct != null && (
              <p className="mt-2 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                <TrendingUp className="h-3.5 w-3.5" />
                {Number(analytics.revenueChangePct) >= 0 ? '+' : ''}{analytics.revenueChangePct}% from yesterday
              </p>
            )}
          </div>

          <div className="group rounded-[20px] border border-zinc-100 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(0,0,0,0.04),0_24px_44px_-20px_rgba(0,0,0,0.22)]">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
              Active Orders
            </p>
            <h3 className="mt-4 font-serif italic text-3xl font-black tracking-[-0.03em] text-zinc-950">
              {analytics ? String(analytics.activeOrders).padStart(2, '0') : '—'}
            </h3>
            <p className="mt-2 text-[11px] font-bold text-zinc-500">
              {analytics ? `${analytics.pendingPrep} pending prep` : ''}
            </p>
          </div>

          <div className="group rounded-[20px] bg-zinc-950 p-6 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_20px_40px_-20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(0,0,0,0.15),0_28px_50px_-20px_rgba(0,0,0,0.55)]">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
              Rating
            </p>
            <h3 className="mt-4 font-serif italic text-3xl font-black tracking-[-0.03em] text-white">
              {analytics ? Number(analytics.rating).toFixed(1) : '—'} <span className="text-lg text-zinc-500">/ 5.0</span>
            </h3>
            <p className="mt-2 text-[11px] font-bold text-[#F5A800]">
              {analytics ? `${analytics.reviewCount} reviews` : ''}
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

            {incomingOrders.length === 0 && (
              <p className="text-sm text-zinc-400">No orders need your attention right now.</p>
            )}

            {incomingOrders.map((order) => {
              const transition = NEXT_STATUS[order.status];
              return (
                <article key={order.id} className="flex items-center gap-5 rounded-[20px] border border-zinc-100 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_12px_28px_-20px_rgba(0,0,0,0.18)]">
                  <div className="min-w-0 flex-1">
                    <h4 className="truncate font-black tracking-[-0.02em] text-zinc-950">
                      #{order.orderNumber ?? order.id} <span className="font-medium text-zinc-400">{order.customerName ?? 'Customer'}</span>
                    </h4>
                    <p className="mt-1 truncate text-sm text-zinc-500">
                      {order.items.map((item) => `${item.qty}x ${item.name}`).join(', ')}
                    </p>
                    <p className="mt-1.5 text-sm text-zinc-500">
                      Total: <span className="font-black text-zinc-950">{formatNaira(order.grandTotal)}</span>
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-3">
                    <button
                      type="button"
                      onClick={() => handleAdvanceOrder(order)}
                      className="flex items-center gap-2 rounded-[14px] bg-[#F5A800] px-4 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-zinc-950 active:scale-95"
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span className="hidden sm:inline">{transition.label}</span>
                    </button>
                    {order.status === 'pending' && (
                      <button
                        type="button"
                        onClick={() => handleDeclineOrder(order)}
                        className="rounded-[14px] border border-zinc-200 px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400 transition hover:border-red-100 hover:bg-red-50 hover:text-red-500"
                      >
                        Decline
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
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
                      {debts ? formatNaira(debts.totalOwed) : '—'}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                      Outstanding
                    </p>
                    <p className="mt-1 text-lg font-bold text-[#F5A800]">
                      {debts ? String(debts.outstandingAgents).padStart(2, '0') : '—'} Agents
                    </p>
                  </div>
                </div>

                <div className="space-y-3 rounded-[16px] bg-white/[0.05] p-4">
                  {debts?.debts.length === 0 && <p className="text-xs text-zinc-500">No outstanding agent debts.</p>}
                  {debts?.debts.map((debt) => (
                    <div key={debt.agentId} className="flex items-center justify-between text-xs">
                      <span className="font-bold text-zinc-400">{debt.agentName}</span>
                      <span className="font-black text-white">{formatNaira(debt.amountOwed)}</span>
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
                  Low Stock Alerts
                </h3>
              </div>

              <div className="space-y-2.5">
                {lowStockItems.length === 0 && <p className="text-sm text-zinc-400">Everything is well stocked.</p>}
                {lowStockItems.map((item) => {
                  const soldOut = item.stockQty === 0;
                  return (
                    <div
                      key={item.id}
                      className={`flex items-center justify-between rounded-[14px] border border-zinc-100 p-3.5 ${soldOut ? 'opacity-50' : ''}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-[12px] ${soldOut ? 'bg-zinc-100' : 'bg-red-50'}`}>
                          <Flame className={`h-4 w-4 ${soldOut ? 'text-zinc-300' : 'text-red-500 fill-current'}`} />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-zinc-950">{item.name}</h5>
                          <p className={`mt-0.5 text-[10px] font-black uppercase tracking-[0.14em] ${soldOut ? 'text-zinc-400' : 'text-red-500'}`}>
                            {item.stockQty} portions
                          </p>
                        </div>
                      </div>
                      <Package className="h-4 w-4 text-zinc-300" />
                    </div>
                  );
                })}
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
