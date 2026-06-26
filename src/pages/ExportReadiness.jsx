import React from 'react';
import { ArrowLeft, CheckCircle2, AlertCircle, HelpCircle, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ExportReadiness = () => {
  const navigate = useNavigate();

  const checklistItems = [
    { id: 1, label: 'Memiliki NIB', status: 'success', desc: 'Nomor Induk Berusaha lengkap & aktif' },
    { id: 2, label: 'Memiliki NPWP', status: 'success', desc: 'NPWP Badan Hukum/Perorangan terdaftar' },
    { id: 3, label: 'Sertifikasi Produk', status: 'warning', desc: 'BPOM / Halal / Sertifikasi Internasional' },
    { id: 4, label: 'Kapasitas Produksi Stabil', status: 'success', desc: 'Mampu memenuhi volume minimum ekspor' },
    { id: 5, label: 'Pengalaman Ekspor', status: 'danger', desc: 'Belum pernah melakukan transaksi luar negeri' },
    { id: 6, label: 'Pemahaman Incoterms', status: 'danger', desc: 'Butuh pemahaman regulasi penyerahan barang' },
    { id: 7, label: 'Dokumen Ekspor Dasar', status: 'success', desc: 'Invoice, packing list, dokumen pengiriman' },
  ];

  return (
    <div className="pb-24 md:pb-8">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center gap-3 mb-6">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors">
          <ArrowLeft size={20} className="text-slate-700" />
        </button>
        <h1 className="text-lg font-bold text-slate-800">Export Readiness</h1>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Export Readiness</h1>
        <p className="text-slate-500">Ukur kesiapan usaha Anda untuk menembus pasar internasional</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Score Radial Chart */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
          <h3 className="font-bold text-slate-800 text-base mb-6 self-start md:self-center">Skor Kesiapan Ekspor Anda</h3>
          
          <div className="relative w-40 h-40 flex items-center justify-center mb-6">
            {/* Circular Progress Path */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="#E2E8F0"
                strokeWidth="10"
                fill="transparent"
              />
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="#2563EB"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray={263.8}
                strokeDashoffset={263.8 * (1 - 0.78)}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl font-extrabold text-slate-800">78%</span>
            </div>
          </div>

          <span className="inline-block bg-blue-50 text-primary-blue font-bold px-5 py-2 rounded-full text-sm mb-4">
            Siap Dibina Menuju Ekspor
          </span>
          <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
            Usaha Anda memiliki fondasi yang kuat, namun beberapa aspek legalitas produk dan pemahaman pasar masih perlu ditingkatkan.
          </p>
        </div>

        {/* Checklist */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 text-base mb-4">Checklist Kesiapan</h3>
            
            <div className="divide-y divide-slate-100">
              {checklistItems.map((item) => (
                <div key={item.id} className="py-3.5 flex items-start gap-4">
                  <div className="mt-0.5">
                    {item.status === 'success' && (
                      <CheckCircle2 className="text-emerald-500 fill-emerald-50" size={20} />
                    )}
                    {item.status === 'warning' && (
                      <AlertCircle className="text-amber-500 fill-amber-50" size={20} />
                    )}
                    {item.status === 'danger' && (
                      <AlertCircle className="text-red-500 fill-red-50" size={20} />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm text-slate-800">{item.label}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                        item.status === 'success' ? 'bg-emerald-50 text-emerald-700' :
                        item.status === 'warning' ? 'bg-amber-50 text-amber-700' : 'bg-red-50 text-red-700'
                      }`}>
                        {item.status === 'success' ? 'Siap' : item.status === 'warning' ? 'Perlu Dilengkapi' : 'Belum Ada'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What to Improve */}
          <div className="bg-amber-50/50 border border-amber-200/50 rounded-2xl p-6">
            <h4 className="font-bold text-slate-800 text-sm mb-3">Yang Perlu Ditingkatkan</h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-[10px]">1</span>
                <span><strong>Sertifikasi Produk:</strong> Lengkapi sertifikat internasional atau standardisasi tujuan ekspor Anda (misal: HACCP untuk pangan).</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-[10px]">2</span>
                <span><strong>Dokumen Ekspor Tambahan:</strong> Pelajari pembuatan Sales Contract dan Incoterms komprehensif.</span>
              </li>
            </ul>
          </div>

          {/* Re-calculate */}
          <div className="text-center">
            <button className="inline-flex items-center gap-2 text-primary-blue hover:text-blue-700 font-semibold text-xs transition-colors py-2 px-4 rounded-lg hover:bg-blue-50">
              <RefreshCw size={14} />
              Isi ulang untuk mendapatkan skor lebih akurat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportReadiness;
