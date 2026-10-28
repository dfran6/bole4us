import { Link } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import RoleAwareShell, { useIsDashboardShell } from '../components/RoleAwareShell';

const ROLE_HOME = { student: '/dashboard', vendor: '/vendor', agent: '/agent', admin: '/admin' };

const NotFound = () => {
  const { user } = useAuth();
  const inShell = useIsDashboardShell();
  const homePath = user?.role ? ROLE_HOME[user.role] ?? '/dashboard' : '/';

  return (
    <RoleAwareShell>
      <div
        className={`not-found-page flex items-center justify-center bg-[#FFFDF8] px-6 ${
          inShell ? 'min-h-[70vh] py-16' : 'min-h-screen pt-16'
        }`}
      >
        <div className="relative w-full max-w-[620px] overflow-hidden rounded-[38px] border border-white/70 bg-white/80 p-8 text-center shadow-[0_32px_100px_-60px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:p-14">
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background: `
                radial-gradient(circle at 18% 15%, rgba(245, 168, 0, 0.14), transparent 32%),
                radial-gradient(circle at 85% 85%, rgba(255, 204, 51, 0.16), transparent 30%)
              `,
            }}
          />

          <p className="font-serif italic text-[88px] font-black leading-none tracking-[-0.05em] text-zinc-950 sm:text-[120px]">
            4<span className="text-[#F5A800]">0</span>4
          </p>

          <h1 className="mt-4 font-serif italic text-2xl font-bold tracking-[-0.03em] text-zinc-950 sm:text-3xl">
            This stall is empty.
          </h1>

          <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-relaxed text-zinc-500">
            The page you're looking for doesn't exist, moved, or the link was
            typo'd. Let's get you back to something worth reserving.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to={homePath}
              className="inline-flex items-center justify-center gap-2 rounded-[20px] bg-[#F5A800] px-6 py-4 text-sm font-black uppercase tracking-[0.1em] text-white shadow-[0_24px_60px_-24px_rgba(245,168,0,0.75)] transition-all duration-300 hover:bg-zinc-950 active:scale-95"
            >
              <Home className="h-4 w-4" />
              {user ? 'Back to dashboard' : 'Back home'}
            </Link>

            <Link
              to="/explore"
              className="inline-flex items-center justify-center gap-2 rounded-[20px] border border-zinc-200 bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.1em] text-zinc-600 transition-all duration-300 hover:border-zinc-950 hover:text-zinc-950 active:scale-95"
            >
              <Compass className="h-4 w-4" />
              Explore vendors
            </Link>
          </div>
        </div>
      </div>

      {!inShell && (
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

          .not-found-page {
            font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          }

          .not-found-page .font-serif {
            font-family: 'Playfair Display', serif;
          }
        `}</style>
      )}
    </RoleAwareShell>
  );
};

export default NotFound;
