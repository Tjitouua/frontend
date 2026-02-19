import React from 'react';
import { FormData } from '../../types';

interface Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const SkillsStep: React.FC<Props> = ({ formData, updateFormData }) => {
  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    updateFormData({ skills: newSkills });
  };

  const addSkill = () => {
    updateFormData({ skills: [...formData.skills, ''] });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      {formData.skills.map((skill, index) => (
        <div key={index} className="flex items-center gap-4 mb-4">
          <input
            type="text"
            placeholder="Skill"
            value={skill}
            onChange={(e) => handleSkillChange(index, e.target.value)}
            className="p-3 border rounded-lg flex-grow"
          />
        </div>
      ))}
      <button onClick={addSkill} className="p-3 bg-blue-500 text-white rounded-lg">
        Add Skill
      </button>
    </div>
  );
};

export default SkillsStep;
