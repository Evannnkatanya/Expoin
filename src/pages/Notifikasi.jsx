import React from 'react';
import { ArrowLeft, Bell, Globe, FileCheck, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Notifikasi = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      title: 'Permintaan Kopi Robusta di Jepang meningkat 15%',
      time: '10 menit yang lalu',
      desc: 'Harga ekspor rata-hari naik menjadi USD 7,2/kg. Peluang yang baik untuk mengirimkan penawaran Anda.',
      type: 'market',
      icon: <Globe className="text-blue-600" size={18} />
    },
    {
      id: 2,
      title: 'Peluang Ekspor ke Jerman Semakin Terbuka',
      time: '2 jam yang lalu',
      desc: 'Rantai supermarket di Jerman mencari pemasok kopi organik tersertifikasi.',
      type: 'market',
      icon: <Globe className="text-emerald-650" size={18} />
    },
    {
      id: 3,
      title: 'Dokumen NIB Anda telah diverifikasi',
      time: 'Kemarin',
      desc: 'Nomor Induk Berusaha (NIB) Anda telah lolos verifikasi sistem pendukung ekspor.',
      type: 'system',
      icon: <FileCheck className="text-emerald-600" size={18} />
    },
    {
      id: 4,
      title: 'Update Regulasi Ekspor Terbaru 2026',
      time: '1 hari yang lalu',
      desc: 'Uni Eropa merilis panduan baru tentang ketertelusuran produk kopi hutan lestari.',
      type: 'regulation',
      icon: <Info className="text-amber-500" size={18} />
    }
  ];

  return (
    <div className="pb-24 md:pb-8">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center gap-3 mb-6">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors">
          <ArrowLeft size={20} className="text-slate-700" />
        </button>
        <h1 className="text-lg font-bold text-slate-800">Notifikasi</h1>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Pemberitahuan</h1>
        <p className="text-slate-500">Pantau pembaruan regulasi, sinyal pasar, dan status dokumen Anda</p>
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden divide-y divide-slate-100">
        {notifications.map((notif) => (
          <div key={notif.id} className="p-5 flex items-start gap-4 hover:bg-slate-50/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
              {notif.icon}
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start gap-2">
                <h4 className="font-bold text-slate-850 text-sm leading-snug">{notif.title}</h4>
                <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">{notif.time}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">{notif.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifikasi;
