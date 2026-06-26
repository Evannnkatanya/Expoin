import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const CountryCard = ({ rank, flag, name, score, price, trendData }) => {
  const chartData = trendData.map((val, i) => ({ value: val, index: i }));

  return (
    <div className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0">
      <div className="flex items-center gap-4 w-1/3">
        <span className="text-slate-400 font-bold w-4">{rank}</span>
        <span className="text-2xl">{flag}</span>
        <span className="font-semibold text-slate-800">{name}</span>
      </div>
      
      <div className="w-1/4">
        <div className="text-xs text-slate-500">Skor</div>
        <div className="font-bold text-slate-800">{score} <span className="text-xs font-normal text-slate-500">/100</span></div>
      </div>
      
      <div className="w-1/4">
        <div className="text-xs text-slate-500">Harga</div>
        <div className="font-bold text-slate-800">USD {price.toString().replace('.', ',')} <span className="text-xs font-normal text-slate-500">/kg</span></div>
      </div>
      
      <div className="w-24 h-10">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#22C55E" 
              strokeWidth={2} 
              dot={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CountryCard;
