import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [buttonMagnetic, setButtonMagnetic] = useState({ x: 0, y: 0 });
  const visualRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);

    const onMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * 14;
      setMousePos({ x, y });

      if (btnRef.current) {
        const rect = btnRef.current.getBoundingClientRect();
        const btnX = rect.left + rect.width / 2;
        const btnY = rect.top + rect.height / 2;
        const distance = Math.sqrt(
          Math.pow(e.clientX - btnX, 2) + Math.pow(e.clientY - btnY, 2)
        );

        if (distance < 80) {
          setButtonMagnetic({
            x: (e.clientX - btnX) * 0.35,
            y: (e.clientY - btnY) * 0.35,
          });
        } else {
          setButtonMagnetic({ x: 0, y: 0 });
        }
      }
    };

    window.addEventListener('mousemove', onMouse);
    return () => {
      clearTimeout(t);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  const vendors = [
    { name: 'Mama Titi', dist: '80m', stock: 'plenty' },
    { name: 'Iya Bose', dist: '210m', stock: 'medium' },
    { name: 'Uncle Emeka', dist: '340m', stock: 'low' },
  ];

  const getStockStyles = (stock) => {
    const baseStyle =
      'font-["DM_Sans"] text-[9px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider';
    switch (stock) {
      case 'plenty':
        return `${baseStyle} bg-green-50 text-green-700 border-green-100`;
      case 'medium':
        return `${baseStyle} bg-orange-50 text-orange-700 border-orange-100`;
      default:
        return `${baseStyle} bg-red-50 text-red-700 border-red-100`;
    }
  };

  return (
    <section className="relative w-full bg-[#FAFAFA] overflow-hidden flex items-center pt-16 min-h-screen">
      {/* Background elements remain same */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] animate-noise"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23f)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#F5A800]/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-10 pb-20 w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
        <div
          className="transition-all duration-1000 ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(40px)',
          }}
        >
          <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 shadow-sm text-zinc-500 font-['DM_Sans'] text-[12px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5A800] animate-pulse" />
            Now live on campus
          </div>

          <h1
            className="font-serif italic leading-[0.9] tracking-tight text-zinc-900 mb-8"
            style={{ fontSize: 'clamp(54px, 7vw, 92px)' }}
          >
            <span className="block not-italic opacity-90 text-zinc-800">
              Skip the
            </span>
            <span className="block">
              queue.{' '}
              <span className="bg-gradient-to-r from-[#F5A800] to-[#FFCC33] bg-clip-text text-transparent not-italic font-semibold">
                Get your bole.
              </span>
            </span>
          </h1>

          <p className="font-['DM_Sans'] text-[18px] leading-relaxed text-zinc-500 max-w-[480px] mb-12">
            Find vendors near you, check stock in real time, and reserve your
            portion before you even leave your hostel.
          </p>

          <div className="flex items-center gap-6 flex-wrap mb-12">
            <Link
              ref={btnRef}
              to="/register"
              style={{
                transform: `translate(${buttonMagnetic.x}px, ${buttonMagnetic.y}px)`,
              }}
              className="group inline-flex items-center gap-2 bg-[#F5A800] text-white font-['DM_Sans'] font-bold text-[16px] px-8 py-4 rounded-[20px] transition-all duration-200 shadow-[0_20px_40px_-12px_rgba(245,168,0,0.4)] hover:bg-zinc-900 active:scale-95"
            >
              <span>Find vendors now</span>
              <svg
                className="group-hover:translate-x-1 transition-transform"
                width="18"
                height="18"
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
        </div>

        {/* Visual Container - Pushed down on desktop */}
        <div
          ref={visualRef}
          className="relative flex justify-center items-center lg:translate-y-12"
          style={{
            transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          {/* Phone Shell */}
          <div className="relative w-[280px] h-[580px] bg-white rounded-[48px] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[8px] border-zinc-900">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-zinc-900 rounded-b-2xl z-20" />

            <div className="w-full h-full bg-zinc-50 rounded-[36px] overflow-hidden relative">
              <img
                src="https://pub-d63312c8b711451a9e50fb2916838f4a.r2.dev/Bole%20home.jpg"
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/20" />

              <div className="relative z-10 p-5 pt-10 flex flex-col gap-4">
                <span className="text-xl font-serif font-black italic tracking-tighter text-[#F5A800]">
                  bole4us
                </span>

                {vendors.map((v, i) => (
                  <div
                    key={i}
                    className="bg-white/90 backdrop-blur-md border border-white/50 p-3 rounded-2xl shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <div className="text-[12px] font-['DM_Sans'] font-bold text-zinc-900">
                        {v.name}
                      </div>
                      <div className={getStockStyles(v.stock)}>{v.stock}</div>
                    </div>
                    <div className="text-[10px] font-['DM_Sans'] text-zinc-500">
                      {v.dist} away
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Card */}
          <div
            className="absolute -top-6 -right-12 bg-white/80 backdrop-blur-2xl border border-white/40 rounded-2xl p-4 shadow-2xl min-w-[160px]"
            style={{
              animation: 'floatY 4s ease-in-out infinite',
              transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px)`,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#F5A800] rounded-lg flex items-center justify-center text-white text-sm">
                ⚡
              </div>
              <div>
                <div className="text-[14px] font-serif italic font-bold text-zinc-900">
                  Reserved!
                </div>
                <div className="text-[10px] font-['DM_Sans'] font-bold text-zinc-500 uppercase tracking-tight">
                  Pick up in 15m
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

        .font-serif { font-family: 'Playfair Display', serif; }

        @keyframes floatY {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
      `}</style>
    </section>
  );
}
