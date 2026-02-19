import React from 'react';
import { FormData } from '../../types';
import { CONSTITUENCIES } from '../../constants';

interface Props {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const PersonalInfoStep: React.FC<Props> = ({ formData, updateFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({
      personalInfo: {
        ...formData.personalInfo,
        [name]: value,
      },
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.personalInfo.firstName}
          onChange={handleChange}
          className="p-3 border rounded-lg"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.personalInfo.lastName}
          onChange={handleChange}
          className="p-3 border rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.personalInfo.email}
          onChange={handleChange}
          className="p-3 border rounded-lg"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.personalInfo.phone}
          onChange={handleChange}
          className="p-3 border rounded-lg"
        />
        <div className="flex flex-col">
          <label htmlFor="dateOfBirth" className="text-sm font-bold text-gray-700 mb-1">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            value={formData.personalInfo.dateOfBirth}
            onChange={handleChange}
            className="p-3 border rounded-lg"
          />
        </div>
        <input
          type="tel"
          name="cellphoneNumber"
          placeholder="Cellphone Number"
          value={formData.personalInfo.cellphoneNumber}
          onChange={handleChange}
          className="p-3 border rounded-lg"
        />
        <input
          type="text"
          name="identityNumber"
          placeholder="Identity Number"
          value={formData.personalInfo.identityNumber}
          onChange={handleChange}
          className="p-3 border rounded-lg"
        />
        <select
          name="gender"
          value={formData.personalInfo.gender}
          onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
          className="p-3 border rounded-lg"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </select>
        <select
          name="maritalStatus"
          value={formData.personalInfo.maritalStatus}
          onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
          className="p-3 border rounded-lg"
        >
          <option value="">Select Marital Status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
        </select>
        <select
          name="region"
          value={formData.personalInfo.region}
          onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
          className="p-3 border rounded-lg"
        >
          <option value="">Select Region</option>
          <option value="Caprivi">Caprivi</option>
          <option value="Erongo">Erongo</option>
          <option value="Hardap">Hardap</option>
          <option value="Karas">Karas</option>
          <option value="Kavango East">Kavango East</option>
          <option value="Kavango West">Kavango West</option>
          <option value="Khomas">Khomas</option>
          <option value="Kunene">Kunene</option>
          <option value="Ohangwena">Ohangwena</option>
          <option value="Omaheke">Omaheke</option>
          <option value="Omusati">Omusati</option>
          <option value="Oshana">Oshana</option>
          <option value="Oshikoto">Oshikoto</option>
          <option value="Otjozondjupa">Otjozondjupa</option>
        </select>
        <select
          name="language"
          value={formData.personalInfo.language}
          onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
          className="p-3 border rounded-lg"
        >
          <option value="">Select Language</option>
          <option value="Oshiwambo">Oshiwambo</option>
          <option value="Khoekhoegowab">Khoekhoegowab</option>
          <option value="Otjiherero">Otjiherero</option>
          <option value="Rukwangali">Rukwangali</option>
          <option value="Setswana">Setswana</option>
          <option value="San">San</option>
          <option value="Afrikaans">Afrikaans</option>
          <option value="German">German</option>
          <option value="Portuguese">Portuguese</option>
        </select>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="residentialAddress" className="text-sm font-bold text-gray-700 mb-1">Residential Address (Location)</label>
            <input
              type="text"
              name="residentialAddress"
              id="residentialAddress"
              placeholder="Residential Address (Location)"
              value={formData.personalInfo.residentialAddress}
              onChange={handleChange}
              className="p-3 border rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="erfNumber" className="text-sm font-bold text-gray-700 mb-1">Erf Number</label>
            <input
              type="text"
              name="erfNumber"
              id="erfNumber"
              placeholder="Erf Number"
              value={formData.personalInfo.erfNumber}
              onChange={handleChange}
              className="p-3 border rounded-lg"
            />
          </div>
        </div>
        <input
          type="text"
          name="postalAddress"
          placeholder="Postal Address"
          value={formData.personalInfo.postalAddress}
          onChange={handleChange}
          className="p-3 border rounded-lg md:col-span-2"
        />
        <div className="flex flex-col">
          <label htmlFor="constituency" className="text-sm font-bold text-gray-700 mb-1">Constituency</label>
          <select
            name="constituency"
            id="constituency"
            value={formData.personalInfo.constituency}
            onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
            className="p-3 border rounded-lg"
          >
            {CONSTITUENCIES.map((constituency, idx) => (
              <option key={idx} value={constituency === 'Select Constituency' ? '' : constituency}>{constituency}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoStep;
