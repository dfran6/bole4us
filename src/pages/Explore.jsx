import { List, Map as MapIcon, MapPin, Star, Zap } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import MapComponent from '../components/MapComponent';
import UserLayout from '../components/UserLayout';

const Explore = () => {
  const [viewMode, setViewMode] = React.useState('list');

  const vendors = [
    {
      id: 1,
      title: "Mama Joy's Heat Central",
      lngLat: [6.3262, 4.8091],
      desc: '4.9 • 0.4 miles',
    },
    {
      id: 2,
      title: 'The Urban Grill Master',
      lngLat: [6.325, 4.8095],
      desc: '4.7 • 0.8 miles',
    },
  ];

  return (
    <UserLayout>
      <div className="h-[calc(100vh-100px)] flex flex-col md:flex-row overflow-hidden -m-6 relative bg-zinc-50 font-['DM_Sans']">
        {/* Mobile Toggle */}
        <div className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex bg-zinc-900/90 backdrop-blur-md rounded-full p-1 border border-white/10 shadow-lg">
          <button
            onClick={() => setViewMode('list')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition ${
              viewMode === 'list'
                ? 'bg-[#F5A800] text-zinc-900'
                : 'text-zinc-400'
            }`}
          >
            <List className="w-4 h-4" /> List
          </button>
          <button
            onClick={() => setViewMode('map')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition ${
              viewMode === 'map'
                ? 'bg-[#F5A800] text-zinc-900'
                : 'text-zinc-400'
            }`}
          >
            <MapIcon className="w-4 h-4" /> Map
          </button>
        </div>

        {/* Map */}
        <section
          className={`relative flex-1 h-full ${viewMode === 'list' ? 'hidden md:block' : 'block'}`}
        >
          <div className="absolute inset-0">
            <MapComponent
              center={[6.3262, 4.8091]}
              zoom={17}
              markers={vendors}
            />
          </div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-950/10 to-transparent pointer-events-none hidden md:block" />
        </section>

        {/* Feed */}
        <section
          className={`w-full md:w-[440px] bg-white h-full overflow-y-auto flex flex-col border-l border-zinc-100 ${viewMode === 'map' ? 'hidden md:flex' : 'flex'}`}
        >
          <div className="p-6 pb-5 border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-0 z-30">
            <div className="flex justify-between items-center">
              <h2 className="font-serif italic font-black text-2xl tracking-tight text-zinc-900">
                Nearby Heat
              </h2>
              <div className="w-2 h-2 bg-[#F5A800] rounded-full animate-pulse" />
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              Real-time availability near you
            </p>
          </div>

          <div className="flex-1 p-6 space-y-10 pb-28">
            {vendors.map((v) => (
              <div key={v.id} className="group">
                <div className="relative rounded-2xl overflow-hidden mb-4 h-56 border border-zinc-100 bg-zinc-100">
                  <img
                    alt={v.title}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                    src={
                      v.id === 1
                        ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSkUZXEbmjdHkNXhERBhsVfqlo0SmjYv-n-hO6WGEkIhg-qmsjQ874KSm12B27vJkGCoZgJq6obQdTyjelLqlp9bcZRTGgdRLlUBj830V7ZZkE1vJjuqRd_-JtWuqjaN4Ffjz8O_rbh1dszNtsYLZ76aJMrF3wrrzZ6ujF_KkP275o0S5EgN22B3SE7Oqz_2JEHcn0d-TeYnmy0qdbgqGYia9lJ5uTCPLjMAG6AKtB-l6MkBz3ofmm2dT8HAA5w1gAf7dpMZCkC90'
                        : 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIsxDBYuwk30PkitPMt3Otzha1Fo2OByrCX6M90MAwZRKcjDi-N51W6pfUI5JNHOz-FDQr2-91SzDN1eU_7bJntDq2EeaqxKiK9yaMarv9TTl8zSAXOM3Z8zqbn8zrWTvS2MQdcdjGTtcKR5ygj61KvoeWeSK9Gmz3lU_pgbdLdv_HxlHzYb790C7fqCCNVwfDZtFlubIutFbvao-H6u5D9JuSzuTRBPrp26-hwdJh9wOBRZrX3Dj-zm9yPYB13MUVSHve94b81bw'
                    }
                  />

                  <div className="absolute top-3 right-3 bg-zinc-900/80 backdrop-blur-sm px-3 py-1 rounded-lg flex items-center gap-1.5 border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5A800]" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white">
                      Active
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    to={`/vendor/${v.id}`}
                    className="font-serif italic font-black text-xl text-zinc-900 group-hover:text-[#F5A800] transition"
                  >
                    {v.title}
                  </Link>

                  <div className="flex items-center gap-4 text-xs text-zinc-500">
                    <span className="flex items-center gap-1 text-[#F5A800] font-semibold">
                      <Star className="w-3 h-3 fill-current" />{' '}
                      {v.id === 1 ? '4.9' : '4.7'}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> 0.4 mi
                    </span>
                    <span>15–20 mins</span>
                  </div>

                  <Link
                    to={`/vendor/${v.id}`}
                    className="block text-center w-full bg-zinc-900 text-white py-3 rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#F5A800] hover:text-zinc-900 transition"
                  >
                    Reserve
                  </Link>
                </div>
              </div>
            ))}

            {/* Sold Out */}
            <div className="opacity-60">
              <div className="relative rounded-2xl overflow-hidden mb-4 h-56 grayscale border border-zinc-100">
                <img
                  alt="Campus Heat"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOjsHmqpBxZua4wUsyC7jtCen480ueoADMixXf86u_kce-tS0_8Hru9vO2_vIhRHXQN_Yysz9_adeJ7tvHGHp_7QkTjcDh8W9RtSu5Q2l5CsmORCSgL_gEW52nUbWJ3y4CRgoUP3Tb3CA149caJ_LScKjCWGA5zBcjhNY9181BOe9eOK5lTzGECFYr-AXb087N8xGanrOi5lGk_gfAD3pgzQtR91htzP-CrOLOiBXux76NYBhX1SugeIoRMK8ZVGQcHRt8aGmL_GI"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-lg text-[10px] font-semibold text-zinc-700 border">
                  Sold Out
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif italic font-black text-xl text-zinc-400">
                  Campus Heat Corner
                </h4>
                <div className="flex items-center gap-1 text-xs text-zinc-400">
                  <MapPin className="w-3 h-3" /> 1.2 mi
                </div>
                <button
                  disabled
                  className="w-full bg-zinc-100 text-zinc-400 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider cursor-not-allowed"
                >
                  Unavailable
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Floating CTA */}
      <button className="fixed bottom-8 right-8 bg-zinc-900 text-white h-14 px-6 rounded-xl shadow-lg flex items-center gap-3 hover:bg-[#F5A800] hover:text-zinc-900 transition z-50">
        <Zap className="w-5 h-5" />
        <span className="text-xs font-semibold uppercase tracking-wider">
          Flash Deals
        </span>
      </button>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,900&family=DM+Sans:wght@300;400;500;700;900&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </UserLayout>
  );
};

export default Explore;
