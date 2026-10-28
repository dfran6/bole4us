import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';

// Route-level code splitting: every page below used to be imported eagerly,
// so a single student visitor downloaded the admin dashboard, vendor
// payouts, agent tooling, etc. in one bundle. Lazy-loading means a role
// only pays for the pages it can actually reach.
const PartnerLanding = lazy(() => import('./pages/PartnerLanding'));
const Registration = lazy(() => import('./pages/Registration'));
const StudentProfile = lazy(() => import('./pages/StudentProfile'));
const Leaderboards = lazy(() => import('./pages/Leaderboards'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const VendorHub = lazy(() => import('./pages/VendorHub'));
const Explore = lazy(() => import('./pages/Explore'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const VendorProfile = lazy(() => import('./pages/VendorProfile'));
const AdminAnalytics = lazy(() => import('./pages/AdminAnalytics'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const AdminVendorManagement = lazy(() => import('./pages/AdminVendorManagement'));
const AdminOrdersOverview = lazy(() => import('./pages/AdminOrdersOverview'));
const AdminUserManagement = lazy(() => import('./pages/AdminUserManagement'));
const VendorInventory = lazy(() => import('./pages/VendorInventory'));
const VendorOrders = lazy(() => import('./pages/VendorOrders'));
const StudentOrders = lazy(() => import('./pages/StudentOrders'));

// New Pages
const FAQ = lazy(() => import('./pages/FAQ'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const Support = lazy(() => import('./pages/Support'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Careers = lazy(() => import('./pages/Careers'));
const Press = lazy(() => import('./pages/Press'));
const VendorAnalytics = lazy(() => import('./pages/VendorAnalytics'));
const VendorOrderHistory = lazy(() => import('./pages/VendorOrderHistory'));

// Recommended & Role Expansion Pages
const Checkout = lazy(() => import('./pages/Checkout'));
const OrderDetail = lazy(() => import('./pages/OrderDetail'));
const Wallet = lazy(() => import('./pages/Wallet'));
const Settings = lazy(() => import('./pages/Settings'));
const AgentHub = lazy(() => import('./pages/AgentHub'));
const AgentMissions = lazy(() => import('./pages/AgentMissions'));
const AgentEarnings = lazy(() => import('./pages/AgentEarnings'));
const VendorPayouts = lazy(() => import('./pages/VendorPayouts'));
const AgentHistory = lazy(() => import('./pages/AgentHistory'));
const VendorRegistration = lazy(() => import('./pages/VendorRegistration'));
const AgentRegistration = lazy(() => import('./pages/AgentRegistration'));
const VerifyEmail = lazy(() => import('./pages/VerifyEmail'));
const NotFound = lazy(() => import('./pages/NotFound'));

function RouteFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#F5A800]/20 border-t-[#F5A800]" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Toaster position="top-center" />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partner" element={<PartnerLanding />} />
          <Route path="/login" element={<Registration initialMode="login" />} />
          <Route path="/register" element={<Registration initialMode="register" />} />
          <Route path="/register/vendor" element={<VendorRegistration />} />
          <Route path="/register/agent" element={<AgentRegistration />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify/:token" element={<VerifyEmail />} />
          <Route path="/leaderboards" element={<Leaderboards />} />

          <Route path="/faq" element={<FAQ />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/support" element={<ProtectedRoute><Support /></ProtectedRoute>} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />

          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><StudentProfile /></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><StudentOrders /></ProtectedRoute>} />
          <Route path="/order/:id" element={<ProtectedRoute><OrderDetail /></ProtectedRoute>} />
          <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
          <Route path="/wallet" element={<ProtectedRoute><Wallet /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />

          <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/analytics" element={<ProtectedRoute allowedRoles={['admin']}><AdminAnalytics /></ProtectedRoute>} />
          <Route path="/admin/vendors" element={<ProtectedRoute allowedRoles={['admin']}><AdminVendorManagement /></ProtectedRoute>} />
          <Route path="/admin/users" element={<ProtectedRoute allowedRoles={['admin']}><AdminUserManagement /></ProtectedRoute>} />
          <Route path="/admin/orders" element={<ProtectedRoute allowedRoles={['admin']}><AdminOrdersOverview /></ProtectedRoute>} />

          <Route path="/vendor" element={<ProtectedRoute allowedRoles={['vendor']}><VendorHub /></ProtectedRoute>} />
          <Route path="/vendor/inventory" element={<ProtectedRoute allowedRoles={['vendor']}><VendorInventory /></ProtectedRoute>} />
          <Route path="/vendor/orders" element={<ProtectedRoute allowedRoles={['vendor']}><VendorOrders /></ProtectedRoute>} />
          <Route path="/vendor/analytics" element={<ProtectedRoute allowedRoles={['vendor']}><VendorAnalytics /></ProtectedRoute>} />
          <Route path="/vendor/history" element={<ProtectedRoute allowedRoles={['vendor']}><VendorOrderHistory /></ProtectedRoute>} />
          <Route path="/vendor/payouts" element={<ProtectedRoute allowedRoles={['vendor']}><VendorPayouts /></ProtectedRoute>} />

          <Route path="/agent" element={<ProtectedRoute allowedRoles={['agent']}><AgentHub /></ProtectedRoute>} />
          <Route path="/agent/missions" element={<ProtectedRoute allowedRoles={['agent']}><AgentMissions /></ProtectedRoute>} />
          <Route path="/agent/earnings" element={<ProtectedRoute allowedRoles={['agent']}><AgentEarnings /></ProtectedRoute>} />
          <Route path="/agent/history" element={<ProtectedRoute allowedRoles={['agent']}><AgentHistory /></ProtectedRoute>} />

          {/* Public storefront - must stay below the explicit /vendor/* paths above */}
          <Route path="/explore" element={<Explore />} />
          <Route path="/vendor/:id" element={<VendorProfile />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
