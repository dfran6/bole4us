import Footer from '../components/landing/Footer';
import HowItWorksSection from '../components/landing/HowItWorks';
import Navbar from '../components/Navbar';

const HowItWorks = () => {
  return (
    <div className="how-it-works-page bg-[#FFFDF8] font-['DM_Sans'] text-zinc-950">
      <Navbar />
      <main className="pt-16">
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
