import { Link, useNavigate } from 'react-router-dom';

const AgentRegistration = () => {
  const navigate = useNavigate();

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    navigate('/agent');
  };

  return (
    <div className="bg-white font-['DM_Sans'] text-[#1A1A1A] min-h-screen selection:bg-[#F5A800]/30">
      <main className="relative min-h-screen flex flex-col lg:flex-row">
        {/* Left Section: Immersive Agent Visual */}
        <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center p-12 bg-[#0E0E0E]">
          <div className="absolute inset-0 z-0">
            <img
              alt="Fast delivery rider on bike"
              className="w-full h-full object-cover opacity-60 scale-110"
              src="https://images.unsplash.com/photo-1558981403-c5f9199a28ad?q=80&w=2070&auto=format&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>

          <div className="relative z-10 max-w-lg">
            <div className="w-20 h-20 bg-[#F5A800] rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl">
              <span className="material-symbols-outlined text-white text-4xl font-bold">
                delivery_dining
              </span>
            </div>
            <h1 className="font-serif italic text-7xl text-white leading-[0.9] tracking-tighter mb-8">
              Deploy Your <br />
              <span className="text-[#F5A800] not-italic font-black uppercase">
                Velocity.
              </span>
            </h1>
            <p className="text-zinc-300 text-lg font-light leading-relaxed mb-10 max-w-sm">
              Become a critical node in the urban heat network. Earn on every
              mission, with total flexibility.
            </p>

            <div className="flex gap-12">
              <div>
                <p className="font-serif italic text-4xl text-white leading-none">
                  100%
                </p>
                <p className="text-[10px] font-bold text-[#F5A800] uppercase tracking-[0.2em] mt-2">
                  Payout Autonomy
                </p>
              </div>
              <div className="border-l border-white/20 pl-12">
                <p className="font-serif italic text-4xl text-white leading-none">
                  FREE
                </p>
                <p className="text-[10px] font-bold text-[#F5A800] uppercase tracking-[0.2em] mt-2">
                  Onboarding
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Section: Clean Enlistment Form */}
        <section className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12 bg-white">
          <div className="w-full max-w-[540px]">
            <header className="mb-12 text-center lg:text-left">
              <Link
                to="/"
                className="inline-block mb-8 transition-transform hover:scale-105"
              >
                <img
                  alt="bole4us logo"
                  className="h-12 object-contain"
                  src="/logo.png"
                />
              </Link>
              <h2 className="font-serif italic text-4xl text-zinc-900 tracking-tight">
                Agent Enlistment
              </h2>
              <p className="text-zinc-500 mt-3 font-light">
                Complete your logistics profile to join the active signals pool.
              </p>
            </header>

            {/* Form Container */}
            <form
              className="space-y-8 bg-white rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-zinc-100"
              onSubmit={handleAuthSubmit}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] ml-1">
                    Legal Full Name
                  </label>
                  <input
                    className="w-full px-6 py-4 bg-zinc-50 rounded-2xl border border-transparent focus:border-[#F5A800] focus:bg-white text-zinc-900 placeholder:text-zinc-300 transition-all outline-none text-sm font-bold tracking-tight"
                    placeholder="Chuks Emeka"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] ml-1">
                      Primary Quadrant
                    </label>
                    <input
                      className="w-full px-6 py-4 bg-zinc-50 rounded-2xl border border-transparent focus:border-[#F5A800] focus:bg-white text-zinc-900 placeholder:text-zinc-300 transition-all outline-none text-sm font-bold tracking-tight"
                      placeholder="e.g. VI / Lekki"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] ml-1">
                      Vehicle Class
                    </label>
                    <select className="w-full px-6 py-4 bg-zinc-50 rounded-2xl border border-transparent focus:border-[#F5A800] focus:bg-white text-zinc-900 outline-none transition-all text-sm font-bold appearance-none cursor-pointer">
                      <option>Motorbike</option>
                      <option>Bicycle</option>
                      <option>Electric Scooter</option>
                      <option>Foot Patrol</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] ml-1">
                  ID Verification Upload
                </label>
                <div className="border-2 border-dashed border-zinc-100 rounded-[2rem] p-8 text-center hover:border-[#F5A800] hover:bg-zinc-50 transition-all cursor-pointer group bg-zinc-50/50">
                  <span className="material-symbols-outlined text-4xl text-zinc-300 group-hover:text-[#F5A800] transition-colors mb-2">
                    fingerprint
                  </span>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
                    Upload Driver's License or NIN
                  </p>
                </div>
              </div>

              <div className="space-y-6 pt-6 border-t border-zinc-100">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] ml-1">
                    Signal Channel (Email)
                  </label>
                  <input
                    className="w-full px-6 py-4 bg-zinc-50 rounded-2xl border border-transparent focus:border-[#F5A800] focus:bg-white text-zinc-900 placeholder:text-zinc-300 transition-all outline-none text-sm font-bold"
                    placeholder="agent@heat.com"
                    type="email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] ml-1">
                    Encryption Key (Password)
                  </label>
                  <input
                    className="w-full px-6 py-4 bg-zinc-50 rounded-2xl border border-transparent focus:border-[#F5A800] focus:bg-white text-zinc-900 placeholder:text-zinc-300 transition-all outline-none text-sm font-bold"
                    placeholder="••••••••"
                    type="password"
                    required
                  />
                </div>
              </div>

              <button
                className="w-full py-5 bg-[#F5A800] hover:bg-zinc-900 hover:text-white text-zinc-900 font-bold rounded-2xl shadow-[0_15px_30px_rgba(245,168,0,0.25)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:scale-95 active:translate-y-0 transition-all duration-300 text-sm uppercase tracking-widest"
                type="submit"
              >
                Begin Duty Enlistment
              </button>
            </form>

            <footer className="mt-12 text-center">
              <p className="text-zinc-400 text-xs font-light">
                Already on duty?
                <Link
                  to="/register"
                  className="text-zinc-900 font-bold ml-1 hover:text-[#F5A800] transition-colors underline decoration-[#F5A800] decoration-2 underline-offset-4"
                >
                  Login to Control
                </Link>
              </p>
            </footer>
          </div>
        </section>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,900&family=DM+Sans:wght@400;500;700&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </div>
  );
};

export default AgentRegistration;
