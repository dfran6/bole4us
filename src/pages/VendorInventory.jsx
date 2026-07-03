import { Edit3, EyeOff, Flame, Minus, Plus, PlusCircle } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import VendorLayout from '../components/VendorLayout';

const categories = [
  { name: 'All Items',      count: 14 },
  { name: 'Heat Specials',  count: 4  },
  { name: 'Fish & Meats',   count: 6  },
  { name: 'Sides & Extras', count: 4  },
];

const VendorInventory = () => {
  const [activeCategory, setActiveCategory] = useState('All Items');

  return (
    <VendorLayout>
      <div className="vendor-inventory mx-auto w-full max-w-6xl space-y-8 pb-20 xl:px-0">

        {/* Header */}
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <h2 className="font-serif italic text-4xl font-black leading-none tracking-[-0.04em] text-zinc-950 sm:text-5xl">
              Menu Inventory
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-zinc-500">
              Manage items, pricing, and live stock for{' '}
              <span className="font-bold text-zinc-950">The Urban Heat</span>
            </p>
          </div>
          <button
            type="button"
            className="flex items-center gap-3 rounded-[16px] bg-zinc-950 px-7 py-4 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-[0_14px_28px_-14px_rgba(0,0,0,0.5)] transition-colors duration-200 hover:bg-[#F5A800] active:scale-95"
          >
            <PlusCircle className="h-5 w-5" />
            Add Menu Item
          </button>
        </header>

        {/* Category filter */}
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                type="button"
                onClick={() => setActiveCategory(cat.name)}
                className={`relative whitespace-nowrap rounded-[16px] px-6 py-3 text-[10px] font-black uppercase tracking-[0.16em] transition-colors duration-200 active:scale-95 ${
                  isActive
                    ? 'text-white'
                    : 'border border-zinc-200 bg-white text-zinc-400 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:border-[#F5A800]/30 hover:text-[#D88B00]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="inventory-category-pill"
                    className="absolute inset-0 rounded-[16px] bg-[#F5A800] shadow-[0_10px_20px_-10px_rgba(245,168,0,0.6)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{cat.name} ({cat.count})</span>
              </button>
            );
          })}
        </div>

        {/* Inventory grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {/* Card — In Stock */}
          <article className="group flex flex-col overflow-hidden rounded-[20px] border border-zinc-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F5A800]/25 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]">
            <div className="relative h-44 overflow-hidden bg-zinc-100">
              <img
                alt="Signature Heat Platter"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8DyaNS-xyvW6elKX44mE8wgpifAtZ22MyXAZoHQ03BnANTBR5Fbs0H0HjX44K1xoR77iwkQUBDFqrPIqAl7RxMygAh_4Rx8vLLwR9DgJ0fLUxx6VmFrqSIYcaTSdhg5QkEfvVyKviXLYFZcezcPsmdpX-0AfMbI2CpstJWk0YMbig_331Qak8-p5nsIPigk_5N4wcc0unEgVfykK0WlIkFjmu7_lrHnRvPi9JjpBiX_TmQFynWXW2hFIO3pBAyIISllT52QwyPD0"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="truncate font-black uppercase tracking-[-0.02em] text-zinc-950">
                Signature Heat Platter
              </h3>
              <p className="mt-1 text-xl font-black text-[#F5A800]">₦3,500</p>

              <div className="mt-auto space-y-4 pt-5">
                <div className="flex items-center justify-between rounded-[14px] border border-zinc-100 bg-zinc-50 p-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                    In Stock
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="flex h-8 w-8 items-center justify-center rounded-[10px] border border-zinc-200 bg-white text-zinc-400 transition hover:border-[#F5A800]/30 hover:text-[#F5A800]"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="min-w-[24px] text-center font-black text-zinc-950">42</span>
                    <button
                      type="button"
                      className="flex h-8 w-8 items-center justify-center rounded-[10px] border border-zinc-200 bg-white text-zinc-400 transition hover:border-[#F5A800]/30 hover:text-[#F5A800]"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-1.5 rounded-[14px] bg-zinc-950 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-white shadow-[0_8px_16px_-8px_rgba(0,0,0,0.4)] transition hover:bg-[#F5A800] active:scale-95"
                  >
                    <Edit3 className="h-3 w-3" /> Edit
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-1.5 rounded-[14px] border border-zinc-200 bg-zinc-100 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-zinc-500 transition hover:border-red-100 hover:bg-red-50 hover:text-red-500"
                  >
                    <EyeOff className="h-3 w-3" /> Hide
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Card — Low Stock */}
          <article className="flex flex-col overflow-hidden rounded-[20px] border border-red-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(239,68,68,0.2)] transition-colors duration-200">
            <div className="relative h-44 overflow-hidden bg-zinc-100">
              <img
                alt="Grilled Croaker Fish"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTTRjTJvOvK9bARgNtqoOAWO7_epEhr7PsiweGsK5b2K35xa8q2NxODLlPCK6dYkGEW9s2EClIO10QCbboZKH42h0dVqKa-cHFXi7uRTmzBowDo9ukNtJbLrsj5tZXdmHCMQ8iKV9UmzKrrg1LUyi4kL_vTEGd-ln98gDvkJoMgcIkSKhQygYT2XeLPIgceHF51LJWqSmkS6EpxLmMi9w_OA3-6JFK3bTIPp9aULTlDfeRZmzZed1yGc5CSjRJR2JpIiuUiRmaAkA"
              />
              <div className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1.5">
                <span className="text-[10px] font-black uppercase tracking-[0.14em] text-white">
                  Critical
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="truncate font-black uppercase tracking-[-0.02em] text-zinc-950">
                Grilled Croaker Fish
              </h3>
              <p className="mt-1 text-xl font-black text-[#F5A800]">₦8,500</p>

              <div className="mt-auto space-y-4 pt-5">
                <div className="flex items-center justify-between rounded-[16px] border border-red-100 bg-red-50 p-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-red-500">
                    Low Stock
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="flex h-8 w-8 items-center justify-center rounded-[10px] border border-red-200 bg-white text-red-400 transition hover:text-red-600"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="min-w-[24px] text-center font-black text-red-600">3</span>
                    <button
                      type="button"
                      className="flex h-8 w-8 items-center justify-center rounded-[10px] border border-red-200 bg-white text-red-400 transition hover:text-red-600"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-1.5 rounded-[14px] bg-zinc-950 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-white shadow-[0_8px_16px_-8px_rgba(0,0,0,0.4)] transition hover:bg-[#F5A800] active:scale-95"
                  >
                    <Edit3 className="h-3 w-3" /> Edit
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-1.5 rounded-[14px] border border-zinc-200 bg-zinc-100 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-zinc-500 transition hover:border-red-100 hover:bg-red-50 hover:text-red-500"
                  >
                    <EyeOff className="h-3 w-3" /> Hide
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Card — Sold Out */}
          <article className="flex flex-col overflow-hidden rounded-[20px] border border-zinc-100 bg-zinc-50 opacity-60">
            <div className="relative h-44 overflow-hidden bg-zinc-200">
              <img
                alt="Fire-Roasted Heat Yam"
                className="h-full w-full object-cover grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtoN0mT2HaLUrt-z2jkZS6X4rBbp79pkFjWxYMevDor0XtCqaLfcLh--tbajOxuNj3RiLYr_bqAD-YIkhcP9UZxYARfqXo-pvKtoy2JEnKj19T8IRfWne4SjWnjfK7jLI4XbryHyCMPI_tCks4zY3ESLdpdOogCWgmUHElfiNmzWJ2E3e6diuv859drTSSuqXS-0HUksg0PUKfaPzmmO-7nctcBFLZQbGSWS8eHtahNWQVmY8YyAfnivV32pPQaZDD96QfR4dnkl4"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/40">
                <span className="border border-white px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                  Sold Out
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="truncate font-black uppercase tracking-[-0.02em] text-zinc-400">
                Fire-Roasted Heat Yam
              </h3>
              <p className="mt-1 text-xl font-black text-zinc-400">₦2,800</p>

              <div className="mt-auto space-y-4 pt-5">
                <div className="flex items-center justify-between rounded-[16px] bg-zinc-200 p-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500">
                    Stock Out
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-black text-zinc-500">0</span>
                    <button
                      type="button"
                      className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#F5A800] text-white shadow-sm transition hover:bg-zinc-950"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>

        </div>
      </div>

      <style>{`
        .vendor-inventory .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </VendorLayout>
  );
};

export default VendorInventory;
