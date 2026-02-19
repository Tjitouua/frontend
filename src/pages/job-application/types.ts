import { LucideIcon } from 'lucide-react';

export type StepId = 'personalInfo' | 'workExperience' | 'education' | 'skills' | 'documents' | 'confirmation';

export interface Step {
  id: StepId;
  title: string;
  icon: LucideIcon;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string; // Assuming this is for a primary phone
  cellphoneNumber: string;
  identityNumber: string;
  language: string;
  region: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
}

export interface WorkExperience {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
  references: string;
}

export interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
}

export interface Documents {
  resume: File | null;
  coverLetter: File | null;
  idDocument: File | null;
  certificates: File | null;
}

export interface FormData {
  personalInfo: PersonalInfo;
  workExperience: WorkExperience[];
  education: Education[];
  skills: string[];
  documents: Documents;
}
