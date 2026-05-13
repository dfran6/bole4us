import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const roles = [
  {
    value: 'student',
    label: 'Student',
    icon: '🎓',
  },
  {
    value: 'vendor',
    label: 'Vendor',
    icon: '🔥',
  },
  {
    value: 'agent',
    label: 'Agent',
    icon: '⚡',
  },
];

const Registration = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [selectedRole, setSelectedRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const visualRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const handleMouseMove = (event) => {
      if (prefersReducedMotion || !visualRef.current) return;

      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      visualRef.current.style.transform = `
        translate3d(${x * 18}px, ${y * 14}px, 0)
        rotateX(${y * -3}deg)
        rotateY(${x * 4}deg)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleAuthSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="auth-page min-h-screen overflow-hidden bg-[#FFFDF8] font-['DM_Sans'] text-zinc-950 selection:bg-[#F5A800]/30 selection:text-black">
      <main className="relative isolate min-h-screen">
        {/* Warm background system */}
        <div
          className="pointer-events-none absolute inset-0 -z-20"
          style={{
            background: `
              radial-gradient(circle at 15% 20%, rgba(245, 168, 0, 0.16), transparent 30%),
              radial-gradient(circle at 82% 18%, rgba(255, 204, 51, 0.2), transparent 28%),
              linear-gradient(180deg, #FFFDF8 0%, #FFF9EA 48%, #FFFFFF 100%)
            `,
          }}
        />

        <div className="pointer-events-none absolute -left-40 top-24 -z-10 h-[420px] w-[420px] rounded-full bg-[#F5A800]/10 blur-[110px]" />
        <div className="pointer-events-none absolute -right-44 bottom-0 -z-10 h-[520px] w-[520px] rounded-full bg-zinc-950/5 blur-[130px]" />

        {/* Grain texture */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='authNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23authNoise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="mx-auto grid min-h-screen w-full max-w-[1440px] grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left Brand Visual */}
          <section className="relative hidden min-h-screen overflow-hidden p-8 lg:flex lg:items-center lg:justify-center xl:p-12">
            <div className="absolute inset-6 overflow-hidden rounded-[44px] bg-zinc-950 shadow-[0_50px_130px_-60px_rgba(0,0,0,0.75)] xl:inset-8">
              <img
                alt="Freshly grilled bole"
                className="h-full w-full object-cover opacity-60"
                src="https://pub-d63312c8b711451a9e50fb2916838f4a.r2.dev/Bole%20home.jpg"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/30" />
              <div className="absolute inset-0 bg-[#F5A800]/5 mix-blend-overlay" />

              {/* Floating badge */}
              <div className="float-slow absolute left-8 top-8 rounded-[26px] border border-white/15 bg-white/10 p-4 backdrop-blur-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F5A800] text-xl shadow-[0_18px_36px_-20px_rgba(245,168,0,0.85)]">
                    🔥
                  </div>

                  <div>
                    <div className="text-sm font-black text-white">
                      Fresh stock live
                    </div>
                    <div className="mt-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/45">
                      Updated nearby
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating reserve card */}
              <div className="float-fast absolute bottom-8 right-8 w-[230px] rounded-[28px] border border-white/15 bg-white/10 p-5 backdrop-blur-2xl">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-emerald-200">
                    Reserved
                  </span>

                  <span className="text-xs font-black text-white/60">
                    15 min
                  </span>
                </div>

                <div className="font-serif italic text-2xl font-bold tracking-[-0.04em] text-white">
                  Mama Titi
                </div>

                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  Your bole is waiting. Skip the queue.
                </p>
              </div>
            </div>

            <div
              ref={visualRef}
              className="relative z-10 max-w-[520px] transform-gpu transition-transform duration-150 ease-out"
            >
              <Link
                to="/"
                className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl transition hover:bg-white/15"
              >
                <span className="font-serif italic text-2xl font-black tracking-[-0.08em] text-[#F5A800]">
                  bole4us
                </span>
              </Link>

              <h1
                className="font-serif italic leading-[0.9] tracking-[-0.06em] text-white"
                style={{ fontSize: 'clamp(64px, 6vw, 96px)' }}
              >
                Join the
                <br />
                <span className="bg-gradient-to-r from-[#F5A800] via-[#FFB800] to-[#FF7A00] bg-clip-text not-italic font-semibold text-transparent">
                  campus heat.
                </span>
              </h1>

              <p className="mt-8 max-w-[460px] text-lg font-light leading-relaxed text-white/70">
                Find vendors, reserve your portion, or manage orders in one
                fast, campus-first food experience.
              </p>

              <div className="mt-10 grid max-w-[460px] grid-cols-3 overflow-hidden rounded-[28px] border border-white/10 bg-white/10 backdrop-blur-2xl">
                <div className="border-r border-white/10 p-5">
                  <div className="text-2xl font-black text-white">400+</div>
                  <div className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-white/40">
                    Students
                  </div>
                </div>

                <div className="border-r border-white/10 p-5">
                  <div className="text-2xl font-black text-white">98%</div>
                  <div className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-white/40">
                    Success
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-2xl font-black text-white">15m</div>
                  <div className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-white/40">
                    Pickup
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Right Auth Form */}
          <section className="flex min-h-screen items-center justify-center px-5 py-8 sm:px-8 lg:px-10">
            <div
              className="w-full max-w-[520px] transition-all duration-1000 ease-out"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(26px)',
              }}
            >
              {/* Mobile logo/header */}
              <header className="mb-8 text-center lg:text-left">
                <Link
                  to="/"
                  className="mb-7 inline-flex items-center justify-center transition-transform duration-300 hover:scale-105"
                  aria-label="Bole4us home"
                >
                  <img
                    src="/logo.png"
                    alt="Bole4us logo"
                    className="h-12 w-auto object-contain"
                  />
                </Link>

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F5A800]/20 bg-[#F5A800]/10 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#F5A800]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D88B00]">
                    {isLogin ? 'Welcome back' : 'Create your account'}
                  </span>
                </div>

                <h2
                  className="font-serif italic leading-[0.95] tracking-[-0.055em] text-zinc-950"
                  style={{ fontSize: 'clamp(44px, 6vw, 68px)' }}
                >
                  {isLogin ? (
                    <>
                      Back for
                      <br />
                      <span className="bg-gradient-to-r from-[#F5A800] via-[#FFB800] to-[#FF7A00] bg-clip-text not-italic font-semibold text-transparent">
                        more heat?
                      </span>
                    </>
                  ) : (
                    <>
                      Start your
                      <br />
                      <span className="bg-gradient-to-r from-[#F5A800] via-[#FFB800] to-[#FF7A00] bg-clip-text not-italic font-semibold text-transparent">
                        bole journey.
                      </span>
                    </>
                  )}
                </h2>

                <p className="mx-auto mt-5 max-w-[430px] text-[16px] leading-relaxed text-zinc-500 lg:mx-0">
                  {isLogin
                    ? 'Sign in to find vendors, track reservations, and pick up your portion without stress.'
                    : 'Create an account as a student, vendor, or agent and plug into the campus food flow.'}
                </p>
              </header>

              {/* Form Card */}
              <div className="relative overflow-hidden rounded-[38px] border border-white/70 bg-white/80 p-5 shadow-[0_32px_100px_-60px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-7">
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#F5A800]/15 blur-3xl" />

                {/* Toggle */}
                <div className="relative z-10 mb-8 grid grid-cols-2 rounded-[24px] border border-zinc-200/80 bg-zinc-100/70 p-1.5">
                  <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className={`rounded-[19px] px-4 py-3 text-[11px] font-black uppercase tracking-[0.18em] transition-all duration-300 ${
                      isLogin
                        ? 'bg-white text-zinc-950 shadow-[0_12px_30px_-20px_rgba(0,0,0,0.4)]'
                        : 'text-zinc-400 hover:text-zinc-700'
                    }`}
                  >
                    Login
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className={`rounded-[19px] px-4 py-3 text-[11px] font-black uppercase tracking-[0.18em] transition-all duration-300 ${
                      !isLogin
                        ? 'bg-white text-zinc-950 shadow-[0_12px_30px_-20px_rgba(0,0,0,0.4)]'
                        : 'text-zinc-400 hover:text-zinc-700'
                    }`}
                  >
                    Register
                  </button>
                </div>

                <form
                  className="relative z-10 space-y-5"
                  onSubmit={handleAuthSubmit}
                >
                  {!isLogin && (
                    <>
                      {/* Role selector */}
                      <div>
                        <label className="mb-3 block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                          I am joining as
                        </label>

                        <div className="grid grid-cols-3 gap-2">
                          {roles.map((role) => (
                            <button
                              key={role.value}
                              type="button"
                              onClick={() => setSelectedRole(role.value)}
                              className={`rounded-[20px] border p-3 text-center transition-all duration-300 ${
                                selectedRole === role.value
                                  ? 'border-[#F5A800]/40 bg-[#F5A800]/10 text-zinc-950 shadow-[0_18px_40px_-30px_rgba(245,168,0,0.9)]'
                                  : 'border-zinc-200 bg-white/70 text-zinc-400 hover:border-zinc-300 hover:text-zinc-700'
                              }`}
                            >
                              <div className="text-xl">{role.icon}</div>
                              <div className="mt-1 text-[10px] font-black uppercase tracking-[0.14em]">
                                {role.label}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="fullName"
                          className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                        >
                          Full Name
                        </label>
                        <input
                          id="fullName"
                          className="w-full rounded-[22px] border border-transparent bg-zinc-100/70 px-5 py-4 text-zinc-950 outline-none transition-all placeholder:text-zinc-300 focus:border-[#F5A800]/50 focus:bg-white focus:ring-4 focus:ring-[#F5A800]/10"
                          placeholder="Uche Okoro"
                          type="text"
                          required
                        />
                      </div>
                    </>
                  )}

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      className="w-full rounded-[22px] border border-transparent bg-zinc-100/70 px-5 py-4 text-zinc-950 outline-none transition-all placeholder:text-zinc-300 focus:border-[#F5A800]/50 focus:bg-white focus:ring-4 focus:ring-[#F5A800]/10"
                      placeholder="you@example.com"
                      type="email"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between px-1">
                      <label
                        htmlFor="password"
                        className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                      >
                        Password
                      </label>

                      {isLogin && (
                        <Link
                          to="/forgot"
                          className="text-[10px] font-black uppercase tracking-[0.14em] text-[#D88B00] transition-colors hover:text-[#F5A800]"
                        >
                          Forgot?
                        </Link>
                      )}
                    </div>

                    <div className="relative">
                      <input
                        id="password"
                        className="w-full rounded-[22px] border border-transparent bg-zinc-100/70 px-5 py-4 pr-14 text-zinc-950 outline-none transition-all placeholder:text-zinc-300 focus:border-[#F5A800]/50 focus:bg-white focus:ring-4 focus:ring-[#F5A800]/10"
                        placeholder="••••••••"
                        type={showPassword ? 'text' : 'password'}
                        required
                        minLength={6}
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword((current) => !current)}
                        className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white hover:text-zinc-950"
                        aria-label={
                          showPassword ? 'Hide password' : 'Show password'
                        }
                      >
                        {showPassword ? (
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M3 3l18 18"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M10.6 10.6A2 2 0 0 0 13.4 13.4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M9.5 5.3A10.7 10.7 0 0 1 12 5c5 0 8.5 4 10 7a14.5 14.5 0 0 1-3.1 4.2M6.6 6.7A14.3 14.3 0 0 0 2 12c1.5 3 5 7 10 7 1.7 0 3.2-.4 4.5-1.1"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {isLogin ? (
                    <div className="flex items-center justify-between pt-1">
                      <label className="flex cursor-pointer items-center gap-3 text-sm text-zinc-500">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-zinc-300 text-[#F5A800] focus:ring-[#F5A800]"
                        />
                        Remember me
                      </label>

                      <span className="hidden text-[10px] font-black uppercase tracking-[0.16em] text-zinc-300 sm:block">
                        Secure login
                      </span>
                    </div>
                  ) : (
                    <div className="rounded-[22px] border border-[#F5A800]/20 bg-[#F5A800]/10 p-4">
                      <div className="flex gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F5A800] text-sm text-white">
                          ✓
                        </div>

                        <p className="text-sm leading-relaxed text-zinc-600">
                          By creating an account, you agree to receive order,
                          vendor, and reservation updates from Bole4us.
                        </p>
                      </div>
                    </div>
                  )}

                  <button
                    className="group mt-3 inline-flex w-full items-center justify-center gap-3 rounded-[24px] bg-[#F5A800] px-8 py-5 text-[14px] font-black uppercase tracking-[0.16em] text-white shadow-[0_24px_60px_-20px_rgba(245,168,0,0.65)] transition-all duration-300 hover:bg-zinc-900 active:scale-95"
                    type="submit"
                  >
                    <span>{isLogin ? 'Sign In' : 'Create Account'}</span>

                    <svg
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </form>

                {/* Social Auth */}
                <div className="relative z-10 mt-8 border-t border-zinc-100 pt-7">
                  <div className="mb-5 flex items-center justify-center gap-3">
                    <span className="h-px flex-1 bg-zinc-100" />
                    <span className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                      Or continue with
                    </span>
                    <span className="h-px flex-1 bg-zinc-100" />
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      className="group flex items-center justify-center gap-3 rounded-[22px] border border-zinc-200 bg-white/75 px-5 py-4 text-sm font-black text-zinc-600 transition-all duration-300 hover:border-zinc-950 hover:bg-zinc-950 hover:text-white"
                    >
                      <img
                        alt="Google"
                        className="h-4 w-4 opacity-80 transition-all group-hover:brightness-0 group-hover:invert"
                        src="https://www.gstatic.com/images/branding/googleg/lp/google-g-logo.svg"
                      />
                      Google
                    </button>

                    <button
                      type="button"
                      className="group flex items-center justify-center gap-3 rounded-[22px] border border-zinc-200 bg-white/75 px-5 py-4 text-sm font-black text-zinc-600 transition-all duration-300 hover:border-zinc-950 hover:bg-zinc-950 hover:text-white"
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="opacity-75 transition-opacity group-hover:opacity-100"
                      >
                        <path d="M16.365 1.43c0 1.14-.42 2.13-1.26 2.97-.9.9-1.89 1.41-3 1.32-.15-1.08.39-2.19 1.17-2.97.84-.87 2.13-1.5 3.09-1.32Zm3.6 16.58c-.54 1.23-.81 1.77-1.5 2.85-.96 1.47-2.31 3.3-3.99 3.33-1.5.03-1.89-.96-3.93-.96s-2.49.93-3.9.99c-1.62.06-2.85-1.59-3.81-3.06-2.61-3.99-2.88-8.67-1.26-11.16 1.14-1.77 2.97-2.79 4.68-2.79 1.74 0 2.82.96 4.26.96 1.38 0 2.22-.96 4.23-.96 1.5 0 3.12.84 4.26 2.28-3.75 2.04-3.15 7.38.96 8.52Z" />
                      </svg>
                      Apple
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer Prompt */}
              <div className="mt-8 text-center">
                <p className="text-sm text-zinc-500">
                  {isLogin
                    ? "Don't have an account yet?"
                    : 'Already have an account?'}{' '}
                  <button
                    type="button"
                    onClick={() => setIsLogin((current) => !current)}
                    className="font-black text-[#D88B00] transition-colors hover:text-[#F5A800]"
                  >
                    {isLogin ? 'Create one' : 'Sign in'}
                  </button>
                </p>

                <div className="mt-7 rounded-[28px] border border-white/70 bg-white/60 p-5 shadow-[0_24px_70px_-50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                  <p className="mb-4 text-xs leading-relaxed text-zinc-400">
                    Want to sell, update stock, or deliver around campus?
                  </p>

                  <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                      to="/register/vendor"
                      className="inline-flex w-full items-center justify-center rounded-[18px] border border-[#F5A800]/30 bg-[#F5A800]/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#D88B00] transition-all duration-300 hover:bg-[#F5A800] hover:text-white sm:w-auto"
                    >
                      Apply as Vendor
                    </Link>

                    <Link
                      to="/register/agent"
                      className="inline-flex w-full items-center justify-center rounded-[18px] border border-zinc-200 bg-white/70 px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-700 transition-all duration-300 hover:border-zinc-950 hover:bg-zinc-950 hover:text-white sm:w-auto"
                    >
                      Apply as Agent
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

        .auth-page {
          font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        .float-slow {
          animation: authFloatSlow 5.5s ease-in-out infinite;
        }

        .float-fast {
          animation: authFloatFast 4.4s ease-in-out infinite;
        }

        @keyframes authFloatSlow {
          0%, 100% {
            transform: translateY(0) rotate(-1deg);
          }

          50% {
            transform: translateY(-14px) rotate(2deg);
          }
        }

        @keyframes authFloatFast {
          0%, 100% {
            transform: translateY(0) rotate(2deg);
          }

          50% {
            transform: translateY(14px) rotate(-2deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .float-slow,
          .float-fast {
            animation: none;
          }

          .auth-page * {
            transition-duration: 0.001ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Registration;
