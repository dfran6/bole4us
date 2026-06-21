import {
  CheckCircle,
  ChevronRight,
  Clock,
  Info,
  MapPin,
  MessageSquare,
  Navigation,
  Package,
  Phone,
} from 'lucide-react';
import AgentLayout from '../components/AgentLayout';

const AgentMissions = () => {
  const activeMissions = [
    {
      id: 'ORD-4492',
      vendor: 'Urban Heat Grill',
      customer: 'Bolanle A.',
      address: 'Block 4, Student Union Hall',
      fee: '₦1,200',
      status: 'at_vendor',
      timestamp: '15 mins ago',
      items: ['Quarter Rack', 'Signature Spicy Slaw'],
    },
  ];

  return (
    <AgentLayout>
      <div className="agent-missions mx-auto w-full max-w-6xl space-y-10 pb-20 xl:px-0">

        {/* Header */}
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#F5A800]" />
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#D88B00]">
                Active missions
              </span>
            </div>
            <h2 className="font-serif italic text-4xl font-black leading-none tracking-[-0.04em] text-zinc-950 sm:text-5xl">
              My Missions
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-500">
              Tracking{' '}
              <span className="font-bold text-zinc-950">{activeMissions.length} active session{activeMissions.length !== 1 ? 's' : ''}</span>
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">

          {/* Active missions (8 cols) */}
          <div className="min-w-0 lg:col-span-8 space-y-6">
            {activeMissions.length > 0 ? (
              activeMissions.map((mission) => (
                <section
                  key={mission.id}
                  className="group overflow-hidden rounded-[26px] border border-zinc-100 bg-white shadow-[0_24px_70px_-44px_rgba(0,0,0,0.45)]"
                >
                  <div className="p-7 md:p-10 space-y-8">

                    {/* Mission identity */}
                    <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
                      <div className="flex items-center gap-5">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-zinc-950 text-[#F5A800] shadow-[0_14px_36px_-18px_rgba(0,0,0,0.65)] transition-transform duration-500 group-hover:scale-105">
                          <Package className="h-7 w-7" />
                        </div>
                        <div>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F5A800]/20 bg-[#F5A800]/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-[#D88B00]">
                            {mission.id}
                          </span>
                          <h3 className="mt-2 font-black uppercase tracking-[-0.02em] text-zinc-950 text-xl">
                            {mission.vendor}
                          </h3>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-serif italic text-3xl font-black tracking-[-0.04em] text-zinc-950">
                          {mission.fee}
                        </p>
                        <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                          Delivery Bonus Locked
                        </p>
                      </div>
                    </div>

                    {/* Status stepper */}
                    <div className="relative grid grid-cols-3 gap-3">
                      <div className="absolute top-5 left-0 h-0.5 w-full bg-zinc-100 -translate-y-1/2">
                        <div
                          className="h-full bg-[#F5A800] transition-all duration-1000"
                          style={{
                            width: mission.status === 'at_vendor' ? '16%' : mission.status === 'delivering' ? '50%' : '100%',
                          }}
                        />
                      </div>
                      {[
                        { label: 'At Vendor',  icon: CheckCircle, active: mission.status === 'at_vendor'  },
                        { label: 'In Transit', icon: Navigation,  active: mission.status === 'delivering' },
                        { label: 'Deployed',   icon: MapPin,      active: mission.status === 'arrived'    },
                      ].map((step) => {
                        const Icon = step.icon;
                        return (
                          <div
                            key={step.label}
                            className="relative z-10 flex flex-col items-center gap-2.5 bg-white px-2"
                          >
                            <div
                              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                                step.active
                                  ? 'scale-110 border-[#F5A800] bg-[#F5A800] text-white shadow-[0_8px_24px_-8px_rgba(245,168,0,0.55)]'
                                  : 'border-zinc-200 bg-white text-zinc-300'
                              }`}
                            >
                              <Icon className="h-5 w-5" />
                            </div>
                            <span
                              className={`text-center text-[9px] font-black uppercase tracking-[0.14em] ${
                                step.active ? 'text-zinc-950' : 'text-zinc-300'
                              }`}
                            >
                              {step.label}
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
                            <p className="mt-1 text-sm font-bold text-zinc-950">{mission.address}</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-zinc-100">
                            <Info className="h-5 w-5 text-zinc-400" />
                          </div>
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                              Cargo List
                            </p>
                            <p className="mt-1 text-sm font-bold text-zinc-950">
                              {mission.items.join(', ')}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <button
                          type="button"
                          className="group/contact flex w-full items-center justify-between rounded-[20px] bg-zinc-50 p-5 transition hover:bg-zinc-100"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                              <Phone className="h-4 w-4 text-zinc-950" />
                            </div>
                            <div className="text-left">
                              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                                Customer Contact
                              </p>
                              <p className="mt-0.5 text-sm font-bold uppercase text-zinc-950">
                                {mission.customer}
                              </p>
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-zinc-300 transition-transform group-hover/contact:translate-x-1" />
                        </button>

                        <button
                          type="button"
                          className="group/chat flex w-full items-center justify-between rounded-[20px] bg-zinc-950 p-5 text-white transition hover:bg-[#F5A800]"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                              <MessageSquare className="h-4 w-4 text-white" />
                            </div>
                            <div className="text-left">
                              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/40">
                                Mission Comms
                              </p>
                              <p className="mt-0.5 text-sm font-bold italic text-white">
                                Open Channel
                              </p>
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
                      className="rounded-[20px] border border-zinc-200 bg-white py-4 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-950 shadow-sm transition hover:bg-zinc-950 hover:text-white active:scale-95"
                    >
                      Signal Interference
                    </button>
                    <button
                      type="button"
                      className="rounded-[20px] bg-[#F5A800] py-4 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_14px_36px_-16px_rgba(245,168,0,0.65)] transition-all hover:bg-zinc-950 active:scale-95"
                    >
                      Update Status
                    </button>
                  </div>
                </section>
              ))
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

          {/* Map + timer (4 cols) */}
          <aside className="min-w-0 lg:col-span-4 space-y-6">
            <section className="group relative h-[460px] overflow-hidden rounded-[26px] border border-zinc-100 bg-zinc-950 shadow-[0_32px_80px_-48px_rgba(0,0,0,0.65)]">
              <img
                className="h-full w-full object-cover opacity-40 grayscale transition-all duration-[2s] group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnrreR1rY3z2MvY1T8G7fX9v6w7n8m9p0q1r2s3t4u5v6w7x8y9z0"
                alt="Map"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-900/60 to-transparent p-7">
                <div className="flex items-center gap-4 text-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#F5A800] shadow-[0_8px_24px_-8px_rgba(245,168,0,0.55)]">
                    <Navigation className="h-5 w-5 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500">
                      Current Position
                    </p>
                    <p className="text-sm font-bold uppercase text-white">Victoria Island Center</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 top-1/3 h-8 w-8 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#F5A800] opacity-60 ring-8 ring-[#F5A800]/20" />
              <div className="absolute left-1/2 top-1/3 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5A800] shadow-[0_0_20px_rgba(245,168,0,0.9)]" />
            </section>

            <div className="rounded-[24px] border border-zinc-100 bg-white p-6 shadow-[0_16px_42px_-28px_rgba(0,0,0,0.25)]">
              <div className="mb-4 flex items-center gap-3">
                <Clock className="h-5 w-5 text-[#F5A800]" />
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-950">
                  Active Timer: 12:44
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
                <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-[#F5A800] to-[#FF7A00]" />
              </div>
            </div>
          </aside>
        </div>
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
