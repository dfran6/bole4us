import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen selection:bg-primary/20">
      <main className="relative min-h-screen flex flex-col lg:flex-row">
        
        {/* Left Section (Hero Image for Auth) */}
        <section className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden items-center justify-center p-12">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Close-up of sizzling roasted meat on a charcoal grill with sparks and smoke" 
              className="w-full h-full object-cover opacity-60 mix-blend-multiply" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu2sa9-h82jzObJax4e1tkGeKjpr83EUPhyGQd4oxewra7mJTNlwgJIOz4F-j5Nj2PbEKAEG3FlKC_3S_JjOE3opjK1FgQ7klBBoyjYAxYNmJiQC55V2hwfN81dKn11zA7jlGC73URszVHo5d69o9Opw9t-4SFV9GJdIGtpNs3CCumBFBqTAPd9gJvlrslluN6hZ2RMiVjcmXMNuwohfn_vUw0W3QpKOJhxQGXFS7CBFwlcThp6vXHZ2Um6LFi437nSgQ8W4RXfJs"
            />
          </div>
          <div className="relative z-10 max-w-lg">
            <h1 className="font-headline font-black text-6xl text-on-primary leading-none tracking-tighter mb-6">
              THE URBAN<br />HEAT.
            </h1>
            <p className="text-on-primary/90 text-lg font-medium leading-relaxed mb-8">
              Bole4us connects the vibrant spirit of street-grilled delicacies with a sophisticated digital marketplace. Taste the heat, feel the energy.
            </p>
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <span className="material-symbols-outlined text-secondary-fixed">local_fire_department</span>
              <span className="text-on-primary font-bold tracking-wide uppercase text-sm">Join 500+ Local Vendors</span>
            </div>
          </div>
        </section>

        {/* Right Section (Auth Forms) */}
        <section className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12 bg-surface">
          <div className="w-full max-w-[480px]">
            <header className="mb-10 text-center lg:text-left">
              <Link to="/">
                <img 
                  alt="bole4us logo" 
                  className="h-12 mb-8 mx-auto lg:mx-0 cursor-pointer object-contain" 
                  src="/logo.png"
                />
              </Link>
              <h2 className="font-headline font-bold text-3xl text-on-background tracking-tight">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className="text-on-surface-variant mt-2">
                {isLogin ? 'Enter your credentials to access the heat.' : 'Join the urban heat revolution today.'}
              </p>
            </header>

            <div className="bg-white/80 backdrop-blur-[20px] rounded-xl p-8 shadow-[0px_12px_32px_rgba(26,28,28,0.06)] border border-black/5">
              
              {/* Login / Register Toggle */}
              <div className="flex p-1 bg-surface-container-high rounded-full mb-8">
                <button 
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-2 text-sm font-bold rounded-full transition-all ${
                    isLogin 
                      ? 'bg-white text-on-background shadow-sm' 
                      : 'text-on-surface-variant hover:text-on-background'
                  }`}
                >
                  Login
                </button>
                <button 
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-2 text-sm font-bold rounded-full transition-all ${
                    !isLogin 
                      ? 'bg-white text-on-background shadow-sm' 
                      : 'text-on-surface-variant hover:text-on-background'
                  }`}
                >
                  Register
                </button>
              </div>

              {isLogin ? (
                /* LOGIN FORM */
                <>
                  <form className="space-y-6" onSubmit={handleAuthSubmit}>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-on-surface uppercase tracking-widest ml-1">Email or Phone</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">alternate_email</span>
                        <input 
                          className="w-full pl-12 pr-4 py-4 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary/20 text-on-background placeholder:text-on-surface-variant/50 transition-all outline-none" 
                          placeholder="you@example.com" 
                          type="text"
                          required
                        />
                      </div>
                    </div>
                      <div className="flex justify-between items-center ml-1">
                        <label className="text-xs font-bold text-on-surface uppercase tracking-widest">Password</label>
                        <Link className="text-xs font-bold text-primary hover:text-primary-container transition-colors" to="/forgot-password">Forgot Password?</Link>
                      </div>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">lock</span>
                        <input 
                          className="w-full pl-12 pr-4 py-4 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary/20 text-on-background placeholder:text-on-surface-variant/50 transition-all outline-none" 
                          placeholder="••••••••" 
                          type="password"
                          required
                        />
                      </div>
                    <button className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-xl shadow-lg hover:opacity-90 active:scale-95 transition-all text-lg" type="submit">
                      Sign In
                    </button>
                  </form>

                  <div className="mt-8 pt-8 border-t border-black/5 text-center">
                    <p className="text-sm text-on-surface-variant mb-6">Or continue with</p>
                    <div className="grid grid-cols-2 gap-4">
                      <button className="flex items-center justify-center gap-2 py-3 px-4 bg-surface-container-low rounded-xl font-semibold text-sm hover:bg-surface-container-high transition-colors">
                        <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBba55erspvIYzFthR0ypf_KKgHjmFb001i6e9bitObiJtPGcirQxPLg-Qqw7dd-j5je3wkp7z_EtUF8FPbd3ufv6uAR-QVhrzi_tpIZTShf13I4A7ZyWqeGwOJA2plywB8HfYC1nuSdQEtDbgnKvtEG64JIBry4qKGaZkA7de27bhgziMuYJNAHVK0TiwuUQWju-LUx4le6_25cU2sKhU-3-V4xajzruVil3_aCjU-gi_yHfOE0Q9QgrUpmLefS7VB4sKNj4uKKvI"/>
                        Google
                      </button>
                      <button className="flex items-center justify-center gap-2 py-3 px-4 bg-surface-container-low rounded-xl font-semibold text-sm hover:bg-surface-container-high transition-colors">
                        <span className="material-symbols-outlined text-xl">ios</span>
                        Apple
                      </button>
                    </div>
                  </div>

                  <div className="mt-12 space-y-4">
                    <div className="p-6 bg-secondary-fixed/10 border border-secondary-fixed/20 rounded-xl">
                      <div className="flex gap-4">
                        <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
                        <div>
                          <h4 className="text-sm font-bold text-secondary uppercase tracking-wider">Business Accounts</h4>
                          <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                            Want to sell or deliver? Register as a <Link to="/register/vendor" className="text-on-background font-bold underline decoration-primary decoration-2 hover:text-primary">Vendor</Link> or an <Link to="/register/agent" className="text-on-background font-bold underline decoration-primary decoration-2 hover:text-primary">Agent</Link>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* REGISTRATION FORM */
                <form className="space-y-6" onSubmit={handleAuthSubmit}>
                   <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      className="w-full px-4 py-4 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary/20 text-on-background outline-none" 
                      placeholder="Uche Okoro" 
                      type="text"
                      required
                    />
                  </div>

                   <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface uppercase tracking-widest ml-1">Phone</label>
                    <input 
                      className="w-full px-4 py-4 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary/20 text-on-background outline-none" 
                      placeholder="+234 0123456789" 
                      type="phone"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface uppercase tracking-widest ml-1">Email</label>
                    <input 
                      className="w-full px-4 py-4 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary/20 text-on-background outline-none" 
                      placeholder="you@example.com" 
                      type="email"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface uppercase tracking-widest ml-1">Password</label>
                    <input 
                      className="w-full px-4 py-4 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary/20 text-on-background outline-none" 
                      placeholder="Create a strong password" 
                      type="password"
                      required
                    />
                  </div>

                  <button className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-xl shadow-lg hover:opacity-90 active:scale-95 transition-all text-lg" type="submit">
                    Create Student Account
                  </button>
                  
                  <p className="text-[10px] text-center text-on-surface-variant uppercase tracking-widest mt-4">
                    By joining, you agree to our <Link to="/terms" className="text-primary font-bold">Terms</Link> & <Link to="/privacy" className="text-primary font-bold">Privacy</Link>
                  </p>
                </form>
              )}

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-6 bg-surface-container-low mt-auto border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="font-headline font-bold text-lg text-on-background tracking-tighter">bole4us</span>
            <p className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-[0.2em] mt-2">
              © 2024 BOLE4US. THE URBAN HEAT EXPERIENCE.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Registration;
