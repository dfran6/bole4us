import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  const heroRef = useRef(null);
  const visualRef = useRef(null);
  const btnRef = useRef(null);

  const vendors = [
    {
      name: 'Mama Titi',
      dist: '80m',
      stock: 'plenty',
      eta: '8 min',
      rating: '4.9',
    },
    {
      name: 'Iya Bose',
      dist: '210m',
      stock: 'medium',
      eta: '12 min',
      rating: '4.8',
    },
    {
      name: 'Uncle Emeka',
      dist: '340m',
      stock: 'low',
      eta: '18 min',
      rating: '4.7',
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 120);
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let rafId = null;

    const resetMotion = () => {
      if (visualRef.current) {
        visualRef.current.style.transform =
          'translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg)';
      }

      if (btnRef.current) {
        btnRef.current.style.transform = 'translate3d(0px, 0px, 0px)';
      }

      if (heroRef.current) {
        heroRef.current.style.setProperty('--cursor-x', '0px');
        heroRef.current.style.setProperty('--cursor-y', '0px');
      }
    };

    const handleMouseMove = (event) => {
      if (prefersReducedMotion) return;

      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const normalizedX = event.clientX / window.innerWidth - 0.5;
        const normalizedY = event.clientY / window.innerHeight - 0.5;

        if (heroRef.current) {
          heroRef.current.style.setProperty(
            '--cursor-x',
            `${normalizedX * 180}px`
          );
          heroRef.current.style.setProperty(
            '--cursor-y',
            `${normalizedY * 140}px`
          );
        }

        if (visualRef.current) {
          visualRef.current.style.transform = `
            translate3d(${normalizedX * 18}px, ${normalizedY * 14}px, 0)
            rotateX(${normalizedY * -4}deg)
            rotateY(${normalizedX * 5}deg)
          `;
        }

        if (btnRef.current) {
          const rect = btnRef.current.getBoundingClientRect();
          const buttonCenterX = rect.left + rect.width / 2;
          const buttonCenterY = rect.top + rect.height / 2;

          const distance = Math.hypot(
            event.clientX - buttonCenterX,
            event.clientY - buttonCenterY
          );

          if (distance < 110) {
            btnRef.current.style.transform = `
              translate3d(
                ${(event.clientX - buttonCenterX) * 0.22}px,
                ${(event.clientY - buttonCenterY) * 0.22}px,
                0
              )
            `;
          } else {
            btnRef.current.style.transform = 'translate3d(0px, 0px, 0px)';
          }
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', resetMotion);

    return () => {
      clearTimeout(timer);
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', resetMotion);
    };
  }, []);

  const getStockStyles = (stock) => {
    const baseStyle =
      'text-[9px] font-black px-2.5 py-1 rounded-full border uppercase tracking-[0.16em]';

    switch (stock) {
      case 'plenty':
        return `${baseStyle} bg-emerald-50 text-emerald-700 border-emerald-100`;
      case 'medium':
        return `${baseStyle} bg-amber-50 text-amber-700 border-amber-100`;
      default:
        return `${baseStyle} bg-rose-50 text-rose-700 border-rose-100`;
    }
  };

  return (
    <section
      ref={heroRef}
      className="hero-section relative isolate min-h-screen w-full overflow-hidden bg-[#FFFDF8] pt-24 lg:pt-20"
      style={{
        '--cursor-x': '0px',
        '--cursor-y': '0px',
      }}
    >
      {/* Premium background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background: `
            radial-gradient(circle at calc(72% + var(--cursor-x)) calc(24% + var(--cursor-y)), rgba(245, 168, 0, 0.22), transparent 34%),
            radial-gradient(circle at 10% 20%, rgba(255, 224, 138, 0.35), transparent 28%),
            linear-gradient(180deg, #FFFDF8 0%, #FFF9EA 48%, #FFFFFF 100%)
          `,
        }}
      />

      {/* Soft geometric accents */}
      <div className="pointer-events-none absolute left-[-140px] top-[18%] -z-10 h-[360px] w-[360px] rounded-full bg-[#F5A800]/10 blur-[90px]" />
      <div className="pointer-events-none absolute right-[-180px] bottom-[-120px] -z-10 h-[520px] w-[520px] rounded-full bg-[#111827]/5 blur-[110px]" />

      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1220px] grid-cols-1 items-center gap-14 px-6 pb-20 sm:px-8 lg:min-h-[calc(100vh-80px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10">
        {/* Left Content */}
        <div
          className="max-w-[680px] transition-all duration-1000 ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(32px)',
          }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F5A800] opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#F5A800]" />
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-zinc-700">
              Live vendor stock on campus
            </span>
          </div>

          <h1
            className="font-serif italic max-w-[760px] leading-[0.9] tracking-[-0.055em] text-zinc-950"
            style={{ fontSize: 'clamp(56px, 8vw, 104px)' }}
          >
            <span className="block not-italic opacity-90">Skip the</span>

            <span className="block">
              queue.{' '}
              <span className="hero-accent not-italic bg-gradient-to-r from-[#F5A800] via-[#FFB800] to-[#FF7A00] bg-clip-text font-semibold text-transparent">
                Get your bole.
              </span>
            </span>
          </h1>

          <p className="mt-7 max-w-[570px] text-[18px] leading-[1.75] text-zinc-600 sm:text-[20px]">
            Discover nearby bole vendors, see what is still available, reserve
            your portion, and pick it up when it is hot — without wasting time
            in line.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              ref={btnRef}
              to="/register"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-[24px] bg-[#F5A800] px-8 py-5 text-[15px] font-black text-white shadow-[0_24px_60px_-20px_rgba(245,168,0,0.65)] transition-all duration-300 hover:bg-zinc-900 active:scale-95 sm:w-auto"
            >
              <span>Find vendors now</span>

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
            </Link>

            <Link
              to="/login"
              className="inline-flex w-full items-center justify-center rounded-[24px] border border-zinc-200 bg-white/70 px-8 py-5 text-[15px] font-black text-zinc-900 shadow-[0_18px_50px_-32px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:border-zinc-300 hover:bg-white sm:w-auto"
            >
              I’m a vendor
            </Link>
          </div>

          {/* Trust metrics */}
          <div className="mt-12 grid max-w-[590px] grid-cols-3 divide-x divide-zinc-200 overflow-hidden rounded-[28px] border border-zinc-200/80 bg-white/55 shadow-[0_24px_80px_-45px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="p-5">
              <div className="text-2xl font-black tracking-[-0.04em] text-zinc-950">
                30+
              </div>
              <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-500">
                Vendors
              </div>
            </div>

            <div className="p-5">
              <div className="text-2xl font-black tracking-[-0.04em] text-zinc-950">
                12k+
              </div>
              <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-500">
                Orders
              </div>
            </div>

            <div className="p-5">
              <div className="text-2xl font-black tracking-[-0.04em] text-zinc-950">
                15m
              </div>
              <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-500">
                Avg pickup
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div
          className="relative mx-auto flex w-full max-w-[560px] items-center justify-center perspective-[1200px] transition-transform duration-150 ease-out lg:justify-end"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(34px)',
            transition:
              'opacity 1000ms ease, transform 1000ms ease, filter 1000ms ease',
          }}
        >
          <div
            ref={visualRef}
            className="relative h-[610px] w-[320px] transform-gpu transition-transform duration-150 ease-out sm:h-[650px] sm:w-[350px]"
          >
            {/* Decorative orbital ring */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F5A800]/20" />
            <div className="absolute left-1/2 top-1/2 -z-10 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-950/10" />

            {/* Behind-card glow */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[520px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-[80px] bg-gradient-to-b from-[#F5A800]/30 via-[#F5A800]/10 to-transparent blur-3xl" />

            {/* Floating location card */}
            <div className="float-slow absolute -left-12 top-20 z-30 hidden w-[190px] rounded-[28px] border border-white/70 bg-white/75 p-4 shadow-[0_28px_70px_-32px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:block">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-950 text-white shadow-lg">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 21s7-4.7 7-11a7 7 0 1 0-14 0c0 6.3 7 11 7 11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-emerald-700">
                  Nearby
                </span>
              </div>

              <div className="text-sm font-black text-zinc-950">
                3 vendors within 400m
              </div>
              <div className="mt-1 text-xs font-medium leading-relaxed text-zinc-500">
                Fresh bole spots around your hostel.
              </div>
            </div>

            {/* Floating reserved card */}
            <div className="float-fast absolute -right-12 bottom-28 z-30 hidden w-[210px] rounded-[28px] border border-white/70 bg-white/80 p-4 shadow-[0_28px_70px_-32px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F5A800] to-[#FF7A00] text-xl shadow-[0_16px_32px_-14px_rgba(245,168,0,0.8)]">
                  🔥
                </div>

                <div>
                  <div className="text-sm font-black text-zinc-950">
                    Reserved!
                  </div>
                  <div className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">
                    Pickup in 15m
                  </div>
                </div>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-100">
                <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-[#F5A800] to-[#FF7A00]" />
              </div>
            </div>

            {/* Main phone shell */}
            <div className="relative h-full w-full overflow-hidden rounded-[54px] border-[10px] border-zinc-950 bg-zinc-950 shadow-[0_50px_120px_-32px_rgba(0,0,0,0.65)]">
              {/* Phone notch */}
              <div className="absolute left-1/2 top-0 z-30 h-8 w-36 -translate-x-1/2 rounded-b-[22px] bg-zinc-950" />

              {/* Phone screen */}
              <div className="relative h-full w-full overflow-hidden rounded-[42px] bg-[#FFF9EA]">
                <img
                  src="https://pub-d63312c8b711451a9e50fb2916838f4a.r2.dev/Bole%20home.jpg"
                  alt="Fresh bole vendor preview"
                  className="absolute inset-0 h-full w-full object-cover opacity-[0.42] mix-blend-multiply"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-[#FFF7DF]/70 to-white" />
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/95 to-transparent" />

                <div className="relative z-10 flex h-full flex-col px-5 pb-5 pt-11">
                  {/* App header */}
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                        Good afternoon
                      </div>
                      <div className="mt-1 text-2xl font-black tracking-[-0.08em] text-zinc-950">
                        bole4us
                      </div>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-[0_14px_40px_-24px_rgba(0,0,0,0.45)]">
                      <span className="text-lg">👋</span>
                    </div>
                  </div>

                  {/* Search card */}
                  <div className="mb-4 rounded-[26px] border border-white/80 bg-white/80 p-3.5 shadow-[0_18px_55px_-35px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                    <div className="flex items-center gap-3 rounded-[20px] bg-zinc-100/80 px-4 py-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-zinc-500"
                        aria-hidden="true"
                      >
                        <path
                          d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                        />
                      </svg>

                      <span className="text-xs font-bold text-zinc-500">
                        Search nearby vendors
                      </span>
                    </div>
                  </div>

                  {/* Highlight reservation card */}
                  <div className="mb-4 overflow-hidden rounded-[30px] bg-zinc-950 p-4 text-white shadow-[0_28px_70px_-36px_rgba(0,0,0,0.8)]">
                    <div className="mb-5 flex items-start justify-between">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/50">
                          Hot deal
                        </div>
                        <div className="mt-1 text-xl font-black tracking-[-0.06em]">
                          Plantain + fish
                        </div>
                      </div>

                      <div className="rounded-full bg-[#F5A800] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-zinc-950">
                        ₦1,500
                      </div>
                    </div>

                    <div className="flex items-center justify-between rounded-[22px] bg-white/10 p-3 backdrop-blur-xl">
                      <div>
                        <div className="text-xs font-black">Mama Titi</div>
                        <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/50">
                          80m away
                        </div>
                      </div>

                      <button
                        type="button"
                        className="rounded-2xl bg-white px-4 py-2 text-xs font-black text-zinc-950"
                      >
                        Reserve
                      </button>
                    </div>
                  </div>

                  {/* Vendor list */}
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-black tracking-[-0.04em] text-zinc-950">
                      Vendors near you
                    </h3>

                    <button
                      type="button"
                      className="text-[11px] font-black text-[#D88B00]"
                    >
                      See all
                    </button>
                  </div>

                  <div className="flex flex-col gap-3">
                    {vendors.map((vendor, index) => (
                      <div
                        key={vendor.name}
                        className="vendor-card rounded-[26px] border border-white/75 bg-white/82 p-3.5 shadow-[0_16px_50px_-36px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
                        style={{
                          animationDelay: `${index * 120}ms`,
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5A800] to-[#FF7A00] text-lg shadow-[0_16px_36px_-20px_rgba(245,168,0,0.9)]">
                            🔥
                            <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-3">
                              <div className="truncate text-[13px] font-black text-zinc-950">
                                {vendor.name}
                              </div>

                              <span className={getStockStyles(vendor.stock)}>
                                {vendor.stock}
                              </span>
                            </div>

                            <div className="mt-1.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-500">
                              <span>{vendor.dist}</span>
                              <span className="h-1 w-1 rounded-full bg-zinc-300" />
                              <span>{vendor.eta}</span>
                              <span className="h-1 w-1 rounded-full bg-zinc-300" />
                              <span>★ {vendor.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom mini navigation */}
                  <div className="mt-auto rounded-[28px] border border-zinc-200/70 bg-white/85 p-2 shadow-[0_18px_55px_-35px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                    <div className="grid grid-cols-4 gap-1">
                      {['Home', 'Map', 'Orders', 'Me'].map((item, index) => (
                        <button
                          key={item}
                          type="button"
                          className={`rounded-2xl px-2 py-2.5 text-[10px] font-black ${
                            index === 0
                              ? 'bg-zinc-950 text-white'
                              : 'text-zinc-400'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small glow at phone base */}
            <div className="absolute -bottom-8 left-1/2 -z-10 h-12 w-[260px] -translate-x-1/2 rounded-full bg-zinc-950/25 blur-2xl" />
          </div>
        </div>
      </div>

      <style>{`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

  .hero-section {
    font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  .font-serif {
    font-family: 'Playfair Display', serif;
  }

  .hero-accent {
    text-shadow: 0 24px 70px rgba(245, 168, 0, 0.25);
  }

  .vendor-card {
    animation: cardIn 700ms ease both;
  }

  .float-slow {
    animation: floatSlow 5.5s ease-in-out infinite;
  }

  .float-fast {
    animation: floatFast 4.2s ease-in-out infinite;
  }

  @keyframes cardIn {
    from {
      opacity: 0;
      transform: translateY(14px) scale(0.98);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes floatSlow {
    0%, 100% {
      transform: translateY(0) rotate(-2deg);
    }

    50% {
      transform: translateY(-16px) rotate(2deg);
    }
  }

  @keyframes floatFast {
    0%, 100% {
      transform: translateY(0) rotate(2deg);
    }

    50% {
      transform: translateY(14px) rotate(-2deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .vendor-card,
    .float-slow,
    .float-fast {
      animation: none;
    }
  }
`}</style>
    </section>
  );
}
