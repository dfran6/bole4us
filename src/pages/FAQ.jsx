import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronDown,
  CreditCard,
  HelpCircle,
  MessageCircle,
  Search,
  ShieldCheck,
  Truck,
  Zap,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import UserLayout from '../components/UserLayout';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const faqs = [
  {
    category: 'Orders',
    question: 'How do I place an order?',
    answer:
      'Open Explore, choose your preferred vendor, select your items, and reserve your order. Once confirmed, you can track the order from the Orders page.',
  },
  {
    category: 'Orders',
    question: "What is 'Heat Level'?",
    answer:
      'Heat Level represents the spice intensity and freshness status of a vendor or item. It helps you quickly know what is hot, available, and worth reserving.',
  },
  {
    category: 'Vendors',
    question: 'Can I become a vendor?',
    answer:
      'Yes. You can register as a vendor from the onboarding page. After submitting your business details, your profile will be reviewed before activation.',
  },
  {
    category: 'Delivery',
    question: 'Where do you deliver?',
    answer:
      'Bole4us focuses on university hubs and surrounding student areas. Availability depends on active vendors and agents near your campus or pickup zone.',
  },
  {
    category: 'Payments',
    question: 'Is there a delivery fee?',
    answer:
      'Delivery or service fees depend on distance, vendor location, and demand. You will always see fees before confirming your reservation.',
  },
  {
    category: 'Wallet',
    question: 'How do wallet credits work?',
    answer:
      'Wallet credits allow you to pay faster during checkout. You can top up your wallet, reserve orders, and track every transaction from the Wallet page.',
  },
];

const supportCards = [
  {
    title: 'Secure payments',
    desc: 'Wallet credits and order payments are tracked.',
    icon: ShieldCheck,
  },
  {
    title: 'Delivery support',
    desc: 'Track pickup and movement updates.',
    icon: Truck,
  },
  {
    title: 'Wallet help',
    desc: 'Understand top-ups and transactions.',
    icon: CreditCard,
  },
  {
    title: 'Fast signals',
    desc: 'Get help with active orders quickly.',
    icon: Zap,
  },
];

