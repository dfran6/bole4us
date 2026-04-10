import React from 'react';
import UserLayout from '../components/UserLayout';
import { Briefcase, Rocket, Sparkles, MapPin, ArrowRight, Zap, Globe, Users } from 'lucide-react';

const Careers = () => {
  const perks = [
    { title: 'Innovation at Core', desc: 'We use AI to optimize "heat" delivery routes and predict student cravings.', icon: Zap },
    { title: 'Street Culture', desc: 'We value authentic street grill culture and work to preserve its soul digitally.', icon: Globe },
    { title: 'Rapid Growth', desc: 'Join a fast-scaling startup where your impact is visible from day one.', icon: Rocket },
    { title: 'Elite Community', desc: 'Work with the best minds in logistics, engineering, and culinary arts.', icon: Users },
  ];

  const roles = [
    { title: 'Senior Backend Engineer', area: 'Delta / Hybrid', type: 'Full-time', dept: 'Engineering' },
    { title: 'Logistics Operations Lead', area: 'Port Harcourt', type: 'Full-time', dept: 'Operations' },
    { title: 'Growth Marketing Manager', area: 'Remote', type: 'Contract', dept: 'Growth' },
    { title: 'Community Manager', area: 'Bayelsa', type: 'Part-time', dept: 'Community' }
  ];

  return (
    <UserLayout>
      <div className="max-w-5xl mx-auto space-y-24 py-12">
        {/* Hero Section */}
        <header className="text-center space-y-6">
          <div className="w-20 h-20 bg-zinc-900 text-primary rounded-[2rem] flex items-center justify-center mb-10 mx-auto shadow-2xl shadow-zinc-200">
            <Briefcase className="w-10 h-10" />
          </div>
          <h1 className="font-headline font-black text-6xl md:text-8xl text-zinc-900 tracking-tighter uppercase leading-none">
            Ignite Your <br />
            <span className="text-primary italic">Career</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            We're building the future of urban food velocity. Join the squad redefining the street grill experience.
          </p>
        </header>

        {/* Perks Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, i) => (
            <div key={i} className="bg-white p-8 rounded-[3rem] border border-zinc-50 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all group">
              <div className="w-12 h-12 bg-zinc-50 text-zinc-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <perk.icon className="w-6 h-6" />
              </div>
              <h3 className="font-headline font-black text-xl text-zinc-900 uppercase tracking-tight mb-3">{perk.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium">{perk.desc}</p>
            </div>
          ))}
        </section>

        {/* Open Roles */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
            <div>
              <h2 className="font-headline font-black text-4xl text-zinc-900 uppercase tracking-tighter">Open <span className="text-primary italic">Signals</span></h2>
              <p className="text-zinc-400 text-sm font-black uppercase tracking-widest mt-2">Find your place in the heat</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-zinc-50 text-zinc-400 rounded-xl text-[10px] font-black uppercase tracking-widest hover:text-zinc-900 transition-colors border border-zinc-100">All Depts</button>
              <button className="px-6 py-2 bg-zinc-50 text-zinc-400 rounded-xl text-[10px] font-black uppercase tracking-widest hover:text-zinc-900 transition-colors border border-zinc-100">Remote Only</button>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] border border-zinc-50 shadow-sm overflow-hidden">
            <div className="divide-y divide-zinc-50">
              {roles.map((role) => (
                <div key={role.title} className="p-10 flex flex-col md:flex-row md:items-center justify-between hover:bg-zinc-50/50 transition-all group cursor-pointer relative overflow-hidden">
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-black text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-widest">{role.dept}</span>
                      <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest bg-zinc-100 px-3 py-1 rounded-full">{role.type}</span>
                    </div>
                    <h4 className="font-headline font-black text-2xl text-zinc-900 group-hover:text-primary transition-colors uppercase tracking-tight">{role.title}</h4>
                    <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest">
                      <MapPin className="w-4 h-4" />
                      {role.area}
                    </div>
                  </div>
                  <button className="mt-8 md:mt-0 px-10 py-4 bg-zinc-900 text-white rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-zinc-200 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all flex items-center gap-3">
                    Initiate Application
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <footer className="bg-primary p-12 md:p-20 rounded-[4rem] text-center text-white shadow-2xl shadow-primary/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-bl-full translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000"></div>
          <Sparkles className="w-12 h-12 mx-auto mb-8 opacity-80" />
          <h2 className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter mb-6">No specific signal?</h2>
          <p className="text-white/80 font-medium mb-12 max-w-xl mx-auto text-lg leading-relaxed">
            If you think you can thrive in the heat, send your mission packet to
            <span className="text-white font-black ml-2 underline decoration-white/20 hover:decoration-white transition-all cursor-pointer">careers@bole4us.com</span>
          </p>
          <button className="bg-white text-primary px-12 py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.3em] hover:scale-105 transition-transform shadow-2xl shadow-black/10">
            Join the Talent Pool
          </button>
        </footer>
      </div>
    </UserLayout>
  );
};

export default Careers;
