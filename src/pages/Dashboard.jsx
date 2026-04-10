import React from 'react';
import UserLayout from '../components/UserLayout';
import { Flame, Star, Package, TrendingUp, Clock, MapPin, ChevronRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <UserLayout>
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Welcome Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="font-headline font-black text-5xl text-zinc-900 tracking-tighter uppercase mb-2">My Heat Summary</h1>
            <p className="text-zinc-500 font-medium">Welcome back, <span className="text-zinc-900 font-bold">Uche K.</span> — You've ordered 12 times this month!</p>
          </div>
          <div className="flex bg-white p-2 rounded-2xl shadow-sm border border-zinc-100 gap-2">
            <Link to="/wallet" className="px-4 py-2 bg-primary/5 rounded-xl border border-primary/10 flex flex-col justify-center hover:bg-primary/10 transition-all cursor-pointer">
                <span className="text-[10px] font-black text-primary uppercase tracking-widest block">Heat Credits</span>
                <span className="text-xl font-headline font-black text-zinc-900 leading-none">₦4,500</span>
            </Link>
            <div className="px-4 py-2 bg-secondary/10 rounded-xl border border-secondary/10 flex flex-col justify-center">
                <span className="text-[10px] font-black text-secondary uppercase tracking-widest block">Loyalty Points</span>
                <span className="text-xl font-headline font-black text-zinc-900 leading-none">820 XP</span>
            </div>
            <div className="px-4 py-2 bg-zinc-900 rounded-xl border border-zinc-800 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                    <Flame className="w-5 h-5 text-white" fill="currentColor" />
                </div>
                <div>
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest block">Streak</span>
                    <span className="text-xl font-headline font-black text-white leading-none">12</span>
                </div>
            </div>
          </div>
        </header>

        {/* Level Up Stats */}
        <section className="bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-bl-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-shrink-0 relative">
                    <div className="w-32 h-32 rounded-full border-4 border-primary/30 flex items-center justify-center p-2">
                        <div className="w-full h-full rounded-full border-4 border-primary flex items-center justify-center bg-zinc-800">
                             <Flame className="w-12 h-12 text-primary" fill="currentColor" />
                        </div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                        Lv. 24
                    </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-3xl font-headline font-black uppercase tracking-tighter mb-4">You're a Heat Seeker!</h2>
                    <p className="text-zinc-400 mb-8 max-w-lg">Order 3 more times this week to unlock the <span className="text-primary font-bold">"Spice Lord"</span> badge and get free delivery for 48 hours.</p>
                    <div className="w-full bg-zinc-800 h-2.5 rounded-full overflow-hidden mb-2">
                        <div className="bg-primary h-full w-[72%] rounded-full shadow-[0_0_12px_rgba(255,51,51,0.5)]"></div>
                    </div>
                    <div className="flex justify-between text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                        <span>Current XP: 1,440</span>
                        <span>Goal: 2,000 XP</span>
                    </div>
                </div>
                <button className="bg-white text-zinc-900 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-3">
                    View Rewards <Award className="w-5 h-5" />
                </button>
            </div>
        </section>

        {/* Grid Content: Recent Activity & Hot Reqs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Recent Activity */}
            <div className="lg:col-span-7 space-y-6">
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-zinc-900">Recent Activity</h3>
                    <Link to="/orders" className="text-primary font-bold text-xs uppercase tracking-widest hover:underline">See history</Link>
                </div>
                
                <div className="space-y-4">
                    {[
                        { title: 'Order #ORD-4492', desc: 'Arriving in 12 mins', status: 'Live', icon: Clock, color: 'text-primary' },
                        { title: 'Mama Put Grill', desc: 'Rated 5.0 stars', status: 'Completed', icon: Star, color: 'text-green-500' },
                        { title: 'Credits Topped Up', desc: 'Added ₦5,000 to wallet', status: 'Wallet', icon: TrendingUp, color: 'text-blue-500' }
                    ].map((activity, i) => (
                        <div key={i} className="bg-white p-6 rounded-3xl border border-zinc-100 flex items-center justify-between group hover:border-primary/20 transition-all cursor-pointer">
                            <div className="flex items-center gap-5">
                                <div className={`w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center ${activity.color}`}>
                                    <activity.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-zinc-900">{activity.title}</h4>
                                    <p className="text-sm text-zinc-500 leading-none mt-1">{activity.desc}</p>
                                </div>
                            </div>
                            <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-100 text-zinc-400 group-hover:bg-primary group-hover:text-white transition-colors`}>
                                {activity.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: Hot Recommendations */}
            <div className="lg:col-span-5 space-y-6">
                 <h3 className="text-2xl font-bold text-zinc-900">Hot For You</h3>
                 <div className="bg-zinc-50 rounded-[2.5rem] p-8 border border-zinc-100 space-y-8">
                    {[
                        { name: 'Spicy Catfish Grill', distance: '1.2km', price: '₦4,500' },
                        { name: 'Smokey Plantain Bowl', distance: '0.8km', price: '₦2,400' }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col gap-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-bold text-lg text-zinc-900 leading-tight">{item.name}</h4>
                                    <p className="text-xs text-zinc-500 font-medium flex items-center gap-1 mt-1"><MapPin className="w-3 h-3" /> {item.distance}</p>
                                </div>
                                <span className="font-headline font-black text-lg text-primary">{item.price}</span>
                            </div>
                            <button className="w-full py-3 bg-white text-zinc-900 border border-zinc-200 rounded-xl font-bold text-sm hover:bg-zinc-900 hover:text-white transition-all">
                                Add to Heat List
                            </button>
                        </div>
                    ))}
                    <Link to="/explore" className="block text-center pt-4 text-zinc-500 font-bold hover:text-zinc-900 transition-colors">
                        Explore more vendors <ChevronRight className="w-4 h-4 inline-block ml-1" />
                    </Link>
                 </div>
            </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Dashboard;
