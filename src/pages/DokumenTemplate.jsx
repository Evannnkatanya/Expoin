import React, { useState } from 'react';
import { ArrowLeft, Search, FileText, Download, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DokumenTemplate = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('Semua');

  const tabs = ['Semua', 'Dokumen Wajib', 'Perizinan', 'Kontrak'];

  const documents = [
    { id: 1, name: 'Invoice', category: 'Dokumen Wajib', type: 'PDF', size: '150 KB' },
    { id: 2, name: 'Packing List', category: 'Dokumen Wajib', type: 'PDF', size: '120 KB' },
    { id: 3, name: 'Certificate of Origin (COO)', category: 'Perizinan', type: 'PDF', size: '320 KB' },
    { id: 4, name: 'Bill of Lading (B/L)', category: 'Perizinan', type: 'PDF', size: '410 KB' },
    { id: 5, name: 'Kontrak Dagang (Sales Contract)', category: 'Kontrak', type: 'DOCX', size: '95 KB' },
    { id: 6, name: 'Phytosanitary Certificate', category: 'Perizinan', type: 'PDF', size: '540 KB' },
    { id: 7, name: 'Certificate of Analysis (CoA)', category: 'Perizinan', type: 'PDF', size: '280 KB' },
  ];

  const filteredDocs = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase());
    const matchesTab = activeTab === 'Semua' || doc.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="pb-24 md:pb-8">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center gap-3 mb-6">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors">
          <ArrowLeft size={20} className="text-slate-700" />
        </button>
        <h1 className="text-lg font-bold text-slate-800">Dokumen & Template</h1>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Dokumen & Template Ekspor</h1>
        <p className="text-slate-500">Unduh draf, formulir, dan regulasi resmi pendukung administrasi ekspor</p>
      </div>

      {/* Search Input */}
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text"
            placeholder="Cari dokumen atau template..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-2.5 bg-slate-50 border border-slate-150 rounded-xl text-slate-805 text-sm outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-4 -mx-4 px-4 scrollbar-none">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
              activeTab === tab 
                ? 'bg-blue-600 border-blue-600 text-white shadow-sm' 
                : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Documents List */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden divide-y divide-slate-100">
        {filteredDocs.length > 0 ? (
          filteredDocs.map((doc) => (
            <div key={doc.id} className="p-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  doc.type === 'PDF' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-600'
                }`}>
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-850 text-sm">{doc.name}</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] text-slate-400 font-semibold">{doc.category}</span>
                    <span className="text-[8px] bg-slate-100 px-1 rounded text-slate-450 font-bold">{doc.size}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase ${
                  doc.type === 'PDF' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-blue-50 text-blue-700 border border-blue-100'
                }`}>
                  {doc.type}
                </span>
                <button className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-650 hover:text-blue-600 border border-slate-200 transition-all">
                  <Download size={14} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="p-12 text-center text-slate-400">
            <p className="font-bold text-sm">Tidak Ada Dokumen Ditemukan</p>
            <p className="text-xs mt-1 text-slate-400">Silakan sesuaikan kata kunci pencarian Anda.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DokumenTemplate;
