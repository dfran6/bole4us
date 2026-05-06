import { Link, useNavigate } from 'react-router-dom';

const VendorRegistration = () => {
  const navigate = useNavigate();

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    navigate('/vendor');
  };

  return (
    <div className="bg-white font-['DM_Sans'] text-[#1A1A1A] min-h-screen selection:bg-[#F5A800]/30">
      <main className="relative min-h-screen flex flex-col lg:flex-row">
        {/* Left Section: Immersive Brand Visual */}
        <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center p-12 bg-[#0E0E0E]">
          <div className="absolute inset-0 z-0">
            <img
              alt="Sizzling bole"
              className="w-full h-full object-cover opacity-60"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArPl-zno48uAKmTk62d9vB4ntdnt8Hf5yRswm1w8gY587ewJlIri5zDojQt1sZfpUZDBcumJCO6xjIu8l1jNHAPPlrcEOrKtX4Gj-CNxB1cldPqL1Oy4fI3QqCb0rLFYRQUs55i6L897QmhdGjVIUdGde5SNwZbUkW2IOoldgeRIV_rsXttqhxDFYo9U0mfoPWK8Xzl9_mHkk4CYUPUmrmhZjfbCc_gtAp9LY8MYrTKYsMf-0PokmVFGLYAy8Bo_GXfAxmGGgTJu8"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>

          <div className="relative z-10 max-w-lg text-center lg:text-left">
            <div className="w-20 h-20 bg-[#F5A800] rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl mx-auto lg:mx-0">
              <span className="material-symbols-outlined text-white text-4xl font-bold">
                storefront
              </span>
            </div>
            <h1 className="font-serif italic text-7xl text-white leading-[0.9] tracking-tighter mb-8">
              Empower Your <br />
              <span className="text-[#F5A800] not-italic font-black uppercase">
                Grill.
              </span>
            </h1>
            <p className="text-zinc-300 text-lg font-light leading-relaxed mb-10">
              Bole4us provides the digital infrastructure for local vendors to
              scale their street food business with zero technical overhead.
            </p>
          </div>
        </section>

        {/* Right Section: Clean Onboarding Form */}
        <section className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12 bg-white">
          <div className="w-full max-w-[540px]">
            <header className="mb-12 text-center lg:text-left">
              {/* Logo Re-integrated */}
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
                Vendor Onboarding
              </h2>
              <p className="text-zinc-500 mt-3 font-light">
                Set up your business profile and start accepting digital heat
                signals.
              </p>
            </header>

            {/* Form Container */}
            <form
              className="space-y-8 bg-white rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-zinc-100"
              onSubmit={handleAuthSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] ml-1">
                    Business Name
                  </label>
                  <input
                    className="w-full px-6 py-4 bg-zinc-50 rounded-2xl border border-transparent focus:border-[#F5A800] focus:bg-white text-zinc-900 placeholder:text-zinc-300 transition-all outline-none text-sm font-bold tracking-tight"
                    placeholder="Mama's Hub"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] ml-1">
                    Grill Category
                  </label>
                  <select className="w-full px-6 py-4 bg-zinc-50 rounded-2xl border border-transparent focus:border-[#F5A800] focus:bg-white text-zinc-900 outline-none transition-all text-sm font-bold appearance-none cursor-pointer">
                    <option>Classic Bole</option>
                    <option>Spicy Fish</option>
                    <option>Premium Sides</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] ml-1">
                  Kitchen Location (Map Pin)
                </label>
                <div className="relative group rounded-[2rem] overflow-hidden border border-zinc-200 shadow-inner">
                  <div className="absolute inset-0 bg-zinc-100 flex items-center justify-center opacity-80 transition-opacity group-hover:opacity-100">
                    <img
                      alt="Map Mock"
                      className="w-full h-40 object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0-lLoNYkBjqD6SiGtWrKPpcI-raZfOYu0tlOLziIQYUV39F6ipFkVBE8ftdtAndpm3A_70ftFDRufOb2enFYBSNgQEMAkNPHN-8gPgH5nplD3qddBv2mVwimfbxMU2nnE3XN2RWwVD-yljsOs6xClcJvMFHW5ddLZ0NywXT5pc5NakqpbiAPggOaxs5oPHwxRT6YPc0RKwvxS9R4MC7w1i2okJRkqY24-w18WkORXrtBjYXcuaD27aRuK6uCnrdbj0F0mOlfZfW4"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#F5A800] rounded-full ring-8 ring-[#F5A800]/20 animate-pulse"></div>
                  </div>
                  <div className="relative h-40 flex items-end p-4">
                    <button
                      type="button"
                      className="w-full py-3 bg-white/90 backdrop-blur-md shadow-lg rounded-xl text-[10px] font-bold text-zinc-900 uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all duration-300"
                    >
                      Select Precision Point
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-6 border-t border-zinc-100">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] ml-1">
                    Personal Phone
                  </label>
                  <input
                    className="w-full px-6 py-4 bg-zinc-50 rounded-2xl border border-transparent focus:border-[#F5A800] focus:bg-white text-zinc-900 placeholder:text-zinc-300 transition-all outline-none text-sm font-bold"
                    placeholder="+234..."
                    type="tel"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] ml-1">
                    Security Key (Password)
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
                Launch Business Profile
              </button>
            </form>

            <footer className="mt-12 text-center">
              <p className="text-zinc-400 text-xs font-light">
                Already have a kitchen?
                <Link
                  to="/register"
                  className="text-zinc-900 font-bold ml-1 hover:text-[#F5A800] transition-colors underline decoration-[#F5A800] decoration-2 underline-offset-4"
                >
                  Login
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

export default VendorRegistration;
