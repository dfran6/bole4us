import React from 'react';
import { Link } from 'react-router-dom';
import UserLayout from '../components/UserLayout';
import { Star, MapPin, Zap, Utensils, Flame } from 'lucide-react';

const Explore = () => {
  return (
    <UserLayout>
      <div className="h-[calc(100vh-120px)] flex flex-col md:flex-row overflow-hidden -m-6">
        {/* Left Section: Interactive Map */}
        <section className="relative flex-1 h-[400px] md:h-full bg-zinc-100">
          <div className="absolute inset-0 z-0">
            <img alt="City Map" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvJBPQB2BXV7t3B1sBdmpBufGPMdLpeZmId1pOgHiefD6D6hNJkMDiR_gxg5iyDncLRhDbwDvm77sS19QHS6A9-9k9yf8FSZbsYUiGjdLBEFj8ZdqDkekWhRmmO0Xfwol00sMn4FrsXptzFjh8tg-MbmM6oFeES5zqJM7acilSMhSUSKO8FtjBYjnKgJ0Q2tU8_yDbfNklVW89oPaH1ZkQ23qlogxYWLdDXhKqJQMSVYh3XHPeGNR7fuQRfOmnPUYO3itQZPu0-bM"/>
            {/* Custom Pins */}
            <div className="absolute top-1/4 left-1/3 group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="bg-primary text-white p-2 rounded-full shadow-lg relative z-10 scale-100 active:scale-90 transition-transform">
                  <Utensils className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-2/3 group cursor-pointer">
              <div className="bg-primary text-white p-2 rounded-full shadow-lg scale-100 active:scale-90 transition-transform">
                <Flame className="w-4 h-4" />
              </div>
            </div>
          </div>
          {/* Floating Map Info Glass Card */}
          <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-80 bg-white/80 backdrop-blur-xl p-5 rounded-xl shadow-2xl z-10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-headline font-bold text-lg leading-tight uppercase tracking-tight">University West Gate</h3>
                <p className="text-xs text-zinc-500 font-medium">8 active vendors found nearby</p>
              </div>
              <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">Active</span>
            </div>
            <div className="flex -space-x-2">
              <img alt="vendor 1" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxIZ6NRj3OX9JwTE7c-8tz7dVDfgZk-5MFQA1CjTRSRO17CZnUSNkgqXlQbnMPy-ItKgfoVKjBlv9ro0zWuQO1eKrOG2rB9ZDrEjWoo6PeUdHyjEmHf-VBNszZUaHANg9Rr_52oqnwhRNS4MlrSRTyCGlpLah_ymI34mrUBXHYpIpfl6W1pe3dl87YDTu0vlkTYEfG79ojxl_f8TmuUGZgI7fpPXN02cxGkMYmGc__gVRkqfEbiGsd39trooDZTSgwMImuu0tEIbA"/>
              <img alt="vendor 2" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTIxUCnZwcELjSfQoXUuERbpj7JcHZQf25r-kbxxdJt1ROZGBfU5pJh1winLTCp_Dtk_g0BOaOTavGL8kpgARnK34lRDXShOCJ1kg0qUZYGahn-i3tVjU2OE_AT4qfB6Mzt81dPal_pGydn11hsyVwjUhsAhrukabKOxENgRrQQ231seYMaFS_mxeds5GUVCKfO29nP8W9SjLyG-vDzIEk9VOTTF4mG6SZjG53gWsxvs4kLY2hmstpaK1Gxs5CWtFdgFx3HByj_ts"/>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center text-[10px] font-bold text-zinc-500">+6</div>
            </div>
          </div>
        </section>

        {/* Right Section: List of Vendors */}
        <section className="w-full md:w-[450px] bg-white h-full overflow-y-auto flex flex-col border-l border-zinc-100">
          <div className="p-6 border-b border-zinc-100 bg-white sticky top-0 z-20">
            <h2 className="font-headline font-black text-2xl tracking-tighter uppercase mb-1">Nearby Heat Signatures</h2>
            <p className="text-sm text-zinc-500">Real-time availability near your location.</p>
          </div>
          <div className="flex-1 p-6 space-y-10 pb-24">
            {/* Vendor Card 1 */}
            <div className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden mb-4 h-48 shadow-lg">
                <img alt="Mama Joy's Bole" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSkUZXEbmjdHkNXhERBhsVfqlo0SmjYv-n-hO6WGEkIhg-qmsjQ874KSm12B27vJkGCoZgJq6obQdTyjelLqlp9bcZRTGgdRLlUBj830V7ZZkE1vJjuqRd_-JtWuqjaN4Ffjz8O_rbh1dszNtsYLZ76aJMrF3wrrzZ6ujF_KkP275o0S5EgN22B3SE7Oqz_2JEHcn0d-TeYnmy0qdbgqGYia9lJ5uTCPLjMAG6AKtB-l6MkBz3ofmm2dT8HAA5w1gAf7dpMZCkC90"/>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 border border-zinc-100 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-zinc-900">PLENTY</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <Link to="/vendor/1" className="font-headline font-black text-xl group-hover:text-primary transition-colors block uppercase tracking-tight leading-none mb-2">Mama Joy's Heat Central</Link>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-xs text-secondary font-black bg-secondary/10 px-2 py-0.5 rounded">
                      <Star className="w-3 h-3 fill-current" /> 4.9
                    </span>
                    <span className="text-xs text-zinc-400 font-medium">0.4 miles</span>
                    <span className="text-xs text-zinc-400 font-bold">• 15-20 mins</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 bg-primary text-white py-3 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg shadow-primary/20 active:scale-95 transition-all">
                Reserve Now
              </button>
            </div>

            {/* Vendor Card 2 */}
            <div className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden mb-4 h-48 shadow-lg">
                <img alt="The Grill Master" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIsxDBYuwk30PkitPMt3Otzha1Fo2OByrCX6M90MAwZRKcjDi-N51W6pfUI5JNHOz-FDQr2-91SzDN1eU_7bJntDq2EeaqxKiK9yaMarv9TTl8zSAXOM3Z8zqbn8zrWTvS2MQdcdjGTtcKR5ygj61KvoeWeSK9Gmz3lU_pgbdLdv_HxlHzYb790C7fqCCNVwfDZtFlubIutFbvao-H6u5D9JuSzuTRBPrp26-hwdJh9wOBRZrX3Dj-zm9yPYB13MUVSHve94b81bw"/>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 border border-zinc-100 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-zinc-900">MEDIUM</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <Link to="/vendor/2" className="font-headline font-black text-xl group-hover:text-primary transition-colors block uppercase tracking-tight leading-none mb-2">The Urban Grill Master</Link>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-xs text-secondary font-black bg-secondary/10 px-2 py-0.5 rounded">
                      <Star className="w-3 h-3 fill-current" /> 4.7
                    </span>
                    <span className="text-xs text-zinc-400 font-medium">0.8 miles</span>
                    <span className="text-xs text-zinc-400 font-bold">• 10-15 mins</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 bg-primary text-white py-3 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg shadow-primary/20 active:scale-95 transition-all">
                Reserve Now
              </button>
            </div>

             {/* Vendor Card 3 */}
             <div className="group cursor-pointer opacity-80">
              <div className="relative rounded-2xl overflow-hidden mb-4 h-48 shadow-lg grayscale focus-within:grayscale-0 hover:grayscale-0 transition-all">
                <img alt="Campus Heat" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOjsHmqpBxZua4wUsyC7jtCen480ueoADMixXf86u_kce-tS0_8Hru9vO2_vIhRHXQN_Yysz9_adeJ7tvHGHp_7QkTjcDh8W9RtSu5Q2l5CsmORCSgL_gEW52nUbWJ3y4CRgoUP3Tb3CA149caJ_LScKjCWGA5zBcjhNY9181BOe9eOK5lTzGECFYr-AXb087N8xGanrOi5lGk_gfAD3pgzQtR91htzP-CrOLOiBXux76NYBhX1SugeIoRMK8ZVGQcHRt8aGmL_GI"/>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 border border-zinc-100 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-red-600"></span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-zinc-900">SOLD OUT</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-headline font-black text-xl text-zinc-400 uppercase tracking-tight leading-none mb-2">Campus Heat Corner</h4>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-zinc-400 font-medium flex items-center gap-1"><MapPin className="w-3 h-3" /> 1.2 miles</span>
                  </div>
                </div>
              </div>
               <button disabled className="w-full mt-4 bg-zinc-100 text-zinc-400 py-3 rounded-xl font-bold uppercase tracking-widest text-xs cursor-not-allowed">
                Check Back Later
              </button>
            </div>
          </div>
        </section>
      </div>

       {/* Floating Flash Deals */}
       <button className="fixed bottom-8 right-8 bg-zinc-900 text-white p-4 rounded-full shadow-2xl flex items-center justify-center group active:scale-95 transition-all z-40">
        <Zap className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" fill="currentColor" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold uppercase text-[10px] tracking-widest px-0 group-hover:px-2">Flash Deals</span>
      </button>
    </UserLayout>
  );
};

export default Explore;
