import {
  ArrowUpRight,
  CheckCircle,
  Clock,
  Flame,
  MapPin,
  Navigation,
  Package,
  Radio,
  Star,
  Target,
  TrendingUp,
  Wallet,
  Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import AgentLayout from '../components/AgentLayout';
import MapComponent from '../components/MapComponent';
import { useAuth } from '../context/AuthContext';
import { findMyAgentProfile, getAgentAnalytics, listActiveOrders, claimMission, listMissionHistory } from '../api/agents';
import { getVendor } from '../api/vendors';
import { formatNaira } from '../utils/currency';

const DEFAULT_CENTER = [3.3792, 6.5244];

const AgentHub = () => {
  const { user } = useAuth();
  const [agentProfile, setAgentProfile] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [signals, setSignals] = useState([]);
  const [recentMissions, setRecentMissions] = useState([]);
  const [status, setStatus] = useState('loading');
  const [claimingIds, setClaimingIds] = useState(() => new Set());

  async function loadSignals() {
    const orders = await listActiveOrders();
    const withVendors = await Promise.all(
      orders.map(async (order) => {
        const vendor = await getVendor(order.vendorId).catch(() => null);
        return { ...order, vendorName: vendor?.businessName ?? 'Unknown vendor', vendorLat: vendor?.lat, vendorLng: vendor?.lng };
      })
    );
    setSignals(withVendors);
  }

  function loadRecentMissions() {
    listMissionHistory()
      .then((missions) => setRecentMissions(missions.filter((m) => m.status === 'delivered').slice(0, 5)))
      .catch(() => {});
  }

  function loadHubData() {
    findMyAgentProfile(user.id).then(setAgentProfile).catch(() => {});
    getAgentAnalytics().then(setAnalytics).catch(() => {});
    loadSignals().finally(() => setStatus('loaded'));
    loadRecentMissions();
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- data fetch on mount, same pattern as the other list pages
    loadHubData();
  }, [user.id]);

  async function handleClaim(order) {
    if (claimingIds.has(order.id)) return;
    setClaimingIds((prev) => new Set(prev).add(order.id));
    try {
      await claimMission(order.id);
      setSignals((prev) => prev.filter((s) => s.id !== order.id));
      toast.success('Mission claimed. Check Missions for details');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setClaimingIds((prev) => {
        const copy = new Set(prev);
        copy.delete(order.id);
        return copy;
      });
    }
  }

  function handleToggleAvailability() {
    toast('Availability toggling isn\'t live yet', { icon: 'ℹ️' });
  }

  const markers = signals
    .filter((s) => s.vendorLat != null)
    .map((s) => ({ lngLat: [s.vendorLng, s.vendorLat], title: s.vendorName, desc: `Active Signal: #${s.orderNumber ?? s.id}`, color: '#FF4D00' }));

  return (
    <AgentLayout>
      <div className="agent-hub mx-auto w-full max-w-6xl space-y-10 pb-20 xl:px-0">

        {/* Header */}
        <header className="fade-up flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <h1
              className="font-serif italic font-black leading-[0.9] tracking-[-0.04em] text-zinc-950"
              style={{ fontSize: 'clamp(34px, 7vw, 52px)' }}
            >
              Velocity <span className="not-italic font-semibold text-[#D88B00]">Hub</span>
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-500">
              Deployment zone: <span className="font-bold text-zinc-950">{agentProfile?.primaryQuadrant ?? '—'}</span>
            </p>
          </div>

          <button
            type="button"
            onClick={handleToggleAvailability}
            className="flex items-center gap-2.5 rounded-[18px] border border-blue-100 bg-blue-50 px-5 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_8px_20px_-12px_rgba(37,99,235,0.25)]"
          >
            <span className={`h-2 w-2 rounded-full ${agentProfile?.isOpen ? 'animate-pulse bg-blue-500' : 'bg-zinc-300'}`} />
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-700">
              Signal: {agentProfile?.isOpen ? 'Active' : 'Offline'}
            </span>
          </button>
        </header>

        {/* Analytics cards */}
        <section className="stagger-in grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { label: 'Total Revenue', value: analytics ? formatNaira(analytics.totalRevenue) : '—', icon: TrendingUp, color: 'text-emerald-600' },
            { label: 'Signal Success', value: analytics ? `${analytics.successRate}%` : '—', icon: Target, color: 'text-[#F5A800]' },
            { label: 'Pending Missions', value: analytics ? String(analytics.pendingMissions) : '—', icon: Zap, color: 'text-amber-500' },
            { label: 'Hub Ranking', value: analytics ? `#${analytics.hubRanking}` : '—', icon: Star, color: 'text-blue-500' },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group rounded-[20px] border border-zinc-100 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.22)]"
              >
                <div className={`mb-5 flex h-10 w-10 items-center justify-center rounded-[13px] bg-zinc-50 ${stat.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  {stat.label}
                </p>
                <h4 className="font-serif italic mt-1 text-3xl font-black tracking-[-0.03em] text-zinc-950">
                  {stat.value}
                </h4>
              </div>
            );
          })}
        </section>

        {/* Map */}
        <section className="fade-up h-[420px] w-full overflow-hidden rounded-[20px] border border-zinc-100 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_28px_54px_-28px_rgba(0,0,0,0.3)]">
          <MapComponent center={markers[0]?.lngLat ?? DEFAULT_CENTER} zoom={13} markers={markers} />
        </section>

        {/* Signals + Earnings grid */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">

          {/* Active Signals (7 cols) */}
          <div className="min-w-0 lg:col-span-7 space-y-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="font-serif italic text-2xl font-bold tracking-[-0.03em] text-zinc-950">
                  Active Signals
                </h3>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                  Available to grab
                </p>
              </div>
              <button
                type="button"
                onClick={loadSignals}
                className="press-scale flex shrink-0 items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:border-[#F5A800]/40 hover:text-[#D88B00]"
              >
                <Radio className="h-3.5 w-3.5" /> Refresh Pool
              </button>
            </div>

            {status === 'loaded' && signals.length === 0 && (
              <p className="text-sm text-zinc-400">No unclaimed signals right now.</p>
            )}

            <div className="stagger-in space-y-4">
              {signals.map((order) => {
                const fee = Number(order.grandTotal) - Number(order.foodTotal);
                return (
                  <article
                    key={order.id}
                    className="group rounded-[20px] border border-zinc-100 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F5A800]/25 hover:shadow-[0_20px_40px_-20px_rgba(245,168,0,0.2)]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-5">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-zinc-950 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105">
                          <Flame className="h-7 w-7 fill-current text-[#F5A800]" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="truncate font-black uppercase tracking-[-0.02em] text-zinc-950">
                            {order.vendorName}
                          </h4>
                          <p className="mt-1 flex items-center gap-1.5 text-xs text-zinc-400">
                            <MapPin className="h-3 w-3 shrink-0 text-[#F5A800]" />
                            {order.customerName ?? 'Customer'}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 text-right">
                        <span className="rounded-full bg-[#F5A800]/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-[#D88B00]">
                          Unclaimed
                        </span>
                        <span className="font-serif italic text-2xl font-black tracking-[-0.03em] text-zinc-950">
                          {formatNaira(fee)}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1">
                      <button
                        type="button"
                        onClick={() => handleClaim(order)}
                        disabled={claimingIds.has(order.id)}
                        className="press-scale flex items-center justify-center gap-2 rounded-[14px] bg-zinc-950 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_-12px_rgba(0,0,0,0.5)] transition-colors duration-200 hover:bg-[#F5A800] disabled:opacity-50"
                      >
                        {claimingIds.has(order.id) ? 'Claiming...' : 'Grab Mission'} <Navigation className="h-4 w-4" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Earnings + Recent (5 cols) */}
          <div className="min-w-0 lg:col-span-5 space-y-6">

            {/* Earnings dark card */}
            <section className="rounded-[20px] bg-zinc-950 p-6 text-white shadow-[0_1px_1px_rgba(0,0,0,0.1),0_24px_48px_-24px_rgba(0,0,0,0.55)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-white/10">
                    <Wallet className="h-5 w-5 text-[#F5A800]" />
                  </div>
                  <h4 className="font-black uppercase tracking-[-0.02em] text-white">
                    My Earnings
                  </h4>
                </div>
                <Link
                  to="/agent/earnings"
                  className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-white/5 text-[#F5A800] transition hover:bg-[#F5A800] hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                      Owed to me
                    </p>
                    <p className="font-serif italic mt-1 text-4xl font-black tracking-[-0.04em] text-white">
                      {analytics ? formatNaira(analytics.totalOwedToMe) : '—'}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/agent/earnings"
                className="press-scale mt-6 block w-full rounded-[16px] bg-white/10 py-3.5 text-center text-[10px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-white/20"
              >
                View Payout History
              </Link>
            </section>

            {/* Recent missions */}
            <section className="rounded-[20px] border border-zinc-100 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.18)]">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-zinc-50">
                  <Package className="h-5 w-5 text-zinc-950" />
                </div>
                <div>
                  <h4 className="font-serif italic text-lg font-bold tracking-[-0.03em] text-zinc-950">
                    Recent Missions
                  </h4>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                    Completed
                  </p>
                </div>
              </div>
              {recentMissions.length === 0 ? (
                <p className="text-sm text-zinc-400">No completed missions yet.</p>
              ) : (
                <div className="space-y-2.5">
                  {recentMissions.map((m) => (
                    <div key={m.id} className="flex items-center justify-between rounded-[14px] border border-zinc-100 p-3.5">
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-zinc-300" />
                        <span className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                          {m.completedAt ? new Date(m.completedAt).toLocaleDateString() : ''}
                        </span>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[-0.01em] text-zinc-950">
                        <CheckCircle className="inline h-3.5 w-3.5 mr-1 text-emerald-500" />
                        {formatNaira(m.deliveryFee)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>

      <style>{`
        .agent-hub .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </AgentLayout>
  );
};

export default AgentHub;
