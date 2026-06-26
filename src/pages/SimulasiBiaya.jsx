import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calculator, Info, TrendingUp, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SimulasiBiaya = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState('kopi');
  const [weight, setWeight] = useState(1000);
  const [destination, setDestination] = useState('jp');

  const [costs, setCosts] = useState({
    production: 35000000,
    packaging: 2000000,
    logistics: 15000000,
    insurance: 500000,
    documents: 1500000,
    misc: 1500000,
    total: 55500000
  });

  const [estimations, setEstimations] = useState({
    sales: 75000000,
    netProfit: 19500000,
    margin: 26
  });

  // Recalculate costs dynamically
  useEffect(() => {
    // Base multipliers per kg
    let baseProduction = 35000;
    let basePackaging = 2000;
    let baseLogistics = 15000; // base to Japan
    let baseInsurance = 500;
    let baseDocs = 1500;
    let baseMisc = 1500;
    let baseSellingPrice = 75000;

    // Adjust based on product
    if (product === 'teh') {
      baseProduction = 28000;
      baseSellingPrice = 62000;
    } else if (product === 'rempah') {
      baseProduction = 55000;
      baseSellingPrice = 110000;
    }

    // Adjust logistics based on destination
    if (destination === 'de') {
      baseLogistics = 22000;
    } else if (destination === 'us') {
      baseLogistics = 25000;
    } else if (destination === 'kr') {
      baseLogistics = 12000;
    } else if (destination === 'au') {
      baseLogistics = 14000;
    }

    const prodCost = baseProduction * weight;
    const packCost = basePackaging * weight;
    const logCost = baseLogistics * weight;
    const insCost = baseInsurance * weight;
    const docCost = baseDocs * weight;
    const miscCost = baseMisc * weight;
    
    const totalCost = prodCost + packCost + logCost + insCost + docCost + miscCost;
    const salesRev = baseSellingPrice * weight;
    const profit = salesRev - totalCost;
    const profitMargin = Math.round((profit / salesRev) * 100);

    setCosts({
      production: prodCost,
      packaging: packCost,
      logistics: logCost,
      insurance: insCost,
      documents: docCost,
      misc: miscCost,
      total: totalCost
    });

    setEstimations({
      sales: salesRev,
      netProfit: profit,
      margin: isNaN(profitMargin) ? 0 : profitMargin
    });
  }, [product, weight, destination]);

  const formatRupiah = (num) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(num);
  };

  return (
    <div className="pb-24 md:pb-8">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center gap-3 mb-6">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors">
          <ArrowLeft size={20} className="text-slate-700" />
        </button>
        <h1 className="text-lg font-bold text-slate-800">Simulasi Biaya</h1>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Simulasi Biaya Ekspor</h1>
        <p className="text-slate-500">Estimasikan rincian biaya pengapalan dan keuntungan bersih Anda secara instan</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Inputs & Cost Breakdown */}
        <div className="lg:col-span-2 space-y-6">
          {/* Form Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Produk</label>
                <select 
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 text-slate-700 text-sm font-medium focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option value="kopi">Kopi Robusta</option>
                  <option value="teh">Teh Hijau</option>
                  <option value="rempah">Rempah-rempah</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Berat (kg)</label>
                <input 
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 text-slate-700 text-sm font-medium focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Negara Tujuan</label>
                <select 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 text-slate-700 text-sm font-medium focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option value="jp">Jepang 🇯🇵</option>
                  <option value="de">Jerman 🇩🇪</option>
                  <option value="us">Amerika Serikat 🇺🇸</option>
                  <option value="kr">Korea Selatan 🇰🇷</option>
                  <option value="au">Australia 🇦🇺</option>
                </select>
              </div>
            </div>
          </div>

          {/* Rincian Biaya */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 text-base mb-4">Rincian Biaya</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Biaya Produksi</span>
                <span className="font-semibold text-slate-800">{formatRupiah(costs.production)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Packaging</span>
                <span className="font-semibold text-slate-800">{formatRupiah(costs.packaging)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Logistik (Freight)</span>
                <span className="font-semibold text-slate-800">{formatRupiah(costs.logistics)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Asuransi</span>
                <span className="font-semibold text-slate-800">{formatRupiah(costs.insurance)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Dokumen & Perizinan</span>
                <span className="font-semibold text-slate-800">{formatRupiah(costs.documents)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Biaya Lain-lain</span>
                <span className="font-semibold text-slate-800">{formatRupiah(costs.misc)}</span>
              </div>
              
              <div className="border-t border-slate-100 pt-4 mt-2 flex justify-between items-center">
                <span className="font-bold text-sm text-slate-800">Total Biaya</span>
                <span className="font-extrabold text-base text-blue-600">{formatRupiah(costs.total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Sidebar Card */}
        <div className="space-y-6">
          {/* Result Card */}
          <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-slate-800 text-sm mb-5 flex items-center gap-1.5">
              <TrendingUp className="text-emerald-600" size={18} />
              Hasil Estimasi
            </h3>

            <div className="space-y-4 mb-6">
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Estimasi Penjualan</div>
                <div className="font-extrabold text-slate-700 text-lg">{formatRupiah(estimations.sales)}</div>
              </div>
              
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Estimasi Laba Bersih</div>
                <div className="font-extrabold text-emerald-600 text-xl">{formatRupiah(estimations.netProfit)}</div>
              </div>

              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Margin Keuntungan</div>
                <div className="font-extrabold text-emerald-600 text-xl">{estimations.margin}%</div>
              </div>
            </div>

            <div className="bg-white/80 border border-emerald-200/40 rounded-xl p-4 flex gap-2">
              <Info className="text-emerald-600 shrink-0 mt-0.5" size={14} />
              <p className="text-[10px] text-slate-500 leading-relaxed">
                Estimasi ini menggunakan harga jual dan tarif kargo saat ini. Hasil akhir dapat bervariasi tergantung fluktuasi nilai tukar mata uang dan perubahan biaya logistik global.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulasiBiaya;
