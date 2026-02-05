import React from 'react';
import { UserPlus, Users, Trash2, FileX, Fingerprint, ShieldCheck } from 'lucide-react';
import { Person } from '../../types';

interface PersonStepProps {
  onOpenModal: (type: 'Applicant' | 'Procurator') => void;
  persons: Person[];
  onClearList: () => void;
}

const PersonStep: React.FC<PersonStepProps> = ({ onOpenModal, persons, onClearList }) => {
  return (
    <div className="space-y-10 py-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Enrollment Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <button 
          onClick={() => onOpenModal('Applicant')}
          className="group relative overflow-hidden p-8 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-2xl hover:border-primary transition-all duration-500 text-left hover:-translate-y-1"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <UserPlus size={120} className="text-primary" />
          </div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
              <UserPlus size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Add Applicant</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">Register the primary beneficiary for this grant application.</p>
          </div>
        </button>
        
        <button 
          onClick={() => onOpenModal('Procurator')}
          className="group relative overflow-hidden p-8 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-2xl hover:border-orange-400 transition-all duration-500 text-left hover:-translate-y-1"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Users size={120} className="text-orange-500" />
          </div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Add Procurator</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">Register a representative to act on behalf of the applicant.</p>
          </div>
        </button>
      </div>

      {/* List Section */}
      <div className="bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
          <div>
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
              <Fingerprint size={24} className="text-primary" /> 
              Registered Persons
            </h3>
            <p className="text-xs text-gray-500 mt-1 font-medium">Verify the details of added beneficiaries below.</p>
          </div>
          {persons.length > 0 && (
            <button 
              onClick={onClearList}
              className="text-gray-400 hover:text-red-600 text-xs font-bold uppercase tracking-widest flex items-center gap-2 px-4 py-2 hover:bg-red-50 rounded-md transition-all border border-transparent hover:border-red-100"
            >
              <Trash2 size={16} /> Clear All
            </button>
          )}
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white">
                {['Person Code', 'Full Name', 'Gender', 'Date of Birth', 'ID Number', 'Capacity'].map((header) => (
                  <th key={header} className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] border-b border-gray-50">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {persons.length > 0 ? (
                persons.map((person, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/30 transition-all group">
                    <td className="px-8 py-6">
                      <span className="text-xs font-bold text-primary bg-primary-light px-2.5 py-1 rounded-md">#{person.code}</span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900">{person.name} {person.surname}</span>
                        <span className="text-[10px] text-gray-400 font-medium">Verified Citizen</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm text-gray-600 font-medium">{person.gender}</td>
                    <td className="px-8 py-6 text-sm text-gray-600 font-medium">{person.dob}</td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={14} className="text-green-500" />
                        <span className="text-sm font-bold text-gray-800 tabular-nums">{person.idNumber}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-4 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm ${
                        person.capacity === 'Applicant' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-orange-500 text-white'
                      }`}>
                        {person.capacity}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}>
                    <div className="p-20 text-center flex flex-col items-center justify-center">
                      <div className="w-24 h-24 bg-gray-50 rounded-lg flex items-center justify-center mb-6 shadow-inner border border-gray-100/50">
                        <FileX size={40} className="text-gray-200" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">No persons added yet</h4>
                      <p className="text-sm text-gray-400 max-w-[280px] leading-relaxed font-medium">
                        Click the cards above to register an applicant or their legal representative.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PersonStep;
