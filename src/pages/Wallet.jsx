import { motion } from 'framer-motion';
import {
  ArrowDownLeft,
  ArrowUpRight,
  ChevronRight,
  CreditCard,
  Filter,
  Flame,
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
  {
    label: 'This month',
    value: '₦22,700',
    desc: 'Total spend',
    icon: TrendingUp,
  },
  {
    label: 'Top-ups',
    value: '₦30,000',
    desc: 'Credits added',
    icon: ArrowDownLeft,
  },
  {
    label: 'Reserved',
    value: '₦4,500',
    desc: 'Active order',
    icon: ShieldCheck,
  },
];

const transactions = [
  {
    type: 'out',
    label: 'Smoky Delta Grill',
    id: 'TXN-8842',
    date: 'Today, 2:45 PM',
    amt: '₦8,200',
    icon: ArrowUpRight,
    color: 'text-red-500',
    bg: 'bg-red-50',
    status: 'Completed',
  },
  {
    type: 'in',
    label: 'Credit Top-up',
    id: 'TXN-8820',
    date: 'Today, 11:12 AM',
    amt: '₦10,000',
    icon: ArrowDownLeft,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    status: 'Completed',
  },
  {
    type: 'out',
    label: 'Mama T Bole Hub',
    id: 'TXN-8794',
    date: 'Yesterday, 6:30 PM',
    amt: '₦4,500',
    icon: ArrowUpRight,
    color: 'text-red-500',
    bg: 'bg-red-50',
    status: 'Completed',
  },
  {
    type: 'out',
    label: 'Campus Fire Spot',
    id: 'TXN-8741',
    date: 'Oct 24, 4:18 PM',
    amt: '₦2,400',
    icon: ArrowUpRight,
    color: 'text-red-500',
    bg: 'bg-red-50',
    status: 'Completed',
  },
];

