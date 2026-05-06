import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Explore', path: '/explore' },
    { label: 'How it Works', path: '/' },
    { label: 'FAQ', path: '/faq' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 h-16 flex justify-between items-center px-6 border-b transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-zinc-200'
          : 'bg-transparent border-transparent'
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 flex-shrink-0">
        <img
          src="/logo.png"
          alt="Bole4us Logo"
          className="w-8 h-8 object-contain"
        />
        <span
          className="text-2xl font-black italic text-[#F5A800] tracking-tighter hidden sm:inline"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          bole4us
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`font-medium transition-colors ${
              link.label === 'Home'
                ? 'text-zinc-900 border-b-2 border-[#F5A800] py-1'
                : 'text-zinc-500 hover:text-[#F5A800]'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Desktop Right Section - Reversed Colors */}
      <div className="hidden md:flex items-center gap-4">
        <Link
          to="/register"
          className="text-sm font-bold text-zinc-600 hover:text-zinc-900 transition-colors"
        >
          Sign In
        </Link>
        <Link
          to="/register"
          className="bg-[#F5A800] text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-zinc-900 transition-all active:scale-95 shadow-lg shadow-orange-500/10"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 rounded-full transition-colors hover:bg-zinc-100 z-[60]"
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6 text-zinc-600" />
        ) : (
          <span className="flex items-center">
            <Menu className="w-6 h-6 text-zinc-600" />
          </span>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Content */}
      <div
        className={`fixed top-0 right-0 h-screen w-[50%] bg-white border-l border-zinc-200 shadow-2xl transition-transform duration-300 ease-in-out transform md:hidden z-50 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 pt-20 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-medium transition-colors py-2 text-base ${
                link.label === 'Home'
                  ? 'text-[#F5A800]'
                  : 'text-zinc-600 hover:text-[#F5A800]'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 mt-4 pt-6 border-t border-zinc-100">
            <Link
              to="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-sm font-bold rounded-xl transition-all bg-[#F5A800] text-white hover:bg-zinc-900"
            >
              Sign up
            </Link>
            <Link
              to="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-sm font-bold border border-[#F5A800] rounded-xl transition-all text-[#F5A800] hover:bg-[#F5A800]/5"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
