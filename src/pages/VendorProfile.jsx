import React from 'react';
import UserLayout from '../components/UserLayout';
import { Star, MapPin, Heart, Flame, UtensilsCrossed, Fish, ArrowRight, Zap, Info, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const VendorProfile = () => {
  return (
    <UserLayout>
      <div className="max-w-7xl mx-auto space-y-12 pb-20">
        {/* Vendor Hero Section */}
        <header className="relative rounded-[3rem] overflow-hidden aspect-[21/9] md:aspect-[3/1] shadow-2xl border border-white/10 group">
          <img alt="Vendor Banner" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARHf7RS_02vJN6R_mXUO3h49FLtoFlFy2qSFMb93VkeEoAtwif-3UIZt6EXp6p97x4J8LecY0UjT1gGs8jDiW6Yrj8qnwHB-NIjzjmHmJz3VrgcSRc-IRaHJOqHECjipYoUzuW9PVHwdPbvnI16A5XDLb0Xxg2XFDxlwIiPzfEhNW4xmZhSZIW9c_tchjEKe0CUz7hEKzEBP3WnTImZzbpa4MyH6LkEK38VYm7e4QQP-bZeXAPRFoDiK0nI_TMHfPxTbFuw3HNdmM" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-primary text-white px-4 py-1.5 rounded-xl text-[10px] font-black tracking-widest uppercase shadow-lg shadow-primary/20">PREMIUM HEAT</span>
                <span className="bg-white/10 backdrop-blur-md text-white/80 px-4 py-1.5 rounded-xl text-[10px] font-black tracking-widest uppercase border border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div> Open Now
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black font-headline text-white tracking-tighter uppercase leading-none">Smoky Delta Grill</h1>
              <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" fill="currentColor" />
                  <span>4.8 <span className="text-white/40 ml-1">(2.4k+ Reviews)</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Victoria Island, Delta</span>
                </div>
              </div>
            </div>
            <button className="bg-white text-zinc-900 group/btn px-10 py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all flex items-center gap-3 shadow-2xl active:scale-95">
              <Zap className="w-5 h-5 group-hover/btn:fill-current" />
              Add to Favorites
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-16">
            {/* Menu Navigation */}
            <div className="flex gap-10 overflow-x-auto pb-4 custom-scrollbar border-b border-zinc-100">
              {['The Roast', 'Gallery', 'Vendor Info', 'Reviews'].map((tab, i) => (
                <button key={i} className={`text-[10px] font-black uppercase tracking-[0.2em] pb-4 transition-all whitespace-nowrap ${i === 0 ? 'text-primary border-b-2 border-primary' : 'text-zinc-400 hover:text-zinc-600'}`}>{tab}</button>
              ))}
            </div>

            {/* Bento Menu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Section: Heat Specials */}
              <div className="space-y-8">
                <h2 className="text-3xl font-black font-headline text-zinc-900 uppercase tracking-tight flex items-center gap-4">
                  Heat Specials <div className="h-0.5 flex-1 bg-zinc-100"></div>
                </h2>
                <div className="space-y-6">
                  {[
                    { name: 'Signature Heat Platter', price: '₦3,500', desc: 'Perfectly charred ripe plantains served with spicy pepper sauce and ugba.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8DyaNS-xyvW6elKX44mE8wgpifAtZ22MyXAZoHQ03BnANTBR5Fbs0H0HjX44K1xoR77iwkQUBDFqrPIqAl7RxMygAh_4Rx8vLLwR9DgJ0fLUxx6VmFrqSIYcaTSdhg5QkEfvVyKviXLYFZcezcPsmdpX-0AfMbI2CpstJWk0YMbig_331Qak8-p5nsIPigk_5N4wcc0unEgVfykK0WlIkFjmu7_lrHnRvPi9JjpBiX_TmQFynWXW2hFIO3pBAyIISllT52QwyPD0' },
                    { name: 'Extra Spicy Heat Mix', price: '₦4,200', desc: 'Double heat plantains for those who enjoy the fire. Extra pepper base included.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwWdJjlxpgSxwFO2SZuoRUMoB6tN3id8ThtfqYXpdDytIV-7ABjNUrSVUH6A3iSTZ7HQ0mA5ro9Y87rJVv4fE-LDwM8ULlHuKQPHJ3YJYUWfJLalq5IFdI51pOoUK9oeNHukSfnQdbvUxn3Y9RsTu15d9q0v1ChbXiTNRKoARipeXxvM3ke0J8L5vNVJg0n_ZsbJ6Md2-qlQZuXhzS9_mX5Y0ScYpZgEg4c4QgJSeiIurKDkybyT-ve293alYzhTdEOmEVfx-4EE4' }
                  ].map((item, i) => (
                    <div key={i} className="group bg-white p-6 rounded-[2.5rem] border border-zinc-100/60 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:border-primary/20 transition-all flex gap-6 cursor-pointer">
                      <div className="w-28 h-28 rounded-3xl overflow-hidden flex-shrink-0 shadow-lg group-hover:scale-95 transition-transform duration-500">
                        <img alt={item.name} className="w-full h-full object-cover" src={item.img} />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-headline font-black text-lg text-zinc-900 uppercase leading-none">{item.name}</h3>
                            <span className="text-primary font-black text-lg">{item.price}</span>
                          </div>
                          <p className="text-zinc-500 text-xs font-medium mt-3 leading-relaxed">{item.desc}</p>
                        </div>
                        <button className="self-end bg-zinc-900 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all active:scale-95 shadow-lg shadow-zinc-200">ADD TO FEAST</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section: Yam & Fish */}
              <div className="space-y-8">
                <h2 className="text-3xl font-black font-headline text-zinc-900 uppercase tracking-tight flex items-center gap-4">
                  Marine & Root <div className="h-0.5 flex-1 bg-zinc-100"></div>
                </h2>
                <div className="space-y-6">
                  {[
                    { name: 'Grilled Croaker Delight', price: '₦8,500', desc: 'Whole croaker fish, slow-grilled with secret spices and lemon wedges.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTTRjTJvOvK9bARgNtqoOAWO7_epEhr7PsiweGsK5b2K35xa8q2NxODLlPCK6dYkGEW9s2EClIO10QCbboZKH42h0dVqKa-cHFXi7uRTmzBowDo9ukNtJbLrsj5tZXdmHCMQ8iKV9UmzKrrg1LUyi4kL_vTEGd-ln98gDvkJoMgcIkSKhQygYT2XeLPIgceHF51LJWqSmkS6EpxLmMi9w_OA3-6JFK3bTIPp9aULTlDfeRZmzZed1yGc5CSjRJR2JpIiuUiRmaAkA' },
                    { name: 'Fire-Roasted Heat Yam', price: '₦2,800', desc: 'Large wedges of white yam roasted over open charcoal for authentic flavor.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtoN0mT2HaLUrt-z2jkZS6X4rBbp79pkFjWxYMevDor0XtCqaLfcLh--tbajOxuNj3RiLYr_bqAD-YIkhcP9UZxYARfqXo-pvKtoy2JEnKj19T8IRfWne4SjWnjfK7jLI4XbryHyCMPI_tCks4zY3ESLdpdOogCWgmUHElfiNmzWJ2E3e6diuv859drTSSuqXS-0HUksg0PUKfaPzmmO-7nctcBFLZQbGSWS8eHtahNWQVmY8YyAfnivV32pPQaZDD96QfR4dnkl4' }
                  ].map((item, i) => (
                    <div key={i} className="group bg-white p-6 rounded-[2.5rem] border border-zinc-100/60 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:border-primary/20 transition-all flex gap-6 cursor-pointer">
                      <div className="w-28 h-28 rounded-3xl overflow-hidden flex-shrink-0 shadow-lg group-hover:scale-95 transition-transform duration-500 text-zinc-900">
                        <img alt={item.name} className="w-full h-full object-cover" src={item.img} />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="font-headline font-black text-lg text-zinc-900 uppercase leading-none">{item.name}</h3>
                            <span className="text-primary font-black text-lg">{item.price}</span>
                          </div>
                          <p className="text-zinc-500 text-xs font-medium mt-3 leading-relaxed">{item.desc}</p>
                        </div>
                        <button className="self-end bg-zinc-900 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all active:scale-95">ADD TO FEAST</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Customization Section */}
            <div className="bg-zinc-50/50 p-10 rounded-[3rem] border border-zinc-100 space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-zinc-100">
                  <UtensilsCrossed className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-black font-headline text-zinc-900 uppercase tracking-tight">Feast Requests</h3>
                  <p className="text-[10px] font-black uppercase text-zinc-400 tracking-[0.2em] mt-1">Personalize your session</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-1">Chef Notes</label>
                  <textarea className="w-full bg-white border border-zinc-100 shadow-sm rounded-3xl p-6 focus:ring-4 focus:ring-primary/5 focus:border-primary/20 outline-none text-sm font-medium transition-all" placeholder="Any allergies? Prefer it extra charred? Let the grill master know..." rows="4"></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Order Sidebar */}
          <aside className="lg:col-span-4 sticky top-24 h-fit">
            <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.06)] overflow-hidden border border-zinc-100">
              <div className="bg-zinc-900 text-white p-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-black font-headline uppercase tracking-tighter">Your Feast</h2>
                  <Flame className="w-8 h-8 text-primary" fill="currentColor" />
                </div>
                <div className="mt-4 flex items-center gap-4 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                  <Clock className="w-4 h-4" />
                  <span>Est. Heat: 25-35m</span>
                </div>
              </div>
              <div className="p-10 space-y-10">
                {/* Cart Items */}
                <div className="space-y-6">
                  {[
                    { name: 'Signature Heat Platter', qty: 1, price: '₦3,500' },
                    { name: 'Grilled Croaker Delight', qty: 1, price: '₦8,500' }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center group cursor-pointer">
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 flex items-center justify-center bg-zinc-50 border border-zinc-100 rounded-xl text-xs font-black text-zinc-900 shadow-sm">{item.qty}</span>
                        <span className="text-xs font-black uppercase tracking-tight text-zinc-600 group-hover:text-primary transition-colors">{item.name}</span>
                      </div>
                      <span className="text-sm font-black text-zinc-900">{item.price}</span>
                    </div>
                  ))}
                </div>

                {/* Receipt Breakdown */}
                <div className="pt-8 border-t border-zinc-100 space-y-4">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-zinc-400">
                    <span>Subtotal</span>
                    <span className="text-zinc-600">₦12,000</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-zinc-400">
                    <span>Delivery Fee</span>
                    <span className="text-zinc-600">₦1,200</span>
                  </div>
                  <div className="flex justify-between text-3xl font-black font-headline pt-6 text-zinc-900 border-t border-zinc-50">
                    <span className="uppercase">Total</span>
                    <span className="text-primary tracking-tighter">₦13,200</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="space-y-6">
                  <Link to="/checkout" className="w-full bg-primary text-white py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-primary/30 hover:scale-[0.98] transition-all flex items-center justify-center gap-4 group">
                    PLACE ORDER
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-[10px] text-center text-zinc-400 font-bold uppercase tracking-widest">
                    SECURE HEAT EXCHANGE
                  </p>
                </div>
              </div>
            </div>

            {/* Promotion Card */}
            <div className="mt-8 bg-zinc-900 p-8 rounded-[2.5rem] flex items-center gap-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-bl-full group-hover:scale-110 transition-transform"></div>
              <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10 shadow-xl">
                <Zap className="w-6 h-6 text-primary" fill="currentColor" />
              </div>
              <div className="relative z-10">
                <h4 className="text-sm font-black text-white uppercase tracking-widest">Weekend Heat!</h4>
                <p className="text-[10px] text-zinc-400 font-medium mt-1 leading-relaxed">Earn double loyalty points on all orders above <span className="text-white font-bold">₦10k</span> this weekend.</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="text-center pt-20">
          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.4em]">© 2024 BOLE4US. THE URBAN HEAT EXPERIENCE.</p>
        </div>
      </div>
    </UserLayout>
  );
};

export default VendorProfile;
