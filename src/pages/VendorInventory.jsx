import React from 'react';
import VendorLayout from '../components/VendorLayout';
import { PlusCircle, Edit3, EyeOff, Minus, Plus, Flame, Fish, UtensilsCrossed } from 'lucide-react';

const VendorInventory = () => {
  return (
    <VendorLayout>
      <div className="space-y-12">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h2 className="font-headline text-5xl font-black tracking-tighter text-zinc-900 mb-2 uppercase">Menu Inventory</h2>
            <p className="font-body text-zinc-500 font-medium">Manage items, pricing, and live stock for <span className="text-zinc-900 font-bold">The Urban Heat</span></p>
          </div>
          <button className="flex items-center gap-3 bg-zinc-900 text-white px-8 py-4 rounded-2xl font-black shadow-2xl hover:opacity-90 active:scale-95 transition-all text-[10px] uppercase tracking-[0.2em]">
            <PlusCircle className="w-5 h-5" />
            Add Menu Item
          </button>
        </header>

        {/* Categories Bar */}
        <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
          {[
              { name: 'All Items', count: 14, active: true },
              { name: 'Heat Specials', count: 4 },
              { name: 'Fish & Meats', count: 6 },
              { name: 'Sides & Extras', count: 4 }
          ].map((cat, i) => (
              <button key={i} className={`whitespace-nowrap px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${cat.active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-zinc-100 text-zinc-400 hover:bg-zinc-200'}`}>
                {cat.name} ({cat.count})
              </button>
          ))}
        </div>

        {/* Inventory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          
          {/* Item Card */}
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-zinc-100 overflow-hidden flex flex-col group hover:border-primary/20 transition-all">
            <div className="h-48 relative overflow-hidden bg-zinc-50">
              <img alt="Menu item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8DyaNS-xyvW6elKX44mE8wgpifAtZ22MyXAZoHQ03BnANTBR5Fbs0H0HjX44K1xoR77iwkQUBDFqrPIqAl7RxMygAh_4Rx8vLLwR9DgJ0fLUxx6VmFrqSIYcaTSdhg5QkEfvVyKviXLYFZcezcPsmdpX-0AfMbI2CpstJWk0YMbig_331Qak8-p5nsIPigk_5N4wcc0unEgVfykK0WlIkFjmu7_lrHnRvPi9JjpBiX_TmQFynWXW2hFIO3pBAyIISllT52QwyPD0"/>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border border-white">
                <span className="text-green-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Healthy Heat
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-headline font-black text-xl text-zinc-900 uppercase tracking-tight mb-1">Signature Heat Platter</h3>
              <p className="text-2xl font-black text-primary mb-6">₦3,500</p>
              
              <div className="mt-auto space-y-6">
                <div className="flex justify-between items-center bg-zinc-50 p-3 rounded-2xl border border-zinc-100">
                  <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">In Stock</span>
                  <div className="flex items-center gap-4">
                    <button className="w-8 h-8 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-primary transition-colors">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-black text-zinc-900">42</span>
                    <button className="w-8 h-8 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-primary transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 text-white text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all">
                    <Edit3 className="w-3 h-3" /> Edit
                  </button>
                  <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-100 text-zinc-500 text-[10px] font-black uppercase tracking-widest hover:bg-red-50 hover:text-red-500 transition-all">
                    <EyeOff className="w-3 h-3" /> Hide
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Item Card - Low Stock */}
          <div className="bg-white rounded-[2.5rem] shadow-sm border-2 border-primary/5 overflow-hidden flex flex-col group hover:border-primary/20 transition-all">
            <div className="h-48 relative overflow-hidden bg-zinc-50">
              <img alt="Menu item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTTRjTJvOvK9bARgNtqoOAWO7_epEhr7PsiweGsK5b2K35xa8q2NxODLlPCK6dYkGEW9s2EClIO10QCbboZKH42h0dVqKa-cHFXi7uRTmzBowDo9ukNtJbLrsj5tZXdmHCMQ8iKV9UmzKrrg1LUyi4kL_vTEGd-ln98gDvkJoMgcIkSKhQygYT2XeLPIgceHF51LJWqSmkS6EpxLmMi9w_OA3-6JFK3bTIPp9aULTlDfeRZmzZed1yGc5CSjRJR2JpIiuUiRmaAkA"/>
              <div className="absolute top-4 right-4 bg-primary px-3 py-1.5 rounded-xl shadow-lg">
                <span className="text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                   Critical
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-headline font-black text-xl text-zinc-900 uppercase tracking-tight mb-1">Grilled Croaker Fish</h3>
              <p className="text-2xl font-black text-primary mb-6">₦8,500</p>
              
              <div className="mt-auto space-y-6">
                <div className="flex justify-between items-center bg-red-50 p-3 rounded-2xl border border-red-100">
                  <span className="text-[10px] font-black uppercase text-red-500 tracking-widest">Low Stock</span>
                  <div className="flex items-center gap-4">
                    <button className="w-8 h-8 rounded-xl bg-white border border-red-200 flex items-center justify-center text-red-400 hover:text-red-600">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-black text-red-600">3</span>
                    <button className="w-8 h-8 rounded-xl bg-white border border-red-200 flex items-center justify-center text-red-400 hover:text-red-600">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 text-white text-[10px] font-black uppercase tracking-widest">
                    <Edit3 className="w-3 h-3" /> Edit
                  </button>
                   <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-100 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                    <EyeOff className="w-3 h-3" /> Hide
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Item Card - Out of Stock */}
          <div className="bg-zinc-50 rounded-[2.5rem] shadow-sm border border-zinc-100 overflow-hidden flex flex-col group opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="h-48 relative overflow-hidden bg-zinc-200">
              <img alt="Menu item" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtoN0mT2HaLUrt-z2jkZS6X4rBbp79pkFjWxYMevDor0XtCqaLfcLh--tbajOxuNj3RiLYr_bqAD-YIkhcP9UZxYARfqXo-pvKtoy2JEnKj19T8IRfWne4SjWnjfK7jLI4XbryHyCMPI_tCks4zY3ESLdpdOogCWgmUHElfiNmzWJ2E3e6diuv859drTSSuqXS-0HUksg0PUKfaPzmmO-7nctcBFLZQbGSWS8eHtahNWQVmY8YyAfnivV32pPQaZDD96QfR4dnkl4"/>
              <div className="absolute inset-0 bg-zinc-900/40 flex items-center justify-center backdrop-blur-[2px]">
                <span className="text-white text-[10px] font-black uppercase tracking-[0.3em] border-2 border-white px-6 py-2 rotate-[-12deg]">Sold Out</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-headline font-black text-xl text-zinc-400 uppercase tracking-tight mb-1">Fire-Roasted Heat Yam</h3>
              <p className="text-2xl font-black text-zinc-400 mb-6">₦2,800</p>
              
              <div className="mt-auto space-y-6">
                <div className="flex justify-between items-center bg-zinc-200 p-3 rounded-2xl">
                  <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Stock Out</span>
                  <div className="flex items-center gap-4">
                    <span className="font-black text-zinc-500">0</span>
                    <button className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center hover:scale-105 transition-transform">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </VendorLayout>
  );
};

export default VendorInventory;
