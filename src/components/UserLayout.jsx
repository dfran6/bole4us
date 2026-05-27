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
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const nav = [
  { name: 'Heatboard', short: 'Home', path: '/dashboard', icon: Home },
  { name: 'Explore', short: 'Explore', path: '/explore', icon: Compass },
  { name: 'Orders', short: 'Orders', path: '/orders', icon: Receipt },
  { name: 'Wallet', short: 'Wallet', path: '/wallet', icon: CreditCard },
  { name: 'Help', short: 'Help', path: '/faq', icon: HelpCircle },
];

const UserLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const active = (path) => {
    if (path === '/dashboard') return location.pathname === '/dashboard';
    return (
      location.pathname === path || location.pathname.startsWith(`${path}/`)
    );
  };

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="user-layout min-h-screen overflow-x-hidden bg-white font-['DM_Sans'] text-zinc-950 antialiased selection:bg-[#F5A800]/25 selection:text-black lg:bg-[#FFFDF8]">
      {/* Desktop premium background */}
      <div
        className="pointer-events-none fixed inset-0 -z-20 hidden lg:block"
        style={{
          background: `
            radial-gradient(circle at 16% 8%, rgba(245, 168, 0, 0.1), transparent 30%),
            radial-gradient(circle at 90% 10%, rgba(255, 204, 51, 0.12), transparent 28%),
            linear-gradient(180deg, #FFFDF8 0%, #FFF9EA 42%, #FFFFFF 100%)
          `,
        }}
      />

      <div className="pointer-events-none fixed -left-44 top-24 -z-10 hidden h-[420px] w-[420px] rounded-full bg-[#F5A800]/10 blur-[120px] lg:block" />
      <div className="pointer-events-none fixed -right-48 bottom-10 -z-10 hidden h-[520px] w-[520px] rounded-full bg-zinc-950/5 blur-[130px] lg:block" />

      {/* Mobile overlay */}
      {open && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 bg-zinc-950/45 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
    app-sidebar fixed left-0 top-0 z-[60] flex h-[100dvh] w-[min(320px,92vw)] flex-col
    overflow-y-auto overscroll-contain border-r border-zinc-200/70 bg-white p-5
    shadow-[0_30px_90px_-50px_rgba(0,0,0,0.6)]
    transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)]
    sm:p-6
    lg:h-screen lg:w-[292px] lg:translate-x-0 lg:overflow-y-auto
    lg:border-zinc-200/60 lg:bg-white/90 lg:p-5 lg:shadow-none lg:backdrop-blur-2xl
    xl:p-6
    ${open ? 'translate-x-0' : '-translate-x-full'}
  `}
      >
        {/* Brand */}
        <div className="mb-7 flex items-center justify-between xl:mb-8">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3"
            aria-label="Bole4us home"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[17px] bg-zinc-950 text-[#F5A800] shadow-[0_18px_45px_-28px_rgba(0,0,0,0.75)]">
              <Zap className="h-5 w-5 fill-current" />
            </div>

            <div className="min-w-0">
              <img
                src="/logo.png"
                alt="Bole4us logo"
                className="h-8 w-auto object-contain"
              />
              <p className="mt-1 text-[9px] font-black uppercase tracking-[0.24em] text-zinc-400">
                Student OS
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

        {/* Status card */}
        <div className="mb-6 overflow-hidden rounded-[28px] bg-zinc-950 p-5 text-white shadow-[0_30px_80px_-52px_rgba(0,0,0,0.75)] xl:mb-7 xl:rounded-[30px] xl:p-6">
          <div className="mb-4 flex items-center justify-between xl:mb-5">
            <span className="rounded-full bg-[#F5A800]/15 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.15em] text-[#F5A800]">
              Live heat
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <Zap className="h-4 w-4 fill-current text-[#F5A800]" />
            </span>
          </div>

          <p className="font-serif italic text-[30px] font-bold leading-none tracking-[-0.055em] xl:text-[32px]">
            12 signals
          </p>

          <p className="mt-2 text-[12px] leading-relaxed text-white/50 xl:mt-3 xl:text-[13px]">
            Vendors nearby are active and taking reservations right now.
          </p>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10 xl:mt-5">
            <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[#F5A800] to-[#FF7A00]" />
          </div>
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
                  ${
                    isActive
                      ? 'bg-zinc-950 text-white shadow-[0_22px_54px_-36px_rgba(0,0,0,0.75)]'
                      : 'text-zinc-500 hover:bg-zinc-100/80 hover:text-zinc-950 lg:hover:bg-white'
                  }
                `}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-full bg-[#F5A800]" />
                )}

                <span
                  className={`
                    flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px]
                    transition-all duration-300
                    ${
                      isActive
                        ? 'bg-[#F5A800]/15 text-[#F5A800]'
                        : 'bg-zinc-100 text-zinc-400 group-hover:bg-white group-hover:text-zinc-950'
                    }
                  `}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </span>

                <span className="truncate text-[11px] font-black uppercase tracking-[0.16em]">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* User */}
        <div className="mt-auto border-t border-zinc-200/70 pt-5">
          <div className="mb-4 flex items-center gap-3 rounded-[24px] border border-zinc-200/70 bg-white p-3 shadow-[0_16px_45px_-36px_rgba(0,0,0,0.4)] xl:mb-5">
            <img
              className="h-12 w-12 shrink-0 rounded-[18px] object-cover"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80"
              alt="User avatar"
            />

            <div className="min-w-0">
              <p className="truncate text-[13px] font-black uppercase text-zinc-950">
                Joshua
              </p>
              <p className="mt-0.5 truncate text-[9px] font-black uppercase tracking-[0.16em] text-[#D88B00]">
                Student
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

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-[18px] border border-zinc-200 bg-white px-3 py-3 text-[9px] font-black uppercase tracking-[0.12em] text-zinc-500 transition hover:border-red-100 hover:bg-red-50 hover:text-red-500"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Topbar */}
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-zinc-200/70 bg-white/95 backdrop-blur-2xl lg:left-[292px] lg:bg-white/80">
        <div className="flex h-[76px] min-w-0 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          {/* Left */}
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <button
              type="button"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[18px] bg-zinc-950 text-white shadow-[0_18px_45px_-28px_rgba(0,0,0,0.75)] transition hover:bg-[#F5A800] lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open sidebar"
            >
              <Menu className="h-5 w-5" />
            </button>

            <Link
              to="/"
              className="shrink-0 lg:hidden"
              aria-label="Bole4us home"
            >
              <img
                src="/logo.png"
                alt="Bole4us logo"
                className="h-9 w-auto object-contain"
              />
            </Link>

            <div className="hidden min-w-0 max-w-[620px] flex-1 items-center gap-3 rounded-[22px] border border-zinc-200/80 bg-white px-4 py-3 shadow-[0_16px_45px_-38px_rgba(0,0,0,0.45)] md:flex">
              <Search className="h-4 w-4 shrink-0 text-zinc-300" />
              <input
                placeholder="Search vendors, orders, wallet..."
                className="min-w-0 flex-1 bg-transparent text-[11px] font-bold text-zinc-700 outline-none placeholder:text-zinc-300"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="hidden h-11 w-11 items-center justify-center rounded-[18px] border border-zinc-200 bg-white text-zinc-400 transition hover:border-[#F5A800]/40 hover:text-[#D88B00] sm:flex"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
            </button>

            <Link
              to="/orders"
              className="hidden h-11 w-11 items-center justify-center rounded-[18px] border border-zinc-200 bg-white text-zinc-400 transition hover:border-[#F5A800]/40 hover:text-[#D88B00] sm:flex"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </Link>

            <Link
              to="/explore"
              className="inline-flex h-11 items-center justify-center rounded-[18px] bg-[#F5A800] px-4 text-[10px] font-black uppercase tracking-[0.13em] text-white shadow-[0_18px_45px_-24px_rgba(245,168,0,0.75)] transition-all duration-300 hover:bg-zinc-950 active:scale-95 sm:px-6"
            >
              <span className="hidden sm:inline">Heat Now</span>
              <span className="sm:hidden">Heat</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="min-w-0 overflow-x-hidden pt-[76px] lg:pl-[292px]">
        <div className="min-w-0 px-4 py-6 pb-32 sm:px-6 sm:py-8 lg:px-8 lg:pb-12 xl:px-10 2xl:px-12">
          {children}
        </div>
      </main>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-200/70 bg-white/95 px-2 pb-[env(safe-area-inset-bottom)] pt-2 shadow-[0_-20px_60px_-42px_rgba(0,0,0,0.5)] backdrop-blur-2xl lg:hidden">
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
                  ${
                    isActive
                      ? 'bg-zinc-950 text-white'
                      : 'text-zinc-400 hover:bg-zinc-100 hover:text-zinc-950'
                  }
                `}
              >
                <Icon
                  className={`h-[18px] w-[18px] shrink-0 ${
                    isActive ? 'text-[#F5A800]' : ''
                  }`}
                />

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

        .user-layout {
          font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .font-serif,
        .font-display {
          font-family: 'Playfair Display', serif;
        }

        @media (prefers-reduced-motion: reduce) {
          .user-layout * {
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

export default UserLayout;
