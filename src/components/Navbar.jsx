import { Search, Bell, ShoppingCart, User, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200 h-16 flex justify-between items-center px-6">
    <div className="flex items-center gap-8">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <Flame className="w-5 h-5 text-white" />
        </div>
        <span className="text-2xl font-black font-headline text-primary tracking-tighter uppercase">bole4us</span>
      </Link>
      <div className="hidden md:flex gap-6">
        <Link to="/" className="font-bold text-zinc-900 border-b-2 border-primary py-1">Home</Link>
        <Link to="/explore" className="text-zinc-500 font-medium hover:text-primary transition-colors">Explore</Link>
        <Link to="/orders" className="text-zinc-500 font-medium hover:text-primary transition-colors">Orders</Link>
        <Link to="/faq" className="text-zinc-500 font-medium hover:text-primary transition-colors">FAQ</Link>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className="hidden lg:flex items-center bg-zinc-100 px-4 py-2 rounded-full gap-2 transition-all focus-within:ring-2 focus-within:ring-primary/20">
        <Search className="w-4 h-4 text-zinc-400" />
        <input className="bg-transparent border-none focus:outline-none text-sm w-48" placeholder="Search heat..." />
      </div>
      <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors relative">
        <Bell className="w-5 h-5 text-zinc-600" />
        <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full ring-2 ring-white"></span>
      </button>
      <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
        <ShoppingCart className="w-5 h-5 text-zinc-600" />
      </button>
      <Link to="/dashboard" className="w-8 h-8 rounded-full bg-zinc-100 overflow-hidden ml-2 flex items-center justify-center cursor-pointer border border-zinc-200 hover:border-primary transition-colors">
        <User className="w-5 h-5 text-zinc-600" />
      </Link>
    </div>
  </nav>
);

export default Navbar;
