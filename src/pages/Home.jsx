import { Link } from 'react-router-dom';
import HeroSection from '../components/landing/HeroSection';
import HowItWorks from '../components/landing/HowItWorks';
import {
  ImageStrip,
  SocialProof,
} from '../components/landing/SocialProofAndFooter';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="bg-[#0E0E0E] text-[#F5F5F5] font-body selection:bg-[#F5A800] selection:text-black">
      <Navbar />

      <main>
        {/* HERO */}
        <HeroSection />

        {/* HOW IT WORKS */}
        <HowItWorks />

        {/* VALUE PROPS (MOVED UP FOR FLOW) */}
        {/* VALUE PROPS (CENTRALIZED) */}
        <section className="py-32 px-6 md:px-10 bg-[#FAFAFA] text-[#0E0E0E]">
          <div className="max-w-[1100px] mx-auto">
            {/* Section Intro - Centralized with Playfair + DM Sans */}
            <div className="mb-24 text-center flex flex-col items-center">
              <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.2em] text-[#F5A800] mb-5 block">
                Why Bole4us
              </span>

              <h2
                className="font-serif italic tracking-tight leading-[1.1] mb-8 text-zinc-900 max-w-4xl"
                style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
              >
                Built for how campus actually works
                <br />
                <span className="bg-gradient-to-r from-[#F5A800] to-[#FFCC33] bg-clip-text text-transparent not-italic font-semibold">
                  No guessing. No wasted walks.
                </span>
              </h2>

              <p className="font-['DM_Sans'] text-[18px] text-zinc-500 max-w-2xl leading-relaxed">
                Just real-time clarity before you step out. Find your portion
                without the campus-wide trek.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* CARD 1 */}
              <div className="group relative rounded-[32px] bg-white border border-zinc-200 hover:border-[#F5A800]/40 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] p-8 overflow-hidden text-center flex flex-col items-center">
                <div className="relative z-10 w-full">
                  <span className="material-symbols-outlined text-4xl text-[#F5A800] mb-8">
                    bolt
                  </span>
                  <h3 className="font-serif italic text-[24px] font-bold text-zinc-900 mb-4">
                    Fast delivery
                  </h3>
                  <p className="font-['DM_Sans'] text-zinc-500 text-sm leading-relaxed mb-10">
                    Your order moves while the heat is still fresh. No cold
                    bole, no delays.
                  </p>
                  <div className="rounded-2xl overflow-hidden h-44 border border-zinc-100">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGEwd4mWQJ02uF5KCt5S5iP6yrJMDpsj9MdzFAFhwN0Mz4NYRX59ZEMIkJ1aXd7tlR9dC06YiOXDXQJ4f1EARVQB7vq9aeGhgkh5T8wJCmRPYXTTFUviYUFQuYVjdgmySWIZ7aNMF4OxaXxwjlNmMVXmS3upDWhG7ZEtXWcD1VYS4i7p9GFbrRksCCdo8gOl68gZq0TymfutMIgYlvGxBNkWDIHuGElmi84iBcx0HKQxgWDAvDs0oH1i9QSxLOauv9JCJGiNO7XNs"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt="Delivery"
                    />
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="group relative rounded-[32px] bg-white border border-zinc-200 hover:border-[#F5A800]/40 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] p-8 overflow-hidden text-center flex flex-col items-center">
                <div className="relative z-10 w-full">
                  <span className="material-symbols-outlined text-4xl text-[#F5A800] mb-8">
                    payments
                  </span>
                  <h3 className="font-serif italic text-[24px] font-bold text-zinc-900 mb-4">
                    Student pricing
                  </h3>
                  <p className="font-['DM_Sans'] text-zinc-500 text-sm leading-relaxed">
                    Built for campus budgets. Premium taste without premium
                    pricing.
                  </p>
                  <div className="mt-16 flex flex-col items-center gap-2">
                    <span className="text-6xl font-black text-[#F5A800] tracking-tighter leading-none">
                      ₦0
                    </span>
                    <span className="font-['DM_Sans'] text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
                      Delivery for freshmen
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="group relative rounded-[32px] bg-white border border-zinc-200 hover:border-[#F5A800]/40 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] p-8 overflow-hidden text-center flex flex-col items-center">
                <div className="relative z-10 w-full">
                  <span className="material-symbols-outlined text-4xl text-[#F5A800] mb-8">
                    restaurant
                  </span>
                  <h3 className="font-serif italic text-[24px] font-bold text-zinc-900 mb-4">
                    Authentic heat
                  </h3>
                  <p className="font-['DM_Sans'] text-zinc-500 text-sm leading-relaxed mb-10">
                    No shortcuts. Just real fire, real smoke, real flavor.
                  </p>
                  <div className="rounded-2xl overflow-hidden h-44 border border-zinc-100 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuArPl-zno48uAKmTk62d9vB4ntdnt8Hf5yRswm1w8gY587ewJlIri5zDojQt1sZfpUZDBcumJCO6xjIu8l1jNHAPPlrcEOrKtX4Gj-CNxB1cldPqL1Oy4fI3QqCb0rLFYRQUs55i6L897QmhdGjVIUdGde5SNwZbUkW2IOoldgeRIV_rsXttqhxDFYo9U0mfoPWK8Xzl9_mHkk4CYUPUmrmhZjfbCc_gtAp9LY8MYrTKYsMf-0PokmVFGLYAy8Bo_GXfAxmGGgTJu8"
                      className="w-full h-full object-cover"
                      alt="Authentic"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style>{`
    .font-serif { font-family: 'Playfair Display', serif; }
  `}</style>
        </section>

        {/* SOCIAL PROOF */}
        <SocialProof />

        {/* IMAGE STRIP */}
        <ImageStrip />

        {/* FINAL CTA */}
        <section className="relative py-40 px-6 md:px-10 overflow-hidden bg-zinc-950">
          {/* Full Section Background Image Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
              backgroundImage: `url('https://pub-d63312c8b711451a9e50fb2916838f4a.r2.dev/Bole%20home.jpg')`,
            }}
          />

          {/* Global Section Overlays - Ensures the entire image is moody and professional */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/80" />

          <div className="max-w-5xl mx-auto relative z-10 text-center">
            {/* Editorial Headline */}
            <h2
              className="font-serif italic tracking-tight leading-[1.1] mb-8 text-white"
              style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
            >
              Stop guessing.
              <br />
              <span className="bg-gradient-to-r from-[#F5A800] to-[#FFCC33] bg-clip-text text-transparent not-italic font-semibold">
                Start reserving.
              </span>
            </h2>

            {/* DM Sans Body Copy */}
            <p className="font-['DM_Sans'] text-zinc-200 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Find vendors, check stock, and lock your portion before you even
              step outside. The smoky goodness you crave is just a tap away.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Enter campus location"
                className="font-['DM_Sans'] flex-1 bg-white/5 backdrop-blur-2xl border border-white/10 text-white placeholder:text-white/30 rounded-2xl px-6 py-5 focus:ring-1 focus:ring-[#F5A800]/50 outline-none transition-all focus:bg-white/10"
              />

              <Link
                to="/explore"
                className="font-['DM_Sans'] bg-[#F5A800] text-zinc-900 font-bold px-10 py-5 rounded-2xl
           relative overflow-hidden group
           hover:scale-[1.02] hover:bg-white
           hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]
           active:scale-[0.98]
           transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Find vendors
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-500">
                    arrow_forward
                  </span>
                </span>
              </Link>
            </div>

            {/* Fine Print */}
            <p className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.4em] text-white/40 mt-12 font-bold">
              No app download • Works instantly • Free to use
            </p>
          </div>

          <style>{`
    .font-serif { font-family: 'Playfair Display', serif; }
  `}</style>
        </section>
      </main>

      {/* FOOTER SPACING */}
      <footer className="relative bg-[#0A0A0A] border-t border-[#1E1E1E] pt-20 pb-10 px-6">
        {/* subtle glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,168,0,0.1),transparent_60%)] pointer-events-none" />

        <div className="relative max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* BRAND */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-serif italic text-2xl font-black tracking-tighter text-[#F5A800]">
                  bole4us
                </span>
              </div>
              <p className="font-['DM_Sans'] text-[#A0A0A0] text-sm max-w-xs leading-relaxed">
                Real-time bole discovery for Nigerian campus students. Built for
                the streets.
              </p>
            </div>

            {/* NAV */}
            <div>
              <h4 className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.3em] text-[#555] font-bold mb-8">
                Product
              </h4>
              <div className="flex flex-col gap-4 font-['DM_Sans'] text-sm">
                <Link
                  to="/explore"
                  className="text-[#A0A0A0] hover:text-[#F5A800] transition-colors duration-300"
                >
                  Explore
                </Link>
                <Link
                  to="/register"
                  className="text-[#A0A0A0] hover:text-[#F5A800] transition-colors duration-300"
                >
                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="text-[#A0A0A0] hover:text-[#F5A800] transition-colors duration-300"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* ROLES */}
            <div>
              <h4 className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.3em] text-[#555] font-bold mb-8">
                Roles
              </h4>
              <div className="flex flex-col gap-4 font-['DM_Sans'] text-sm">
                <Link
                  to="/register?role=student"
                  className="text-[#A0A0A0] hover:text-[#F5A800] transition-colors duration-300"
                >
                  Students
                </Link>
                <Link
                  to="/register?role=agent"
                  className="text-[#A0A0A0] hover:text-[#F5A800] transition-colors duration-300"
                >
                  Agents
                </Link>
                <Link
                  to="/register?role=vendor"
                  className="text-[#A0A0A0] hover:text-[#F5A800] transition-colors duration-300"
                >
                  Vendors
                </Link>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.3em] text-[#555] font-bold mb-8">
                Contact
              </h4>
              <div className="flex flex-col gap-4 font-['DM_Sans'] text-sm">
                <a
                  href="mailto:hello@bole4us.com"
                  className="text-[#A0A0A0] hover:text-[#F5A800] transition-colors duration-300"
                >
                  hello@bole4us.com
                </a>
                <a
                  href="#"
                  className="text-[#A0A0A0] hover:text-[#F5A800] transition-colors duration-300"
                >
                  Twitter / X
                </a>
                <a
                  href="#"
                  className="text-[#A0A0A0] hover:text-[#F5A800] transition-colors duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-[#1E1E1E]">
            <p className="font-['DM_Sans'] text-[11px] tracking-wide text-[#555]">
              © 2026 BOLE4US. BUILT IN NIGERIA.
            </p>

            <div className="flex gap-8 font-['DM_Sans'] text-[11px] font-bold tracking-widest text-[#555]">
              <a href="#" className="hover:text-white transition-colors">
                PRIVACY
              </a>
              <a href="#" className="hover:text-white transition-colors">
                TERMS
              </a>
            </div>
          </div>
        </div>

        <style>{`
    .font-serif { font-family: 'Playfair Display', serif; }
  `}</style>
      </footer>
    </div>
  );
};

export default Home;
