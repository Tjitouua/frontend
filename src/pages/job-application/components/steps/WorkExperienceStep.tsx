import React from 'react';
import { FormData } from '../../types';

interface Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const WorkExperienceStep: React.FC<Props> = ({ formData, updateFormData }) => {
  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newWorkExperience = [...formData.workExperience];
    newWorkExperience[index] = { ...newWorkExperience[index], [name]: value };
    updateFormData({ workExperience: newWorkExperience });
  };

  const addWorkExperience = () => {
    updateFormData({
      workExperience: [
        ...formData.workExperience,
        { jobTitle: '', company: '', startDate: '', endDate: '', responsibilities: '', references: '' },
      ],
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
      {formData.workExperience.map((exp, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 p-4 border rounded-lg">
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={exp.jobTitle}
            onChange={(e) => handleChange(index, e)}
            className="p-3 border rounded-lg"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={exp.company}
            onChange={(e) => handleChange(index, e)}
            className="p-3 border rounded-lg"
          />
          <div className="flex flex-col">
            <label htmlFor={`startDate-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <input
              type="date"
              id={`startDate-${index}`}
              name="startDate"
              value={exp.startDate}
              onChange={(e) => handleChange(index, e)}
              className="p-3 border rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor={`endDate-${index}`} className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
            <input
              type="date"
              id={`endDate-${index}`}
              name="endDate"
              value={exp.endDate}
              onChange={(e) => handleChange(index, e)}
              className="p-3 border rounded-lg"
            />
          </div>
          <textarea
            name="responsibilities"
            placeholder="Responsibilities"
            value={exp.responsibilities}
            onChange={(e) => handleChange(index, e)}
            className="p-3 border rounded-lg md:col-span-2"
          />
          <textarea
            name="references"
            placeholder="References (Name, Contact, Relationship)"
            value={exp.references}
            onChange={(e) => handleChange(index, e)}
            className="p-3 border rounded-lg md:col-span-2"
          />
        </div>
      ))}
      <button onClick={addWorkExperience} className="p-3 bg-blue-500 text-white rounded-lg">
        Add Work Experience
      </button>
    </div>
  );
};

export default WorkExperienceStep;
