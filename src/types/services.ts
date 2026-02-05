import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  subtitle?: string; // Optional as per ServiceCard
  link: string;
  badge?: string;
}

export interface ServiceCategory {
  title: string;
  icon: LucideIcon; // Main icon for the category header
  description?: string;
  services: ServiceItem[];
}
