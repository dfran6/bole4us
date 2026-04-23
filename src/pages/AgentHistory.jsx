import React from 'react';
import AgentLayout from '../components/AgentLayout';
import { Package, Calendar, Clock, ChevronRight, CheckCircle, Search, Filter } from 'lucide-react';

const AgentHistory = () => {
  const missions = [
    { id: '#ORD-9012', date: 'Oct 12, 2024', time: '14:20', vendor: 'Smoky Delta Grill', amount: '₦1,200', status: 'Delivered' },
    { id: '#ORD-9005', date: 'Oct 11, 2024', time: '18:45', vendor: 'Mama Joy Hub', amount: '₦1,500', status: 'Delivered' },
    { id: '#ORD-8992', date: 'Oct 10, 2024', time: '12:30', vendor: 'Heat Master', amount: '₦1,100', status: 'Delivered' },
    { id: '#ORD-8980', date: 'Oct 10, 2024', time: '11:15', vendor: 'Delta Grill', amount: '₦1,400', status: 'Delivered' },
    { id: '#ORD-8975', date: 'Oct 09, 2024', time: '20:10', vendor: 'Bole Express', amount: '₦1,200', status: 'Delivered' }
  ];

  return (
    <AgentLayout>
      <div className="space-y-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h2 className="font-headline text-5xl font-black tracking-tighter text-zinc-900 mb-2 uppercase italic">Mission Logs</h2>
            <p className="font-body text-zinc-500 font-medium">Archive of all completed heat deployments.</p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
             <div className="relative flex-1 md:w-64">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input className="w-full pl-12 pr-4 py-3 bg-zinc-100 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/20" placeholder="Search ID or Vendor..." />
             </div>
             <button className="p-3 bg-zinc-100 rounded-xl text-zinc-900 hover:bg-zinc-200 transition-all">
                <Filter className="w-5 h-5" />
             </button>
          </div>
        </header>

        <section className="bg-white rounded-[3rem] border border-zinc-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-zinc-50/50">
                            <th className="p-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-100">Mission ID</th>
                            <th className="p-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-100">Timestamp</th>
                            <th className="p-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-100">Source Vendor</th>
                            <th className="p-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-100">Earned</th>
                            <th className="p-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-100">Status</th>
                            <th className="p-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-100"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-50">
                        {missions.map((m, i) => (
                            <tr key={i} className="group hover:bg-zinc-50/50 transition-all cursor-pointer">
                                <td className="p-8">
                                    <span className="text-sm font-black text-zinc-900 font-headline uppercase">{m.id}</span>
                                </td>
                                <td className="p-8">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-zinc-900">{m.date}</span>
                                        <span className="text-[10px] text-zinc-400 font-medium uppercase tracking-widest">{m.time}</span>
                                    </div>
                                </td>
                                <td className="p-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center">
                                            <Package className="w-4 h-4 text-zinc-400" />
                                        </div>
                                        <span className="text-sm font-bold text-zinc-900">{m.vendor}</span>
                                    </div>
                                </td>
                                <td className="p-8">
                                    <span className="text-sm font-black text-zinc-900">{m.amount}</span>
                                </td>
                                <td className="p-8">
                                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                                        <CheckCircle className="w-3 h-3" /> {m.status}
                                    </span>
                                </td>
                                <td className="p-8 text-right">
                                    <ChevronRight className="w-5 h-5 text-zinc-300 group-hover:text-primary transition-colors inline-block" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="p-8 bg-zinc-50/50 flex justify-between items-center border-t border-zinc-100">
                <p className="text-xs text-zinc-400 font-medium italic">Showing last 5 completed missions</p>
                <button className="text-xs font-black text-primary uppercase tracking-widest hover:underline">Download Report (PDF)</button>
            </div>
        </section>
      </div>
    </AgentLayout>
  );
};

export default AgentHistory;
