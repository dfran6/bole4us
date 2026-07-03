import { ArrowUpRight, BarChart3, Clock, DollarSign, Star, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import VendorLayout from '../components/VendorLayout';

const VendorAnalytics = () => {
  return (
    <VendorLayout>
      <div className="vendor-analytics mx-auto w-full max-w-6xl space-y-10 pb-20 xl:px-0">

        {/* Header */}
        <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0 space-y-3">
            <h2 className="font-serif italic text-4xl font-black leading-none tracking-[-0.04em] text-zinc-950 md:text-5xl">
              Heat Analytics
            </h2>
            <p className="text-[15px] leading-relaxed text-zinc-500">
              Performance metrics for{' '}
              <span className="font-bold text-zinc-950">The Urban Heat</span>
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-[16px] border border-zinc-100 bg-white px-5 py-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_8px_20px_-12px_rgba(0,0,0,0.15)]">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
              Timeframe:
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-950">
              Last 30 Days
            </span>
          </div>
        </header>

        {/* Stats grid */}
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Total Sales',       value: '₦4.2M',  change: '+18.4%',   icon: DollarSign, accent: true  },
            { label: 'Unique Customers',  value: '842',    change: '+5.2%',    icon: Users,      accent: false },
            { label: 'Repeat Rate',       value: '64%',    change: '+12%',     icon: BarChart3,  accent: false },
            { label: 'Avg. Prep Time',    value: '18m',    change: '−2m faster', icon: Clock,   accent: false },
          ].map((stat) => {
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
                <p className="mt-3 text-[10px] font-black text-emerald-600">
                  {stat.change}
                </p>
              </div>
            );
          })}
        </section>

        {/* Charts & insights */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

          {/* Revenue chart — dark card */}
          <section className="col-span-12 rounded-[20px] bg-zinc-950 p-8 shadow-[0_1px_1px_rgba(0,0,0,0.1),0_28px_54px_-28px_rgba(0,0,0,0.55)] lg:col-span-8">
            <div className="mb-10 flex items-start justify-between">
              <div>
                <h4 className="font-serif italic text-2xl font-black tracking-[-0.04em] text-white">
                  Revenue Flow
                </h4>
                <p className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                  Monthly Sales Distribution
                </p>
              </div>
              <Link
                to="/"
                className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 bg-white/5 text-[#F5A800] transition hover:bg-[#F5A800] hover:text-white"
              >
                <TrendingUp className="h-5 w-5" />
              </Link>
            </div>
            <div className="flex h-56 items-end gap-2 px-2">
              {[35, 60, 45, 80, 55, 95, 75, 90, 65, 85, 100, 70].map((h, i) => (
                <div key={i} className="group/bar relative flex-1">
                  <div
                    className={`w-full rounded-t-[4px] transition-colors duration-200 ${
                      i === 10 ? 'bg-[#F5A800]' : 'bg-white/10 group-hover/bar:bg-white/20'
                    }`}
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between px-2 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600">
              {['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'].map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </section>

          {/* Right sidebar */}
          <section className="col-span-12 space-y-7 lg:col-span-4">

            {/* Top Heat */}
            <div className="rounded-[20px] border border-zinc-100 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.18)]">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#F5A800]/10">
                  <Zap className="h-5 w-5 text-[#F5A800]" />
                </div>
                <div>
                  <h4 className="font-serif italic text-lg font-bold tracking-[-0.03em] text-zinc-950">
                    Top Heat
                  </h4>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                    Best sellers
                  </p>
                </div>
              </div>
              <div className="space-y-5">
                {[
                  { name: 'Smokey Bole Mix',           orders: 124, revenue: '₦280k' },
                  { name: 'Grilled Croaker Delight',   orders: 86,  revenue: '₦620k' },
                  { name: 'Fire-Roasted Yam',          orders: 52,  revenue: '₦145k' },
                ].map((item, i) => (
                  <div key={item.name} className="group flex cursor-pointer items-center justify-between">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="shrink-0 text-2xl font-black text-zinc-100 transition group-hover:text-[#F5A800]/20">
                        0{i + 1}
                      </span>
                      <span className="truncate text-xs font-black uppercase tracking-[-0.01em] text-zinc-950">
                        {item.name}
                      </span>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-sm font-black text-zinc-950">{item.revenue}</p>
                      <p className="mt-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                        {item.orders} orders
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="mt-7 w-full rounded-[14px] border border-zinc-200 py-4 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500 transition hover:bg-zinc-950 hover:text-white active:scale-95"
              >
                Full Menu Breakdown
              </button>
            </div>

            {/* Elite Status — brand red card */}
            <div className="rounded-[20px] bg-[#bc0100] p-7 shadow-[0_1px_1px_rgba(0,0,0,0.08),0_24px_48px_-24px_rgba(188,1,0,0.5)]">
              <Star className="mb-5 h-8 w-8 text-white" fill="currentColor" />
              <h4 className="font-serif italic text-2xl font-black leading-none tracking-[-0.03em] text-white">
                Elite Status
              </h4>
              <p className="mt-4 text-xs font-medium leading-relaxed text-white/75">
                You're in the top 5% of vendors in Victoria Island.
              </p>
              <button
                type="button"
                className="mt-7 flex items-center gap-2.5 rounded-[14px] bg-zinc-950 px-6 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_10px_20px_-8px_rgba(0,0,0,0.4)] transition hover:bg-white hover:text-zinc-950 active:scale-95"
              >
                View Badge <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </section>
        </div>
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
