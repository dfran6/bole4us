import React from 'react';
import UserLayout from '../components/UserLayout';
import { Wallet as WalletIcon, ArrowUpRight, ArrowDownLeft, Search, Filter, History, Flame, CreditCard, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Wallet = () => {
    return (
        <UserLayout>
            <div className="max-w-6xl mx-auto space-y-12 pb-32">
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                    <div>
                        <h2 className="font-headline text-5xl font-black tracking-tighter text-zinc-900 mb-2 uppercase italic">Liquid Heat</h2>
                        <p className="font-body text-zinc-500 font-medium tracking-tight">Manage your <span className="text-zinc-900 font-bold uppercase tracking-widest">Heat Credits & Payment Traces</span></p>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Balance Card & Quick Actions */}
                    <div className="lg:col-span-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 bg-zinc-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl group">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-bl-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
                                <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                                            <WalletIcon className="w-6 h-6 text-primary" />
                                        </div>
                                        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.4em]">Available Credits</span>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-7xl font-headline font-black tracking-tighter text-white">₦14,200</h3>
                                        <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest flex items-center gap-2">
                                            <Flame className="w-4 h-4 text-primary" fill="currentColor" /> Active Heat Session
                                        </p>
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="px-10 py-5 bg-primary text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[0.98] transition-all">Top Up Credits</button>
                                        <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">Withdraw</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-white p-10 rounded-[3.5rem] border border-zinc-100 shadow-sm flex flex-col justify-between group cursor-not-allowed opacity-80">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div className="w-16 h-16 bg-zinc-50 rounded-3xl flex items-center justify-center border border-zinc-100">
                                            <CreditCard className="w-8 h-8 text-zinc-300" />
                                        </div>
                                        <span className="bg-primary/10 text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Coming Soon</span>
                                    </div>
                                    <h4 className="text-2xl font-black font-headline uppercase tracking-tight text-zinc-400">Virtual Card</h4>
                                    <p className="text-xs text-zinc-400 font-medium leading-relaxed italic">The future of secure urban heat payments is currently in development.</p>
                                </div>
                                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-zinc-300 pt-10 border-t border-zinc-50">
                                    Feature Locked <ChevronRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Transaction History */}
                    <div className="lg:col-span-12">
                        <section className="bg-white rounded-[3.5rem] border border-zinc-100 shadow-sm overflow-hidden">
                            <header className="p-10 border-b border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center">
                                        <History className="w-5 h-5 text-zinc-900" />
                                    </div>
                                    <h3 className="text-2xl font-black font-headline uppercase tracking-tight text-zinc-900">Transaction Traces</h3>
                                </div>
                                <div className="flex gap-4 w-full md:w-auto">
                                    <div className="flex-1 md:w-64 bg-zinc-50 p-4 rounded-2xl border border-zinc-100 flex items-center gap-3">
                                        <Search className="w-4 h-4 text-zinc-400" />
                                        <input className="bg-transparent border-none outline-none text-[10px] font-black uppercase tracking-widest placeholder:text-zinc-300 w-full" placeholder="Search sessions..." />
                                    </div>
                                    <button className="p-4 bg-zinc-50 border border-zinc-100 rounded-2xl text-zinc-400 hover:text-zinc-900 transition-all">
                                        <Filter className="w-5 h-5" />
                                    </button>
                                </div>
                            </header>

                            <div className="divide-y divide-zinc-50">
                                {[
                                    { type: 'out', label: 'Smoky Delta Grill', id: 'ORD-9012', amt: '₦8,200', date: 'OCT 24, 14:22', icon: ArrowUpRight, color: 'text-red-500', bg: 'bg-red-50' },
                                    { type: 'in', label: 'Credit Top-up', id: 'TXN-001', amt: '₦10,000', date: 'OCT 23, 09:15', icon: ArrowDownLeft, color: 'text-green-500', bg: 'bg-green-50' },
                                    { type: 'out', label: 'Mama T Bole Hub', id: 'ORD-8991', amt: '₦4,500', date: 'OCT 22, 19:40', icon: ArrowUpRight, color: 'text-red-500', bg: 'bg-red-50' }
                                ].map((tx, i) => (
                                    <div key={i} className="p-10 flex flex-col md:flex-row justify-between items-center gap-8 group hover:bg-zinc-50/50 transition-all">
                                        <div className="flex items-center gap-8">
                                            <div className={`w-14 h-14 rounded-2xl ${tx.bg} flex items-center justify-center border-4 border-white shadow-xl`}>
                                                <tx.icon className={`w-6 h-6 ${tx.color}`} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-black text-zinc-900 uppercase tracking-tight">{tx.label}</h4>
                                                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mt-1">Trace ID: {tx.id} • {tx.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-12">
                                            <div className="text-right">
                                                <p className={`text-2xl font-black font-headline ${tx.color}`}>{tx.type === 'in' ? '+' : '-'}{tx.amt}</p>
                                                <p className="text-[9px] font-black text-zinc-300 uppercase tracking-[0.2em] mt-1">Status: Confirmed</p>
                                            </div>
                                            <button className="p-4 rounded-2xl bg-zinc-100 text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all">
                                                <ArrowUpRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <footer className="p-10 bg-zinc-50/30 text-center">
                                <button className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] hover:text-primary transition-colors">Load Extended History</button>
                            </footer>
                        </section>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default Wallet;
