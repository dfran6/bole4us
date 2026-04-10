import { MapPin, Flame } from 'lucide-react';

const vendors = [
  { id: 1, name: 'Smoky Delta Grill', distance: '1.2km', rating: 4.8, isHot: true },
  { id: 2, name: 'Mama Put Extra', distance: '2.5km', rating: 4.5, isHot: false },
  { id: 3, name: 'Bole Express', distance: '3.1km', rating: 4.9, isHot: true },
];

const Sidebar = () => (
  <div className="w-full md:w-80 bg-white border-r border-zinc-200 h-full overflow-y-auto pt-20 pb-6 px-4 hidden md:block">
    <div className="mb-6 flex gap-2">
      <h2 className="text-lg font-bold font-headline flex items-center gap-2">
        <Flame className="w-5 h-5 text-primary" /> Trending Now
      </h2>
    </div>

    <div className="flex gap-2 mb-6">
      <button className="px-4 py-1.5 bg-black text-white rounded-full text-sm font-bold">Nearest</button>
      <button className="px-4 py-1.5 bg-zinc-100 text-zinc-600 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">Top Rated</button>
    </div>

    <div className="space-y-4">
      {vendors.map((vendor) => (
        <div key={vendor.id} className="p-4 rounded-xl border border-zinc-100 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
          {vendor.isHot && <div className="absolute top-0 right-0 w-8 h-8 bg-secondary rounded-bl-xl flex items-center justify-center -mr-1 -mt-1"><Flame fill="black" className="w-4 h-4 text-black" /></div>}
          <h3 className="font-bold text-black group-hover:text-primary transition-colors">{vendor.name}</h3>
          <div className="flex items-center gap-4 text-xs text-zinc-500 mt-2 font-medium">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {vendor.distance}</span>
            <span className="flex items-center gap-1 text-secondary"><span className="text-black font-bold">★</span> {vendor.rating}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Sidebar;
