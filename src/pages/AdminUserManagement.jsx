import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Search, Filter, Shield, AlertTriangle, Ban, CheckCircle, MoreVertical, Flag, User, Store, Bike } from 'lucide-react';

const AdminUserManagement = () => {
  const [users, setUsers] = useState([
    { id: 'USR-101', name: 'Uche Okoro', email: 'uche@example.com', role: 'Student', status: 'Active', joins: 'Oct 20, 2024' },
    { id: 'VND-502', name: "Smoky Delta Grill", email: 'delta@hub.com', role: 'Vendor', status: 'Flagged', joins: 'Sep 15, 2024' },
    { id: 'AGT-303', name: 'Emeka Logistics', email: 'emeka@heat.com', role: 'Agent', status: 'Active', joins: 'Oct 01, 2024' },
    { id: 'USR-105', name: 'John Doe', email: 'john@doe.com', role: 'Student', status: 'Banned', joins: 'Aug 10, 2024' },
  ]);

  const getRoleIcon = (role) => {
    switch (role) {
      case 'Vendor': return <Store className="w-4 h-4" />;
      case 'Agent': return <Bike className="w-4 h-4" />;
      default: return <User className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-50 text-green-600';
      case 'Flagged': return 'bg-yellow-50 text-yellow-600';
      case 'Banned': return 'bg-red-50 text-red-600';
      default: return 'bg-zinc-50 text-zinc-600';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h2 className="font-headline text-5xl font-black tracking-tighter text-zinc-900 mb-2 uppercase italic">Registry <span className="text-primary NOT-italic">Control</span></h2>
            <p className="font-body text-zinc-500 font-medium">Manage and monitor all platform participants.</p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
             <div className="relative flex-1 md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input className="w-full pl-12 pr-4 py-4 bg-zinc-100 border-none rounded-2xl text-sm outline-none focus:ring-4 focus:ring-primary/5" placeholder="Search by name, email or ID..." />
             </div>
             <button className="p-4 bg-zinc-900 text-white rounded-2xl hover:bg-primary transition-all shadow-xl shadow-zinc-200">
                <Filter className="w-5 h-5" />
             </button>
          </div>
        </header>

        <section className="bg-white rounded-[3rem] border border-zinc-100 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-zinc-50/50">
                            <th className="p-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-100">Participant</th>
                            <th className="p-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-100">Persona</th>
                            <th className="p-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-100">Status</th>
                            <th className="p-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-100">Joined</th>
                            <th className="p-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-100 text-center">Protocol Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-50">
                        {users.map((u, i) => (
                            <tr key={i} className="group hover:bg-zinc-50/50 transition-all">
                                <td className="p-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-primary group-hover:text-white transition-all">
                                            <User className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-black text-zinc-900 font-headline uppercase">{u.name}</p>
                                            <p className="text-xs text-zinc-400 font-medium">{u.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-8">
                                    <div className="flex items-center gap-2 text-zinc-500">
                                        {getRoleIcon(u.role)}
                                        <span className="text-xs font-bold">{u.role}</span>
                                    </div>
                                </td>
                                <td className="p-8">
                                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${getStatusColor(u.status)}`}>
                                        {u.status === 'Active' && <CheckCircle className="w-3 h-3" />}
                                        {u.status === 'Flagged' && <AlertTriangle className="w-3 h-3" />}
                                        {u.status === 'Banned' && <Ban className="w-3 h-3" />}
                                        {u.status}
                                    </span>
                                </td>
                                <td className="p-8 text-xs font-bold text-zinc-400">{u.joins}</td>
                                <td className="p-8">
                                    <div className="flex items-center justify-center gap-3">
                                        <button title="Issue Warning" className="p-3 bg-zinc-100 rounded-xl text-zinc-500 hover:bg-yellow-500 hover:text-white transition-all shadow-sm">
                                            <AlertTriangle className="w-4 h-4" />
                                        </button>
                                        <button title="Flag Profile" className="p-3 bg-zinc-100 rounded-xl text-zinc-500 hover:bg-orange-500 hover:text-white transition-all shadow-sm">
                                            <Flag className="w-4 h-4" />
                                        </button>
                                        <button title="Permaban" className="p-3 bg-zinc-100 rounded-xl text-zinc-500 hover:bg-red-600 hover:text-white transition-all shadow-sm">
                                            <Ban className="w-4 h-4" />
                                        </button>
                                        <button className="p-3 bg-zinc-100 rounded-xl text-zinc-500 hover:bg-zinc-900 hover:text-white transition-all shadow-sm">
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="p-8 bg-zinc-50/50 flex justify-between items-center border-t border-zinc-100">
                <p className="text-xs text-zinc-400 font-medium italic">Protocol Actions require multi-admin acknowledgement for Vendors.</p>
                <div className="flex gap-4">
                    <button className="px-6 py-2 bg-white border border-zinc-200 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-zinc-50">Previous</button>
                    <button className="px-6 py-2 bg-zinc-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all">Next Page</button>
                </div>
            </div>
        </section>
      </div>
    </AdminLayout>
  );
};

export default AdminUserManagement;
