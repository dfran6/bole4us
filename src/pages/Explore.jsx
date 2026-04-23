import React from 'react';
import { Link } from 'react-router-dom';
import UserLayout from '../components/UserLayout';
import MapComponent from '../components/MapComponent';
import { Star, MapPin, Zap, Utensils, Flame, List, Map as MapIcon } from 'lucide-react';

const Explore = () => {
  const [viewMode, setViewMode] = React.useState('list'); // 'list' or 'map' for mobile

  const vendors = [
    { id: 1, title: "Mama Joy's Heat Central", lngLat: [6.3262, 4.8091], desc: "4.9 ⭐ • 0.4 miles", color: "#FF4D00" },
    { id: 2, title: "The Urban Grill Master", lngLat: [6.3250, 4.8095], desc: "4.7 ⭐ • 0.8 miles", color: "#FF4D00" }
  ];

  return (
    <UserLayout>
      <div className="h-[calc(100vh-120px)] flex flex-col md:flex-row overflow-hidden -m-6 relative">
        {/* Mobile View Toggle */}
        <div className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex bg-zinc-900 rounded-full p-1 shadow-2xl border border-white/10">
            <button 
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'list' ? 'bg-primary text-white' : 'text-zinc-500'}`}
            >
                <List className="w-4 h-4" /> List
            </button>
            <button 
                onClick={() => setViewMode('map')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'map' ? 'bg-primary text-white' : 'text-zinc-500'}`}
            >
                <MapIcon className="w-4 h-4" /> Map
            </button>
        </div>

        {/* Left Section: Interactive Map */}
        <section className={`relative flex-1 h-full bg-zinc-100 ${viewMode === 'list' ? 'hidden md:block' : 'block'}`}>
           <MapComponent center={[6.3262, 4.8091]} zoom={18} markers={vendors} />
        </section>

        {/* Right Section: List of Vendors */}
        <section className={`w-full md:w-[450px] bg-white h-full overflow-y-auto flex flex-col border-l border-zinc-100 ${viewMode === 'map' ? 'hidden md:flex' : 'flex'}`}>
          <div className="p-6 border-b border-zinc-100 bg-white sticky top-0 z-20">
            <h2 className="font-headline font-black text-2xl tracking-tighter uppercase mb-1">Nearby Heat Signatures</h2>
            <p className="text-sm text-zinc-500">Real-time availability near your location.</p>
          </div>
          <div className="flex-1 p-6 space-y-10 pb-24">
            {vendors.map((v) => (
              <div key={v.id} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-4 h-48 shadow-lg">
                  <img alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={v.id === 1 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuDSkUZXEbmjdHkNXhERBhsVfqlo0SmjYv-n-hO6WGEkIhg-qmsjQ874KSm12B27vJkGCoZgJq6obQdTyjelLqlp9bcZRTGgdRLlUBj830V7ZZkE1vJjuqRd_-JtWuqjaN4Ffjz8O_rbh1dszNtsYLZ76aJMrF3wrrzZ6ujF_KkP275o0S5EgN22B3SE7Oqz_2JEHcn0d-TeYnmy0qdbgqGYia9lJ5uTCPLjMAG6AKtB-l6MkBz3ofmm2dT8HAA5w1gAf7dpMZCkC90" : "https://lh3.googleusercontent.com/aida-public/AB6AXuDIsxDBYuwk30PkitPMt3Otzha1Fo2OByrCX6M90MAwZRKcjDi-N51W6pfUI5JNHOz-FDQr2-91SzDN1eU_7bJntDq2EeaqxKiK9yaMarv9TTl8zSAXOM3Z8zqbn8zrWTvS2MQdcdjGTtcKR5ygj61KvoeWeSK9Gmz3lU_pgbdLdv_HxlHzYb790C7fqCCNVwfDZtFlubIutFbvao-H6u5D9JuSzuTRBPrp26-hwdJh9wOBRZrX3Dj-zm9yPYB13MUVSHve94b81bw"} />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 border border-zinc-100 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-zinc-900">ACTIVE</span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <Link to={`/vendor/${v.id}`} className="font-headline font-black text-xl group-hover:text-primary transition-colors block uppercase tracking-tight leading-none mb-2">{v.title}</Link>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-xs text-secondary font-black bg-secondary/10 px-2 py-0.5 rounded">
                        <Star className="w-3 h-3 fill-current" /> {v.id === 1 ? '4.9' : '4.7'}
                      </span>
                      <span className="text-xs text-zinc-400 font-medium">0.4 miles</span>
                      <span className="text-xs text-zinc-400 font-bold">• 15-20 mins</span>
                    </div>
                  </div>
                </div>
                <Link to={`/vendor/${v.id}`} className="w-full mt-4 bg-primary text-white py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl shadow-primary/20 active:scale-95 transition-all text-center block">
                  Reserve Feast
                </Link>
              </div>
            ))}

             {/* Out of Stock Card */}
             <div className="group cursor-pointer opacity-80">
              <div className="relative rounded-2xl overflow-hidden mb-4 h-48 shadow-lg grayscale">
                <img alt="Campus Heat" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOjsHmqpBxZua4wUsyC7jtCen480ueoADMixXf86u_kce-tS0_8Hru9vO2_vIhRHXQN_Yysz9_adeJ7tvHGHp_7QkTjcDh8W9RtSu5Q2l5CsmORCSgL_gEW52nUbWJ3y4CRgoUP3Tb3CA149caJ_LScKjCWGA5zBcjhNY9181BOe9eOK5lTzGECFYr-AXb087N8xGanrOi5lGk_gfAD3pgzQtR91htzP-CrOLOiBXux76NYBhX1SugeIoRMK8ZVGQcHRt8aGmL_GI"/>
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
               <button disabled className="w-full mt-4 bg-zinc-100 text-zinc-400 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] cursor-not-allowed">
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
