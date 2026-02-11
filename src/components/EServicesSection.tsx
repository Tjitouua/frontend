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
  ArrowRight,
  ShieldCheck,
  ShoppingCart,
  CheckCircle,
  Scale,
  Landmark,
  FileBadge,
  Accessibility,
  Baby,
  GraduationCap
} from 'lucide-react';
import ServiceCard from './ServiceCard';
import { ServiceItem } from '../types/services';
import Button from './Button';
import { Link } from 'react-router-dom';

const citizenServices: ServiceItem[] = [
  { icon: CreditCard, title: 'Identity Documents & Passports', link: '/service/identity' },
  { icon: Car, title: 'NaTIS License Renewal', link: '/service/natis' },
  { icon: Landmark, title: 'Tax Self-Service (NamRA ITAS)', link: '/service/tax' },
  { icon: Accessibility, title: 'Social Grants (Pension/Disability)', link: '/services/disability-pension' },
  { icon: ShieldCheck, title: 'Police Conduct Certificate', link: '/service/police-conduct' },
  { icon: Baby, title: 'Birth & Death Registration', link: '/service/certificates' },
  { icon: GraduationCap, title: 'Student Funding (NSFAF)', link: '/service/nsfaf' },
];

const entrepreneurServices: ServiceItem[] = [
  { icon: FileBadge, title: 'Business Registration', link: '/entrepreneur/registration' },
  { icon: ShieldCheck, title: 'Intellectual Property', link: '/entrepreneur/intellectual-property' },
  { icon: ShoppingCart, title: 'Procurement', link: '/entrepreneur/procurement' },
  { icon: FileCheck, title: 'Compliance', link: '/entrepreneur/compliance' },
  { icon: ScrollText, title: 'Waiver', link: '/entrepreneur/waiver' },
  { icon: CheckCircle, title: 'Good Standing', link: '/entrepreneur/good-standing' },
  { icon: Scale, title: 'Law Reform', link: '/entrepreneur/law-reform' },
  { icon: Landmark, title: 'Taxes', link: '/entrepreneur/taxes' },
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
