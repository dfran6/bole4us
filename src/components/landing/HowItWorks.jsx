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
    <section id="how-it-works" className="bg-[#0E0E0E] py-28 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F5A800]/25 to-transparent" />

      <div className="max-w-[1100px] mx-auto px-10">
        <div className="text-center mb-16">
          <span className="font-['DM_Sans'] text-xs font-semibold uppercase tracking-[0.12em] text-[#F5A800] mb-4 block">
            How it works
          </span>
          <h2
            className=" font-extrabold text-[#F5F5F5] tracking-tight leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(32px, 4.5vw, 58px)' }}
          >
            From hostel to bole
            <br />
            <span className="text-[#F5A800]">in three taps.</span>
          </h2>
          <p className="font-['DM_Sans'] text-[17px] text-[#A0A0A0]">
            No calls. No guessing. No wasted trips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="group bg-[#1A1A1A] border border-[#2E2E2E] rounded-3xl overflow-hidden hover:border-[#F5A800]/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              style={{
                opacity: visible.includes(i) ? 1 : 0,
                transform: visible.includes(i)
                  ? 'translateY(0)'
                  : 'translateY(30px)',
                transition:
                  'opacity .6s cubic-bezier(.16,1,.3,1), transform .6s cubic-bezier(.16,1,.3,1), border-color .2s, box-shadow .2s',
                transitionDelay: visible.includes(i) ? '0s' : `${i * 0.1}s`,
              }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={step.img}
                  alt={step.imgAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1A1A]" />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `radial-gradient(circle at 30% 50%, ${step.accent}, transparent 70%)`,
                  }}
                />
                <div
                  className="absolute top-4 left-4 text-[13px] font-bold tracking-widest opacity-80"
                  style={{ color: step.accent }}
                >
                  {step.num}
                </div>
              </div>

              <div className="p-7">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 border"
                  style={{
                    background: `${step.accent}15`,
                    borderColor: `${step.accent}30`,
                  }}
                >
                  {step.icon}
                </div>
                <h3 className=" text-[18px] font-bold text-[#F5F5F5] mb-2.5 leading-snug">
                  {step.title}
                </h3>
                <p className="font-['DM_Sans'] text-[14px] leading-relaxed text-[#A0A0A0] mb-5">
                  {step.desc}
                </p>
                <span
                  className="inline-block font-['DM_Sans'] text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border"
                  style={{
                    color: step.accent,
                    background: `${step.accent}10`,
                    borderColor: `${step.accent}25`,
                  }}
                >
                  {step.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#242424] border border-[#F5A800]/20 rounded-2xl p-7 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
          <div className="flex items-center gap-4">
            <span className="text-3xl">🔥</span>
            <div>
              <div className=" text-lg font-bold text-white mb-1">
                Ready to try it?
              </div>
              <div className="font-['DM_Sans'] text-sm text-[#A0A0A0]">
                It takes under 30 seconds to find your first vendor.
              </div>
            </div>
          </div>
          <Link
            to="/register"
            className="shrink-0 font-['DM_Sans'] text-sm font-bold bg-[#F5A800] text-[#111] px-6 py-3.5 rounded-full hover:bg-[#FFC107] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(245,168,0,0.3)] transition-all w-full sm:w-auto text-center"
          >
            Get started free
          </Link>
        </div>
      </div>
    </section>
  );
}
