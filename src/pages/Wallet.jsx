import { motion } from 'framer-motion';
import {
  ArrowDownLeft,
  ArrowUpRight,
  ChevronRight,
  CreditCard,
  Filter,
  History,
  Plus,
  Search,
  ShieldCheck,
  TrendingUp,
  Wallet as WalletIcon,
} from 'lucide-react';
import UserLayout from '../components/UserLayout';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const walletStats = [
  { label: 'This month', value: '₦22,700', desc: 'Total spend',   icon: TrendingUp },
  { label: 'Top-ups',    value: '₦30,000', desc: 'Credits added', icon: ArrowDownLeft },
  { label: 'Reserved',   value: '₦4,500',  desc: 'Active order',  icon: ShieldCheck },
];

const transactions = [
  { type: 'out', label: 'Smoky Delta Grill', id: 'TXN-8842', date: 'Today, 2:45 PM',      amt: '₦8,200',  icon: ArrowUpRight,   color: 'text-red-500',     bg: 'bg-red-50',     status: 'Completed' },
  { type: 'in',  label: 'Credit Top-up',     id: 'TXN-8820', date: 'Today, 11:12 AM',     amt: '₦10,000', icon: ArrowDownLeft,  color: 'text-emerald-600', bg: 'bg-emerald-50', status: 'Completed' },
  { type: 'out', label: 'Mama T Bole Hub',   id: 'TXN-8794', date: 'Yesterday, 6:30 PM',  amt: '₦4,500',  icon: ArrowUpRight,   color: 'text-red-500',     bg: 'bg-red-50',     status: 'Completed' },
  { type: 'out', label: 'Campus Fire Spot',  id: 'TXN-8741', date: 'Oct 24, 4:18 PM',     amt: '₦2,400',  icon: ArrowUpRight,   color: 'text-red-500',     bg: 'bg-red-50',     status: 'Completed' },
];

