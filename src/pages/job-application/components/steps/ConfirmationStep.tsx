import React from 'react';
import { FormData } from '../../types';

interface Props {
  formData: FormData;
}

const ConfirmationStep: React.FC<Props> = ({ formData }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Review & Submit</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Personal Information</h3>
          <p>Name: {formData.personalInfo.firstName} {formData.personalInfo.lastName}</p>
          <p>Email: {formData.personalInfo.email}</p>
          <p>Phone: {formData.personalInfo.phone}</p>
          <p>Address: {formData.personalInfo.address}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Work Experience</h3>
          {formData.workExperience.map((exp, index) => (
            <div key={index} className="mb-2">
              <p>{exp.jobTitle} at {exp.company}</p>
              <p>{exp.startDate} - {exp.endDate}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-lg font-semibold">Education</h3>
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-2">
              <p>{edu.degree} from {edu.institution}</p>
              <p>Graduated: {edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-lg font-semibold">Skills</h3>
          <p>{formData.skills.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationStep;
