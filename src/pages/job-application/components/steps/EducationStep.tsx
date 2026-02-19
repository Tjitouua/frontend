import React from 'react';
import { FormData } from '../../types';

interface Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const EducationStep: React.FC<Props> = ({ formData, updateFormData }) => {
  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newEducation = [...formData.education];
    newEducation[index] = { ...newEducation[index], [name]: value };
    updateFormData({ education: newEducation });
  };

  const addEducation = () => {
    updateFormData({
      education: [
        ...formData.education,
        { degree: '', institution: '', startDate: '', endDate: '' },
      ],
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      {formData.education.map((edu, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 p-4 border rounded-lg">
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => handleChange(index, e)}
            className="p-3 border rounded-lg"
          />
          <input
            type="text"
            name="institution"
            placeholder="Institution"
            value={edu.institution}
            onChange={(e) => handleChange(index, e)}
            className="p-3 border rounded-lg"
          />
          <div className="flex flex-col">
            <label htmlFor={`education-startDate-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <input
              type="date"
              id={`education-startDate-${index}`}
              name="startDate"
              value={edu.startDate}
              onChange={(e) => handleChange(index, e)}
              className="p-3 border rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor={`education-endDate-${index}`} className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
            <input
              type="date"
              id={`education-endDate-${index}`}
              name="endDate"
              value={edu.endDate}
              onChange={(e) => handleChange(index, e)}
              className="p-3 border rounded-lg"
            />
          </div>
        </div>
      ))}
      <button onClick={addEducation} className="p-3 bg-blue-500 text-white rounded-lg">
        Add Education
      </button>
    </div>
  );
};

export default EducationStep;
