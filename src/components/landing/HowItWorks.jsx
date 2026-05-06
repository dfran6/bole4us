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
    img: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&q=80',
    imgAlt: 'Map view of vendors',
  },
  {
    num: '02',
    icon: '🔥',
    title: 'Check availability instantly',
    desc: 'Stock indicators — Plenty, Medium, Almost Finished — tell you exactly what to expect before you move an inch.',
    tag: 'Live stock updates',
    accent: '#F97316',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    imgAlt: 'Bole on the grill',
  },
  {
    num: '03',
    icon: '⚡',
    title: 'Reserve your portion',
    desc: 'Lock in your order in seconds. Your reservation holds your spot in the queue for 15 minutes while you make your way over.',
    tag: '15-min hold',
    accent: '#22C55E',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
    imgAlt: 'Reserving on phone',
  },
];

export default function HowItWorks() {
  const [visible, setVisible] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible((v) => [...v, i]), i * 120);
            obs.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section
      id="how-it-works"
      className="bg-[#FAFAFA] py-32 relative overflow-hidden"
    >
      {/* Subtle Top Border Decor */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-10">
        <div className="text-center mb-20">
          <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.2em] text-[#F5A800] mb-5 block">
            The Process
          </span>
          <h2
            className="font-serif italic text-zinc-900 tracking-tight leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
          >
            From hostel to bole
            <br />
            <span className="bg-gradient-to-r from-[#F5A800] to-[#FFCC33] bg-clip-text text-transparent not-italic font-semibold">
              in three taps.
            </span>
          </h2>
          <p className="font-['DM_Sans'] text-[18px] text-zinc-500 max-w-[500px] mx-auto">
            No calls. No guessing. No wasted trips. Just the smoky goodness you
            crave.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="group bg-white border border-zinc-200 rounded-[32px] overflow-hidden hover:border-[#F5A800]/40 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]"
              style={{
                opacity: visible.includes(i) ? 1 : 0,
                transform: visible.includes(i)
                  ? 'translateY(0)'
                  : 'translateY(40px)',
                transition:
                  'opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1), border-color .3s, box-shadow .3s',
                transitionDelay: visible.includes(i) ? '0s' : `${i * 0.15}s`,
              }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={step.img}
                  alt={step.imgAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />

                {/* Step Number Badge */}
                <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[12px] font-bold text-zinc-900 shadow-sm border border-white/50">
                  {step.num}
                </div>
              </div>

              <div className="p-8 pt-2">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm border"
                  style={{
                    background: `${step.accent}08`,
                    borderColor: `${step.accent}20`,
                  }}
                >
                  {step.icon}
                </div>
                <h3 className="font-serif italic text-[22px] font-bold text-zinc-900 mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="font-['DM_Sans'] text-[15px] leading-relaxed text-zinc-500 mb-6">
                  {step.desc}
                </p>
                <span
                  className="inline-block font-['DM_Sans'] text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border"
                  style={{
                    color: step.accent,
                    background: `${step.accent}08`,
                    borderColor: `${step.accent}25`,
                  }}
                >
                  {step.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Strip */}
        <div className="relative overflow-hidden bg-zinc-900 rounded-[32px] p-10 flex flex-col sm:flex-row justify-between items-center gap-8 shadow-2xl shadow-zinc-200">
          {/* Subtle noise pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23f)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 bg-[#F5A800] rounded-2xl flex items-center justify-center text-4xl shadow-lg shadow-[#F5A800]/20">
              🔥
            </div>
            <div>
              <div className="font-serif italic text-2xl text-white mb-1">
                Ready to find your portion?
              </div>
              <div className="font-['DM_Sans'] text-zinc-400">
                It takes under 30 seconds to find your first vendor.
              </div>
            </div>
          </div>

          <Link
            to="/register"
            className="relative z-10 shrink-0 font-['DM_Sans'] text-base font-bold bg-[#F5A800] text-zinc-900 px-10 py-5 rounded-2xl hover:bg-white hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(245,168,0,0.2)] transition-all duration-300 w-full sm:w-auto text-center"
          >
            Get started now
          </Link>
        </div>
      </div>

      <style>{`
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </section>
  );
}
