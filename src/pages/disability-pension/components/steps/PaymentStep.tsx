import React from 'react';
import { FormData } from '../../types';
import { ChevronDown, CreditCard, Building2, Hash } from 'lucide-react';

interface PaymentStepProps {
  formData: FormData;
  onUpdateField: (field: keyof FormData, value: string) => void;
}

const PaymentStep: React.FC<PaymentStepProps> = ({ formData, onUpdateField }) => {
  return (
    <div className="space-y-10 py-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          <CreditCard className="text-primary" size={28} />
          Banking Details
        </h2>
        <p className="text-gray-500 mt-2 text-sm">Please provide the account details where the grant should be paid.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bank Selection */}
        <div className="space-y-2.5">
          <label className="text-xs font-bold text-gray-600 uppercase tracking-wider flex items-center gap-2">
            <Building2 size={14} className="text-primary" />
            Bank Name
          </label>
          <div className="relative group">
            <select 
              value={formData.bankName}
              onChange={(e) => onUpdateField('bankName', e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none bg-white appearance-none cursor-pointer transition-all text-sm font-medium"
            >
              <option value="">Select Bank</option>
              <option value="fnb">First National Bank</option>
              <option value="bankwindhoek">Bank Windhoek</option>
              <option value="nedbank">Nedbank Namibia</option>
              <option value="standard">Standard Bank</option>
              <option value="bankbic">Bank BIC Namibia</option>
              <option value="trustco">Trustco Bank</option>
            </select>
            <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-primary transition-colors" />
          </div>
        </div>

        {/* Account Number */}
        <div className="space-y-2.5">
          <label className="text-xs font-bold text-gray-600 uppercase tracking-wider flex items-center gap-2">
            <Hash size={14} className="text-primary" />
            Account Number
          </label>
          <input 
            type="text" 
            value={formData.accountNumber}
            onChange={(e) => onUpdateField('accountNumber', e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all text-sm font-medium placeholder:text-gray-400"
            placeholder="e.g. 622 456 789"
          />
        </div>
      </div>

      {/* Security Info */}
      <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 flex gap-4">
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm shrink-0 border border-blue-100">
          <CreditCard size={20} />
        </div>
        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-1">Secure Payment Processing</h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            Your banking information is encrypted and handled securely. Payments will be automatically deposited into this account upon approval of your application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentStep;
