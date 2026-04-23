import React from 'react';
import AgentLayout from '../components/AgentLayout';
import MapComponent from '../components/MapComponent';
import { Radio, MapPin, Navigation, CheckCircle, Package, Flame, Clock, Wallet, DollarSign, ArrowUpRight, TrendingUp, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const AgentHub = () => {
    const signalMarkers = [
        { title: "Smoky Delta Grill", lngLat: [3.3792, 6.5244], desc: "Active Signal: #ORD-9012", color: "#FF4D00" },
        { title: "Mama T Bole Hub", lngLat: [3.3850, 6.5300], desc: "Active Signal: #ORD-9015", color: "#FF4D00" }
    ];

    return (
        <AgentLayout>
            <div className="space-y-12">
                {/* Hub Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div>
                        <h2 className="font-headline text-6xl font-black tracking-tighter text-zinc-900 mb-2 uppercase italic">Velocity <span className="text-primary NOT-italic">Hub</span></h2>
                        <p className="font-body text-zinc-500 font-medium italic">Active Deployment in <span className="text-zinc-900 font-bold">Lekki-VI Sector</span></p>
                    </div>
                    <div className="flex items-center gap-4 bg-zinc-100 p-2 rounded-2xl border border-zinc-200">
                         <div className="px-6 py-2 bg-white rounded-xl shadow-sm border border-zinc-200 flex items-center gap-3">
                             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                             <span className="text-[10px] font-black uppercase tracking-widest text-zinc-900 tracking-[0.2em]">Signal: Active</span>
                         </div>
                    </div>
                </header>

                {/* Agent Analytics Cards */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { label: 'Weekly Earnings', value: '₦42,500', icon: TrendingUp, color: 'text-green-500', bg: 'bg-green-50' },
                        { label: 'Signal Success', value: '98.4%', icon: Target, color: 'text-primary', bg: 'bg-primary/5' },
                        { label: 'Active Missions', value: '124', icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-50' },
                        { label: 'Hub Ranking', value: '#12', icon: Star, color: 'text-blue-500', bg: 'bg-blue-50' }
                    ].map((stat, i) => (
                        <div key={i} className={`${stat.bg} p-8 rounded-[2.5rem] border border-zinc-100 shadow-sm group hover:scale-[1.02] transition-all`}>
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-3 rounded-2xl bg-white shadow-sm ${stat.color}`}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Live View</span>
                            </div>
                            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">{stat.label}</p>
                            <h4 className="text-4xl font-headline font-black text-zinc-900 tracking-tighter">{stat.value}</h4>
                        </div>
                    ))}
                </section>

                {/* Logistics View: Map */}
                <section className="h-[500px] w-full rounded-[3rem] overflow-hidden border border-zinc-100 shadow-2xl relative">
                    <MapComponent center={[3.3792, 6.5244]} zoom={13} markers={signalMarkers} />
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left: Signals Marketplace (7 cols) */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-headline text-2xl font-black text-zinc-900 uppercase tracking-tight">Active Signals</h3>
                            <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline flex items-center gap-2">
                                <Radio className="w-4 h-4" /> Refresh Pool
                            </button>
                        </div>

                        {/* Marketplace Item: Available to Grab */}
                        {[
                            { id: '#ORD-9012', vendor: 'Smoky Delta Grill', dist: '0.8km', fee: '₦1,200', items: '3 Items' },
                            { id: '#ORD-9015', vendor: 'Mama T Bole Hub', dist: '1.4km', fee: '₦1,500', items: '5 Items' }
                        ].map((order, i) => (
                            <div key={i} className="bg-white p-8 rounded-[3rem] border border-zinc-100 shadow-sm hover:border-primary/20 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 flex flex-col items-end gap-2">
                                     <span className="text-[10px] font-black bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-widest italic font-headline">Unclaimed</span>
                                     <span className="text-2xl font-black text-zinc-900 font-headline tracking-tighter">{order.fee}</span>
                                </div>
                                
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                                        <Flame className="w-8 h-8 text-primary" fill="currentColor" />
                                    </div>
                                    <div>
                                        <h4 className="font-headline font-black text-xl text-zinc-900 uppercase tracking-tight">{order.vendor}</h4>
                                        <p className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
                                            <MapPin className="w-3 h-3 text-primary" /> {order.dist} • {order.items}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <button className="py-4 bg-zinc-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-zinc-200 hover:bg-primary transition-all active:scale-95 flex items-center justify-center gap-3">
                                        Grab Mission <Navigation className="w-4 h-4" />
                                    </button>
                                    <button className="py-4 border border-zinc-100 text-zinc-400 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-zinc-50 hover:text-zinc-900 transition-all">
                                        Mission Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Agent Earnings & Status (5 cols) */}
                    <div className="lg:col-span-5 space-y-10">
                        {/* Earnings Section */}
                        <section className="bg-zinc-900 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
                             <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-bl-full"></div>
                             <div className="relative z-10 space-y-10">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                                            <Wallet className="w-6 h-6 text-primary" />
                                        </div>
                                        <h4 className="text-xl font-black font-headline uppercase tracking-tighter">My Earnings</h4>
                                    </div>
                                    <Link className="p-3 bg-white/5 rounded-xl border border-white/10 text-primary hover:bg-primary hover:text-white transition-all">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </Link>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Owed to me</p>
                                            <p className="text-5xl font-headline font-black text-white mt-1 tracking-tighter">₦8,450</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest italic">3 Vendors</p>
                                            <p className="text-xs font-bold text-green-500 flex items-center gap-1 justify-end mt-1"><CheckCircle className="w-3 h-3" /> All Validated</p>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-white/5 border border-white/5 rounded-3xl space-y-4">
                                        {[
                                            { vendor: 'Smoky Delta Grill', amt: '₦4,500', status: 'Pending Payout' },
                                            { vendor: 'Mama T Bole Hub', amt: '₦3,950', status: 'Processing' }
                                        ].map((vendor, i) => (
                                            <div key={i} className="flex justify-between items-center group cursor-pointer">
                                                <div>
                                                    <p className="text-xs font-black uppercase tracking-tight text-white group-hover:text-primary transition-colors">{vendor.vendor}</p>
                                                    <p className="text-[8px] font-black text-zinc-500 uppercase tracking-[0.2em] mt-1">{vendor.status}</p>
                                                </div>
                                                <span className="text-sm font-black text-white">{vendor.amt}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white transition-all">View Payout History</button>
                             </div>
                        </section>

                        {/* Recent Missions Summary */}
                        <section className="bg-zinc-50 rounded-[3rem] p-10 border border-zinc-100 space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-zinc-100 flex items-center justify-center">
                                    <Package className="w-5 h-5 text-zinc-900" />
                                </div>
                                <h4 className="text-xl font-black font-headline uppercase tracking-tighter">Recent Missions</h4>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { id: '#ORD-8922', time: '1h ago', status: 'Completed' },
                                    { id: '#ORD-8910', time: 'Own pickup', status: 'Completed' }
                                ].map((m, i) => (
                                    <div key={i} className="flex justify-between items-center p-4 bg-white rounded-2xl border border-zinc-100">
                                        <div className="flex items-center gap-3">
                                            <Clock className="w-4 h-4 text-zinc-300" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{m.time}</span>
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-900">{m.id}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </AgentLayout>
    );
};

export default AgentHub;
