import React from 'react';
import UserLayout from '../components/UserLayout';
import { FileText, CheckCircle, Scale, ShieldAlert, Zap } from 'lucide-react';

const TermsOfService = () => {
  return (
    <UserLayout>
      <div className="max-w-4xl mx-auto py-12 px-6 space-y-16">
        <header className="text-center space-y-6">
            <div className="w-16 h-16 bg-zinc-900 text-primary rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                <Scale className="w-8 h-8" />
            </div>
          <h1 className="font-headline font-black text-5xl text-zinc-900 tracking-tighter uppercase leading-none italic">
            Service <br /><span className="text-primary not-italic">Rules</span>
          </h1>
          <p className="text-zinc-400 font-black text-[10px] uppercase tracking-widest">Active Standards • Revision 2.4</p>
        </header>

        <section className="bg-white rounded-[3rem] p-10 md:p-16 border border-zinc-50 shadow-sm space-y-16">
            {[
                { title: 'The Heat Agreement', icon: Zap, content: 'By entering the Heat Hub, you agree to follow the urban grid guidelines and treat our vendors with professional courtesy.' },
                { title: 'Deployment Integrity', icon: CheckCircle, content: 'You are responsible for providing accurate delivery signals. Failed deployments due to incorrect telemetry are the responsibility of the operator.' },
                { title: 'Restricted Conduct', icon: ShieldAlert, content: 'Any attempt to bypass our security protocols or harass the fleet will result in immediate termination of access.' }
            ].map((term, i) => (
                <div key={i} className="space-y-4">
                    <div className="flex items-center gap-3">
                        <term.icon className="w-5 h-5 text-primary" />
                        <h2 className="font-headline font-black text-xl text-zinc-900 uppercase tracking-tight">{term.title}</h2>
                    </div>
                    <p className="text-zinc-500 font-medium leading-relaxed">{term.content}</p>
                </div>
            ))}
        </section>

        <footer className="text-center p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100">
            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Operational Legal Frame • BOLE4US</p>
        </footer>
      </div>
    </UserLayout>
  );
};

export default TermsOfService;
