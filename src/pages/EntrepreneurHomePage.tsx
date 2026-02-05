import React from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  LayoutDashboard, 
  ShieldCheck, 
  Mail, 
  FileText, 
  Calculator, 
  FileCheck,
  Info,
  Coins,
  Users,
  FileBadge
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Test3 from '../assets/Test3.jpg';
import SectionContainer from '../components/SectionContainer';
import GeneralHelp from '../components/GeneralHelp';

// Topic Interfaces
interface TopicCard {
  title: string;
  description: string;
  link: string;
  variant: 'blue' | 'white';
  icon?: React.ElementType;
}

interface EServiceCard {
  title: string;
  icon: React.ElementType;
  link: string;
  external?: boolean;
}

interface PortalCard {
  title: string;
  description?: string;
  link: string;
}

const EntrepreneurHomePage: React.FC = () => {
  const navigate = useNavigate();

  // Topics Data
  const topics: TopicCard[] = [
    // ROW 1
    {
      title: 'Business Registration',
      description: 'Register a new business, name reservation, and company structure updates',
      link: '/entrepreneur/registration',
      variant: 'blue',
      icon: FileBadge
    },
    {
      title: 'Intellectual Property',
      description: 'Trademarks, patents, copyrights, and industrial design protection',
      link: '/entrepreneur/intellectual-property',
      variant: 'blue',
      icon: ShieldCheck
    },
    {
      title: 'Procurement',
      description: 'Public tenders, bidding opportunities, and supplier registration',
      link: '/entrepreneur/procurement',
      variant: 'blue',
      icon: Coins
    },
    {
      title: 'Compliance',
      description: 'Regulatory adherence, industry standards, and reporting requirements',
      link: '/entrepreneur/compliance',
      variant: 'blue',
      icon: FileCheck
    },
    // ROW 2
    {
      title: 'Waiver',
      description: 'Application for penalty waivers, fee exemptions, and special dispensations',
      link: '/entrepreneur/waiver',
      variant: 'white'
    },
    {
      title: 'Good Standing',
      description: 'Certificates of good standing for tax, social security, and company registration',
      link: '/entrepreneur/good-standing',
      variant: 'white'
    },
    {
      title: 'Law Reform',
      description: 'Updates on business laws, policy changes, and public consultations',
      link: '/entrepreneur/law-reform',
      variant: 'white'
    },
    {
      title: 'Taxes',
      description: 'Tax registration, filing returns, VAT, and customs duties',
      link: '/entrepreneur/taxes',
      variant: 'white'
    }
  ];

  // E-Services Data
  const eServices: EServiceCard[] = [
    { title: "Entrepreneur's dashboard", icon: LayoutDashboard, link: '/entrepreneur/dashboard' },
    { title: "Authorisations", icon: ShieldCheck, link: '/entrepreneur/authorisations' },
    { title: "Mailbox", icon: Mail, link: '/entrepreneur/mailbox' },
    { title: "Management of certificates of incapacity for work", icon: FileText, link: '/entrepreneur/incapacity-certificates' },
    { title: "Vacation pay and average wages compensation", icon: Calculator, link: '/entrepreneur/wages' },
    { title: "Notarised documents", icon: FileCheck, link: '/entrepreneur/notary' }
  ];

  // Portals Data
  const portals: PortalCard[] = [
    { title: 'E-Business Register', link: '#' },
    { title: 'E-services environment of the Tax and Customs Authority', link: '#' },
    { title: 'E-service of the Road Traffic and Transport Administration', link: '#' },
    { title: 'The self-service of the Labour Inspectorate', link: '#' },
    { title: 'Register of Economic Activities (Business Register)', link: '#' },
    { title: 'E-services of Statistics Namibia', link: '#' },
    { title: 'Self-service environment of the Agricultural Registers and Information Board', link: '#' },
    { title: 'E-services of Enterprise Namibia', link: '#' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[140px] md:h-[180px] lg:h-[220px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={Test3} 
            alt="Entrepreneurship in Namibia" 
            className="w-full h-full object-cover object-top"
          />
          {/* Reduced overlay opacity for better image visibility */}
          <div className="absolute inset-0 bg-primary-dark/30"></div>
        </div>
        <div className="relative h-full container mx-auto px-6 max-w-[1400px] flex items-center">
          {/* Added text shadow for better contrast against lighter background */}
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight drop-shadow-md">
            Everything important for entrepreneurs!
          </h1>
        </div>
      </section>

      {/* TOPICS SECTION */}
      <SectionContainer title="Topics" background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <div 
              key={index}
              onClick={() => navigate(topic.link)}
              className={`
                relative p-6 rounded-lg shadow-sm transition-all duration-300 cursor-pointer min-h-[180px] flex flex-col group overflow-hidden
                ${topic.variant === 'blue' 
                  ? 'bg-primary text-white hover:bg-primary-dark' 
                  : 'bg-white border border-secondary-border hover:border-primary/50'}
              `}
            >
              {/* Background Watermark Icon */}
              {topic.variant === 'blue' && topic.icon && (
                <topic.icon 
                  className="absolute -bottom-6 -right-6 w-36 h-36 text-white opacity-10 pointer-events-none transform rotate-12 transition-transform duration-500 group-hover:scale-110" 
                  strokeWidth={1}
                />
              )}

              <h3 className={`relative z-10 text-lg font-bold mb-2 transition-colors duration-300 ${topic.variant === 'blue' ? 'text-white' : 'text-text-heading group-hover:text-primary'}`}>
                {topic.title}
              </h3>
              <p className={`relative z-10 text-sm leading-relaxed mb-6 ${topic.variant === 'blue' ? 'text-blue-100' : 'text-text-muted'}`}>
                {topic.description}
              </p>
              <div className={`
                relative z-10 mt-auto ml-auto w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300
                ${topic.variant === 'blue' 
                  ? 'bg-white/20 group-hover:bg-white group-hover:text-primary-dark text-white' 
                  : 'bg-secondary group-hover:bg-primary group-hover:text-white text-primary'}
              `}>
                <ArrowRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* POPULAR E-SERVICES SECTION */}
      <SectionContainer title="Popular e-services" background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {eServices.map((service, index) => (
            <div 
              key={index}
              onClick={() => navigate(service.link)}
              className="bg-white border border-secondary-border rounded-lg p-5 hover:bg-secondary-hover hover:border-primary/30 cursor-pointer flex items-center gap-4 transition-all group shadow-sm hover:shadow-md"
            >
              <div className="p-2 bg-secondary rounded-full group-hover:bg-white transition-colors">
                <service.icon className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors" />
              </div>
              <span className="text-base text-text-heading group-hover:text-primary font-medium truncate flex-1 transition-colors duration-300">
                {service.title}
              </span>
              <ExternalLink className="w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* SELF-SERVICE PORTALS SECTION */}
      <SectionContainer title="Self-service portals and registers" background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portals.map((portal, index) => (
            <div 
              key={index}
              onClick={() => window.open(portal.link, '_blank')}
              className="relative bg-primary-dark hover:bg-primary-dark/90 p-6 rounded-lg min-h-[160px] cursor-pointer transition-all shadow-md group overflow-hidden"
            >
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
              
              <h3 className="relative z-10 text-lg font-bold text-white mb-2 leading-tight">{portal.title}</h3>
              {portal.description && <p className="relative z-10 text-sm text-blue-200 mb-4">{portal.description}</p>}
              
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors z-10">
                <ExternalLink size={16} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* LEGISLATIVE NEWS SECTION */}
      <SectionContainer title="Legislative news" background="white">
        <div className="bg-primary-light/50 border border-primary-light p-4 rounded-lg flex items-start gap-3 text-primary-dark">
          <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm font-medium">
            Section "Legislative news" is available only in English. Please switch the page language to English.
          </p>
        </div>
      </SectionContainer>

      {/* GENERAL HELP SECTION */}
      {/* Reusing existing component for consistency */}
      <GeneralHelp />

    </div>
  );
};

export default EntrepreneurHomePage;
