import { Flame } from 'lucide-react';

const HeroBanner = () => (
  <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mt-8 mb-8 max-w-5xl mx-auto shadow-lg group">
    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpG2ftZ7rNFhXT1RiE6EzN2Hpu-6lunR4CBLanbn9iZxNfTGCw0v2sgrDqiZC0m_FBjNc7NUk3w1DA0FeK9gxu3Du1nGfiUAr5sJglxMk97t5JwKoWNgv49nO_P1qDRHcdk5EvE6QrxmEuVCrewwLu_Vtt9q9T4ij8qyrDFqdWAC_hign0XY08F0AEITrR2t9IdAZXqewdkMoEM31xgkXJmhh8CjGenocHR9fHF-g6HAsrzajib1Pis_-BljkSMzIFT6DtQbEFQh4" alt="Vendor Banner" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
      <div>
        <div className="inline-block bg-secondary text-black text-xs font-bold px-2 py-1 rounded-md mb-2 uppercase tracking-widest">Heat Level High</div>
        <h1 className="text-3xl md:text-5xl font-black font-headline text-white tracking-tight">Smoky Delta Grill</h1>
        <p className="text-zinc-200 font-medium mt-1">Premium roasted plantain and fish.</p>
      </div>
      <button className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-primary transition-colors text-white hover:text-white group">
        <Flame className="w-6 h-6 group-hover:fill-current transition-all" />
      </button>
    </div>
  </div>
);

export default HeroBanner;
