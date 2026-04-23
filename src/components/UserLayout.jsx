import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Bell, ShoppingCart, User, Menu, X, Home, Compass, Receipt, Settings,CreditCard, HelpCircle, LogOut, Flame } from 'lucide-react';

const UserLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Heatboard', path: '/dashboard', icon: Home },
    { name: 'Explore', path: '/explore', icon: Compass },
    { name: 'Orders', path: '/orders', icon: Receipt },
    { name: 'Wallet', path: '/wallet', icon: CreditCard },
    { name: 'Help', path: '/faq', icon: HelpCircle },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-white text-zinc-900 font-body min-h-screen flex flex-col md:flex-row selection:bg-primary/20">
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-6 bg-white/90 backdrop-blur-md border-b border-zinc-50 sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Bole4us Logo" className="w-10 h-10 object-contain" />
            <span className="font-headline font-black text-2xl text-zinc-900 uppercase tracking-tighter mt-1">bole4us</span>
        </Link>
        <button onClick={() => setIsSidebarOpen(true)} className="p-3 bg-zinc-50 rounded-2xl border border-zinc-100 shadow-sm">
          <Menu className="w-6 h-6 text-zinc-900" />
        </button>
      </header>

      {/* Sidebar / Navigation Drawer */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 md:w-80 bg-white border-r border-zinc-50 transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:flex md:flex-col p-8 shadow-2xl md:shadow-none`}>
        <div className="flex items-center justify-between mb-16">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-xl shadow-zinc-100">
              <img src="/logo.png" alt="Bole4us Logo" className="w-10 h-10 object-contain brightness-0 invert" />
            </div>
            <div>
                <h1 className="font-headline font-black text-3xl text-zinc-900 tracking-tighter leading-none mt-1 uppercase italic">bole4us</h1>
                <p className="text-[10px] font-black text-zinc-400 tracking-[0.3em] uppercase mt-2">Urban Heat</p>
            </div>
          </Link>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-3 rounded-2xl bg-zinc-50 text-zinc-400 hover:text-zinc-900 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all text-[10px] font-black uppercase tracking-[0.2em] group ${
                isActive(item.path)
                  ? 'bg-zinc-900 text-white shadow-2xl shadow-zinc-200'
                  : 'text-zinc-400 hover:bg-zinc-50 hover:text-zinc-900'
              }`}
            >
              <item.icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${isActive(item.path) ? 'text-primary' : 'text-zinc-300 group-hover:text-zinc-900'}`} />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-10 border-t border-zinc-50 space-y-4">
            <div className="flex items-center gap-4 px-2 mb-8 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-zinc-50 border-4 border-white shadow-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAndHEElBt8DhUTnRxjxyTtzUo2zmBTTP8zoJJyGrUsZI37jUueIMg_5bRTqL4urMqG9beC_bEc14V1k8GgruKN_SVHk21MqM3zdFKQBXrzuJumqgCZvYzB5-sgcXjql-ApNNgj29YCPHwTJsFRqNT49k9pk_SAmDUCHmoMp87w1uL1w-XbrT0FnFqeb6nUkN7VKPJrn5_rq6pnRZ8IOyTX3j5er4O4DDmyJbOct9FR3tr9-ng9nIEb8fkWgOy8JqzGE90PKKYB2AM" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                    <p className="text-sm font-black text-zinc-900 uppercase tracking-tight">John Doe</p>
                    <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest mt-1">Prime Member</p>
                </div>
            </div>
            <Link to="/profile" className="flex items-center gap-4 px-6 py-3 text-[10px] font-black text-zinc-400 hover:text-primary transition-colors uppercase tracking-[0.2em]">
              <Settings className="w-5 h-5" />
              Settings
            </Link>
            <Link to="/" className="flex items-center gap-4 px-6 py-3 text-[10px] font-black text-zinc-400 hover:text-red-500 transition-colors uppercase tracking-[0.2em]">
              <LogOut className="w-5 h-5" />
              Sign Out
            </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden relative bg-white">
        {/* Desktop Navbar */}
        <nav className="hidden md:flex sticky top-0 bg-white/80 backdrop-blur-xl border-b border-zinc-50 z-40 items-center justify-between px-12 py-6">
            <div className="flex items-center bg-zinc-50 px-6 py-3 rounded-2xl gap-4 w-[480px] border border-zinc-100 group transition-all focus-within:ring-4 focus-within:ring-primary/5 focus-within:border-primary/20">
                <Search className="w-5 h-5 text-zinc-400 group-focus-within:text-primary transition-colors" />
                <input className="bg-transparent border-none focus:outline-none text-[10px] font-black uppercase tracking-widest w-full placeholder:text-zinc-300" placeholder="Discover new heat signatures..." />
            </div>
            <div className="flex items-center gap-10">
                <div className="flex items-center gap-8 border-r border-zinc-100 pr-10">
                    <button className="p-2 text-zinc-400 hover:text-primary transition-all relative group">
                        <Bell className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white shadow-sm ring-2 ring-red-500/10"></span>
                    </button>
                    <button className="p-2 text-zinc-400 hover:text-primary transition-all relative group">
                        <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        <span className="absolute -top-1 -right-1 bg-zinc-900 text-white text-[8px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xl">2</span>
                    </button>
                </div>
                <button className="px-8 py-3 bg-zinc-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-zinc-200 hover:bg-primary transition-all active:scale-95">
                    Order Now
                </button>
            </div>
        </nav>

        <main className={`flex-1 p-12 ${isSidebarOpen ? 'overflow-hidden' : ''}`}>
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-zinc-900 border-t border-zinc-800 py-24 px-12 mt-24">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-24">
                <div className="space-y-8 max-w-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner">
                          <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain brightness-0 invert opacity-80" />
                        </div>
                        <h2 className="font-headline font-black text-4xl text-white tracking-tighter uppercase italic">bole4us</h2>
                    </div>
                    <p className="text-zinc-500 text-sm font-medium leading-relaxed">Redefining the urban street grill experience with sophisticated heat signatures and unrivaled velocity.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-16 lg:gap-32">
                    <div>
                      <h4 className="text-white font-black text-[10px] mb-8 uppercase tracking-[0.3em]">Network</h4>
                      <ul className="space-y-4">
                        <li><Link to="/support" className="text-zinc-500 text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors">Support Center</Link></li>
                        <li><Link to="/faq" className="text-zinc-500 text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors">Operations FAQ</Link></li>
                        <li><Link to="/leaderboards" className="text-zinc-500 text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors">Heatboard</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-black text-[10px] mb-8 uppercase tracking-[0.3em]">Corporate</h4>
                      <ul className="space-y-4">
                        <li><Link to="/careers" className="text-zinc-500 text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors">Careers</Link></li>
                        <li><Link to="/press" className="text-zinc-500 text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors">Press & Media</Link></li>
                        <li><Link to="/partner" className="text-zinc-500 text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors">Partner with Us</Link></li>
                      </ul>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <h4 className="text-white font-black text-[10px] mb-8 uppercase tracking-[0.3em]">Protocols</h4>
                      <ul className="space-y-4">
                        <li><Link to="/privacy" className="text-zinc-500 text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors">Privacy Protocol</Link></li>
                        <li><Link to="/terms" className="text-zinc-500 text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors">Service Terms</Link></li>
                      </ul>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto pt-16 mt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em]">© 2024 bole4us Platform • All Systems Operational</p>
                <div className="flex gap-8">
                    <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer shadow-lg shadow-black/20 group">
                        <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full group-hover:bg-white transition-colors"></div>
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer shadow-lg shadow-black/20 group">
                        <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full group-hover:bg-white transition-colors"></div>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    </div>
  );
};

export default UserLayout;
