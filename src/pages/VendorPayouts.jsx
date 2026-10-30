import { ArrowUpRight, DollarSign, Info, Search, Upload, User } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import VendorLayout from '../components/VendorLayout';
import { listVendorDebts } from '../api/vendorDebts';
import { formatNaira } from '../utils/currency';

const VendorPayouts = () => {
  const [debts, setDebts] = useState(null);
  const [status, setStatus] = useState('loading');
  const [search, setSearch] = useState('');
  const [selectedAgent, setSelectedAgent] = useState(null);

  useEffect(() => {
    listVendorDebts()
      .then((data) => {
        setDebts(data);
        setStatus('loaded');
      })
      .catch(() => setStatus('error'));
  }, []);

  const visibleDebts = useMemo(() => {
    if (!debts) return [];
    const q = search.trim().toLowerCase();
    if (!q) return debts.debts;
    return debts.debts.filter((d) => d.agentName.toLowerCase().includes(q));
  }, [debts, search]);

  return (
    <VendorLayout>
      <div className="vendor-payouts mx-auto w-full max-w-6xl space-y-8 pb-20 xl:px-0">

        {/* Header */}
        <header className="fade-up flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0 space-y-3">
            <h2 className="font-serif italic text-4xl font-black leading-none tracking-[-0.03em] text-zinc-950 sm:text-5xl">
              Agent Payouts
            </h2>
            <p className="text-[15px] leading-relaxed text-zinc-500">
              Manage and acknowledge payments to your{' '}
              <span className="font-bold text-zinc-950">delivery agents</span>
            </p>
          </div>
        </header>

        {status === 'loading' && <p className="text-zinc-400">Loading payouts...</p>}
        {status === 'error' && <p className="text-zinc-400">Couldn't load payouts. Try again shortly.</p>}

        {status === 'loaded' && (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">

            {/* Left: pending (8 cols) */}
            <div className="min-w-0 lg:col-span-8 space-y-7">
              <section className="fade-up rounded-[20px] border border-zinc-100 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_20px_40px_-24px_rgba(0,0,0,0.2)]">
                <div className="mb-7 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-serif italic text-xl font-bold tracking-[-0.04em] text-zinc-950">
                      Pending Payouts
                    </h3>
                    <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                      Awaiting payment
                    </p>
                  </div>
                  <div className="flex items-center gap-3 rounded-[16px] border border-zinc-200 bg-zinc-50 px-4 py-3">
                    <Search className="h-4 w-4 text-zinc-400" />
                    <input
                      className="w-36 bg-transparent text-[10px] font-black uppercase tracking-[0.16em] text-zinc-700 outline-none placeholder:text-zinc-300"
                      placeholder="Search agents..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>

                {visibleDebts.length === 0 ? (
                  <p className="text-sm text-zinc-400">No outstanding agent debts.</p>
                ) : (
                  <div className="space-y-3">
                    {visibleDebts.map((debt) => (
                      <div
                        key={debt.agentId}
                        className={`rounded-[16px] border p-6 transition-colors duration-200 hover:bg-white ${
                          selectedAgent?.agentId === debt.agentId ? 'border-[#F5A800]/40 bg-white' : 'border-zinc-100 bg-zinc-50/60 hover:border-[#F5A800]/25'
                        }`}
                      >
                        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
                          <div className="flex items-center gap-5">
                            <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-zinc-950 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.5)]">
                              <User className="h-7 w-7 text-[#F5A800]" />
                            </div>
                            <div>
                              <h4 className="font-black uppercase tracking-[-0.02em] text-zinc-950">{debt.agentName}</h4>
                              <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                                {debt.status}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <p className="font-serif italic text-3xl font-black tracking-[-0.03em] text-zinc-950">
                              {formatNaira(debt.amountOwed)}
                            </p>
                            <button
                              type="button"
                              onClick={() => setSelectedAgent(debt)}
                              className="press-scale flex items-center gap-2 rounded-[14px] bg-zinc-950 px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_-12px_rgba(0,0,0,0.5)] transition-colors duration-200 hover:bg-[#F5A800]"
                            >
                              Initiate Payment <ArrowUpRight className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </div>

            {/* Right: summary + finalize (4 cols) */}
            <aside className="fade-up min-w-0 lg:col-span-4 space-y-6">

              {/* Debt summary */}
              <section className="rounded-[20px] bg-zinc-950 p-7 text-white shadow-[0_1px_1px_rgba(0,0,0,0.1),0_24px_48px_-24px_rgba(0,0,0,0.55)]">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 bg-white/10">
                      <DollarSign className="h-5 w-5 text-[#F5A800]" />
                    </div>
                    <h4 className="font-black uppercase tracking-[-0.01em] text-white">Total Debt</h4>
                  </div>
                  <div>
                    <p className="font-serif italic text-4xl font-black tracking-[-0.04em] text-white">
                      {formatNaira(debts.totalOwed)}
                    </p>
                    <p className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                      Across {String(debts.outstandingAgents).padStart(2, '0')} active Agents
                    </p>
                  </div>
                  <div className="flex gap-3.5 rounded-[18px] border border-white/[0.06] bg-white/[0.04] p-4">
                    <Info className="h-5 w-5 shrink-0 text-[#F5A800]" />
                    <p className="text-xs leading-relaxed text-zinc-400">
                      Pay agents directly. After transfer, upload the screenshot for agent validation.
                    </p>
                  </div>
                </div>
              </section>

              {/* Finalize upload */}
              <div className="flex flex-col items-center gap-5 rounded-[20px] border-2 border-dashed border-zinc-200 p-8 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#F5A800]/10">
                  <Upload className="h-6 w-6 text-[#F5A800]" />
                </div>
                <div>
                  <h5 className="text-sm font-black uppercase tracking-[-0.01em] text-zinc-950">Finalize Payout</h5>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
                    {selectedAgent
                      ? `Transfer ${formatNaira(selectedAgent.amountOwed)} to ${selectedAgent.agentName} directly. Screenshot upload isn't live yet.`
                      : 'Select an agent above to begin the acknowledgement process.'}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>

      <style>{`
        .vendor-payouts .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </VendorLayout>
  );
};

export default VendorPayouts;
