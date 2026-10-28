import { CheckCircle, Package, Search } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import AgentLayout from '../components/AgentLayout';
import { listMissionHistory } from '../api/agents';
import { formatNaira } from '../utils/currency';

function downloadCsv(missions) {
  const header = ['Mission ID', 'Completed At', 'Vendor', 'Earned'];
  const rows = missions.map((m) => [m.id, m.completedAt ? new Date(m.completedAt).toISOString() : '', m.vendorName ?? '', m.deliveryFee]);
  const csv = [header, ...rows].map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'mission-history.csv';
  link.click();
  URL.revokeObjectURL(url);
}

const AgentHistory = () => {
  const [missions, setMissions] = useState([]);
  const [status, setStatus] = useState('loading');
  const [search, setSearch] = useState('');

  useEffect(() => {
    listMissionHistory()
      .then((results) => {
        setMissions(results.filter((m) => m.status === 'delivered'));
        setStatus('loaded');
      })
      .catch(() => setStatus('error'));
  }, []);

  const visibleMissions = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return missions;
    return missions.filter((m) => (m.vendorName ?? '').toLowerCase().includes(q) || m.id.toLowerCase().includes(q));
  }, [missions, search]);

  return (
    <AgentLayout>
      <div className="agent-history mx-auto w-full max-w-6xl space-y-8 pb-20 xl:px-0">

        {/* Header */}
        <header className="fade-up flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <h2 className="font-serif italic text-4xl font-black leading-none tracking-[-0.03em] text-zinc-950 sm:text-5xl">
              Mission Logs
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-500">
              Archive of all completed heat deployments.
            </p>
          </div>
          <div className="flex w-full items-center gap-3 md:w-auto">
            <div className="relative flex-1 md:w-64 md:flex-none">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <input
                className="w-full rounded-[14px] border border-zinc-200 bg-white py-3.5 pl-11 pr-5 text-[11px] font-bold text-zinc-700 shadow-[0_1px_2px_rgba(0,0,0,0.03)] outline-none placeholder:text-zinc-300 focus:border-[#F5A800]/40 focus:ring-4 focus:ring-[#F5A800]/5"
                placeholder="Search ID or Vendor..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </header>

        {status === 'loading' && <p className="text-zinc-400">Loading mission logs...</p>}
        {status === 'error' && <p className="text-zinc-400">Couldn't load mission logs. Try again shortly.</p>}

        {status === 'loaded' && (
          <section className="fade-up overflow-hidden rounded-[20px] border border-zinc-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03),0_20px_40px_-24px_rgba(0,0,0,0.2)]">
            {visibleMissions.length === 0 ? (
              <p className="p-7 text-sm text-zinc-400">No completed missions yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-zinc-100 bg-zinc-50/60">
                      {['Mission ID', 'Completed', 'Source Vendor', 'Earned', 'Status'].map((col) => (
                        <th key={col} className="px-7 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-50">
                    {visibleMissions.map((m) => (
                      <tr key={m.id} className="transition-colors hover:bg-zinc-50/60">
                        <td className="px-7 py-6">
                          <span className="text-sm font-black uppercase tracking-[-0.01em] text-zinc-950">
                            {m.id.slice(0, 8)}
                          </span>
                        </td>
                        <td className="px-7 py-6">
                          <p className="text-sm font-bold text-zinc-950">
                            {m.completedAt ? new Date(m.completedAt).toLocaleDateString() : '—'}
                          </p>
                        </td>
                        <td className="px-7 py-6">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-zinc-100">
                              <Package className="h-4 w-4 text-zinc-400" />
                            </div>
                            <span className="text-sm font-bold text-zinc-950">{m.vendorName ?? 'Vendor'}</span>
                          </div>
                        </td>
                        <td className="px-7 py-6">
                          <span className="text-sm font-black text-zinc-950">{formatNaira(m.deliveryFee)}</span>
                        </td>
                        <td className="px-7 py-6">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-emerald-600">
                            <CheckCircle className="h-3 w-3" />
                            Delivered
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="flex items-center justify-between border-t border-zinc-100 bg-zinc-50/40 px-7 py-5">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                {visibleMissions.length} completed missions
              </p>
              <button
                type="button"
                onClick={() => downloadCsv(visibleMissions)}
                disabled={visibleMissions.length === 0}
                className="text-[10px] font-black uppercase tracking-[0.16em] text-[#D88B00] transition hover:underline disabled:opacity-40"
              >
                Export CSV
              </button>
            </div>
          </section>
        )}
      </div>

      <style>{`
        .agent-history .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </AgentLayout>
  );
};

export default AgentHistory;
