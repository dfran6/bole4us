import { useAuth } from '../context/AuthContext';
import UserLayout from './UserLayout';
import VendorLayout from './VendorLayout';
import AgentLayout from './AgentLayout';
import AdminLayout from './AdminLayout';
import Navbar from './Navbar';
import Footer from './landing/Footer';

const ROLE_LAYOUTS = {
  student: UserLayout,
  vendor: VendorLayout,
  agent: AgentLayout,
  admin: AdminLayout,
};

// Renders the matching dashboard shell (sidebar/topbar/bottom nav) for an
// authenticated user so pages like /explore, /faq, /how-it-works and
// /leaderboards never drop them back into the logged-out public chrome.
// Logged-out visitors keep seeing the public Navbar/Footer as before.
const RoleAwareShell = ({ children, showFooter = true }) => {
  const { status, user } = useAuth();
  const Layout = status === 'authenticated' ? ROLE_LAYOUTS[user?.role] : null;

  if (Layout) return <Layout>{children}</Layout>;

  return (
    <>
      <Navbar />
      {children}
      {showFooter && <Footer />}
    </>
  );
};

// Lets a page know whether it is being rendered inside a dashboard shell
// (and should therefore drop its own full-bleed background/top padding
// that was built assuming the public Navbar) or standalone for a
// logged-out visitor.
export function useIsDashboardShell() {
  const { status, user } = useAuth();
  return status === 'authenticated' && Boolean(ROLE_LAYOUTS[user?.role]);
}

export default RoleAwareShell;
