import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const vehicleClasses = [
  'Motorbike',
  'Bicycle',
  'Electric Scooter',
  'Foot Patrol',
];

const AgentRegistration = () => {
  const [loaded, setLoaded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState('Motorbike');
  const [fileName, setFileName] = useState('');

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
    navigate('/agent');
  };

  return (
    <div className="agent-auth-page min-h-screen overflow-hidden bg-[#FFFDF8] font-['DM_Sans'] text-zinc-950 selection:bg-[#F5A800]/30 selection:text-black">
      <main className="relative isolate min-h-screen">
        {/* Warm landing-page background */}
        <div
          className="pointer-events-none absolute inset-0 -z-20"
          style={{
            background: `
              radial-gradient(circle at 15% 20%, rgba(245, 168, 0, 0.16), transparent 30%),
              radial-gradient(circle at 84% 18%, rgba(255, 204, 51, 0.2), transparent 28%),
              linear-gradient(180deg, #FFFDF8 0%, #FFF9EA 48%, #FFFFFF 100%)
            `,
          }}
        />

        <div className="pointer-events-none absolute -left-40 top-24 -z-10 h-[420px] w-[420px] rounded-full bg-[#F5A800]/10 blur-[110px]" />
        <div className="pointer-events-none absolute -right-44 bottom-0 -z-10 h-[520px] w-[520px] rounded-full bg-zinc-950/5 blur-[130px]" />

        {/* Grain */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='agentAuthNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23agentAuthNoise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="mx-auto grid min-h-screen w-full max-w-[1440px] grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left Visual */}
          <section className="relative hidden min-h-screen overflow-hidden p-8 lg:flex lg:items-center lg:justify-center xl:p-12">
            <div className="absolute inset-6 overflow-hidden rounded-[44px] bg-zinc-950 shadow-[0_50px_130px_-60px_rgba(0,0,0,0.75)] xl:inset-8">
              <img
                alt="Delivery rider on bike"
                className="h-full w-full scale-105 object-cover opacity-60"
                src="https://images.unsplash.com/photo-1558981403-c5f9199a28ad?q=80&w=2070&auto=format&fit=crop"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/85 via-transparent to-zinc-950/25" />
              <div className="absolute inset-0 bg-[#F5A800]/5 mix-blend-overlay" />

              {/* Floating mission card */}
              <div className="float-slow absolute left-8 top-8 rounded-[28px] border border-white/15 bg-white/10 p-4 backdrop-blur-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A800] text-2xl shadow-[0_18px_36px_-20px_rgba(245,168,0,0.85)]">
                    ⚡
                  </div>

                  <div>
                    <div className="text-sm font-black text-white">
                      New pickup signal
                    </div>
                    <div className="mt-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/45">
                      320m from you
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating earnings card */}
              <div className="float-fast absolute bottom-8 right-8 w-[245px] rounded-[30px] border border-white/15 bg-white/10 p-5 backdrop-blur-2xl">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-emerald-200">
                    Completed
                  </span>

                  <span className="text-xs font-black text-white/60">
                    Today
                  </span>
                </div>

                <div className="font-serif italic text-2xl font-bold tracking-[-0.04em] text-white">
                  ₦8,400 earned
                </div>

                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  Flexible campus errands and vendor pickup support.
                </p>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[78%] rounded-full bg-[#F5A800]" />
                </div>
              </div>
            </div>

            <div
              ref={visualRef}
              className="relative z-10 max-w-[540px] transform-gpu transition-transform duration-150 ease-out"
            >
              <Link
                to="/"
                className="mb-10 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl transition hover:bg-white/15"
                aria-label="Bole4us home"
              >
                <img
                  src="/logo.png"
                  alt="Bole4us logo"
                  className="h-10 w-auto object-contain"
                />
              </Link>

              <div className="mb-8 flex h-[76px] w-[76px] items-center justify-center rounded-[28px] bg-[#F5A800] text-4xl shadow-[0_24px_55px_-26px_rgba(245,168,0,0.95)]">
                🛵
              </div>

              <h1
                className="font-serif italic leading-[0.9] tracking-[-0.06em] text-white"
                style={{ fontSize: 'clamp(64px, 6vw, 96px)' }}
              >
                Move fast.
                <br />
                Earn smart.
              </h1>

              <p className="mt-8 max-w-[470px] text-lg font-light leading-relaxed text-white/70">
                Join the campus heat network. Help vendors update stock, support
                pickups, and earn on flexible missions around your area.
              </p>

              <div className="mt-10 grid max-w-[480px] grid-cols-3 overflow-hidden rounded-[28px] border border-white/10 bg-white/10 backdrop-blur-2xl">
                <div className="border-r border-white/10 p-5">
                  <div className="text-2xl font-black text-white">100%</div>
                  <div className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-white/40">
                    Flexible
                  </div>
                </div>

                <div className="border-r border-white/10 p-5">
                  <div className="text-2xl font-black text-white">Free</div>
                  <div className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-white/40">
                    Join
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-2xl font-black text-white">Fast</div>
                  <div className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-white/40">
                    Payouts
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Right Form */}
          <section className="flex min-h-screen items-center justify-center px-5 py-8 sm:px-8 lg:px-10">
            <div
              className="w-full max-w-[620px] transition-all duration-1000 ease-out"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0)' : 'translateY(26px)',
              }}
            >
              <header className="mb-8 text-center lg:text-left">
                {/* Logo kept where it was */}
                <Link
                  to="/"
                  className="mb-7 inline-flex items-center justify-center transition-transform duration-300 hover:scale-105"
                  aria-label="Bole4us home"
                >
                  <img
                    alt="Bole4us logo"
                    className="h-12 w-auto object-contain"
                    src="/logo.png"
                  />
                </Link>

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F5A800]/20 bg-[#F5A800]/10 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#F5A800]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D88B00]">
                    Agent enlistment
                  </span>
                </div>

                <h2
                  className="font-serif italic leading-[0.95] tracking-[-0.055em] text-zinc-950"
                  style={{ fontSize: 'clamp(44px, 6vw, 70px)' }}
                >
                  Join the
                  <br />
                  <span className="bg-gradient-to-r from-[#F5A800] via-[#FFB800] to-[#FF7A00] bg-clip-text not-italic font-semibold text-transparent">
                    active signal pool.
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-[500px] text-[16px] leading-relaxed text-zinc-500 lg:mx-0">
                  Complete your logistics profile to receive vendor missions,
                  pickup requests, and campus-area tasks.
                </p>
              </header>

              <form
                className="relative overflow-hidden rounded-[38px] border border-white/70 bg-white/80 p-5 shadow-[0_32px_100px_-60px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-7 md:p-8"
                onSubmit={handleAuthSubmit}
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#F5A800]/15 blur-3xl" />

                <div className="relative z-10 space-y-7">
                  {/* Profile Details */}
                  <div>
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-serif italic text-2xl font-bold tracking-[-0.03em] text-zinc-950">
                          Agent profile
                        </h3>
                        <p className="mt-1 text-sm text-zinc-500">
                          Tell us who you are and where you operate.
                        </p>
                      </div>

                      <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F5A800]/10 text-2xl sm:flex">
                        🛵
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div className="space-y-2">
                        <label
                          htmlFor="fullName"
                          className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                        >
                          Legal Full Name
                        </label>

                        <input
                          id="fullName"
                          className="w-full rounded-[22px] border border-transparent bg-zinc-100/70 px-5 py-4 text-sm font-bold text-zinc-950 outline-none transition-all placeholder:text-zinc-300 focus:border-[#F5A800]/50 focus:bg-white focus:ring-4 focus:ring-[#F5A800]/10"
                          placeholder="Chuks Emeka"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="quadrant"
                            className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                          >
                            Primary Area
                          </label>

                          <input
                            id="quadrant"
                            className="w-full rounded-[22px] border border-transparent bg-zinc-100/70 px-5 py-4 text-sm font-bold text-zinc-950 outline-none transition-all placeholder:text-zinc-300 focus:border-[#F5A800]/50 focus:bg-white focus:ring-4 focus:ring-[#F5A800]/10"
                            placeholder="e.g. Moremi / Main Gate"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="vehicle"
                            className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                          >
                            Movement Type
                          </label>

                          <div className="relative">
                            <select
                              id="vehicle"
                              value={selectedVehicle}
                              onChange={(event) =>
                                setSelectedVehicle(event.target.value)
                              }
                              className="w-full cursor-pointer appearance-none rounded-[22px] border border-transparent bg-zinc-100/70 px-5 py-4 pr-12 text-sm font-bold text-zinc-950 outline-none transition-all focus:border-[#F5A800]/50 focus:bg-white focus:ring-4 focus:ring-[#F5A800]/10"
                            >
                              {vehicleClasses.map((vehicle) => (
                                <option key={vehicle}>{vehicle}</option>
                              ))}
                            </select>

                            <svg
                              className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-zinc-400"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              aria-hidden="true"
                            >
                              <path
                                d="M4 6l4 4 4-4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Verification Upload */}
                  <div className="space-y-3">
                    <label className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                      ID Verification Upload
                    </label>

                    <label className="group block cursor-pointer rounded-[30px] border-2 border-dashed border-zinc-200 bg-zinc-100/50 p-6 text-center transition-all duration-300 hover:border-[#F5A800]/60 hover:bg-[#F5A800]/5">
                      <input
                        type="file"
                        className="sr-only"
                        accept="image/*,.pdf"
                        onChange={(event) => {
                          const file = event.target.files?.[0];
                          setFileName(file ? file.name : '');
                        }}
                      />

                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-[22px] bg-white text-2xl shadow-[0_18px_45px_-32px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                        🪪
                      </div>

                      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-zinc-500">
                        {fileName || "Upload Driver's License or NIN"}
                      </p>

                      <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                        Accepted formats: JPG, PNG, or PDF. This helps us keep
                        the agent network trusted.
                      </p>
                    </label>
                  </div>

                  {/* Account Access */}
                  <div className="border-t border-zinc-100 pt-7">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-serif italic text-2xl font-bold tracking-[-0.03em] text-zinc-950">
                          Account access
                        </h3>
                        <p className="mt-1 text-sm text-zinc-500">
                          Used for mission alerts and dashboard login.
                        </p>
                      </div>

                      <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F5A800]/10 text-2xl sm:flex">
                        🔐
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                        >
                          Signal Channel Email
                        </label>

                        <input
                          id="email"
                          className="w-full rounded-[22px] border border-transparent bg-zinc-100/70 px-5 py-4 text-sm font-bold text-zinc-950 outline-none transition-all placeholder:text-zinc-300 focus:border-[#F5A800]/50 focus:bg-white focus:ring-4 focus:ring-[#F5A800]/10"
                          placeholder="agent@bole4us.com"
                          type="email"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="password"
                          className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                        >
                          Encryption Key
                        </label>

                        <div className="relative">
                          <input
                            id="password"
                            className="w-full rounded-[22px] border border-transparent bg-zinc-100/70 px-5 py-4 pr-14 text-sm font-bold text-zinc-950 outline-none transition-all placeholder:text-zinc-300 focus:border-[#F5A800]/50 focus:bg-white focus:ring-4 focus:ring-[#F5A800]/10"
                            placeholder="••••••••"
                            type={showPassword ? 'text' : 'password'}
                            required
                            minLength={6}
                          />

                          <button
                            type="button"
                            onClick={() =>
                              setShowPassword((current) => !current)
                            }
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
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {[
                      {
                        icon: '⚡',
                        title: 'Live missions',
                        desc: 'Get tasks near your area.',
                      },
                      {
                        icon: '💸',
                        title: 'Earn flexibly',
                        desc: 'Move when you are free.',
                      },
                      {
                        icon: '📍',
                        title: 'Campus zones',
                        desc: 'Work around familiar spots.',
                      },
                    ].map((benefit) => (
                      <div
                        key={benefit.title}
                        className="rounded-[22px] border border-zinc-100 bg-white/70 p-4"
                      >
                        <div className="mb-3 text-xl">{benefit.icon}</div>
                        <div className="text-sm font-black text-zinc-950">
                          {benefit.title}
                        </div>
                        <div className="mt-1 text-xs leading-relaxed text-zinc-400">
                          {benefit.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Notice */}
                  <div className="rounded-[24px] border border-[#F5A800]/20 bg-[#F5A800]/10 p-4">
                    <div className="flex gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F5A800] text-sm text-white">
                        ✓
                      </div>

                      <p className="text-sm leading-relaxed text-zinc-600">
                        Your profile will be reviewed before activation. Once
                        approved, you can receive pickup, verification, and
                        delivery support missions.
                      </p>
                    </div>
                  </div>

                  <button
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-[24px] bg-[#F5A800] px-8 py-5 text-[14px] font-black uppercase tracking-[0.16em] text-white shadow-[0_24px_60px_-20px_rgba(245,168,0,0.65)] transition-all duration-300 hover:bg-zinc-900 active:scale-95"
                    type="submit"
                  >
                    <span>Begin Duty Enlistment</span>

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
                </div>
              </form>

              <footer className="mt-8 text-center">
                <p className="text-sm text-zinc-500">
                  Already on duty?{' '}
                  <Link
                    to="/register"
                    className="font-black text-[#D88B00] transition-colors hover:text-[#F5A800]"
                  >
                    Login to Control
                  </Link>
                </p>
              </footer>
            </div>
          </section>
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

        .agent-auth-page {
          font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        .float-slow {
          animation: agentFloatSlow 5.5s ease-in-out infinite;
        }

        .float-fast {
          animation: agentFloatFast 4.4s ease-in-out infinite;
        }

        @keyframes agentFloatSlow {
          0%, 100% {
            transform: translateY(0) rotate(-1deg);
          }

          50% {
            transform: translateY(-14px) rotate(2deg);
          }
        }

        @keyframes agentFloatFast {
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

          .agent-auth-page * {
            transition-duration: 0.001ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AgentRegistration;
