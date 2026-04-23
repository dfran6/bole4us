import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AgentRegistration = () => {
  const navigate = useNavigate();

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    navigate('/agent');
  };

  return (
    <div className="bg-white font-body text-zinc-900 min-h-screen selection:bg-primary/20">
      <main className="relative min-h-screen flex flex-col lg:flex-row">
        
        {/* Left Section (Agent Hero) */}
        <section className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden items-center justify-center p-12">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Fast delivery rider on bike" 
              className="w-full h-full object-cover opacity-50 mix-blend-overlay scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnrreR1rY3z2MvY1T8G7fX9v6w7n8m9p0q1r2s3t4u5v6w7x8y9z0"
            />
          </div>
          <div className="relative z-10 max-w-lg">
             <div className="w-20 h-20 bg-zinc-900 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-2xl">
                 <span className="material-symbols-outlined text-primary text-4xl">delivery_dining</span>
             </div>
            <h1 className="font-headline font-black text-6xl text-white leading-[0.9] tracking-tighter mb-6 uppercase italic">
              Deploy Your <br /><span className="text-zinc-900 NOT-italic">Velocity.</span>
            </h1>
            <p className="text-white/80 text-lg font-medium leading-relaxed mb-10 max-w-sm">
              Become a critical node in the urban heat network. Earn on every mission, with total flexibility.
            </p>
            <div className="flex gap-12">
                <div>
                    <p className="text-4xl font-headline font-black text-white leading-none">100%</p>
                    <p className="text-[10px] font-black text-white/60 uppercase tracking-widest mt-2">Payout Autonomy</p>
                </div>
                <div className="border-l border-white/20 pl-12">
                    <p className="text-4xl font-headline font-black text-white leading-none">FREE</p>
                    <p className="text-[10px] font-black text-white/60 uppercase tracking-widest mt-2">Onboarding Session</p>
                </div>
            </div>
          </div>
        </section>

        {/* Right Section (Auth Forms) */}
        <section className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12 bg-white">
          <div className="w-full max-w-[540px]">
            <header className="mb-10">
              <Link to="/" className="inline-block mb-8">
                <img alt="bole4us logo" className="h-12 object-contain" src="/logo.png" />
              </Link>
              <h2 className="font-headline font-black text-4xl text-zinc-900 tracking-tighter uppercase">
                Agent Enlistment
              </h2>
              <p className="text-zinc-500 mt-2 font-medium">
                Complete your logistics profile to join the active signals pool.
              </p>
            </header>

            <form className="space-y-8 bg-zinc-50 p-10 rounded-[3.5rem] border border-zinc-100 shadow-sm" onSubmit={handleAuthSubmit}>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Legal Full Name</label>
                        <input className="w-full px-6 py-4 bg-white rounded-2xl border border-zinc-100 focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all text-sm font-bold uppercase tracking-tight" placeholder="Chuks Emeka" required />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Primary Quadrant</label>
                            <input className="w-full px-6 py-4 bg-white rounded-2xl border border-zinc-100 focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all text-sm font-bold uppercase tracking-tight" placeholder="e.g. VI / Lekki" required />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Vehicle Class</label>
                            <select className="w-full px-6 py-4 bg-white rounded-2xl border border-zinc-100 focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all text-sm font-bold uppercase tracking-tight appearance-none">
                                <option>Motorbike</option>
                                <option>Bicycle</option>
                                <option>Electric Scooter</option>
                                <option>Foot Patrol</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">ID Verification Upload</label>
                    <div className="border-2 border-dashed border-zinc-200 rounded-[2rem] p-8 text-center hover:border-primary transition-colors cursor-pointer group bg-white">
                        <span className="material-symbols-outlined text-4xl text-zinc-200 group-hover:text-primary transition-colors mb-2">fingerprint</span>
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Upload Driver's License or NIN</p>
                    </div>
                </div>

                <div className="space-y-6 pt-6 border-t border-zinc-200">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Signal Channel (Email)</label>
                        <input className="w-full px-6 py-4 bg-white rounded-2xl border border-zinc-100 focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all text-sm font-bold" placeholder="agent@heat.com" type="email" required />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Encryption Key (Password)</label>
                        <input className="w-full px-6 py-4 bg-white rounded-2xl border border-zinc-100 focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all text-sm font-bold" placeholder="••••••••" type="password" required />
                    </div>
                </div>

                <button className="w-full py-5 bg-primary text-white font-black rounded-2xl shadow-2xl shadow-primary/20 hover:scale-[0.98] transition-all text-[10px] uppercase tracking-[0.3em]" type="submit">
                  Begin Duty Enlistment
                </button>
            </form>

            <footer className="mt-12 text-center">
                <p className="text-zinc-400 text-xs font-medium">Already on duty? <Link to="/register" className="text-zinc-900 font-black underline decoration-primary decoration-2">Login to Control</Link></p>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AgentRegistration;
