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
      className="bg-[#FAFAFA] py-32 overflow-hidden relative"
      ref={ref}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Stats Grid */}
        <div
          className="bg-white border border-zinc-200 rounded-[32px] px-6 md:px-10 py-10 flex flex-wrap justify-center gap-0 mb-24 transition-all duration-1000 shadow-sm"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex-1 min-w-[140px] text-center relative px-6 py-4"
            >
              <div
                className="font-serif italic font-bold text-[#F5A800] mb-2"
                style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}
              >
                {stat.value}
              </div>
              <div className="font-['DM_Sans'] text-[13px] font-bold uppercase tracking-widest text-zinc-400">
                {stat.label}
              </div>
              {i < stats.length - 1 && (
                <div className="absolute right-0 top-[20%] w-px h-[60%] bg-zinc-100 hidden md:block" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.2em] text-[#F5A800] mb-5 block">
            Word on campus
          </span>
          <h2
            className="font-serif italic text-zinc-900 tracking-tight leading-[1.1]"
            style={{ fontSize: 'clamp(32px, 4.5vw, 58px)' }}
          >
            Real students.<span className="text-[#F5A800]"> Real relief.</span>
          </h2>
        </div>
      </div>

      {/* Marquee Testimonials */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-6 py-10 px-10 w-max"
          style={{ animation: 'scrollLeft 40s linear infinite' }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.animationPlayState = 'paused')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.animationPlayState = 'running')
          }
        >
          {doubled.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="w-[350px] shrink-0 bg-white border border-zinc-200 rounded-[28px] p-8 hover:border-[#F5A800]/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-zinc-200/50 cursor-default"
            >
              <p className="font-['DM_Sans'] text-[16px] leading-relaxed text-zinc-600 mb-8 italic">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-[10px] shrink-0 font-bold text-[#F5A800] shadow-lg shadow-zinc-200">
                  {item.role.charAt(0)}
                </div>
                <div>
                  <div className="font-serif italic font-bold text-zinc-900 text-[15px]">
                    {item.name}
                  </div>
                  <div className="font-['DM_Sans'] text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
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
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </section>
  );
}

export function ImageStrip() {
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

  return (
    <div className="bg-[#FAFAFA] py-20 overflow-hidden relative">
      <div
        className="flex gap-6 w-max px-10"
        style={{ animation: 'scrollLeft 30s linear infinite' }}
      >
        {[...images, ...images].map((image, i) => (
          <div
            key={`${image.alt}-${i}`}
            className="relative w-[320px] h-[200px] rounded-[32px] overflow-hidden shrink-0 border-4 border-white shadow-xl"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#F5A800]/5 mix-blend-overlay" />
          </div>
        ))}
      </div>
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
    <section className="relative bg-[#FAFAFA] py-40 overflow-hidden text-center px-6">
      <div
        ref={ref}
        className="relative z-10 max-w-[800px] mx-auto transition-all duration-[1000ms] ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(40px)',
        }}
      >
        <h2
          className="font-serif italic text-zinc-900 tracking-tighter mb-10"
          style={{ fontSize: 'clamp(44px, 6vw, 84px)' }}
        >
          Don't walk for <span className="text-[#F5A800]">nothing.</span>
        </h2>

        <Link
          to="/register"
          className="group inline-flex items-center gap-4 bg-zinc-900 text-white font-['DM_Sans'] font-bold text-[18px] px-12 py-6 rounded-2xl hover:bg-[#F5A800] hover:text-white transition-all duration-300 shadow-2xl shadow-zinc-300"
        >
          <span>Find your portion now</span>
          <svg
            className="group-hover:translate-x-2 transition-transform"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
