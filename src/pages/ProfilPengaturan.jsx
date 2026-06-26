import React from 'react';
import { ArrowLeft, ChevronRight, Building, Award, Bell, Shield, Languages, HelpCircle, LogOut, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import userAvatar from '../assets/user_avatar.png';

const ProfilPengaturan = ({ onResetOnboarding }) => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: <Building size={18} className="text-slate-500" />, label: 'Informasi Perusahaan', extra: null },
    { icon: <Award size={18} className="text-amber-500" />, label: 'Paket Berlangganan', extra: 'Premium' },
    { icon: <Bell size={18} className="text-slate-500" />, label: 'Pengaturan Notifikasi', extra: null },
    { icon: <Shield size={18} className="text-slate-500" />, label: 'Keamanan Akun', extra: null },
    { icon: <Languages size={18} className="text-slate-500" />, label: 'Bahasa', extra: 'Indonesia' },
    { icon: <HelpCircle size={18} className="text-slate-500" />, label: 'Pusat Bantuan', extra: null },
  ];

  return (
    <div className="pb-24 md:pb-8">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center gap-3 mb-6">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors">
          <ArrowLeft size={20} className="text-slate-700" />
        </button>
        <h1 className="text-lg font-bold text-slate-800">Profil & Pengaturan</h1>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Profil & Pengaturan</h1>
        <p className="text-slate-500">Kelola akun eksportir dan konfigurasi aplikasi Anda</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-50 bg-slate-100 mb-4">
            <img src={userAvatar} alt="Andi Pratama" className="w-full h-full object-cover" />
          </div>
          
          <h3 className="font-extrabold text-slate-800 text-base leading-tight">Andi Pratama</h3>
          <p className="text-xs text-slate-400 font-medium mt-1">UMKM Kopi Indonesia</p>
          
          <div className="mt-4 pt-4 border-t border-slate-100 w-full text-left space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Email:</span>
              <span className="font-semibold text-slate-700">andi@email.com</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Telepon:</span>
              <span className="font-semibold text-slate-700">0812-3456-7890</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold py-2.5 rounded-xl transition-all">
            Ubah Profil
          </button>
        </div>

        {/* Menu Options */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden divide-y divide-slate-100">
            {menuItems.map((item, idx) => (
              <div 
                key={idx} 
                className="p-4 flex items-center justify-between hover:bg-slate-50/40 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-xs font-bold text-slate-750">{item.label}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  {item.extra && (
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                      item.extra === 'Premium' 
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm' 
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {item.extra}
                    </span>
                  )}
                  <ChevronRight size={16} className="text-slate-350" />
                </div>
              </div>
            ))}
          </div>

          {/* Developer / Demo tools (Reset onboarding) */}
          <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4 flex justify-between items-center">
            <div>
              <h4 className="font-bold text-xs text-slate-800">Simulasi Demo</h4>
              <p className="text-[10px] text-slate-400">Putar kembali halaman Splash & Onboarding.</p>
            </div>
            <button 
              onClick={onResetOnboarding}
              className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4.5 rounded-xl transition-all shadow-sm"
            >
              <RefreshCw size={12} />
              Replay Onboarding
            </button>
          </div>

          {/* Logout Button */}
          <button className="w-full flex items-center justify-center gap-2 border border-red-200/50 hover:bg-red-50 text-red-600 text-xs font-bold py-3 rounded-xl transition-all bg-white">
            <LogOut size={16} /> Keluar dari Akun
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilPengaturan;
