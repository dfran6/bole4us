import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/landing/Footer';
import Navbar from '../components/Navbar';

const sections = [
  { id: 'acceptance', number: '1', title: 'Acceptance of these terms' },
  { id: 'eligibility', number: '2', title: 'Eligibility' },
  { id: 'accounts-roles', number: '3', title: 'Account roles and responsibilities' },
  { id: 'orders-payment', number: '4', title: 'Orders, reservations and payment' },
  { id: 'cancellations-refunds', number: '5', title: 'Cancellations, no-shows and refunds' },
  { id: 'vendor-terms', number: '6', title: 'Vendor-specific terms' },
  { id: 'agent-terms', number: '7', title: 'Agent-specific terms' },
  { id: 'prohibited-conduct', number: '8', title: 'Prohibited conduct' },
  { id: 'platform-role', number: '9', title: 'Platform role and liability' },
  { id: 'suspension', number: '10', title: 'Suspension and termination' },
  { id: 'intellectual-property', number: '11', title: 'Intellectual property' },
  { id: 'disputes-law', number: '12', title: 'Disputes and governing law' },
  { id: 'changes', number: '13', title: 'Changes to these terms' },
  { id: 'contact', number: '14', title: 'Contact us' },
];

const TermsOfService = () => {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-112px 0px -70% 0px', threshold: 0.01 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => (event) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="legal-page min-h-screen bg-[#FFFDF8] text-zinc-950">
      <Navbar />

      <main className="relative isolate">
        <div
          className="pointer-events-none absolute inset-0 -z-20"
          style={{
            background: `
              radial-gradient(circle at 12% 10%, rgba(245, 168, 0, 0.1), transparent 32%),
              radial-gradient(circle at 92% 6%, rgba(255, 204, 51, 0.12), transparent 30%),
              linear-gradient(180deg, #FFFDF8 0%, #FFFCF5 55%, #FFFFFF 100%)
            `,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='legalNoise2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23legalNoise2)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="mx-auto max-w-[1280px] px-5 pt-28 pb-24 sm:px-8 sm:pt-32 lg:px-10">
          <header className="max-w-[720px]">
            <h1
              className="font-serif italic font-black leading-[0.95] tracking-[-0.045em] text-zinc-950"
              style={{ fontSize: 'clamp(40px, 5.5vw, 64px)' }}
            >
              Terms of <span className="not-italic text-[#F5A800]">Service</span>
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-zinc-500">
              These terms govern your use of Bole4us as a student, a vendor, an agent,
              or an administrator. Please read them before you place an order, list a
              stall, or claim a mission.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-zinc-200 pt-5 text-[13px] font-bold text-zinc-400">
              <span>Effective date: 1 November 2026</span>
              <span className="text-zinc-300">•</span>
              <span>Applies to: bole4us.com and the Bole4us application</span>
            </div>
          </header>

          {/* Mobile jump menu */}
          <details className="mt-10 rounded-[20px] border border-zinc-200 bg-white p-4 lg:hidden">
            <summary className="cursor-pointer text-[12px] font-black uppercase tracking-[0.14em] text-zinc-500">
              Jump to a section
            </summary>
            <nav className="mt-4 flex flex-col gap-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={scrollToSection(section.id)}
                  className="rounded-[12px] px-3 py-2.5 text-sm font-bold text-zinc-600 hover:bg-zinc-100"
                >
                  {section.number}. {section.title}
                </a>
              ))}
            </nav>
          </details>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
            {/* Desktop TOC */}
            <aside className="hidden lg:block">
              <nav className="sticky top-28 space-y-0.5 border-l border-zinc-200 pl-5">
                {sections.map((section) => {
                  const isActive = activeId === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={scrollToSection(section.id)}
                      className={`-ml-5 block border-l-2 py-2 pl-5 text-[13px] font-bold transition-colors ${
                        isActive
                          ? 'border-[#F5A800] text-zinc-950'
                          : 'border-transparent text-zinc-400 hover:text-zinc-700'
                      }`}
                    >
                      {section.number}. {section.title}
                    </a>
                  );
                })}
              </nav>
            </aside>

            {/* Document body */}
            <article className="max-w-[720px] space-y-14 text-[15.5px] leading-[1.75] text-zinc-600">
              <section id="acceptance" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  1. Acceptance of these terms
                </h2>
                <p>
                  By creating a Bole4us account or otherwise using the platform, you agree
                  to be bound by these Terms of Service and by our{' '}
                  <Link to="/privacy" className="font-bold text-[#D88B00] underline-offset-2 hover:underline">
                    Privacy Policy
                  </Link>
                  . If you do not agree to these terms, you should not register for or use
                  Bole4us. These terms apply equally to students, vendors, agents, and
                  administrators, except where a section is expressly limited to one role.
                </p>
              </section>

              <section id="eligibility" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  2. Eligibility
                </h2>
                <p>
                  You must be at least 18 years old, or otherwise capable of forming a
                  binding contract under Nigerian law, to use Bole4us. By registering, you
                  represent that the information you provide is accurate and that you
                  meet this requirement. Vendors and agents additionally represent that
                  they hold any permit, licence, or registration that applicable Nigerian
                  law requires for the activity they carry out through the platform.
                </p>
              </section>

              <section id="accounts-roles" className="scroll-mt-28 space-y-6">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  3. Account roles and responsibilities
                </h2>

                <div className="space-y-3">
                  <h3 className="text-[16px] font-black text-zinc-950">3.1 Students</h3>
                  <p>
                    As a student, you agree to provide an accurate pickup or delivery
                    address and reachable contact details for every order, to honour
                    reservations you place, and to treat vendors and agents with
                    professional courtesy. You are responsible for reviewing an order
                    before confirming it, including the items, price, and delivery mode.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[16px] font-black text-zinc-950">3.2 Vendors</h3>
                  <p>
                    As a vendor, you agree to keep the stock status, pricing, and category
                    shown on your storefront accurate and up to date, to prepare and
                    honour orders placed in good faith, and to update an order's status
                    promptly so students and agents know where it stands. You are solely
                    responsible for the quality, safety, and legality of the food you
                    prepare and sell.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[16px] font-black text-zinc-950">3.3 Agents</h3>
                  <p>
                    As an agent, you agree to complete any mission you claim in good
                    faith and within a reasonable time, to handle food and customer
                    property with care during pickup and delivery, and to keep the
                    identity information you submitted for verification current and
                    accurate.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[16px] font-black text-zinc-950">3.4 Administrators</h3>
                  <p>
                    Administrator accounts are issued only to authorised Bole4us personnel
                    for platform oversight, including resolving disputes, moderating
                    accounts, and maintaining the integrity of listings and transactions.
                  </p>
                </div>
              </section>

              <section id="orders-payment" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  4. Orders, reservations and payment
                </h2>
                <p>
                  A reservation becomes a binding order once you confirm it at checkout
                  and the vendor accepts it. Bole4us is currently settled by direct bank
                  transfer: after confirming an order, you are shown the exact amount and
                  account details to transfer, and you confirm payment within the app.
                  Bole4us does not store your bank card or account credentials.
                </p>
                <p>
                  You may choose to collect an order yourself or have it delivered by an
                  agent. If you choose agent delivery, the order is not complete until the
                  agent confirms handover, and you agree to be reasonably available at the
                  address you provided.
                </p>
              </section>

              <section id="cancellations-refunds" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  5. Cancellations, no-shows and refunds
                </h2>
                <p>
                  You may cancel an order free of charge at any point before the vendor
                  marks it as in preparation. Once a vendor has marked an order as in
                  preparation or later, the order is non-refundable, because the vendor
                  has already committed ingredients and time to it, except where the
                  vendor fails to deliver the order as described or the order is cancelled
                  by the vendor or an agent through no fault of yours.
                </p>
                <p>
                  If you do not collect a self-pickup order, or are not reasonably
                  reachable for an agent-delivered order, within a reasonable window of
                  the agreed time, the order may be treated as a no-show and is not
                  eligible for a refund. If you believe an order was mishandled, you can
                  open a dispute through{' '}
                  <Link to="/support" className="font-bold text-[#D88B00] underline-offset-2 hover:underline">
                    Support
                  </Link>{' '}
                  and we will review the order history between the parties involved.
                </p>
              </section>

              <section id="vendor-terms" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  6. Vendor-specific terms
                </h2>
                <p>
                  You are responsible for marking an item out of stock as soon as it runs
                  out, and for pricing listed on your storefront matching what you
                  actually charge. Payouts for completed orders are processed through your
                  vendor dashboard on the schedule described there. Where a mission you
                  posted was fulfilled by an agent, any fee owed to that agent is tracked
                  as a debt against your account and must be settled through the payout
                  flow before further payouts are released, in the amount and timing shown
                  in your dashboard.
                </p>
              </section>

              <section id="agent-terms" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  7. Agent-specific terms
                </h2>
                <p>
                  Agents are independent service providers who use Bole4us to find and
                  fulfil pickup and delivery missions; you are not an employee, partner,
                  or agent (in the legal sense) of Bole4us, and nothing in these terms
                  creates an employment relationship. Missions are claimed on a
                  first-come basis within your registered zone, and you are responsible
                  for your own means of transport, its safety and legality, and for
                  completing a claimed mission or releasing it promptly if you are unable
                  to. Earnings from completed missions can be withdrawn through your
                  agent dashboard.
                </p>
              </section>

              <section id="prohibited-conduct" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  8. Prohibited conduct
                </h2>
                <p>You agree not to, and not to attempt to:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Provide false identity, business, stock, or location information.</li>
                  <li>Circumvent, duplicate, or falsify a payment or payout.</li>
                  <li>Harass, threaten, or discriminate against a vendor, agent, student, or administrator.</li>
                  <li>Interfere with, probe, or attempt to bypass the platform's security.</li>
                  <li>Use the platform for any purpose that is unlawful under Nigerian law.</li>
                </ul>
                <p>
                  A violation of this section may result in the suspension or termination
                  described in section 10.
                </p>
              </section>

              <section id="platform-role" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  9. Platform role and liability
                </h2>
                <p>
                  Bole4us operates the marketplace that connects students, vendors, and
                  agents; we are not the seller of any food item and not the carrier of
                  any delivery. Responsibility for the quality, preparation, and safety of
                  food rests with the vendor that prepared it. Responsibility for the
                  careful and timely handling of an order in transit rests with the agent
                  who accepted it. To the fullest extent permitted by Nigerian law,
                  Bole4us's liability for any claim arising from use of the platform is
                  limited to the value of the order giving rise to the claim, except for
                  liability that cannot be limited by law, such as liability for our own
                  fraud or gross negligence.
                </p>
              </section>

              <section id="suspension" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  10. Suspension and termination
                </h2>
                <p>
                  We may suspend or terminate an account that violates these terms,
                  provides false information, or poses a risk to other users, and will
                  give notice where the circumstances reasonably allow it. You may close
                  your account at any time by contacting Support; outstanding orders,
                  missions, or payouts must be resolved first.
                </p>
              </section>

              <section id="intellectual-property" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  11. Intellectual property
                </h2>
                <p>
                  The Bole4us name, logo, and the platform's design and software are the
                  property of Bole4us and may not be copied, reproduced, or used without
                  our prior written consent. You retain ownership of the content you
                  submit, such as your storefront description, and grant us a licence to
                  display it on the platform solely to operate the service.
                </p>
              </section>

              <section id="disputes-law" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  12. Disputes and governing law
                </h2>
                <p>
                  These terms are governed by the laws of the Federal Republic of Nigeria.
                  We encourage you to raise any dispute with us through{' '}
                  <Link to="/support" className="font-bold text-[#D88B00] underline-offset-2 hover:underline">
                    Support
                  </Link>{' '}
                  first, so we can attempt to resolve it directly. Any dispute that cannot
                  be resolved this way is subject to the exclusive jurisdiction of the
                  courts of Nigeria, without prejudice to either party's right to seek
                  arbitration under Nigerian law where both parties agree to it.
                </p>
              </section>

              <section id="changes" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  13. Changes to these terms
                </h2>
                <p>
                  We may update these terms as Bole4us evolves. If we make a material
                  change, we will update the effective date above and, where the change
                  significantly affects your rights or obligations, notify you through the
                  in-app notification centre or by email before it takes effect. Continued
                  use of Bole4us after a change takes effect means you accept the updated
                  terms.
                </p>
              </section>

              <section id="contact" className="scroll-mt-28 space-y-4 pb-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  14. Contact us
                </h2>
                <p>
                  Questions about these terms can be sent to{' '}
                  <a href="mailto:hello@bole4us.com" className="font-bold text-[#D88B00] underline-offset-2 hover:underline">
                    hello@bole4us.com
                  </a>
                  , or raised directly through the{' '}
                  <Link to="/support" className="font-bold text-[#D88B00] underline-offset-2 hover:underline">
                    Support
                  </Link>{' '}
                  page if you already have an account.
                </p>
              </section>
            </article>
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

        .legal-page {
          font-family: 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .legal-page .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
};

export default TermsOfService;
