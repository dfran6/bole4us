import React from 'react';
import VendorLayout from '../components/VendorLayout';
import { TrendingUp, Users, ShoppingBag, Clock, ArrowUpRight, BarChart3, Star, Zap, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';


const VendorAnalytics = () => {
  return (
    <VendorLayout>
      <div className="space-y-12 pb-20">
        {/* Header Section */}
        <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter text-zinc-900 uppercase">Vendor <span className="text-primary italic">Intelligence</span></h2>
            <p className="text-zinc-500 font-medium font-body">Performance metrics and customer insights for <span className="text-zinc-900 font-bold">The Urban Heat</span></p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white px-6 py-4 rounded-2xl flex items-center gap-3 shadow-sm border border-zinc-50">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Timeframe:</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-900">Last 30 Days</span>
            </div>
          </div>
        </header>

        {/* Global Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Total Sales', value: '₦4.2M', change: '+18.4%', icon: DollarSign, color: 'primary' },
            { label: 'Unique Customers', value: '842', change: '+5.2%', icon: Users, color: 'zinc-900' },
            { label: 'Repeat Rate', value: '64%', change: '+12%', icon: BarChart3, color: 'zinc-900' },
            { label: 'Avg. Prep Time', value: '18m', change: '-2m faster', icon: Clock, color: 'zinc-900' }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-zinc-50 relative overflow-hidden group hover:shadow-2xl transition-all">
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">{stat.label}</p>
                <h3 className={`text-4xl font-black tracking-tighter ${stat.color === 'primary' ? 'text-primary' : 'text-zinc-900'}`}>{stat.value}</h3>
                <div className={`flex items-center gap-2 mt-4 text-[9px] font-black uppercase tracking-widest ${i === 3 ? 'text-green-500' : 'text-green-500'}`}>
                  {stat.change}
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <stat.icon className="w-24 h-24" />
              </div>
            </div>
          ))}
        </section>

        {/* Charts & Popular Items */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Revenue Chart Placeholder */}
          <section className="col-span-12 lg:col-span-8 bg-zinc-900 rounded-[3rem] p-10 flex flex-col shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full"></div>
            <div className="flex justify-between items-center mb-12 relative z-10">
              <div>
                <h4 className="font-headline font-black text-2xl text-white uppercase tracking-tighter">Revenue Flow</h4>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-2">Monthly Sales Distribution</p>
              </div>
              <Link to="/" className="p-3 bg-white/5 rounded-xl border border-white/10 text-primary hover:bg-primary hover:text-white transition-all">
                <TrendingUp className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex-grow flex items-end gap-3 h-64 px-4 relative z-10">
              {[35, 60, 45, 80, 55, 95, 75, 90, 65, 85, 100, 70].map((h, i) => (
                <div key={i} className="flex-1 group/bar relative">
                  <div className={`w-full rounded-t-lg transition-all duration-700 ${i === 10 ? 'bg-primary shadow-[0_0_20px_rgba(255,51,51,0.3)]' : 'bg-white/10 group-hover/bar:bg-white/20'}`} style={{ height: `${h}%` }}></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-8 px-4 text-[9px] font-black text-zinc-500 uppercase tracking-widest">
              <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span><span>NOV</span><span>DEC</span>
            </div>
          </section>

          {/* Popular Items Sidebar */}
          <section className="col-span-12 lg:col-span-4 space-y-10">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-zinc-50">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-black font-headline uppercase tracking-tighter">Top Heat</h4>
              </div>
              <div className="space-y-6">
                {[
                  { name: 'Smokey Bole Mix', orders: 124, revenue: '₦280k' },
                  { name: 'Grilled Croaker Delight', orders: 86, revenue: '₦620k' },
                  { name: 'Fire-Roasted Yam', orders: 52, revenue: '₦145k' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <span className="font-headline text-2xl font-black text-zinc-100 group-hover:text-primary/10 transition-colors">0{i + 1}</span>
                      <span className="text-xs font-black uppercase tracking-tight text-zinc-900">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-zinc-900">{item.revenue}</p>
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{item.orders} orders</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 py-5 border border-zinc-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all shadow-sm">Full Menu Breakdown</button>
            </div>

            <div className="bg-primary p-10 rounded-[3rem] shadow-2xl shadow-primary/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full group-hover:scale-110 transition-transform"></div>
              <Star className="w-10 h-10 text-white mb-6" fill="currentColor" />
              <h4 className="text-white text-3xl font-black font-headline uppercase tracking-tighter leading-none mb-4">Elite <br />Status</h4>
              <p className="text-white/80 text-xs font-bold leading-relaxed mb-10">You're in the top 5% of vendors in Victoria Island.</p>
              <button className="px-8 py-3 bg-zinc-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl flex items-center gap-3">
                View Badge <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </VendorLayout>
  );
};

export default VendorAnalytics;
