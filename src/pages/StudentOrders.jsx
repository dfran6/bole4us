import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserLayout from '../components/UserLayout';
import { Clock, MapPin, Package, Flame, Bike, CheckCircle, Receipt, ArrowRight, History, Zap } from 'lucide-react';

const StudentOrders = () => {
  const navigate = useNavigate();

  return (
    <UserLayout>
      <div className="max-w-5xl mx-auto space-y-16 py-12">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-50 pb-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-zinc-900 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl">
                <Zap className="w-3 h-3" fill="currentColor" />
                Live Tracker
            </div>
            <h1 className="font-headline font-black text-6xl md:text-7xl text-zinc-900 tracking-tighter uppercase leading-none italic">
                Active <span className="text-primary not-italic">Heat</span>
            </h1>
            <p className="text-zinc-400 font-black text-[10px] uppercase tracking-widest">Incoming and historical fuel signals</p>
          </div>
          <button className="flex items-center gap-3 px-8 py-4 bg-zinc-50 rounded-2xl text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-all border border-zinc-100 group shadow-sm">
            <History className="w-4 h-4 group-hover:rotate-[-45deg] transition-transform" />
            Archive
          </button>
        </header>

        {/* Live Active Tracker */}
        <Link to="/order/ORD-4492" className="block transform hover:scale-[1.01] transition-all">
          <section className="bg-white rounded-[4rem] p-8 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.06)] border border-primary/10 relative overflow-hidden group text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[10rem] pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-16 relative z-10">
            <div className="flex items-center gap-10">
              <div className="w-28 h-28 rounded-[2.5rem] overflow-hidden bg-zinc-100 shadow-2xl group-hover:scale-95 transition-transform duration-700">
                <img alt="Vendor Logo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpG2ftZ7rNFhXT1RiE6EzN2Hpu-6lunR4CBLanbn9iZxNfTGCw0v2sgrDqiZC0m_FBjNc7NUk3w1DA0FeK9gxu3Du1nGfiUAr5sJglxMk97t5JwKoWNgv49nO_P1qDRHcdk5EvE6QrxmEuVCrewwLu_Vtt9q9T4ij8qyrDFqdWAC_hign0XY08F0AEITrR2t9IdAZXqewdkMoEM31xgkXJmhh8CjGenocHR9fHF-g6HAsrzajib1Pis_-BljkSMzIFT6DtQbEFQh4" />
              </div>
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-black text-primary tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">ID# ORD-4492</span>
                <h3 className="font-headline font-black text-4xl text-zinc-900 border-none shadow-none uppercase tracking-tighter leading-none mt-2">Urban Heat Grill</h3>
                <p className="text-zinc-500 font-bold text-sm tracking-tight uppercase">Quarter Rack + Signature Spicy Slaw</p>
              </div>
            </div>
            
            <div className="bg-zinc-900 p-8 rounded-[2.5rem] flex items-center gap-6 text-left min-w-[240px] shadow-2xl transform hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shadow-sm group">
                <Clock className="w-8 h-8 group-hover:scale-110 transition-transform animate-pulse" />
              </div>
              <div>
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-1">Arrival Signal</p>
                <p className="font-headline font-black text-4xl text-white leading-none tracking-tighter italic">18:45</p>
              </div>
            </div>
          </div>

          {/* Stepper Timeline */}
          <div className="relative pt-12 pb-4">
            <div className="absolute top-[68px] left-12 right-12 h-2 bg-zinc-100 rounded-full">
              <div className="h-full bg-primary rounded-full w-[65%] transition-all duration-[2s] cubic-bezier(0.4, 0, 0.2, 1) shadow-[0_0_20px_rgba(255,77,0,0.4)]"></div>
            </div>
            
            <div className="grid grid-cols-4 relative z-10 text-center">
                {[
                    { label: 'Payment ACK', time: '18:05', icon: CheckCircle, active: true },
                    { label: 'Preparing', time: '18:12', icon: Flame, active: true },
                    { label: 'In Transit', time: 'Live', icon: Bike, active: true, pulse: true },
                    { label: 'Heat Received', time: 'Pending', icon: MapPin, active: false }
                ].map((step, i) => (
                <div key={i} className={`flex flex-col items-center gap-6 ${!step.active ? 'opacity-30' : ''}`}>
                  <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-2xl transition-all duration-500 ${step.active ? 'bg-zinc-900 text-white shadow-zinc-200' : 'bg-zinc-50 text-zinc-300'}`}>
                    <step.icon className={`w-8 h-8 ${step.pulse ? 'text-primary animate-bounce' : ''}`} />
                  </div>
                  <div>
                    <h5 className={`text-[10px] font-black uppercase tracking-widest ${step.pulse ? 'text-primary' : 'text-zinc-900'}`}>{step.label}</h5>
                    <p className={`text-[9px] font-black uppercase tracking-widest mt-2 ${step.pulse ? 'text-primary animate-pulse' : 'text-zinc-400'}`}>{step.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Simulation */}
          <div className="mt-20 rounded-[3rem] overflow-hidden h-64 relative group cursor-crosshair border border-zinc-100 shadow-inner">
            <img alt="Map Live Tracking" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] scale-110 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvJBPQB2BXV7t3B1sBdmpBufGPMdLpeZmId1pOgHiefD6D6hNJkMDiR_gxg5iyDncLRhDbwDvm77sS19QHS6A9-9k9yf8FSZbsYUiGjdLBEFj8ZdqDkekWhRmmO0Xfwol00sMn4FrsXptzFjh8tg-MbmM6oFeES5zqJM7acilSMhSUSKO8FtjBYjnKgJ0Q2tU8_yDbfNklVW89oPaH1ZkQ23qlogxYWLdDXhKqJQMSVYh3XHPeGNR7fuQRfOmnPUYO3itQZPu0-bM" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent flex items-end p-10">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-6 text-white">
                  <div className="w-14 h-14 rounded-2xl bg-white text-zinc-900 flex items-center justify-center font-headline font-black text-xl shadow-2xl">R</div>
                  <div className="space-y-1">
                    <p className="font-black text-[10px] uppercase tracking-widest text-primary">Active Rider</p>
                    <p className="font-headline font-black text-2xl uppercase tracking-tighter">Chuks E.</p>
                  </div>
                </div>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-white hover:text-zinc-900 transition-all">Ping Signal</button>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-primary rounded-full ring-8 ring-primary/20 animate-ping"></div>
              <div className="absolute top-0 left-0 w-6 h-6 bg-primary rounded-full shadow-[0_0_30px_rgba(255,77,0,1)]"></div>
            </div>
          </div>
        </section>
      </Link>

        {/* History Area */}
        <section className="space-y-12">
          <div className="flex items-center gap-4 px-4">
              <div className="p-3 bg-zinc-900 text-white rounded-2xl shadow-xl shadow-zinc-200">
                <Receipt className="w-6 h-6" />
              </div>
              <h2 className="font-headline font-black text-4xl text-zinc-900 uppercase tracking-tighter">Recent <span className="text-zinc-400 italic">Fueling</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
                { name: "Mama Put's Heat House", date: "Oct 28, 2024", price: "₦6,400", items: 3, status: "Delivered", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0tHpT9uzpyjq09Epri1cNIvsohMS2Jvq5lHyc7-7GB2ddZsb1pbGdhYNHVew_m0Lr-A17SDNfo9Rcj3BW7ggfOWV7YRvUJQLhCv91bqbcBocqCOR_TldgTPjZ4yte0-xUEkwIRCO6zH3WwjE8l_wJqiW-ZsuTtJ8wUzpdxmYrKEYExjL_n8hB3zr62QBNUFCew-PZr6Tu_jwe_B0PCJnhpB46s38IyIWRwRVdBCsKNyxa9ofyOdgD0Z7iAz145NmY_YLKSF1QfnI" },
                { name: "The Charcoal Hub", date: "Oct 24, 2024", price: "₦2,500", items: 1, status: "Delivered", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcT04HJsaKveFb4N6tFZ6b2VpL4OE2r_-7Xixofj0tgWsQEUBX-UMr1tEKOEwjU_zRnMk749J9AIzlCwwZmJ20ZKWVg421xtCUkfaf5GH2_itNeG4dWvxveEOXvupi2l6xjySoo_TsZsDFqUa__Zrwz3Suve-BLfPD19L2-RyuvuK8J7l0eHK3wOmB0ir-6vYKmKs5a4nxlVwJaxkfOSJHszxiS6RVHffHm5j7HqJ9EkXgsCz9P58B-_aWnApdm0W0Lg6_7fES8A4" }
            ].map((receipt, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-zinc-50 flex items-center justify-between group hover:shadow-2xl hover:border-primary/20 transition-all cursor-pointer relative overflow-hidden">
                <div className="flex items-center gap-8 relative z-10">
                  <div className="w-20 h-20 rounded-[1.5rem] overflow-hidden shadow-xl group-hover:scale-105 transition-transform duration-500">
                    <img alt={receipt.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src={receipt.img} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-headline font-black text-xl text-zinc-900 uppercase tracking-tight leading-none group-hover:text-primary transition-colors">{receipt.name}</h4>
                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{receipt.items} units • {receipt.date}</p>
                    <div className="flex items-center gap-2 pt-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-[9px] font-black uppercase text-green-600 tracking-widest">Verified {receipt.status}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end gap-3 relative z-10">
                  <p className="font-headline font-black text-2xl text-zinc-900 tracking-tighter">{receipt.price}</p>
                  <button className="flex items-center gap-2 p-3 bg-zinc-50 rounded-xl text-zinc-300 group-hover:text-zinc-900 group-hover:bg-zinc-100 transition-all border border-transparent group-hover:border-zinc-100">
                      <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <p className="text-center text-zinc-300 text-[10px] font-black uppercase tracking-[0.5em] pt-20">© 2024 bole4us platform • Secure Signaling</p>
      </div>
    </UserLayout>
  );
};

export default StudentOrders;
