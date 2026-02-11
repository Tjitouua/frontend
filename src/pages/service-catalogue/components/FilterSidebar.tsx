import React from 'react';
import { X } from 'lucide-react';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-[140px] bottom-0 right-0 z-50 w-full sm:w-96 bg-white shadow-2xl p-6 transform transition-transform duration-300 ease-in-out overflow-y-auto border-l border-gray-100">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-gray-900">Filter Services</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-red-50 rounded-full transition-colors text-gray-500 hover:text-red-600"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-8">
          {/* Search Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Search keywords</label>
            <input 
              type="text" 
              placeholder="e.g. passport, tax..." 
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>

          {/* Topic Filter */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Topic</h3>
            <div className="space-y-3">
              {['Health', 'Family', 'Money', 'Education', 'Employment', 'Traffic'].map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input type="checkbox" className="peer h-5 w-5 border-2 border-gray-300 rounded text-primary focus:ring-primary/20 cursor-pointer transition-all checked:border-primary checked:bg-primary" />
                  </div>
                  <span className="text-gray-600 group-hover:text-primary transition-colors">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Service Provider Filter */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Service Provider</h3>
            <div className="space-y-3">
              {['Ministry of Home Affairs', 'NamRA', 'SSC', 'BIPA', 'NAMFISA'].map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input type="checkbox" className="peer h-5 w-5 border-2 border-gray-300 rounded text-primary focus:ring-primary/20 cursor-pointer transition-all checked:border-primary checked:bg-primary" />
                  </div>
                  <span className="text-gray-600 group-hover:text-primary transition-colors">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 border-t border-gray-100 flex gap-3">
            <button 
              className="flex-1 py-2.5 border border-gray-200 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              onClick={onClose}
            >
              Clear all
            </button>
            <button 
              className="flex-1 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors shadow-sm"
              onClick={onClose}
            >
              Show results
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
