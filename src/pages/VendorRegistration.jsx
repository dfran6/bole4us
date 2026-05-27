import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const categories = [
  'Classic Bole',
  'Bole + Fish',
  'Bole + Groundnut',
  'Premium Sides',
];

const VendorRegistration = () => {
  const [loaded, setLoaded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Classic Bole');

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
    navigate('/vendor');
  };

  return (
    <div className="vendor-auth-page min-h-screen overflow-hidden bg-[#FFFDF8] font-['DM_Sans'] text-zinc-950 selection:bg-[#F5A800]/30 selection:text-black">
      <main className="relative isolate min-h-screen">
        {/* Warm background */}
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
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='vendorAuthNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23vendorAuthNoise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="mx-auto grid min-h-screen w-full max-w-[1440px] grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left Visual */}
          <section className="relative hidden min-h-screen overflow-hidden p-8 lg:flex lg:items-center lg:justify-center xl:p-12">
            <div className="absolute inset-6 overflow-hidden rounded-[44px] bg-zinc-950 shadow-[0_50px_130px_-60px_rgba(0,0,0,0.75)] xl:inset-8">
              <img
                alt="Bole vendor grilling food"
                className="h-full w-full object-cover opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArPl-zno48uAKmTk62d9vB4ntdnt8Hf5yRswm1w8gY587ewJlIri5zDojQt1sZfpUZDBcumJCO6xjIu8l1jNHAPPlrcEOrKtX4Gj-CNxB1cldPqL1Oy4fI3QqCb0rLFYRQUs55i6L897QmhdGjVIUdGde5SNwZbUkW2IOoldgeRIV_rsXttqhxDFYo9U0mfoPWK8Xzl9_mHkk4CYUPUmrmhZjfbCc_gtAp9LY8MYrTKYsMf-0PokmVFGLYAy8Bo_GXfAxmGGgTJu8"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/45 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/25" />
              <div className="absolute inset-0 bg-[#F5A800]/5 mix-blend-overlay" />

              {/* Floating card 1 */}
              <div className="float-slow absolute left-8 top-8 rounded-[28px] border border-white/15 bg-white/10 p-4 backdrop-blur-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A800] text-2xl shadow-[0_18px_36px_-20px_rgba(245,168,0,0.85)]">
                    🏪
                  </div>

                  <div>
                    <div className="text-sm font-black text-white">
                      Vendor dashboard
                    </div>
                    <div className="mt-0.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/45">
                      Orders in real time
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card 2 */}
              <div className="float-fast absolute bottom-8 right-8 w-[235px] rounded-[30px] border border-white/15 bg-white/10 p-5 backdrop-blur-2xl">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-emerald-200">
                    New order
                  </span>

                  <span className="text-xs font-black text-white/60">
                    ₦1,500
                  </span>
                </div>

                <div className="font-serif italic text-2xl font-bold tracking-[-0.04em] text-white">
                  Bole + Fish
                </div>

                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  Reservation confirmed. Customer pickup in 15 minutes.
                </p>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[72%] rounded-full bg-[#F5A800]" />
                </div>
              </div>
            </div>

            <div
              ref={visualRef}
              className="relative z-10 max-w-[540px] transform-gpu transition-transform duration-150 ease-out"
            >
              <Link
                to="/"
                className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-xl transition hover:bg-white/15"
              >
                <span className="font-serif italic text-2xl font-black tracking-[-0.08em] text-[#F5A800]">
                  bole4us
                </span>
              </Link>

              <div className="mb-8 flex h-[76px] w-[76px] items-center justify-center rounded-[28px] bg-[#F5A800] text-4xl shadow-[0_24px_55px_-26px_rgba(245,168,0,0.95)]">
                🔥
              </div>

              <h1
                className="font-serif italic leading-[0.9] tracking-[-0.06em] text-white"
                style={{ fontSize: 'clamp(64px, 6vw, 96px)' }}
              >
                Empower
                <br />
                your grill.
              </h1>

              <p className="mt-8 max-w-[470px] text-lg font-light leading-relaxed text-white/70">
                Turn your bole stand into a digital storefront. Accept
                reservations, update stock, and sell faster without technical
                stress.
              </p>

              <div className="mt-10 grid max-w-[480px] grid-cols-3 overflow-hidden rounded-[28px] border border-white/10 bg-white/10 backdrop-blur-2xl">
                <div className="border-r border-white/10 p-5">
                  <div className="text-2xl font-black text-white">12+</div>
                  <div className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-white/40">
                    Vendors
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
                    Hold time
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
                    Vendor onboarding
                  </span>
                </div>

                <h2
                  className="font-serif italic leading-[0.95] tracking-[-0.055em] text-zinc-950"
                  style={{ fontSize: 'clamp(44px, 6vw, 70px)' }}
                >
                  Launch your
                  <br />
                  <span className="bg-gradient-to-r from-[#F5A800] via-[#FFB800] to-[#FF7A00] bg-clip-text not-italic font-semibold text-transparent">
                    digital grill.
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-[500px] text-[16px] leading-relaxed text-zinc-500 lg:mx-0">
                  Set up your business profile, pin your location, and start
                  accepting reservations from nearby students.
                </p>
              </header>

              <form
                className="relative overflow-hidden rounded-[38px] border border-white/70 bg-white/80 p-5 shadow-[0_32px_100px_-60px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-7 md:p-8"
                onSubmit={handleAuthSubmit}
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#F5A800]/15 blur-3xl" />

                <div className="relative z-10 space-y-7">
                  {/* Business Info */}
                  <div>
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-serif italic text-2xl font-bold tracking-[-0.03em] text-zinc-950">
                          Business details
                        </h3>
                        <p className="mt-1 text-sm text-zinc-500">
                          Tell students what you sell and where to find you.
                        </p>
                      </div>

                      <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F5A800]/10 text-2xl sm:flex">
                        🏪
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="businessName"
                          className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                        >
                          Business Name
                        </label>

                        <input
                          id="businessName"
                          className="w-full rounded-[22px] border border-transparent bg-zinc-100/70 px-5 py-4 text-sm font-bold text-zinc-950 outline-none transition-all placeholder:text-zinc-300 focus:border-[#F5A800]/50 focus:bg-white focus:ring-4 focus:ring-[#F5A800]/10"
                          placeholder="Mama Titi's Grill"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="category"
                          className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                        >
                          Grill Category
                        </label>

                        <div className="relative">
                          <select
                            id="category"
                            value={selectedCategory}
                            onChange={(event) =>
                              setSelectedCategory(event.target.value)
                            }
                            className="w-full cursor-pointer appearance-none rounded-[22px] border border-transparent bg-zinc-100/70 px-5 py-4 pr-12 text-sm font-bold text-zinc-950 outline-none transition-all focus:border-[#F5A800]/50 focus:bg-white focus:ring-4 focus:ring-[#F5A800]/10"
                          >
                            {categories.map((category) => (
                              <option key={category}>{category}</option>
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

                  {/* Location */}
                  <div className="space-y-3">
                    <label className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                      Kitchen Location
                    </label>

                    <div className="group relative overflow-hidden rounded-[30px] border border-zinc-200 bg-zinc-100 shadow-inner">
                      <img
                        alt="Map preview"
                        className="h-44 w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 sm:h-48"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0-lLoNYkBjqD6SiGtWrKPpcI-raZfOYu0tlOLziIQYUV39F6ipFkVBE8ftdtAndpm3A_70ftFDRufOb2enFYBSNgQEMAkNPHN-8gPgH5nplD3qddBv2mVwimfbxMU2nnE3XN2RWwVD-yljsOs6xClcJvMFHW5ddLZ0NywXT5pc5NakqpbiAPggOaxs5oPHwxRT6YPc0RKwvxS9R4MC7w1i2okJRkqY24-w18WkORXrtBjYXcuaD27aRuK6uCnrdbj0F0mOlfZfW4"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/55 via-transparent to-transparent" />

                      {/* Map pin */}
                      <div className="absolute left-1/2 top-[45%] h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5A800] shadow-[0_0_0_10px_rgba(245,168,0,0.18)]">
                        <span className="absolute inset-0 animate-ping rounded-full bg-[#F5A800]/60" />
                        <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <button
                          type="button"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-[20px] bg-white/90 px-5 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-zinc-950 shadow-[0_18px_45px_-28px_rgba(0,0,0,0.65)] backdrop-blur-xl transition-all duration-300 hover:bg-zinc-950 hover:text-white"
                        >
                          <span>📍</span>
                          Select precision point
                        </button>
                      </div>
                    </div>

                    <p className="ml-1 text-xs leading-relaxed text-zinc-400">
                      Pin your exact selling point so students can find you
                      quickly during pickup.
                    </p>
                  </div>

                  {/* Contact and Security */}
                  <div className="border-t border-zinc-100 pt-7">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-serif italic text-2xl font-bold tracking-[-0.03em] text-zinc-950">
                          Contact & security
                        </h3>
                        <p className="mt-1 text-sm text-zinc-500">
                          Used for order alerts and dashboard access.
                        </p>
                      </div>

                      <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F5A800]/10 text-2xl sm:flex">
                        🔐
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                        >
                          Personal Phone
                        </label>

                        <input
                          id="phone"
                          className="w-full rounded-[22px] border border-transparent bg-zinc-100/70 px-5 py-4 text-sm font-bold text-zinc-950 outline-none transition-all placeholder:text-zinc-300 focus:border-[#F5A800]/50 focus:bg-white focus:ring-4 focus:ring-[#F5A800]/10"
                          placeholder="+234 801 234 5678"
                          type="tel"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="password"
                          className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                        >
                          Security Key
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
                        icon: '📦',
                        title: 'Manage stock',
                        desc: 'Update availability fast.',
                      },
                      {
                        icon: '⚡',
                        title: 'Get orders',
                        desc: 'Reservations come in live.',
                      },
                      {
                        icon: '💰',
                        title: 'Sell more',
                        desc: 'Reduce waste and missed sales.',
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
                        After onboarding, you’ll be able to update stock,
                        receive reservations, and manage pickup windows from
                        your vendor dashboard.
                      </p>
                    </div>
                  </div>

                  <button
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-[24px] bg-[#F5A800] px-8 py-5 text-[14px] font-black uppercase tracking-[0.16em] text-white shadow-[0_24px_60px_-20px_rgba(245,168,0,0.65)] transition-all duration-300 hover:bg-zinc-900 active:scale-95"
                    type="submit"
                  >
                    <span>Launch Business Profile</span>

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
                  Already have a vendor account?{' '}
                  <Link
                    to="/register"
                    className="font-black text-[#D88B00] transition-colors hover:text-[#F5A800]"
                  >
                    Login
                  </Link>
                </p>
              </footer>
            </div>
          </section>
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

        .vendor-auth-page {
          font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        .float-slow {
          animation: vendorFloatSlow 5.5s ease-in-out infinite;
        }

        .float-fast {
          animation: vendorFloatFast 4.4s ease-in-out infinite;
        }

        @keyframes vendorFloatSlow {
          0%, 100% {
            transform: translateY(0) rotate(-1deg);
          }

          50% {
            transform: translateY(-14px) rotate(2deg);
          }
        }

        @keyframes vendorFloatFast {
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

          .vendor-auth-page * {
            transition-duration: 0.001ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default VendorRegistration;
