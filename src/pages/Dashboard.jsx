import {
  Award,
  Bell,
  ChevronRight,
  Clock,
  Flame,
  MapPin,
  Star,
  TrendingUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import UserLayout from '../components/UserLayout';

const Dashboard = () => {
  return (
    <UserLayout>
      <div className="max-w-6xl mx-auto space-y-14 font-['DM_Sans'] pb-20 selection:bg-[#F5A800]/20">
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="space-y-3">
            <h1 className="font-serif italic font-black text-6xl md:text-7xl text-zinc-900 tracking-tight leading-[0.85]">
              Daily <span className="text-[#F5A800]">Heat.</span>
            </h1>
            <p className="text-zinc-500 text-lg">
              Welcome back,{' '}
              <span className="text-zinc-900 font-semibold">Uche</span> — You
              have{' '}
              <span className="text-zinc-900 font-semibold">
                12 active signals
              </span>
              .
            </p>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="flex bg-white p-2 rounded-2xl border border-zinc-100 shadow-sm">
              <Link
                to="/wallet"
                className="px-6 py-3 rounded-xl hover:bg-zinc-50 transition flex flex-col items-center"
              >
                <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">
                  Credits
                </span>
                <span className="text-lg font-bold text-zinc-900 mt-1">
                  ₦4,500
                </span>
              </Link>
              <div className="h-8 w-px bg-zinc-100 mx-3" />
              <div className="px-6 py-3 flex flex-col items-center">
                <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">
                  Loyalty
                </span>
                <span className="text-lg font-bold text-zinc-900 mt-1">
                  820 XP
                </span>
              </div>
            </div>

            <button className="w-14 h-14 bg-zinc-900 rounded-xl flex items-center justify-center text-white hover:bg-[#F5A800] transition active:scale-95">
              <Bell className="w-6 h-6" />
            </button>
          </div>
        </header>

        <section className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F5A800]/20 to-transparent rounded-3xl blur-xl opacity-40"></div>

          <div className="relative bg-zinc-900 rounded-3xl p-10 md:p-14 text-white overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F5A800]/10 rounded-full blur-3xl"></div>

            <div className="relative flex flex-col lg:flex-row items-center gap-14">
              <div className="relative">
                <div className="w-36 h-36 rounded-full flex items-center justify-center border border-white/10">
                  <div className="w-full h-full rounded-full border-2 border-[#F5A800] flex items-center justify-center bg-zinc-800">
                    <Flame
                      className="w-14 h-14 text-[#F5A800]"
                      fill="currentColor"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#F5A800] text-zinc-900 px-5 py-1 rounded-full text-[10px] font-bold tracking-widest">
                  RANK 24
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left space-y-8">
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-serif italic font-black tracking-tight leading-[1]">
                    The "Spice Lord" is close.
                  </h2>
                  <p className="text-zinc-400 text-lg max-w-md">
                    Complete 3 more missions this week to unlock{' '}
                    <span className="text-white font-semibold">
                      Elite Delivery
                    </span>
                    .
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#F5A800] h-full w-[72%] rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-[11px] text-zinc-500 uppercase tracking-wider">
                    <span>1,440 XP</span>
                    <span>2,000 XP</span>
                  </div>
                </div>
              </div>

              <button className="bg-white text-zinc-900 px-8 py-4 rounded-xl font-semibold text-xs uppercase tracking-wider hover:bg-[#F5A800] transition flex items-center gap-3">
                Reap Rewards <Award className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-2xl font-semibold text-zinc-900">
                  Activity
                </h3>
                <p className="text-xs text-zinc-400 uppercase tracking-wider">
                  Live updates
                </p>
              </div>
              <Link
                to="/orders"
                className="text-xs text-zinc-400 hover:text-[#F5A800] font-semibold uppercase tracking-wider"
              >
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Order #ORD-4492',
                  desc: 'Arriving in 12 mins',
                  status: 'Live',
                  icon: Clock,
                },
                {
                  title: 'Mama Put Grill',
                  desc: 'Rated 5.0 stars',
                  status: 'Completed',
                  icon: Star,
                },
                {
                  title: 'Credits Topped Up',
                  desc: 'Added ₦5,000',
                  status: 'Wallet',
                  icon: TrendingUp,
                },
              ].map((activity, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-zinc-100 flex items-center justify-between hover:shadow-md transition"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center text-[#F5A800]">
                      <activity.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900">
                        {activity.title}
                      </h4>
                      <p className="text-sm text-zinc-400">{activity.desc}</p>
                    </div>
                  </div>
                  <span className="text-xs px-4 py-1 rounded-full bg-zinc-100 text-zinc-500">
                    {activity.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-zinc-900">Heat Map</h3>
              <p className="text-xs text-zinc-400 uppercase tracking-wider">
                Nearby picks
              </p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 text-white space-y-8 border border-white/5">
              {[
                {
                  name: 'Spicy Catfish Grill',
                  distance: '1.2km',
                  price: '₦4,500',
                },
                {
                  name: 'Smokey Plantain Bowl',
                  distance: '0.8km',
                  price: '₦2,400',
                },
              ].map((item, i) => (
                <div key={i} className="space-y-5">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-semibold text-lg">{item.name}</h4>
                      <div className="flex items-center gap-1 text-xs text-zinc-400 mt-1">
                        <MapPin className="w-3 h-3 text-[#F5A800]" />
                        {item.distance}
                      </div>
                    </div>
                    <span className="text-[#F5A800] font-semibold">
                      {item.price}
                    </span>
                  </div>

                  <button className="w-full py-3 bg-white text-zinc-900 rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#F5A800] transition">
                    Order
                  </button>

                  {i === 0 && <div className="h-px bg-white/10" />}
                </div>
              ))}

              <Link
                to="/explore"
                className="flex justify-center text-xs text-zinc-400 hover:text-white transition items-center gap-2"
              >
                Explore <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,900&family=DM+Sans:wght@300;400;500;700;900&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </UserLayout>
  );
};

export default Dashboard;
