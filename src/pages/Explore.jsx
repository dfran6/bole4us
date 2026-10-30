import { List, Map as MapIcon, MapPin, Search, Star, Zap } from 'lucide-react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MapComponent from '../components/MapComponent';
import RoleAwareShell, { useIsDashboardShell } from '../components/RoleAwareShell';
import { listVendors, searchProducts, getMenuItem } from '../api/vendors';
import { formatNaira } from '../utils/currency';
import { useAuth } from '../context/AuthContext';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80';
const DEFAULT_CENTER = [6.3262, 4.8091];

const Explore = () => {
  const navigate = useNavigate();
  const { status: authStatus } = useAuth();
  const inShell = useIsDashboardShell();
  const [viewMode, setViewMode] = React.useState('list');
  const [vendors, setVendors] = React.useState([]);
  const [status, setStatus] = React.useState('loading');
  const [query, setQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState(null);
  const [isSearching, setIsSearching] = React.useState(false);

  React.useEffect(() => {
    let active = true;
    navigator.geolocation?.getCurrentPosition(
      (position) => active && fetchVendors(position.coords.latitude, position.coords.longitude),
      () => active && fetchVendors(),
      { timeout: 5000 }
    );
    if (!navigator.geolocation) fetchVendors();

    async function fetchVendors(lat, lng) {
      try {
        const { vendors: results } = await listVendors({ lat, lng });
        if (active) {
          setVendors(results);
          setStatus('loaded');
        }
      } catch {
        if (active) setStatus('error');
      }
    }

    return () => {
      active = false;
    };
  }, []);

  React.useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      setSearchResults(null);
      return;
    }
    setIsSearching(true);
    const timer = setTimeout(() => {
      searchProducts({ q: trimmed })
        .then(({ results }) => setSearchResults(results))
        .catch(() => setSearchResults([]))
        .finally(() => setIsSearching(false));
    }, 350);
    return () => clearTimeout(timer);
  }, [query]);

  async function handleResultClick(result) {
    try {
      const item = await getMenuItem(result.id);
      navigate(`/vendor/${item.vendorId}`);
    } catch {
      // Nothing useful to do if the item lookup fails -- the user can just search again.
    }
  }

  const markers = vendors.map((v) => ({ lngLat: [v.lng, v.lat], title: v.businessName, desc: v.category }));

  return (
    <RoleAwareShell>
    <div className="explore-page bg-white font-['DM_Sans']">
      <div
        className={`flex flex-col md:flex-row overflow-hidden relative bg-zinc-50 ${
          inShell
            ? 'h-[75vh] rounded-[28px] border border-zinc-200'
            : 'h-[calc(100vh-4rem)] pt-16'
        }`}
      >
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
            <MapComponent center={vendors[0] ? [vendors[0].lng, vendors[0].lat] : DEFAULT_CENTER} zoom={14} markers={markers} />
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

            <div className="relative mt-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={authStatus === 'authenticated' ? 'Search for a dish...' : 'Log in to search dishes'}
                disabled={authStatus !== 'authenticated'}
                className="w-full pl-11 pr-4 py-3 bg-zinc-100 border-none rounded-2xl text-sm outline-none focus:ring-4 focus:ring-primary/5 disabled:opacity-60"
              />
            </div>
          </div>

          <div className="flex-1 p-6 space-y-10 pb-28">
            {searchResults !== null ? (
              <>
                {isSearching && <p className="text-sm text-zinc-400">Searching...</p>}
                {!isSearching && searchResults.length === 0 && (
                  <p className="text-sm text-zinc-400">No dishes match "{query}".</p>
                )}
                {searchResults.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => handleResultClick(result)}
                    className="w-full flex items-center justify-between gap-4 p-5 bg-white border border-zinc-100 rounded-2xl text-left hover:border-[#F5A800]/40 transition"
                  >
                    <div className="min-w-0">
                      <p className="font-serif italic font-black text-lg text-zinc-900 truncate">{result.name}</p>
                      <p className="text-xs text-zinc-400 mt-1">{result.category}</p>
                    </div>
                    <span className="shrink-0 text-sm font-black text-[#F5A800]">{formatNaira(result.price)}</span>
                  </button>
                ))}
              </>
            ) : (
              <>
                {status === 'loading' && <p className="text-sm text-zinc-400">Finding vendors near you...</p>}
                {status === 'error' && <p className="text-sm text-zinc-400">Couldn't load vendors. Try again shortly.</p>}
                {status === 'loaded' && vendors.length === 0 && (
                  <p className="text-sm text-zinc-400">No vendors are live near you yet.</p>
                )}
              </>
            )}

            {searchResults === null && vendors.map((v) => (
              <div key={v.id} className={`group ${v.isOpen ? '' : 'opacity-60'}`}>
                <div className={`relative rounded-2xl overflow-hidden mb-4 h-56 border border-zinc-100 bg-zinc-100 ${v.isOpen ? '' : 'grayscale'}`}>
                  <img
                    alt={v.businessName}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                    src={v.bannerUrl || FALLBACK_IMAGE}
                  />
                  <div className="absolute top-3 right-3 bg-zinc-900/80 backdrop-blur-sm px-3 py-1 rounded-lg flex items-center gap-1.5 border border-white/10">
                    <span className={`w-1.5 h-1.5 rounded-full ${v.isOpen ? 'bg-[#F5A800]' : 'bg-zinc-400'}`} />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white">
                      {v.isOpen ? 'Active' : 'Closed'}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    to={`/vendor/${v.id}`}
                    className="font-serif italic font-black text-xl text-zinc-900 group-hover:text-[#F5A800] transition"
                  >
                    {v.businessName}
                  </Link>

                  <div className="flex items-center gap-4 text-xs text-zinc-500">
                    <span className="flex items-center gap-1 text-[#F5A800] font-semibold">
                      <Star className="w-3 h-3 fill-current" /> {v.rating.toFixed(1)}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {v.category}
                    </span>
                  </div>

                  <Link
                    to={`/vendor/${v.id}`}
                    aria-disabled={!v.isOpen}
                    className={`block text-center w-full py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition ${
                      v.isOpen
                        ? 'bg-zinc-900 text-white hover:bg-[#F5A800] hover:text-zinc-900'
                        : 'bg-zinc-100 text-zinc-400 pointer-events-none'
                    }`}
                  >
                    {v.isOpen ? 'Reserve' : 'Unavailable'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Floating CTA */}
      <button
        className={`fixed right-8 bg-zinc-900 text-white h-14 px-6 rounded-xl shadow-lg flex items-center gap-3 hover:bg-[#F5A800] hover:text-zinc-900 transition z-50 ${
          inShell ? 'bottom-24 lg:bottom-8' : 'bottom-8'
        }`}
      >
        <Zap className="w-5 h-5" />
        <span className="text-xs font-semibold uppercase tracking-wider">Flash Deals</span>
      </button>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,900&family=DM+Sans:wght@300;400;500;700;900&display=swap');
        .explore-page .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </div>
    </RoleAwareShell>
  );
};

export default Explore;
