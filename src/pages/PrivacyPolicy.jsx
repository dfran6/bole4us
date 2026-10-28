import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/landing/Footer';
import Navbar from '../components/Navbar';

const sections = [
  { id: 'overview', number: '1', title: 'Overview' },
  { id: 'information-we-collect', number: '2', title: 'Information we collect' },
  { id: 'location-data', number: '3', title: 'Location data' },
  { id: 'legal-basis', number: '4', title: 'Legal basis for processing' },
  { id: 'how-we-use', number: '5', title: 'How we use your information' },
  { id: 'sharing', number: '6', title: 'How information is shared' },
  { id: 'retention', number: '7', title: 'Data retention' },
  { id: 'security', number: '8', title: 'Data security' },
  { id: 'your-rights', number: '9', title: 'Your rights under the NDPA' },
  { id: 'eligibility', number: '10', title: 'Eligibility and age' },
  { id: 'cookies', number: '11', title: 'Cookies and local storage' },
  { id: 'transfers', number: '12', title: 'International data transfers' },
  { id: 'changes', number: '13', title: 'Changes to this policy' },
  { id: 'contact', number: '14', title: 'Contact us' },
];

const PrivacyPolicy = () => {
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
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='legalNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23legalNoise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="mx-auto max-w-[1280px] px-5 pt-28 pb-24 sm:px-8 sm:pt-32 lg:px-10">
          <header className="max-w-[720px]">
            <h1
              className="font-serif italic font-black leading-[0.95] tracking-[-0.045em] text-zinc-950"
              style={{ fontSize: 'clamp(40px, 5.5vw, 64px)' }}
            >
              Privacy <span className="not-italic text-[#F5A800]">Policy</span>
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-zinc-500">
              This policy explains what personal data Bole4us collects from students,
              vendors and agents on our campus food marketplace, why we collect it, and
              the rights you have over it under Nigerian data protection law.
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
              <section id="overview" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">1. Overview</h2>
                <p>
                  Bole4us is a Nigerian campus marketplace that connects students to
                  nearby food vendors ("bole" grills and similar stalls) and to agents
                  who facilitate pickup and delivery. This policy covers every person who
                  creates an account on Bole4us, whether as a student, a vendor, an agent,
                  or a platform administrator, and describes how we handle personal data
                  collected through our website and application.
                </p>
                <p>
                  Where this policy refers to "we," "us," or "Bole4us," it means the
                  operator of the Bole4us platform. Where it refers to "you," it means
                  any individual who registers for or uses the service in any role.
                </p>
              </section>

              <section id="information-we-collect" className="scroll-mt-28 space-y-6">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  2. Information we collect
                </h2>
                <p>
                  We only collect the data needed to create your account, operate the
                  specific role you register under, and fulfill orders or missions you
                  take part in. What we collect depends on how you use Bole4us.
                </p>

                <div className="space-y-3">
                  <h3 className="text-[16px] font-black text-zinc-950">2.1 Every account</h3>
                  <p>
                    Regardless of role, we collect your full name, email address, phone
                    number, a password (stored in hashed form, never in plain text), a
                    general location description you provide (for example, your hall or
                    neighbourhood), and a handle derived from your email for identifying
                    your account within the platform.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[16px] font-black text-zinc-950">2.2 Vendor accounts</h3>
                  <p>
                    If you register as a vendor, we additionally collect your business
                    name, the food category you sell under, and the precise GPS
                    coordinates of your kitchen or stall, captured through your browser's
                    location permission at registration. We also process the stock levels,
                    prices, and order activity you manage through your vendor dashboard.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[16px] font-black text-zinc-950">2.3 Agent accounts</h3>
                  <p>
                    If you register as an agent, we additionally collect your vehicle
                    class, your primary campus zone ("quadrant"), and the precise GPS
                    coordinates of your registered base, captured the same way as for
                    vendors. As part of identity verification, we also collect a photo or
                    scan of a government-issued identity document, such as a driver's
                    licence or your National Identification Number (NIN) card, uploaded
                    during registration.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[16px] font-black text-zinc-950">
                    2.4 Orders, payments and messages
                  </h3>
                  <p>
                    When you place or fulfil an order, we process the items ordered, the
                    delivery or pickup address, delivery instructions, order status
                    history, and the amount due. Because Bole4us payments are settled by
                    direct bank transfer, we do not collect or store your bank card or
                    account credentials ourselves; we record only the transfer reference
                    and confirmation you provide to reconcile an order, and any payout or
                    withdrawal records needed to pay vendors and agents. Support tickets
                    and in-app notifications you send or receive are also stored against
                    your account so we can resolve them.
                  </p>
                </div>
              </section>

              <section id="location-data" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  3. Location data
                </h2>
                <p>
                  Precise location is the most sensitive data Bole4us collects, and we
                  treat it with particular care. We request precise GPS coordinates only
                  from vendors and agents, and only because the service cannot function
                  without them: a student browsing the map in Explore needs to see which
                  vendors are genuinely nearby, and an agent needs to be matched to
                  missions within their registered zone. We do not collect continuous or
                  background location from any device. Location is captured once, through
                  your browser's native permission prompt, at the point you register as a
                  vendor or agent, and is used solely to position your account on the
                  Explore map and to support order and mission matching. We do not sell,
                  rent, or use this data for advertising.
                </p>
              </section>

              <section id="legal-basis" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  4. Legal basis for processing
                </h2>
                <p>
                  Bole4us processes personal data in accordance with the Nigeria Data
                  Protection Act 2023 (NDPA) and the regulatory guidance of the Nigeria
                  Data Protection Commission (NDPC). We rely on the following lawful
                  bases, depending on the activity:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <span className="font-bold text-zinc-800">Consent</span> — you give us
                    your information, and your location where applicable, by creating an
                    account and granting any browser permission we request.
                  </li>
                  <li>
                    <span className="font-bold text-zinc-800">Performance of a contract</span>
                    {' '}— we need your data to create your account, process an order you
                    place, match an agent to a mission, or pay out a vendor or agent.
                  </li>
                  <li>
                    <span className="font-bold text-zinc-800">Legitimate interest</span> — we
                    use limited data for fraud prevention, account security, and resolving
                    disputes between students, vendors and agents, in a way that does not
                    override your own rights and interests.
                  </li>
                </ul>
              </section>

              <section id="how-we-use" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  5. How we use your information
                </h2>
                <p>We use the data described above to:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Create and secure your account, and let you sign in.</li>
                  <li>Show you nearby vendors, or show vendors and agents relevant orders and missions.</li>
                  <li>Process reservations, bank-transfer payments, vendor payouts and agent earnings.</li>
                  <li>Send order, mission, and account notifications through the in-app notification centre.</li>
                  <li>Respond to support tickets and investigate disputes between users.</li>
                  <li>Maintain platform safety, including detecting fraudulent orders or fake stock or location data.</li>
                  <li>Produce aggregated, de-identified statistics about platform activity, which cannot be used to identify you.</li>
                </ul>
              </section>

              <section id="sharing" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  6. How information is shared
                </h2>
                <p>We share the minimum data necessary for the platform to function:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    A vendor sees a customer's order details, items, and pickup or
                    delivery information, only for orders placed with that vendor, so the
                    order can be prepared and fulfilled.
                  </li>
                  <li>
                    An agent sees the pickup and delivery location and contact details
                    tied to a mission only after that agent claims it.
                  </li>
                  <li>
                    Bank-transfer confirmation details you provide at checkout are visible
                    to the receiving vendor for reconciliation purposes only.
                  </li>
                  <li>
                    We may disclose data where required by Nigerian law, a valid court
                    order, or to protect the rights, safety or property of Bole4us, our
                    users, or the public.
                  </li>
                </ul>
                <p>
                  We do not sell personal data to third parties, and we do not share your
                  data with advertisers.
                </p>
              </section>

              <section id="retention" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  7. Data retention
                </h2>
                <p>
                  We keep your account data for as long as your account remains active.
                  If you close your account, we retain order, payment, and payout records
                  for up to six years from the date of the relevant transaction. This
                  period reflects what is reasonably required to resolve payment disputes,
                  respond to a regulator, and meet record-keeping expectations that apply
                  to commercial transactions in Nigeria. All other personal data no longer
                  needed for those purposes is deleted or anonymised once your account is
                  closed.
                </p>
              </section>

              <section id="security" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  8. Data security
                </h2>
                <p>
                  We transmit data between your device and our servers over encrypted
                  connections, and passwords are stored in hashed form, never as plain
                  text. After you log in, your session is maintained using a bearer access
                  token held in your browser's local storage; this token is required to
                  make authenticated requests and expires automatically, at which point
                  you will need to sign in again. No system is completely immune to risk,
                  and we encourage you to use a strong, unique password and to keep your
                  device secure.
                </p>
              </section>

              <section id="your-rights" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  9. Your rights under the NDPA
                </h2>
                <p>As a data subject under the Nigeria Data Protection Act 2023, you have the right to:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Access the personal data we hold about you.</li>
                  <li>Request correction of inaccurate or incomplete data.</li>
                  <li>Request erasure of your data, subject to our retention obligations described in section 7.</li>
                  <li>Object to, or request restriction of, certain processing.</li>
                  <li>Receive a copy of your data in a portable format.</li>
                  <li>Lodge a complaint with the Nigeria Data Protection Commission (NDPC) if you believe we have mishandled your data.</li>
                </ul>
                <p>
                  You can review and update most of your account details directly from{' '}
                  <Link to="/settings" className="font-bold text-[#D88B00] underline-offset-2 hover:underline">
                    Settings
                  </Link>
                  . For access, correction, erasure or portability requests we cannot
                  complete there, raise a ticket through{' '}
                  <Link to="/support" className="font-bold text-[#D88B00] underline-offset-2 hover:underline">
                    Support
                  </Link>{' '}
                  or email us at the address in section 14, and we will respond within a
                  reasonable time.
                </p>
              </section>

              <section id="eligibility" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  10. Eligibility and age
                </h2>
                <p>
                  Bole4us is intended for persons who are at least 18 years old, or who
                  are otherwise able to lawfully enter into a binding agreement under
                  Nigerian law. By registering, you represent that you meet this
                  requirement. We do not knowingly collect personal data from children,
                  and we will delete any account we identify as belonging to a person
                  below this age.
                </p>
              </section>

              <section id="cookies" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  11. Cookies and local storage
                </h2>
                <p>
                  Bole4us does not use advertising or tracking cookies. We use your
                  browser's session storage only to hold your signed-in session's access
                  token, so you remain logged in as you move between pages. This storage
                  is kept separate per browser tab, so signing in to a different Bole4us
                  account in another tab does not affect a session you already have open.
                  Closing the tab, or clearing your browser's site data, will sign you out.
                </p>
              </section>

              <section id="transfers" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  12. International data transfers
                </h2>
                <p>
                  Our infrastructure and payment partners may process or store data on
                  servers located outside Nigeria. Where this happens, we require that any
                  such processing be subject to safeguards consistent with the NDPA's
                  requirements for cross-border transfer, such as contractual data
                  protection obligations placed on the receiving party.
                </p>
              </section>

              <section id="changes" className="scroll-mt-28 space-y-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  13. Changes to this policy
                </h2>
                <p>
                  We may update this policy as Bole4us evolves. If we make a material
                  change, we will update the effective date above and, where the change
                  significantly affects your rights, notify you through the in-app
                  notification centre or by email before it takes effect.
                </p>
              </section>

              <section id="contact" className="scroll-mt-28 space-y-4 pb-4">
                <h2 className="text-[22px] font-black tracking-[-0.02em] text-zinc-950">
                  14. Contact us
                </h2>
                <p>
                  Questions about this policy, or requests relating to your personal data,
                  can be sent to{' '}
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

export default PrivacyPolicy;
