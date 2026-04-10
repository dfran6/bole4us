import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserLayout from '../components/UserLayout';
import { LogOut, Edit3, CheckCircle2, MapPin, History, RefreshCcw, Info } from 'lucide-react';

const StudentProfile = () => {
  const navigate = useNavigate();

  return (
    <UserLayout>
      <div className="max-w-4xl mx-auto space-y-12 py-6">
        {/* Profile Section */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-black/5">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img alt="Student Portrait" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8kvgi5PVV4tnXTqndCxgIKpctqFp306DhqTYKStk9biHYSQ_0hM8O8pvVWPraqfYuX10gHtKU-0nlHpU6cTzhZUjR8YZEi_qnXFOYRHU-dzTc0t7lLWOLTuY6P9qw4Srtm9m1iblW4WkA9IsFChGLRzwjUoKAVyPbTHbfrB0R7HfDB6_KLutTzxfRlt3rH0rPcKMSMbXu5KeSnu4aiZ3op2Qg6ZvuaEFhWbZTEeT6ENjspYIB088dsLmDQvtVEqlxDCJGhUFXa78"/>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-xl shadow-lg ring-4 ring-white">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-headline font-black text-4xl tracking-tighter text-zinc-900 uppercase">Alex Thompson</h1>
              <p className="font-label text-xs font-black text-zinc-400 tracking-widest uppercase mt-2">ID: STU-882910 • Senior Heat Specialist</p>
              
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                <button onClick={() => navigate('/')} className="flex items-center gap-2 px-6 py-3 bg-red-50 text-red-600 font-bold text-sm rounded-xl hover:bg-red-100 transition-all active:scale-95">
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white font-bold text-sm rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-zinc-200">
                  <Edit3 className="w-4 h-4" />
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Orders Toggle/Summary Header */}
        <div className="flex items-end justify-between px-2">
            <div>
                <h2 className="font-headline font-black text-3xl text-zinc-900 uppercase tracking-tight">Active Orders</h2>
                <p className="text-zinc-500 text-sm font-medium">Tracking 2 live sessions</p>
            </div>
            <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full">Live Status</span>
        </div>

        {/* Active Orders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-zinc-100 space-y-6 group hover:border-primary/20 transition-all cursor-pointer">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-black bg-green-100 text-green-700 px-3 py-1 rounded-full uppercase tracking-wider">READY FOR PICKUP</span>
                <span className="text-xs font-bold text-zinc-400">#ORD-4492</span>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-100 flex-shrink-0">
                  <img alt="Smoky Ribs" className="w-full h-full object-cover group-hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpG2ftZ7rNFhXT1RiE6EzN2Hpu-6lunR4CBLanbn9iZxNfTGCw0v2sgrDqiZC0m_FBjNc7NUk3w1DA0FeK9gxu3Du1nGfiUAr5sJglxMk97t5JwKoWNgv49nO_P1qDRHcdk5EvE6QrxmEuVCrewwLu_Vtt9q9T4ij8qyrDFqdWAC_hign0XY08F0AEITrR2t9IdAZXqewdkMoEM31xgkXJmhh8CjGenocHR9fHF-g6HAsrzajib1Pis_-BljkSMzIFT6DtQbEFQh4"/>
                </div>
                <div>
                  <h3 className="font-headline font-black text-xl text-zinc-900 uppercase leading-none">Urban Heat Grill</h3>
                  <p className="text-sm text-zinc-500 font-medium mt-1">Quarter Rack + Spicy Slaw</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-zinc-50">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold text-zinc-900">North Campus Plaza • Station 4</span>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-zinc-100 space-y-6">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-black bg-zinc-100 text-zinc-500 px-3 py-1 rounded-full uppercase tracking-wider">ON THE WAY</span>
                <span className="text-xs font-bold text-zinc-400">#ORD-4510</span>
              </div>
              <div className="flex items-center gap-5 opacity-80">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-100 flex-shrink-0">
                  <img alt="Bole Chicken" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-viOxerctvAIvGV8f7lg8KS-6YGdtyrSsqoN63IeayvvlIDPohPleejoWffXDTEnD81GjwKxUr7fm6uGFwBA5CHAtNmuzCQCClmR6ga0Jn_af5SEuewYU2Vw0u2Cxa5iwgRws8PdIzkL6rx3o98bx_X3pcNBkuwIIm30NCtf5CBXLQcV8tzE54XrhT7fXS8-0xr7cHSH0hh-mstrIci-q0CfqypTs8TvGB6KXoqW8cJ_QhSaLQAN3_lqbv-2831iUMCi5IeYFR0Y"/>
                </div>
                <div>
                  <h3 className="font-headline font-black text-xl text-zinc-900 uppercase leading-none">The Charcoal Pit</h3>
                  <p className="text-sm text-zinc-500 font-medium mt-1">Grilled Heat Wings (x12)</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-1/3 rounded-full"></div>
                </div>
                <p className="text-[10px] font-black text-primary uppercase tracking-widest text-center animate-pulse">Arrival in 12 mins</p>
              </div>
            </div>
        </div>

        {/* History Section */}
        <section className="space-y-6 pt-6">
          <h2 className="font-headline font-black text-3xl text-zinc-900 uppercase tracking-tight px-2">History</h2>
          <div className="bg-white rounded-[2.5rem] border border-zinc-100 overflow-hidden shadow-sm">
            {[
                { name: 'Flame & Ember', date: 'Oct 24, 2024', price: '₦12,500', status: 'Delivered', icon: History, color: 'text-tertiary' },
                { name: 'Smokehouse Deli', date: 'Oct 21, 2024', price: '₦8,200', status: 'Expired', icon: Info, color: 'text-zinc-400' }
            ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-8 hover:bg-zinc-50 transition-colors group cursor-pointer border-b border-zinc-50 last:border-0">
                    <div className="flex items-center gap-6">
                        <div className={`w-14 h-14 flex items-center justify-center bg-zinc-50 rounded-2xl group-hover:bg-white transition-colors`}>
                            <item.icon className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <div>
                            <h4 className="font-black text-lg text-zinc-900 uppercase tracking-tight">{item.name}</h4>
                            <p className="text-xs font-medium text-zinc-400">{item.date} • {item.status}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="font-headline font-black text-xl text-zinc-900">{item.price}</p>
                        <button className="flex items-center gap-1 text-[10px] font-black text-primary uppercase tracking-widest ml-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <RefreshCcw className="w-3 h-3" /> Reorder
                        </button>
                    </div>
                </div>
            ))}
          </div>
        </section>

        <div className="text-center pt-8">
            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">© 2024 BOLE4US. THE URBAN HEAT EXPERIENCE.</p>
        </div>
      </div>
    </UserLayout>
  );
};

export default StudentProfile;
