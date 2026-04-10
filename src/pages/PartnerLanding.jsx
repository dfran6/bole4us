import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, PlayCircle, Star, TrendingUp, DollarSign, Target, Check, Share2, Mail, Globe, Menu, ShieldCheck } from 'lucide-react';

const PartnerLanding = () => {
  return (
    <div className="bg-white text-zinc-900 font-body selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
        <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-primary p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
              <Flame className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <span className="text-2xl font-black text-zinc-900 font-headline tracking-tighter uppercase">
              bole4us
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {['How it Works', 'Benefits', 'FAQ'].map((item) => (
              <a key={item} className="text-zinc-500 font-black text-[10px] uppercase tracking-widest hover:text-primary transition-colors" href={`#${item.toLowerCase().replace(/ /g, '-')}`}>
                {item}
              </a>
            ))}
            <Link to="/register" className="px-8 py-3 bg-zinc-900 hover:bg-primary text-white font-black text-[10px] uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-zinc-200 active:scale-95">
              Partner Login
            </Link>
          </div>
          <button className="md:hidden p-2 bg-zinc-100 rounded-xl">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-zinc-50/50">
          <div className="absolute inset-0 -z-10 opacity-5">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full blur-[120px]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white shadow-sm border border-zinc-100 text-primary rounded-2xl font-black text-[10px] uppercase tracking-[0.2em]">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                JOIN THE URBAN HEAT
              </div>
              <h1 className="font-headline text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter text-zinc-900 uppercase">
                Turn Your <span className="text-primary">Grill</span> <br />
                into a Goldmine.
              </h1>
              <p className="text-lg text-zinc-500 font-medium leading-relaxed max-w-lg">
                We connect the city's finest Heat masters with thousands of hungry customers. Scale your business with
                the platform built for street food excellence.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <a
                  className="px-10 py-5 bg-primary text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all text-center"
                  href="#signup"
                >
                  Get Started Today
                </a>
                <a
                  className="px-10 py-5 bg-white border border-zinc-200 text-zinc-900 font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-zinc-50 transition-all flex items-center gap-3 shadow-sm"
                  href="#"
                >
                  <PlayCircle className="w-5 h-5 text-primary" />
                  Watch Demo
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-8 border-white group">
                <img
                  alt="Grilled Roasted Plantain"
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-[3s]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5EztV0GDYLFGgnh1VMrsjoeZKzilIo4IVrkkC_VFjMw9ZIKWePxn6axejI6RDLmC7Uq1Uk9DSKmllGjQjI5z-oltBVc_lm0ELz4aX-huZp2DzPaexqiPOWXzKLmDNoLVWuknUcTJwfJ-OthklbJ8tws2-Rh9640ESt27dAbIh7lz6ckKHrItrx8zp-kX8hyq3dB9NLVNnPDQj46PzYFRca5UH25xhqQFiKX2dcJ2USbAjpeNeGbSbtAV0Hy0Rq4iy-IX7qmuzV0Y"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-2xl">
                  <div className="flex gap-1 text-primary mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-white font-bold text-lg leading-snug">
                    "The volume of orders we get through bole4us changed everything for our small grill spot."
                  </p>
                </div>
              </div>
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary rounded-full -z-10 blur-[100px] opacity-20"></div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-32 bg-white" id="benefits">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center max-w-3xl mx-auto mb-24">
              <h2 className="font-headline text-5xl font-black text-zinc-900 uppercase tracking-tighter mb-6">Built for Growth</h2>
              <p className="text-zinc-400 font-medium text-lg leading-relaxed">
                We handle the logistics and marketing so you can focus on the fire. Join the community of successful
                vendors today.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: TrendingUp,
                  title: 'Reach 10k+ Customers',
                  desc: 'Instantly gain visibility to our massive network of enthusiasts looking for their next session.',
                  color: 'bg-primary/10 text-primary'
                },
                {
                  icon: DollarSign,
                  title: 'Fast Weekly Payouts',
                  desc: 'Consistent cash flow with automatic weekly payouts directly to your account. No hidden fees.',
                  color: 'bg-zinc-900 text-white'
                },
                {
                  icon: Target,
                  title: 'Marketing Support',
                  desc: 'We handle photography, ads, and loyalty programs to keep them coming back to your stall.',
                  color: 'bg-primary/10 text-primary'
                }
              ].map((item, i) => (
                <div key={i} className="bg-zinc-50 p-10 rounded-[2.5rem] border border-zinc-100 hover:bg-white hover:shadow-2xl transition-all group">
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-headline text-2xl font-black text-zinc-900 uppercase tracking-tight mb-4">{item.title}</h3>
                  <p className="text-zinc-500 font-medium text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Flow */}
        <section className="py-32 bg-zinc-900 text-white" id="how-it-works">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="font-headline text-5xl font-black text-center uppercase tracking-tighter mb-24">Your Path to the Heat</h2>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-20">
              {[
                { step: '01', title: 'Apply Online', desc: 'Fill out our simple registration form with your business details and location.' },
                { step: '02', title: 'Quality Check', desc: 'Our team visits for a quick taste test and hygiene check to ensure brand standards.' },
                { step: '03', title: 'Start Grilling', desc: 'Go live on the app and watch the orders roll in from across the neighborhood.', icon: Flame }
              ].map((step, i) => (
                <div key={i} className="relative text-center group">
                  <div className={`w-24 h-24 ${i === 2 ? 'bg-primary border-transparent' : 'bg-transparent border-2 border-white/10'} rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl group-hover:border-primary transition-all`}>
                    {step.icon ? <step.icon className="text-white w-10 h-10" fill="currentColor" /> : <span className="text-3xl font-black font-headline text-white">{step.step}</span>}
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{step.title}</h3>
                  <p className="text-zinc-500 font-medium text-sm leading-relaxed">
                    {step.desc}
                  </p>
                  {i < 2 && <div className="hidden md:block absolute top-12 left-[70%] w-full h-[1px] bg-white/5 -z-10"></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section className="py-32 bg-white" id="signup">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="font-headline text-6xl font-black text-zinc-900 uppercase tracking-tighter leading-none">Ready to <br /><span className="text-primary tracking-[-0.1em]">Heat Up?</span></h2>
              <div className="space-y-8">
                {[
                  'Access dedicated vendor dashboard and analytics',
                  'Professional food photography of your menu',
                  'Integrated logistics for reliable deliveries'
                ].map((text, i) => (
                  <div key={i} className="flex gap-6 items-center group">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex-shrink-0 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                      <Check className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <p className="text-lg font-black uppercase tracking-tight text-zinc-900">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-zinc-50 p-10 md:p-16 rounded-[3.5rem] border border-zinc-100 shadow-[0_50px_100px_rgba(0,0,0,0.03)]">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">
                      Business Name
                    </label>
                    <input
                      className="w-full px-6 py-4 bg-white rounded-2xl border border-zinc-100 shadow-sm focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all outline-none"
                      placeholder="Smoky Grill Palace"
                      type="text"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">
                      Owner Name
                    </label>
                    <input
                      className="w-full px-6 py-4 bg-white rounded-2xl border border-zinc-100 shadow-sm focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all outline-none"
                      placeholder="Full legal name"
                      type="text"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">
                      Phone Number
                    </label>
                    <input
                      className="w-full px-6 py-4 bg-white rounded-2xl border border-zinc-100 shadow-sm focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all outline-none"
                      placeholder="+234 ..."
                      type="tel"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">
                      Specialty
                    </label>
                    <select className="w-full px-6 py-4 bg-white rounded-2xl border border-zinc-100 shadow-sm focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all outline-none appearance-none font-bold text-sm">
                      <option>Select Specialty</option>
                      <option>Signature Heat</option>
                      <option>Marine Heat (Fish)</option>
                      <option>The Root Mix (Yam/Plantain)</option>
                      <option>Full Combo Platter</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">
                    Primary Location
                  </label>
                  <input
                    className="w-full px-6 py-4 bg-white rounded-2xl border border-zinc-100 shadow-sm focus:ring-4 focus:ring-primary/5 focus:border-primary/20 transition-all outline-none"
                    placeholder="Street address or popular landmark"
                    type="text"
                  />
                </div>
                <div className="pt-6">
                  <button
                    className="w-full py-6 bg-primary text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-2xl shadow-primary/30 hover:scale-[1.01] active:scale-[0.98] transition-all"
                    type="submit"
                  >
                    Submit Application
                  </button>
                  <p className="text-center text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-10">
                    JOIN THE HEAT REVOLUTION
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Shared Footer */}
      <footer className="bg-zinc-900 text-white py-24 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                <Flame className="w-10 h-10 text-primary" fill="currentColor" />
                <span className="text-3xl font-black font-headline tracking-tighter uppercase">bole4us</span>
              </div>
              <p className="text-zinc-500 font-medium max-w-sm leading-relaxed mb-8">
                Connecting the urban heat with every doorstep. The city's favorite street-food platform, empowering
                local vendors since 2024.
              </p>
              <div className="flex gap-4">
                {[Globe, Share2, Mail].map((Icon, i) => (
                  <a key={i} className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all shadow-xl" href="#">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-black text-[10px] uppercase tracking-[0.2em] mb-10 text-primary">Company</h5>
              <ul className="space-y-5 text-zinc-400 font-bold text-xs uppercase tracking-widest">
                {['About Us', 'How it Works', 'Pricing', 'Blog'].map((item) => (
                  <li key={item}><a className="hover:text-white transition-colors" href="#">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-black text-[10px] uppercase tracking-[0.2em] mb-10 text-primary">Support</h5>
              <ul className="space-y-5 text-zinc-400 font-bold text-xs uppercase tracking-widest">
                {['Help Center', 'Partner Terms', 'Privacy Policy', 'Contact Us'].map((item) => (
                  <li key={item}><a className="hover:text-white transition-colors" href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 font-black text-[10px] uppercase tracking-[0.2em]">
            <p>© 2024 BOLE4US. THE URBAN HEAT EXPERIENCE.</p>
            <div className="flex gap-10">
              {['Cookies', 'Accessibility', 'Sustainability'].map((item) => (
                <a key={item} className="hover:text-white transition-colors" href="#">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PartnerLanding;
