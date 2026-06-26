import React, { useState } from 'react';
import { ArrowLeft, FileText, Download, Play, Info, CheckCircle, ExternalLink, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import videoThumbnail from '../assets/video_thumbnail.png';

const RoadmapDetail = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  const docs = [
    { name: 'Company Profile', type: 'PDF', size: '2.4 MB' },
    { name: 'Katalog Produk', type: 'PDF', size: '5.8 MB' },
    { name: 'Price List', type: 'XLSX', size: '1.2 MB' },
  ];

  return (
    <div className="pb-24 md:pb-8">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center gap-3 mb-6">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors">
          <ArrowLeft size={20} className="text-slate-700" />
        </button>
        <h1 className="text-lg font-bold text-slate-800">Detail Tahap</h1>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-2">
          <span className="hover:underline cursor-pointer" onClick={() => navigate('/roadmap')}>Roadmap</span>
          <span>&gt;</span>
          <span className="text-slate-600">Detail Tahap 4</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-800">Detail Tahap: Mencari Buyer</h1>
        <p className="text-slate-500">Panduan teknis pencarian pembeli luar negeri untuk produk Kopi Robusta</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Stage details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Phase Card */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/50 rounded-2xl p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-lg">
                4
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-base">Mencari Buyer</h3>
                <p className="text-xs text-slate-500 mt-0.5">Tujuan Ekspor: Jepang 🇯🇵</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-200/20">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Deskripsi</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tahap ini bertujuan untuk menemukan pembeli potensial di negara tujuan melalui berbagai platform B2B, program business matching, pameran internasional, dan bantuan perwakilan dagang (ITPC/Atase Perdagangan).
              </p>
            </div>
          </div>

          {/* Required Documents Checklist */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 text-base mb-4">Dokumen yang Diperlukan</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {docs.map((doc, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex flex-col justify-between h-32 hover:border-blue-200 transition-colors group">
                  <div className="flex justify-between items-start">
                    <FileText className={doc.type === 'PDF' ? 'text-red-500' : 'text-emerald-600'} size={24} />
                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-slate-200 text-slate-600 uppercase">
                      {doc.type}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-800 truncate mb-1">{doc.name}</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-[10px] text-slate-400 font-medium">{doc.size}</span>
                      <button className="p-1 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-all shadow-sm group-hover:scale-105">
                        <Download size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Tutorial */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 text-base mb-4">Tutorial</h3>
            
            <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-900 border border-slate-200 group">
              <img 
                src={videoThumbnail} 
                alt="Cara Mencari Buyer di Platform B2B" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center transition-all">
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 hover:scale-110 shadow-xl shadow-blue-600/35 transition-all cursor-pointer border-4 border-white/20"
                >
                  <Play size={28} className="ml-1 fill-white" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white bg-gradient-to-t from-slate-950/80 to-transparent p-3 rounded-lg">
                <div>
                  <h4 className="text-xs font-bold leading-tight">Cara Mencari Buyer di Platform B2B</h4>
                  <p className="text-[10px] text-white/70 mt-0.5">Panduan Praktis Eksportir Pemula</p>
                </div>
                <span className="text-[10px] font-bold bg-white/20 px-2 py-1 rounded">08:45</span>
              </div>
            </div>
          </div>

          {/* Tips Box */}
          <div className="bg-emerald-50/50 border border-emerald-200/50 rounded-2xl p-5 flex gap-3">
            <Info className="text-emerald-600 shrink-0 mt-0.5" size={18} />
            <div>
              <h4 className="font-bold text-slate-800 text-xs mb-1">Tips Sukses</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Gunakan platform B2B terpercaya (seperti Alibaba, Indotrade, atau TradeKey) dan pastikan profil perusahaan Anda lengkap dengan foto fasilitas produksi yang higienis. Ini akan menaikkan tingkat kepercayaan buyer secara signifikan.
              </p>
            </div>
          </div>
        </div>

        {/* Action Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 text-sm mb-4">Langkah Berikutnya</h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle size={12} className="fill-blue-100" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-800">Siapkan Company Profile</h4>
                  <p className="text-[10px] text-slate-400">Pastikan versi Bahasa Inggris siap.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[10px] font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-400">Buka Akun B2B Global</h4>
                  <p className="text-[10px] text-slate-400">Daftar sebagai eksportir terverifikasi.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[10px] font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-400">Gunakan AI Assistant</h4>
                  <p className="text-[10px] text-slate-400">Draf email penawaran ekspor yang persuasif.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => navigate('/cari-buyer')}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md shadow-blue-500/10"
            >
              Cari Database Buyer Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal Player Simulator */}
      {isPlaying && (
        <div className="fixed inset-0 z-[100] bg-slate-950/80 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-slate-900 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative">
            <button 
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors"
            >
              <X size={18} />
            </button>
            <div className="aspect-video relative flex items-center justify-center bg-black">
              {/* Simulated playing screen */}
              <div className="text-center text-white px-6">
                <Play size={48} className="mx-auto text-blue-500 mb-3 animate-pulse" />
                <h3 className="font-bold text-sm">Simulasi Video Tutorial Sedang Diputar...</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                  Ini adalah simulasi video pemutar tutorial. Pada website produksi, ini akan merender pemutar video interaktif.
                </p>
                <button 
                  onClick={() => setIsPlaying(false)}
                  className="mt-6 bg-blue-600 hover:bg-blue-700 text-xs font-bold py-2 px-4 rounded-lg"
                >
                  Tutup Pemutar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoadmapDetail;
