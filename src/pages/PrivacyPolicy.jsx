import React from 'react';
import UserLayout from '../components/UserLayout';
import { Shield, Lock, Eye, FileText, Zap } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <UserLayout>
      <div className="max-w-4xl mx-auto py-12 px-6 space-y-16">
        <header className="text-center space-y-6">
            <div className="w-16 h-16 bg-zinc-900 text-primary rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                <Shield className="w-8 h-8" />
            </div>
          <h1 className="font-headline font-black text-5xl text-zinc-900 tracking-tighter uppercase leading-none italic">
            Privacy <br /><span className="text-primary not-italic">Protocols</span>
          </h1>
          <p className="text-zinc-400 font-black text-[10px] uppercase tracking-widest">Effective Date: October 2024</p>
        </header>

        <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-50 shadow-sm space-y-12">
            {[
                { title: 'Signal Isolation', icon: Lock, content: 'We prioritize the security of your data signal. All transactions within the Heat Hub are encrypted using military-grade protocols.' },
                { title: 'Data Telemetry', icon: Eye, content: 'We collect limited telemetry (order history, location) only to optimize the "heat" velocity of your deliveries.' },
                { title: 'Exchange Guards', icon: Zap, content: 'Your financial information never touches our primary servers. We use secure third-party vaults for all credit/debit signals.' }
            ].map((node, i) => (
                <div key={i} className="space-y-4">
                    <div className="flex items-center gap-3">
                        <node.icon className="w-5 h-5 text-primary" />
                        <h2 className="font-headline font-black text-xl text-zinc-900 uppercase tracking-tight">{node.title}</h2>
                    </div>
                    <p className="text-zinc-500 font-medium leading-relaxed">{node.content}</p>
                </div>
            ))}
        </section>

        <footer className="text-center p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100">
            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Secure Documentation • BOLE4US OPS</p>
        </footer>
      </div>
    </UserLayout>
  );
};

export default PrivacyPolicy;
