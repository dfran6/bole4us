import React from 'react';
import VendorLayout from '../components/VendorLayout';
import { Search, Filter, Download, ExternalLink, CheckCircle, Clock, XCircle, MoreHorizontal } from 'lucide-react';

const VendorOrderHistory = () => {
  return (
    <VendorLayout>
      <div className="space-y-12 pb-20">
        {/* Header Section */}
        <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter text-zinc-900 uppercase">Order <span className="text-primary italic">Archives</span></h2>
            <p className="text-zinc-500 font-medium font-body">Historical data and receipt records for all past heat sessions.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-primary transition-colors w-4 h-4" />
              <input type="text" placeholder="Search Order ID or Customer..." className="w-full sm:w-80 bg-white border border-zinc-100 rounded-2xl py-4 pl-12 pr-6 text-[10px] font-black uppercase tracking-widest focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all shadow-sm" />
            </div>
            <button className="flex items-center justify-center gap-3 bg-zinc-900 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-lg active:scale-95">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </header>

        {/* Global Filters */}
        <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
          {['All Sessions', 'Completed', 'Cancelled', 'Returns', 'Last 7 Days', 'Last 30 Days'].map((filter, i) => (
            <button key={i} className={`whitespace-nowrap px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${i === 0 ? 'bg-primary text-white shadow-lg' : 'bg-zinc-50 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900'}`}>
              {filter}
            </button>
          ))}
        </div>

        {/* Order History Table */}
        <section className="bg-white rounded-[3rem] shadow-sm border border-zinc-50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left order-collapse">
              <thead>
                <tr className="bg-zinc-50/50">
                  <th className="py-6 px-10 text-[10px] font-black uppercase tracking-widest text-zinc-400">Heat Token</th>
                  <th className="py-6 px-10 text-[10px] font-black uppercase tracking-widest text-zinc-400">Customer Agent</th>
                  <th className="py-6 px-10 text-[10px] font-black uppercase tracking-widest text-zinc-400">Content</th>
                  <th className="py-6 px-10 text-[10px] font-black uppercase tracking-widest text-zinc-400">Protocol</th>
                  <th className="py-6 px-10 text-[10px] font-black uppercase tracking-widest text-zinc-400">Value</th>
                  <th className="py-6 px-10 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50 font-medium">
                {[
                  { id: '#ORD-9012', customer: 'Uche K.', items: '2x Smokey Bole, 1x Fish', date: 'Oct 24, 14:20', total: '₦12,400', status: 'Completed', statusIcon: CheckCircle, statusColor: 'text-green-500' },
                  { id: '#ORD-8998', customer: 'Bolanle A.', items: '1x Yam Bowl, 1x Herb Fish', date: 'Oct 24, 13:45', total: '₦8,200', status: 'Completed', statusIcon: CheckCircle, statusColor: 'text-green-500' },
                  { id: '#ORD-8954', customer: 'David O.', items: '4x Signature Platter', date: 'Oct 23, 19:10', total: '₦14,000', status: 'Cancelled', statusIcon: XCircle, statusColor: 'text-red-500' },
                  { id: '#ORD-8921', customer: 'Sade W.', items: '1x Spicy Fish, 2x Sides', date: 'Oct 23, 18:30', total: '₦9,500', status: 'Completed', statusIcon: CheckCircle, statusColor: 'text-green-500' }
                ].map((order, i) => (
                  <tr key={i} className="hover:bg-zinc-50/50 transition-colors group">
                    <td className="py-8 px-10 font-black text-zinc-900 uppercase tracking-tighter text-sm">{order.id}</td>
                    <td className="py-8 px-10">
                      <p className="text-sm font-bold text-zinc-900">{order.customer}</p>
                      <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest mt-1">Verified Member</p>
                    </td>
                    <td className="py-8 px-10">
                      <p className="text-xs text-zinc-500 line-clamp-1">{order.items}</p>
                    </td>
                    <td className="py-8 px-10">
                      <div className={`flex items-center gap-2 text-[9px] font-black uppercase tracking-widest ${order.statusColor}`}>
                        <order.statusIcon className="w-3.5 h-3.5" />
                        {order.status}
                      </div>
                      <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest mt-1">{order.date}</p>
                    </td>
                    <td className="py-8 px-10 text-sm font-black text-zinc-900">{order.total}</td>
                    <td className="py-8 px-10 text-right">
                      <button className="p-3 hover:bg-zinc-100 rounded-xl text-zinc-400 hover:text-primary transition-all group">
                        <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-10 py-10 bg-zinc-50/30 flex items-center justify-between border-t border-zinc-50">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Page 1 of 42 • 168 Total Sessions</span>
            <div className="flex gap-4">
              <button className="px-8 py-3 rounded-xl border border-zinc-100 bg-white text-[10px] font-black uppercase tracking-widest text-zinc-300">Previous</button>
              <button className="px-8 py-3 rounded-xl border border-zinc-100 bg-white text-[10px] font-black uppercase tracking-widest text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all shadow-sm">Next Buffer</button>
            </div>
          </div>
        </section>
      </div>
    </VendorLayout>
  );
};

export default VendorOrderHistory;
