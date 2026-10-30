import { BarChart3, Clock, DollarSign, Star, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import VendorLayout from '../components/VendorLayout';
import { getVendorAnalytics } from '../api/vendorAnalytics';
import { formatNaira } from '../utils/currency';

const VendorAnalytics = () => {
  const [analytics, setAnalytics] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    getVendorAnalytics()
      .then((data) => {
        setAnalytics(data);
        setStatus('loaded');
      })
      .catch(() => setStatus('error'));
  }, []);

  const stats = analytics
    ? [
        { label: "Today's Revenue", value: formatNaira(analytics.todayRevenue), icon: DollarSign, accent: true },
        { label: 'Active Orders', value: String(analytics.activeOrders), icon: BarChart3, accent: false },
        { label: 'Pending Prep', value: String(analytics.pendingPrep), icon: Clock, accent: false },
        { label: 'Orders (30d)', value: String(analytics.totalOrders30d), icon: Star, accent: false },
      ]
    : [];

  return (
    <VendorLayout>
      <div className="vendor-analytics mx-auto w-full max-w-6xl space-y-10 pb-20 xl:px-0">

        {/* Header */}
        <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0 space-y-3">
            <h2 className="font-serif italic text-4xl font-black leading-none tracking-[-0.04em] text-zinc-950 md:text-5xl">
              Heat Analytics
            </h2>
            <p className="text-[15px] leading-relaxed text-zinc-500">Your performance metrics</p>
          </div>
        </header>

        {status === 'loading' && <p className="text-zinc-400">Loading analytics...</p>}
        {status === 'error' && <p className="text-zinc-400">Couldn't load analytics. Try again shortly.</p>}

        {status === 'loaded' && (
          <>
            {/* Stats grid */}
            <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="group rounded-[18px] border border-zinc-100 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.22)]"
                  >
                    <div className="mb-4 flex items-center gap-2">
                      <Icon className="h-4 w-4 text-zinc-300" />
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                        {stat.label}
                      </p>
                    </div>
                    <h3 className={`font-serif italic text-3xl font-black tracking-[-0.03em] ${stat.accent ? 'text-[#F5A800]' : 'text-zinc-950'}`}>
                      {stat.value}
                    </h3>
                  </div>
                );
              })}
              <div className="group rounded-[18px] bg-zinc-950 p-6 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_16px_32px_-20px_rgba(0,0,0,0.3)]">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Rating</p>
                <h3 className="font-serif italic mt-4 text-3xl font-black tracking-[-0.03em] text-white">
                  {Number(analytics.rating).toFixed(1)} <span className="text-lg text-zinc-500">/ 5.0</span>
                </h3>
                <p className="mt-3 text-[10px] font-black text-[#F5A800]">{analytics.reviewCount} reviews</p>
              </div>
            </section>

            {/* Top items */}
            <div className="max-w-md rounded-[20px] border border-zinc-100 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.18)]">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#F5A800]/10">
                  <Zap className="h-5 w-5 text-[#F5A800]" />
                </div>
                <div>
                  <h4 className="font-serif italic text-lg font-bold tracking-[-0.03em] text-zinc-950">Top Heat</h4>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">Best sellers</p>
                </div>
              </div>
              {analytics.topItems.length === 0 ? (
                <p className="text-sm text-zinc-400">No sales data yet.</p>
              ) : (
                <div className="space-y-5">
                  {analytics.topItems.map((item, i) => (
                    <div key={item.menuItemId} className="group flex items-center justify-between">
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="shrink-0 text-2xl font-black text-zinc-100 transition group-hover:text-[#F5A800]/20">
                          0{i + 1}
                        </span>
                        <span className="truncate text-xs font-black uppercase tracking-[-0.01em] text-zinc-950">
                          {item.name}
                        </span>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-sm font-black text-zinc-950">{formatNaira(item.revenue)}</p>
                        <p className="mt-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                          {item.soldCount} sold
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <style>{`
        .vendor-analytics .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </VendorLayout>
  );
};

export default VendorAnalytics;
