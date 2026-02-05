import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Save, Loader2, ChevronDown } from 'lucide-react';
import { ModalFormState, Person } from '../types';
import { COUNTRIES } from '../../../constants/countries';
import { LANGUAGES } from '../../../constants/languages';

interface PersonModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'Applicant' | 'Procurator' | null;
  modalForm: ModalFormState;
  setModalForm: React.Dispatch<React.SetStateAction<ModalFormState>>;
  onSave: () => void;
  isSaving: boolean;
}

const PersonModal: React.FC<PersonModalProps> = ({
  isOpen,
  onClose,
  type,
  modalForm,
  setModalForm,
  onSave,
  isSaving
}) => {
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleDateClick = () => {
    if (dateInputRef.current) {
      try {
        // @ts-ignore - showPicker is modern but not in all type definitions
        dateInputRef.current.showPicker();
      } catch (e) {
        dateInputRef.current.focus();
      }
    }
  };

  const inputClasses = "w-full px-4 py-2.5 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400 bg-white";
  const labelClasses = "text-xs font-bold text-gray-600 mb-1.5 flex items-center gap-1";
  const selectClasses = "w-full px-4 py-2.5 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white appearance-none cursor-pointer";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary-dark/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center px-8 py-5 border-b border-gray-100 bg-gray-50/50">
              <div>
                <h3 className="text-xl font-bold text-gray-900 leading-none">Person Details</h3>
                <p className="text-sm text-gray-500 mt-1.5 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-sm ${type === 'Applicant' ? 'bg-blue-500' : 'bg-orange-500'}`}></span>
                  Registering details for: <span className="font-semibold text-gray-700">{type}</span>
                </p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white hover:shadow-md rounded-md text-gray-400 hover:text-gray-600 transition-all border border-transparent hover:border-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 overflow-y-auto custom-scrollbar">
              <div className="space-y-8">
                {/* Header Section */}
                <div className="flex items-center justify-between bg-blue-50/50 px-6 py-4 rounded-md border border-blue-100/50">
                  <div className="flex gap-8">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">Update Status</label>
                      <span className="text-sm font-bold text-blue-700 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                        {modalForm.updateStatus}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">System Code</label>
                      <span className="text-sm font-bold text-gray-700">#{modalForm.code}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Capacity</label>
                      <span className="text-sm font-bold text-gray-700">{modalForm.capacityCode}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                  {/* First Name & Last Name */}
                  <div className="flex flex-col">
                    <label className={labelClasses}>First Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      placeholder="e.g. Samuel"
                      value={modalForm.firstName}
                      onChange={(e) => setModalForm(prev => ({ ...prev, firstName: e.target.value }))}
                      className={inputClasses}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className={labelClasses}>Last Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      placeholder="e.g. Simbili"
                      value={modalForm.lastName}
                      onChange={(e) => setModalForm(prev => ({ ...prev, lastName: e.target.value }))}
                      className={inputClasses}
                    />
                  </div>

                  {/* Maiden Name & Initials */}
                  <div className="flex flex-col">
                    <label className={labelClasses}>Maiden Name</label>
                    <input 
                      type="text" 
                      placeholder="Optional"
                      value={modalForm.maidenName}
                      onChange={(e) => setModalForm(prev => ({ ...prev, maidenName: e.target.value }))}
                      className={inputClasses}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className={labelClasses}>Initials <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      placeholder="e.g. S.S"
                      value={modalForm.initials}
                      onChange={(e) => setModalForm(prev => ({ ...prev, initials: e.target.value }))}
                      className={inputClasses}
                    />
                  </div>

                  {/* Date of Birth & Identity Type */}
                  <div className="flex flex-col">
                    <label className={labelClasses}>Date of Birth <span className="text-red-500">*</span></label>
                    <div className="relative group">
                      <input 
                        ref={dateInputRef}
                        type="date" 
                        value={modalForm.dob}
                        onChange={(e) => setModalForm(prev => ({ ...prev, dob: e.target.value }))}
                        className={`${inputClasses} cursor-pointer`}
                      />
                      <div 
                        onClick={handleDateClick}
                        className="absolute right-0 top-0 h-full aspect-square bg-gray-50 border-l border-gray-300 flex items-center justify-center text-gray-500 rounded-r-md cursor-pointer group-hover:bg-primary group-hover:text-white transition-all group-hover:border-primary"
                      >
                        <Calendar size={18} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className={labelClasses}>Identity Type <span className="text-red-500">*</span></label>
                    <div className="relative group">
                      <select 
                        value={modalForm.identityType}
                        onChange={(e) => setModalForm(prev => ({ ...prev, identityType: e.target.value }))}
                        className={selectClasses}
                      >
                        <option>IDENTITY DOCUMENT</option>
                        <option>PASSPORT</option>
                        <option>BIRTH CERTIFICATE</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-primary transition-colors" />
                    </div>
                  </div>

                  {/* Identifier Number & Country of Birth */}
                  <div className="flex flex-col">
                    <label className={labelClasses}>Identifier Number <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      placeholder="ID or Passport Number"
                      value={modalForm.identifierNumber}
                      onChange={(e) => setModalForm(prev => ({ ...prev, identifierNumber: e.target.value }))}
                      className={inputClasses}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className={labelClasses}>Country of Birth</label>
                    <div className="relative group">
                      <select 
                        value={modalForm.countryOfBirth}
                        onChange={(e) => setModalForm(prev => ({ ...prev, countryOfBirth: e.target.value }))}
                        className={selectClasses}
                      >
                        {COUNTRIES.map((country, idx) => (
                          <option key={idx} value={country === 'Select Country' ? '' : country}>{country}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-primary transition-colors" />
                    </div>
                  </div>

                  {/* Nationality & Marital Status */}
                  <div className="flex flex-col">
                    <label className={labelClasses}>Nationality <span className="text-red-500">*</span></label>
                    <div className="relative group">
                      <select 
                        value={modalForm.nationality}
                        onChange={(e) => setModalForm(prev => ({ ...prev, nationality: e.target.value }))}
                        className={selectClasses}
                      >
                        {COUNTRIES.map((country, idx) => (
                          <option key={idx} value={country === 'Select Country' ? '' : country}>{country}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className={labelClasses}>Marital Status <span className="text-red-500">*</span></label>
                    <div className="relative group">
                      <select 
                        value={modalForm.maritalStatus}
                        onChange={(e) => setModalForm(prev => ({ ...prev, maritalStatus: e.target.value }))}
                        className={selectClasses}
                      >
                        <option value="">Select Status</option>
                        <option>SINGLE</option>
                        <option>MARRIED</option>
                        <option>DIVORCED</option>
                        <option>WIDOWED</option>
                        <option>SEPARATED</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-primary transition-colors" />
                    </div>
                  </div>

                  {/* Gender & Telephone */}
                  <div className="flex flex-col">
                    <label className={labelClasses}>Gender <span className="text-red-500">*</span></label>
                    <div className="relative group">
                      <select 
                        value={modalForm.gender}
                        onChange={(e) => setModalForm(prev => ({ ...prev, gender: e.target.value }))}
                        className={selectClasses}
                      >
                        <option>MALE</option>
                        <option>FEMALE</option>
                        <option>UNKNOWN</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className={labelClasses}>Telephone</label>
                    <input 
                      type="text" 
                      placeholder="e.g. +264 61 000 000"
                      value={modalForm.telephone}
                      onChange={(e) => setModalForm(prev => ({ ...prev, telephone: e.target.value }))}
                      className={inputClasses}
                    />
                  </div>

                  {/* Postal & Residential Address */}
                  <div className="flex flex-col">
                    <label className={labelClasses}>Postal Address</label>
                    <textarea 
                      rows={2}
                      placeholder="P.O Box..."
                      value={modalForm.postalAddress}
                      onChange={(e) => setModalForm(prev => ({ ...prev, postalAddress: e.target.value }))}
                      className={`${inputClasses} resize-none`}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className={labelClasses}>Residential Address</label>
                    <textarea 
                      rows={2}
                      placeholder="House No, Street, Town..."
                      value={modalForm.residentialAddress}
                      onChange={(e) => setModalForm(prev => ({ ...prev, residentialAddress: e.target.value }))}
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  {/* Mobile Phone & Home Language */}
                  <div className="flex flex-col">
                    <label className={labelClasses}>Mobile phone</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 081 000 0000"
                      value={modalForm.mobilePhone}
                      onChange={(e) => setModalForm(prev => ({ ...prev, mobilePhone: e.target.value }))}
                      className={inputClasses}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className={labelClasses}>Home Language <span className="text-red-500">*</span></label>
                    <div className="relative group">
                      <select 
                        value={modalForm.homeLanguage}
                        onChange={(e) => setModalForm(prev => ({ ...prev, homeLanguage: e.target.value }))}
                        className={selectClasses}
                      >
                        <option value="">Select Language</option>
                        {LANGUAGES.map((lang, idx) => (
                          <option key={idx} value={lang}>{lang}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-8 border-t border-gray-100">
                  <button 
                    onClick={onClose}
                    className="px-6 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-100 transition-all border border-transparent rounded-md"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={onSave}
                    disabled={isSaving}
                    className="flex items-center gap-2 px-10 py-2.5 bg-primary hover:bg-primary-dark text-white font-bold shadow-lg shadow-blue-100 transition-all active:scale-95 disabled:opacity-70 rounded-md"
                  >
                    {isSaving ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save size={18} />
                        Save Details
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PersonModal;
