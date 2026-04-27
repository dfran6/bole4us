import { Bell, Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

        <span className="text-2xl font-black font-headline text-[#F5A800] tracking-tighter uppercase hidden sm:inline">
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
                ? isScrolled
                  ? 'text-zinc-900 border-b-2 border-[#F5A800] py-1'
                  : 'text-white border-b-2 border-[#F5A800] py-1'
                : isScrolled
                  ? 'text-zinc-500 hover:text-[#F5A800]'
                  : 'text-white/70 hover:text-white'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Desktop Right Section */}
      <div className="hidden md:flex items-center gap-4">
        <div
          className={`hidden lg:flex items-center px-4 py-2 rounded-full gap-2 transition-all focus-within:ring-2 focus-within:ring-[#F5A800]/20 ${
            isScrolled ? 'bg-zinc-100' : 'bg-white/10 backdrop-blur'
          }`}
        >
          <Search
            className={`w-4 h-4 ${isScrolled ? 'text-zinc-400' : 'text-white/50'}`}
          />
          <input
            className={`bg-transparent border-none focus:outline-none text-sm w-48 ${
              isScrolled
                ? 'placeholder:text-zinc-400'
                : 'placeholder:text-white/50 text-white'
            }`}
            placeholder="Search heat..."
          />
        </div>

        <button
          className={`p-2 rounded-full transition-colors relative ${
            isScrolled ? 'hover:bg-zinc-100' : 'hover:bg-white/10'
          }`}
        >
          <Bell
            className={`w-5 h-5 ${isScrolled ? 'text-zinc-600' : 'text-white'}`}
          />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#F5A800] rounded-full ring-2 ring-white"></span>
        </button>

        <button
          className={`p-2 rounded-full transition-colors ${
            isScrolled ? 'hover:bg-zinc-100' : 'hover:bg-white/10'
          }`}
        >
          <ShoppingCart
            className={`w-5 h-5 ${isScrolled ? 'text-zinc-600' : 'text-white'}`}
          />
        </button>

        <Link
          to="/dashboard"
          className={`w-8 h-8 rounded-full ml-2 flex items-center justify-center cursor-pointer border transition-colors ${
            isScrolled
              ? 'bg-zinc-100 border-zinc-200 hover:border-[#F5A800]'
              : 'bg-white/10 border-white/20 hover:border-white/50'
          }`}
        >
          <User
            className={`w-5 h-5 ${isScrolled ? 'text-zinc-600' : 'text-white'}`}
          />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={`md:hidden p-2 rounded-full transition-colors ${
          isScrolled ? 'hover:bg-zinc-100' : 'hover:bg-white/10'
        }`}
      >
        {mobileMenuOpen ? (
          <X
            className={`w-6 h-6 ${isScrolled ? 'text-zinc-600' : 'text-white'}`}
          />
        ) : (
          <Menu
            className={`w-6 h-6 ${isScrolled ? 'text-zinc-600' : 'text-white'}`}
          />
        )}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`absolute top-16 left-0 right-0 border-b transition-all duration-300 md:hidden ${
            isScrolled
              ? 'bg-white/80 backdrop-blur-xl border-zinc-200'
              : 'bg-black/80 backdrop-blur-xl border-white/10'
          }`}
        >
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium transition-colors py-2 ${
                  link.label === 'Home'
                    ? 'text-[#F5A800] border-l-4 border-[#F5A800] pl-2'
                    : isScrolled
                      ? 'text-zinc-600 hover:text-[#F5A800] pl-2'
                      : 'text-white/70 hover:text-white pl-2'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/10">
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-2.5 text-center font-bold rounded-xl transition-all bg-[#F5A800] hover:bg-[#d99400] text-white"
              >
                Sign up
              </Link>

              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-2.5 text-center font-bold border rounded-xl transition-all text-[#F5A800] border-[#F5A800] hover:bg-[#F5A800] hover:text-white"
              >
                Logssin
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
