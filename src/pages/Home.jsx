import { Link } from 'react-router-dom';
import HeroSection from '../components/landing/HeroSection';
import HowItWorks from '../components/landing/HowItWorks';
import {
  ImageStrip,
  SocialProof,
} from '../components/landing/SocialProofAndFooter';
import Navbar from '../components/Navbar';

const valueProps = [
  {
    icon: '⚡',
    label: 'Speed',
    title: 'Fast delivery',
    desc: 'Your order moves while the heat is still fresh. No cold bole, no delays.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGEwd4mWQJ02uF5KCt5S5iP6yrJMDpsj9MdzFAFhwN0Mz4NYRX59ZEMIkJ1aXd7tlR9dC06YiOXDXQJ4f1EARVQB7vq9aeGhgkh5T8wJCmRPYXTTFUviYUFQuYVjdgmySWIZ7aNMF4OxaXxwjlNmMVXmS3upDWhG7ZEtXWcD1VYS4i7p9GFbrRksCCdo8gOl68gZq0TymfutMIgYlvGxBNkWDIHuGElmi84iBcx0HKQxgWDAvDs0oH1i9QSxLOauv9JCJGiNO7XNs',
    alt: 'Fast delivery',
    type: 'image',
  },
  {
    icon: '💸',
    label: 'Budget',
    title: 'Student pricing',
    desc: 'Built for campus budgets. Premium taste without premium pricing.',
    type: 'price',
  },
  {
    icon: '🔥',
    label: 'Flavor',
    title: 'Authentic heat',
    desc: 'No shortcuts. Just real fire, real smoke, real flavor.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArPl-zno48uAKmTk62d9vB4ntdnt8Hf5yRswm1w8gY587ewJlIri5zDojQt1sZfpUZDBcumJCO6xjIu8l1jNHAPPlrcEOrKtX4Gj-CNxB1cldPqL1Oy4fI3QqCb0rLFYRQUs55i6L897QmhdGjVIUdGde5SNwZbUkW2IOoldgeRIV_rsXttqhxDFYo9U0mfoPWK8Xzl9_mHkk4CYUPUmrmhZjfbCc_gtAp9LY8MYrTKYsMf-0PokmVFGLYAy8Bo_GXfAxmGGgTJu8',
    alt: 'Authentic bole',
    type: 'image',
    grayscale: true,
  },
];

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Explore', to: '/explore' },
      { label: 'Get Started', to: '/register' },
      { label: 'Login', to: '/login' },
    ],
  },
  {
    title: 'Roles',
    links: [
      { label: 'Students', to: '/register?role=student' },
      { label: 'Agents', to: '/register?role=agent' },
      { label: 'Vendors', to: '/register?role=vendor' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'hello@bole4us.com', href: 'mailto:hello@bole4us.com' },
      { label: 'Twitter / X', href: '#' },
      { label: 'Instagram', href: '#' },
    ],
  },
];

