import React from 'react';
import VendorLayout from '../components/VendorLayout';
import { DollarSign, User, Calendar, CheckCircle, ArrowUpRight, Upload, Search, Filter, History, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const AgentPayouts = () => {
    return (
        <VendorLayout>
            <div className="space-y-12">
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                    <div>
                        <h2 className="font-headline text-5xl font-black tracking-tighter text-zinc-900 mb-2 uppercase">Agent Payouts</h2>
                        <p className="font-body text-zinc-500 font-medium">Manage and acknowledge payments to your <span className="text-zinc-900 font-bold">Heat Logistics Partners</span></p>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left: Outstanding Debts (8 cols) */}
                    <div className="lg:col-span-8 space-y-8">
                        <section className="bg-white p-10 rounded-[3rem] border border-zinc-100 shadow-sm">
                            <div className="flex items-center justify-between mb-10">
                                <h3 className="text-2xl font-black font-headline uppercase tracking-tight text-zinc-900">Pending Payouts</h3>
                                <div className="flex gap-4">
                                     <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-100 flex items-center gap-3">
                                        <Search className="w-4 h-4 text-zinc-400" />
                                        <input className="bg-transparent border-none outline-none text-[10px] font-black uppercase tracking-widest placeholder:text-zinc-300 w-40" placeholder="Search Agents..." />
                                     </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { agent: 'Agent Tunde', id: '#AGT-440', orders: 3, total: '₦4,200', last: 'Now' },
                                    { agent: 'Agent Sarah', id: '#AGT-122', orders: 1, total: '₦1,200', last: '2h ago' }
                                ].map((p, i) => (
                                    <div key={i} className="bg-zinc-50/50 p-6 rounded-3xl border border-zinc-50 hover:border-primary/20 transition-all group">
                                         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                            <div className="flex items-center gap-6">
                                                <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center text-white border-4 border-white shadow-xl">
                                                    <User className="w-8 h-8 text-primary" />
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-black font-headline uppercase tracking-tight text-zinc-900">{p.agent}</h4>
                                                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mt-1">{p.id} • {p.orders} Orders</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-3xl font-headline font-black text-zinc-900 mb-1">{p.total}</p>
                                                <button className="px-8 py-3 bg-zinc-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-zinc-200 hover:bg-primary transition-all active:scale-95 flex items-center gap-3">
                                                    Initiate Payment <ArrowUpRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                         </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-white p-10 rounded-[3rem] border border-zinc-100 shadow-sm">
                             <div className="flex items-center gap-4 mb-10">
                                <History className="w-6 h-6 text-zinc-900" />
                                <h3 className="text-2xl font-black font-headline uppercase tracking-tight text-zinc-900">Payout History</h3>
                             </div>
                             <div className="space-y-4">
                                {[
                                    { agent: 'Agent Kofi', date: 'Oct 22, 2024', amt: '₦12,500', status: 'Verified' },
                                    { agent: 'Agent Jide', date: 'Oct 21, 2024', amt: '₦8,200', status: 'Verified' }
                                ].map((h, i) => (
                                    <div key={i} className="flex justify-between items-center p-5 border-b border-zinc-50 last:border-0">
                                        <div className="flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                            <div>
                                                <p className="text-xs font-black uppercase tracking-tight text-zinc-900">{h.agent}</p>
                                                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mt-0.5">{h.date}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-black text-zinc-900">{h.amt}</p>
                                            <p className="text-[9px] font-black text-green-500 uppercase tracking-widest">{h.status}</p>
                                        </div>
                                    </div>
                                ))}
                             </div>
                        </section>
                    </div>

                    {/* Right: Payment Instructions (4 cols) */}
                    <aside className="lg:col-span-4 space-y-8">
                        <section className="bg-zinc-900 p-8 rounded-[3rem] text-white shadow-2xl space-y-8 relative overflow-hidden group">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full"></div>
                             <div className="relative z-10 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                                        <DollarSign className="w-5 h-5 text-primary" />
                                    </div>
                                    <h4 className="text-lg font-black font-headline uppercase tracking-tighter">Total Debt</h4>
                                </div>
                                <div>
                                    <p className="text-5xl font-headline font-black text-white tracking-tighter">₦12,400</p>
                                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mt-2">Across 04 active Agents</p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/5 rounded-3xl">
                                     <div className="flex gap-4 items-start">
                                        <Info className="w-5 h-5 text-primary shrink-0" />
                                        <p className="text-xs text-zinc-400 leading-relaxed font-medium">Please pay your agents directly. After transfer, upload the screenshot for agent validation.</p>
                                     </div>
                                </div>
                             </div>
                        </section>

                        <div className="p-10 border-2 border-dashed border-zinc-100 rounded-[3.5rem] text-center space-y-6">
                            <Upload className="w-10 h-10 text-primary mx-auto" />
                            <div>
                                <h5 className="text-sm font-black uppercase tracking-tight text-zinc-900">Finalize Payout</h5>
                                <p className="text-xs text-zinc-400 font-medium mt-1 leading-relaxed">Select an agent above to begin the acknowledgement process.</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </VendorLayout>
    );
};

export default AgentPayouts;
