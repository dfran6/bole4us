import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft, ShieldCheck, Sparkles, KeyRound, Lock } from 'lucide-react';
import toast from 'react-hot-toast';
import { requestPasswordReset, verifyOtp, resetPassword } from '../api/auth';

const ForgotPassword = () => {
  const [step, setStep] = useState('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleRequestReset = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await requestPasswordReset(email);
      setStep('otp');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await verifyOtp({ email, otp });
      setStep('reset');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // The OTP doubles as the reset token for /auth/password-reset/{token}.
      await resetPassword({ token: otp, newPassword, confirmNewPassword });
      setStep('done');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
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

            {step === 'email' && (
              <form onSubmit={handleRequestReset} className="space-y-8">
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
                  disabled={isSubmitting}
                  className="w-full bg-zinc-900 text-white py-6 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl hover:bg-primary transition-all active:scale-95 group/btn disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND RESET SIGNAL'}
                </button>
              </form>
            )}

            {step === 'otp' && (
              <form onSubmit={handleVerifyOtp} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Recovery Code</label>
                  <div className="relative group/input">
                    <KeyRound className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within/input:text-primary transition-colors w-5 h-5" />
                    <input
                      type="text"
                      required
                      placeholder="Enter the code sent to your email"
                      className="w-full pl-16 pr-8 py-6 bg-zinc-50 border border-zinc-100 rounded-[2rem] focus:ring-8 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all font-bold text-sm"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-zinc-900 text-white py-6 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl hover:bg-primary transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'VERIFYING...' : 'VERIFY CODE'}
                </button>
              </form>
            )}

            {step === 'reset' && (
              <form onSubmit={handleResetPassword} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">New Password</label>
                  <div className="relative group/input">
                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within/input:text-primary transition-colors w-5 h-5" />
                    <input
                      type="password"
                      required
                      minLength={8}
                      placeholder="••••••••"
                      className="w-full pl-16 pr-8 py-6 bg-zinc-50 border border-zinc-100 rounded-[2rem] focus:ring-8 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all font-bold text-sm"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Confirm Password</label>
                  <div className="relative group/input">
                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within/input:text-primary transition-colors w-5 h-5" />
                    <input
                      type="password"
                      required
                      minLength={8}
                      placeholder="••••••••"
                      className="w-full pl-16 pr-8 py-6 bg-zinc-50 border border-zinc-100 rounded-[2rem] focus:ring-8 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all font-bold text-sm"
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-zinc-900 text-white py-6 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl hover:bg-primary transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'RESETTING...' : 'RESET PASSWORD'}
                </button>
              </form>
            )}

            {step === 'done' && (
              <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-black font-headline text-zinc-900 uppercase">Access Restored</h3>
                    <p className="text-zinc-500 text-sm font-medium">Your password has been reset. Sign in with your new password.</p>
                </div>
                <button
                  onClick={() => navigate('/login')}
                  className="text-[10px] font-black text-primary uppercase tracking-widest hover:tracking-[0.2em] transition-all"
                >
                  Back to login
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
