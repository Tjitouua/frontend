import React from 'react';
import { FileText, ClipboardCheck, Info } from 'lucide-react';
import { FormData } from '../../types';

interface GrantStepProps {
  formData: FormData;
}

const GrantStep: React.FC<GrantStepProps> = ({ formData }) => {
  return (
    <div className="py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
        <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mb-6 shadow-inner">
          <ClipboardCheck size={40} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Grant Specification</h3>
        <p className="text-gray-500 mt-2">
          Please confirm the specific details for your <span className="text-primary font-bold">{formData.grantType || 'application'}</span>.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-100 flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-primary shrink-0">
            <Info size={20} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Additional Requirements</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Based on the grant type selected, you may be required to provide medical certificates or proof of income in the next steps.
            </p>
          </div>
        </div>
        
        <div className="p-12 text-center">
          <FileText size={48} className="mx-auto text-gray-200 mb-4" />
          <p className="text-gray-400 italic text-sm">Dynamic grant-specific questions will be loaded here...</p>
        </div>
      </div>
    </div>
  );
};

export default GrantStep;
