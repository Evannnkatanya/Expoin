import React from 'react';
import { ArrowLeft, Check, Play, ChevronRight, FileText, ExternalLink, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Roadmap = () => {
  const navigate = useNavigate();

  const steps = [
    { id: 1, name: 'Legalitas Usaha', status: 'completed', desc: 'Mendirikan badan hukum/usaha resmi' },
    { id: 2, name: 'Pendaftaran NIB', status: 'completed', desc: 'Mendapatkan Nomor Induk Berusaha melalui OSS' },
    { id: 3, name: 'Sertifikasi Produk', status: 'completed', desc: 'Sertifikasi kehalalan, higienitas, dan standar kualitas' },
    { id: 4, name: 'Mencari Buyer', status: 'active', desc: 'Melakukan riset & promosi ke pembeli mancanegara' },
    { id: 5, name: 'Kontrak Dagang', status: 'pending', desc: 'Negosiasi kontrak penjualan ekspor (Sales Contract)' },
    { id: 6, name: 'Pengiriman', status: 'pending', desc: 'Prosedur kepabeanan dan logistik kontainer laut/udara' },
  ];

  return (
    <div className="pb-24 md:pb-8">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center gap-3 mb-6">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors">
          <ArrowLeft size={20} className="text-slate-700" />
        </button>
        <h1 className="text-lg font-bold text-slate-800">Roadmap Ekspor</h1>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Roadmap Ekspor</h1>
        <p className="text-slate-500">Panduan langkah demi langkah untuk mengekspor produk Anda</p>
      </div>

      {/* Active Product Card */}
      <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-3xl">
          ☕
        </div>
        <div className="flex-1">
          <div className="text-xs text-slate-400 font-medium">PRODUK EKSPOR</div>
          <h3 className="font-bold text-slate-800 text-base leading-tight">Kopi Robusta</h3>
          <div className="text-xs text-slate-500 font-medium mt-1 flex items-center gap-1">
            Tujuan: <span className="font-semibold text-slate-700 flex items-center gap-1">Jepang 🇯🇵</span>
          </div>
        </div>
        <span className="text-xs font-bold text-amber-600 bg-amber-50 border border-amber-100 px-3 py-1 rounded-full">
          Dalam Proses
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Steps List */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-800 text-base mb-6">Tahapan Ekspor</h3>
          
          <div className="relative pl-6 border-l-2 border-slate-100 space-y-8 ml-3">
            {steps.map((step) => {
              const isCompleted = step.status === 'completed';
              const isActive = step.status === 'active';
              
              return (
                <div key={step.id} className="relative">
                  {/* Step Dot */}
                  <div className={`absolute -left-[35px] top-0 w-7 h-7 rounded-full flex items-center justify-center border-2 text-xs font-bold transition-all ${
                    isCompleted ? 'bg-emerald-500 border-emerald-500 text-white shadow-sm' :
                    isActive ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20' :
                    'bg-white border-slate-200 text-slate-400'
                  }`}>
                    {isCompleted ? <Check size={14} /> : step.id}
                  </div>

                  <div 
                    onClick={() => isActive && navigate('/roadmap-detail')}
                    className={`p-4 rounded-xl border transition-all ${
                      isActive 
                        ? 'bg-blue-50/40 border-blue-100 cursor-pointer hover:bg-blue-50' 
                        : 'border-transparent hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className={`font-bold text-sm leading-snug ${
                          isCompleted ? 'text-slate-700' :
                          isActive ? 'text-blue-700' : 'text-slate-400'
                        }`}>
                          {step.name}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 max-w-md">{step.desc}</p>
                      </div>

                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        isCompleted ? 'bg-emerald-50 text-emerald-700' :
                        isActive ? 'bg-blue-100 text-blue-700 animate-pulse' : 'bg-slate-50 text-slate-400'
                      }`}>
                        {isCompleted ? 'Selesai' :
                         isActive ? 'Sedang Berjalan' : 'Belum Dimulai'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <button 
              onClick={() => navigate('/roadmap-detail')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-3.5 px-4 rounded-xl transition-all shadow-md shadow-blue-500/10 flex items-center justify-center gap-2"
            >
              Lihat Detail Tahap <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Sidebar Info (Desktop Only) */}
        <div className="hidden lg:block space-y-6">
          <div className="bg-gradient-to-br from-primary-navy to-[#0F2942] text-white rounded-2xl p-6 shadow-sm">
            <h4 className="font-bold text-sm mb-3">Butuh Bantuan Pendampingan?</h4>
            <p className="text-xs text-white/80 leading-relaxed mb-4">
              Tim AI Assistant dan Mentor Ekspor kami siap mendampingi Anda di setiap tahap untuk mempersiapkan dokumen, analisis logistik, hingga korespondensi dengan buyer.
            </p>
            <button 
              onClick={() => navigate('/ai-assistant')}
              className="w-full bg-white text-primary-navy hover:bg-slate-100 text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle size={14} /> Tanya AI Assistant
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h4 className="font-bold text-slate-800 text-sm mb-4">Dokumen Wajib Terkait</h4>
            <div className="space-y-3">
              <a href="/dokumen" className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-slate-100 transition-colors">
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-red-500" />
                  <span className="text-xs font-bold text-slate-700">Company Profile</span>
                </div>
                <ExternalLink size={12} className="text-slate-400" />
              </a>
              <a href="/dokumen" className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-slate-100 transition-colors">
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-red-500" />
                  <span className="text-xs font-bold text-slate-700">Katalog Produk</span>
                </div>
                <ExternalLink size={12} className="text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
