import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Globe, 
  CheckCircle, 
  Map, 
  Calculator, 
  Users, 
  MessageSquare, 
  FileText, 
  Bell,
  User,
  Crown
} from 'lucide-react';
import userAvatar from '../assets/user_avatar.png';
import cargoShip from '../assets/cargo_ship.png';

const Sidebar = ({ forceMobile = false }) => {
  const navItems = [
    { icon: <Home size={18} />, label: 'Dashboard', path: '/' },
    { icon: <Globe size={18} />, label: 'Market Analyzer', path: '/market-analyzer' },
    { icon: <CheckCircle size={18} />, label: 'Export Readiness', path: '/export-readiness' },
    { icon: <Map size={18} />, label: 'Roadmap Ekspor', path: '/roadmap' },
    { icon: <Calculator size={18} />, label: 'Simulasi Biaya', path: '/simulasi' },
    { icon: <Users size={18} />, label: 'Cari Buyer', path: '/cari-buyer' },
    { icon: <MessageSquare size={18} />, label: 'AI Export Assistant', path: '/ai-assistant' },
    { icon: <FileText size={18} />, label: 'Dokumen & Template', path: '/dokumen' },
    { icon: <Bell size={18} />, label: 'Notifikasi', path: '/notifikasi' },
  ];

  const mobileNavItems = [
    { icon: <Home size={20} />, label: 'Beranda', path: '/' },
    { icon: <Map size={20} />, label: 'Roadmap', path: '/roadmap' },
    { icon: <FileText size={20} />, label: 'Dokumen', path: '/dokumen' },
    { icon: <Bell size={20} />, label: 'Notifikasi', path: '/notifikasi' },
    { icon: <User size={20} />, label: 'Akun', path: '/profil' },
  ];

  if (forceMobile) {
    return (
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around py-2.5 px-1 z-[90] shadow-[0_-8px_30px_rgb(0,0,0,0.06)] shrink-0">
        {mobileNavItems.map((item, index) => (
          <NavLink 
            key={index}
            to={item.path} 
            className={({ isActive }) => 
              `flex flex-col items-center gap-0.5 px-3 py-1 text-center transition-all ${
                isActive ? 'text-blue-600 font-bold' : 'text-slate-400 font-medium'
              }`
            }
          >
            <div className="transition-transform active:scale-95">{item.icon}</div>
            <span className="text-[10px] tracking-tight">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    );
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-[#0A192F] text-white min-h-screen fixed left-0 top-0 z-40 border-r border-white/5">
        {/* Logo and branding */}
        <div className="p-5 flex items-center gap-3 border-b border-white/10 shrink-0">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-blue-500/25">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
              <path d="m11 8 4 4-4 4" />
            </svg>
          </div>
          <div>
            <h1 className="font-black text-sm tracking-widest leading-none">EXPOIN</h1>
            <p className="text-[9px] text-slate-400 font-semibold tracking-wider mt-0.5">Export Intelligence Indonesia</p>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 overflow-y-auto py-3 scrollbar-thin">
          <ul className="space-y-0.5 px-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3.5 px-4 py-2.5 rounded-xl transition-all ${
                      isActive 
                        ? 'bg-blue-650 text-white font-bold shadow-md shadow-blue-500/10' 
                        : 'text-slate-400 font-medium hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  <span className="shrink-0">{item.icon}</span>
                  <span className="text-xs">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Premium and Profile section */}
        <div className="p-3 border-t border-white/10 shrink-0 relative overflow-hidden bg-[#071629]">
          
          {/* Card upgrade */}
          <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 rounded-xl p-3 text-center mb-3.5 relative z-10 border border-white/10 shadow-lg">
            <h3 className="font-bold text-xs flex items-center justify-center gap-1">
              <Crown size={14} className="text-amber-300 fill-amber-300" />
              Premium Account
            </h3>
            <p className="text-[10px] text-white/80 leading-snug mt-1.5 mb-3">
              Dapatkan analisis premium, akses buyer lebih lengkap, dan fitur AI tanpa batas!
            </p>
            <button className="w-full bg-amber-500 hover:bg-amber-600 text-white text-[10px] font-extrabold py-2 rounded-lg transition-all shadow-md active:scale-95 cursor-pointer">
              Upgrade Sekarang 👑
            </button>
          </div>
          
          {/* Ship background image watermark */}
          <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay">
            <img src={cargoShip} alt="background" className="w-full h-full object-cover" />
          </div>
          
          {/* User profile details */}
          <div className="mt-2 flex items-center justify-between px-1 relative z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-slate-700 overflow-hidden border border-white/20">
                <img src={userAvatar} alt="Andi" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs font-bold leading-tight">Hai, Andi 👋</p>
                <p className="text-[9px] text-slate-400 font-medium">UMKM Kopi Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around py-2.5 px-1 z-[90] shadow-[0_-8px_30px_rgb(0,0,0,0.06)]">
        {mobileNavItems.map((item, index) => (
          <NavLink 
            key={index}
            to={item.path} 
            className={({ isActive }) => 
              `flex flex-col items-center gap-0.5 px-3 py-1 text-center transition-all ${
                isActive ? 'text-blue-600 font-bold' : 'text-slate-400 font-medium'
              }`
            }
          >
            <div>{item.icon}</div>
            <span className="text-[10px] tracking-tight">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
