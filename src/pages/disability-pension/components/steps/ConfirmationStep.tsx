import React from 'react';
import { CheckCircle2, ShieldCheck, FileText, AlertTriangle } from 'lucide-react';
import { FormData } from '../../types';

interface ConfirmationStepProps {
  formData: FormData;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({ formData }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 animate-in zoom-in-95 duration-500">
      <div className="relative mb-10">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center shadow-inner">
          <CheckCircle2 size={48} className="text-green-500" />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-lg">
          <ShieldCheck className="text-primary" size={24} />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-gray-900 mb-3">Review & Submit</h2>
      <p className="text-gray-500 max-w-md text-center mb-10 leading-relaxed">
        You are almost there! Please take a moment to verify your information for the 
        <span className="text-primary font-bold"> {formData.grantType || 'Disability Grant'}</span>.
      </p>
      
      <div className="w-full max-w-2xl bg-white border border-gray-100 rounded-3xl shadow-xl overflow-hidden mb-10">
        <div className="bg-gray-50/50 px-8 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-700 font-bold text-sm uppercase tracking-widest">
            <FileText size={16} className="text-primary" />
            Application Summary
          </div>
          <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-1 rounded">READY</span>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
              <p className="text-lg font-bold text-gray-900">{formData.firstName || 'Not provided'} {formData.lastName}</p>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Identification</label>
              <p className="text-lg font-bold text-gray-900">{formData.idNumber || 'Not provided'}</p>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Grant Category</label>
              <p className="text-lg font-bold text-primary">{formData.grantType || 'Not selected'}</p>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Payment Method</label>
              <p className="text-lg font-bold text-gray-900">EFT (Bank Deposit)</p>
            </div>
          </div>
        </div>

        <div className="px-8 py-6 bg-orange-50/50 border-t border-orange-100 flex gap-4 items-start">
          <AlertTriangle size={20} className="text-orange-500 shrink-0" />
          <p className="text-xs text-orange-800 leading-relaxed">
            By submitting this application, you declare that all information provided is true and correct to the best of your knowledge. Providing false information is a punishable offense.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationStep;
