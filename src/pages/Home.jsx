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
        <section className="py-28 px-6 md:px-10">
          <div className="max-w-[1100px] mx-auto">
            {/* Section Intro */}
            <div className="mb-16 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#F5A800] font-semibold mb-4 block">
                Why Bole4us
              </span>

              <h2 className="font-headline font-black text-4xl md:text-5xl tracking-tight mb-4">
                Built for how campus actually works
              </h2>

              <p className="text-[#A0A0A0] text-lg">
                No guessing. No wasted walks. Just real-time clarity before you
                step out.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* CARD 1 */}
              <div className="group relative rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#F5A800]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden p-8">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(245,168,0,0.15),transparent_60%)]" />

                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl text-[#F5A800] mb-6">
                    bolt
                  </span>

                  <h3 className="font-headline font-bold text-2xl mb-3">
                    Fast delivery
                  </h3>

                  <p className="text-[#A0A0A0] text-sm leading-relaxed">
                    Your order moves while the heat is still fresh. No cold
                    bole, no delays.
                  </p>

                  <div className="mt-10 rounded-xl overflow-hidden h-44">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGEwd4mWQJ02uF5KCt5S5iP6yrJMDpsj9MdzFAFhwN0Mz4NYRX59ZEMIkJ1aXd7tlR9dC06YiOXDXQJ4f1EARVQB7vq9aeGhgkh5T8wJCmRPYXTTFUviYUFQuYVjdgmySWIZ7aNMF4OxaXxwjlNmMVXmS3upDWhG7ZEtXWcD1VYS4i7p9GFbrRksCCdo8gOl68gZq0TymfutMIgYlvGxBNkWDIHuGElmi84iBcx0HKQxgWDAvDs0oH1i9QSxLOauv9JCJGiNO7XNs"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="group relative rounded-3xl bg-[#111111] border border-[#2A2A2A] hover:border-[#F5A800]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden p-8">
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#F5A800]/10 blur-3xl rounded-full" />

                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl text-[#F5A800] mb-6">
                    payments
                  </span>

                  <h3 className="font-headline font-bold text-2xl mb-3">
                    Student pricing
                  </h3>

                  <p className="text-[#A0A0A0] text-sm leading-relaxed">
                    Built for campus budgets. Premium taste without premium
                    pricing.
                  </p>

                  <div className="mt-12 flex items-baseline gap-2">
                    <span className="text-5xl font-black text-[#F5A800]">
                      ₦0
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#A0A0A0]">
                      Delivery for freshmen
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="group relative rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#F5A800]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden p-8">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl text-[#F5A800] mb-6">
                    restaurant
                  </span>

                  <h3 className="font-headline font-bold text-2xl mb-3">
                    Authentic heat
                  </h3>

                  <p className="text-[#A0A0A0] text-sm leading-relaxed">
                    No shortcuts. Just real fire, real smoke, real flavor.
                  </p>

                  <div className="mt-10 rounded-xl overflow-hidden h-44 grayscale group-hover:grayscale-0 transition duration-500">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuArPl-zno48uAKmTk62d9vB4ntdnt8Hf5yRswm1w8gY587ewJlIri5zDojQt1sZfpUZDBcumJCO6xjIu8l1jNHAPPlrcEOrKtX4Gj-CNxB1cldPqL1Oy4fI3QqCb0rLFYRQUs55i6L897QmhdGjVIUdGde5SNwZbUkW2IOoldgeRIV_rsXttqhxDFYo9U0mfoPWK8Xzl9_mHkk4CYUPUmrmhZjfbCc_gtAp9LY8MYrTKYsMf-0PokmVFGLYAy8Bo_GXfAxmGGgTJu8"
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <SocialProof />

        {/* IMAGE STRIP */}
        <ImageStrip />

        {/* FINAL CTA */}
        {/* <FinalCTA /> */}

        {/* INLINE CTA (SECONDARY CONVERSION) */}
        <section className="py-32 px-6 md:px-10">
          <div className="max-w-5xl mx-auto relative rounded-[3rem] overflow-hidden border border-[#F5A800]/20 bg-[#0E0E0E]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(245,168,0,0.2),transparent_60%)]" />

            <div className="relative z-10 p-12 md:p-20 text-center">
              <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tight mb-6">
                Stop guessing.
                <br />
                <span className="text-[#F5A800]">Start reserving.</span>
              </h2>

              <p className="text-[#A0A0A0] text-lg mb-10 max-w-xl mx-auto">
                Find vendors, check stock, and lock your portion before you even
                step outside.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="text"
                  placeholder="Enter campus location"
                  className="flex-1 bg-[#1A1A1A] border border-[#2A2A2A] text-white placeholder:text-[#777] rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#F5A800] outline-none transition"
                />

                <Link
                  to="/explore"
                  className="bg-[#F5A800] text-black font-bold px-8 py-4 rounded-xl hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(245,168,0,0.35)] transition-all"
                >
                  Find vendors
                </Link>
              </div>

              <p className="text-xs text-[#555] mt-6">
                No app download • Works instantly • Free to use
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER SPACING */}
      <div className="h-20" />
      <footer className="relative bg-[#0A0A0A] border-t border-[#1E1E1E] pt-20 pb-10 px-6 mt-20">
        {/* subtle glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,168,0,0.1),transparent_60%)] pointer-events-none" />

        <div className="relative max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* BRAND */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-xl font-headline font-black">
                <span className="text-[#F5A800]">bole4us</span>
              </div>

              <p className="text-[#A0A0A0] text-sm max-w-xs">
                Real-time bole discovery for Nigerian campus students. Built for
                the streets.
              </p>
            </div>

            {/* NAV */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#777] mb-6">
                Product
              </h4>
              <div className="flex flex-col gap-3">
                <Link
                  to="/explore"
                  className="text-[#A0A0A0] hover:text-[#F5A800] transition"
                >
                  Explore
                </Link>
                <Link
                  to="/register"
                  className="text-[#A0A0A0] hover:text-[#F5A800] transition"
                >
                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="text-[#A0A0A0] hover:text-[#F5A800] transition"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* ROLES */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#777] mb-6">
                Roles
              </h4>
              <div className="flex flex-col gap-3">
                <Link
                  to="/register?role=student"
                  className="text-[#A0A0A0] hover:text-[#F5A800] transition"
                >
                  Students
                </Link>
                <Link
                  to="/register?role=agent"
                  className="text-[#A0A0A0] hover:text-[#F5A800] transition"
                >
                  Agents
                </Link>
                <Link
                  to="/register?role=vendor"
                  className="text-[#A0A0A0] hover:text-[#F5A800] transition"
                >
                  Vendors
                </Link>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#777] mb-6">
                Contact
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:hello@bole4us.com"
                  className="text-[#A0A0A0] hover:text-[#F5A800] transition"
                >
                  hello@bole4us.com
                </a>
                <a
                  href="#"
                  className="text-[#A0A0A0] hover:text-[#F5A800] transition"
                >
                  Twitter / X
                </a>
                <a
                  href="#"
                  className="text-[#A0A0A0] hover:text-[#F5A800] transition"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#1E1E1E]">
            <p className="text-xs text-[#666]">
              © 2026 bole4us. Built in Nigeria.
            </p>

            <div className="flex gap-6 text-xs text-[#777]">
              <a href="#" className="hover:text-[#F5A800] transition">
                Privacy
              </a>
              <a href="#" className="hover:text-[#F5A800] transition">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