const Wallet = () => {
  return (
    <UserLayout>
      <motion.div
        initial="hidden"
        animate="show"
        className="wallet-page mx-auto w-full max-w-6xl space-y-8 pb-20 xl:px-0"
      >
        {/* Header */}
        <motion.header
          variants={fadeUp}
          custom={0}
          className="flex flex-col gap-6 border-b border-zinc-100 pb-7 xl:flex-row xl:items-end xl:justify-between"
        >
          <div className="min-w-0">
            <h1
              className="font-serif italic font-black leading-[0.9] tracking-[-0.04em] text-zinc-950"
              style={{ fontSize: 'clamp(34px, 7vw, 52px)' }}
            >
              Your <span className="not-italic font-semibold text-[#D88B00]">Wallet</span>
            </h1>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-zinc-500">
              Manage your Bole4us credits, monitor spending, and keep track of every
              reservation payment.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row xl:w-auto">
            <button
              type="button"
              className="press-scale inline-flex h-12 items-center justify-center gap-2 rounded-[14px] border border-zinc-200 bg-white px-5 text-[11px] font-black uppercase tracking-[0.15em] text-zinc-500 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition hover:border-zinc-300 hover:text-zinc-950"
            >
              <History className="h-4 w-4" />
              Statement
            </button>
            <button
              type="button"
              className="press-scale inline-flex h-12 items-center justify-center gap-2 rounded-[14px] bg-[#F5A800] px-6 text-[11px] font-black uppercase tracking-[0.15em] text-white shadow-[0_10px_24px_-10px_rgba(245,168,0,0.55)] transition-colors duration-200 hover:bg-zinc-950"
            >
              <Plus className="h-4 w-4" />
              Top up
            </button>
          </div>
        </motion.header>

        {/* Balance + Card Grid */}
        <section className="grid grid-cols-1 gap-4 xl:grid-cols-12">
          {/* Balance */}
          <motion.article
            variants={fadeUp}
            custom={1}
            className="rounded-[20px] bg-zinc-950 p-6 text-white shadow-[0_1px_1px_rgba(0,0,0,0.1),0_24px_48px_-24px_rgba(0,0,0,0.55)] sm:p-8 xl:col-span-8"
          >
            <div className="flex min-h-[260px] flex-col justify-between gap-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500">
                    Available credits
                  </p>
                  <h2
                    className="mt-3 font-black leading-none tracking-[-0.04em] text-white"
                    style={{ fontSize: 'clamp(40px, 7vw, 68px)' }}
                  >
                    ₦14,200
                  </h2>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F5A800]/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#F5A800]">
                      Active balance
                    </span>
                    <span className="inline-flex rounded-full bg-emerald-400/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-emerald-200">
                      Verified
                    </span>
                  </div>
                </div>

                <div className="rounded-[16px] bg-white/10 p-4 lg:w-[220px]">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500">
                    Reserved balance
                  </p>
                  <p className="mt-2 text-2xl font-black tracking-[-0.03em] text-white">₦4,500</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    Held for your current active order.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  className="press-scale inline-flex items-center justify-center gap-2 rounded-[16px] bg-[#F5A800] px-6 py-3.5 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_-10px_rgba(245,168,0,0.55)] transition-colors duration-200 hover:bg-white hover:text-zinc-950"
                >
                  <Plus className="h-4 w-4" />
                  Top up wallet
                </button>
                <button
                  type="button"
                  className="press-scale inline-flex items-center justify-center gap-2 rounded-[16px] bg-white/10 px-6 py-3.5 text-[11px] font-black uppercase tracking-[0.16em] text-white/70 transition-colors duration-200 hover:bg-white/20 hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  Withdraw
                </button>
              </div>
            </div>
          </motion.article>

          {/* Virtual Card */}
          <motion.article
            variants={fadeUp}
            custom={2}
            className="rounded-[20px] border border-zinc-100 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_20px_40px_-24px_rgba(0,0,0,0.2)] xl:col-span-4"
          >
            <div className="flex h-full min-h-[260px] flex-col justify-between">
              <div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[14px] bg-zinc-950 text-[#F5A800]">
                  <CreditCard className="h-5 w-5" />
                </div>

                <div className="mb-4 rounded-[18px] bg-gradient-to-br from-zinc-950 to-zinc-800 p-4 text-white">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">
                      Bole4us
                    </span>
                    <span className="h-7 w-9 rounded-lg bg-[#F5A800]/80" />
                  </div>
                  <p className="text-sm font-black tracking-[0.2em] text-white/75">
                    •••• •••• •••• 0420
                  </p>
                  <div className="mt-4 flex items-center justify-between text-[9px] font-black uppercase tracking-[0.16em] text-white/40">
                    <span>Joshua</span>
                    <span>Coming soon</span>
                  </div>
                </div>

                <h3 className="font-serif italic text-2xl font-black tracking-[-0.03em] text-zinc-950">
                  Virtual Card
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  Coming soon for faster checkout and controlled campus spending.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4">
                <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-zinc-400">
                  Locked
                </span>
                <ChevronRight className="h-5 w-5 text-zinc-300" />
              </div>
            </div>
          </motion.article>
        </section>

        {/* Stats */}
        <motion.section variants={fadeUp} custom={3} className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {walletStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <article
                key={stat.label}
                className="rounded-[20px] border border-zinc-100 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-3xl font-black tracking-[-0.03em] text-zinc-950">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-zinc-400">{stat.desc}</p>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#F5A800]/10 text-[#D88B00]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
              </article>
            );
          })}
        </motion.section>

        {/* Transactions */}
        <motion.section
          variants={fadeUp}
          custom={4}
          className="overflow-hidden rounded-[20px] border border-zinc-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03),0_28px_54px_-32px_rgba(0,0,0,0.25)]"
        >
          {/* Top Bar */}
          <div className="border-b border-zinc-100 p-5 sm:p-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#F5A800]/10 text-[#D88B00]">
                  <History className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif italic text-2xl font-bold tracking-[-0.03em] text-zinc-950">
                    Transactions
                  </h3>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                    Recent wallet activity
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 sm:flex-row xl:w-auto">
                <div className="flex h-11 min-w-0 items-center gap-2 rounded-[14px] border border-zinc-200 bg-zinc-50 px-4 transition focus-within:border-[#F5A800]/40 focus-within:bg-white focus-within:ring-4 focus-within:ring-[#F5A800]/10 sm:w-full xl:w-[300px]">
                  <Search className="h-4 w-4 shrink-0 text-zinc-400" />
                  <input
                    placeholder="Search transactions"
                    className="min-w-0 flex-1 bg-transparent text-sm font-medium text-zinc-700 outline-none placeholder:text-zinc-400"
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-[14px] border border-zinc-200 bg-white px-5 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500 transition hover:border-zinc-300 hover:text-zinc-950"
                >
                  <Filter className="h-4 w-4" />
                  Filter
                </button>
              </div>
            </div>
          </div>

          {/* Desktop/tablet list */}
          <div className="hidden divide-y divide-zinc-50 sm:block">
            {transactions.map((tx, index) => {
              const Icon = tx.icon;
              const isIn = tx.type === 'in';
              return (
                <motion.div
                  key={tx.id}
                  variants={fadeUp}
                  custom={index + 5}
                  className="group flex items-center justify-between gap-6 p-5 transition-colors duration-200 hover:bg-zinc-50/60"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] ${tx.bg}`}>
                      <Icon className={`h-5 w-5 ${tx.color}`} />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-black tracking-[-0.02em] text-zinc-950">{tx.label}</p>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400">
                        <span>{tx.id}</span>
                        <span className="h-1 w-1 rounded-full bg-zinc-300" />
                        <span>{tx.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-5">
                    <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-emerald-700">
                      {tx.status}
                    </span>
                    <p className={`min-w-[100px] text-right text-lg font-black tracking-[-0.03em] ${tx.color}`}>
                      {isIn ? '+' : '-'}{tx.amt}
                    </p>
                    <button
                      type="button"
                      className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-zinc-100 text-zinc-400 transition-colors duration-200 group-hover:bg-zinc-950 group-hover:text-white"
                      aria-label={`View ${tx.id}`}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile cards */}
          <div className="space-y-3 p-4 sm:hidden">
            {transactions.map((tx, index) => {
              const Icon = tx.icon;
              const isIn = tx.type === 'in';
              return (
                <motion.article
                  key={tx.id}
                  variants={fadeUp}
                  custom={index + 5}
                  className="rounded-[16px] border border-zinc-100 bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_12px_28px_-20px_rgba(0,0,0,0.2)]"
                >
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] ${tx.bg}`}>
                        <Icon className={`h-5 w-5 ${tx.color}`} />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-black tracking-[-0.02em] text-zinc-950">{tx.label}</p>
                        <p className="mt-1 truncate text-xs text-zinc-400">{tx.date}</p>
                      </div>
                    </div>
                    <p className={`shrink-0 font-black ${tx.color}`}>
                      {isIn ? '+' : '-'}{tx.amt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-zinc-100 pt-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">{tx.id}</span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-emerald-700">
                      {tx.status}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Footer */}
          <div className="border-t border-zinc-100 p-5 text-center">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-zinc-200 bg-white px-6 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500 transition hover:border-[#F5A800]/40 hover:text-[#D88B00]"
            >
              Load more
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.section>
      </motion.div>

      <style>{`
        .wallet-page .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </UserLayout>
  );
};

export default Wallet;
