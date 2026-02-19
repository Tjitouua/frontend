import React from 'react';
import { FormData } from '../../types';

interface Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const DocumentsStep: React.FC<Props> = ({ formData, updateFormData }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      updateFormData({
        documents: {
          ...formData.documents,
          [name]: files[0],
        },
      });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Upload Documents</h2>
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Cover Letter</label>
          <input
            type="file"
            name="coverLetter"
            onChange={handleFileChange}
            className="p-3 border rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2">Resume</label>
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            className="p-3 border rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2">Certificates</label>
          <input
            type="file"
            name="certificates"
            onChange={handleFileChange}
            className="p-3 border rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2">ID Document</label>
          <input
            type="file"
            name="idDocument"
            onChange={handleFileChange}
            className="p-3 border rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentsStep;
