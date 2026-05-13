import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    text: "I used to walk five minutes just to hear 'e don finish.' Bole4us saved my afternoon.",
    name: 'Tolu A.',
    tag: '200L, UNILAG',
    role: 'Student',
  },
  {
    text: 'As an agent, I manage three vendors at once. Orders come in automatically. Easy money.',
    name: 'Kola B.',
    tag: 'Agent, Yaba',
    role: 'Agent',
  },
  {
    text: 'My regulars reserve before they even leave the hostel. I waste less and sell more.',
    name: 'Mama Titi',
    tag: 'Vendor, OAU',
    role: 'Vendor',
  },
  {
    text: "The stock badge is everything. Green means go. Red means I don't bother moving.",
    name: 'Seun O.',
    tag: '300L, UI',
    role: 'Student',
  },
  {
    text: '15-minute window is tight enough that nobody abuses it and wide enough for the walk.',
    name: 'Dami F.',
    tag: '400L, LASU',
    role: 'Student',
  },
  {
    text: 'Finally, a tech product that actually understands how campus life works in Nigeria.',
    name: 'Chidi N.',
    tag: 'Agent, Enugu',
    role: 'Agent',
  },
];

const stats = [
  { value: '400+', label: 'Students onboarded' },
  { value: '98%', label: 'Reservation success' },
  { value: '3 min', label: 'Avg. time saved' },
  { value: '12+', label: 'Vendors listed' },
];

const images = [
  {
    src: 'https://pub-d63312c8b711451a9e50fb2916838f4a.r2.dev/bole12.webp',
    alt: 'Bole vendor',
  },
  {
    src: 'https://pub-d63312c8b711451a9e50fb2916838f4a.r2.dev/bole13.webp',
    alt: 'Grill',
  },
  {
    src: 'https://pub-d63312c8b711451a9e50fb2916838f4a.r2.dev/student%20(Bole4u).webp',
    alt: 'Students',
  },
  {
    src: 'https://pub-d63312c8b711451a9e50fb2916838f4a.r2.dev/bole11.webp',
    alt: 'Bole platter',
  },
];

