import HowItWorksSection from '../components/landing/HowItWorks';
import RoleAwareShell, { useIsDashboardShell } from '../components/RoleAwareShell';

const HowItWorks = () => {
  const inShell = useIsDashboardShell();

  return (
    <RoleAwareShell>
      <div className={inShell ? 'how-it-works-page font-[\'DM_Sans\'] text-zinc-950' : 'how-it-works-page bg-[#FFFDF8] font-[\'DM_Sans\'] text-zinc-950'}>
        <main className={inShell ? '' : 'pt-16'}>
          <HowItWorksSection />
        </main>
      </div>
    </RoleAwareShell>
  );
};

export default HowItWorks;
