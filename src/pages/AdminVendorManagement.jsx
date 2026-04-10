import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Search, Download, Store, Flame, Hourglass, Ban, ArrowUpRight, Check, X, MoreHorizontal } from 'lucide-react';

const AdminVendorManagement = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <AdminLayout>
      <div className="space-y-12">
        {/* Header */}
        <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-black font-headline tracking-tighter text-zinc-900 uppercase leading-none">Vendor <br /><span className="text-primary italic">Intelligence</span></h1>
            <p className="text-zinc-400 font-medium text-sm">Approve new hosts, manage listings, and monitor platform health.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-primary transition-colors w-4 h-4" />
              <input
                type="text"
                placeholder="Search vendor name or ID..."
                className="w-full sm:w-80 bg-white border border-zinc-100 rounded-2xl py-4 pl-12 pr-6 text-[10px] font-black uppercase tracking-widest focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all shadow-sm"
              />
            </div>
            <button className="flex items-center justify-center gap-3 bg-zinc-900 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-lg active:scale-95 group">
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Export
            </button>
          </div>
        </header>

        {/* Global Stats Bento */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Total Vendors', value: '1,402', icon: Store, color: 'zinc-900' },
            { label: 'Live Now', value: '384', icon: Flame, color: 'primary' },
            { label: 'Pending Approval', value: '15', icon: Hourglass, color: 'amber-500' },
            { label: 'Suspended', value: '42', icon: Ban, color: 'red-500' }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-zinc-50 flex flex-col justify-between h-44 relative overflow-hidden group hover:shadow-2xl hover:border-primary/20 transition-all cursor-pointer">
              <div className="relative z-10">
                <p className={`text-[10px] font-black uppercase tracking-widest mb-2`} style={{ color: i === 1 ? 'var(--primary)' : 'inherit' }}>{stat.label}</p>
                <h2 className="text-4xl font-black text-zinc-900 tracking-tighter">{stat.value}</h2>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <stat.icon className="w-24 h-24" />
              </div>
            </div>
          ))}
        </section>

        {/* Vendor Table Area */}
        <section className="bg-white rounded-[3rem] shadow-sm border border-zinc-50 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-zinc-50 px-10 pt-8 gap-10">
            {[
              { id: 'all', label: 'All Hosts' },
              { id: 'pending', label: 'Pending', count: 15 },
              { id: 'suspended', label: 'Restricted' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-6 text-[10px] font-black uppercase tracking-[0.2em] border-b-4 transition-all flex items-center gap-3 ${activeTab === tab.id ? 'border-primary text-zinc-900' : 'border-transparent text-zinc-400 hover:text-zinc-600'}`}
              >
                {tab.label}
                {tab.count && <span className="bg-primary/10 text-primary py-1 px-2.5 rounded-full text-[9px] leading-none">{tab.count}</span>}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-50/50">
                  <th className="py-6 px-10 text-[10px] font-black uppercase tracking-widest text-zinc-400">Host Detail</th>
                  <th className="py-6 px-10 text-[10px] font-black uppercase tracking-widest text-zinc-400">Market</th>
                  <th className="py-6 px-10 text-[10px] font-black uppercase tracking-widest text-zinc-400">Status</th>
                  <th className="py-6 px-10 text-[10px] font-black uppercase tracking-widest text-zinc-400">Yield (MTD)</th>
                  <th className="py-6 px-10 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50 font-medium">
                {/* Row 1: Active */}
                <tr className="hover:bg-zinc-50/50 transition-colors group">
                  <td className="py-8 px-10">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-zinc-100 overflow-hidden flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-500">
                        <img alt="vendor" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0tHpT9uzpyjq09Epri1cNIvsohMS2Jvq5lHyc7-7GB2ddZsb1pbGdhYNHVew_m0Lr-A17SDNfo9Rcj3BW7ggfOWV7YRvUJQLhCv91bqbcBocqCOR_TldgTPjZ4yte0-xUEkwIRCO6zH3WwjE8l_wJqiW-ZsuTtJ8wUzpdxmYrKEYExjL_n8hB3zr62QBNUFCew-PZr6Tu_jwe_B0PCJnhpB46s38IyIWRwRVdBCsKNyxa9ofyOdgD0Z7iAz145NmY_YLKSF1QfnI" />
                      </div>
                      <div>
                        <p className="font-headline font-black text-lg text-zinc-900 uppercase leading-none">Mama Put's Heat House</p>
                        <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-2">ID: VND-8821</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-8 px-10">
                    <p className="text-xs font-bold text-zinc-900 uppercase tracking-tight">Delta Central Hub</p>
                  </td>
                  <td className="py-8 px-10">
                    <span className="inline-flex items-center gap-2 bg-green-500/5 text-green-600 text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-green-500/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Active
                    </span>
                  </td>
                  <td className="py-8 px-10">
                    <p className="text-sm font-black text-zinc-900">₦842,500</p>
                    <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest mt-1">+12% growth</p>
                  </td>
                  <td className="py-8 px-10 text-right">
                    <button className="p-3 hover:bg-zinc-100 rounded-xl text-zinc-400 hover:text-zinc-900 transition-all">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>

                {/* Row 2: Pending */}
                <tr className="bg-primary/[0.02] hover:bg-primary/[0.04] transition-colors group border-x-4 border-primary">
                  <td className="py-8 px-10">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-zinc-100 flex-shrink-0 flex items-center justify-center border border-zinc-200 shadow-inner">
                        <Flame className="w-6 h-6 text-zinc-300" />
                      </div>
                      <div>
                        <p className="font-headline font-black text-lg text-zinc-900 uppercase leading-none">Firebrand Rosters</p>
                        <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-2">ID: VND-9934</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-8 px-10">
                    <p className="text-xs font-bold text-zinc-900 uppercase tracking-tight">Abuja Sector 4</p>
                  </td>
                  <td className="py-8 px-10">
                    <span className="inline-flex items-center gap-2 bg-amber-500 text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-amber-500/20">
                      Pending Approval
                    </span>
                  </td>
                  <td className="py-8 px-10">
                    <p className="text-xs font-black text-zinc-300 uppercase tracking-widest">Awaiting Active</p>
                  </td>
                  <td className="py-8 px-10">
                    <div className="flex justify-end gap-3">
                      <button className="w-10 h-10 flex items-center justify-center bg-zinc-900 text-white rounded-xl hover:bg-primary shadow-lg transition-all active:scale-95">
                        <Check className="w-4 h-4" />
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center bg-white border border-zinc-100 text-zinc-400 rounded-xl hover:text-red-500 transition-all active:scale-95">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 3: Suspended */}
                <tr className="hover:bg-zinc-50/50 transition-colors group opacity-60 hover:opacity-100">
                  <td className="py-8 px-10">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-zinc-100 overflow-hidden flex-shrink-0 grayscale">
                        <img alt="vendor" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH4HwWqJzigWp7IMibXtDtaXglXGPh9Qw2xMqT40vPPEG2RUOHGMP37khggTKwt850uW0EmhRpHPeQr0xKwleKoJukttvqyDyYKSJrVfFqC4EhaHMsC1TR8c6AllG2jfCg1TPDlo2ssZpSQ0n_hgeZUOwHMIFdx-xMKYe7FZFWYUiaarVTmUFCIdajl1TSFKJMN3XwwkLnNITfT_Siy5vURjsHB082LsOJKEIpTUpp8WxlOGMcxTItDX5JcdyMsFqs5h4dVHcdHnU" />
                      </div>
                      <div>
                        <p className="font-headline font-black text-lg text-zinc-900 uppercase leading-none">The Heat Hub</p>
                        <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-2">ID: VND-4420</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-8 px-10">
                    <p className="text-xs font-bold text-zinc-900 uppercase tracking-tight">Bayelsa Campus</p>
                  </td>
                  <td className="py-8 px-10">
                    <span className="inline-flex items-center gap-2 bg-red-500/5 text-red-500 text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-red-500/10">
                      Restricted
                    </span>
                  </td>
                  <td className="py-8 px-10">
                    <p className="text-sm font-black text-zinc-400 italic">Inactive</p>
                  </td>
                  <td className="py-8 px-10 text-right">
                    <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:tracking-[0.2em] transition-all">Review Breach</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="px-10 py-10 bg-zinc-50/30 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Page 01 of 142 • 1,402 Total Units</span>
            <div className="flex gap-4">
              <button className="px-8 py-3 rounded-xl border border-zinc-100 bg-white text-[10px] font-black uppercase tracking-widest text-zinc-300 cursor-not-allowed">Previous</button>
              <button className="px-8 py-3 rounded-xl border border-zinc-100 bg-white text-[10px] font-black uppercase tracking-widest text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all shadow-sm active:scale-95">Next Segment</button>
            </div>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
};

export default AdminVendorManagement;
