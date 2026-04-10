import React from 'react';
import UserLayout from '../components/UserLayout';
import { Clock, MapPin, Package, Truck, CheckCircle, FileText, Smartphone, Flame, ArrowLeft, ShieldCheck, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const OrderDetail = () => {
    const { id } = useParams();
    
    // Mock data for the sequence
    const orderStatus = 'payment_pending'; // 'payment_pending', 'preparing', 'waiting_agent', 'delivering', 'completed'

    return (
        <UserLayout>
            <div className="max-w-5xl mx-auto space-y-12 pb-32">
                {/* Header with Back Button */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-zinc-900 font-headline">
                    <div>
                        <Link to="/orders" className="flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors text-[10px] font-black uppercase tracking-widest mb-4">
                            <ArrowLeft className="w-4 h-4" /> Back to History
                        </Link>
                        <h1 className="text-5xl font-black tracking-tighter uppercase leading-none">Status: <span className="text-primary italic">In Progress</span></h1>
                        <p className="text-zinc-500 font-medium font-body mt-2">Heat Session <span className="text-zinc-900 font-bold">#{id || 'ORD-9012'}</span> — Locked & Transmitting</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="p-4 bg-white border border-zinc-100 rounded-2xl shadow-sm text-zinc-400 hover:text-zinc-900 transition-all active:scale-95">
                            <Share2 className="w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 bg-zinc-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-zinc-200 hover:bg-primary transition-all">
                            Support Protocol
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left: Progress Timeline */}
                    <div className="lg:col-span-8 space-y-10">
                        {/* Interactive Status Tracker */}
                        <section className="bg-white p-10 rounded-[3rem] border border-zinc-50 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8">
                                <ShieldCheck className="w-12 h-12 text-primary opacity-10" />
                            </div>
                            <h3 className="text-2xl font-black font-headline uppercase tracking-tight text-zinc-900 mb-12">Heat Timeline</h3>
                            
                            <div className="space-y-12 relative">
                                {/* Vertical Line Connection */}
                                <div className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-zinc-100"></div>

                                {[
                                    { label: 'Payment Verification', time: '14:20', status: 'pending', desc: 'Awaiting Vendor to ACK your proof of payment.', icon: Smartphone },
                                    { label: 'Grill Session', time: '--:--', status: 'locked', desc: 'Vendor is slow-grilling your feast.', icon: Flame },
                                    { label: 'Agent Pick-up', time: '--:--', status: 'locked', desc: 'Awaiting available delivery agent.', icon: Package },
                                    { label: 'Out for Delivery', time: '--:--', status: 'locked', desc: 'Heat is moving toward your coordinates.', icon: Truck },
                                    { label: 'Mission Accomplished', time: '--:--', status: 'locked', desc: 'Confirmed receipt of urban heat.', icon: CheckCircle }
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 border-4 border-white shadow-xl ${step.status === 'pending' ? 'bg-primary text-white scale-110' : step.status === 'completed' ? 'bg-green-500 text-white' : 'bg-zinc-100 text-zinc-300'}`}>
                                            <step.icon className="w-6 h-6" fill={step.status === 'completed' ? 'currentColor' : 'none'} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <h4 className={`text-sm font-black uppercase tracking-widest ${step.status === 'locked' ? 'text-zinc-300' : 'text-zinc-900'}`}>{step.label}</h4>
                                                <span className="text-[10px] font-black text-zinc-300 group-hover:text-zinc-900 transition-colors uppercase tracking-widest">{step.time}</span>
                                            </div>
                                            <p className={`text-xs font-medium mt-1 leading-relaxed ${step.status === 'locked' ? 'text-zinc-300' : 'text-zinc-500'}`}>{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Order Content Summary */}
                        <section className="bg-zinc-50/50 p-10 rounded-[3rem] border border-zinc-100 space-y-8">
                             <h3 className="text-2xl font-black font-headline uppercase tracking-tight text-zinc-900">Session Breakdown</h3>
                             <div className="space-y-6">
                                {[
                                    { name: 'Signature Heat Platter', qty: 2, price: '₦7,000' },
                                    { name: 'Extra Spicy Pepper Base', qty: 1, price: '₦500' },
                                    { name: 'Agent Delivery Fee', qty: 1, price: '₦1,200' }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center group">
                                        <div className="flex items-center gap-4">
                                            <span className="w-8 h-8 flex items-center justify-center bg-white border border-zinc-100 rounded-xl text-xs font-black text-zinc-900 shadow-sm">{item.qty}</span>
                                            <span className="text-xs font-black uppercase tracking-tight text-zinc-600">{item.name}</span>
                                        </div>
                                        <span className="text-sm font-black text-zinc-900">{item.price}</span>
                                    </div>
                                ))}
                             </div>
                             <div className="pt-8 border-t border-zinc-100 flex justify-between items-end">
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Total Value</p>
                                    <p className="text-4xl font-headline font-black text-primary tracking-tighter mt-1">₦8,700</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Paid to Vendor via</p>
                                    <p className="text-sm font-bold text-zinc-900 mt-1 uppercase tracking-tight">Direct Transfer</p>
                                </div>
                             </div>
                        </section>
                    </div>

                    {/* Right: Metadata & Receipt */}
                    <aside className="lg:col-span-4 space-y-10">
                        {/* Proof of Payment View */}
                        <section className="bg-white p-8 rounded-[3rem] border border-zinc-100 shadow-sm space-y-6">
                             <div className="flex items-center justify-between">
                                <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900">Your Receipt</h4>
                                <Link to="#" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">View Full</Link>
                             </div>
                             <div className="aspect-[3/4] rounded-[2rem] bg-zinc-100 overflow-hidden relative group cursor-pointer border-2 border-primary/20">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ6m3Y6X5P8Z_X_WwU4_Dk5k-m3w0K1Fz3-8G6k7m4l-fVpB7s6H5r4w3v-2u1y9" alt="Receipt Screenshot" className="w-full h-full object-cover blur-sm group-hover:blur-none transition-all duration-700" />
                                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/40 opacity-100 group-hover:opacity-0 transition-opacity">
                                    <span className="material-symbols-outlined text-white text-4xl">visibility</span>
                                </div>
                             </div>
                             <p className="text-[10px] text-center text-zinc-400 font-bold uppercase tracking-widest">SUBMITTED ON OCT 24, 14:22</p>
                        </section>

                        {/* Logistics Sidebar Info */}
                        <section className="bg-zinc-900 p-8 rounded-[3rem] text-white shadow-2xl space-y-8 relative overflow-hidden group">
                           <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full"></div>
                           <div className="space-y-6 relative z-10">
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Grill Location</p>
                                    <p className="text-sm font-bold flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Smoky Delta Grill, VI</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Assigned Agent</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                            <Package className="w-5 h-5 text-zinc-500" />
                                        </div>
                                        <p className="text-sm font-bold text-zinc-400 italic">Searching for Signal...</p>
                                    </div>
                                </div>
                           </div>
                           <div className="pt-6 border-t border-white/5">
                                <button className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                                    Signal History
                                </button>
                           </div>
                        </section>

                        <div className="p-10 border-2 border-dashed border-zinc-100 rounded-[3rem] text-center">
                            <Clock className="w-8 h-8 text-zinc-100 mx-auto mb-4" />
                            <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.2em]">Estimated Buffer: 25-35m</p>
                        </div>
                    </aside>
                </div>

                <footer className="text-center pt-10">
                    <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.4em]">© 2024 BOLE4US • MISSION CRITICAL</p>
                </footer>
            </div>
        </UserLayout>
    );
};

export default OrderDetail;
