import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-[20px] shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
            <span className="font-headline font-black text-2xl tracking-tighter text-on-surface uppercase mt-1">bole4us</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-primary font-bold border-b-2 border-primary py-1 transition-colors">Home</Link>
            <Link to="/explore" className="text-on-surface-variant font-medium hover:text-primary transition-colors">Explore</Link>
            <Link to="/" className="text-on-surface-variant font-medium hover:text-primary transition-colors">How it Works</Link>
            <Link to="/faq" className="text-on-surface-variant font-medium hover:text-primary transition-colors">FAQ</Link>

          </div>
          <div className="flex items-center gap-4">
              
              <Link to="/register" className="px-6 py-2.5 bg-primary hover:bg-primary-container text-on-primary font-bold rounded-xl transition-all shadow-lg shadow-primary/20">
                Sign up
              </Link>
              <Link to="/register" className="px-6 py-2.5 text-primary border border-primary hover:bg-primary text-on-primary font-bold rounded-xl transition-all shadow-lg  hover:text-white">
                Login
              </Link>
            
            {/* <button className="p-2 text-on-surface-variant bg-red-700 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors relative">
              <span className="material-symbols-outlined">shopping_cart</span>
            </button>
            <Link to="/profile" className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden block">
              <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkysGk3Ne80TgRp9LAkBHrXsW1pbDLpacGNAcx2nv84iY0JeAO1IKbJ8o4uinh4xTcRjTnWHOvoKdE5FYnLSAFqxjdO0J4rmQ79hhHAKzIObu0o8lMDvd4VRb3m8uHQme8HEGE06vMCvgXXnx6eJ022z1yShxtPX1xLs39kyvz1eSb01i6OJ_AUeuM5od5Q6C6c5Yx-LG7oP_XdrXPThshHNtIwHPav4jAJmHdyfk2xne5eWEr4wf3xQ2wfSg89JaPn0VmpoC0ukM" />
            </Link> */}
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[870px] flex items-center overflow-hidden px-6 lg:px-12 py-12">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 z-10">
              <div className="inline-flex items-center gap-2 bg-secondary-fixed px-4 py-2 rounded-full mb-6">
                <span className="material-symbols-outlined text-on-secondary-fixed text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                <span className="font-label font-bold text-xs uppercase tracking-widest text-on-secondary-fixed">Live in University Hubs</span>
              </div>
              <h1 className="font-headline font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter text-on-surface mb-8">
                The Urban <br /><span className="text-primary italic">Heat</span> Experience.
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                Authentic charcoal-grilled bole delivered at student-friendly prices. Feel the heat of the streets, served with high-end sophistication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/explore" className="bg-gradient-to-br from-[#bc0100] to-[#eb0000] text-on-primary px-8 py-5 rounded-xl font-headline font-bold text-lg flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all">
                  Find Bole Near You
                  <span className="material-symbols-outlined">near_me</span>
                </Link>
                <Link to="/partner" className="bg-surface-container-lowest text-on-surface text-center px-8 py-5 rounded-xl font-headline font-bold text-lg border-2 border-surface-container-highest hover:bg-surface-container-low active:scale-95 transition-all">
                  Register as Vendor
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl transform lg:rotate-3">
                <img alt="The Urban Heat Experience" className="w-full h-full object-cover scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBe_M3-XevMoZt4IKilVeSettIzieTP0_Fo9ks6mRA1OLjHiUGO9WSdfXii5xTl2o6lNrwuOTAC22Mdz5RSNn8XdjkslLcBoTyqrA3uJYkM8lrNDCNNTWwGnxbvuzwokh9k_hvi01kiCC-w1bnUuGkpkQICxn0dPLuC5Tu2uac0y3DEKLaQNcjOlreWqTy-N2WvdXcqjJr-3qGNjoKDGOjAj8mbbDkqsmYOQm0jrr-N3P0unGCcVdKKmi9ejV9qY4Qr4zawnvm7-Q" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-xl max-w-[240px] z-20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-on-primary">
                    <span className="material-symbols-outlined">timer</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-widest leading-none">Avg Delivery</p>
                    <p className="text-xl font-headline font-black text-on-surface">18 MINS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-surface-container-low rounded-l-[5rem] hidden lg:block"></div>
        </section>

        {/* Bento Grid Value Props */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Fast Delivery */}
            <div className="bg-surface-container-low p-8 rounded-[2rem] flex flex-col justify-between group hover:bg-primary transition-colors duration-500">
              <div>
                <span className="material-symbols-outlined text-4xl text-primary group-hover:text-on-primary transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                <h3 className="font-headline font-bold text-3xl mt-6 mb-4 group-hover:text-on-primary transition-colors">Fast delivery</h3>
                <p className="text-on-surface-variant group-hover:text-on-primary/80 transition-colors">Engineered logistics to ensure your bole arrives while the charcoal heat is still lingering.</p>
              </div>
              <div className="mt-12 overflow-hidden rounded-xl h-48">
                <img alt="Fast delivery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGEwd4mWQJ02uF5KCt5S5iP6yrJMDpsj9MdzFAFhwN0Mz4NYRX59ZEMIkJ1aXd7tlR9dC06YiOXDXQJ4f1EARVQB7vq9aeGhgkh5T8wJCmRPYXTTFUviYUFQuYVjdgmySWIZ7aNMF4OxaXxwjlNmMVXmS3upDWhG7ZEtXWcD1VYS4i7p9GFbrRksCCdo8gOl68gZq0TymfutMIgYlvGxBNkWDIHuGElmi84iBcx0HKQxgWDAvDs0oH1i9QSxLOauv9JCJGiNO7XNs" />
              </div>
            </div>

            {/* Student Prices */}
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="z-10">
                <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                <h3 className="font-headline font-bold text-3xl mt-6 mb-4">Student-friendly prices</h3>
                <p className="text-on-surface-variant">We believe the heat belongs to everyone. Premium taste at campus-approved price points.</p>
              </div>
              <div className="mt-12 flex items-baseline gap-2 z-10">
                <span className="text-5xl font-headline font-black text-primary">₦0</span>
                <span className="text-lg font-label font-bold text-on-surface-variant uppercase">Delivery Fee for Freshmen</span>
              </div>
              {/* Abstract Shape */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-fixed opacity-20 rounded-full blur-3xl"></div>
            </div>

            {/* Authentic Heat */}
            <div className="bg-on-surface p-8 rounded-[2rem] flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl text-secondary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant</span>
                <h3 className="font-headline font-bold text-3xl mt-6 mb-4 text-surface">Authentic heat</h3>
                <p className="text-surface-variant">Real wood-fire grilling techniques passed down through generations. No electric grills, just soul.</p>
              </div>
              <div className="mt-12 overflow-hidden rounded-xl h-48 grayscale hover:grayscale-0 transition-all duration-500">
                <img alt="Authentic heat" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArPl-zno48uAKmTk62d9vB4ntdnt8Hf5yRswm1w8gY587ewJlIri5zDojQt1sZfpUZDBcumJCO6xjIu8l1jNHAPPlrcEOrKtX4Gj-CNxB1cldPqL1Oy4fI3QqCb0rLFYRQUs55i6L897QmhdGjVIUdGde5SNwZbUkW2IOoldgeRIV_rsXttqhxDFYo9U0mfoPWK8Xzl9_mHkk4CYUPUmrmhZjfbCc_gtAp9LY8MYrTKYsMf-0PokmVFGLYAy8Bo_GXfAxmGGgTJu8" />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="py-24 px-6 relative">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#bc0100] to-[#eb0000] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="font-headline font-black text-4xl md:text-6xl text-on-primary mb-6 tracking-tight">Ready to taste the streets?</h2>
              <p className="text-on-primary/80 text-lg mb-10 max-w-xl mx-auto">Join 10,000+ students already savoring the heat experience daily.</p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input className="flex-1 bg-white/20 border-white/30 placeholder:text-white/70 text-white rounded-xl px-6 py-4 focus:ring-2 focus:ring-white outline-none" placeholder="Enter campus location" type="text" />
                <Link to="/explore" className="bg-secondary-container text-on-secondary-container flex items-center justify-center font-headline font-bold px-8 py-4 rounded-xl hover:bg-secondary-fixed transition-colors">Start Eating</Link>
              </div>
            </div>
            {/* Background texture simulation */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
                <span className="font-headline font-black text-2xl tracking-tighter text-on-surface uppercase mt-1">bole4us</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">Connecting the urban grind to the primal fire of the grill. Authentic, fast, and for the community.</p>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-xl">share</span>
                </a>
                <a className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-xl">public</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-label font-bold text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-8">Navigation</h4>
              <ul className="space-y-4">
                <li><Link className="font-label font-medium text-sm text-on-surface hover:text-primary transition-colors" to="/explore">EXPLORE</Link></li>
                <li><Link className="font-label font-medium text-sm text-on-surface hover:text-primary transition-colors" to="/leaderboards">RANKINGS</Link></li>
                <li><a className="font-label font-medium text-sm text-on-surface hover:text-primary transition-colors" href="#">CAREERS</a></li>
                <li><a className="font-label font-medium text-sm text-on-surface hover:text-primary transition-colors" href="#">PRESS</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-label font-bold text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-8">Legal</h4>
              <ul className="space-y-4">
                <li><a className="font-label font-medium text-sm text-on-surface hover:text-primary transition-colors" href="#">VENDOR TERMS</a></li>
                <li><a className="font-label font-medium text-sm text-on-surface hover:text-primary transition-colors" href="#">PRIVACY POLICY</a></li>
                <li><a className="font-label font-medium text-sm text-on-surface hover:text-primary transition-colors" href="#">SUPPORT</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-label font-bold text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-8">Newsletter</h4>
              <p className="text-sm text-on-surface-variant mb-4">Get the latest heat in your inbox.</p>
              <div className="relative">
                <input className="w-full bg-surface-container-highest border-none rounded-xl py-3 pl-4 pr-12 text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="Email address" type="email" />
                <button className="absolute right-2 top-1.5 p-1.5 bg-primary text-on-primary rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-surface-container-highest flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">© 2024 bole4us. The Urban Heat Experience.</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#fcd400]"></span>
              <span className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface">Systems Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