export function SocialProof() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const doubledTestimonials = [...testimonials, ...testimonials];

  const getRoleColor = (role) => {
    switch (role) {
      case 'Agent':
        return 'bg-orange-50 text-orange-700 border-orange-100';
      case 'Vendor':
        return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      default:
        return 'bg-[#F5A800]/10 text-[#D88B00] border-[#F5A800]/20';
    }
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="social-proof-section relative isolate overflow-hidden bg-[#FFFDF8] py-28 sm:py-32"
    >
      {/* Warm premium background */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background: `
            radial-gradient(circle at 15% 18%, rgba(245, 168, 0, 0.13), transparent 30%),
            radial-gradient(circle at 85% 25%, rgba(255, 204, 51, 0.16), transparent 30%),
            linear-gradient(180deg, #FFFFFF 0%, #FFFDF8 42%, #FFF9EA 100%)
          `,
        }}
      />

      <div className="pointer-events-none absolute -left-40 top-24 -z-10 h-[420px] w-[420px] rounded-full bg-[#F5A800]/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-44 bottom-10 -z-10 h-[460px] w-[460px] rounded-full bg-zinc-950/5 blur-[120px]" />

      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='socialNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23socialNoise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1220px] px-6 md:px-10">
        {/* Stats */}
        <div
          className="mb-20 overflow-hidden rounded-[38px] border border-white/70 bg-white/75 shadow-[0_32px_100px_-60px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-1000 sm:mb-24"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <div className="grid grid-cols-2 divide-x divide-y divide-zinc-100 md:grid-cols-4 md:divide-y-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden px-5 py-9 text-center sm:px-8 sm:py-10"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#F5A800]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div
                  className="font-serif italic font-bold leading-none tracking-[-0.05em] text-[#F5A800]"
                  style={{ fontSize: 'clamp(34px, 4vw, 54px)' }}
                >
                  {stat.value}
                </div>

                <div className="mt-3 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400 sm:text-[11px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-[760px] text-center sm:mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#F5A800]" />
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#D88B00]">
              Word on campus
            </span>
          </div>

          <h2
            className="font-serif italic leading-[0.98] tracking-[-0.045em] text-zinc-950"
            style={{ fontSize: 'clamp(42px, 6vw, 74px)' }}
          >
            Real students.
            <br />
            <span className="bg-gradient-to-r from-[#F5A800] via-[#FFB800] to-[#FF7A00] bg-clip-text not-italic font-semibold text-transparent">
              Real relief.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[560px] text-[17px] leading-relaxed text-zinc-500">
            Built around the actual campus food struggle — from students to
            agents to vendors.
          </p>
        </div>
      </div>

      {/* Marquee Testimonials */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-[#FFFDF8] to-transparent sm:w-44" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-[#FFFDF8] to-transparent sm:w-44" />

        <div
          className="testimonial-track flex w-max gap-6 px-6 py-8 sm:px-10"
          onMouseEnter={(event) => {
            event.currentTarget.style.animationPlayState = 'paused';
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.animationPlayState = 'running';
          }}
        >
          {doubledTestimonials.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="group relative w-[320px] shrink-0 overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-7 shadow-[0_28px_80px_-55px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#F5A800]/45 hover:bg-white hover:shadow-[0_40px_110px_-58px_rgba(0,0,0,0.55)] sm:w-[370px] sm:p-8"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#F5A800]/12 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-7 flex items-center justify-between">
                  <span
                    className={`rounded-full border px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] ${getRoleColor(
                      item.role
                    )}`}
                  >
                    {item.role}
                  </span>

                  <div className="flex text-[#F5A800]">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span key={starIndex} className="text-xs">
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                <p className="min-h-[128px] text-[16px] italic leading-[1.75] text-zinc-600">
                  “{item.text}”
                </p>

                <div className="mt-8 flex items-center gap-4 border-t border-zinc-100 pt-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-zinc-950 text-sm font-black text-[#F5A800] shadow-[0_18px_42px_-26px_rgba(0,0,0,0.65)]">
                    {item.role.charAt(0)}
                  </div>

                  <div>
                    <div className="font-serif italic text-[17px] font-bold tracking-[-0.03em] text-zinc-950">
                      {item.name}
                    </div>
                    <div className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                      {item.tag}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

        .social-proof-section {
          font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        .testimonial-track {
          animation: socialScrollLeft 42s linear infinite;
        }

        @keyframes socialScrollLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-track {
            animation: none;
          }

          .social-proof-section * {
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
    </section>
  );
}

export function ImageStrip() {
  const doubledImages = [...images, ...images];

  return (
    <section className="image-strip-section relative isolate overflow-hidden bg-[#FFF9EA] py-20">
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background: `
            radial-gradient(circle at 18% 30%, rgba(245, 168, 0, 0.14), transparent 30%),
            radial-gradient(circle at 84% 60%, rgba(255, 122, 0, 0.1), transparent 28%),
            linear-gradient(180deg, #FFF9EA 0%, #FFFDF8 100%)
          `,
        }}
      />

      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#FFF9EA] to-transparent sm:w-44" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#FFF9EA] to-transparent sm:w-44" />

      <div
        className="image-strip-track flex w-max gap-6 px-6 sm:px-10"
        onMouseEnter={(event) => {
          event.currentTarget.style.animationPlayState = 'paused';
        }}
        onMouseLeave={(event) => {
          event.currentTarget.style.animationPlayState = 'running';
        }}
      >
        {doubledImages.map((image, index) => (
          <div
            key={`${image.alt}-${index}`}
            className="group relative h-[210px] w-[320px] shrink-0 overflow-hidden rounded-[34px] border-[6px] border-white bg-white shadow-[0_30px_90px_-55px_rgba(0,0,0,0.5)] sm:h-[240px] sm:w-[390px]"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 bg-[#F5A800]/5 mix-blend-overlay" />

            <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-xl">
              {image.alt}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .image-strip-track {
          animation: imageStripScroll 34s linear infinite;
        }

        @keyframes imageStripScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .image-strip-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

export function FinalCTA() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="final-cta-section relative isolate overflow-hidden bg-[#FFFDF8] px-6 py-32 text-center sm:py-40">
      {/* Premium warm background */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background: `
            radial-gradient(circle at 50% 20%, rgba(245, 168, 0, 0.18), transparent 34%),
            radial-gradient(circle at 18% 80%, rgba(255, 204, 51, 0.14), transparent 28%),
            linear-gradient(180deg, #FFFDF8 0%, #FFF9EA 52%, #FFFFFF 100%)
          `,
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-12 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[#F5A800]/10 blur-[120px]" />

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='finalCtaNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23finalCtaNoise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-[860px] transition-all duration-[1000ms] ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(36px)',
        }}
      >
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-[#F5A800]" />
          <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#D88B00]">
            Don’t miss your portion
          </span>
        </div>

        <h2
          className="font-serif italic leading-[0.95] tracking-[-0.055em] text-zinc-950"
          style={{ fontSize: 'clamp(48px, 7vw, 90px)' }}
        >
          Don&apos;t walk for
          <br />
          <span className="bg-gradient-to-r from-[#F5A800] via-[#FFB800] to-[#FF7A00] bg-clip-text not-italic font-semibold text-transparent">
            nothing.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-[590px] text-[18px] leading-relaxed text-zinc-500">
          Check what is available before you move. Reserve your bole and arrive
          when your portion is still hot.
        </p>

        <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/register"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-[24px] bg-[#F5A800] px-9 py-5 text-[16px] font-black text-white shadow-[0_24px_60px_-20px_rgba(245,168,0,0.65)] transition-all duration-300 hover:bg-zinc-900 active:scale-95 sm:w-auto"
          >
            <span>Find your portion now</span>

            <svg
              className="transition-transform duration-300 group-hover:translate-x-1"
              width="19"
              height="19"
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
            className="inline-flex w-full items-center justify-center rounded-[24px] border border-zinc-200 bg-white/70 px-9 py-5 text-[16px] font-black text-zinc-950 shadow-[0_18px_50px_-32px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:border-zinc-300 hover:bg-white sm:w-auto"
          >
            I’m a vendor
          </Link>
        </div>

        <div className="mx-auto mt-10 flex max-w-xl flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          {['No app download', 'Works instantly', 'Free to use'].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#F5A800]" />
              {item}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

        .final-cta-section {
          font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        @media (prefers-reduced-motion: reduce) {
          .final-cta-section * {
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
    </section>
  );
}
