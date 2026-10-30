import React, { useEffect, useMemo, useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Search, CheckCircle, Ban, User, Store, Bike } from 'lucide-react';
import toast from 'react-hot-toast';
import { listUsers, activateUser, deactivateUser } from '../api/adminUsers';

const PAGE_SIZE = 20;

const AdminUserManagement = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('loading');
  const [search, setSearch] = useState('');
  const [offset, setOffset] = useState(0);
  const [pendingEmail, setPendingEmail] = useState(null);

  useEffect(() => {
    refresh();
  }, [offset]);

  function refresh() {
    listUsers({ limit: PAGE_SIZE, offset })
      .then((results) => {
        setUsers(results);
        setStatus('loaded');
      })
      .catch(() => setStatus('error'));
  }

  const visibleUsers = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return users;
    return users.filter((u) => (u.fullName ?? '').toLowerCase().includes(q) || (u.email ?? '').toLowerCase().includes(q));
  }, [users, search]);

  async function handleToggleActive(user) {
    setPendingEmail(user.email);
    try {
      if (user.isActive) {
        await deactivateUser(user.email);
      } else {
        await activateUser(user.email);
      }
      refresh();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setPendingEmail(null);
    }
  }

  function getRoleIcon(role) {
    switch (role) {
      case 'vendor': return <Store className="w-4 h-4" />;
      case 'agent': return <Bike className="w-4 h-4" />;
      default: return <User className="w-4 h-4" />;
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h2 className="font-headline text-5xl font-black tracking-tighter text-zinc-900 mb-2 uppercase italic">Registry <span className="text-primary not-italic">Control</span></h2>
            <p className="font-body text-zinc-500 font-medium">Manage and monitor all platform participants.</p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
             <div className="relative flex-1 md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  className="w-full pl-12 pr-4 py-4 bg-zinc-100 border-none rounded-2xl text-sm outline-none focus:ring-4 focus:ring-primary/5"
                  placeholder="Search by name or email..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
             </div>
          </div>
        </header>

        {status === 'loading' && <p className="text-zinc-400">Loading users...</p>}
        {status === 'error' && (
          <p className="text-zinc-400">
            Couldn't load users. This page requires an admin account. Confirm you're logged in as one.
          </p>
        )}

        {status === 'loaded' && (
          <section className="bg-white rounded-[3rem] border border-zinc-100 shadow-xl overflow-hidden">
              {visibleUsers.length === 0 ? (
                <p className="p-8 text-sm text-zinc-400">No users found.</p>
              ) : (
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-zinc-50/50">
                                <th className="p-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-100">Participant</th>
                                <th className="p-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-100">Persona</th>
                                <th className="p-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-100">Status</th>
                                <th className="p-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-100">Joined</th>
                                <th className="p-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-100 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-50">
                            {visibleUsers.map((u) => (
                                <tr key={u.id} className="group hover:bg-zinc-50/50 transition-all">
                                    <td className="p-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-400 group-hover:bg-primary group-hover:text-white transition-all">
                                                <User className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-black text-zinc-900 font-headline uppercase">{u.fullName}</p>
                                                <p className="text-xs text-zinc-400 font-medium">{u.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-8">
                                        <div className="flex items-center gap-2 text-zinc-500">
                                            {getRoleIcon(u.role)}
                                            <span className="text-xs font-bold capitalize">{u.role}</span>
                                        </div>
                                    </td>
                                    <td className="p-8">
                                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${u.isActive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                            {u.isActive ? <CheckCircle className="w-3 h-3" /> : <Ban className="w-3 h-3" />}
                                            {u.isActive ? 'Active' : 'Inactive'}
                                        </span>
                                    </td>
                                    <td className="p-8 text-xs font-bold text-zinc-400">
                                        {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : '—'}
                                    </td>
                                    <td className="p-8">
                                        <div className="flex items-center justify-center">
                                            <button
                                                onClick={() => handleToggleActive(u)}
                                                disabled={pendingEmail === u.email}
                                                className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm transition-all disabled:opacity-50 ${
                                                  u.isActive ? 'bg-zinc-100 text-zinc-500 hover:bg-red-600 hover:text-white' : 'bg-zinc-900 text-white hover:bg-primary'
                                                }`}
                                            >
                                                {pendingEmail === u.email ? '...' : u.isActive ? 'Deactivate' : 'Activate'}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
              )}
              <div className="p-8 bg-zinc-50/50 flex justify-between items-center border-t border-zinc-100">
                  <p className="text-xs text-zinc-400 font-medium italic">Showing {visibleUsers.length} users, offset {offset}.</p>
                  <div className="flex gap-4">
                      <button
                        onClick={() => setOffset((prev) => Math.max(0, prev - PAGE_SIZE))}
                        disabled={offset === 0}
                        className="px-6 py-2 bg-white border border-zinc-200 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-zinc-50 disabled:opacity-40"
                      >
                        Previous
                      </button>
                      <button
                        onClick={() => setOffset((prev) => prev + PAGE_SIZE)}
                        disabled={users.length < PAGE_SIZE}
                        className="px-6 py-2 bg-zinc-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all disabled:opacity-40"
                      >
                        Next Page
                      </button>
                  </div>
              </div>
          </section>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminUserManagement;
