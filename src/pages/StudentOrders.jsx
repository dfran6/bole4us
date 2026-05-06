import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bike,
  CheckCircle,
  Clock,
  Flame,
  History,
  MapPin,
  Receipt,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import UserLayout from '../components/UserLayout';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const StudentOrders = () => {
  return (
    <UserLayout>
      <motion.div
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto space-y-16 py-12 px-4 md:px-8 font-['DM_Sans']"
      >
        <motion.header
          variants={fadeUp}
          custom={0}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-zinc-100 pb-10"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-900 text-[#F5A800] rounded-full text-[11px] font-medium uppercase tracking-wider">
              <Zap className="w-3 h-3" />
              Live Network
            </div>

            <h1 className="font-serif italic font-black text-5xl md:text-6xl text-zinc-900 tracking-tight">
              Active <span className="text-[#F5A800] not-italic">Heat</span>
            </h1>

            <p className="text-sm text-zinc-400">
              Monitoring live orders & history
            </p>
          </div>

          <button className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl text-sm font-medium text-zinc-500 hover:text-zinc-900 border border-zinc-100 hover:border-zinc-200 hover:shadow-sm transition">
            <History className="w-4 h-4" />
            Archive
          </button>
        </motion.header>

        <motion.div variants={fadeUp} custom={1}>
          <Link to="/order/ORD-4492" className="block group">
            <section className="relative bg-white rounded-3xl p-6 md:p-10 border border-zinc-100 overflow-hidden hover:shadow-md transition">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-12">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-zinc-100 border">
                    <img
                      alt="Vendor"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpG2ftZ7rNFhXT1RiE6EzN2Hpu-6lunR4CBLanbn9iZxNfTGCw0v2sgrDqiZC0m_FBjNc7NUk3w1DA0FeK9gxu3Du1nGfiUAr5sJglxMk97t5JwKoWNgv49nO_P1qDRHcdk5EvE6QrxmEuVCrewwLu_Vtt9q9T4ij8qyrDFqdWAC_hign0XY08F0AEITrR2t9IdAZXqewdkMoEM31xgkXJmhh8CjGenocHR9fHF-g6HAsrzajib1Pis_-BljkSMzIFT6DtQbEFQh4"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-[#F5A800] font-medium mb-1">
                      #ORD-4492
                    </p>
                    <h3 className="font-serif italic font-black text-2xl text-zinc-900">
                      Urban Heat Grill
                    </h3>
                    <p className="text-sm text-zinc-400">
                      Quarter Rack + Spicy Slaw
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-900 px-6 py-4 rounded-2xl flex items-center gap-4 text-white">
                  <Clock className="w-5 h-5 text-[#F5A800]" />
                  <div>
                    <p className="text-xs text-zinc-400">ETA</p>
                    <p className="text-lg font-semibold">18:45</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="w-full h-1 bg-zinc-100 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-[#F5A800] to-[#FFD54A] h-full w-[65%]" />
                </div>

                <div className="grid grid-cols-4 text-center text-xs">
                  {[
                    { label: 'ACK', icon: CheckCircle, active: true },
                    { label: 'Prep', icon: Flame, active: true },
                    { label: 'Transit', icon: Bike, active: true },
                    { label: 'Drop', icon: MapPin, active: false },
                  ].map((step, i) => (
                    <div
                      key={i}
                      className={
                        step.active ? 'text-zinc-900' : 'text-zinc-300'
                      }
                    >
                      <div
                        className={`w-10 h-10 mx-auto mb-2 flex items-center justify-center rounded-lg border ${step.active ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-zinc-100 text-zinc-400 border-zinc-100'}`}
                      >
                        <step.icon className="w-4 h-4" />
                      </div>
                      {step.label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 rounded-2xl overflow-hidden h-56 border border-zinc-100 relative">
                <img
                  alt="Map"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvJBPQB2BXV7t3B1sBdmpBufGPMdLpeZmId1pOgHiefD6D6hNJkMDiR_gxg5iyDncLRhDbwDvm77sS19QHS6A9-9k9yf8FSZbsYUiGjdLBEFj8ZdqDkekWhRmmO0Xfwol00sMn4FrsXptzFjh8tg-MbmM6oFeES5zqJM7acilSMhSUSKO8FtjBYjnKgJ0Q2tU8_yDbfNklVW89oPaH1ZkQ23qlogxYWLdDXhKqJQMSVYh3XHPeGNR7fuQRfOmnPUYO3itQZPu0-bM"
                />
              </div>
            </section>
          </Link>
        </motion.div>

        <motion.section variants={fadeUp} custom={2} className="space-y-8">
          <div className="flex items-center gap-3">
            <Receipt className="w-5 h-5 text-[#F5A800]" />
            <h2 className="font-serif italic font-black text-3xl text-zinc-900">
              Recent Orders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Mama Put's Heat", date: 'Oct 28', price: '₦6.4k' },
              { name: 'The Charcoal Hub', date: 'Oct 24', price: '₦2.5k' },
            ].map((receipt, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 3}
                className="bg-white p-6 rounded-2xl border border-zinc-100 flex items-center justify-between hover:shadow-sm hover:border-[#F5A800]/20 transition"
              >
                <div>
                  <h4 className="font-medium text-zinc-900">{receipt.name}</h4>
                  <p className="text-sm text-zinc-400">{receipt.date}</p>
                </div>

                <div className="text-right flex items-center gap-4">
                  <p className="font-semibold text-zinc-900">{receipt.price}</p>
                  <ArrowRight className="w-4 h-4 text-zinc-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.footer
          variants={fadeUp}
          custom={6}
          className="text-center pt-16"
        >
          <p className="text-xs text-zinc-300 uppercase tracking-widest">
            BOLE4US • 2026
          </p>
        </motion.footer>
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,900&family=DM+Sans:wght@400;500;700;900&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </UserLayout>
  );
};

export default StudentOrders;
