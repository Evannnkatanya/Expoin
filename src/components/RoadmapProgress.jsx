import React from 'react';
import { Check, Clock, Lock } from 'lucide-react';

const RoadmapProgress = ({ steps }) => {
  return (
    <div className="py-4">
      <div className="relative flex justify-between">
        {/* Progress Line */}
        <div className="absolute top-5 left-0 w-full h-1 bg-slate-100 -z-10"></div>
        <div 
          className="absolute top-5 left-0 h-1 bg-primary-blue -z-10 transition-all duration-500"
          style={{ width: '50%' }}
        ></div>

        {steps.map((step, index) => {
          let Icon = Lock;
          let bgColor = "bg-slate-100";
          let textColor = "text-slate-400";
          let iconColor = "text-slate-400";

          if (step.status === 'completed') {
            Icon = Check;
            bgColor = "bg-accent-green";
            textColor = "text-slate-800";
            iconColor = "text-white";
          } else if (step.status === 'active') {
            Icon = Clock;
            bgColor = "bg-primary-blue";
            textColor = "text-primary-blue font-bold";
            iconColor = "text-white";
          }

          return (
            <div key={step.id} className="flex flex-col items-center gap-2 w-16">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${bgColor} ${iconColor} shadow-sm transition-colors duration-300`}>
                <Icon size={18} />
              </div>
              <div className="text-center">
                <div className="text-[10px] text-slate-400 mb-0.5">{step.id}</div>
                <div className={`text-[10px] leading-tight ${textColor}`}>
                  {step.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 flex items-center justify-between">
        <div className="flex-1 mr-4">
          <div className="flex justify-between text-xs mb-1">
            <span className="font-medium text-slate-600">Progres Anda</span>
            <span className="font-bold text-primary-blue">50%</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-primary-blue rounded-full" style={{ width: '50%' }}></div>
          </div>
        </div>
        <button className="bg-primary-blue hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-xl transition-colors">
          Lanjutkan Roadmap
        </button>
      </div>
    </div>
  );
};

export default RoadmapProgress;
