import React from 'react';
import UserLayout from '../components/UserLayout';
import {
  Clock,
  MapPin,
  Package,
  ArrowLeft,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getOrder, trackOrder, cancelOrder } from '../api/orders';
import { createRating } from '../api/ratings';
import { formatNaira } from '../utils/currency';
import { describeOrderStatus, isCancellable } from '../utils/orderStatus';

const DONE_STATUSES = new Set(['completed', 'delivered']);
// The backend's `comment` field is a fixed enum, not free text.
const COMMENT_OPTIONS = ['excellent', 'good', 'bad', 'terrible'];

function RatingForm({ label, type, targetId, orderId, onSubmitted }) {
  const [value, setValue] = React.useState(0);
  const [comment, setComment] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (value === 0) {
      toast.error('Pick a star rating first');
      return;
    }
    if (!comment) {
      toast.error('Pick how it went first');
      return;
    }
    setIsSubmitting(true);
    try {
      await createRating({ type, targetId, orderId, ratingValue: value, comment });
      setSubmitted(true);
      onSubmitted?.();
      toast.success('Thanks for the rating');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return <p className="text-sm text-emerald-600 font-bold">Thanks for rating the {label}!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <p className="text-xs font-black uppercase tracking-widest text-zinc-500">Rate the {label}</p>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button key={star} type="button" onClick={() => setValue(star)} aria-label={`${star} stars`}>
            <Star className={`w-6 h-6 ${star <= value ? 'text-primary fill-current' : 'text-zinc-200'}`} />
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        {COMMENT_OPTIONS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setComment(option)}
            className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition ${
              comment === option ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-3 bg-zinc-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-colors disabled:opacity-60"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Rating'}
      </button>
    </form>
  );
}

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = React.useState(null);
  const [track, setTrack] = React.useState(null);
  const [status, setStatus] = React.useState('loading');
  const [isCancelling, setIsCancelling] = React.useState(false);

  React.useEffect(() => {
    let active = true;
    Promise.all([getOrder(id), trackOrder(id)])
      .then(([orderData, trackData]) => {
        if (!active) return;
        setOrder(orderData);
        setTrack(trackData);
        setStatus('loaded');
      })
      .catch(() => active && setStatus('error'));
    return () => {
      active = false;
    };
  }, [id]);

  async function handleCancel() {
    setIsCancelling(true);
    try {
      await cancelOrder(id);
      setOrder((prev) => ({ ...prev, status: 'cancelled' }));
      toast.success('Order cancelled');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsCancelling(false);
    }
  }

  if (status === 'loading') {
    return (
      <UserLayout>
        <p className="text-center text-zinc-400 py-20">Loading order...</p>
      </UserLayout>
    );
  }

  if (status === 'error' || !order) {
    return (
      <UserLayout>
        <p className="text-center text-zinc-400 py-20">Couldn't find this order.</p>
      </UserLayout>
    );
  }

  const { label: statusLabel } = describeOrderStatus(order.status);

  return (
    <UserLayout>
      <div className="max-w-5xl mx-auto space-y-12 pb-32">
        {/* Header with Back Button */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-zinc-900 font-headline">
          <div>
            <Link
              to="/orders"
              className="flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors text-[10px] font-black uppercase tracking-widest mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Back to History
            </Link>
            <h1 className="text-5xl font-black tracking-tighter uppercase leading-none">
              Status: <span className="text-primary italic">{statusLabel}</span>
            </h1>
            <p className="text-zinc-500 font-medium font-body mt-2">
              Heat Session{' '}
              <span className="text-zinc-900 font-bold">
                #{order.orderNumber ?? order.id}
              </span>
            </p>
          </div>
          <div className="flex gap-4">
            {isCancellable(order.status) && (
              <button
                onClick={handleCancel}
                disabled={isCancelling}
                className="px-8 py-4 bg-white border border-red-100 text-red-500 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-50 transition-all disabled:opacity-60"
              >
                {isCancelling ? 'Cancelling...' : 'Cancel Order'}
              </button>
            )}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Progress Timeline */}
          <div className="lg:col-span-8 space-y-10">
            {/* Interactive Status Tracker */}
            <section className="bg-white p-10 rounded-[3rem] border border-zinc-50 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                <ShieldCheck className="w-12 h-12 text-primary opacity-10" />
              </div>
              <h3 className="text-2xl font-black font-headline uppercase tracking-tight text-zinc-900 mb-12">
                Heat Timeline
              </h3>

              {track?.timeline?.length ? (
                <div className="space-y-12 relative">
                  <div className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-zinc-100"></div>
                  {track.timeline.map((step, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div
                        className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 border-4 border-white shadow-xl ${
                          step.status === 'completed' ? 'bg-green-500 text-white' : step.status === 'current' ? 'bg-primary text-white scale-110' : 'bg-zinc-100 text-zinc-300'
                        }`}
                      >
                        <Package className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-black uppercase tracking-widest text-zinc-900">{step.label}</h4>
                          <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">
                            {step.time ? new Date(step.time).toLocaleTimeString() : '--:--'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-zinc-400 text-sm">No tracking events yet.</p>
              )}
            </section>

            {/* Order Content Summary */}
            <section className="bg-zinc-50/50 p-10 rounded-[3rem] border border-zinc-100 space-y-8">
              <h3 className="text-2xl font-black font-headline uppercase tracking-tight text-zinc-900">
                Session Breakdown
              </h3>
              <div className="space-y-6">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center gap-4 group">
                    <div className="flex min-w-0 items-center gap-4">
                      <span className="w-8 h-8 shrink-0 flex items-center justify-center bg-white border border-zinc-100 rounded-xl text-xs font-black text-zinc-900 shadow-sm">
                        {item.qty}
                      </span>
                      <span className="truncate text-xs font-black uppercase tracking-tight text-zinc-600">{item.name}</span>
                    </div>
                    <span className="shrink-0 text-sm font-black text-zinc-900">{formatNaira(item.price)}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center group">
                  <span className="text-xs font-black uppercase tracking-tight text-zinc-600">Delivery Fee</span>
                  <span className="text-sm font-black text-zinc-900">{formatNaira(order.deliveryFee)}</span>
                </div>
              </div>
              <div className="pt-8 border-t border-zinc-100 flex justify-between items-end">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Total Value</p>
                  <p className="text-4xl font-headline font-black text-primary tracking-tighter mt-1">
                    {formatNaira(order.grandTotal)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Paid to Vendor via</p>
                  <p className="text-sm font-bold text-zinc-900 mt-1 uppercase tracking-tight">Direct Transfer</p>
                </div>
              </div>
            </section>

            {DONE_STATUSES.has(order.status) && (
              <section className="bg-white p-10 rounded-[3rem] border border-zinc-50 shadow-sm space-y-8">
                <h3 className="text-2xl font-black font-headline uppercase tracking-tight text-zinc-900">
                  Rate Your Experience
                </h3>
                <RatingForm label="vendor" type="vendor" targetId={order.vendorId} orderId={order.id} />
                {order.deliveryMode === 'agent' && order.agentId && (
                  <div className="pt-6 border-t border-zinc-100">
                    <RatingForm label="delivery agent" type="agent" targetId={order.agentId} orderId={order.id} />
                  </div>
                )}
              </section>
            )}
          </div>

          {/* Right: Metadata & Receipt */}
          <aside className="lg:col-span-4 space-y-10">
            {/* Proof of Payment View */}
            <section className="bg-white p-8 rounded-[3rem] border border-zinc-100 shadow-sm space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900">Your Receipt</h4>
              {order.popImageUrl ? (
                <div className="aspect-[3/4] rounded-[2rem] bg-zinc-100 overflow-hidden relative border-2 border-primary/20">
                  <img src={order.popImageUrl} alt="Proof of payment" className="w-full h-full object-cover" />
                </div>
              ) : (
                <p className="text-zinc-400 text-xs">No proof of payment submitted yet.</p>
              )}
            </section>

            {/* Logistics Sidebar Info */}
            <section className="bg-zinc-900 p-8 rounded-[3rem] text-white shadow-2xl space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full"></div>
              <div className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Delivery Address</p>
                  <p className="text-sm font-bold flex items-start gap-2">
                    <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-primary" /> <span className="break-words">{order.deliveryAddress}</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Assigned Agent</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Package className="w-5 h-5 text-zinc-500" />
                    </div>
                    <p className="text-sm font-bold text-zinc-400 italic">
                      {track?.agent ? track.agent.full_name ?? 'Assigned' : 'No agent assigned yet'}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {track?.estimatedMinutes != null && (
              <div className="p-10 border-2 border-dashed border-zinc-100 rounded-[3rem] text-center">
                <Clock className="w-8 h-8 text-zinc-100 mx-auto mb-4" />
                <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.2em]">
                  Estimated: {track.estimatedMinutes}m
                </p>
              </div>
            )}
          </aside>
        </div>

        <footer className="text-center pt-10">
          <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.4em]">
            © 2024 BOLE4US • MISSION CRITICAL
          </p>
        </footer>
      </div>
    </UserLayout>
  );
};

export default OrderDetail;
