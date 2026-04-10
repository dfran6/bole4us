import React from 'react';
import AdminLayout from '../components/AdminLayout';
import { TrendingUp, BarChart3, Clock, Store, Download, Calendar, ArrowUpRight, Star, Zap, Award } from 'lucide-react';

const AdminAnalytics = () => {
  return (
    <AdminLayout>
      <div className="space-y-12">
        {/* Header Section */}
        <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-black font-headline tracking-tighter text-zinc-900 uppercase leading-none">Market <br /><span className="text-primary italic">Intelligence</span></h1>
            <p className="text-zinc-400 font-medium text-sm">Real-time metrics and operational leaderboards across all urban Heat locations.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white px-6 py-4 rounded-2xl flex items-center gap-3 shadow-sm border border-zinc-50">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-900">Oct 24 - Oct 31, 2024</span>
            </div>
            <button className="bg-zinc-900 text-white p-4 rounded-2xl hover:bg-primary transition-all shadow-lg active:scale-95">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* KPI Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Total Revenue', value: '₦14.2M', change: '+12.4%', icon: TrendingUp, color: 'primary' },
            { label: 'Total Orders', value: '8,432', change: '+5.1%', icon: BarChart3, color: 'zinc-900' },
            { label: 'Avg. Heat Time', value: '14m 22s', change: '-2m slower', icon: Clock, color: 'zinc-900' },
            { label: 'Active Hosts', value: '124', change: 'Steady', icon: Store, color: 'zinc-900' }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-zinc-50 relative overflow-hidden group hover:shadow-2xl transition-all">
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">{stat.label}</p>
                <h3 className={`text-4xl font-black tracking-tighter ${stat.color === 'primary' ? 'text-primary' : 'text-zinc-900'}`}>{stat.value}</h3>
                <div className={`flex items-center gap-2 mt-4 text-[9px] font-black uppercase tracking-widest ${i === 2 ? 'text-red-500' : 'text-green-500'}`}>
                  {stat.change}
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <stat.icon className="w-24 h-24" />
              </div>
            </div>
          ))}
        </section>

        {/* Charts & Leaderboards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Order Volume Chart Area */}
          <section className="col-span-12 lg:col-span-8 bg-zinc-900 rounded-[3rem] p-10 flex flex-col shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full group-hover:scale-110 transition-transform"></div>
            <div className="flex justify-between items-center mb-12 relative z-10">
              <div>
                <h4 className="font-headline font-black text-2xl text-white uppercase tracking-tighter leading-none">Flow Velocity</h4>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-2">Daily Volume Distribution</p>
              </div>
              <div className="flex gap-4 p-1.5 bg-white/5 rounded-2xl border border-white/10">
                <button className="px-6 py-2 bg-primary text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg">Daily</button>
                <button className="px-6 py-2 text-zinc-500 hover:text-white rounded-xl text-[9px] font-black uppercase tracking-widest transition-colors">Monthly</button>
              </div>
            </div>
            <div className="flex-grow flex items-end gap-4 h-64 px-4 relative z-10">
              {[40, 55, 45, 70, 90, 100, 85].map((h, i) => (
                <div key={i} className="flex-1 group/bar relative">
                  <div
                    className={`w-full rounded-[1rem] transition-all duration-700 delay-${i * 100} ${i === 5 ? 'bg-primary' : 'bg-white/10 group-hover/bar:bg-white/20'}`}
                    style={{ height: `${h}%` }}
                  ></div>
                  {i === 5 && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-xl shadow-2xl text-[9px] font-black uppercase tracking-widest whitespace-nowrap">Peak: 2,104</div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-8 px-4 text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em] relative z-10">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, i) => (
                <span key={i} className={i === 5 ? 'text-primary' : ''}>{d}</span>
              ))}
            </div>
          </section>

          <section className="col-span-12 lg:col-span-4 space-y-10">
            <div className="bg-primary p-10 rounded-[3rem] shadow-2xl shadow-primary/20 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full group-hover:scale-110 transition-transform"></div>
              <Zap className="w-10 h-10 text-white mb-6" fill="currentColor" />
              <h4 className="text-white text-3xl font-black font-headline uppercase tracking-tighter leading-none mb-4">Neural <br />Surge Alert</h4>
              <p className="text-white/80 text-xs font-bold leading-relaxed mb-10">High demand detected in Delta Central between 18:00 - 20:30.</p>
              <button className="w-full py-4 bg-zinc-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 group/btn hover:bg-white hover:text-primary transition-all">
                Prepare Fleet
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-zinc-50 border-t-4 border-t-primary">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-8">System Status</h4>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-[10px] font-black uppercase text-zinc-900 tracking-widest">Fleet Active</span>
                    <span className="text-sm font-black text-primary italic">94%</span>
                  </div>
                  <div className="w-full bg-zinc-50 h-3 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-6 bg-green-500/5 rounded-[2rem] border border-green-500/10">
                  <div>
                    <p className="text-[10px] font-black uppercase text-green-600 tracking-widest">Global Uptime</p>
                    <p className="text-xl font-black text-zinc-900 mt-1 uppercase tracking-tighter">Verified 100%</p>
                  </div>
                  <Award className="w-8 h-8 text-green-500" />
                </div>
              </div>
            </div>
          </section>

          {/* Leaderboard: High Performers */}
          <section className="col-span-12 lg:col-span-6">
            <div className="flex items-center gap-4 mb-8 px-4">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-headline font-black text-3xl text-zinc-900 uppercase tracking-tighter">Elite <span className="text-primary italic">Hosts</span></h4>
            </div>
            <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-zinc-50">
              <div className="divide-y divide-zinc-50">
                {[
                  { name: "Mama Put's Heat House", rating: "4.9", orders: "1,240", rev: "₦8.2M", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0tHpT9uzpyjq09Epri1cNIvsohMS2Jvq5lHyc7-7GB2ddZsb1pbGdhYNHVew_m0Lr-A17SDNfo9Rcj3BW7ggfOWV7YRvUJQLhCv91bqbcBocqCOR_TldgTPjZ4yte0-xUEkwIRCO6zH3WwjE8l_wJqiW-ZsuTtJ8wUzpdxmYrKEYExjL_n8hB3zr62QBNUFCew-PZr6Tu_jwe_B0PCJnhpB46s38IyIWRwRVdBCsKNyxa9ofyOdgD0Z7iAz145NmY_YLKSF1QfnI" },
                  { name: "Urban Charcoalery", rating: "4.7", orders: "982", rev: "₦6.4M", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcT04HJsaKveFb4N6tFZ6b2VpL4OE2r_-7Xixofj0tgWsQEUBX-UMr1tEKOEwjU_zRnMk749J9AIzlCwwZmJ20ZKWVg421xtCUkfaf5GH2_itNeG4dWvxveEOXvupi2l6xjySoo_TsZsDFqUa__Zrwz3Suve-BLfPD19L2-RyuvuK8J7l0eHK3wOmB0ir-6vYKmKs5a4nxlVwJaxkfOSJHszxiS6RVHffHm5j7HqJ9EkXgsCz9P58B-_aWnApdm0W0Lg6_7fES8A4" },
                  { name: "The Heat Hearth", rating: "4.6", orders: "855", rev: "₦5.9M", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCH4HwWqJzigWp7IMibXtDtaXglXGPh9Qw2xMqT40vPPEG2RUOHGMP37khggTKwt850uW0EmhRpHPeQr0xKwleKoJukttvqyDyYKSJrVfFqC4EhaHMsC1TR8c6AllG2jfCg1TPDlo2ssZpSQ0n_hgeZUOwHMIFdx-xMKYe7FZFWYUiaarVTmUFCIdajl1TSFKJMN3XwwkLnNITfT_Siy5vURjsHB082LsOJKEIpTUpp8WxlOGMcxTItDX5JcdyMsFqs5h4dVHcdHnU" }
                ].map((host, i) => (
                  <div key={i} className="group flex items-center gap-6 p-8 hover:bg-zinc-50/50 transition-all relative cursor-pointer">
                    <span className="font-headline text-5xl font-black text-zinc-100 absolute left-4 group-hover:text-primary/10 transition-colors">0{i + 1}</span>
                    <div className="relative z-10 flex items-center gap-6 w-full">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
                        <img alt={host.name} className="w-full h-full object-cover" src={host.img} />
                      </div>
                      <div className="flex-grow">
                        <h5 className="font-headline font-black text-lg text-zinc-900 uppercase leading-none mb-2">{host.name}</h5>
                        <div className="flex gap-4">
                          <div className="flex items-center gap-1.5 px-3 py-1 bg-zinc-100 rounded-full">
                            <Star className="w-3 h-3 text-primary fill-current" />
                            <span className="text-[10px] font-black text-zinc-900">{host.rating}</span>
                          </div>
                          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest self-center shadow-none">{host.orders} cycles</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-black uppercase text-zinc-400 tracking-widest mb-1">Weekly Yield</p>
                        <p className="font-headline font-black text-xl text-primary">{host.rev}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Operational Excellence */}
          <section className="col-span-12 lg:col-span-6">
            <div className="flex items-center gap-4 mb-8 px-4">
              <div className="p-3 bg-zinc-900 rounded-2xl">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-headline font-black text-3xl text-zinc-900 uppercase tracking-tighter">Velocity <span className="text-zinc-400 italic">Nodes</span></h4>
            </div>
            <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-zinc-50 p-4">
              <div className="bg-zinc-900 rounded-[2.5rem] p-4">
                <div className="p-8 border-b border-white/5 flex justify-between items-center mb-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Logistics Optimization</span>
                  <span className="px-4 py-1.5 bg-primary text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-primary/20">Target: Low Latency</span>
                </div>
                <div className="space-y-2">
                  {[
                    { node: "Delta Central Hub", id: "B4U-772", time: "22m", target: "Fastest" },
                    { node: "Otuoke Heat Express", id: "B4U-819", time: "26m" },
                    { node: "Victoria Island East", id: "B4U-104", time: "29m" }
                  ].map((item, i) => (
                    <div key={i} className="p-8 flex items-center justify-between hover:bg-white/5 rounded-[2rem] transition-all group/node">
                      <div className="flex items-center gap-6">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black ${i === 0 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white/5 text-zinc-500'}`}>0{i + 1}</div>
                        <div>
                          <p className="font-black text-white uppercase tracking-tight text-lg group-hover/node:text-primary transition-colors">{item.node}</p>
                          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Node ID: {item.id}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-2xl font-black font-headline ${i === 0 ? 'text-green-500' : 'text-white'}`}>{item.time}</p>
                        <p className="text-[10px] font-black uppercase text-zinc-600 tracking-widest mt-1">Mean Latency</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAnalytics;
