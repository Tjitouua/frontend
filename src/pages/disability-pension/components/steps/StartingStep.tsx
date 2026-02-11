import React from 'react';
import { 
  Info, 
  Building2, 
  Shield, 
  Users, 
  HeartPulse, 
  Landmark 
} from 'lucide-react';

const StartingStep: React.FC = () => {
  return (
    <div className="space-y-8 py-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative overflow-hidden bg-primary-dark rounded-lg p-8 text-white shadow-2xl border border-white/10 group">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Welcome to <span className="text-blue-400">ISAS</span></h2>
          <p className="text-blue-100 text-lg leading-relaxed max-w-3xl font-light">
            The <span className="font-semibold text-white">Integrated Social Assistance System</span> is Namibia's digital gateway for social welfare services, streamlining enrollment and fund disbursement.
          </p>
          <div className="mt-10 flex items-start gap-4 bg-white/10 p-6 rounded-lg border border-white/10 backdrop-blur-md shadow-inner">
            <div className="p-2.5 bg-blue-500/20 rounded-lg text-blue-300">
              <Info size={24} />
            </div>
            <p className="text-base font-medium text-blue-50 leading-relaxed">
              Our system integrates multiple government agencies to ensure fast, transparent, and accurate eligibility verification for all citizens.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-gray-900 font-bold text-2xl flex items-center gap-3">
            <Building2 className="text-primary" size={28} />
            Integrated Institutions
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'MHAI', desc: 'Home Affairs', icon: Shield, color: 'text-blue-600', bg: 'bg-blue-50' },
            { name: 'SSC', desc: 'Social Security', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
            { name: 'MoHSS', desc: 'Ministry of Health', icon: HeartPulse, color: 'text-red-600', bg: 'bg-red-50' },
            { name: 'NamRA', desc: 'Revenue Agency', icon: Landmark, color: 'text-amber-600', bg: 'bg-amber-50' },
          ].map((inst) => (
            <div key={inst.name} className="p-5 rounded-lg border border-gray-100 bg-white flex flex-col gap-3 transition-all hover:border-primary hover:shadow-xl hover:-translate-y-1 group cursor-default">
              <div className={`p-2.5 ${inst.bg} ${inst.color} rounded-lg w-fit shadow-sm group-hover:scale-110 transition-transform`}>
                <inst.icon size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg leading-tight">{inst.name}</h4>
                <p className="text-sm text-gray-500 font-medium">{inst.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartingStep;
