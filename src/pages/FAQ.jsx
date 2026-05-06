import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronDown,
  ChevronUp,
  CreditCard,
  MessageCircle,
  Search,
  ShieldCheck,
  Truck,
  Zap,
} from 'lucide-react';
import { useState } from 'react';
import UserLayout from '../components/UserLayout';

const FAQItem = ({ question, answer, i }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.05 }}
      className="border-b border-zinc-100 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left group"
      >
        <span
          className={`text-lg md:text-xl font-semibold tracking-tight transition-colors ${isOpen ? 'text-[#F5A800]' : 'text-zinc-900 group-hover:text-[#F5A800]'}`}
        >
          {question}
        </span>

        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center transition ${isOpen ? 'bg-[#F5A800] text-zinc-900' : 'bg-zinc-100 text-zinc-400 group-hover:bg-zinc-200'}`}
        >
          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
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
            <p className="pb-6 text-zinc-500 leading-relaxed max-w-xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: 'How do I place an order?',
      answer:
        'Choose your preferred heat level, select a vendor, add items, and checkout. Fast delivery ensures freshness.',
    },
    {
      question: "What is 'Heat Level'?",
      answer:
        'Heat Level defines spice intensity—from Mild Smoke to Urban Inferno.',
    },
    {
      question: 'Can I become a vendor?',
      answer:
        'Yes. Visit the Partner page or register as a vendor to get started.',
    },
    {
      question: 'Where do you deliver?',
      answer: 'We operate in university hubs and surrounding urban areas.',
    },
    {
      question: 'Is there a delivery fee?',
      answer: 'Fees depend on distance, with frequent promotions available.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <UserLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-5xl mx-auto py-12 px-6 space-y-20 font-['DM_Sans']"
      >
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-900 text-[#F5A800] rounded-full text-xs font-medium uppercase tracking-wider">
            <Zap className="w-3 h-3" />
            Help Center
          </div>

          <h1 className="font-serif italic font-black text-5xl md:text-6xl text-zinc-900 tracking-tight">
            Frequently <br />
            <span className="text-[#F5A800] not-italic">Asked</span>
          </h1>

          <div className="relative max-w-xl mx-auto mt-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full pl-12 pr-4 py-4 bg-white border border-zinc-200 rounded-xl focus:ring-4 focus:ring-[#F5A800]/10 focus:border-[#F5A800]/30 outline-none text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.header>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Panel */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="p-6 bg-zinc-900 rounded-2xl text-white">
              <MessageCircle className="w-8 h-8 text-[#F5A800] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Live Support</h3>
              <p className="text-sm text-zinc-400 mb-4">
                Fast response support available.
              </p>
              <button className="w-full py-3 bg-white text-zinc-900 rounded-xl text-sm font-medium hover:bg-[#F5A800] hover:text-zinc-900 transition">
                Start Chat
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[ShieldCheck, Truck, CreditCard, Zap].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  className="bg-white border border-zinc-100 p-4 rounded-xl flex flex-col items-center gap-2 cursor-pointer"
                >
                  <Icon className="w-5 h-5 text-zinc-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ List */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white rounded-2xl p-6 border border-zinc-100"
          >
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, i) => <FAQItem key={i} {...faq} i={i} />)
            ) : (
              <div className="text-center py-16 text-sm text-zinc-400">
                No results found
              </div>
            )}
          </motion.div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-50 p-10 rounded-2xl text-center border"
        >
          <h4 className="text-xl font-semibold text-zinc-900 mb-2">
            Still need help?
          </h4>
          <p className="text-sm text-zinc-400 mb-6">
            Reach out or explore more resources.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 py-3 bg-zinc-900 text-white rounded-xl text-sm">
              Documentation
            </button>
            <button className="px-6 py-3 bg-white border rounded-xl text-sm">
              Contact
            </button>
          </div>
        </motion.div>
      </motion.div>
    </UserLayout>
  );
};

export default FAQ;
