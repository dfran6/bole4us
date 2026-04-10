import React from 'react';
import UserLayout from '../components/UserLayout';
import { HelpCircle, Phone, Mail, MessageSquare, Zap, Globe, LifeBuoy } from 'lucide-react';

const Support = () => {
  return (
    <UserLayout>
      <div className="max-w-5xl mx-auto py-12 px-6 space-y-20">
        <header className="text-center space-y-8">
            <div className="w-20 h-20 bg-zinc-900 text-primary rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl">
                <LifeBuoy className="w-10 h-10" />
            </div>
          <h1 className="font-headline font-black text-6xl md:text-8xl text-zinc-900 tracking-tighter uppercase leading-none">
            Support <br /><span className="text-primary italic">Command</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-xl mx-auto">Systems operational. Our agents are monitoring the heat grid for your signals.</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: 'Audio Relay', value: '+234 800-HEAT-OPS', icon: Phone, desc: 'Direct line for field issues.' },
                { title: 'Signal Mail', value: 'help@bole4us.com', icon: Mail, desc: 'For identity or credit queries.' },
                { title: 'Live Pulse', value: 'Active Now', icon: MessageSquare, desc: 'Real-time grid support.', cta: 'Burst Chat' }
            ].map((channel, i) => (
                <div key={i} className={`p-10 rounded-[3rem] border border-zinc-50 shadow-sm hover:shadow-2xl transition-all group ${i === 2 ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'}`}>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 ${i === 2 ? 'bg-primary text-white' : 'bg-zinc-50 text-primary group-hover:bg-primary group-hover:text-white transition-colors'}`}>
                        <channel.icon className="w-6 h-6" />
                    </div>
                    <h3 className={`font-headline font-black text-2xl uppercase tracking-tight mb-2 ${i === 2 ? 'text-white' : 'text-zinc-900'}`}>{channel.title}</h3>
                    <p className={`text-[10px] font-black uppercase tracking-widest mb-6 ${i === 2 ? 'text-zinc-500' : 'text-zinc-400'}`}>{channel.desc}</p>
                    <p className={`text-lg font-black truncate ${i === 2 ? 'text-primary' : 'text-zinc-900'}`}>{channel.value}</p>
                    {channel.cta && (
                        <button className="mt-8 w-full py-4 bg-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-transform">{channel.cta}</button>
                    )}
                </div>
            ))}
        </section>

        <section className="space-y-12">
          <div className="flex items-center gap-4 px-4">
              <div className="p-3 bg-zinc-50 rounded-2xl">
                <Globe className="w-6 h-6 text-zinc-400" />
              </div>
              <h2 className="font-headline font-black text-4xl text-zinc-900 uppercase tracking-tighter">Knowledge <span className="text-primary italic">Nodes</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['Refund Protocols', 'Deployment Range', 'Vendor Security', 'Voucher Combustion'].map((topic) => (
              <div key={topic} className="flex items-center justify-between p-8 bg-white border border-zinc-50 rounded-[2.5rem] hover:border-primary/20 transition-all cursor-pointer group shadow-sm">
                <span className="font-headline font-black text-lg text-zinc-900 uppercase tracking-tight group-hover:text-primary transition-colors">{topic}</span>
                <HelpCircle className="w-6 h-6 text-zinc-200 group-hover:text-primary transition-colors" />
              </div>
            ))}
          </div>
        </section>

        <div className="bg-primary/5 p-12 rounded-[4rem] text-center border border-primary/10 relative overflow-hidden group">
            <Zap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-primary/[0.03] pointer-events-none" />
            <h4 className="text-zinc-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4">Final Signal</h4>
            <p className="text-zinc-900 font-headline font-black text-2xl uppercase tracking-tighter">Still in the dark? Ignite a direct ticket.</p>
        </div>
      </div>
    </UserLayout>
  );
};

export default Support;