const Home = () => {
  return (
    <div className="home-page bg-[#FFFDF8] font-['DM_Sans'] text-zinc-950 selection:bg-[#F5A800] selection:text-black">
      <Navbar />

      <main>
        {/* HERO */}
        <HeroSection />

        {/* HOW IT WORKS */}
        <HowItWorks />

        {/* VALUE PROPS */}
        <section className="relative isolate overflow-hidden bg-[#FFFDF8] px-6 py-28 text-zinc-950 md:px-10 lg:py-32">
          {/* Soft background glow */}
          <div
            className="pointer-events-none absolute inset-0 -z-20"
            style={{
              background: `
                radial-gradient(circle at 15% 18%, rgba(245, 168, 0, 0.13), transparent 30%),
                radial-gradient(circle at 85% 20%, rgba(255, 204, 51, 0.18), transparent 28%),
                linear-gradient(180deg, #FFF9EA 0%, #FFFDF8 45%, #FFFFFF 100%)
              `,
            }}
          />

          <div className="pointer-events-none absolute -left-40 top-24 -z-10 h-[420px] w-[420px] rounded-full bg-[#F5A800]/10 blur-[110px]" />
          <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-[460px] w-[460px] rounded-full bg-zinc-950/5 blur-[120px]" />

          {/* Grain */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='valueNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23valueNoise)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="mx-auto max-w-[1220px]">
            {/* Section Intro */}
            <div className="mx-auto mb-16 flex max-w-[780px] flex-col items-center text-center sm:mb-20">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[#F5A800]" />
                <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#D88B00]">
                  Why Bole4us
                </span>
              </div>

              <h2
                className="font-serif italic leading-[0.98] tracking-[-0.045em] text-zinc-950"
                style={{ fontSize: 'clamp(44px, 6vw, 76px)' }}
              >
                Built for how campus
                <br />
                actually works.
                <span className="block bg-gradient-to-r from-[#F5A800] via-[#FFB800] to-[#FF7A00] bg-clip-text pb-2 not-italic font-semibold text-transparent">
                  No wasted walks.
                </span>
              </h2>

              <p className="mt-7 max-w-[620px] text-[18px] leading-relaxed text-zinc-500">
                Just real-time clarity before you step out. Find your portion
                without the campus-wide trek.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-7 md:grid-cols-3 lg:gap-8">
              {valueProps.map((item, index) => (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[36px] border border-white/70 bg-white/75 p-7 text-center shadow-[0_28px_80px_-50px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#F5A800]/45 hover:bg-white hover:shadow-[0_40px_100px_-52px_rgba(0,0,0,0.5)] sm:p-8"
                >
                  {/* Card accent glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#F5A800]/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex h-full flex-col items-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F5A800]/20 bg-[#F5A800]/10 px-3 py-1.5">
                      <span className="text-sm">{item.icon}</span>
                      <span className="text-[9px] font-black uppercase tracking-[0.16em] text-[#D88B00]">
                        {item.label}
                      </span>
                    </div>

                    <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-[24px] border border-[#F5A800]/20 bg-white text-3xl shadow-[0_18px_45px_-28px_rgba(245,168,0,0.9)] transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105">
                      {item.icon}
                    </div>

                    <h3 className="font-serif italic text-[27px] font-bold leading-tight tracking-[-0.03em] text-zinc-950">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-[280px] text-sm leading-[1.75] text-zinc-500">
                      {item.desc}
                    </p>

                    {item.type === 'image' ? (
                      <div className="mt-9 w-full overflow-hidden rounded-[26px] border border-zinc-100 bg-zinc-100 shadow-[0_24px_70px_-48px_rgba(0,0,0,0.45)]">
                        <img
                          src={item.img}
                          className={`h-48 w-full object-cover transition-all duration-700 group-hover:scale-110 ${
                            item.grayscale
                              ? 'grayscale group-hover:grayscale-0'
                              : ''
                          }`}
                          alt={item.alt}
                        />
                      </div>
                    ) : (
                      <div className="mt-10 w-full rounded-[30px] border border-[#F5A800]/20 bg-gradient-to-b from-[#FFF7DE] to-white p-7 shadow-[0_24px_70px_-50px_rgba(245,168,0,0.85)]">
                        <div className="text-[72px] font-black leading-none tracking-[-0.1em] text-[#F5A800]">
                          ₦0
                        </div>

                        <div className="mt-3 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                          Delivery for freshmen
                        </div>

                        <div className="mx-auto mt-5 h-2 max-w-[170px] overflow-hidden rounded-full bg-zinc-100">
                          <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#F5A800] to-[#FF7A00]" />
                        </div>
                      </div>
                    )}

                    <div className="mt-7 flex w-full items-center justify-between border-t border-zinc-100 pt-5">
                      <span className="text-[11px] font-black uppercase tracking-[0.16em] text-zinc-400">
                        0{index + 1}
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5A800] text-white shadow-[0_16px_30px_-18px_rgba(245,168,0,0.95)] transition-transform duration-300 group-hover:translate-x-1">
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
              ))}
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <SocialProof />

        {/* IMAGE STRIP */}
        <ImageStrip />

        {/* FINAL CTA */}
        <section className="relative isolate overflow-hidden bg-zinc-950 px-6 py-32 md:px-10 lg:py-40">
          {/* Background image */}
          <div
            className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://pub-d63312c8b711451a9e50fb2916838f4a.r2.dev/Bole%20home.jpg')`,
            }}
          />

          {/* Moody overlays */}
          <div className="absolute inset-0 -z-20 bg-zinc-950/70 backdrop-blur-[2px]" />
          <div className="absolute inset-0 -z-20 bg-gradient-to-b from-zinc-950 via-zinc-950/50 to-zinc-950" />
          <div className="absolute inset-0 -z-20 bg-gradient-to-r from-zinc-950/90 via-transparent to-zinc-950/90" />

          {/* Glow accents */}
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#F5A800]/20 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-[-140px] right-[-120px] -z-10 h-[420px] w-[420px] rounded-full bg-[#F5A800]/10 blur-[120px]" />

          {/* Grain */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='ctaNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23ctaNoise)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#F5A800]" />
              <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#F5A800]">
                Ready when you are
              </span>
            </div>

            <h2
              className="font-serif italic leading-[0.98] tracking-[-0.05em] text-white"
              style={{ fontSize: 'clamp(48px, 7vw, 86px)' }}
            >
              Stop guessing.
              <br />
              <span className="bg-gradient-to-r from-[#F5A800] via-[#FFB800] to-[#FF7A00] bg-clip-text not-italic font-semibold text-transparent">
                Start reserving.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-lg font-light leading-relaxed text-zinc-300 md:text-xl">
              Find vendors, check stock, and lock your portion before you even
              step outside. The smoky goodness you crave is just a tap away.
            </p>

            <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-4 rounded-[30px] border border-white/10 bg-white/10 p-3 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:flex-row">
              <div className="relative flex-1">
                <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/35">
                  📍
                </span>

                <input
                  type="text"
                  placeholder="Enter campus location"
                  className="h-full w-full rounded-[22px] border border-white/10 bg-white/10 px-6 py-5 pl-12 text-white outline-none transition-all placeholder:text-white/35 focus:border-[#F5A800]/50 focus:bg-white/15 focus:ring-1 focus:ring-[#F5A800]/40"
                />
              </div>

              <Link
                to="/explore"
                className="group inline-flex items-center justify-center gap-2 rounded-[22px] bg-[#F5A800] px-8 py-5 text-[15px] font-black text-white shadow-[0_24px_60px_-20px_rgba(245,168,0,0.75)] transition-all duration-300 hover:bg-white hover:text-zinc-950 active:scale-95 sm:w-auto"
              >
                <span>Find vendors</span>

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

            <div className="mx-auto mt-10 flex max-w-xl flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-6">
              {['No app download', 'Works instantly', 'Free to use'].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/45"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F5A800]" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#080808] px-6 pb-10 pt-20 text-white">
        {/* Footer glow */}
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_0%,rgba(245,168,0,0.16),transparent_55%)]" />
        <div className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#F5A800]/5 blur-[120px]" />

        {/* Footer grain */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='footerNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23footerNoise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative mx-auto max-w-[1220px]">
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_0.8fr]">
            {/* Brand */}
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-2"
                aria-label="Bole4us home"
              >
                <span className="font-serif italic text-3xl font-black tracking-[-0.08em] text-[#F5A800]">
                  bole4us
                </span>
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-400">
                Real-time bole discovery for Nigerian campus students. Built for
                the streets, optimized for campus life.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {['Campus-first', 'Real-time stock', 'Fast pickup'].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Links */}
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="mb-7 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
                  {group.title}
                </h4>

                <div className="flex flex-col gap-4 text-sm">
                  {group.links.map((link) =>
                    link.to ? (
                      <Link
                        key={link.label}
                        to={link.to}
                        className="text-zinc-400 transition-colors duration-300 hover:text-[#F5A800]"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-zinc-400 transition-colors duration-300 hover:text-[#F5A800]"
                      >
                        {link.label}
                      </a>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA strip */}
          <div className="mb-10 flex flex-col gap-5 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-serif italic text-2xl font-bold tracking-[-0.03em] text-white">
                Hungry already?
              </div>

              <p className="mt-1 text-sm text-zinc-500">
                Find the nearest vendor and reserve before the stock runs out.
              </p>
            </div>

            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-[20px] bg-[#F5A800] px-6 py-4 text-sm font-black text-white shadow-[0_24px_60px_-24px_rgba(245,168,0,0.75)] transition-all duration-300 hover:bg-white hover:text-zinc-950 active:scale-95"
            >
              Get started
            </Link>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-600">
              © 2026 BOLE4US. Built in Nigeria.
            </p>

            <div className="flex gap-8 text-[11px] font-black uppercase tracking-[0.18em] text-zinc-600">
              <a href="#" className="transition-colors hover:text-white">
                Privacy
              </a>

              <a href="#" className="transition-colors hover:text-white">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

        .home-page {
          font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        @media (prefers-reduced-motion: reduce) {
          .home-page * {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
