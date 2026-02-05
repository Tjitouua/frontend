import React from 'react';

export type StepId = 'starting' | 'person' | 'grant' | 'payment' | 'documents' | 'confirmation';

export interface WizardStep {
  id: StepId;
  label: string;
  icon: React.ElementType;
}

export interface FormData {
  firstName: string;
  lastName: string;
  idNumber: string;
  grantType: string;
  bankName: string;
  accountNumber: string;
}

export interface Person {
  code: string;
  name: string;
  surname: string;
  gender: string;
  dob: string;
  idNumber: string;
  capacity: 'Applicant' | 'Procurator';
}

export interface ModalFormState {
  updateStatus: string;
  code: string;
  firstName: string;
  lastName: string;
  maidenName: string;
  initials: string;
  dob: string;
  identityType: string;
  identifierNumber: string;
  countryOfBirth: string;
  nationality: string;
  maritalStatus: string;
  gender: string;
  telephone: string;
  postalAddress: string;
  residentialAddress: string;
  mobilePhone: string;
  homeLanguage: string;
  capacityCode: string;
}
