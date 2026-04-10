import React, { useState } from 'react';
import UserLayout from '../components/UserLayout';
import { User, Bell, Shield, CreditCard, MapPin, Smartphone, Truck, Flame, Save, ArrowLeft } from 'lucide-react';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile');
    
    // Simulate role of the current user
    const role = 'vendor'; // 'student', 'vendor', 'agent'

    return (
        <UserLayout>
            <div className="max-w-6xl mx-auto space-y-12 pb-32">
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                    <div>
                        <h2 className="font-headline text-5xl font-black tracking-tighter text-zinc-900 mb-2 uppercase italic">Control Room</h2>
                        <p className="font-body text-zinc-500 font-medium tracking-tight">System configuration for <span className="text-zinc-900 font-bold uppercase tracking-widest">{role} profile</span></p>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Navigation Sidebar */}
                    <nav className="lg:col-span-3 space-y-3">
                        {[
                            { id: 'profile', label: 'Identity', icon: User },
                            { id: 'security', label: 'Security', icon: Shield },
                            { id: 'notifications', label: 'Alerts', icon: Bell },
                            { id: 'payment', label: role === 'vendor' ? 'Bank Details' : 'Payment Methods', icon: CreditCard },
                            { id: 'logistics', label: 'Logistics', icon: Truck, role: ['vendor', 'agent'] },
                        ].filter(tab => !tab.role || tab.role.includes(role)).map((tab) => (
                            <button 
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all text-[10px] font-black uppercase tracking-[0.2em] group shadow-sm ${activeTab === tab.id ? 'bg-zinc-900 text-white shadow-xl shadow-zinc-200' : 'bg-white border border-zinc-50 text-zinc-400 hover:text-zinc-900 hover:border-zinc-100'}`}
                            >
                                <tab.icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${activeTab === tab.id ? 'text-primary' : 'text-zinc-300'}`} />
                                {tab.label}
                            </button>
                        ))}
                    </nav>

                    {/* Main Content Form */}
                    <div className="lg:col-span-9 bg-white p-12 rounded-[3.5rem] border border-zinc-100 shadow-sm space-y-12">
                        {activeTab === 'profile' && (
                            <section className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
                                <div className="flex items-center gap-6">
                                    <div className="w-24 h-24 rounded-[2rem] bg-zinc-50 border-4 border-white shadow-xl overflow-hidden relative group cursor-pointer">
                                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnrreR1rY3z2MvY1T8G7fX9v6w7n8m9p0q1r2s3t4u5v6w7x8y9z0" alt="Avatar" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-zinc-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="material-symbols-outlined text-white text-2xl">photo_camera</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black font-headline uppercase tracking-tight text-zinc-900">Personal Signal</h3>
                                        <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mt-1">This is how the community sees you.</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Full Name</label>
                                        <input className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 px-6 text-sm font-bold focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all" defaultValue="Uche Kabari" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Email Protocol</label>
                                        <input className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 px-6 text-sm font-bold focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all" defaultValue="uche@heatboard.io" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Signal Handle (@)</label>
                                        <input className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 px-6 text-sm font-bold focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all" defaultValue="uche_k" />
                                    </div>
                                </div>
                            </section>
                        )}

                        {activeTab === 'payment' && role === 'vendor' && (
                            <section className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
                                <div className="text-left">
                                    <h3 className="text-2xl font-black font-headline uppercase tracking-tight text-zinc-900">Payment Settings</h3>
                                    <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mt-1">Configure where users send direct transfers.</p>
                                </div>

                                <div className="bg-zinc-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl mb-8">
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-bl-full blur-3xl"></div>
                                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                                                <CreditCard className="w-8 h-8 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest italic">Current Master Card</p>
                                                <p className="text-lg font-black tracking-widest text-white mt-1 uppercase">0123 **** **** 6789</p>
                                            </div>
                                        </div>
                                        <button className="px-8 py-3 bg-white text-zinc-900 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all">Update Card</button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Bank Name</label>
                                        <input className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 px-6 text-sm font-bold focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all" placeholder="e.g. Zenith Bank" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Account Number</label>
                                        <input className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 px-6 text-sm font-bold focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all" placeholder="10 Digits" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Account Name</label>
                                        <input className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 px-6 text-sm font-bold focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all" placeholder="e.g. Smoky Grill Ent." />
                                    </div>
                                </div>
                            </section>
                        )}

                        <div className="pt-10 border-t border-zinc-50 flex justify-end gap-4">
                             <button className="px-8 py-4 text-[10px] font-black text-zinc-400 uppercase tracking-widest hover:text-zinc-900 transition-all">Discard</button>
                             <button className="px-12 py-4 bg-zinc-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-zinc-200 hover:bg-primary transition-all flex items-center gap-3">
                                <Save className="w-4 h-4" />
                                Save Protocols
                             </button>
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default Settings;
