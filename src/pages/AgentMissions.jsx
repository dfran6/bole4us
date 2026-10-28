import {
  CheckCircle,
  ChevronRight,
  Info,
  MapPin,
  MessageSquare,
  Navigation,
  Package,
  Phone,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import AgentLayout from '../components/AgentLayout';
import { listMissionHistory, updateMissionStatus } from '../api/agents';
import { formatNaira } from '../utils/currency';

const STEPS = ['claimed', 'at_vendor', 'delivering', 'delivered'];
const STEP_LABELS = { claimed: 'Claimed', at_vendor: 'At Vendor', delivering: 'In Transit', delivered: 'Delivered' };

function nextStep(status) {
  const index = STEPS.indexOf(status);
  return index >= 0 && index < STEPS.length - 1 ? STEPS[index + 1] : null;
}

const AgentMissions = () => {
  const [missions, setMissions] = useState([]);
  const [status, setStatus] = useState('loading');
  const [advancingIds, setAdvancingIds] = useState(() => new Set());

  function refresh() {
    listMissionHistory()
      .then((results) => {
        setMissions(results.filter((m) => m.status !== 'delivered'));
        setStatus('loaded');
      })
      .catch(() => setStatus('error'));
  }

  useEffect(() => {
    refresh();
  }, []);

  async function handleAdvance(mission) {
    const next = nextStep(mission.status);
    if (!next || advancingIds.has(mission.id)) return;
    setAdvancingIds((prev) => new Set(prev).add(mission.id));
    try {
      await updateMissionStatus(mission.id, next);
      setMissions((prev) =>
        next === 'delivered' ? prev.filter((m) => m.id !== mission.id) : prev.map((m) => (m.id === mission.id ? { ...m, status: next } : m))
      );
    } catch (error) {
      toast.error(error.message);
    } finally {
      setAdvancingIds((prev) => {
        const copy = new Set(prev);
        copy.delete(mission.id);
        return copy;
      });
    }
  }

  function handleUnavailable(label) {
    toast(`${label} isn't available yet`, { icon: 'ℹ️' });
  }

  return (
    <AgentLayout>
      <div className="agent-missions mx-auto w-full max-w-6xl space-y-10 pb-20 xl:px-0">

        {/* Header */}
        <header className="fade-up flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <h2 className="font-serif italic text-4xl font-black leading-none tracking-[-0.03em] text-zinc-950 sm:text-5xl">
              My Missions
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-500">
              Tracking{' '}
              <span className="font-bold text-zinc-950">{missions.length} active mission{missions.length !== 1 ? 's' : ''}</span>
            </p>
          </div>
        </header>

        {status === 'loading' && <p className="text-zinc-400">Loading missions...</p>}
        {status === 'error' && <p className="text-zinc-400">Couldn't load missions. Try again shortly.</p>}

        {status === 'loaded' && (
          <div className="space-y-6">
            {missions.length > 0 ? (
              missions.map((mission) => {
                const progress = (STEPS.indexOf(mission.status) / (STEPS.length - 1)) * 100;
                const next = nextStep(mission.status);
                return (
                  <section
                    key={mission.id}
                    className="fade-up group overflow-hidden rounded-[20px] border border-zinc-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03),0_28px_54px_-30px_rgba(0,0,0,0.28)]"
                  >
                    <div className="p-7 md:p-10 space-y-8">

                      {/* Mission identity */}
                      <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
                        <div className="flex items-center gap-5">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-zinc-950 text-[#F5A800] shadow-[0_10px_24px_-12px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105">
                            <Package className="h-7 w-7" />
                          </div>
                          <div>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F5A800]/20 bg-[#F5A800]/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-[#D88B00]">
                              {mission.id.slice(0, 8)}
                            </span>
                            <h3 className="mt-2 font-black uppercase tracking-[-0.02em] text-zinc-950 text-xl">
                              {mission.vendorName ?? 'Vendor'}
                            </h3>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-serif italic text-3xl font-black tracking-[-0.04em] text-zinc-950">
                            {formatNaira(mission.deliveryFee)}
                          </p>
                          <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                            Delivery Bonus
                          </p>
                        </div>
                      </div>

                      {/* Status stepper */}
                      <div className="relative grid grid-cols-4 gap-3">
                        <div className="absolute top-5 left-0 h-0.5 w-full bg-zinc-100 -translate-y-1/2">
                          <div className="h-full bg-[#F5A800] transition-all duration-1000" style={{ width: `${progress}%` }} />
                        </div>
                        {STEPS.map((step) => {
                          const stepIndex = STEPS.indexOf(step);
                          const currentIndex = STEPS.indexOf(mission.status);
                          const active = stepIndex <= currentIndex;
                          return (
                            <div key={step} className="relative z-10 flex flex-col items-center gap-2.5 bg-white px-2">
                              <div
                                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                                  active ? 'scale-110 border-[#F5A800] bg-[#F5A800] text-white shadow-[0_8px_20px_-8px_rgba(245,168,0,0.5)]' : 'border-zinc-200 bg-white text-zinc-300'
                                }`}
                              >
                                <CheckCircle className="h-5 w-5" />
                              </div>
                              <span className={`text-center text-[9px] font-black uppercase tracking-[0.14em] ${active ? 'text-zinc-950' : 'text-zinc-300'}`}>
                                {STEP_LABELS[step]}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Logistics detail */}
                      <div className="grid grid-cols-1 gap-6 border-t border-zinc-100 pt-7 md:grid-cols-2">
                        <div className="space-y-5">
                          <div className="flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-zinc-100">
                              <MapPin className="h-5 w-5 text-zinc-400" />
                            </div>
                            <div>
                              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                                Target Destination
                              </p>
                              <p className="mt-1 text-sm font-bold text-zinc-950">{mission.deliveryAddress}</p>
                            </div>
                          </div>
                          {mission.deliveryInstructions && (
                            <div className="flex gap-4">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-zinc-100">
                                <Info className="h-5 w-5 text-zinc-400" />
                              </div>
                              <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                                  Instructions
                                </p>
                                <p className="mt-1 text-sm font-bold text-zinc-950">{mission.deliveryInstructions}</p>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="space-y-3">
                          <button
                            type="button"
                            onClick={() => handleUnavailable('Customer contact')}
                            className="press-scale group/contact flex w-full items-center justify-between rounded-[16px] bg-zinc-50 p-5 transition hover:bg-zinc-100"
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                                <Phone className="h-4 w-4 text-zinc-950" />
                              </div>
                              <div className="text-left">
                                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                                  Customer Contact
                                </p>
                                <p className="mt-0.5 text-sm font-bold uppercase text-zinc-950">Not available yet</p>
                              </div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-zinc-300 transition-transform group-hover/contact:translate-x-1" />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleUnavailable('Mission comms')}
                            className="press-scale group/chat flex w-full items-center justify-between rounded-[16px] bg-zinc-950 p-5 text-white shadow-[0_10px_24px_-12px_rgba(0,0,0,0.5)] transition hover:bg-[#F5A800]"
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                                <MessageSquare className="h-4 w-4 text-white" />
                              </div>
                              <div className="text-left">
                                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/40">
                                  Mission Comms
                                </p>
                                <p className="mt-0.5 text-sm font-bold italic text-white">Open Channel</p>
                              </div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-white/50 transition-transform group-hover/chat:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Mission control footer */}
                    <div className="grid grid-cols-2 gap-4 border-t border-zinc-100 bg-zinc-50/50 p-5">
                      <button
                        type="button"
                        onClick={() => handleUnavailable('Signal interference reporting')}
                        className="press-scale rounded-[16px] border border-zinc-200 bg-white py-4 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-950 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:bg-zinc-950 hover:text-white"
                      >
                        Signal Interference
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAdvance(mission)}
                        disabled={!next || advancingIds.has(mission.id)}
                        className="press-scale flex items-center justify-center gap-2 rounded-[16px] bg-[#F5A800] py-4 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_12px_24px_-12px_rgba(245,168,0,0.55)] transition-colors hover:bg-zinc-950 disabled:opacity-50"
                      >
                        <Navigation className="h-4 w-4" />
                        {next ? `Mark ${STEP_LABELS[next]}` : 'Update Status'}
                      </button>
                    </div>
                  </section>
                );
              })
            ) : (
              <div className="flex flex-col items-center justify-center rounded-[26px] border-2 border-dashed border-zinc-200 p-20 text-center">
                <Package className="mb-5 h-14 w-14 text-zinc-200" />
                <h3 className="font-serif italic text-2xl font-black uppercase text-zinc-300">
                  No active signals
                </h3>
                <p className="mt-2 text-zinc-400">Return to the Signals Pool to grab a mission.</p>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        .agent-missions .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </AgentLayout>
  );
};

export default AgentMissions;
