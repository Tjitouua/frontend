import { 
  Accessibility, 
  User, 
  FileText, 
  CreditCard, 
  Upload, 
  Send 
} from 'lucide-react';
import { WizardStep } from './types';

export const STEPS: WizardStep[] = [
  { id: 'starting', label: 'Starting', icon: Accessibility },
  { id: 'person', label: 'Person', icon: User },
  { id: 'grant', label: 'Grant Application', icon: FileText },
  { id: 'payment', label: 'Payment Details', icon: CreditCard },
  { id: 'documents', label: 'Document', icon: Upload },
  { id: 'confirmation', label: 'Confirmation', icon: Send },
];

export const STORAGE_KEY = 'ecitizen_pension_draft';
