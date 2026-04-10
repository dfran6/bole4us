import React from 'react';
import VendorLayout from '../components/VendorLayout';
import { Filter, History, Clock, AlertTriangle, CheckCircle, Bike, Smartphone, Flame, ShoppingBag } from 'lucide-react';

const VendorOrders = () => {
  return (
    <VendorLayout>
      <div className="space-y-12 h-full flex flex-col">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-zinc-100 pb-8">
          <div>
            <h2 className="font-headline text-5xl font-black tracking-tighter text-zinc-900 mb-2 uppercase">Kitchen Board</h2>
            <div className="flex flex-wrap items-center gap-6 mt-4">
              <span className="text-[10px] font-black bg-primary/10 text-primary px-4 py-2 rounded-full flex items-center gap-2 uppercase tracking-widest border border-primary/10">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div> Receiving Heat
              </span>
              <div className="flex items-center gap-2 text-zinc-400 font-black text-[10px] uppercase tracking-widest">
                <Clock className="w-4 h-4" />
                Est. Prep: 18m
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex justify-center items-center w-12 h-12 rounded-2xl bg-zinc-100 hover:bg-zinc-200 transition-all">
              <Filter className="w-5 h-5 text-zinc-900" />
            </button>
            <button className="flex justify-center items-center w-12 h-12 rounded-2xl bg-zinc-100 hover:bg-zinc-200 transition-all">
              <History className="w-5 h-5 text-zinc-900" />
            </button>
          </div>
        </header>

        {/* Kanban Board Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
          
          {/* Column 1: Incoming */}
          <section className="bg-zinc-50/50 rounded-[2.5rem] p-6 flex flex-col h-[calc(100vh-280px)] border border-zinc-100">
            <div className="flex items-center justify-between mb-8 px-4">
              <h3 className="font-black text-[10px] tracking-[0.2em] uppercase text-zinc-400 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-400"></div> Incoming
              </h3>
              <span className="bg-white border border-zinc-100 text-zinc-900 text-[10px] font-black px-3 py-1 rounded-full shadow-sm">4</span>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-6 custom-scrollbar pr-2 pb-4">
              {/* Order Card */}
              <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-zinc-100 group hover:border-orange-200 transition-all cursor-grab active:cursor-grabbing hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-black text-zinc-400 bg-zinc-50 px-2.5 py-1 rounded-lg uppercase tracking-widest">#9012</span>
                    <h4 className="font-black text-xl text-zinc-900 uppercase tracking-tight mt-2">Uche K.</h4>
                  </div>
                  <span className="text-[10px] uppercase font-black text-red-500 tracking-widest animate-pulse">1m ago</span>
                </div>
                <div className="space-y-3 mb-6 bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
                  <p className="text-xs font-bold text-zinc-900 flex justify-between">
                    <span>2x Smokey Heat</span> <span className="text-zinc-400">₦2,400</span>
                  </p>
                  <p className="text-xs font-bold text-zinc-900 flex justify-between">
                    <span>1x Croaker Fish</span> <span className="text-zinc-400">₦8,500</span>
                  </p>
                  <p className="text-[10px] text-red-600 font-black tracking-widest uppercase border-t border-red-100 pt-3 mt-3 flex items-center gap-2">
                    <AlertTriangle className="w-3 h-3" /> Extra Spicy Pepper
                  </p>
                </div>
                <button className="w-full py-4 bg-zinc-900 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:bg-orange-600 transition-colors shadow-xl shadow-zinc-200">
                  Move to Grill
                </button>
              </div>

              {/* Order Card */}
              <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-zinc-100 group hover:border-orange-200 transition-all cursor-grab active:cursor-grabbing hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-black text-zinc-400 bg-zinc-50 px-2.5 py-1 rounded-lg uppercase tracking-widest">#9014</span>
                    <h4 className="font-black text-xl text-zinc-900 uppercase tracking-tight mt-2">Bolanle A.</h4>
                  </div>
                </div>
                <div className="space-y-3 mb-6 bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
                  <p className="text-xs font-bold text-zinc-900 flex justify-between">
                    <span>1x Large Yam Bowl</span> <span className="text-zinc-400">₦3,200</span>
                  </p>
                </div>
                <button className="w-full py-4 bg-zinc-900 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:bg-orange-600 transition-colors">
                  Move to Grill
                </button>
              </div>
            </div>
          </section>

          {/* Column 2: Grilling */}
          <section className="bg-primary/5 rounded-[2.5rem] p-6 flex flex-col h-[calc(100vh-280px)] border-2 border-primary/10">
            <div className="flex items-center justify-between mb-8 px-4">
              <h3 className="font-black text-[10px] tracking-[0.2em] uppercase text-primary flex items-center gap-3">
                <Flame className="w-4 h-4" fill="currentColor" /> Grilling
              </h3>
              <span className="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg shadow-primary/20">2</span>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-6 custom-scrollbar pr-2 pb-4">
              {/* Order Card */}
              <div className="bg-white p-6 rounded-[2rem] shadow-lg shadow-primary/10 border-2 border-primary/20 cursor-grab active:cursor-grabbing hover:-translate-y-1 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[4rem] pointer-events-none -mr-8 -mt-8"></div>
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div>
                    <span className="text-[10px] font-black text-white bg-primary px-3 py-1.5 rounded-xl shadow-md uppercase tracking-widest">#8998</span>
                    <h4 className="font-black text-xl text-zinc-900 uppercase tracking-tight mt-3">Chidi M.</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest">Live</p>
                    <p className="text-xs font-bold text-zinc-400 mt-1">12m</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6 bg-zinc-50 p-4 rounded-2xl border border-zinc-100 text-zinc-900 relative z-10">
                  <p className="text-xs font-bold italic">"Make it smoky!"</p>
                  <p className="text-sm font-black uppercase text-zinc-900 mt-2">3x Signature Heat Platter</p>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full h-2 bg-zinc-100 rounded-full mb-6 overflow-hidden">
                  <div className="h-full bg-primary rounded-full w-[80%] animate-pulse"></div>
                </div>

                <button className="w-full py-4 bg-zinc-900 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:scale-[0.98] transition-all flex justify-center items-center gap-2 shadow-xl shadow-zinc-200">
                  <CheckCircle className="w-4 h-4" /> Mark Ready
                </button>
              </div>

              {/* Order Card */}
              <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-zinc-100 cursor-grab active:cursor-grabbing hover:-translate-y-1 transition-all">
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div>
                    <span className="text-[10px] font-black text-zinc-400 bg-zinc-50 px-3 py-1.5 rounded-xl uppercase tracking-widest">#8999</span>
                    <h4 className="font-black text-xl text-zinc-900 uppercase tracking-tight mt-3">Ngozi A.</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">Started</p>
                    <p className="text-xs font-bold text-zinc-400 mt-1">5m</p>
                  </div>
                </div>
                <div className="space-y-2 mb-6 bg-zinc-50 p-4 rounded-2xl border border-zinc-100 text-zinc-600 relative z-10 text-xs font-bold">
                  <p>1x Fire-Roasted Heat Yam</p>
                  <p>1x Grilled Titus Fish</p>
                </div>
                
                <div className="w-full h-2 bg-zinc-100 rounded-full mb-6 overflow-hidden">
                  <div className="h-full bg-primary rounded-full w-[30%]"></div>
                </div>

                <button className="w-full py-4 bg-zinc-100 text-zinc-400 font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:bg-zinc-900 hover:text-white transition-all flex justify-center items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Mark Ready
                </button>
              </div>
            </div>
          </section>

          {/* Column 3: Ready for Pickup */}
          <section className="bg-green-50/30 rounded-[2.5rem] p-6 flex flex-col h-[calc(100vh-280px)] border border-green-100">
            <div className="flex items-center justify-between mb-8 px-4">
              <h3 className="font-black text-[10px] tracking-[0.2em] uppercase text-green-600 flex items-center gap-3">
                <ShoppingBag className="w-4 h-4" /> Ready
              </h3>
              <span className="bg-green-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg shadow-green-200">1</span>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-6 custom-scrollbar pr-2 pb-4">
              {/* Order Card */}
              <div className="bg-white p-6 rounded-[2rem] shadow-sm border-2 border-green-500/20 hover:border-green-500 transition-all relative">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-black text-white bg-green-500 px-3 py-1.5 rounded-xl uppercase tracking-widest shadow-md">#8992</span>
                    <h4 className="font-black text-xl text-zinc-900 uppercase tracking-tight mt-3">David O.</h4>
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mt-2 block">Rider: John T.</span>
                  </div>
                </div>
                
                <div className="p-4 bg-green-50 border border-green-100 rounded-[1.5rem] flex items-center gap-4 mt-6">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                    <Bike className="w-6 h-6 text-green-600 animate-bounce" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-green-600">Rider Arriving</p>
                    <p className="text-lg font-black text-green-900 mt-1">2 Mins</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </VendorLayout>
  );
};

export default VendorOrders;
