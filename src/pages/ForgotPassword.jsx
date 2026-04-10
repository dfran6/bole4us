import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, ShieldCheck, Zap, Sparkles } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-bl-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-tr-full blur-[100px]"></div>
      
      <div className="w-full max-w-xl relative z-10">
        <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-white/10 group">
          <div className="p-12 md:p-16 space-y-12">
            
            {/* Header */}
            <header className="text-center space-y-4">
              <Link to="/login" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-primary transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                Back to Session
              </Link>
              <div className="w-20 h-20 bg-zinc-900 text-primary rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl shadow-zinc-200">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-headline tracking-tighter text-zinc-900 uppercase leading-none">
                Identity <br />
                <span className="text-primary italic">Recovery</span>
              </h1>
              <p className="text-zinc-500 font-medium text-sm max-w-xs mx-auto">Enter your signal address to reset your access protocols.</p>
            </header>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Signal Email</label>
                  <div className="relative group/input">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within/input:text-primary transition-colors w-5 h-5" />
                    <input 
                      type="email" 
                      required
                      placeholder="commander@bole4us.com"
                      className="w-full pl-16 pr-8 py-6 bg-zinc-50 border border-zinc-100 rounded-[2rem] focus:ring-8 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all font-bold text-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-zinc-900 text-white py-6 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl hover:bg-primary transition-all active:scale-95 group/btn"
                >
                  SEND RESET SIGNAL
                </button>
              </form>
            ) : (
              <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-black font-headline text-zinc-900 uppercase">Signal Dispatched</h3>
                    <p className="text-zinc-500 text-sm font-medium">Check your inbox for the recovery key. It will expire in 20 minutes.</p>
                </div>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-[10px] font-black text-primary uppercase tracking-widest hover:tracking-[0.2em] transition-all"
                >
                  Didn't get it? Try again
                </button>
              </div>
            )}
          </div>

          <footer className="bg-zinc-50 p-8 text-center border-t border-zinc-100">
            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                Secure Heat Exchange • <span className="text-zinc-900">BOLE4US OPS</span>
            </p>
          </footer>
        </div>

        <div className="mt-12 text-center text-zinc-500">
            <p className="text-[10px] font-black uppercase tracking-[0.4em]">Establishing secure connection...</p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
