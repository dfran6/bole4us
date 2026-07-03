import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  BarChart3,
  Bell,
  History,
  LayoutDashboard,
  ListOrdered,
  LogOut,
  Menu,
  Settings,
  ShoppingBag,
  X,
} from 'lucide-react';

const nav = [
  { name: 'Operations',   short: 'Ops',     path: '/vendor',           icon: LayoutDashboard },
  { name: 'Flow Control', short: 'Orders',   path: '/vendor/orders',    icon: ListOrdered     },
  { name: 'Inventory',    short: 'Stock',    path: '/vendor/inventory', icon: ShoppingBag     },
  { name: 'Analytics',    short: 'Stats',    path: '/vendor/analytics', icon: BarChart3       },
  { name: 'History',      short: 'History',  path: '/vendor/history',   icon: History         },
];

const VendorLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches
  );
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  const active = (path) => {
    if (path === '/vendor') return location.pathname === '/vendor';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px)');
    const handler = (e) => setIsDesktop(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="vendor-layout min-h-screen overflow-x-hidden bg-white text-zinc-950 antialiased selection:bg-[#F5A800]/25 selection:text-black lg:bg-[#F7F6F4]">

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            aria-label="Close sidebar"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 bg-zinc-950/45 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`
          vendor-sidebar fixed left-0 top-0 z-[60] flex h-[100dvh] w-[min(320px,92vw)] flex-col
          overflow-y-auto overscroll-contain border-r border-zinc-200/70 bg-white p-5
          shadow-[1px_0_0_rgba(0,0,0,0.02),0_20px_60px_-40px_rgba(0,0,0,0.5)]
          sm:p-6
          lg:h-screen lg:w-[276px] lg:overflow-y-auto
          lg:border-zinc-200/70 lg:bg-white lg:p-5 lg:shadow-none
          xl:p-6
        `}
        animate={{ x: isDesktop ? 0 : open ? 0 : '-100%' }}
        transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 320, damping: 32 }}
      >
        {/* Brand */}
        <div className="mb-7 flex items-center justify-between xl:mb-8">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Bole4us home">
            <div className="min-w-0">
              <img src="/logo.png" alt="Bole4us logo" className="h-8 w-auto object-contain" />
              <p className="mt-1 text-[9px] font-black uppercase tracking-[0.24em] text-zinc-400">
                Vendor OS
              </p>
            </div>
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-500 transition hover:bg-zinc-950 hover:text-white lg:hidden"
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Kitchen status card */}
        <div className="mb-6 rounded-[20px] bg-zinc-950 p-5 text-white shadow-[0_1px_1px_rgba(0,0,0,0.1),0_16px_32px_-16px_rgba(0,0,0,0.5)] xl:mb-7 xl:p-6">
          <div className="mb-4 flex items-center justify-between xl:mb-5">
            <span className="text-[10px] font-black uppercase tracking-[0.15em] text-zinc-500">
              Today
            </span>
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Open
            </span>
          </div>
          <p className="font-serif italic text-[30px] font-bold leading-none tracking-[-0.04em] text-white xl:text-[32px]">
            08 orders
          </p>
          <p className="mt-2 text-[12px] leading-relaxed text-zinc-400 xl:mt-3 xl:text-[13px]">
            4 in prep · ₦142,500 earned
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-none space-y-2 xl:space-y-2.5">
          {nav.map((item) => {
            const Icon = item.icon;
            const isActive = active(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  group relative flex min-h-[58px] items-center gap-4 rounded-[22px] px-4 py-4
                  transition-all duration-300 xl:min-h-[62px] xl:px-5
                  ${isActive
                    ? 'bg-zinc-950 text-white shadow-[0_8px_20px_-10px_rgba(0,0,0,0.5)]'
                    : 'text-zinc-500 hover:bg-zinc-100/80 hover:text-zinc-950'
                  }
                `}
              >
                <Icon className={`h-[18px] w-[18px] shrink-0 ${isActive ? 'text-[#F5A800]' : 'text-zinc-400 group-hover:text-zinc-950'}`} />
                <span className="truncate text-[11px] font-black uppercase tracking-[0.16em]">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* User section */}
        <div className="mt-auto border-t border-zinc-200/70 pt-5">
          <div className="mb-4 flex items-center gap-3 rounded-[20px] border border-zinc-100 bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_8px_20px_-12px_rgba(0,0,0,0.15)] xl:mb-5">
            <img
              className="h-12 w-12 shrink-0 rounded-[18px] object-cover"
              src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=120&q=80"
              alt="Vendor avatar"
            />
            <div className="min-w-0">
              <p className="truncate text-[13px] font-black uppercase text-zinc-950">Grill Master J.</p>
              <p className="mt-0.5 truncate text-[9px] font-black uppercase tracking-[0.16em] text-[#D88B00]">
                Vendor
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Link
              to="/settings"
              className="flex items-center justify-center gap-2 rounded-[18px] border border-zinc-200 bg-white px-3 py-3 text-[9px] font-black uppercase tracking-[0.12em] text-zinc-500 transition hover:bg-zinc-950 hover:text-white"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
            <Link
              to="/"
              className="flex items-center justify-center gap-2 rounded-[18px] border border-zinc-200 bg-white px-3 py-3 text-[9px] font-black uppercase tracking-[0.12em] text-zinc-500 transition hover:border-red-100 hover:bg-red-50 hover:text-red-500"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Link>
          </div>
        </div>
      </motion.aside>

      {/* Topbar */}
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-zinc-200/70 bg-white/95 backdrop-blur-xl lg:left-[276px]">
        <div className="flex h-[72px] min-w-0 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          {/* Left */}
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <button
              type="button"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[18px] bg-zinc-950 text-white transition hover:bg-[#F5A800] lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open sidebar"
            >
              <Menu className="h-5 w-5" />
            </button>
            <Link to="/" className="shrink-0 lg:hidden" aria-label="Bole4us home">
              <img src="/logo.png" alt="Bole4us logo" className="h-9 w-auto object-contain" />
            </Link>
            <div className="hidden items-center gap-2 lg:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-bold text-zinc-500">Kitchen open</span>
            </div>
          </div>

          {/* Right */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="relative hidden h-11 w-11 items-center justify-center rounded-[18px] border border-zinc-200 bg-white text-zinc-400 transition hover:border-[#F5A800]/40 hover:text-[#D88B00] sm:flex"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[8px] font-black text-white ring-2 ring-white">
                3
              </span>
            </button>
            <Link
              to="/vendor/inventory"
              className="inline-flex h-11 items-center justify-center rounded-[18px] bg-[#F5A800] px-4 text-[10px] font-black uppercase tracking-[0.13em] text-white shadow-[0_8px_20px_-8px_rgba(245,168,0,0.6)] transition-colors duration-200 hover:bg-zinc-950 active:scale-95 sm:px-6"
            >
              <span className="hidden sm:inline">Manage Menu</span>
              <span className="sm:hidden">Menu</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="min-w-0 overflow-x-hidden pt-[72px] lg:pl-[276px]">
        <div className="min-w-0 px-4 py-6 pb-32 sm:px-6 sm:py-8 lg:px-8 lg:pb-12 xl:px-10 2xl:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: 'spring', stiffness: 120, damping: 18, mass: 0.9 }
              }
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-200/70 bg-white/95 px-2 pb-[env(safe-area-inset-bottom)] pt-2 backdrop-blur-xl lg:hidden">
        <div className="grid grid-cols-5 gap-1">
          {nav.map((item) => {
            const Icon = item.icon;
            const isActive = active(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex min-h-[58px] min-w-0 flex-col items-center justify-center gap-1.5 rounded-[20px] px-1.5 py-3
                  transition-all duration-300
                  ${isActive
                    ? 'bg-zinc-950 text-white'
                    : 'text-zinc-400 hover:bg-zinc-100 hover:text-zinc-950'
                  }
                `}
              >
                <Icon className={`h-[18px] w-[18px] shrink-0 ${isActive ? 'text-[#F5A800]' : ''}`} />
                <span className="max-w-full truncate text-[9px] font-black uppercase tracking-[0.06em]">
                  {item.short}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

        .vendor-layout {
          font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .vendor-layout .font-serif,
        .vendor-layout .font-display {
          font-family: 'Playfair Display', serif;
        }

        @media (prefers-reduced-motion: reduce) {
          .vendor-layout * {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default VendorLayout;
