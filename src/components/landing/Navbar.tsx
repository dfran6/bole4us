"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0E0E0E]/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "py-5"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-10 flex items-center gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-xl">🔥</span>
          <span className="font-['Sora'] text-lg font-extrabold text-[#F5A800] tracking-tight">
            bole4us
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          <Link href="#how-it-works" className="font-['DM_Sans'] text-sm text-[#A0A0A0] hover:text-white transition-colors">
            How it works
          </Link>
          <Link href="#roles" className="font-['DM_Sans'] text-sm text-[#A0A0A0] hover:text-white transition-colors">
            For who?
          </Link>
          <Link href="#testimonials" className="font-['DM_Sans'] text-sm text-[#A0A0A0] hover:text-white transition-colors">
            Reviews
          </Link>
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="font-['DM_Sans'] text-sm text-[#A0A0A0] hover:text-white transition-colors">
            Log in
          </Link>
          <Link
            href="/register"
            className="font-['DM_Sans'] text-[13px] font-bold bg-[#F5A800] text-[#111] px-5 py-2.5 rounded-full hover:bg-[#FFC107] hover:-translate-y-0.5 transition-all"
          >
            Get started
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-auto flex flex-col gap-1.5 p-1"
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-0" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0E0E0E]/97 backdrop-blur-xl border-t border-[#2E2E2E] px-6 pb-7 pt-5 flex flex-col gap-1">
          {["How it works", "For who?", "Reviews"].map((label, i) => (
            <Link
              key={i}
              href={`#${label.toLowerCase().replace(/ /g, "-")}`}
              onClick={() => setMenuOpen(false)}
              className="font-['DM_Sans'] text-base text-[#A0A0A0] py-3 border-b border-[#1E1E1E]"
            >
              {label}
            </Link>
          ))}
          <div className="h-px bg-[#2E2E2E] my-2" />
          <Link href="/login" className="font-['DM_Sans'] text-base text-[#A0A0A0] py-3 border-b border-[#1E1E1E]">
            Log in
          </Link>
          <Link
            href="/register"
            className="mt-3 block text-center bg-[#F5A800] text-[#111] font-['DM_Sans'] font-bold text-[15px] py-3.5 rounded-2xl"
          >
            Get started free
          </Link>
        </div>
      )}
    </nav>
  );
}
