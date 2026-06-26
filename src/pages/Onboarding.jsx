import React from 'react';
import onboardingGlobe from '../assets/onboarding_globe.png';

const Onboarding = ({ onComplete }) => {
  const features = [
    { text: 'Analisis pasar global berbasis data', icon: '📊' },
    { text: 'Panduan ekspor langkah demi langkah', icon: '🗺️' },
    { text: 'Simulasi biaya dan estimasi keuntungan', icon: '💵' },
    { text: 'Temukan buyer & perluas jaringan', icon: '🤝' },
  ];

  return (
    <div className="fixed inset-0 z-[9998] bg-white text-slate-800 flex flex-col justify-between p-6 animate-in fade-in duration-300 overflow-y-auto">
      {/* Top Bar with Skip Link */}
      <div className="flex justify-end shrink-0 pt-2">
        <button 
          onClick={onComplete}
          className="text-slate-400 hover:text-slate-650 text-xs font-bold transition-colors cursor-pointer"
        >
          Lewati
        </button>
      </div>

      {/* Main Image */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto my-4 shrink-0">
        <div className="w-56 h-56 rounded-full overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center p-3 animate-float mb-6">
          <img 
            src={onboardingGlobe} 
            alt="Onboarding Globe" 
            className="w-full h-full object-contain"
          />
        </div>

        <h2 className="text-xl font-extrabold text-slate-900 text-center leading-tight">
          Temukan peluang ekspor terbaik untuk bisnis Anda
        </h2>

        {/* Features List */}
        <div className="mt-8 space-y-3.5 w-full">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-slate-50/70 p-3 rounded-xl border border-slate-100/50">
              <span className="text-lg shrink-0">{feature.icon}</span>
              <span className="text-xs text-slate-650 font-bold leading-relaxed">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar: Indicators & Button */}
      <div className="mt-6 flex flex-col items-center gap-6 shrink-0 pb-2">
        {/* Dot Indicators */}
        <div className="flex gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
          <span className="w-5 h-1.5 rounded-full bg-blue-600"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
        </div>

        <button 
          onClick={onComplete}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95 cursor-pointer"
        >
          Mulai Sekarang
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