const Wallet = () => {
  return (
    <UserLayout>
      <motion.div
        initial="hidden"
        animate="show"
        className="wallet-page relative isolate mx-auto w-full max-w-[1440px] overflow-hidden font-['DM_Sans']"
      >
        <div className="space-y-8 sm:space-y-10 xl:space-y-12">
          {/* Header */}
          <motion.header
            variants={fadeUp}
            custom={0}
            className="flex flex-col gap-7 border-b border-zinc-200/70 pb-8 xl:flex-row xl:items-end xl:justify-between"
          >
            <div className="min-w-0">
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 shadow-[0_12px_30px_-22px_rgba(0,0,0,0.25)]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950 text-[#F5A800]">
                  <WalletIcon className="h-3.5 w-3.5" />
                </span>
                <span className="truncate text-[10px] font-black uppercase tracking-[0.2em] text-[#D88B00]">
                  Wallet center
                </span>
              </div>

              <h1
                className="font-serif italic font-black leading-[0.9] tracking-[-0.06em] text-zinc-950"
                style={{ fontSize: 'clamp(46px, 8vw, 86px)' }}
              >
                Liquid{' '}
                <span className="bg-gradient-to-r from-[#F5A800] via-[#FFB800] to-[#FF7A00] bg-clip-text not-italic font-semibold text-transparent">
                  Heat.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-zinc-500 sm:text-[17px]">
                Manage your Bole4us credits, monitor spending, and keep track of
                every reservation payment.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row xl:w-auto">
              <button
                type="button"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[18px] border border-zinc-200 bg-white px-5 text-[11px] font-black uppercase tracking-[0.15em] text-zinc-500 shadow-[0_16px_45px_-38px_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-zinc-300 hover:text-zinc-950"
              >
                <History className="h-4 w-4" />
                Statement
              </button>

              <button
                type="button"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[18px] bg-[#F5A800] px-6 text-[11px] font-black uppercase tracking-[0.15em] text-white shadow-[0_18px_45px_-24px_rgba(245,168,0,0.75)] transition-all duration-300 hover:bg-zinc-950 active:scale-95"
              >
                <Plus className="h-4 w-4" />
                Top up
              </button>
            </div>
          </motion.header>

          {/* Balance + Card Grid */}
          <section className="grid grid-cols-1 gap-5 xl:grid-cols-12 xl:gap-6">
            {/* Balance */}
            <motion.article
              variants={fadeUp}
              custom={1}
              className="relative overflow-hidden rounded-[36px] bg-zinc-950 p-6 text-white shadow-[0_40px_110px_-60px_rgba(0,0,0,0.8)] sm:p-8 xl:col-span-8 xl:p-10"
            >
              <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#F5A800]/20 blur-[100px]" />
              <div className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-[100px]" />

              <div
                className="pointer-events-none absolute inset-0 opacity-[0.055] mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='walletNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23walletNoise)'/%3E%3C/svg%3E")`,
                }}
              />

              <div className="relative z-10 flex min-h-[330px] flex-col justify-between gap-10">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl">
                      <WalletIcon className="h-4 w-4 text-[#F5A800]" />
                      <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/50">
                        Available credits
                      </span>
                    </div>

                    <h2
                      className="font-black leading-none tracking-[-0.075em]"
                      style={{ fontSize: 'clamp(52px, 9vw, 96px)' }}
                    >
                      ₦14,200
                    </h2>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#F5A800]/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#F5A800]">
                        <Flame className="h-3.5 w-3.5 fill-current" />
                        Active session
                      </span>

                      <span className="inline-flex rounded-full bg-emerald-400/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-emerald-200">
                        Wallet verified
                      </span>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-2xl lg:w-[240px]">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/40">
                      Reserved balance
                    </p>
                    <p className="mt-3 text-3xl font-black tracking-[-0.05em]">
                      ₦4,500
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/45">
                      Held for your current active order.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-[22px] bg-[#F5A800] px-6 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-[0_24px_60px_-24px_rgba(245,168,0,0.75)] transition-all duration-300 hover:bg-white hover:text-zinc-950 active:scale-95"
                  >
                    <Plus className="h-4 w-4" />
                    Top up wallet
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-[22px] border border-white/10 bg-white/5 px-6 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-white/45 transition-all duration-300 hover:bg-white/10 hover:text-white"
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
              className="relative overflow-hidden rounded-[36px] border border-white/70 bg-white/85 p-6 shadow-[0_32px_90px_-62px_rgba(0,0,0,0.48)] xl:col-span-4 xl:p-7"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#F5A800]/12 blur-3xl" />

              <div className="relative z-10 flex h-full min-h-[330px] flex-col justify-between">
                <div>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[22px] bg-zinc-950 text-[#F5A800] shadow-[0_20px_50px_-32px_rgba(0,0,0,0.65)]">
                    <CreditCard className="h-6 w-6" />
                  </div>

                  <div className="mb-5 rounded-[30px] bg-gradient-to-br from-zinc-950 to-zinc-800 p-5 text-white shadow-[0_30px_70px_-48px_rgba(0,0,0,0.75)]">
                    <div className="mb-12 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">
                        Bole4us
                      </span>
                      <span className="h-8 w-10 rounded-lg bg-[#F5A800]/80" />
                    </div>

                    <p className="text-sm font-black tracking-[0.24em] text-white/75">
                      - ••• •••• •••• 0420
                    </p>

                    <div className="mt-5 flex items-center justify-between text-[9px] font-black uppercase tracking-[0.16em] text-white/35">
                      <span>Joshua</span>
                      <span>Soon</span>
                    </div>
                  </div>

                  <h3 className="font-serif italic text-3xl font-black tracking-[-0.04em] text-zinc-950">
                    Virtual Card
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    Coming soon for faster checkout, vendor payments, and
                    controlled campus spending.
                  </p>
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-zinc-100 pt-5">
                  <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-zinc-400">
                    Locked
                  </span>

                  <ChevronRight className="h-5 w-5 text-zinc-300" />
                </div>
              </div>
            </motion.article>
          </section>

          {/* Stats */}
          <motion.section
            variants={fadeUp}
            custom={3}
            className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {walletStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <article
                  key={stat.label}
                  className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-[0_24px_70px_-55px_rgba(0,0,0,0.38)] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:p-6"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F5A800]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex items-center justify-between gap-5">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                        {stat.label}
                      </p>
                      <p className="mt-3 text-3xl font-black tracking-[-0.05em] text-zinc-950">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-zinc-400">{stat.desc}</p>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-[#F5A800]/10 text-[#D88B00]">
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
            className="overflow-hidden rounded-[34px] border border-white/70 bg-white/85 shadow-[0_32px_90px_-62px_rgba(0,0,0,0.48)]"
          >
            {/* Top Bar */}
            <div className="border-b border-zinc-100 p-5 sm:p-6">
              <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[18px] bg-[#F5A800]/10 text-[#D88B00]">
                    <History className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-serif italic text-3xl font-black tracking-[-0.04em] text-zinc-950">
                      Transactions
                    </h3>
                    <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                      Recent wallet flow
                    </p>
                  </div>
                </div>

                <div className="flex w-full flex-col gap-3 sm:flex-row xl:w-auto">
                  <div className="flex h-12 min-w-0 items-center gap-2 rounded-[18px] border border-zinc-200 bg-zinc-50 px-4 transition focus-within:border-[#F5A800]/50 focus-within:bg-white focus-within:ring-                    4 focus-within:ring-[#F5A800]/10 sm:w-full xl:w-[320px]">
                    <Search className="h-4 w-4 shrink-0 text-zinc-400" />
                    <input
                      placeholder="Search transactions"
                      className="min-w-0 flex-1 bg-transparent text-sm font-medium text-zinc-700 outline-none placeholder:text-zinc-400"
                    />
                  </div>

                  <button
                    type="button"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-[18px] border border-zinc-200 bg-zinc-50 px-5 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500 transition-all duration-300 hover:border-zinc-300 hover:bg-white hover:text-zinc-950"
                  >
                    <Filter className="h-4 w-4" />
                    Filter
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop/tablet list */}
            <div className="hidden divide-y divide-zinc-100 sm:block">
              {transactions.map((tx, index) => {
                const Icon = tx.icon;
                const isIn = tx.type === 'in';

                return (
                  <motion.div
                    key={tx.id}
                    variants={fadeUp}
                    custom={index + 5}
                    className="group flex items-center justify-between gap-6 p-6 transition-all duration-300 hover:bg-zinc-50/80"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <div
                        className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-[20px] ${tx.bg}`}
                      >
                        <Icon className={`h-5 w-5 ${tx.color}`} />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate font-black tracking-[-0.02em] text-zinc-950">
                          {tx.label}
                        </p>

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

                      <p
                        className={`min-w-[110px] text-right text-lg font-black tracking-[-0.03em] ${tx.color}`}
                      >
                        {isIn ? '+' : '-'}
                        {tx.amt}
                      </p>

                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center rounded-[15px] bg-white text-zinc-300 transition-all duration-300 group-hover:bg-zinc-950 group-hover:text-white"
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
                    className="rounded-[26px] border border-zinc-100 bg-white p-4 shadow-[0_18px_50px_-42px_rgba(0,0,0,0.45)]"
                  >
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div className="flex min-w-0 items-center gap-3">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] ${tx.bg}`}
                        >
                          <Icon className={`h-5 w-5 ${tx.color}`} />
                        </div>

                        <div className="min-w-0">
                          <p className="truncate font-black tracking-[-0.02em] text-zinc-950">
                            {tx.label}
                          </p>
                          <p className="mt-1 truncate text-xs text-zinc-400">
                            {tx.date}
                          </p>
                        </div>
                      </div>

                      <p className={`shrink-0 font-black ${tx.color}`}>
                        {isIn ? '+' : '-'}
                        {tx.amt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-zinc-100 pt-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                        {tx.id}
                      </span>

                      <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-emerald-700">
                        {tx.status}
                      </span>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            {/* Footer */}
            <div className="border-t border-zinc-100 p-5 text-center sm:p-6">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-[18px] border border-zinc-200 bg-white px-6 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500 transition-all duration-300 hover:border-[#F5A800]/40 hover:text-[#D88B00]"
              >
                Load more
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </motion.section>
        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

          .wallet-page {
            font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          }

          .font-serif {
            font-family: 'Playfair Display', serif;
          }

          @media (prefers-reduced-motion: reduce) {
            .wallet-page * {
              animation-duration: 0.001ms !important;
              animation-iteration-count: 1 !important;
              scroll-behavior: auto !important;
              transition-duration: 0.001ms !important;
            }
          }
        `}</style>
      </motion.div>
    </UserLayout>
  );
};

export default Wallet;
