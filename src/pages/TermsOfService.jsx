import { CheckCircle, Scale, ShieldAlert, Zap } from 'lucide-react';
import Footer from '../components/landing/Footer';
import Navbar from '../components/Navbar';

const TermsOfService = () => {
  return (
    <div className="terms-page bg-[#FFFDF8]">
      <Navbar />

      <div className="max-w-4xl mx-auto pt-28 pb-20 px-6 space-y-16">
        <header className="text-center space-y-6">
          <div className="w-16 h-16 bg-zinc-950 text-[#F5A800] rounded-2xl flex items-center justify-center mx-auto shadow-[0_18px_45px_-28px_rgba(0,0,0,0.75)]">
            <Scale className="w-8 h-8" />
          </div>
          <h1 className="font-serif italic font-black text-5xl text-zinc-950 tracking-[-0.04em] leading-none">
            Terms of <br /><span className="not-italic text-[#F5A800]">Service</span>
          </h1>
          <p className="text-zinc-400 font-black text-[10px] uppercase tracking-widest">Last updated: October 2024</p>
        </header>

        <section className="bg-white rounded-[2rem] p-10 md:p-16 border border-zinc-100 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_28px_54px_-32px_rgba(0,0,0,0.2)] space-y-16">
          {[
            { title: 'The Agreement', icon: Zap, content: 'By using Bole4us, you agree to follow our community guidelines and treat our vendors and agents with professional courtesy.' },
            { title: 'Delivery Accuracy', icon: CheckCircle, content: 'You are responsible for providing accurate delivery details. Failed deliveries due to incorrect information are the responsibility of the customer.' },
            { title: 'Restricted Conduct', icon: ShieldAlert, content: 'Any attempt to bypass our security protocols or harass vendors and agents will result in immediate termination of access.' },
          ].map((term) => (
            <div key={term.title} className="space-y-4">
              <div className="flex items-center gap-3">
                <term.icon className="w-5 h-5 text-[#F5A800]" />
                <h2 className="font-black text-xl text-zinc-950 tracking-[-0.02em]">{term.title}</h2>
              </div>
              <p className="text-zinc-500 font-medium leading-relaxed">{term.content}</p>
            </div>
          ))}
        </section>

        <footer className="text-center p-8 bg-zinc-50 rounded-[1.5rem] border border-zinc-100">
          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Bole4us Legal Documentation</p>
        </footer>
      </div>

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

        .terms-page {
          font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .terms-page .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
};

export default TermsOfService;
