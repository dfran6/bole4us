import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Explore', to: '/explore' },
      { label: 'Get Started', to: '/register' },
      { label: 'Login', to: '/register' },
    ],
  },
  {
    title: 'Roles',
    links: [
      { label: 'Students', to: '/register?role=student' },
      { label: 'Agents', to: '/register?role=agent' },
      { label: 'Vendors', to: '/register?role=vendor' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'hello@bole4us.com', href: 'mailto:hello@bole4us.com' },
      { label: 'Twitter / X', href: '#' },
      { label: 'Instagram', href: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#080808] px-6 pb-10 pt-20 text-white">
      {/* Footer glow */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_0%,rgba(245,168,0,0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#F5A800]/5 blur-[120px]" />

      {/* Footer grain */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='footerNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23footerNoise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-[1220px]">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_0.8fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2" aria-label="Bole4us home">
              <span className="font-serif italic text-3xl font-black tracking-[-0.08em] text-[#F5A800]">
                bole4us
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-400">
              Real-time bole discovery for Nigerian campus students. Built for the streets,
              optimized for campus life.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {['Campus-first', 'Real-time stock', 'Fast pickup'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-7 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
                {group.title}
              </h4>

              <div className="flex flex-col gap-4 text-sm">
                {group.links.map((link) =>
                  link.to ? (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="text-zinc-400 transition-colors duration-300 hover:text-[#F5A800]"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-zinc-400 transition-colors duration-300 hover:text-[#F5A800]"
                    >
                      {link.label}
                    </a>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA strip */}
        <div className="mb-10 flex flex-col gap-5 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-serif italic text-2xl font-bold tracking-[-0.03em] text-white">
              Hungry already?
            </div>

            <p className="mt-1 text-sm text-zinc-500">
              Find the nearest vendor and reserve before the stock runs out.
            </p>
          </div>

          <Link
            to="/register"
            className="inline-flex items-center justify-center rounded-[20px] bg-[#F5A800] px-6 py-4 text-sm font-black text-white shadow-[0_24px_60px_-24px_rgba(245,168,0,0.75)] transition-all duration-300 hover:bg-white hover:text-zinc-950 active:scale-95"
          >
            Get started
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-600">
            © 2026 BOLE4US. Built in Nigeria.
          </p>

          <div className="flex gap-8 text-[11px] font-black uppercase tracking-[0.18em] text-zinc-600">
            <Link to="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
