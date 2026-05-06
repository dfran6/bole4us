import { motion } from 'framer-motion';
import {
  ArrowDownLeft,
  ArrowUpRight,
  ChevronRight,
  CreditCard,
  Filter,
  Flame,
  History,
  Search,
  Wallet as WalletIcon,
} from 'lucide-react';
import UserLayout from '../components/UserLayout';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Wallet = () => {
  return (
    <UserLayout>
      <motion.div
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto space-y-12 pb-24 font-['DM_Sans']"
      >
        {/* Header */}
        <motion.header
          variants={fadeUp}
          className="flex justify-between items-end"
        >
          <div>
            <h2 className="font-serif italic font-black text-5xl text-zinc-900 tracking-tight">
              Liquid <span className="text-[#F5A800] not-italic">Heat</span>
            </h2>
            <p className="text-sm text-zinc-400 mt-2">
              Manage credits & transaction flow
            </p>
          </div>
        </motion.header>

        {/* Balance + Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Balance */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="md:col-span-2 relative bg-zinc-900 rounded-3xl p-8 text-white overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#F5A800]/10 blur-3xl rounded-full" />

            <div className="relative space-y-8">
              <div className="flex items-center gap-3 text-zinc-400 text-xs uppercase tracking-wider">
                <WalletIcon className="w-4 h-4 text-[#F5A800]" />
                Available Credits
              </div>

              <h3 className="text-6xl font-black tracking-tight">₦14,200</h3>

              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <Flame className="w-4 h-4 text-[#F5A800]" />
                Active Session
              </div>

              <div className="flex gap-3 pt-4">
                <button className="px-6 py-3 rounded-xl bg-zinc-800 text-zinc-500 text-xs font-medium cursor-not-allowed">
                  Top Up
                </button>
                <button className="px-6 py-3 rounded-xl border border-white/10 text-zinc-500 text-xs font-medium cursor-not-allowed">
                  Withdraw
                </button>
              </div>
            </div>
          </motion.div>

          {/* Virtual Card */}
          <motion.div
            variants={fadeUp}
            custom={2}
            className="bg-white rounded-3xl p-6 border border-zinc-100 flex flex-col justify-between opacity-80"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-zinc-300" />
              </div>

              <h4 className="text-xl font-semibold text-zinc-400">
                Virtual Card
              </h4>

              <p className="text-sm text-zinc-400">Coming soon</p>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-300 pt-6 border-t">
              Locked
              <ChevronRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>

        {/* Transactions */}
        <motion.section
          variants={fadeUp}
          custom={3}
          className="bg-white rounded-3xl border border-zinc-100 overflow-hidden"
        >
          {/* Top Bar */}
          <div className="p-6 flex flex-col md:flex-row justify-between gap-4 border-b">
            <div className="flex items-center gap-3">
              <History className="w-5 h-5 text-zinc-900" />
              <h3 className="font-semibold text-lg text-zinc-900">
                Transactions
              </h3>
            </div>

            <div className="flex gap-3 w-full md:w-auto">
              <div className="flex items-center gap-2 bg-zinc-50 px-4 py-2 rounded-xl border w-full md:w-64">
                <Search className="w-4 h-4 text-zinc-400" />
                <input
                  placeholder="Search"
                  className="bg-transparent outline-none text-sm w-full"
                />
              </div>

              <button className="p-2 bg-zinc-50 rounded-xl border text-zinc-400 hover:text-zinc-900 transition">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* List */}
          <div className="divide-y">
            {[
              {
                type: 'out',
                label: 'Smoky Delta Grill',
                amt: '₦8,200',
                icon: ArrowUpRight,
                color: 'text-red-500',
                bg: 'bg-red-50',
              },
              {
                type: 'in',
                label: 'Credit Top-up',
                amt: '₦10,000',
                icon: ArrowDownLeft,
                color: 'text-green-500',
                bg: 'bg-green-50',
              },
              {
                type: 'out',
                label: 'Mama T Bole Hub',
                amt: '₦4,500',
                icon: ArrowUpRight,
                color: 'text-red-500',
                bg: 'bg-red-50',
              },
            ].map((tx, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 4}
                className="p-6 flex justify-between items-center hover:bg-zinc-50 transition"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${tx.bg} flex items-center justify-center`}
                  >
                    <tx.icon className={`w-5 h-5 ${tx.color}`} />
                  </div>

                  <div>
                    <p className="font-medium text-zinc-900">{tx.label}</p>
                    <p className="text-xs text-zinc-400">Completed</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <p className={`font-semibold ${tx.color}`}>
                    {tx.type === 'in' ? '+' : '-'}
                    {tx.amt}
                  </p>

                  <ArrowUpRight className="w-4 h-4 text-zinc-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-6 text-center">
            <button className="text-xs text-zinc-400 hover:text-[#F5A800] transition">
              Load more
            </button>
          </div>
        </motion.section>
      </motion.div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,900&family=DM+Sans:wght@400;500;700;900&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </UserLayout>
  );
};

export default Wallet;
