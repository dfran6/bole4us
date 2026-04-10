import { Plus } from 'lucide-react';

const MenuCard = ({ name, price, description, image }) => (
  <div className="group bg-white p-4 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-4 h-full">
    <div className="w-full sm:w-32 h-40 sm:h-32 rounded-xl overflow-hidden flex-shrink-0 relative">
      <img src={image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={name} />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
    </div>
    <div className="flex-1 flex flex-col justify-between py-1">
      <div>
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{name}</h3>
          <span className="text-primary font-black font-headline text-lg -mt-1">₦{price}</span>
        </div>
        <p className="text-zinc-500 text-sm mt-2 line-clamp-2 leading-relaxed">{description}</p>
      </div>
      <div className="flex justify-between items-end mt-4">
        <span className="text-xs font-bold text-secondary bg-black px-2 py-1 rounded-md">MADE FRESH</span>
        <button className="bg-secondary p-2 rounded-full hover:bg-yellow-400 hover:scale-110 transition-all flex items-center justify-center shadow-md">
          <Plus className="w-5 h-5 text-black" />
        </button>
      </div>
    </div>
  </div>
);

export default MenuCard;
