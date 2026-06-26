import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, Globe, ChevronRight, MessageSquare, Check, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CariBuyer = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [selectedBuyer, setSelectedBuyer] = useState(null);

  const buyers = [
    {
      id: 1,
      name: 'Nihon Coffee Co., Ltd.',
      countryName: 'Jepang',
      countryCode: 'jp',
      flag: '🇯🇵',
      tags: ['Importir', 'Distributor'],
      email: 'info@nihoncoffee.co.jp',
      website: 'www.nihoncoffee.co.jp',
      description: 'Importir utama biji kopi hijau di area Greater Tokyo. Memasok ke lebih dari 200 kedai kopi lokal.'
    },
    {
      id: 2,
      name: 'Global Beans GmbH',
      countryName: 'Jerman',
      countryCode: 'de',
      flag: '🇩🇪',
      tags: ['Importir', 'Roaster'],
      email: 'sourcing@globalbeans.de',
      website: 'www.globalbeans.de',
      description: 'Spesialis roaster kopi organik dan fair-trade yang berbasis di Hamburg. Mengutamakan kualitas specialty grade.'
    },
    {
      id: 3,
      name: 'US Coffee Traders',
      countryName: 'Amerika Serikat',
      countryCode: 'us',
      flag: '🇺🇸',
      tags: ['Importir', 'Wholesaler'],
      email: 'purchasing@uscoffeetraders.com',
      website: 'www.uscoffeetraders.com',
      description: 'Distributor grosir kopi berskala nasional dengan jaringan pergudangan di Pantai Timur dan Barat AS.'
    },
    {
      id: 4,
      name: 'Seoul Beans Co.',
      countryName: 'Korea Selatan',
      countryCode: 'kr',
      flag: '🇰🇷',
      tags: ['Importir', 'Distributor'],
      email: 'hello@seoulbeans.co.kr',
      website: 'www.seoulbeans.co.kr',
      description: 'Penyedia komoditas kopi premium untuk kedai rantai dan ritel modern di wilayah metropolitan Seoul.'
    }
  ];

  const filteredBuyers = buyers.filter(buyer => {
    const matchesSearch = buyer.name.toLowerCase().includes(search.toLowerCase()) || 
                          buyer.countryName.toLowerCase().includes(search.toLowerCase());
    const matchesCountry = countryFilter ? buyer.countryCode === countryFilter : true;
    const matchesCategory = categoryFilter ? buyer.tags.includes(categoryFilter) : true;
    return matchesSearch && matchesCountry && matchesCategory;
  });

  return (
    <div className="pb-24 md:pb-8">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center gap-3 mb-6">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors">
          <ArrowLeft size={20} className="text-slate-700" />
        </button>
        <h1 className="text-lg font-bold text-slate-800">Cari Buyer</h1>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Direktori Buyer Internasional</h1>
        <p className="text-slate-500">Hubungi pembeli potensial yang terverifikasi di berbagai belahan dunia</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-4 mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="Cari nama perusahaan atau negara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-2.5 bg-slate-50 border border-slate-150 rounded-xl text-slate-800 text-sm outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div>
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 text-slate-600 text-xs font-semibold focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="">Semua Negara</option>
              <option value="jp">Jepang</option>
              <option value="de">Jerman</option>
              <option value="us">Amerika Serikat</option>
              <option value="kr">Korea Selatan</option>
            </select>
          </div>
          <div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 text-slate-600 text-xs font-semibold focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="">Semua Kategori</option>
              <option value="Importir">Importir</option>
              <option value="Distributor">Distributor</option>
              <option value="Roaster">Roaster</option>
              <option value="Wholesaler">Wholesaler</option>
            </select>
          </div>
        </div>
      </div>

      {/* Buyer Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredBuyers.length > 0 ? (
          filteredBuyers.map((buyer) => (
            <div key={buyer.id} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{buyer.flag}</span>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{buyer.name}</h4>
                      <p className="text-[10px] text-slate-400 font-medium">{buyer.countryName}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {buyer.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-50 flex gap-2">
                <button 
                  onClick={() => setSelectedBuyer(buyer)}
                  className="flex-1 text-center bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-600 text-xs font-bold py-2 rounded-xl transition-all"
                >
                  Lihat Profil
                </button>
                <button 
                  onClick={() => navigate('/ai-assistant')}
                  className="p-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-xl transition-all"
                >
                  <MessageSquare size={16} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full bg-white rounded-2xl p-12 border border-slate-100 shadow-sm text-center">
            <Globe className="mx-auto text-slate-300 mb-3" size={40} />
            <p className="font-bold text-slate-700 text-sm">Tidak Ada Buyer Ditemukan</p>
            <p className="text-xs text-slate-400 mt-1">Coba sesuaikan kata kunci pencarian atau filter Anda.</p>
          </div>
        )}
      </div>

      {/* Buyer Detail Drawer/Modal Simulator */}
      {selectedBuyer && (
        <div className="fixed inset-0 z-[100] bg-slate-950/70 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md rounded-2xl overflow-hidden shadow-2xl relative animate-in slide-in-from-bottom-4 duration-300">
            <button 
              onClick={() => setSelectedBuyer(null)}
              className="absolute top-4 right-4 p-1.5 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
            >
              <X size={16} />
            </button>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{selectedBuyer.flag}</span>
                <div>
                  <h3 className="font-bold text-slate-800 text-base">{selectedBuyer.name}</h3>
                  <p className="text-xs text-slate-400">{selectedBuyer.countryName}</p>
                </div>
              </div>

              <div className="flex gap-1.5 mb-5">
                {selectedBuyer.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <h4 className="font-bold text-slate-500 mb-1">Deskripsi Perusahaan</h4>
                  <p className="text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl">
                    {selectedBuyer.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-slate-500 mb-0.5">Email Hubungan</h4>
                    <span className="text-blue-600 font-semibold">{selectedBuyer.email}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-500 mb-0.5">Website</h4>
                    <span className="text-slate-700 font-semibold">{selectedBuyer.website}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <button 
                  onClick={() => setSelectedBuyer(null)}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-2.5 rounded-xl transition-all"
                >
                  Tutup
                </button>
                <button 
                  onClick={() => {
                    setSelectedBuyer(null);
                    navigate('/ai-assistant');
                  }}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  Draf Email Penawaran
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CariBuyer;
