export interface Service {
  id: string;
  title: string;
  subtitle?: string;
  icon: string; // icon name from lucide-react
  link: string;
  badge?: string;
}

export interface ProactiveService {
  id: string;
  name: string;
  icon: string;
  category: 'Citizen' | 'Entrepreneur';
  link: string;
}

export interface Announcement {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface ImportantDate {
  date: number;
  month: string;
  day: string;
  event: string;
  badges: Array<{type: string; label: string}>;
}

export interface ImportantLink {
  id: string;
  name: string;
  logo: string;
  url: string;
}
