import React from 'react';
import AgentLayout from '../components/AgentLayout';
import { Wallet, TrendingUp, History, ArrowUpRight, ArrowDownLeft, Calendar, DollarSign, CheckCircle, Clock, Filter, Search } from 'lucide-react';

const AgentEarnings = () => {
    return (
        <AgentLayout>
            <div className="space-y-12">
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                    <div>
                        <h2 className="font-headline text-5xl font-black tracking-tighter text-zinc-900 mb-2 uppercase italic">Liquid Gains</h2>
                        <p className="font-body text-zinc-500 font-medium">Tracking <span className="text-zinc-900 font-bold">mission revenue</span> and vendor payouts</p>
                    </div>
                </header>

                {/* Bento Gains Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Withdrawable Balance */}
                    <div className="bg-zinc-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-bl-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
                        <div className="relative z-10 space-y-8">
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                                    <Wallet className="w-6 h-6 text-primary" />
                                </div>
                                <span className="text-[10px] font-black text-green-500 uppercase tracking-widest flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4" /> Ready for Payout
                                </span>
                            </div>
                            <div>
                                <h3 className="text-5xl font-black font-headline tracking-tighter text-white">₦12,450</h3>
                                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mt-2">Available Gains</p>
                            </div>
                            <button className="w-full py-4 bg-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[0.98] transition-all">Withdraw to Bank</button>
                        </div>
                    </div>

                    {/* Outstanding from Vendors */}
                    <div className="bg-white p-10 rounded-[3rem] border border-zinc-100 shadow-sm relative overflow-hidden group">
                        <div className="relative z-10 space-y-8">
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center border border-zinc-100 group-hover:bg-primary/5 transition-colors">
                                    <DollarSign className="w-6 h-6 text-zinc-400 group-hover:text-primary transition-colors" />
                                </div>
                                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                                    <Clock className="w-4 h-4" /> Awaiting ACK
                                </span>
                            </div>
                            <div>
                                <h3 className="text-5xl font-black font-headline tracking-tighter text-zinc-900">₦8,200</h3>
                                <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.3em] mt-2">Vendor Debt (04 active)</p>
                            </div>
                            <div className="pt-4 flex gap-2">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-xl bg-zinc-100 border-4 border-white flex items-center justify-center text-[10px] font-black text-zinc-400">V{i}</div>
                                    ))}
                                </div>
                                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest flex items-center ml-4">Follow up</p>
                            </div>
                        </div>
                    </div>

                    {/* Performance Stat */}
                    <div className="bg-primary/5 border-2 border-primary/10 p-10 rounded-[3rem] shadow-sm relative overflow-hidden group">
                        <div className="relative z-10 space-y-8">
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-primary/20 shadow-sm">
                                    <TrendingUp className="w-6 h-6 text-primary" />
                                </div>
                                <span className="text-[10px] font-black text-primary uppercase tracking-widest">+22% This week</span>
                            </div>
                            <div>
                                <h3 className="text-5xl font-black font-headline tracking-tighter text-zinc-900">₦45,800</h3>
                                <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mt-2">Monthly Mission Revenue</p>
                            </div>
                            <div className="w-full bg-primary/10 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-full w-[75%] transition-all duration-[2s]"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gain Traces (History) */}
                <section className="bg-white rounded-[4rem] border border-zinc-100 shadow-xl overflow-hidden">
                    <header className="p-10 border-b border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-zinc-900 text-primary rounded-xl flex items-center justify-center">
                                <History className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl font-black font-headline uppercase tracking-tight text-zinc-900">Gain Traces</h3>
                        </div>
                        <div className="flex gap-4 w-full md:w-auto">
                            <div className="flex-1 md:w-64 bg-zinc-50 p-4 rounded-2xl border border-zinc-100 flex items-center gap-3">
                                <Search className="w-4 h-4 text-zinc-400" />
                                <input className="bg-transparent border-none outline-none text-[10px] font-black uppercase tracking-widest placeholder:text-zinc-300 w-full" placeholder="Search Traces..." />
                            </div>
                            <button className="p-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-400 hover:text-zinc-900 transition-all">
                                <Filter className="w-5 h-5" />
                            </button>
                        </div>
                    </header>

                    <div className="divide-y divide-zinc-50">
                        {[
                            { label: 'Smoky Delta Grill', id: 'MIS-9012', amt: '₦1,200', date: 'Oct 24, 14:22', status: 'ACKNOWLEDGED', type: 'in' },
                            { label: 'Mama T Bole Hub', id: 'MIS-8998', amt: '₦4,500', date: 'Oct 24, 11:30', status: 'PENDING ACK', type: 'pending' },
                            { label: 'Withdrawal to Zenith', id: 'OUT-1022', amt: '₦10,000', date: 'Oct 23, 16:45', status: 'COMPLETED', type: 'out' },
                            { label: 'Urban Heat Grill', id: 'MIS-8822', amt: '₦1,200', date: 'Oct 22, 19:40', status: 'ACKNOWLEDGED', type: 'in' }
                        ].map((trace, i) => (
                            <div key={i} className="p-10 flex flex-col md:flex-row justify-between items-center gap-8 group hover:bg-zinc-50/50 transition-all transition-duration-500">
                                <div className="flex items-center gap-8">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-4 border-white shadow-xl ${trace.type === 'in' ? 'bg-zinc-900 text-primary' : trace.type === 'out' ? 'bg-zinc-100 text-zinc-400' : 'bg-primary/10 text-primary'}`}>
                                        {trace.type === 'out' ? <ArrowDownLeft className="w-6 h-6" /> : <ArrowUpRight className="w-6 h-6" />}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black text-zinc-900 uppercase tracking-tight">{trace.label}</h4>
                                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mt-1">Trace ID: {trace.id} • {trace.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-12">
                                    <div className="text-right">
                                        <p className={`text-2xl font-black font-headline ${trace.type === 'out' ? 'text-zinc-400' : 'text-zinc-900'}`}>{trace.type === 'out' ? '-' : '+'}{trace.amt}</p>
                                        <p className={`text-[9px] font-black uppercase tracking-[0.2em] mt-1 ${trace.type === 'pending' ? 'text-primary animate-pulse' : 'text-green-500'}`}>{trace.status}</p>
                                    </div>
                                    <button className="p-4 rounded-2xl bg-zinc-100 text-zinc-300 group-hover:bg-zinc-900 group-hover:text-white transition-all">
                                        <Calendar className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </AgentLayout>
    );
};

export default AgentEarnings;
