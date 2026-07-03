import { List, Map as MapIcon, MapPin, Star, Zap } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/landing/Footer';
import MapComponent from '../components/MapComponent';
import Navbar from '../components/Navbar';

const Explore = () => {
  const [viewMode, setViewMode] = React.useState('list');

  const vendors = [
    {
      id: 1,
      title: "Mama Joy's Heat Central",
      lngLat: [6.3262, 4.8091],
      desc: '4.9 • 0.4 miles',
      image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      title: 'The Urban Grill Master',
      lngLat: [6.325, 4.8095],
      desc: '4.7 • 0.8 miles',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div className="explore-page bg-white font-['DM_Sans']">
      <Navbar />

      <div className="h-[calc(100vh-4rem)] pt-16 flex flex-col md:flex-row overflow-hidden relative bg-zinc-50">
        {/* Mobile Toggle */}
        <div className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex bg-zinc-900/90 backdrop-blur-md rounded-full p-1 border border-white/10 shadow-lg">
          <button
            onClick={() => setViewMode('list')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition ${
              viewMode === 'list' ? 'bg-[#F5A800] text-zinc-900' : 'text-zinc-400'
            }`}
          >
            <List className="w-4 h-4" /> List
          </button>
          <button
            onClick={() => setViewMode('map')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-wider transition ${
              viewMode === 'map' ? 'bg-[#F5A800] text-zinc-900' : 'text-zinc-400'
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
            <MapComponent center={[6.3262, 4.8091]} zoom={17} markers={vendors} />
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
            <p className="text-xs text-zinc-400 mt-1">Real-time availability near you</p>
          </div>

          <div className="flex-1 p-6 space-y-10 pb-28">
            {vendors.map((v) => (
              <div key={v.id} className="group">
                <div className="relative rounded-2xl overflow-hidden mb-4 h-56 border border-zinc-100 bg-zinc-100">
                  <img
                    alt={v.title}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                    src={v.image}
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
                      <Star className="w-3 h-3 fill-current" /> {v.id === 1 ? '4.9' : '4.7'}
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
                  src="https://images.unsplash.com/photo-1555992336-fb0d29498b13?auto=format&fit=crop&w=600&q=80"
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
        <span className="text-xs font-semibold uppercase tracking-wider">Flash Deals</span>
      </button>

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,900&family=DM+Sans:wght@300;400;500;700;900&display=swap');
        .explore-page .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </div>
  );
};

export default Explore;
