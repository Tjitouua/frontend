import { 
  HandCoins, 
  Globe, 
  Palette, 
  GraduationCap, 
  Briefcase, 
  Sprout, 
  Landmark, 
  HeartPulse, 
  Users, 
  Coins, 
  FileText, 
  Shield, 
  Car 
} from 'lucide-react';
import { ServiceCategory, Tab } from './types';

export const CATEGORIES: ServiceCategory[] = [
  {
    id: 'benefits',
    title: 'Benefits, social services, pensions',
    description: 'Benefits and services related to social security, pensions, disability, welfare, and support for children and adults in need',
    icon: HandCoins
  },
  {
    id: 'citizenship',
    title: 'Citizenship, migration, services of foreign representatives',
    description: 'Topics related to migration, citizenship, travel and border crossing, and the services offered by Namibian foreign missions to citizens abroad',
    icon: Globe
  },
  {
    id: 'culture',
    title: 'Culture, sport, and leisure',
    description: 'Topics related to culture, sport, and leisure activities and participation',
    icon: Palette
  },
  {
    id: 'education',
    title: 'Education and research',
    description: 'Topics concerning learning and research – certificates and diplomas, exams, learning environments, counselling, grants and scholarships',
    icon: GraduationCap
  },
  {
    id: 'employment',
    title: 'Employment and employment relations',
    description: 'Work-related issues from the perspective of both the employee and the employer – working conditions, employment relations, safety at work, and working abroad',
    icon: Briefcase
  },
  {
    id: 'environment',
    title: 'Environment and agriculture',
    description: 'Topics related to the interaction between nature and humans, including agriculture, animal husbandry, veterinary medicine, nature conservation, moving in nature, and environmental awareness',
    icon: Sprout
  },
  {
    id: 'governance',
    title: 'Governance structures and communication channels',
    description: 'Contacts, services, and information channels of national structures – information portals, self-service environments, and representative offices and service points',
    icon: Landmark
  },
  {
    id: 'health',
    title: 'Health',
    description: 'Services supporting health and well-being: health insurance, medical and welfare services, rehabilitation, and occupational health',
    icon: HeartPulse
  },
  {
    id: 'family',
    title: 'Me and my family',
    description: 'Everyday topics concerning you and your family – marriage, children, pets, inheritance, and managing family data',
    icon: Users
  },
  {
    id: 'money',
    title: 'Money, assets, and property',
    description: 'Topics concerning money and property – taxes, liabilities, debt counselling, real estate and property management',
    icon: Coins
  },
  {
    id: 'documents',
    title: 'My documents',
    description: 'Topics related to identity documents, permits, certificates, attestations, notarial documents, court decisions, and documents associated with electronic identity',
    icon: FileText
  },
  {
    id: 'security',
    title: 'Security and national defence',
    description: 'Topics related to security and national defence – personal safety, obligation to serve in the Defence Forces, and volunteering opportunities',
    icon: Shield
  },
  {
    id: 'traffic',
    title: 'Traffic and vehicles',
    description: 'Topics related to land, sea, and air traffic and means of transport – from road traffic to aviation and maritime transport',
    icon: Car
  }
];

export const TABS: Tab[] = [
  { id: 'health', label: "Health" },
  { id: 'family', label: "Me and my family" },
  { id: 'money', label: "Money, assets, and property" },
  { id: 'documents', label: "My documents" },
  { id: 'security', label: "Security and national defence" },
  { id: 'traffic', label: "Traffic and vehicles" },
  { id: 'employment', label: "Employment and employment relations" },
  { id: 'environment', label: "Environment and agriculture" },
  { id: 'governance', label: "Governance structures and communication channels" },
  { id: 'contact', label: "Get in touch" }
];
