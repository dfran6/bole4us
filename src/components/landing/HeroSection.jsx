import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const visualRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);

    const onMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 14,
        y: (e.clientY / window.innerHeight - 0.5) * 14,
      });
    };

    window.addEventListener('mousemove', onMouse);

    return () => {
      clearTimeout(t);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  const vendors = [
    { name: 'Mama Titi', dist: '80m', agent: 'Agent Joy', stock: 'plenty' },
    { name: 'Iya Bose', dist: '210m', agent: 'Agent Kola', stock: 'medium' },
    { name: 'Uncle Emeka', dist: '340m', agent: 'Agent Sade', stock: 'low' },
  ];

  const getStockStyles = (stock) => {
    const baseStyle =
      'font-["DM_Sans"] text-[10px] font-semibold px-2 py-1 rounded-full';
    switch (stock) {
      case 'plenty':
        return `${baseStyle} bg-green-500/15 text-green-400`;
      case 'medium':
        return `${baseStyle} bg-orange-500/15 text-orange-400`;
      default:
        return `${baseStyle} bg-red-500/15 text-red-400`;
    }
  };

  const getStockLabel = (stock) => {
    switch (stock) {
      case 'plenty':
        return 'Plenty';
      case 'medium':
        return 'Medium';
      default:
        return 'Low';
    }
  };

  return (
    <section
      className="relative w-full bg-[#111111] overflow-hidden flex items-center pt-16"
      style={{ minHeight: '100vh' }}
    >
      {/* Ember particles */}
      {[20, 38, 58, 74, 86].map((left, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#F5A800] pointer-events-none"
          style={{
            width: i % 2 === 0 ? 4 : 3,
            height: i % 2 === 0 ? 4 : 3,
            left: `${left}%`,
            animation: `floatEmber ${5 + i}s ease-in-out ${i * 0.8}s infinite`,
            opacity: 0,
          }}
        />
      ))}

      {/* Ambient glows */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#F5A800]/10 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-50px] left-[10%] w-[300px] h-[300px] rounded-full bg-[#F5A800]/6 blur-[100px] pointer-events-none" />

      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-10 pb-20 w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* ── COPY ── */}
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-[#F5A800]/10 border border-[#F5A800]/25 text-[#F5A800] font-['DM_Sans'] text-[13px] font-medium px-3.5 py-1.5 rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5A800] animate-pulse" />
            Now live on campus
          </div>

          {/* Headline */}
          <h1
            className=" font-extrabold leading-[1.0] tracking-[-0.03em] text-[#F5F5F5] mb-6"
            style={{ fontSize: 'clamp(48px, 6vw, 78px)' }}
          >
            <span
              className="block"
              style={{
                animation: 'slideIn .7s cubic-bezier(.16,1,.3,1) .2s both',
              }}
            >
              Skip the
            </span>
            <span
              className="block"
              style={{
                animation: 'slideIn .7s cubic-bezier(.16,1,.3,1) .35s both',
              }}
            >
              queue. <span className="text-[#F5A800]">Get your</span>
            </span>
            <span
              className="block"
              style={{
                animation: 'slideIn .7s cubic-bezier(.16,1,.3,1) .5s both',
              }}
            >
              bole<span className="text-[#F5A800]">.</span>
            </span>
          </h1>

          <p
            className="font-['DM_Sans'] text-[17px] leading-relaxed text-[#A0A0A0] max-w-[440px] mb-9"
            style={{
              animation: 'fadeUp .7s cubic-bezier(.16,1,.3,1) .6s both',
            }}
          >
            Find vendors near you, check stock in real time, and reserve your
            portion before you even leave your hostel.
          </p>

          <div
            className="flex items-center gap-4 flex-wrap mb-10"
            style={{
              animation: 'fadeUp .7s cubic-bezier(.16,1,.3,1) .75s both',
            }}
          >
            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-[#F5A800] text-[#111] font-['DM_Sans'] font-bold text-[15px] px-7 py-3.5 rounded-full hover:bg-[#FFC107] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(245,168,0,0.35)] transition-all"
            >
              Find vendors now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              to="#how-it-works"
              className="font-['DM_Sans'] text-[15px] text-[#A0A0A0] hover:text-white border-b border-transparent hover:border-[#F5A800] transition-all pb-0.5"
            >
              See how it works
            </Link>
          </div>

          {/* Social proof */}
          <div
            className="flex items-center gap-3"
            style={{
              animation: 'fadeUp .7s cubic-bezier(.16,1,.3,1) .9s both',
            }}
          >
            <div className="flex">
              {['S', 'T', 'A', 'K'].map((l, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F5A800] to-[#E10600] border-2 border-[#111] -ml-2 first:ml-0 flex items-center justify-center font-['DM_Sans'] text-[11px] font-bold text-[#111]"
                  style={{ zIndex: 4 - i }}
                >
                  {l}
                </div>
              ))}
            </div>
            <p className="font-['DM_Sans'] text-[13px] text-[#A0A0A0]">
              <strong className="text-white">400+ students</strong> already
              skipping the queue
            </p>
          </div>
        </div>

        {/* ── VISUAL ─��� */}
        <div
          ref={visualRef}
          className="relative flex justify-center items-center transition-all duration-1000 ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded
              ? `translateY(0) scale(1) translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`
              : 'translateY(40px) scale(0.95)',
            transitionDelay: '0.3s',
          }}
        >
          {/* Phone mockup */}
          <div className="relative w-[260px] h-[520px] bg-[#1A1A1A] rounded-[40px] border border-[#2E2E2E] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)]">
            {/* Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#111] rounded-full z-10" />

            {/* Hero image inside phone */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://pub-d63312c8b711451a9e50fb2916838f4a.r2.dev/Bole%20home.jpg"
                alt="Bole vendor roasting plantain"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 via-transparent to-[#1A1A1A]" />
            </div>

            {/* App UI overlay */}
            <div className="relative z-10 pt-14 px-4 pb-4 h-full flex flex-col gap-2.5">
              <div className="flex justify-between items-center">
                <span className=" text-base font-extrabold text-[#F5A800]">
                  bole4us
                </span>
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#F5A800] to-[#E10600]" />
              </div>

              {/* Search bar */}
              <div className="flex items-center gap-2 bg-[#242424]/90 backdrop-blur rounded-xl px-3 py-2.5 text-[#A0A0A0] font-['DM_Sans'] text-xs">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="11"
                    cy="11"
                    r="8"
                    stroke="#A0A0A0"
                    strokeWidth="2"
                  />
                  <path
                    d="m21 21-4.35-4.35"
                    stroke="#A0A0A0"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Search vendors...
              </div>

              {/* Filter tabs */}
              <div className="flex gap-1.5">
                {['All', 'Open', 'Near Me'].map((f, i) => (
                  <div
                    key={i}
                    className={`font-['DM_Sans'] text-[11px] font-medium px-2.5 py-1 rounded-full ${
                      i === 0
                        ? 'bg-[#F5A800] text-[#111]'
                        : 'bg-[#242424]/90 text-[#A0A0A0]'
                    }`}
                  >
                    {f}
                  </div>
                ))}
              </div>

              {/* Vendor cards */}
              {vendors.map((v, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 bg-[#242424]/90 backdrop-blur rounded-xl px-3 py-2.5"
                  style={{
                    animation: `cardIn .5s cubic-bezier(.16,1,.3,1) ${i * 0.15}s both`,
                  }}
                >
                  <span className="text-xl">🔥</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-['DM_Sans'] text-[12px] font-semibold text-[#F5F5F5] truncate">
                      {v.name}
                    </div>
                    <div className="font-['DM_Sans'] text-[10px] text-[#A0A0A0]">
                      {v.dist} · {v.agent}
                    </div>
                  </div>
                  <div className={getStockStyles(v.stock)}>
                    {getStockLabel(v.stock)}
                  </div>
                </div>
              ))}

              {/* Reserve button */}
              <div className="mt-auto bg-[#F5A800] text-[#111] font-['DM_Sans'] text-[13px] font-bold text-center py-3 rounded-xl cursor-pointer">
                Reserve a spot →
              </div>
            </div>
          </div>

          {/* Float card 1 — reservation confirmed */}
          <div
            className="absolute top-14 -right-5 bg-[#1A1A1A]/90 backdrop-blur-xl border border-[#F5A800]/20 rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            style={{ animation: 'floatY 3s ease-in-out infinite' }}
          >
            <span className="text-lg">⚡</span>
            <div>
              <div className="font-['DM_Sans'] text-[12px] font-bold text-[#F5F5F5]">
                Reserved!
              </div>
              <div className="font-['DM_Sans'] text-[10px] text-[#A0A0A0]">
                Expires in 15 min
              </div>
            </div>
          </div>

          {/* Float card 2 — nearby vendors */}
          <div
            className="absolute bottom-20 -left-7 bg-[#1A1A1A]/90 backdrop-blur-xl border border-[#F5A800]/20 rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            style={{ animation: 'floatY 3s ease-in-out 1.5s infinite' }}
          >
            <span className="text-lg">📍</span>
            <div>
              <div className="font-['DM_Sans'] text-[12px] font-bold text-[#F5F5F5]">
                3 vendors near you
              </div>
              <div className="font-['DM_Sans'] text-[10px] text-[#A0A0A0]">
                All stocked up
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes floatEmber {
          0% { bottom: -10px; opacity: 0; transform: translateX(0); }
          20% { opacity: 0.8; }
          80% { opacity: 0.4; }
          100% { bottom: 110%; opacity: 0; transform: translateX(30px); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateX(10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
