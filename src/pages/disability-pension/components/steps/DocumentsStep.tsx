import React from 'react';
import { Upload, FileUp, ShieldCheck, AlertCircle } from 'lucide-react';

const DocumentsStep: React.FC = () => {
  return (
    <div className="space-y-10 py-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          <FileUp className="text-primary" size={28} />
          Required Documentation
        </h2>
        <p className="text-gray-500 mt-2 text-sm">Please upload all necessary supporting documents to process your application.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upload Zone */}
        <div className="lg:col-span-2">
          <div className="border-3 border-dashed border-gray-200 rounded-[2rem] p-12 flex flex-col items-center justify-center text-center hover:border-primary hover:bg-blue-50/20 transition-all cursor-pointer group bg-gray-50/30">
            <div className="p-6 bg-white rounded-2xl mb-6 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all border border-gray-100">
              <Upload className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Drag & Drop Documents</h3>
            <p className="text-gray-500 max-w-xs mx-auto text-sm leading-relaxed">
              Support for PDF, JPEG and PNG files. Max file size <span className="font-bold text-gray-700">5MB</span> per document.
            </p>
            <button className="mt-8 px-8 py-3 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-700 hover:border-primary hover:text-primary transition-all shadow-sm">
              Browse Files
            </button>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
            <div className="flex items-center gap-3 mb-3 text-green-700">
              <ShieldCheck size={20} />
              <h4 className="font-bold text-sm uppercase tracking-wider">Verified Upload</h4>
            </div>
            <p className="text-xs text-green-800 leading-relaxed">
              All documents are scanned for security. We ensure your personal data remains protected and encrypted.
            </p>
          </div>

          <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
            <div className="flex items-center gap-3 mb-3 text-orange-700">
              <AlertCircle size={20} />
              <h4 className="font-bold text-sm uppercase tracking-wider">Important</h4>
            </div>
            <p className="text-xs text-orange-800 leading-relaxed italic">
              "Ensure all documents are clearly legible. Blurred or incomplete documents may cause delays in processing."
            </p>
          </div>
        </div>
      </div>

      {/* Checklist */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Required Checklist</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Valid Identity Document / Birth Certificate',
            'Medical Certificate (if applicable)',
            'Proof of Residence',
            'Bank Confirmation Letter'
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
              <span className="text-sm font-medium text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentsStep;