const FAQItem = ({ question, answer, category, i }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      variants={fadeUp}
      custom={i}
      className="group overflow-hidden rounded-[28px] border border-zinc-100 bg-white transition-all duration-300 hover:border-[#F5A800]/30 hover:shadow-[0_24px_70px_-58px_rgba(0,0,0,0.45)]"
    >
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-start justify-between gap-5 p-5 text-left sm:p-6"
        aria-expanded={isOpen}
      >
        <div className="min-w-0">
          <span className="mb-3 inline-flex rounded-full bg-[#F5A800]/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-[#D88B00]">
            {category}
          </span>

          <h3
            className={`text-lg font-black leading-snug tracking-[-0.03em] transition-colors sm:text-xl ${
              isOpen
                ? 'text-[#D88B00]'
                : 'text-zinc-950 group-hover:text-[#D88B00]'
            }`}
          >
            {question}
          </h3>
        </div>

        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] transition-all duration-300 ${
            isOpen
              ? 'rotate-180 bg-[#F5A800] text-white'
              : 'bg-zinc-100 text-zinc-400 group-hover:bg-zinc-950 group-hover:text-white'
          }`}
        >
          <ChevronDown className="h-5 w-5" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 sm:px-6">
              <div className="border-t border-zinc-100 pt-5">
                <p className="max-w-2xl text-[15px] leading-relaxed text-zinc-500">
                  {answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return faqs;

    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <UserLayout>
      <motion.div
        initial="hidden"
        animate="show"
        className="faq-page relative isolate mx-auto w-full max-w-[1440px] overflow-hidden font-['DM_Sans']"
      >
        <div className="space-y-8 sm:space-y-10 xl:space-y-12">
          {/* Header */}
          <motion.header
            variants={fadeUp}
            custom={0}
            className="relative overflow-hidden rounded-[36px] border border-white/70 bg-white/85 p-6 shadow-[0_32px_90px_-62px_rgba(0,0,0,0.45)] sm:p-8 xl:p-10"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F5A800]/15 blur-[90px]" />
            <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-zinc-950/[0.04] blur-[90px]" />

            <div className="relative z-10 grid grid-cols-1 gap-8 xl:grid-cols-[1fr_0.8fr] xl:items-end">
              <div className="min-w-0">
                <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 shadow-[0_12px_30px_-22px_rgba(0,0,0,0.25)]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950 text-[#F5A800]">
                    <HelpCircle className="h-3.5 w-3.5" />
                  </span>
                  <span className="truncate text-[10px] font-black uppercase tracking-[0.2em] text-[#D88B00]">
                    Help center
                  </span>
                </div>

                <h1
                  className="font-serif italic font-black leading-[0.9] tracking-[-0.06em] text-zinc-950"
                  style={{ fontSize: 'clamp(46px, 8vw, 86px)' }}
                >
                  Frequently
                  <br />
                  <span className="bg-gradient-to-r from-[#F5A800] via-[#FFB800] to-[#FF7A00] bg-clip-text not-italic font-semibold text-transparent">
                    Asked.
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-zinc-500 sm:text-[17px]">
                  Find answers about ordering, delivery, wallet credits, vendor
                  onboarding, and account support.
                </p>
              </div>

              <div className="min-w-0">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="Search questions, wallet, orders..."
                    className="h-16 w-full rounded-[24px] border border-zinc-200 bg-white pl-14 pr-5 text-sm font-bold text-zinc-800 outline-none transition-all placeholder:text-zinc-300 focus:border-[#F5A800]/50 focus:ring-4 focus:ring-[#F5A800]/10"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                  />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {['Orders', 'Wallet', 'Delivery', 'Vendors'].map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setSearchQuery(tag)}
                      className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-zinc-500 transition-all duration-300 hover:border-[#F5A800]/40 hover:text-[#D88B00]"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.header>

          {/* Main Content */}
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-12 xl:gap-8">
            {/* Left Panel */}
            <motion.aside
              variants={fadeUp}
              custom={1}
              className="space-y-5 xl:col-span-4"
            >
              <div className="relative overflow-hidden rounded-[34px] bg-zinc-950 p-6 text-white shadow-[0_40px_110px_-65px_rgba(0,0,0,0.8)] sm:p-7">
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F5A800]/20 blur-[90px]" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[22px] bg-[#F5A800] text-white shadow-[0_24px_60px_-28px_rgba(245,168,0,0.8)]">
                    <MessageCircle className="h-6 w-6" />
                  </div>

                  <h2 className="font-serif italic text-4xl font-black tracking-[-0.05em]">
                    Need live help?
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-white/55">
                    Reach support for active orders, wallet issues, delivery
                    updates, or account assistance.
                  </p>

                  <button
                    type="button"
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-[22px] bg-[#F5A800] px-6 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-[0_24px_60px_-24px_rgba(245,168,0,0.75)] transition-all duration-300 hover:bg-white hover:text-zinc-950 active:scale-95"
                  >
                    Start chat
                    <MessageCircle className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-1">
                {supportCards.map((card, index) => {
                  const Icon = card.icon;

                  return (
                    <motion.article
                      key={card.title}
                      variants={fadeUp}
                      custom={index + 2}
                      whileHover={{ y: -3 }}
                      className="rounded-[28px] border border-white/70 bg-white/85 p-5 shadow-[0_24px_70px_-58px_rgba(0,0,0,0.38)]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-[#F5A800]/10 text-[#D88B00]">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <h3 className="font-black tracking-[-0.02em] text-zinc-950">
                            {card.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                            {card.desc}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </motion.aside>

            {/* FAQ List */}
            <motion.section
              variants={fadeUp}
              custom={2}
              className="xl:col-span-8"
            >
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="font-serif italic text-3xl font-black tracking-[-0.04em] text-zinc-950">
                    Popular Questions
                  </h2>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                    {filteredFaqs.length} answer
                    {filteredFaqs.length === 1 ? '' : 's'} found
                  </p>
                </div>

                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="inline-flex w-full items-center justify-center rounded-[18px] border border-zinc-200 bg-white px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500 transition-all duration-300 hover:border-[#F5A800]/40 hover:text-[#D88B00] sm:w-auto"
                  >
                    Clear search
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => (
                    <FAQItem key={faq.question} {...faq} i={index + 3} />
                  ))
                ) : (
                  <motion.div
                    variants={fadeUp}
                    custom={3}
                    className="rounded-[32px] border border-white/70 bg-white/85 p-10 text-center shadow-[0_24px_70px_-58px_rgba(0,0,0,0.38)]"
                  >
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-[24px] bg-zinc-100 text-zinc-400">
                      <Search className="h-7 w-7" />
                    </div>

                    <h3 className="font-serif italic text-3xl font-black tracking-[-0.04em] text-zinc-950">
                      No results found
                    </h3>

                    <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-500">
                      Try searching for wallet, delivery, orders, vendors, or
                      payment-related questions.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="mt-6 inline-flex items-center justify-center rounded-[18px] bg-[#F5A800] px-6 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-zinc-950"
                    >
                      Reset search
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.section>
          </div>

          {/* Footer CTA */}
          <motion.section
            variants={fadeUp}
            custom={8}
            className="relative overflow-hidden rounded-[36px] border border-white/70 bg-white/85 p-6 text-center shadow-[0_32px_90px_-62px_rgba(0,0,0,0.45)] sm:p-8 xl:p-10"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F5A800]/12 blur-[90px]" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-[22px] bg-zinc-950 text-[#F5A800]">
                <MessageCircle className="h-6 w-6" />
              </div>

              <h2 className="font-serif italic text-4xl font-black tracking-[-0.05em] text-zinc-950">
                Still need help?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base">
                If your question is not listed here, contact support and we will
                help you resolve it as quickly as possible.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-[20px] bg-zinc-950 px-6 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#F5A800] active:scale-95"
                >
                  Documentation
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-[20px] border border-zinc-200 bg-white px-6 py-4 text-[11px] font-black uppercase tracking-[0.16em] text-zinc-600 transition-all duration-300 hover:border-[#F5A800]/40 hover:text-[#D88B00]"
                >
                  Contact support
                </button>
              </div>
            </div>
          </motion.section>
        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

          .faq-page {
            font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          }

          .font-serif {
            font-family: 'Playfair Display', serif;
          }

          @media (prefers-reduced-motion: reduce) {
            .faq-page * {
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

export default FAQ;
