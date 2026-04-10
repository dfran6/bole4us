import React, { useState } from 'react';
import UserLayout from '../components/UserLayout';
import { ChevronDown, ChevronUp, Search, MessageCircle, Zap, ShieldCheck, Truck, CreditCard } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-50 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-8 text-left group"
      >
        <span className={`text-xl font-headline font-black uppercase tracking-tight transition-colors ${isOpen ? 'text-primary' : 'text-zinc-900 group-hover:text-primary'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-primary text-white' : 'bg-zinc-50 text-zinc-400'}`}>
            {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-8' : 'max-h-0'}`}>
        <p className="text-zinc-500 font-medium leading-relaxed max-w-2xl">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Choose your favorite heat level, select a vendor from the Explore page, add items to your cart, and proceed to checkout. We deliver fast to ensure your bole stays hot!"
    },
    {
      question: "What is 'Heat Level'?",
      answer: "Heat Level refers to our specialized spice and grilling intensity. You can choose from 'Mild Smoke' to 'Urban Inferno' depending on your preference."
    },
    {
      question: "Can I become a vendor?",
      answer: "Yes! Head over to the Partner Landing page or simply select 'Join as Vendor' on the Registration page to start your journey with bole4us."
    },
    {
      question: "Where do you deliver?",
      answer: "We currently operate in major university hubs and surrounding urban areas. Enter your location on the Home page to see available vendors near you."
    },
    {
      question: "Is there a delivery fee?",
      answer: "Delivery fees are calculated based on distance. However, we often have promotions like 'Zero Delivery Fee for Freshmen'—keep an eye on the Home page!"
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <UserLayout>
      <div className="max-w-5xl mx-auto py-12 px-6 space-y-24">
        <header className="text-center space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-zinc-900 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl">
            <Zap className="w-3 h-3" fill="currentColor" />
            Operations Manual
          </div>
          <h1 className="font-headline font-black text-6xl md:text-8xl text-zinc-900 tracking-tighter uppercase leading-none">
            Frequently <br />
            <span className="text-primary italic">Asked</span>
          </h1>
          
          <div className="mt-12 relative max-w-2xl mx-auto group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-primary transition-colors w-6 h-6" />
            <input 
              type="text" 
              placeholder="Search for heat protocols..." 
              className="w-full pl-16 pr-8 py-6 bg-white border border-zinc-100 rounded-[2rem] shadow-sm focus:ring-8 focus:ring-primary/5 focus:border-primary/20 outline-none transition-all font-black text-[10px] uppercase tracking-widest placeholder:text-zinc-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-1 space-y-8">
                <div className="p-8 bg-zinc-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full group-hover:scale-110 transition-transform"></div>
                    <MessageCircle className="w-10 h-10 text-primary mb-6" fill="currentColor" />
                    <h3 className="text-2xl font-headline font-black uppercase tracking-tight mb-4">Live Support</h3>
                    <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-8">Our agents are monitoring the heat grid 24/7. Average response: 2m.</p>
                    <button className="w-full py-4 bg-white text-zinc-900 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-primary hover:text-white transition-all">Start Pulse Chat</button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {[
                        { icon: ShieldCheck, label: 'Safety' },
                        { icon: Truck, label: 'Logistics' },
                        { icon: CreditCard, label: 'Payments' },
                        { icon: Zap, label: 'Heat Index' }
                    ].map((item, i) => (
                        <div key={i} className="bg-white border border-zinc-50 p-6 rounded-[2rem] flex flex-col items-center justify-center gap-3 hover:border-primary/20 transition-all cursor-pointer shadow-sm group">
                            <item.icon className="w-6 h-6 text-zinc-300 group-hover:text-primary transition-colors" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-900 transition-colors">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:col-span-2 bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-zinc-50">
              {filteredFaqs.length > 0 ? (
                <div className="divide-y divide-zinc-50">
                  {filteredFaqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-zinc-300 font-black uppercase tracking-widest text-xs">No signals found for "{searchQuery}"</p>
                </div>
              )}
            </div>
        </section>

        <div className="bg-zinc-50/50 p-12 rounded-[4rem] text-center max-w-3xl mx-auto border border-zinc-100">
            <h4 className="text-zinc-900 font-headline font-black text-2xl uppercase tracking-tighter mb-4">Join the talent pool</h4>
            <p className="text-zinc-500 text-sm font-medium mb-8">Can't find what you're looking for? Explore our documentation or reach out.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-zinc-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl active:scale-95 transition-all">Mission Deck</button>
                <button className="px-10 py-4 bg-white border border-zinc-100 text-zinc-900 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-sm hover:bg-zinc-50 active:scale-95 transition-all">Signal Relay</button>
            </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default FAQ;
