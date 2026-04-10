import React from 'react';
import UserLayout from '../components/UserLayout';
import { Newspaper, Share2, Download, ExternalLink, Zap, Radio } from 'lucide-react';

const Press = () => {
  const releases = [
    { title: 'Series A: Igniting Urban Food Velocity', date: 'Oct 12, 2024', outlet: 'TechCrunch' },
    { title: 'The Future of Street Grill is Digital', date: 'Sep 28, 2024', outlet: 'Delta Daily' },
    { title: 'Bole4us Expands to 15 New Hubs', date: 'Aug 15, 2024', outlet: 'Fintech Times' }
  ];

  return (
    <UserLayout>
      <div className="max-w-5xl mx-auto py-12 px-6 space-y-24">
        <header className="text-center space-y-8">
          <div className="w-20 h-20 bg-zinc-900 text-primary rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl">
            <Radio className="w-10 h-10" />
          </div>
          <h1 className="font-headline font-black text-6xl md:text-8xl text-zinc-900 tracking-tighter uppercase leading-none">
            Media <br /><span className="text-primary italic">Frequency</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-xl mx-auto">Latest signals from the core of the urban heat network.</p>
        </header>

        <section className="space-y-12">
          <div className="flex items-center justify-between px-4">
            <h2 className="font-headline font-black text-4xl text-zinc-900 uppercase tracking-tighter">Latest <span className="text-primary italic">Signals</span></h2>
            <Share2 className="w-6 h-6 text-zinc-300" />
          </div>

          <div className="grid grid-cols-1 gap-8">
            {releases.map((release, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-zinc-50 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all group flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="space-y-3">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] bg-primary/5 px-3 py-1 rounded-full">{release.outlet}</span>
                  <h3 className="font-headline font-black text-2xl text-zinc-900 uppercase tracking-tight group-hover:text-primary transition-colors">{release.title}</h3>
                  <p className="text-zinc-400 font-black text-[10px] uppercase tracking-widest">{release.date}</p>
                </div>
                <button className="flex items-center gap-3 px-8 py-4 bg-zinc-50 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-all shadow-sm">
                  Read Signal <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-zinc-900 p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full group-hover:scale-110 transition-transform"></div>
            <h3 className="font-headline font-black text-3xl uppercase tracking-tighter mb-6">Mission Deck</h3>
            <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-10">Download our primary media assets, including high-frequency logos and brand protocols.</p>
            <button className="flex items-center gap-3 px-10 py-5 bg-primary rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-transform">
              <Download className="w-5 h-5" /> Download Pack
            </button>
          </div>

          <div className="bg-white p-12 rounded-[4rem] border border-zinc-50 shadow-sm flex flex-col justify-center text-center space-y-8">
            <Newspaper className="w-12 h-12 text-primary mx-auto" />
            <h3 className="font-headline font-black text-3xl uppercase tracking-tighter text-zinc-900">Media Contact</h3>
            <p className="text-zinc-500 font-medium max-w-xs mx-auto">For direct press inquiries, reach out to our frequency manager.</p>
            <p className="text-xl font-black text-zinc-900 underline decoration-primary/30">press@bole4us.com</p>
          </div>
        </section>

        <footer className="text-center">
          <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.5em] italic">Operational Media Stream • BOLE4US</p>
        </footer>
      </div>
    </UserLayout>
  );
};

export default Press;
