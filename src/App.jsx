import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PartnerLanding from './pages/PartnerLanding';
import Registration from './pages/Registration';
import StudentProfile from './pages/StudentProfile';
import Leaderboards from './pages/Leaderboards';
import AdminDashboard from './pages/AdminDashboard';
import VendorHub from './pages/VendorHub';
import Explore from './pages/Explore';
import VendorProfile from './pages/VendorProfile';
import AdminAnalytics from './pages/AdminAnalytics';
import Dashboard from './pages/Dashboard';
import AdminVendorManagement from './pages/AdminVendorManagement';
import AdminOrdersOverview from './pages/AdminOrdersOverview';
import VendorInventory from './pages/VendorInventory';
import VendorOrders from './pages/VendorOrders';
import StudentOrders from './pages/StudentOrders';

// New Pages
import FAQ from './pages/FAQ';
import ForgotPassword from './pages/ForgotPassword';
import Support from './pages/Support';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Careers from './pages/Careers';
import Press from './pages/Press';
import VendorAnalytics from './pages/VendorAnalytics';
import VendorOrderHistory from './pages/VendorOrderHistory';

// Recommended & Role Expansion Pages
import Checkout from './pages/Checkout';
import OrderDetail from './pages/OrderDetail';
import Wallet from './pages/Wallet';
import Settings from './pages/Settings';
import AgentHub from './pages/AgentHub';
import AgentMissions from './pages/AgentMissions';
import AgentEarnings from './pages/AgentEarnings';
import AgentPayouts from './pages/AgentPayouts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/partner" element={<PartnerLanding />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<StudentProfile />} />
        <Route path="/leaderboards" element={<Leaderboards />} />

        <Route path="/faq" element={<FAQ />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/analytics" element={<AdminAnalytics />} />
        <Route path="/admin/vendors" element={<AdminVendorManagement />} />
        <Route path="/admin/orders" element={<AdminOrdersOverview />} />

        <Route path="/vendor" element={<VendorHub />} />
        <Route path="/vendor/inventory" element={<VendorInventory />} />
        <Route path="/vendor/orders" element={<VendorOrders />} />
        <Route path="/vendor/analytics" element={<VendorAnalytics />} />
        <Route path="/vendor/history" element={<VendorOrderHistory />} />
        <Route path="/vendor/:id" element={<VendorProfile />} />

        <Route path="/explore" element={<Explore />} />
        <Route path="/orders" element={<StudentOrders />} />
        <Route path="/order/:id" element={<OrderDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/settings" element={<Settings />} />

        {/* Agent Routes */}
        <Route path="/agent" element={<AgentHub />} />
        <Route path="/agent/missions" element={<AgentMissions />} />
        <Route path="/agent/earnings" element={<AgentEarnings />} />

        {/* New Vendor Routes */}
        <Route path="/vendor/payouts" element={<AgentPayouts />} />
      </Routes>
    </Router>
  );
}

export default App;
