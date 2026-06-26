import React from 'react';
import { Search, ChevronRight, Globe, CheckCircle, Map, Calculator, Users, MessageSquare, FileText, User, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SummaryCard from '../components/SummaryCard';
import TrendChart from '../components/TrendChart';
import CountryCard from '../components/CountryCard';
import RoadmapProgress from '../components/RoadmapProgress';
import { dashboardSummary, trendData, topCountries, roadmapSteps, exportNews, userProfile } from '../data/mockData';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Dashboard = ({ isMobile = false }) => {
  const navigate = useNavigate();

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
  };

  const donutData = [
    { name: 'Kesiapan', value: 78 },
    { name: 'Sisa', value: 22 }
  ];
  const COLORS = ['#2563EB', '#E2E8F0'];

  const quickAccess = [
    { icon: <Globe size={24} />, label: 'Market Analyzer', bg: 'bg-blue-100 text-blue-600', link: '/market-analyzer' },
    { icon: <CheckCircle size={24} />, label: 'Export Readiness', bg: 'bg-green-100 text-green-600', link: '/export-readiness' },
    { icon: <Map size={24} />, label: 'Roadmap Ekspor', bg: 'bg-purple-100 text-purple-600', link: '/roadmap' },
    { icon: <Calculator size={24} />, label: 'Simulasi Biaya', bg: 'bg-orange-100 text-orange-600', link: '/simulasi' },
    { icon: <Users size={24} />, label: 'Cari Buyer', bg: 'bg-teal-100 text-teal-600', link: '/cari-buyer' },
    { icon: <MessageSquare size={24} />, label: 'AI Assistant', bg: 'bg-indigo-100 text-indigo-600', link: '/ai-assistant' }
  ];

  // ==========================================
  // MOBILE VIEW PORTION
  // ==========================================
  if (isMobile) {
    const mobileMenu = [
      { icon: <Globe size={22} className="text-blue-600" />, label: 'Market Analyzer', path: '/market-analyzer' },
      { icon: <CheckCircle size={22} className="text-emerald-600" />, label: 'Export Readiness', path: '/export-readiness' },
      { icon: <Map size={22} className="text-purple-600" />, label: 'Roadmap Ekspor', path: '/roadmap' },
      { icon: <Calculator size={22} className="text-orange-500" />, label: 'Simulasi Biaya', path: '/simulasi' },
      { icon: <Users size={22} className="text-teal-600" />, label: 'Cari Buyer', path: '/cari-buyer' },
      { icon: <MessageSquare size={22} className="text-indigo-600" />, label: 'AI Export Assistant', path: '/ai-assistant' },
      { icon: <FileText size={22} className="text-red-500" />, label: 'Dokumen & Template', path: '/dokumen' },
      { icon: <User size={22} className="text-slate-600" />, label: 'Profil & Pengaturan', path: '/profil' },
    ];

    return (
      <div className="space-y-6 pb-6">
        {/* Welcome Section */}
        <div>
          <h2 className="text-lg font-extrabold text-slate-800 leading-tight">Halo, {userProfile.name}! 👋</h2>
          <p className="text-xs text-slate-400 font-medium">Siap ekspor hari ini?</p>
        </div>

        {/* Mobile Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Cari produk, negara, atau fitur..." 
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-150 rounded-xl text-xs text-slate-800 outline-none focus:ring-2 focus:ring-blue-400 transition-all font-medium"
          />
        </div>

        {/* Radial Export Success Score Panel */}
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm flex items-center gap-4">
          {/* Custom SVG Radial Gauge */}
          <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-100"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-emerald-500"
                strokeWidth="3.5"
                strokeDasharray="87, 100"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute font-extrabold text-sm text-slate-800">87%</div>
          </div>

          <div>
            <h4 className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Export Success Score</h4>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="font-extrabold text-slate-850 text-base">87</span>
              <span className="text-xs text-slate-400 font-bold">/100</span>
            </div>
            <p className="text-[10px] text-slate-550 font-bold mt-1">
              Peluang Sukses: <span className="text-emerald-600">Tinggi</span>
            </p>
          </div>
        </div>

        {/* Stats Grid (2x2) */}
        <div className="grid grid-cols-2 gap-3.5">
          <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
              <Globe size={16} />
            </div>
            <div>
              <p className="text-[9px] text-slate-400 font-bold">Produk Dianalisis</p>
              <h5 className="font-extrabold text-slate-850 text-sm mt-0.5">12</h5>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
              <CheckCircle size={16} />
            </div>
            <div>
              <p className="text-[9px] text-slate-400 font-bold">Negara Potensial</p>
              <h5 className="font-extrabold text-slate-850 text-sm mt-0.5">24</h5>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
              <Map size={16} />
            </div>
            <div>
              <p className="text-[9px] text-slate-400 font-bold">Roadmap Aktif</p>
              <h5 className="font-extrabold text-slate-850 text-sm mt-0.5">3</h5>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
              <FileText size={16} />
            </div>
            <div>
              <p className="text-[9px] text-slate-400 font-bold">Dokumen Disimpan</p>
              <h5 className="font-extrabold text-slate-850 text-sm mt-0.5">18</h5>
            </div>
          </div>
        </div>

        {/* Menu Utama (2x4 Grid) */}
        <div>
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Menu Utama</h3>
          <div className="grid grid-cols-2 gap-3">
            {mobileMenu.map((item, index) => (
              <div 
                key={index} 
                onClick={() => navigate(item.path)}
                className="bg-white border border-slate-100 hover:border-blue-200 rounded-xl p-3.5 flex flex-col justify-between items-start gap-4 shadow-sm active:scale-95 transition-all cursor-pointer group"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100/50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div className="flex items-center justify-between w-full">
                  <span className="text-[11px] font-bold text-slate-700 leading-tight">{item.label}</span>
                  <ArrowUpRight size={12} className="text-slate-350 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // DESKTOP VIEW PORTION
  // ==========================================
  return (
    <div className="pb-20 md:pb-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Selamat datang kembali, {userProfile.name}! 👋</h1>
          <p className="text-slate-500">Pantau progres ekspor dan temukan peluang terbaik untuk produk Anda.</p>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => navigate('/notifikasi')}
            className="relative p-2 bg-white rounded-full border border-slate-200 hover:bg-slate-50"
          >
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <SummaryCard 
          title="Export Success Score" 
          value={`${dashboardSummary.exportScore}/100`} 
          subtitle="Peluang Sukses: Tinggi" 
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>}
          colorClass="bg-primary-blue"
        />
        <SummaryCard 
          title="Negara Potensial" 
          value={`${dashboardSummary.potentialCountries} Negara`} 
          subtitle="Tersedia untuk Kopi Robusta" 
          icon={<Globe size={28} />}
          colorClass="bg-teal-500"
        />
        <SummaryCard 
          title="Roadmap Aktif" 
          value={`${dashboardSummary.activeRoadmaps} Roadmap`} 
          subtitle="Sedang berjalan" 
          icon={<Map size={28} />}
          colorClass="bg-purple-500"
        />
        <SummaryCard 
          title="Estimasi Keuntungan" 
          value={formatRupiah(dashboardSummary.estimatedProfit)} 
          subtitle="Berdasarkan simulasi terakhir" 
          icon={<Calculator size={28} />}
          colorClass="bg-accent-orange"
        />
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary-navy to-primary-blue rounded-2xl p-8 text-white mb-8 relative overflow-hidden shadow-lg">
        <div className="relative z-10 md:w-2/3">
          <h2 className="text-2xl font-bold mb-2">Mulai Analisis Pasar Global</h2>
          <p className="text-white/80 mb-6">Temukan negara potensial dan peluang ekspor untuk produk Anda sekarang!</p>
          
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Cari produk, HS Code, atau negara..." 
                className="w-full pl-12 pr-4 py-3 rounded-xl text-slate-850 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button 
              onClick={() => navigate('/market-analyzer')}
              className="bg-accent-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
            >
              Analisis Sekarang <ChevronRight size={18} />
            </button>
          </div>
        </div>
        {/* Background Graphic */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none hidden md:block">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.4C91.4,-33.7,98.1,-18.4,98.8,-2.8C99.5,12.8,94.2,28.8,84.7,42C75.2,55.2,61.4,65.6,46.5,72.4C31.6,79.2,15.8,82.4,0.4,81.7C-15.1,81,-30.2,76.4,-44.1,69.1C-58,61.8,-70.7,51.8,-79.8,39.3C-88.9,26.8,-94.4,11.8,-95.1,-3.5C-95.8,-18.8,-91.7,-34.5,-82.6,-47C-73.5,-59.5,-59.4,-68.8,-45.1,-75.8C-30.8,-82.8,-15.4,-87.5,0.6,-88.6C16.6,-89.7,30.5,-83.6,44.7,-76.4Z" transform="translate(100 100) scale(1.1)" />
          </svg>
        </div>
      </div>

      {/* Quick Access */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Akses Cepat</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {quickAccess.map((item, index) => (
            <a 
              key={index} 
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                navigate(item.link);
              }}
              className="bg-white rounded-xl p-4 flex flex-col items-center justify-center gap-3 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.bg} group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <span className="text-xs font-medium text-slate-600 text-center">{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Trend Chart */}
        <div className="lg:col-span-2">
          <TrendChart 
            title="Tren Pasar Global" 
            subtitle="Permintaan Global Kopi Robusta" 
            data={trendData} 
            growth="+12% Pertumbuhan Tahunan"
          />
        </div>

        {/* Top Countries */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-slate-800">Top 3 Negara Potensial</h3>
            <button onClick={() => navigate('/market-analyzer')} className="text-primary-blue text-sm font-medium hover:underline">Lihat Semua</button>
          </div>
          <div className="flex flex-col">
            {topCountries.slice(0,3).map((country, idx) => (
              <CountryCard 
                key={country.id}
                rank={idx + 1}
                flag={country.flag}
                name={country.name}
                score={country.score}
                price={country.price}
                trendData={country.trend}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Roadmap Aktif */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold text-lg text-slate-800">Roadmap Aktif Anda</h3>
              <p className="text-sm text-slate-500 font-medium flex items-center gap-2">
                Kopi Robusta <ChevronRight size={14} /> Jepang 🇯🇵
              </p>
            </div>
            <button onClick={() => navigate('/roadmap')} className="text-primary-blue text-sm font-medium hover:underline">Lihat Detail</button>
          </div>
          <RoadmapProgress steps={roadmapSteps} />
        </div>

        {/* Cek Kesiapan Ekspor */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col justify-center items-center">
          <h3 className="font-bold text-lg text-slate-800 mb-6 self-start">Cek Kesiapan Ekspor</h3>
          <div className="relative w-48 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donutData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  stroke="none"
                >
                  {donutData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-primary-navy">78%</span>
            </div>
          </div>
          <div className="text-center mt-4 mb-6">
            <p className="font-bold text-primary-blue bg-blue-50 px-4 py-1.5 rounded-full inline-block">Siap Dibina Menuju Ekspor</p>
          </div>
          <button 
            onClick={() => navigate('/export-readiness')}
            className="w-full border border-slate-200 text-slate-650 hover:bg-slate-50 font-medium py-2 px-4 rounded-xl transition-colors"
          >
            Lihat Detail Kesiapan
          </button>
        </div>
      </div>

      {/* Berita Ekspor */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-lg text-slate-850">Berita & Update Ekspor</h3>
          <button onClick={() => navigate('/notifikasi')} className="text-primary-blue text-sm font-medium hover:underline">Lihat Semua</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exportNews.map(news => (
            <div key={news.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="h-40 overflow-hidden">
                <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-primary-blue transition-colors">{news.title}</h4>
                <p className="text-xs text-slate-400">{news.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
