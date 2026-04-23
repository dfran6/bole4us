import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Store, Receipt, BarChart3, LogOut, Menu, X, Flame, ShieldCheck, Users } from 'lucide-react';

const AdminLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: 'Dashboard', path: '/admin', icon: LayoutDashboard, exact: true },
    { title: 'Vendors', path: '/admin/vendors', icon: Store },
    { title: 'User Registry', path: '/admin/users', icon: Users },
    { title: 'Orders Hub', path: '/admin/orders', icon: Receipt },
    { title: 'Analytics', path: '/admin/analytics', icon: BarChart3 },
  ];

  const getLinkClass = (path, exact = false) => {
    const isActive = exact ? location.pathname === path : location.pathname.startsWith(path);
    return `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group ${
      isActive 
        ? 'bg-primary text-white shadow-lg shadow-primary/20 font-black' 
        : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 font-bold'
    }`;
  };

  return (
    <div className="bg-white text-zinc-900 font-body min-h-screen flex">
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-zinc-900/60 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`h-screen w-80 fixed left-0 top-0 bg-white flex flex-col p-6 gap-2 z-50 border-r border-zinc-100 transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="mb-12 px-2 flex-shrink-0 flex items-center justify-between">
          <Link to="/admin" className="flex items-center gap-4 group">
            <div className="bg-zinc-900 p-2.5 rounded-xl shadow-lg shadow-zinc-100 rotate-[-10deg] group-hover:rotate-0 transition-transform">
              <img src="/logo.png" alt="Logo" className="w-6 h-6 object-contain brightness-0 invert" />
            </div>
            <div>
              <div className="font-headline font-black text-2xl text-zinc-900 leading-none tracking-tighter uppercase">bole4us</div>
              <div className="text-[10px] font-black text-primary tracking-[0.2em] uppercase mt-1">Admin Portal</div>
            </div>
          </Link>
          <button onClick={() => setIsOpen(false)} className="md:hidden p-2 bg-zinc-50 hover:bg-zinc-100 rounded-xl text-zinc-400 transition-colors">
             <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="flex-1 flex flex-col gap-2 overflow-y-auto custom-scrollbar pb-6 px-1">
          {menuItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              onClick={() => setIsOpen(false)} 
              className={getLinkClass(item.path, item.exact)}
            >
              <item.icon className={`w-5 h-5 ${location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path)) ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-900'}`} />
              <span className="text-[10px] uppercase tracking-[0.15em]">{item.title}</span>
            </Link>
          ))}
          
          <div className="mt-auto pt-8 border-t border-zinc-50">
            <Link to="/" className="flex items-center gap-4 px-5 py-4 text-zinc-400 hover:text-primary transition-all duration-300 font-black group">
              <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] uppercase tracking-[0.15em]">Exit to App</span>
            </Link>
          </div>
        </nav>

        <div className="mt-6 p-6 bg-zinc-900 rounded-[2rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-bl-full group-hover:scale-110 transition-transform"></div>
            <div className="relative z-10">
                <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                <h4 className="text-white text-xs font-black uppercase tracking-widest mb-1">System Secure</h4>
                <p className="text-zinc-500 text-[10px] font-medium leading-relaxed">Platform performance is <span className="text-green-500">optimal</span>.</p>
            </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-h-screen flex flex-col bg-zinc-50/50 w-full md:ml-80 relative overflow-x-hidden pt-20 md:pt-0">
        {/* Mobile Top Bar */}
        <div className="md:hidden flex items-center justify-between p-6 bg-white/80 backdrop-blur-xl border-b border-zinc-100 fixed top-0 w-full z-40">
          <div className="flex items-center gap-3">
             <Flame className="w-6 h-6 text-primary" fill="currentColor" />
             <span className="font-headline font-black text-xl text-zinc-900 tracking-tighter uppercase">Admin</span>
          </div>
          <button onClick={() => setIsOpen(true)} className="p-3 bg-zinc-100 rounded-2xl hover:bg-zinc-200 transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {/* Child Views */}
        <div className="flex-1 p-8 md:p-12 lg:p-16">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
