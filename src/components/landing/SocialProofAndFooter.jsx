import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    text: "I used to walk five minutes just to hear 'e don finish.' Bole4us saved my afternoon.",
    name: 'Tolu A.',
    tag: '200L, UNILAG',
    emoji: 'Student',
  },
  {
    text: 'As an agent, I manage three vendors at once. Orders come in automatically. Easy money.',
    name: 'Kola B.',
    tag: 'Agent, Yaba',
    emoji: 'Agent',
  },
  {
    text: 'My regulars reserve before they even leave the hostel. I waste less and sell more.',
    name: 'Mama Titi',
    tag: 'Vendor, OAU',
    emoji: 'Vendor',
  },
  {
    text: "The stock badge is everything. Green means go. Red means I don't bother moving.",
    name: 'Seun O.',
    tag: '300L, UI',
    emoji: 'Student',
  },
  {
    text: '15-minute window is tight enough that nobody abuses it and wide enough for the walk.',
    name: 'Dami F.',
    tag: '400L, LASU',
    emoji: 'Student',
  },
  {
    text: 'Finally, a tech product that actually understands how campus life works in Nigeria.',
    name: 'Chidi N.',
    tag: 'Agent, Enugu',
    emoji: 'Agent',
  },
];

const stats = [
  { value: '400+', label: 'Students onboarded' },
  { value: '98%', label: 'Reservation success rate' },
  { value: '3 min', label: 'Avg. time saved per trip' },
  { value: '12+', label: 'Vendors listed' },
];

export function SocialProof() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const doubled = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="bg-[#0E0E0E] py-28 overflow-hidden relative"
      ref={ref}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F5A800]/20 to-transparent" />

      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <div
          className="bg-[#1A1A1A] border border-[#2E2E2E] rounded-2xl px-6 md:px-10 py-7 flex flex-wrap justify-center gap-0 mb-20 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex-1 min-w-[120px] text-center relative px-6"
            >
              <div
                className=" font-extrabold text-[#F5A800] mb-1.5"
                style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}
              >
                {stat.value}
              </div>
              <div className="font-['DM_Sans'] text-[13px] text-[#A0A0A0]">
                {stat.label}
              </div>
              {i < stats.length - 1 && (
                <div className="absolute right-0 top-[10%] w-px h-[80%] bg-[#2E2E2E] hidden md:block" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mb-14">
          <span className="font-['DM_Sans'] text-xs font-semibold uppercase tracking-[0.12em] text-[#F5A800] mb-4 block">
            Word on campus
          </span>
          <h2
            className=" font-extrabold text-[#F5F5F5] tracking-tight leading-[1.1]"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            Real students.
            <span className="text-[#F5A800]"> Real relief.</span>
          </h2>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#0E0E0E] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#0E0E0E] to-transparent z-10 pointer-events-none" />
        <div
          className="flex gap-5 py-5 px-16 w-max"
          style={{ animation: 'scrollLeft 30s linear infinite' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animationPlayState = 'paused';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = 'running';
          }}
        >
          {doubled.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="w-[300px] shrink-0 bg-[#1A1A1A] border border-[#2E2E2E] rounded-2xl p-7 hover:border-[#F5A800]/25 hover:-translate-y-1 transition-all duration-200 cursor-default"
            >
              <div className=" text-5xl leading-none text-[#F5A800]/40 mb-3">
                "
              </div>
              <p className="font-['DM_Sans'] text-[14px] leading-relaxed text-[#C0C0C0] mb-5">
                {item.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F5A800]/15 border border-[#F5A800]/25 flex items-center justify-center text-[10px] shrink-0 font-['DM_Sans'] font-bold text-[#F5A800]">
                  {item.emoji}
                </div>
                <div>
                  <div className="font-['DM_Sans'] text-[13px] font-bold text-white">
                    {item.name}
                  </div>
                  <div className="font-['DM_Sans'] text-[11px] text-[#A0A0A0]">
                    {item.tag}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

export function ImageStrip() {
  const images = [
    {
      src: 'https://pub-d63312c8b711451a9e50fb2916838f4a.r2.dev/bole12.webp',
      alt: 'Bole vendor at work',
    },
    {
      src: 'https://pub-d63312c8b711451a9e50fb2916838f4a.r2.dev/bole13.webp',
      alt: 'Food on the grill',
    },
    {
      src: 'https://pub-d63312c8b711451a9e50fb2916838f4a.r2.dev/student%20(Bole4u).webp',
      alt: 'Campus students',
    },
    {
      src: 'https://pub-d63312c8b711451a9e50fb2916838f4a.r2.dev/bole11.webp',
      alt: 'Already made bole',
    },
  ];

  return (
    <div className="bg-[#111111] py-16 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-4 w-max px-8"
        style={{ animation: 'scrollLeft 20s linear infinite' }}
      >
        {[...images, ...images].map((image, i) => (
          <div
            key={`${image.alt}-${i}`}
            className="relative w-[280px] h-[180px] rounded-2xl overflow-hidden shrink-0 border border-[#2E2E2E]"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#F5A800]/5" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export function FinalCTA() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative bg-[#111111] py-36 overflow-hidden text-center px-6 md:px-10">
      <div className="absolute inset-0 z-0">
        <img
          src="https://pub-d63312c8b711451a9e50fb2916838f4a.r2.dev/bole7.jpg"
          alt="Background fire"
          className="w-full h-full object-cover opacity-[0.06]"
        />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-[640px] mx-auto transition-all duration-[900ms] ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
        }}
      >
        <Link to="/register">Find vendors now</Link>
      </div>
    </section>
  );
}

export function Footer() {
  return <footer />;
}
