'use client';

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const steps = [
  {
    num: '01',
    icon: '📍',
    title: 'Find vendors near you',
    desc: 'Open map or list view. See every bole vendor within walking distance with real-time stock levels updated by on-ground agents.',
    tag: 'Map + list view',
    accent: '#F5A800',
    img: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=900&q=80',
    imgAlt: 'Map view of vendors',
  },
  {
    num: '02',
    icon: '🔥',
    title: 'Check availability instantly',
    desc: 'Stock indicators — Plenty, Medium, Almost Finished — tell you exactly what to expect before you move an inch.',
    tag: 'Live stock updates',
    accent: '#F97316',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80',
    imgAlt: 'Bole on the grill',
  },
  {
    num: '03',
    icon: '⚡',
    title: 'Reserve your portion',
    desc: 'Lock in your order in seconds. Your reservation holds your spot in the queue for 15 minutes while you make your way over.',
    tag: '15-min hold',
    accent: '#22C55E',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80',
    imgAlt: 'Reserving on phone',
  },
];

export default function HowItWorks() {
  const [visible, setVisible] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((el, i) => {
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisible((current) =>
                current.includes(i) ? current : [...current, i]
              );
            }, i * 130);

            observer.disconnect();
          }
        },
        { threshold: 0.22 }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <section
      id="how-it-works"
      className="how-section relative isolate overflow-hidden bg-[#FFFDF8] py-28 sm:py-32"
    >
      {/* Soft background glow, no grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background: `
            radial-gradient(circle at 14% 18%, rgba(245, 168, 0, 0.13), transparent 30%),
            radial-gradient(circle at 86% 24%, rgba(255, 204, 51, 0.18), transparent 28%),
            linear-gradient(180deg, #FFFFFF 0%, #FFFDF8 36%, #FFF9EA 100%)
          `,
        }}
      />

      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-[360px] w-[360px] rounded-full bg-[#F5A800]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-[460px] w-[460px] rounded-full bg-zinc-950/5 blur-[120px]" />

      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter2)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1220px] px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-[720px] text-center sm:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#F5A800]" />
            <span className="font-['DM_Sans'] text-[11px] font-black uppercase tracking-[0.22em] text-[#D88B00]">
              The Process
            </span>
          </div>

          <h2
            className="font-serif italic leading-[0.98] tracking-[-0.045em] text-zinc-950"
            style={{ fontSize: 'clamp(44px, 6vw, 76px)' }}
          >
            From hostel to bole
            <br />
            <span className="not-italic bg-gradient-to-r from-[#F5A800] via-[#FFB800] to-[#FF7A00] bg-clip-text font-semibold text-transparent">
              in three taps.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[560px] font-['DM_Sans'] text-[18px] leading-relaxed text-zinc-500">
            No calls. No guessing. No wasted trips. Just the smoky goodness you
            crave.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mb-20">
          {/* Soft connecting line */}
          <div className="absolute left-[16%] right-[16%] top-[120px] hidden h-px bg-gradient-to-r from-transparent via-[#F5A800]/35 to-transparent md:block" />

          <div className="grid grid-cols-1 gap-7 md:grid-cols-3 lg:gap-8">
            {steps.map((step, i) => {
              const isVisible = visible.includes(i);

              return (
                <article
                  key={step.num}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  className="group relative overflow-hidden rounded-[36px] border border-white/70 bg-white/75 shadow-[0_28px_80px_-50px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#F5A800]/45 hover:bg-white hover:shadow-[0_40px_100px_-52px_rgba(0,0,0,0.5)]"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? 'translateY(0) scale(1)'
                      : 'translateY(42px) scale(0.98)',
                    transition:
                      'opacity 800ms cubic-bezier(.16,1,.3,1), transform 800ms cubic-bezier(.16,1,.3,1), border-color 300ms ease, box-shadow 300ms ease, background-color 300ms ease',
                  }}
                >
                  {/* Card glow */}
                  <div
                    className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `${step.accent}22`,
                      opacity: 0.65,
                    }}
                  />

                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={step.img}
                      alt={step.imgAlt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/25 to-transparent" />
                    <div className="absolute inset-0 bg-zinc-950/5 transition-colors duration-500 group-hover:bg-zinc-950/0" />

                    {/* Step number */}
                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/70 bg-white/85 font-['DM_Sans'] text-[12px] font-black text-zinc-950 shadow-[0_14px_36px_-22px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                      {step.num}
                    </div>

                    {/* Tag */}
                    <div
                      className="absolute right-5 top-5 rounded-full border px-3 py-1.5 font-['DM_Sans'] text-[9px] font-black uppercase tracking-[0.16em] backdrop-blur-xl"
                      style={{
                        color: step.accent,
                        background: `${step.accent}12`,
                        borderColor: `${step.accent}28`,
                      }}
                    >
                      {step.tag}
                    </div>
                  </div>

                  <div className="relative p-7 pt-0 sm:p-8 sm:pt-0">
                    {/* Floating icon */}
                    <div
                      className="-mt-8 mb-6 flex h-16 w-16 items-center justify-center rounded-[24px] border bg-white text-3xl shadow-[0_18px_45px_-28px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105"
                      style={{
                        borderColor: `${step.accent}28`,
                        boxShadow: `0 18px 45px -28px ${step.accent}`,
                      }}
                    >
                      {step.icon}
                    </div>

                    <h3 className="font-serif italic text-[26px] font-bold leading-tight tracking-[-0.03em] text-zinc-950">
                      {step.title}
                    </h3>

                    <p className="mt-4 font-['DM_Sans'] text-[15px] leading-[1.75] text-zinc-500">
                      {step.desc}
                    </p>

                    <div className="mt-7 flex items-center justify-between border-t border-zinc-100 pt-5">
                      <span className="font-['DM_Sans'] text-[11px] font-black uppercase tracking-[0.16em] text-zinc-400">
                        Step {step.num}
                      </span>

                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 group-hover:translate-x-1"
                        style={{
                          background: step.accent,
                          boxShadow: `0 16px 30px -18px ${step.accent}`,
                        }}
                      >
                        <svg
                          width="15"
                          height="15"
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
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* CTA Strip */}
        <div className="relative overflow-hidden rounded-[40px] bg-zinc-950 p-8 shadow-[0_40px_110px_-55px_rgba(0,0,0,0.75)] sm:p-10 lg:p-12">
          {/* Soft yellow glow */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#F5A800]/25 blur-[80px]" />
          <div className="pointer-events-none absolute -right-24 bottom-[-120px] h-80 w-80 rounded-full bg-[#F5A800]/10 blur-[100px]" />

          {/* Noise overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter3)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-[28px] bg-[#F5A800] p-4 text-4xl shadow-[0_24px_55px_-26px_rgba(245,168,0,0.95)] sm:h-20 sm:w-20">
                🔥
              </div>

              <div>
                <div className="font-serif italic text-[30px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[34px]">
                  Ready to find your portion?
                </div>

                <p className="mt-2 max-w-[520px] font-['DM_Sans'] text-[15px] leading-relaxed text-zinc-400 sm:text-base">
                  It takes under 30 seconds to find your first vendor and
                  reserve your bole before leaving your hostel.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl sm:block">
                <div className="font-['DM_Sans'] text-[11px] font-black uppercase tracking-[0.16em] text-zinc-500">
                  Average pickup
                </div>
                <div className="mt-1 font-['DM_Sans'] text-xl font-black text-white">
                  15 mins
                </div>
              </div>

              <Link
                to="/register"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-[24px] bg-[#F5A800] px-8 py-5 font-['DM_Sans'] text-[15px] font-black text-white shadow-[0_24px_60px_-20px_rgba(245,168,0,0.65)] transition-all duration-300 hover:bg-white hover:text-zinc-950 active:scale-95 sm:w-auto"
              >
                <span>Get started now</span>

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
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

        .how-section {
          font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        @media (prefers-reduced-motion: reduce) {
          .how-section * {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
    </section>
  );
}
