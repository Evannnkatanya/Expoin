import React, { useState } from 'react';
import { Search, Info, TrendingUp, Globe, BarChart2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { topCountries } from '../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const MarketAnalyzer = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState('kopi');
  const [hsCode, setHsCode] = useState('0901.11');
  const [country, setCountry] = useState('');
  const [isAnalyzed, setIsAnalyzed] = useState(true); // Pre-analyzed to show data like Screen 4

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (product) {
      setIsAnalyzed(true);
    }
  };

  const barData = topCountries.map(c => ({
    name: c.name,
    score: c.score,
    flag: c.flag
  }));

  const CustomYAxisTick = ({ x, y, payload }) => {
    const country = topCountries.find(c => c.name === payload.value);
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={4} textAnchor="end" fill="#64748B" fontSize={11}>
          {country?.flag} {payload.value}
        </text>
      </g>
    );
  };

  return (
    <div className="pb-24 md:pb-8">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center gap-3 mb-6">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors">
          <ArrowLeft size={20} className="text-slate-700" />
        </button>
        <h1 className="text-lg font-bold text-slate-800">Market Analyzer</h1>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Market Analyzer</h1>
        <p className="text-slate-500">Temukan pasar ekspor terbaik untuk produk Anda</p>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 mb-6">
        <form onSubmit={handleAnalyze}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Produk *</label>
              <select 
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 text-slate-705 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 outline-none"
                required
              >
                <option value="kopi">Kopi Robusta</option>
                <option value="teh">Teh Hijau</option>
                <option value="rempah">Rempah-rempah</option>
              </select>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                HS Code <span className="text-slate-400 font-normal">(Opsional)</span>
                <Info size={12} className="text-slate-400" />
              </label>
              <input 
                type="text" 
                value={hsCode}
                onChange={(e) => setHsCode(e.target.value)}
                placeholder="Contoh: 0901.11"
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 text-slate-705 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Negara Tujuan</label>
              <select 
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 text-slate-750 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 outline-none"
              >
                <option value="">Semua Negara</option>
                <option value="jp">Jepang</option>
                <option value="de">Jerman</option>
                <option value="us">Amerika Serikat</option>
                <option value="kr">Korea Selatan</option>
                <option value="au">Australia</option>
              </select>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold py-3 px-4 rounded-xl flex justify-center items-center gap-2 transition-all active:scale-95 cursor-pointer shadow-sm"
          >
            <Search size={16} />
            Analisis Sekarang
          </button>
        </form>
      </div>

      {/* Results Section */}
      {isAnalyzed && (
        <div className="space-y-6 animate-in fade-in duration-300">
          
          {/* Summary Box */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
            <h3 className="font-bold text-slate-800 text-sm mb-4 border-b border-slate-55 pb-3">Ringkasan Hasil</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-slate-50/60 border border-slate-100 rounded-xl p-3.5">
                <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Globe size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Permintaan Global</div>
                  <div className="font-bold text-xs text-emerald-600">Tinggi</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-slate-50/60 border border-slate-100 rounded-xl p-3.5">
                <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <TrendingUp size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Pertumbuhan</div>
                  <div className="font-bold text-xs text-emerald-600">+12% / Thn</div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Visual Layout vs Mobile Layout */}
          <div className="block md:hidden">
            {/* Mobile country ranking list (Screen 4) */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-4 flex items-center gap-1.5">
                <BarChart2 size={16} className="text-blue-600"/>
                Top 5 Negara Potensial
              </h3>

              <div className="space-y-4">
                {topCountries.map((c, index) => (
                  <div key={c.id} className="flex items-center justify-between gap-3 p-3 rounded-xl border border-slate-50 bg-slate-50/40">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-bold text-slate-400 w-4">{index + 1}</span>
                      <span className="text-2xl shrink-0">{c.flag}</span>
                      <div>
                        <h4 className="font-bold text-slate-800 text-xs">{c.name}</h4>
                        <p className="text-[9px] text-slate-400 font-medium">Tarif: {c.tariff}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-blue-50 text-blue-700 font-extrabold text-[10px] px-2 py-0.5 rounded">
                        {c.score}/100
                      </span>
                      <p className="text-[9px] text-slate-450 font-bold mt-1">USD {c.price.toString().replace('.', ',')}/kg</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Desktop Bar Chart */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="font-bold text-slate-800 text-base mb-6 flex items-center gap-2">
                <BarChart2 size={18} className="text-blue-600"/>
                Top 5 Negara Potensial
              </h3>
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={barData}
                    margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#E2E8F0" />
                    <XAxis type="number" domain={[0, 100]} hide />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={<CustomYAxisTick />} width={80} />
                    <Tooltip 
                      cursor={{fill: '#F8FAFC'}}
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="score" radius={[0, 8, 8, 0]} barSize={20}>
                      {barData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? '#2563EB' : '#93C5FD'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-5 border-b border-slate-100">
                <h3 className="font-bold text-slate-800 text-base">Detail Negara Tujuan</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-[10px] text-slate-500 uppercase tracking-wider">
                      <th className="px-5 py-3.5 font-bold">Negara</th>
                      <th className="px-5 py-3.5 font-bold">Skor</th>
                      <th className="px-5 py-3.5 font-bold">Harga/kg</th>
                      <th className="px-5 py-3.5 font-bold">Tarif</th>
                      <th className="px-5 py-3.5 font-bold">Demand</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs divide-y divide-slate-100">
                    {topCountries.map((country) => (
                      <tr key={country.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-5 py-3.5 font-bold flex items-center gap-2">
                          <span className="text-lg">{country.flag}</span>
                          {country.name}
                        </td>
                        <td className="px-5 py-3.5 font-semibold">
                          <span className="inline-flex items-center justify-center bg-blue-50 text-blue-700 font-extrabold px-2 py-0.5 rounded">
                            {country.score}/100
                          </span>
                        </td>
                        <td className="px-5 py-3.5 font-bold text-slate-700">
                          USD {country.price.toString().replace('.', ',')}
                        </td>
                        <td className="px-5 py-3.5 text-slate-500">
                          {country.tariff}
                        </td>
                        <td className="px-5 py-3.5">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full font-bold text-[10px]
                            ${country.demand === 'Sangat Tinggi' ? 'bg-green-50 text-green-700' : 
                              country.demand === 'Tinggi' ? 'bg-blue-50 text-blue-700' : 'bg-orange-50 text-orange-700'}`}>
                            {country.demand}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default MarketAnalyzer;
