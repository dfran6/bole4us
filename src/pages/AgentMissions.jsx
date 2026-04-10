import React from 'react';
import AgentLayout from '../components/AgentLayout';
import { Package, MapPin, Clock, CheckCircle, Navigation, Phone, MessageSquare, ChevronRight, Info } from 'lucide-react';

const AgentMissions = () => {
    const activeMissions = [
        {
            id: 'ORD-4492',
            vendor: 'Urban Heat Grill',
            customer: 'Bolanle A.',
            address: 'Block 4, Student Union Hall',
            fee: '₦1,200',
            status: 'at_vendor', // at_vendor, delivering, arrived
            timestamp: '15 mins ago',
            items: ['Quarter Rack', 'Signature Spicy Slaw']
        }
    ];

    return (
        <AgentLayout>
            <div className="space-y-12">
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                    <div>
                        <h2 className="font-headline text-5xl font-black tracking-tighter text-zinc-900 mb-2 uppercase italic">My Missions</h2>
                        <p className="font-body text-zinc-500 font-medium">Tracking <span className="text-zinc-900 font-bold">{activeMissions.length} active sessions</span></p>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left: Active Missions (8 cols) */}
                    <div className="lg:col-span-8 space-y-8">
                        {activeMissions.length > 0 ? (
                            activeMissions.map((mission) => (
                                <section key={mission.id} className="bg-white rounded-[3rem] border border-zinc-100 shadow-xl overflow-hidden group">
                                    <div className="p-8 md:p-12 space-y-10">
                                        {/* Mission Identity */}
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                            <div className="flex items-center gap-6">
                                                <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center text-primary shadow-2xl group-hover:scale-105 transition-transform">
                                                    <Package className="w-8 h-8" />
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-black bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-widest">{mission.id}</span>
                                                    <h3 className="text-3xl font-black font-headline uppercase tracking-tighter text-zinc-900 mt-2">{mission.vendor}</h3>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-3xl font-black font-headline text-zinc-900 tracking-tighter">{mission.fee}</p>
                                                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mt-1">Delivery Bonus Locked</p>
                                            </div>
                                        </div>

                                        {/* Status Stepper */}
                                        <div className="grid grid-cols-3 gap-4 relative">
                                            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-zinc-100 -translate-y-1/2">
                                                <div className={`h-full bg-primary transition-all duration-1000 ${mission.status === 'at_vendor' ? 'w-[16%]' : mission.status === 'delivering' ? 'w-[50%]' : 'w-full'}`}></div>
                                            </div>
                                            {[
                                                { label: 'At Vendor', icon: CheckCircle, active: mission.status === 'at_vendor' },
                                                { label: 'In Transit', icon: Navigation, active: mission.status === 'delivering' },
                                                { label: 'Deployed', icon: MapPin, active: mission.status === 'arrived' }
                                            ].map((step, i) => (
                                                <div key={i} className={`relative z-10 flex flex-col items-center gap-3 bg-white px-2`}>
                                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${step.active ? 'bg-primary border-primary text-white scale-110 shadow-lg' : 'bg-white border-zinc-100 text-zinc-300'}`}>
                                                        <step.icon className="w-5 h-5" />
                                                    </div>
                                                    <span className={`text-[9px] font-black uppercase tracking-widest ${step.active ? 'text-zinc-900' : 'text-zinc-300'}`}>{step.label}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Logistics Details */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-zinc-50">
                                            <div className="space-y-6">
                                                <div className="flex gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center shrink-0">
                                                        <MapPin className="w-5 h-5 text-zinc-400" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Target Destination</p>
                                                        <p className="text-sm font-bold text-zinc-900 mt-1">{mission.address}</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center shrink-0">
                                                        <Info className="w-5 h-5 text-zinc-400" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Cargo List</p>
                                                        <p className="text-sm font-bold text-zinc-900 mt-1">{mission.items.join(', ')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="bg-zinc-50 p-6 rounded-[2rem] flex items-center justify-between group/contact hover:bg-zinc-100 transition-colors cursor-pointer">
                                                    <div className="flex items-center gap-4">
                                                       <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                                                          <Phone className="w-4 h-4 text-zinc-900" />
                                                       </div>
                                                       <div>
                                                           <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none">Customer Contact</p>
                                                           <p className="text-sm font-bold text-zinc-900 mt-1 uppercase leading-none">{mission.customer}</p>
                                                       </div>
                                                    </div>
                                                    <ChevronRight className="w-4 h-4 text-zinc-300 group-hover/contact:translate-x-1 transition-transform" />
                                                </div>
                                                <div className="bg-zinc-900 p-6 rounded-[2rem] flex items-center justify-between group/chat hover:bg-primary transition-colors cursor-pointer text-white">
                                                    <div className="flex items-center gap-4">
                                                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                                          <MessageSquare className="w-4 h-4 text-white" />
                                                       </div>
                                                       <div>
                                                           <p className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-none">Mission Comms</p>
                                                           <p className="text-sm font-bold text-white mt-1 uppercase leading-none italic">Open Channel</p>
                                                       </div>
                                                    </div>
                                                    <ChevronRight className="w-4 h-4 text-white/50 group-hover/chat:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mission Control Actions */}
                                    <div className="bg-zinc-50/50 p-6 border-t border-zinc-100 grid grid-cols-2 gap-4">
                                        <button className="py-5 bg-white border border-zinc-100 text-zinc-900 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest shadow-sm hover:bg-zinc-900 hover:text-white transition-all">
                                            Signal Interference
                                        </button>
                                        <button className="py-5 bg-primary text-white rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:scale-[0.98] transition-all">
                                            Update Status
                                        </button>
                                    </div>
                                </section>
                            ))
                        ) : (
                            <div className="p-20 border-4 border-dashed border-zinc-100 rounded-[4rem] text-center">
                                <Package className="w-16 h-16 text-zinc-100 mx-auto mb-6" />
                                <h3 className="text-2xl font-black font-headline uppercase text-zinc-300">No active signals found</h3>
                                <p className="text-zinc-400 font-medium mt-2">Return to the Signals Pool to grab a mission.</p>
                            </div>
                        )}
                    </div>

                    {/* Right: Map Simulation (4 cols) */}
                    <aside className="lg:col-span-4 space-y-10">
                        <section className="bg-zinc-900 rounded-[3rem] h-[500px] relative overflow-hidden shadow-2xl group border border-zinc-800">
                             <img className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-[2s]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnrreR1rY3z2MvY1T8G7fX9v6w7n8m9p0q1r2s3t4u5v6w7x8y9z0" alt="Map Simulation" />
                             <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-zinc-950 via-zinc-900/60 to-transparent">
                                 <div className="flex items-center gap-4 text-white">
                                     <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-xl shadow-primary/20">
                                         <Navigation className="w-6 h-6 animate-pulse" />
                                     </div>
                                     <div>
                                         <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Current Position</p>
                                         <p className="text-sm font-bold uppercase tracking-tight">Victoria Island Center</p>
                                     </div>
                                 </div>
                             </div>
                             {/* Map Pins Simulation */}
                             <div className="absolute top-1/3 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full ring-8 ring-primary/20 animate-ping"></div>
                             <div className="absolute top-1/3 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full shadow-[0_0_20px_rgba(255,77,0,1)]"></div>
                        </section>

                        <div className="bg-white p-8 rounded-[3rem] border border-zinc-100 shadow-sm space-y-4">
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-primary" />
                                <span className="text-[10px] font-black text-zinc-900 uppercase tracking-widest">Active Timer: 12:44</span>
                            </div>
                            <div className="w-full bg-zinc-50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-full w-[65%] shadow-sm"></div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </AgentLayout>
    );
};

export default AgentMissions;
