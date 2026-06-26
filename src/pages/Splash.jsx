import React from 'react';
import cargoShip from '../assets/cargo_ship.png';

const Splash = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-b from-[#0F2942] to-[#051329] text-white flex flex-col justify-between items-center p-8 animate-in fade-in duration-300">
      {/* Top spacer */}
      <div></div>

      {/* Logo and Slogan */}
      <div className="text-center flex flex-col items-center gap-4">
        {/* Animated Globe Logo Shape */}
        <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
            <path d="m11 8 4 4-4 4" />
          </svg>
        </div>

        <div>
          <h1 className="text-3xl font-black tracking-wider leading-tight bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent">EXPOIN</h1>
          <p className="text-xs text-blue-300 font-semibold uppercase tracking-widest mt-1">Export Intelligence Indonesia</p>
        </div>

        <p className="text-sm text-slate-350 italic max-w-xs mt-8">
          "Dari UMKM Lokal Menuju Pasar Global"
        </p>
      </div>

      {/* Cargo Ship Bottom Image */}
      <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border border-white/10 aspect-[16/10] bg-slate-950">
        <img 
          src={cargoShip} 
          alt="Cargo Ship" 
          className="w-full h-full object-cover animate-pulse"
        />
      </div>
    </div>
  );
};

export default Splash;
