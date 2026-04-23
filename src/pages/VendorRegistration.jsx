import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const VendorRegistration = () => {
  const navigate = useNavigate();

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    navigate('/vendor');
  };

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen selection:bg-primary/20">
      <main className="relative min-h-screen flex flex-col lg:flex-row">
        
        {/* Left Section (Hero Image for Auth) */}
        <section className="hidden lg:flex lg:w-1/2 bg-zinc-900 relative overflow-hidden items-center justify-center p-12">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Close-up of sizzling roasted meat on a charcoal grill with sparks and smoke" 
              className="w-full h-full object-cover opacity-40 mix-blend-multiply" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArPl-zno48uAKmTk62d9vB4ntdnt8Hf5yRswm1w8gY587ewJlIri5zDojQt1sZfpUZDBcumJCO6xjIu8l1jNHAPPlrcEOrKtX4Gj-CNxB1cldPqL1Oy4fI3QqCb0rLFYRQUs55i6L897QmhdGjVIUdGde5SNwZbUkW2IOoldgeRIV_rsXttqhxDFYo9U0mfoPWK8Xzl9_mHkk4CYUPUmrmhZjfbCc_gtAp9LY8MYrTKYsMf-0PokmVFGLYAy8Bo_GXfAxmGGgTJu8"
            />
          </div>
          <div className="relative z-10 max-w-lg text-center">
             <div className="w-24 h-24 bg-primary rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl">
                 <span className="material-symbols-outlined text-white text-5xl">storefront</span>
             </div>
            <h1 className="font-headline font-black text-5xl text-white leading-none tracking-tighter mb-6 uppercase italic">
              Empower Your <span className="text-primary NOT-italic">Grill.</span>
            </h1>
            <p className="text-zinc-400 text-lg font-medium leading-relaxed mb-8">
              Bole4us provides the digital infrastructure for local vendors to scale their street food business with zero technical overhead.
            </p>
          </div>
        </section>

        {/* Right Section (Auth Forms) */}
        <section className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12 bg-white">
          <div className="w-full max-w-[540px]">
            <header className="mb-10">
              <Link to="/" className="inline-block mb-8">
                <img alt="bole4us logo" className="h-12 object-contain" src="/logo.png" />
              </Link>
              <h2 className="font-headline font-black text-4xl text-zinc-900 tracking-tighter uppercase italic">
                Vendor Onboarding
              </h2>
              <p className="text-zinc-500 mt-2 font-medium">
                Set up your business profile and start accepting digital heat signals.
              </p>
            </header>

            <form className="space-y-8 bg-zinc-50 p-10 rounded-[3rem] border border-zinc-100 shadow-xl" onSubmit={handleAuthSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Business Name</label>
                        <input className="w-full px-6 py-4 bg-white rounded-2xl border border-zinc-100 focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all text-sm font-bold uppercase tracking-tight" placeholder="Mama's Hub" required />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Grill Category</label>
                        <select className="w-full px-6 py-4 bg-white rounded-2xl border border-zinc-100 focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all text-sm font-bold uppercase tracking-tight appearance-none">
                            <option>Classic Bole</option>
                            <option>Spicy Fish</option>
                            <option>Premium Sides</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Kitchen Location (Map Pin)</label>
                    <div className="relative group rounded-[2rem] overflow-hidden border border-zinc-200">
                        <div className="absolute inset-0 bg-zinc-100 flex items-center justify-center opacity-80">
                             <img alt="Map Mock" className="w-full h-40 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0-lLoNYkBjqD6SiGtWrKPpcI-raZfOYu0tlOLziIQYUV39F6ipFkVBE8ftdtAndpm3A_70ftFDRufOb2enFYBSNgQEMAkNPHN-8gPgH5nplD3qddBv2mVwimfbxMU2nnE3XN2RWwVD-yljsOs6xClcJvMFHW5ddLZ0NywXT5pc5NakqpbiAPggOaxs5oPHwxRT6YPc0RKwvxS9R4MC7w1i2okJRkqY24-w18WkORXrtBjYXcuaD27aRuK6uCnrdbj0F0mOlfZfW4"/>
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full ring-8 ring-primary/20 animate-pulse"></div>
                        </div>
                        <div className="relative h-40 flex items-end p-4">
                            <button type="button" className="w-full py-3 bg-white/90 backdrop-blur-md shadow-lg rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all">Select Precision Point</button>
                        </div>
                    </div>
                </div>

                <div className="space-y-6 pt-6 border-t border-zinc-200">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Personal Phone</label>
                        <input className="w-full px-6 py-4 bg-white rounded-2xl border border-zinc-100 focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all text-sm font-bold" placeholder="+234..." type="phone" required />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Security Key (Password)</label>
                        <input className="w-full px-6 py-4 bg-white rounded-2xl border border-zinc-100 focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all text-sm font-bold" placeholder="••••••••" type="password" required />
                    </div>
                </div>

                <button className="w-full py-5 bg-zinc-900 text-white font-black rounded-2xl shadow-2xl shadow-zinc-200 hover:bg-primary transition-all active:scale-[0.98] text-[10px] uppercase tracking-[0.3em]" type="submit">
                  Launch Business Profile
                </button>
            </form>

            <footer className="mt-12 text-center">
                <p className="text-zinc-400 text-xs font-medium">Already have a kitchen? <Link to="/register" className="text-zinc-900 font-black underline decoration-primary decoration-2">Login</Link></p>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VendorRegistration;
