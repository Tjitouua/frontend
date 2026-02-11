import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  Calendar, 
  ShieldCheck, 
  User,
  Clock,
  CheckCircle2,
  AlertCircle,
  X,
  FileText,
  Save,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FormData, Person } from '../../types';

interface GrantStepProps {
  formData: FormData;
  persons: Person[];
  onUpdateFormData: (data: Partial<FormData>) => void;
  onOpenModal: (type: 'Permanent' | 'Temporary') => void;
}

const GrantStep: React.FC<GrantStepProps> = ({ formData, persons, onUpdateFormData, onOpenModal }) => {
  const applicant = persons.find(p => p.capacity === 'Applicant');

  const inputClasses = "w-full px-4 py-2.5 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400 bg-white";
  const labelClasses = "text-xs font-bold text-gray-600 mb-1.5 flex items-center gap-1";

  return (
    <div className="py-4 animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
      {/* Step Header */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-2">
        <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-4 shadow-inner">
          <ClipboardCheck size={32} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Grant Specification</h3>
        <p className="text-gray-500 mt-2 font-medium">
          Select the type of disability grant you are applying for and confirm the details.
        </p>
      </div>

      {/* Applicant Info Summary */}
      <div className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-100 flex items-center gap-2">
          <User size={16} className="text-primary" />
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Applicant Details</span>
        </div>
        <div className="p-6">
          {applicant ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Full Name</p>
                <p className="text-sm font-bold text-gray-900">{applicant.name} {applicant.surname}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Identifier Number</p>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-green-500" />
                  <p className="text-sm font-bold text-gray-900 tabular-nums">{applicant.idNumber}</p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Date of Birth</p>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={14} />
                  <p className="text-sm font-bold">{applicant.dob}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 text-amber-600 bg-amber-50 p-4 rounded-md border border-amber-100">
              <AlertCircle size={20} />
              <p className="text-sm font-bold">No applicant has been registered in the previous step.</p>
            </div>
          )}
        </div>
      </div>

      {/* Grant Selection Buttons */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 px-2">
          <div className="h-6 w-1.5 bg-primary rounded-full"></div>
          <h4 className="font-bold text-gray-900 text-lg">Grant Eligibility Selection</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Permanent Grant Button */}
          <button
            onClick={() => onOpenModal('Permanent')}
            className={`group relative overflow-hidden py-4 px-6 rounded-lg border transition-all duration-500 text-left hover:-translate-y-1 flex flex-col ${
              formData.grantType === 'Permanent'
                ? 'border-primary bg-white shadow-lg shadow-blue-100'
                : 'border-gray-200 bg-white shadow-sm hover:border-primary hover:shadow-2xl'
            }`}
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck size={80} className="text-primary" />
            </div>
            <div className="relative z-10 flex flex-col">
              {formData.grantType === 'Permanent' && (
                <div className="absolute top-0 right-0 text-primary">
                  <CheckCircle2 size={20} fill="currentColor" className="text-white" />
                </div>
              )}
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 transition-all group-hover:scale-110 group-hover:shadow-md ${
                formData.grantType === 'Permanent' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white'
              }`}>
                <ShieldCheck size={18} />
              </div>
              <h5 className="text-base font-bold text-gray-900 mb-0.5 tracking-tight">Permanent Disability</h5>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                For individuals with permanent functional limitations as certified by a medical board.
              </p>
              <div className="mt-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-primary">
                <span>Legacy Code: 22</span>
              </div>
            </div>
          </button>

          {/* Temporary Grant Button */}
          <button
            onClick={() => onOpenModal('Temporary')}
            className={`group relative overflow-hidden py-4 px-6 rounded-lg border transition-all duration-500 text-left hover:-translate-y-1 flex flex-col ${
              formData.grantType === 'Temporary'
                ? 'border-orange-500 bg-white shadow-lg shadow-orange-100'
                : 'border-gray-200 bg-white shadow-sm hover:border-orange-400 hover:shadow-2xl'
            }`}
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Clock size={80} className="text-orange-500" />
            </div>
            <div className="relative z-10 flex flex-col">
              {formData.grantType === 'Temporary' && (
                <div className="absolute top-0 right-0 text-orange-500">
                  <CheckCircle2 size={20} fill="currentColor" className="text-white" />
                </div>
              )}
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 transition-all group-hover:scale-110 group-hover:shadow-md ${
                formData.grantType === 'Temporary' 
                  ? 'bg-orange-500 text-white shadow-md' 
                  : 'bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white'
              }`}>
                <Clock size={18} />
              </div>
              <h5 className="text-base font-bold text-gray-900 mb-0.5 tracking-tight">Temporary Disability</h5>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">
                For temporary disabilities requiring support for a specific duration (up to 12 months).
              </p>
              <div className="mt-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-orange-600">
                <span>Legacy Code: 05</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GrantStep;
