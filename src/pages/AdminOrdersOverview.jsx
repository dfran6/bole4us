import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Search, Flame, Truck, CheckCircle, AlertTriangle, Map, Navigation, MoreVertical, ExternalLink } from 'lucide-react';

const AdminOrdersOverview = () => {
  const [filter, setFilter] = useState('active');

  return (
    <AdminLayout>
      <div className="space-y-12">
        {/* Header */}
        <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-black font-headline tracking-tighter text-zinc-900 uppercase leading-none">Global <br /><span className="text-primary italic">Logistics</span></h1>
            <p className="text-zinc-400 font-medium text-sm">Real-time tracking of platform-wide order processing and delivery fleet.</p>
          </div>
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-primary transition-colors w-4 h-4" />
            <input
              type="text"
              placeholder="Search Order ID, Host, or Student..."
              className="w-full sm:w-96 bg-white border border-zinc-100 rounded-2xl py-4 pl-12 pr-6 text-[10px] font-black uppercase tracking-widest focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all shadow-sm"
            />
          </div>
        </header>

        {/* Global Stats Bento */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Live Processing', value: '428', icon: Flame, color: 'primary' },
            { label: 'In Delivery', value: '182', icon: Truck, color: 'blue-500' },
            { label: 'Completed Today', value: '1,904', icon: CheckCircle, color: 'green-500' },
            { label: 'Active Alerts', value: '5', icon: AlertTriangle, color: 'red-500' }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-zinc-50 flex flex-col justify-between h-44 relative overflow-hidden group hover:shadow-2xl hover:border-primary/20 transition-all cursor-pointer">
              <div className="relative z-10 transition-transform group-hover:-translate-y-1 duration-500">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">{stat.label}</p>
                <h2 className="text-4xl font-black text-zinc-900 tracking-tighter" style={{ color: i === 0 ? 'var(--primary)' : (i === 3 ? 'var(--error)' : 'inherit') }}>{stat.value}</h2>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <stat.icon className="w-24 h-24" />
              </div>
            </div>
          ))}
        </section>

        {/* Live Orders Map Simulation */}
        <div className="relative h-[400px] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100 group">
          <img alt="Map Tracker" className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvJBPQB2BXV7t3B1sBdmpBufGPMdLpeZmId1pOgHiefD6D6hNJkMDiR_gxg5iyDncLRhDbwDvm77sS19QHS6A9-9k9yf8FSZbsYUiGjdLBEFj8ZdqDkekWhRmmO0Xfwol00sMn4FrsXptzFjh8tg-MbmM6oFeES5zqJM7acilSMhSUSKO8FtjBYjnKgJ0Q2tU8_yDbfNklVW89oPaH1ZkQ23qlogxYWLdDXhKqJQMSVYh3XHPeGNR7fuQRfOmnPUYO3itQZPu0-bM" />
          <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-[2px] pointer-events-none flex flex-col items-center justify-center p-12 text-center">
            <div className="bg-white p-6 rounded-[2.5rem] shadow-2xl flex flex-col items-center max-w-sm">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 animate-bounce">
                <Navigation className="w-8 h-8 rotate-45" />
              </div>
              <h3 className="text-xl font-black font-headline uppercase tracking-tighter text-zinc-900 mb-2">Neural Map <span className="text-primary italic">Active</span></h3>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">System is tracking 612 live transit signatures across the Delta Metropolitan area.</p>
              <button className="mt-8 px-8 py-3 bg-zinc-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                Go Fullscreen
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Order Table Area */}
        <section className="bg-white rounded-[3rem] shadow-sm border border-zinc-50 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-zinc-50 px-10 pt-8 gap-10">
            {[
              { id: 'active', label: 'Active Flows' },
              { id: 'flagged', label: 'Flagged', count: 5 },
              { id: 'completed', label: 'Historical' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`pb-6 text-[10px] font-black uppercase tracking-[0.2em] border-b-4 transition-all flex items-center gap-3 ${filter === tab.id ? 'border-primary text-zinc-900' : 'border-transparent text-zinc-400 hover:text-zinc-600'}`}
              >
                {tab.label}
                {tab.count && <span className="bg-red-500 text-white py-1 px-2.5 rounded-full text-[9px] leading-none shadow-lg shadow-red-500/20">{tab.count}</span>}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-50/50">
                  <th className="py-6 px-10 text-[10px] font-black uppercase tracking-widest text-zinc-400">Order ID</th>
                  <th className="py-6 px-10 text-[10px] font-black uppercase tracking-widest text-zinc-400">Node Pair</th>
                  <th className="py-6 px-10 text-[10px] font-black uppercase tracking-widest text-zinc-400">Yield</th>
                  <th className="py-6 px-10 text-[10px] font-black uppercase tracking-widest text-zinc-400">Time Vector</th>
                  <th className="py-6 px-10 text-[10px] font-black uppercase tracking-widest text-zinc-400">Phase</th>
                  <th className="py-6 px-10 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50">
                {/* Row 1 */}
                <tr className="hover:bg-zinc-50/50 transition-colors group">
                  <td className="py-8 px-10">
                    <p className="font-headline font-black text-xl text-zinc-900 tracking-tight">#8924</p>
                    <p className="text-[10px] font-black uppercase text-primary mt-1">2 mins ago</p>
                  </td>
                  <td className="py-8 px-10">
                    <p className="text-xs font-bold text-zinc-900 uppercase tracking-tight">David O.</p>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1 italic">Mama Put's Heat House</p>
                  </td>
                  <td className="py-8 px-10 text-sm font-black text-zinc-900">₦4,200</td>
                  <td className="py-8 px-10">
                    <p className="text-xs font-black text-zinc-900 uppercase">ETA 18:45</p>
                    <p className="text-[10px] text-zinc-400 font-medium uppercase mt-1">In ~22 mins</p>
                  </td>
                  <td className="py-8 px-10">
                    <span className="inline-flex items-center gap-2 bg-zinc-900 text-white text-[9px] font-black uppercase tracking-[0.15em] px-4 py-2 rounded-xl shadow-lg shadow-zinc-200">
                      <Flame className="w-3 h-3 text-primary animate-pulse" /> Heat Cycle
                    </span>
                  </td>
                  <td className="py-8 px-10 text-right">
                    <button className="p-3 hover:bg-zinc-100 rounded-xl text-zinc-400 hover:text-zinc-900 transition-all">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-zinc-50/50 transition-colors group">
                  <td className="py-8 px-10">
                    <p className="font-headline font-black text-xl text-zinc-900 tracking-tight">#8910</p>
                    <p className="text-[10px] font-black uppercase text-zinc-400 mt-1">24 mins ago</p>
                  </td>
                  <td className="py-8 px-10">
                    <p className="text-xs font-bold text-zinc-900 uppercase tracking-tight">Sarah K.</p>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1 italic">The Grill Master</p>
                  </td>
                  <td className="py-8 px-10 text-sm font-black text-zinc-900">₦9,500</td>
                  <td className="py-8 px-10">
                    <p className="text-xs font-black text-green-500 uppercase">ETA 18:30</p>
                    <p className="text-[10px] text-zinc-400 font-medium uppercase mt-1">In ~7 mins</p>
                  </td>
                  <td className="py-8 px-10">
                    <span className="inline-flex items-center gap-2 bg-blue-500 text-white text-[9px] font-black uppercase tracking-[0.15em] px-4 py-2 rounded-xl shadow-lg shadow-blue-500/20">
                      <Truck className="w-3 h-3 animate-bounce" /> Delivering
                    </span>
                  </td>
                  <td className="py-8 px-10 text-right">
                    <button className="p-3 hover:bg-zinc-100 rounded-xl text-zinc-400 hover:text-zinc-900 transition-all">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>

                {/* Row 3 (Flagged) */}
                <tr className="bg-red-500/5 hover:bg-red-500/[0.08] transition-colors group border-x-4 border-red-500">
                  <td className="py-8 px-10">
                    <p className="font-headline font-black text-xl text-red-600 tracking-tight">#8892</p>
                    <p className="text-[10px] font-black uppercase text-red-400 mt-1">45 mins ago</p>
                  </td>
                  <td className="py-8 px-10">
                    <p className="text-xs font-bold text-zinc-900 uppercase tracking-tight">Emmanuel N.</p>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1 italic">Campus Heat Corner</p>
                  </td>
                  <td className="py-8 px-10 text-sm font-black text-zinc-900">₦3,500</td>
                  <td className="py-8 px-10">
                    <p className="text-xs font-black text-red-600 uppercase">EXP 18:00</p>
                    <p className="text-[10px] text-red-500 font-black uppercase mt-1 italic">+20m LATE</p>
                  </td>
                  <td className="py-8 px-10">
                    <span className="inline-flex items-center gap-2 bg-red-600 text-white text-[9px] font-black uppercase tracking-[0.15em] px-4 py-2 rounded-xl shadow-lg shadow-red-600/20">
                      <AlertTriangle className="w-3 h-3" /> Node Stalled
                    </span>
                  </td>
                  <td className="py-8 px-10 text-right">
                    <div className="flex justify-end gap-3">
                      <button className="px-6 py-2 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest rounded-lg hover:bg-red-700 transition-all shadow-lg active:scale-95">Resolve</button>
                      <button className="p-2 hover:bg-red-100 rounded-lg text-red-400 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="px-10 py-10 bg-zinc-50/30 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Sync status: Fully Buffered • 428 Active Transit Signatures</span>
            <div className="flex gap-4">
              <button className="px-8 py-3 rounded-xl border border-zinc-100 bg-white text-[10px] font-black uppercase tracking-widest text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all shadow-sm active:scale-95">View Segment History</button>
            </div>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
};

export default AdminOrdersOverview;
