import React from 'react';
import { 
  User, 
  Briefcase, 
  Pill, 
  FileClock, 
  CreditCard, 
  Globe, 
  UserCog, 
  Smile, 
  Car,
  LayoutDashboard,
  FileCheck,
  Mail,
  Coins,
  HeartHandshake,
  ScrollText,
  Users,
  ArrowRight
} from 'lucide-react';
import ServiceCard from './ServiceCard';
import { ServiceItem } from '../types/services';
import Button from './Button';
import { Link } from 'react-router-dom';

const citizenServices: ServiceItem[] = [
  { icon: Pill, title: 'My prescriptions', link: '/service/prescriptions' },
  { icon: FileClock, title: 'Certificate of temporary incapacity for work', link: '/service/incapacity' },
  { icon: CreditCard, title: 'My identity documents', link: '/service/identity' },
  { icon: Globe, title: 'Ordering the African health insurance card', link: '/service/ehic' },
  { icon: UserCog, title: 'Account number and personal data', link: '/service/personal-data' },
  { icon: Smile, title: 'Dental care benefit', link: '/service/dental' },
  { icon: Car, title: 'Traffic insurance history', link: '/service/traffic' },
];

const entrepreneurServices: ServiceItem[] = [
  { icon: LayoutDashboard, title: "Entrepreneur's Dashboard", link: '/entrepreneur/dashboard' },
  { icon: FileCheck, title: 'Authorisations', link: '/entrepreneur/authorisations' },
  { icon: Mail, title: 'Mailbox', link: '/entrepreneur/mailbox' },
  { icon: Coins, title: 'Vacation pay and average wages', link: '/entrepreneur/wages' },
  { icon: HeartHandshake, title: 'Health insurance of employees', link: '/entrepreneur/health-insurance' },
  { icon: ScrollText, title: 'Notarised documents', link: '/entrepreneur/notary' },
  { icon: Users, title: 'Population Register queries', link: '/entrepreneur/population' },
];

const EServicesSection: React.FC = () => {
  return (
    <section className="bg-secondary py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Column 1: Entrepreneurs */}
          <div className="flex flex-col">
             <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-indigo-100 rounded-full text-indigo-700">
                <Briefcase size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-heading">
                E-services for entrepreneurs
              </h2>
            </div>

            {/* Illustration Placeholder */}
            <div className="mb-6 hidden md:block">
                 <div className="h-24 bg-indigo-50/50 rounded-xl flex items-center justify-center border border-indigo-200 shadow-sm">
                    <div className="flex flex-col items-center gap-1 text-indigo-700">
                        <Briefcase size={40} strokeWidth={1.5} />
                        <span className="font-bold uppercase tracking-widest text-[9px]">Business Services</span>
                    </div>
                 </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {entrepreneurServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  link={service.link}
                />
              ))}
            </div>
            
            <div className="mt-auto">
               <Link to="/login/entrepreneur" className="inline-flex items-center text-primary font-semibold hover:underline group">
                  Log in to self-service
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
               </Link>
            </div>
          </div>

          {/* Column 2: Citizens */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-100 rounded-full text-primary">
                <User size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-heading">
                E-services for citizen
              </h2>
            </div>
            
            {/* Illustration Placeholder */}
            <div className="mb-6 hidden md:block">
                 <div className="h-24 bg-blue-50/50 rounded-xl flex items-center justify-center border border-blue-200 shadow-sm">
                    <div className="flex flex-col items-center gap-1 text-primary">
                        <User size={40} strokeWidth={1.5} />
                        <span className="font-bold uppercase tracking-widest text-[9px]">Citizen Services</span>
                    </div>
                 </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {citizenServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  link={service.link}
                />
              ))}
            </div>

            <div className="mt-auto">
               <Link to="/login" className="inline-flex items-center text-primary font-semibold hover:underline group text-sm">
                  Log in to self-service
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
               </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EServicesSection;
