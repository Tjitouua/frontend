import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, Loader2, FileText } from 'lucide-react';

interface GrantModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'Permanent' | 'Temporary' | null;
  initialDuration: number;
  onSave: (type: 'Permanent' | 'Temporary', duration: number) => void;
  isSaving: boolean;
}

const GrantModal: React.FC<GrantModalProps> = ({
  isOpen,
  onClose,
  type,
  initialDuration,
  onSave,
  isSaving
}) => {
  const [tempDuration, setTempDuration] = useState<number>(initialDuration);

  useEffect(() => {
    if (isOpen) {
      setTempDuration(initialDuration);
    }
  }, [isOpen, initialDuration]);

  const inputClasses = "w-full px-4 py-2.5 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400 bg-white";
  const labelClasses = "text-xs font-bold text-gray-600 mb-1.5 flex items-center gap-1";

  return (
    <AnimatePresence>
      {isOpen && type && (
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
            className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center px-8 py-5 border-b border-gray-100 bg-gray-50/50">
              <div>
                <h3 className="text-xl font-bold text-gray-900 leading-none">Grant Application: Update</h3>
                <p className="text-sm text-gray-500 mt-1.5 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-sm ${type === 'Permanent' ? 'bg-blue-500' : 'bg-orange-500'}`}></span>
                  Configuration for: <span className="font-semibold text-gray-700">{type} Disability Grant</span>
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
                {/* Info Header */}
                <div className={`flex items-center justify-between px-6 py-4 rounded-md border ${
                  type === 'Permanent' 
                    ? 'bg-blue-50/50 border-blue-100/50' 
                    : 'bg-orange-50/50 border-orange-100/50'
                }`}>
                  <div className="flex gap-8">
                    <div className="flex flex-col gap-1">
                      <label className={`text-[10px] font-bold uppercase tracking-widest ${
                        type === 'Permanent' ? 'text-primary/60' : 'text-orange-500/60'
                      }`}>Update Status</label>
                      <span className={`text-sm font-bold flex items-center gap-1.5 ${
                        type === 'Permanent' ? 'text-blue-700' : 'text-orange-700'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                          type === 'Permanent' ? 'bg-blue-500' : 'bg-orange-500'
                        }`}></span>
                        New
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">System Code</label>
                      <span className="text-sm font-bold text-gray-700">#0</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Grant Code</label>
                      <span className="text-sm font-bold text-gray-700">{type === 'Permanent' ? '22' : '05'}</span>
                    </div>
                  </div>
                  <div className={`p-2 rounded-lg ${
                    type === 'Permanent' ? 'text-primary bg-white/50' : 'text-orange-500 bg-white/50'
                  }`}>
                     <FileText size={20} />
                  </div>
                </div>

                <div className="space-y-6">
                   <div className="flex flex-col">
                      <label className={labelClasses}>Application Grant Type</label>
                      <input 
                        type="text" 
                        value={`${type} Grant`}
                        disabled
                        className={`${inputClasses} bg-gray-50 text-gray-500`}
                      />
                   </div>

                   {type === 'Temporary' && (
                     <div className="flex flex-col animate-in fade-in slide-in-from-top-2">
                       <label className={labelClasses}>Grant Ending (in Months) <span className="text-orange-500">*</span></label>
                       <div className="relative">
                         <input 
                           type="number" 
                           min="0"
                           max="12"
                           value={tempDuration}
                           onChange={(e) => setTempDuration(parseInt(e.target.value) || 0)}
                           className={inputClasses}
                           placeholder="e.g. 6"
                         />
                         <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 uppercase pointer-events-none">Months</div>
                       </div>
                       <p className="text-[10px] text-gray-500 font-medium mt-1.5 ml-1">
                         Specify the duration as indicated in the medical certificate (Max 12 months).
                       </p>
                     </div>
                   )}
                </div>

                <div className="flex justify-end gap-3 pt-8 border-t border-gray-100">
                  <button 
                    onClick={onClose}
                    className="px-6 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-100 transition-all border border-transparent rounded-md"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => onSave(type, tempDuration)}
                    disabled={isSaving}
                    className={`flex items-center gap-2 px-10 py-2.5 text-white font-bold shadow-lg transition-all active:scale-95 disabled:opacity-70 rounded-md ${
                      type === 'Permanent' 
                        ? 'bg-primary hover:bg-primary-dark shadow-blue-100' 
                        : 'bg-orange-500 hover:bg-orange-600 shadow-orange-100'
                    }`}
                  >
                    {isSaving ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Selecting...
                      </>
                    ) : (
                      <>
                        <Save size={18} />
                        Select
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

export default GrantModal;
