import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu2sa9-h82jzObJax4e1tkGeKjpr83EUPhyGQd4oxewra7mJTNlwgJIOz4F-j5Nj2PbEKAEG3FlKC_3S_JjOE3opjK1FgQ7klBBoyjYAxYNmJiQC55V2hwfN81dKn11zA7jlGC73URszVHo5d69o9Opw9t-4SFV9GJdIGtpNs3CCumBFBqTAPd9gJvlrslluN6hZ2RMiVjcmXMNuwohfn_vUw0W3QpKOJhxQGXFS7CBFwlcThp6vXHZ2Um6LFi437nSgQ8W4RXfJs"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>

          <div className="relative z-10 max-w-lg text-center lg:text-left">
            <h1 className="font-serif italic text-7xl text-white leading-[0.9] tracking-tighter mb-8">
              The Urban <br />
              <span className="text-[#F5A800] not-italic font-black">
                Heat.
              </span>
            </h1>
            <p className="text-zinc-300 text-lg font-light leading-relaxed mb-10">
              Connecting the vibrant spirit of street-grilled delicacies with a
              sophisticated digital marketplace.
            </p>
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <span className="material-symbols-outlined text-[#F5A800]">
                local_fire_department
              </span>
              <span className="text-[10px] text-white font-bold tracking-[0.2em] uppercase">
                Join 500+ Local Vendors
              </span>
            </div>
          </div>
        </section>

        {/* Right Section: Clean Auth Form */}
        <section className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12 bg-white">
          <div className="w-full max-w-[440px]">
            <header className="mb-12 text-center lg:text-left">
              <Link
                to="/"
                className="inline-block mb-8 transition-transform hover:scale-105"
              >
                <span className="font-serif italic text-3xl font-black tracking-tighter text-[#F5A800]">
                  bole4us
                </span>
              </Link>
              <h2 className="font-serif italic text-4xl text-zinc-900 tracking-tight">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className="text-zinc-500 mt-3 font-light">
                {isLogin
                  ? 'Enter your credentials to access the heat.'
                  : 'Join the urban heat revolution today.'}
              </p>
            </header>

            {/* Form Container */}
            <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-zinc-100">
              {/* Toggle: Minimalist Segmented Control */}
              <div className="flex p-1 bg-zinc-50 rounded-2xl mb-10 border border-zinc-200/50">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl transition-all duration-300 ${
                    isLogin
                      ? 'bg-white text-zinc-900 shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-600'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl transition-all duration-300 ${
                    !isLogin
                      ? 'bg-white text-zinc-900 shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-600'
                  }`}
                >
                  Register
                </button>
              </div>

              <form className="space-y-6" onSubmit={handleAuthSubmit}>
                {!isLogin && (
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] ml-1">
                      Full Name
                    </label>
                    <input
                      className="w-full px-6 py-4 bg-zinc-50 rounded-2xl border border-transparent focus:border-[#F5A800] focus:bg-white text-zinc-900 placeholder:text-zinc-300 transition-all outline-none"
                      placeholder="Uche Okoro"
                      type="text"
                      required
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] ml-1">
                    Email Address
                  </label>
                  <input
                    className="w-full px-6 py-4 bg-zinc-50 rounded-2xl border border-transparent focus:border-[#F5A800] focus:bg-white text-zinc-900 placeholder:text-zinc-300 transition-all outline-none"
                    placeholder="you@example.com"
                    type="email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
                      Password
                    </label>
                    {isLogin && (
                      <Link
                        className="text-[10px] font-bold text-[#F5A800] hover:text-[#D48F00] transition-colors"
                        to="/forgot"
                      >
                        Forgot?
                      </Link>
                    )}
                  </div>
                  <input
                    className="w-full px-6 py-4 bg-zinc-50 rounded-2xl border border-transparent focus:border-[#F5A800] focus:bg-white text-zinc-900 placeholder:text-zinc-300 transition-all outline-none"
                    placeholder="••••••••"
                    type="password"
                    required
                  />
                </div>

                {/* Primary Action with Zinc-900 Hover */}
                <button
                  className="w-full py-5 bg-[#F5A800] hover:bg-zinc-900 hover:text-white font-bold rounded-2xl shadow-[0_15px_30px_rgba(245,168,0,0.25)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:scale-95 active:translate-y-0 transition-all duration-300 text-sm uppercase tracking-widest mt-4"
                  type="submit"
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </button>
              </form>

              {/* Social Auth with Zinc-900 Hover */}
              <div className="mt-10 pt-8 border-t border-zinc-100">
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-3 py-4 bg-white rounded-2xl text-xs font-bold text-zinc-600 border border-zinc-200 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300 group">
                    <img
                      alt="G"
                      className="w-4 h-4 opacity-70 group-hover:brightness-0 group-hover:invert transition-all"
                      src="https://www.gstatic.com/images/branding/googleg/lp/google-g-logo.svg"
                    />
                    Google
                  </button>
                  <button className="flex items-center justify-center gap-3 py-4 bg-white rounded-2xl text-xs font-bold text-zinc-600 border border-zinc-200 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300 group">
                    <span className="material-symbols-outlined text-lg opacity-70 group-hover:opacity-100">
                      apple
                    </span>
                    Apple
                  </button>
                </div>
              </div>
            </div>

            {/* Comprehensive Footer Prompt */}
            <div className="mt-10 text-center space-y-2">
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Want to sell or deliver?
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link
                  to="/register/vendor"
                  className="text-[10px] uppercase tracking-wider text-zinc-900 font-black hover:text-[#F5A800] transition-colors border-b-2 border-[#F5A800]"
                >
                  Apply as Vendor
                </Link>
                <span className="w-1 h-1 rounded-full bg-zinc-200" />
                <Link
                  to="/register/agent"
                  className="text-[10px] uppercase tracking-wider text-zinc-900 font-black hover:text-[#F5A800] transition-colors border-b-2 border-[#F5A800]"
                >
                  Apply as Agent
                </Link>
              </div>
            </div>
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

export default Registration;
