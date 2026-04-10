import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, ListOrdered, BarChart3, Settings, LogOut, Menu, X, Flame, Bell, MoreVertical, DollarSign } from 'lucide-react';

const VendorLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/vendor', icon: LayoutDashboard },
    { name: 'Flow Control', path: '/vendor/orders', icon: ListOrdered },
    { name: 'Inventory', path: '/vendor/inventory', icon: ShoppingBag },
    { name: 'Heat Analytics', path: '/vendor/analytics', icon: BarChart3 },
    { name: 'Agent Payouts', path: '/vendor/payouts', icon: DollarSign },
    { name: 'Order History', path: '/vendor/history', icon: ListOrdered },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-white text-zinc-900 font-body min-h-screen flex flex-col md:flex-row selection:bg-primary/20">
      {/* Mobile Top Bar */}
      <header className="md:hidden flex items-center justify-between p-6 bg-white border-b border-zinc-100 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
            <Flame className="w-5 h-5 text-primary" fill="currentColor" />
          </div>
          <span className="font-headline font-black text-2xl text-zinc-900 uppercase tracking-tighter">Heat <span className="text-primary italic">Hub</span></span>
        </div>
        <button onClick={() => setIsSidebarOpen(true)} className="p-3 bg-zinc-50 rounded-2xl border border-zinc-100 shadow-sm active:scale-95 transition-all">
          <Menu className="w-6 h-6 text-zinc-900" />
        </button>
      </header>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 md:w-80 bg-zinc-900 text-white transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:flex md:flex-col p-8 shadow-2xl md:shadow-none`}>
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
              <Flame className="w-6 h-6 text-primary" fill="currentColor" />
            </div>
            <div>
              <div className="font-headline font-black text-3xl text-white tracking-tighter leading-none mt-1 uppercase">bole4us</div>
              <div className="text-[10px] font-black text-primary tracking-[0.3em] uppercase mt-2">Heat Master</div>
            </div>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-3 rounded-2xl bg-white/5 text-zinc-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all text-[10px] font-black uppercase tracking-[0.2em] group ${isActive(item.path)
                  ? 'bg-primary text-white shadow-2xl shadow-primary/20'
                  : 'text-zinc-500 hover:bg-white/5 hover:text-white'
                }`}
            >
              <item.icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${isActive(item.path) ? 'text-white' : 'text-zinc-500 group-hover:text-primary'}`} />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-10 border-t border-white/5 space-y-6">
          <div className="flex items-center gap-4 px-2">
            <div className="w-14 h-14 rounded-2xl bg-white/5 overflow-hidden border border-white/10 p-1 shadow-inner group">
              <img className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7O2lQaudezhnkyPvyhhV1uoL7wzliz77s0_VYrwEWyRwuTSpy-_LJUuLAeMzU3zLwpLOdsEkZTt1wkKiYhxOCbUgqD7DA7pR7ilWRRYHlJ5Do5WAB-Ga5uyD4ILmKIpUflqyXmjIsfZojBe-oBppaZcDGmfwXUX2DssM8iIPuDfvPlqT0bfsmyMHkQARAK3FTqDd7IG9rku50Q-zOTo6kJp0Mt1ubToRWBdqnPeMF7cSylSBKx0W300NvDcx7_KoS7Gv3t5obNyY" alt="Vendor" />
            </div>
            <div>
              <p className="text-sm font-black text-white uppercase tracking-tight">Grill Master J.</p>
              <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mt-1">Delta Central Hub</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 pb-4">
            <Link to="/settings" className="flex items-center justify-center p-4 bg-white/5 rounded-2xl text-zinc-400 hover:text-primary hover:bg-white/10 transition-all shadow-sm">
              <Settings className="w-5 h-5" />
            </Link>
            <Link to="/" className="flex items-center justify-center p-4 bg-white/5 rounded-2xl text-zinc-400 hover:text-red-500 hover:bg-white/10 transition-all shadow-sm">
              <LogOut className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen bg-white">
        <header className="hidden md:flex items-center justify-between px-12 py-8 bg-white border-b border-zinc-50 sticky top-0 z-40">
          <div className="flex items-center gap-6">
            <h2 className="text-zinc-900 font-headline font-black text-2xl uppercase tracking-tighter">Kitchen <span className="text-primary italic">Sync</span></h2>
            <div className="flex items-center gap-3 px-4 py-1.5 bg-green-500/10 text-green-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-green-500/10 shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(34,197,94,0.5)]"></span>
              Operational
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-zinc-400 group cursor-pointer hover:text-zinc-900 transition-colors">
              <div className="relative">
                <Bell className="w-5 h-5 group-hover:animate-bounce" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-sm ring-2 ring-red-500/20"></span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest">3 New Signals</span>
            </div>
            <button className="px-8 py-3 bg-zinc-900 text-white font-black rounded-2xl text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-zinc-200 hover:bg-primary transition-all active:scale-95 flex items-center gap-3">
              Manual Override
              <MoreVertical className="w-4 h-4 ml-2 opacity-50" />
            </button>
          </div>
        </header>

        <main className="flex-1 p-12">
          {children}
        </main>
      </div>
    </div>
  );
};

export default VendorLayout;
