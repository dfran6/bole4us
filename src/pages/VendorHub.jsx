import React from 'react';
import VendorLayout from '../components/VendorLayout';
import { TrendingUp, Package, Flame, CheckCircle, Smartphone, Eye, DollarSign, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const VendorHub = () => {
  return (
    <VendorLayout>
      <div className="space-y-12">
        {/* Header & Status Toggle */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h2 className="font-headline text-5xl font-black tracking-tighter text-zinc-900 mb-2 uppercase">Operations Center</h2>
            <p className="font-body text-zinc-500 font-medium">Live updates for <span className="text-zinc-900 font-bold">The Urban Heat</span></p>
          </div>
          <div className="flex items-center bg-zinc-100 p-1.5 rounded-2xl border border-zinc-200">
            <button className="px-6 py-2 rounded-xl text-sm font-bold bg-green-500 text-white shadow-lg shadow-green-200 flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Open For Heat
            </button>
            <button className="px-6 py-2 rounded-xl text-sm font-bold text-zinc-400 hover:text-zinc-600 transition-colors">
              Closed
            </button>
          </div>
        </header>

        {/* Bento Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Earnings Card */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-sm relative overflow-hidden group">
            <div className="relative z-10">
              <p className="font-label text-xs font-black text-zinc-400 mb-6 tracking-widest uppercase">Today's Revenue</p>
              <h3 className="font-headline text-4xl font-black text-zinc-900 mb-2">₦142,500</h3>
              <p className="text-xs text-green-600 font-bold flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +12.5% from yesterday
              </p>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                <TrendingUp className="w-48 h-48 text-zinc-900" />
            </div>
          </div>

          {/* Active Orders */}
          <div className="bg-zinc-900 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group text-white">
            <div className="relative z-10">
              <p className="font-label text-xs font-black text-zinc-500 mb-6 tracking-widest uppercase">Active Sessions</p>
              <h3 className="font-headline text-4xl font-black text-white mb-2">08</h3>
              <p className="text-xs text-primary font-black uppercase tracking-widest">4 orders pending prep</p>
            </div>
             <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <Package className="w-48 h-48 text-white" />
            </div>
          </div>

          {/* Rating/Heat */}
          <div className="bg-primary p-8 rounded-[2.5rem] shadow-xl shadow-primary/20 relative overflow-hidden group text-white">
            <div className="relative z-10">
              <p className="font-label text-xs font-black text-white/60 mb-6 tracking-widest uppercase">Grill Heat Level</p>
              <h3 className="font-headline text-4xl font-black text-white mb-2">4.9 / 5.0</h3>
              <p className="text-xs text-white/80 font-medium">Customer satisfaction is peak</p>
            </div>
             <div className="absolute -right-8 -bottom-8 opacity-20 group-hover:rotate-12 transition-transform duration-700">
                <Flame className="w-48 h-48 text-white" fill="currentColor" />
            </div>
          </div>
        </section>

        {/* Main Layout: Orders & Inventory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Incoming Orders (7 cols) */}
          <section className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline text-2xl font-black text-zinc-900 uppercase tracking-tight">Incoming Heat</h3>
              <span className="text-[10px] font-black bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">Live</span>
            </div>

            {/* Order Item: Payment Verification Needed */}
            <div className="bg-white p-8 rounded-[2.5rem] border-2 border-primary/20 flex flex-col md:flex-row items-center gap-8 group relative overflow-hidden shadow-xl shadow-primary/5">
              <div className="absolute top-0 right-0 p-4">
                  <span className="text-[10px] font-black bg-primary text-white px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">Action Required</span>
              </div>
              
              <div className="w-24 h-32 bg-zinc-100 rounded-2xl overflow-hidden border-2 border-white shadow-lg relative group/pop cursor-pointer shrink-0">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ6m3Y6X5P8Z_X_WwU4_Dk5k-m3w0K1Fz3-8G6k7m4l-fVpB7s6H5r4w3v-2u1y9" alt="PoP" className="w-full h-full object-cover blur-[2px] group-hover/pop:blur-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-zinc-900/40 flex items-center justify-center opacity-100 group-hover/pop:opacity-0 transition-opacity">
                      <Eye className="w-6 h-6 text-white" />
                  </div>
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-headline font-black text-xl text-zinc-900 uppercase tracking-tight">#ORD-9012 — <span className="text-zinc-400">Uche K.</span></h4>
                </div>
                <p className="text-sm text-zinc-500 font-medium mb-4">Total: <span className="text-zinc-900 font-black">₦8,700</span> (Food: ₦7,500 + Del: ₦1,200)</p>
                <div className="flex gap-3">
                    <button className="flex-1 bg-primary text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:scale-[0.98] transition-transform">Verify Payment</button>
                    <button className="px-6 py-3 border border-zinc-100 text-zinc-400 rounded-xl text-[10px] font-black uppercase tracking-widest hover:text-red-500 hover:bg-red-50 transition-all">Decline</button>
                </div>
              </div>
            </div>

            {/* Order Item: Ready */}
            <div className="bg-white p-6 rounded-[2rem] border-2 border-primary/10 flex items-center gap-6 relative shadow-sm">
               <div className="absolute top-0 right-0 p-3">
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest">PREPARING</span>
               </div>
              <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 border border-zinc-100">
                <img className="w-full h-full object-cover" alt="Order Food" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqxJIpUiDG5T7wHmNlKfyspcfBrjldvWFBsLB1CM6KB3iTbC5qGfdHKgByHokPO7NWCC-d-RIp1YEAFDjixZAAv58SvDsi1jcp4zKtulJcNUmP0ewJxUXva-bZy9PzIQU84L5eZauAcZgsd9zAQUNTTEm-QsfKCgv147Ej4rTS8Fbs_N0zhuWfmXFvPhVsNDyJ7WqBkI0rylUdj4Ll3vMKn3SNKb8e82IbFmbtEvxN2cvkK4IWCfbNIJ4SFcO4rSVnPY0gfxG-8s4"/>
              </div>
              <div className="flex-1">
                  <h4 className="font-bold text-lg text-zinc-900">#ORD-8998 — <span className="text-zinc-400 font-medium">Bolanle A.</span></h4>
                  <p className="text-sm text-zinc-500 font-medium mt-1">1x Large Yam Bowl, 1x Herb Grilled Fish</p>
              </div>
              <button className="bg-zinc-900 text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:scale-[0.98] transition-transform flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Mark Ready
              </button>
            </div>
          </section>

          {/* Right: Operations & Debt (5 cols) */}
          <section className="lg:col-span-5 space-y-10">
            {/* Agent Debt Tracking Module */}
            <div className="bg-zinc-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full"></div>
              <div className="relative z-10 space-y-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                            <DollarSign className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-black font-headline uppercase tracking-tighter">Agent Debts</h4>
                    </div>
                    <Link to="/vendor/payouts" className="text-[10px] font-black text-primary hover:underline uppercase tracking-widest">Details</Link>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Total Owed</p>
                            <p className="text-4xl font-headline font-black text-white mt-1">₦12,400</p>
                        </div>
                        <div className="text-right">
                             <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Outstanding</p>
                             <p className="text-lg font-bold text-primary">04 Agents</p>
                        </div>
                    </div>
                    
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-4">
                        {[
                            { name: 'Agent Tunde', owe: '₦4,200', time: '2h ago' },
                            { name: 'Agent Sarah', owe: '₦2,400', time: '5h ago' }
                        ].map((agent, i) => (
                            <div key={i} className="flex justify-between items-center text-xs">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-[10px] font-black">{agent.name[6]}</div>
                                    <span className="font-bold text-zinc-400">{agent.name}</span>
                                </div>
                                <span className="font-black text-white">{agent.owe}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <Link to="/vendor/payouts" className="w-full py-4 bg-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group transition-all">
                    Initiate Payout Flow
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-[2.5rem] p-8 border border-zinc-100">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-headline text-2xl font-black text-zinc-900 uppercase tracking-tight">Grill Stock</h3>
                <button className="text-primary font-black text-[10px] uppercase tracking-widest flex items-center gap-1 hover:underline">
                    Quick Restock
                </button>
              </div>

              <div className="space-y-4">
                {[
                  { name: 'Classic Smokey Bole', qty: '42 portions', status: 'In Stock', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-50' },
                  { name: 'Fried Yam Sticks', qty: '8 portions', status: 'Low', icon: Flame, color: 'text-red-500', bg: 'bg-red-50' },
                  { name: 'Grilled Croaker', qty: '0 portions', status: 'Sold Out', icon: Flame, color: 'text-zinc-300', bg: 'bg-zinc-100', grayscale: true }
                ].map((item, i) => (
                    <div key={i} className={`bg-white p-4 rounded-2xl flex items-center justify-between border border-zinc-100 ${item.grayscale ? 'opacity-50 grayscale' : ''}`}>
                         <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center`}>
                                <item.icon className={`w-6 h-6 ${item.color}`} fill={item.status === 'Sold Out' ? 'none' : 'currentColor'} />
                            </div>
                            <div>
                                <h5 className="font-bold text-zinc-900 text-sm">{item.name}</h5>
                                <p className={`text-[10px] font-black uppercase tracking-widest ${item.status === 'Low' ? 'text-red-500' : 'text-zinc-400'}`}>{item.qty}</p>
                            </div>
                         </div>
                         <button className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900 hover:bg-primary hover:text-white transition-colors border border-zinc-100">
                            <span className="material-symbols-outlined text-sm font-bold">add</span>
                         </button>
                    </div>
                ))}
              </div>

              <button className="w-full mt-8 py-4 bg-zinc-900 text-white font-black text-[10px] rounded-2xl hover:bg-zinc-800 transition-colors uppercase tracking-[0.2em] shadow-xl shadow-zinc-200">
                Manage Full Inventory
              </button>
            </div>
          </section>
        </div>
      </div>
    </VendorLayout>
  );
};

export default VendorHub;
