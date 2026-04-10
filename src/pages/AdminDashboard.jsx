import React from 'react';
import AdminLayout from '../components/AdminLayout';
import { Users, Store, ShoppingBag, ArrowUpRight, Check, X, ShieldAlert, Sparkles } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-12">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-black font-headline tracking-tighter text-zinc-900 uppercase leading-none">Platform <br /><span className="text-primary">Overview</span></h1>
            <p className="text-zinc-400 font-medium text-sm">Real-time performance and operational control</p>
          </div>
          <div className="flex items-center gap-4 bg-white p-2 rounded-[2rem] shadow-sm border border-zinc-100">
            <div className="px-5 py-2.5 bg-zinc-900 text-white rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest shadow-lg">Last 24h</div>
            <div className="px-5 py-2.5 text-zinc-400 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest hover:text-zinc-900 transition-colors cursor-pointer">Last 7d</div>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Total Users', value: '12,482', change: '+12%', icon: Users, color: 'primary' },
            { label: 'Active Vendors', value: '458', change: 'Live', icon: Store, color: 'zinc-900' },
            { label: 'Orders Today', value: '1,204', change: '+8%', icon: ShoppingBag, color: 'primary' }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[3rem] shadow-sm border border-zinc-100 hover:shadow-2xl hover:border-primary/20 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 ${stat.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-zinc-900 text-white'} rounded-2xl group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className={`px-4 py-1.5 ${stat.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-green-500/10 text-green-600'} rounded-full text-[10px] font-black uppercase tracking-widest`}>
                  {stat.change}
                </div>
              </div>
              <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-4xl font-black mt-2 text-zinc-900 tracking-tighter">{stat.value}</h3>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-end justify-between px-2">
              <h2 className="text-3xl font-black uppercase tracking-tight font-headline text-zinc-900">New Vendor <span className="text-primary italic">Requests</span></h2>
              <button className="text-[10px] font-black text-primary hover:tracking-widest transition-all uppercase tracking-widest">Manage All</button>
            </div>

            <div className="bg-white rounded-[3rem] border border-zinc-100 overflow-hidden shadow-sm">
              <div className="divide-y divide-zinc-50">
                {[
                  { name: "Smokey Joe's Pit", loc: "Delta, Nigeria", type: "BBQ & Grill", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5ma8DSYLFCAzcQFMHoo0otMhaPJ3yXRDmqjRj0fgdFU_fAdEHl_GoeRzpFjGAn4tJmiezMjxkEnpM7vhu84k7wjDC6WAO-vFYoGaG2LcqYGW7d-ASYqReD1FZ1d8Kz3bX19Rm_eXtbrWGtYPyGnP6RFIwbrUcnMLRm25-uxu2NNpmCorhnowZoTyYTP_7h5cJ_lhjXuL_U4OnXOj8Lxpwhdoo377pUfwgwlYfHtl083nrSHv5Pztg4tkop59q5aMIE5T_njpXDYk" },
                  { name: "Mama Comfort's Heat", loc: "Accra, Ghana", type: "Traditional", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGUYTHKMJmjU4nuAoW90Vu7ms-N4c5_F0EKKF77CaYP3TC_AO9eGJJ9aGsCVnZAchudLSLBxV_4V3YytbEX4BbWhzkGJ4XJlRtLTfN6HWfOneBM4J0NQe1mhrfcfaQODCXcpnixkTeaLIS1mLVPSz28cGRbYfvh1GNsvBmwR_g9Oji5b32ooextGGRIuQTDIh2WoRedooZ_7MN8VFhaGTcl_8p_sTfAWHHxnfIZec7LfZtFeph8fvCwYk4OtIw-sUSGeU3yzUlCWE" },
                  { name: "Urban Fire Express", loc: "Nairobi, Kenya", type: "Fusion Grill", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCk0pZgqu_bcPiz6TAwxmMlIevV445dzd-_vtMYQrI01M7vp2c3-qzWxCrQYmK0DM8eT2WOshJAlCb6wlyqV8QD2aFGPGzsFgND3zLxDXM_UWd7F_0CTIolLGVmJSt0Xn4G_OVG1uj5hJEIf-Z7riejx_1IFye43gbp0tGjkUUIyHl40Y-QiM_e2IUgNkjNgZt1u4nRtuykMslsPy7cWrdKH0S2BA6TusYDsBTAAGY06XJG9eTyoAgPYwfrNA7-U_zSJnLERMXeFHI" }
                ].map((vendor, i) => (
                  <div key={i} className="p-8 flex items-center justify-between hover:bg-zinc-50/50 transition-all group">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden bg-zinc-100 shadow-sm group-hover:scale-95 transition-transform duration-500">
                        <img alt={vendor.name} className="w-full h-full object-cover" src={vendor.img} />
                      </div>
                      <div>
                        <h4 className="font-headline font-black text-lg text-zinc-900 uppercase leading-none">{vendor.name}</h4>
                        <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-2">{vendor.loc} • {vendor.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="w-12 h-12 flex items-center justify-center bg-zinc-900 text-white rounded-2xl hover:bg-primary transition-all active:scale-95 shadow-lg shadow-zinc-200">
                        <Check className="w-5 h-5" />
                      </button>
                      <button className="w-12 h-12 flex items-center justify-center bg-white border border-zinc-100 text-zinc-400 rounded-2xl hover:text-red-500 hover:border-red-100 transition-all active:scale-95 shadow-sm">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-end justify-between px-2">
              <h2 className="text-3xl font-black font-headline uppercase tracking-tight text-zinc-900">Live <span className="text-primary italic">Feed</span></h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Realtime</span>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-[3rem] p-8 space-y-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full group-hover:scale-110 transition-transform"></div>
              {[
                { title: 'New Order #8924', desc: '2x Spicy Grilled Croaker from The Grill House', time: '2 Minutes Ago', icon: Sparkles },
                { title: 'New User Joined', desc: 'Chinelo O. just registered via Referral link.', time: '15 Minutes Ago', icon: Users },
                { title: 'System Optimized', desc: 'Auto-scaling cluster initiated in West-1 region.', time: '24 Minutes Ago', icon: ShieldAlert }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group/item cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-primary/50 transition-colors">
                    <item.icon className="text-primary w-5 h-5" />
                  </div>
                  <div className={`flex-1 ${i < 2 ? 'border-b border-white/5 pb-8' : ''}`}>
                    <p className="text-white text-sm font-black uppercase tracking-tight group-hover/item:text-primary transition-colors">{item.title}</p>
                    <p className="text-zinc-500 text-xs font-medium mt-1 leading-relaxed">{item.desc}</p>
                    <p className="text-[10px] text-zinc-400 mt-4 font-black uppercase tracking-widest">{item.time}</p>
                  </div>
                </div>
              ))}
              <button className="w-full py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all">View Analytics</button>
            </div>

            <div className="p-10 bg-primary rounded-[3rem] shadow-2xl shadow-primary/20 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-full translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
              <h4 className="text-white text-3xl font-black font-headline uppercase tracking-tighter mb-4 leading-none">The Urban Heat <br />Report</h4>
              <p className="text-white/80 text-xs font-bold leading-relaxed mb-10 max-w-[200px]">September performance summary is ready for review.</p>
              <button className="px-8 py-3 bg-white text-primary rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl flex items-center gap-3 group/btn">
                Download
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
