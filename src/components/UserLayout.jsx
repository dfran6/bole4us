import {
  Bell,
  Compass,
  CreditCard,
  HelpCircle,
  Home,
  LogOut,
  Menu,
  Receipt,
  Search,
  Settings,
  ShoppingCart,
  X,
  Zap,
} from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const UserLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const nav = [
    { name: 'Heatboard', path: '/dashboard', icon: Home },
    { name: 'Explore', path: '/explore', icon: Compass },
    { name: 'Orders', path: '/orders', icon: Receipt },
    { name: 'Wallet', path: '/wallet', icon: CreditCard },
    { name: 'Help', path: '/faq', icon: HelpCircle },
  ];

  const active = (p) => location.pathname === p;

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-950 font-sans antialiased">
      {/* MOBILE OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* SIDEBAR (FIXED) */}
      <aside
        className={`
        fixed top-0 left-0 h-screen w-[300px] z-50
        bg-white/80 backdrop-blur-2xl border-r border-zinc-100
        flex flex-col p-8
        transition-transform duration-500
        ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}
      >
        {/* BRAND */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-zinc-950 flex items-center justify-center">
              <Zap className="w-5 h-5 text-[#F5A800] fill-current" />
            </div>

            <div>
              <p className="font-display italic text-2xl uppercase tracking-tighter">
                bole4us
              </p>
              <p className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.3em]">
                Pulse OS
              </p>
            </div>
          </div>

          <button className="md:hidden" onClick={() => setOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* NAV */}
        <nav className="space-y-2 flex-1 overflow-y-auto">
          {nav.map((item) => {
            const Icon = item.icon;
            const isActive = active(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`
                  flex items-center gap-4 px-5 py-4 rounded-2xl
                  relative transition-all duration-300
                  ${
                    isActive
                      ? 'bg-zinc-950 text-white'
                      : 'text-zinc-400 hover:bg-zinc-50 hover:text-zinc-950'
                  }
                `}
              >
                {isActive && (
                  <span className="absolute left-0 w-1 h-6 bg-[#F5A800] rounded-full" />
                )}
                <Icon className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-[0.25em] font-black">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* USER */}
        <div className="pt-6 border-t border-zinc-100">
          <div className="flex items-center gap-3 mb-6">
            <img
              className="w-10 h-10 rounded-xl object-cover"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100"
              alt=""
            />
            <div>
              <p className="text-[11px] font-black uppercase">Joshua</p>
              <p className="text-[9px] text-[#F5A800] font-black uppercase tracking-widest">
                Founder
              </p>
            </div>
          </div>

          <button className="flex items-center gap-3 text-[10px] font-black uppercase text-zinc-400 hover:text-zinc-950">
            <Settings className="w-4 h-4" />
            Settings
          </button>

          <button className="flex items-center gap-3 text-[10px] font-black uppercase text-zinc-400 hover:text-red-500 mt-4">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* TOPBAR (FIXED) */}
      <header
        className="
        fixed top-0 right-0 left-[300px]
        md:left-[300px]
        h-[72px]
        bg-white/70 backdrop-blur-2xl
        border-b border-zinc-100
        flex items-center justify-between
        px-6 md:px-10
        z-40
      "
      >
        <button
          className="md:hidden p-2 rounded-xl bg-zinc-950 text-white"
          onClick={() => setOpen(true)}
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden md:flex items-center gap-3 bg-white border border-zinc-100 px-5 py-3 rounded-2xl w-[420px]">
          <Search className="w-4 h-4 text-zinc-300" />
          <input
            placeholder="Search heat, vendors, orders..."
            className="w-full bg-transparent outline-none text-[10px] font-black uppercase tracking-widest"
          />
        </div>

        <div className="flex items-center gap-6">
          <Bell className="w-5 h-5 text-zinc-400" />
          <ShoppingCart className="w-5 h-5 text-zinc-400" />

          <button className="bg-zinc-950 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest">
            Heat Now
          </button>
        </div>
      </header>

      {/* MAIN CONTENT (SCROLL AREA ONLY) */}
      <main
        className="
        ml-[300px]
        pt-[72px]
        min-h-screen
        overflow-y-auto
        p-6 md:p-10
      "
      >
        {children}
      </main>
    </div>
  );
};

export default UserLayout;
