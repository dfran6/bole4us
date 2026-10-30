import React from 'react';
import RoleAwareShell from '../components/RoleAwareShell';
import { Star, MapPin, Flame, UtensilsCrossed, ArrowRight, Zap, Clock } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getVendor } from '../api/vendors';
import { getVendorRatingStats, getVendorRatings } from '../api/reviews';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { formatNaira } from '../utils/currency';

const TABS = ['Menu', 'Reviews'];
const FALLBACK_BANNER = 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1200&q=80';
const FALLBACK_ITEM_IMAGE = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=300&q=80';

const VendorProfile = () => {
  const { id } = useParams();
  const { status: authStatus } = useAuth();
  const cart = useCart();

  const [vendor, setVendor] = React.useState(null);
  const [status, setStatus] = React.useState('loading');
  const [activeTab, setActiveTab] = React.useState('Menu');
  const [ratingStats, setRatingStats] = React.useState(null);
  const [ratings, setRatings] = React.useState([]);

  React.useEffect(() => {
    let active = true;
    getVendor(id)
      .then((data) => active && (setVendor(data), setStatus('loaded')))
      .catch(() => active && setStatus('error'));
    return () => {
      active = false;
    };
  }, [id]);

  React.useEffect(() => {
    if (activeTab !== 'Reviews' || authStatus !== 'authenticated' || ratingStats) return;
    getVendorRatingStats(id).then(setRatingStats).catch(() => {});
    getVendorRatings(id).then(setRatings).catch(() => {});
  }, [activeTab, authStatus, id, ratingStats]);

  const menuByCategory = React.useMemo(() => {
    if (!vendor) return [];
    const groups = new Map();
    for (const item of vendor.menuItems) {
      if (!groups.has(item.category)) groups.set(item.category, []);
      groups.get(item.category).push(item);
    }
    return [...groups.entries()];
  }, [vendor]);

  function handleAddToCart(item) {
    if (!item.isAvailable) return;
    cart.addItem(vendor.id, item);
    toast.success(`${item.name} added to your feast`);
  }

  if (status === 'loading') {
    return (
      <RoleAwareShell>
        <p className="text-center text-zinc-400 py-20">Loading vendor...</p>
      </RoleAwareShell>
    );
  }

  if (status === 'error' || !vendor) {
    return (
      <RoleAwareShell>
        <p className="text-center text-zinc-400 py-20">Couldn't find this vendor.</p>
      </RoleAwareShell>
    );
  }

  const cartIsThisVendor = cart.vendorId === vendor.id && cart.items.length > 0;

  return (
    <RoleAwareShell>
      <div className="max-w-7xl mx-auto space-y-12 pb-20">
        {/* Vendor Hero Section */}
        <header className="relative rounded-[3rem] overflow-hidden aspect-[21/9] md:aspect-[3/1] shadow-2xl border border-white/10 group">
          <img alt={vendor.businessName} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" src={vendor.bannerUrl || FALLBACK_BANNER} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-primary text-white px-4 py-1.5 rounded-xl text-[10px] font-black tracking-widest uppercase shadow-lg shadow-primary/20">{vendor.category}</span>
                <span className="bg-white/10 backdrop-blur-md text-white/80 px-4 py-1.5 rounded-xl text-[10px] font-black tracking-widest uppercase border border-white/10 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${vendor.isOpen ? 'bg-green-500' : 'bg-zinc-400'}`}></div> {vendor.isOpen ? 'Open Now' : 'Closed'}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black font-headline text-white tracking-tighter uppercase leading-none">{vendor.businessName}</h1>
              <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" fill="currentColor" />
                  <span>{vendor.rating.toFixed(1)} <span className="text-white/40 ml-1">({vendor.reviewCount} Reviews)</span></span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-16">
            {/* Menu Navigation */}
            <div className="flex gap-10 overflow-x-auto pb-4 custom-scrollbar border-b border-zinc-100">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[10px] font-black uppercase tracking-[0.2em] pb-4 transition-all whitespace-nowrap ${activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-zinc-400 hover:text-zinc-600'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === 'Menu' && (
              menuByCategory.length === 0 ? (
                <p className="text-zinc-400 text-sm">This vendor hasn't listed any menu items yet.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {menuByCategory.map(([category, items]) => (
                    <div key={category} className="space-y-8">
                      <h2 className="text-3xl font-black font-headline text-zinc-900 uppercase tracking-tight flex items-center gap-4">
                        {category} <div className="h-0.5 flex-1 bg-zinc-100"></div>
                      </h2>
                      <div className="space-y-6">
                        {items.map((item) => (
                          <div key={item.id} className="group bg-white p-6 rounded-[2.5rem] border border-zinc-100/60 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:border-primary/20 transition-all flex gap-6 cursor-pointer">
                            <div className="w-28 h-28 rounded-3xl overflow-hidden flex-shrink-0 shadow-lg group-hover:scale-95 transition-transform duration-500">
                              <img alt={item.name} className="w-full h-full object-cover" src={item.imageUrl || FALLBACK_ITEM_IMAGE} />
                            </div>
                            <div className="flex-1 flex flex-col justify-between py-1">
                              <div>
                                <div className="flex justify-between items-start">
                                  <h3 className="font-headline font-black text-lg text-zinc-900 uppercase leading-none">{item.name}</h3>
                                  <span className="text-primary font-black text-lg">{formatNaira(item.price)}</span>
                                </div>
                                <p className="text-zinc-500 text-xs font-medium mt-3 leading-relaxed">{item.description}</p>
                                {!item.isAvailable && <p className="text-red-500 text-[10px] font-black uppercase mt-2">Out of stock</p>}
                              </div>
                              <button
                                onClick={() => handleAddToCart(item)}
                                disabled={!item.isAvailable}
                                className="self-end bg-zinc-900 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all active:scale-95 shadow-lg shadow-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed"
                              >
                                ADD TO FEAST
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}

            {activeTab === 'Reviews' && (
              authStatus !== 'authenticated' ? (
                <p className="text-zinc-400 text-sm">Log in to see reviews for this vendor.</p>
              ) : (
                <div className="space-y-6">
                  {ratingStats && (
                    <div className="flex items-center gap-3 text-zinc-900">
                      <Star className="w-5 h-5 text-primary" fill="currentColor" />
                      <span className="font-black text-xl">{ratingStats.average_rating?.toFixed(1)}</span>
                      <span className="text-zinc-400 text-sm">({ratingStats.total_ratings} ratings)</span>
                    </div>
                  )}
                  {ratings.length === 0 ? (
                    <p className="text-zinc-400 text-sm">No reviews yet.</p>
                  ) : (
                    ratings.map((r, i) => (
                      <div key={r.id ?? i} className="bg-white p-6 rounded-3xl border border-zinc-100">
                        <div className="flex items-center gap-2 text-primary mb-2">
                          {Array.from({ length: Math.round(r.rating ?? 0) }).map((_, star) => (
                            <Star key={star} className="w-3 h-3" fill="currentColor" />
                          ))}
                        </div>
                        <p className="text-zinc-600 text-sm">{r.comment}</p>
                      </div>
                    ))
                  )}
                </div>
              )
            )}
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
                  <span>Delivery fee calculated at checkout</span>
                </div>
              </div>
              <div className="p-10 space-y-10">
                {!cartIsThisVendor ? (
                  <p className="text-zinc-400 text-sm">Your feast is empty. Add something from the menu.</p>
                ) : (
                  <>
                    <div className="space-y-6">
                      {cart.items.map((item) => (
                        <div key={item.menuItemId} className="flex justify-between items-center gap-4 group">
                          <div className="flex min-w-0 items-center gap-4">
                            <span className="w-8 h-8 shrink-0 flex items-center justify-center bg-zinc-50 border border-zinc-100 rounded-xl text-xs font-black text-zinc-900 shadow-sm">{item.qty}</span>
                            <span className="truncate text-xs font-black uppercase tracking-tight text-zinc-600">{item.name}</span>
                          </div>
                          <span className="shrink-0 text-sm font-black text-zinc-900">{formatNaira(item.price * item.qty)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-zinc-100 space-y-4">
                      <div className="flex justify-between text-3xl font-black font-headline pt-2 text-zinc-900">
                        <span className="uppercase">Subtotal</span>
                        <span className="text-primary tracking-tighter">{formatNaira(cart.subtotal)}</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <Link to="/checkout" className="w-full bg-primary text-white py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-primary/30 hover:scale-[0.98] transition-all flex items-center justify-center gap-4 group">
                        PLACE ORDER
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <p className="text-[10px] text-center text-zinc-400 font-bold uppercase tracking-widest">
                        SECURE HEAT EXCHANGE
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </aside>
        </div>

        <div className="text-center pt-20">
          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.4em]">© 2024 BOLE4US. THE URBAN HEAT EXPERIENCE.</p>
        </div>
      </div>
    </RoleAwareShell>
  );
};

export default VendorProfile;
