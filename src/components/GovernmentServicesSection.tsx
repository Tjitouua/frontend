import React from 'react';
import { 
  Heart, 
  HeartOff, 
  Shield, 
  MapPin, 
  Baby, 
  Stethoscope, 
  Coins, 
  Flower2, 
  HandHelping, 
  PenLine, 
  Rocket,
  ChevronRight,
  Accessibility,
  Users,
  UserMinus
} from 'lucide-react';
import SectionContainer from './SectionContainer';
import { useNavigate } from 'react-router-dom';

const governmentServices = [
  { icon: Users, title: 'Marriage', link: '/service/marriage' },
  { icon: UserMinus, title: 'Divorce', link: '/service/divorce' },
  { icon: Shield, title: 'Military Recruit', link: '/service/defence' },
  { icon: MapPin, title: 'Residence', link: '/service/settling' },
  { icon: Baby, title: 'Birth', link: '/service/baby' },
  { icon: Stethoscope, title: 'Health', link: '/service/child-health' },
  { icon: Accessibility, title: 'Disability/Pension', link: '/services/disability-pension' },
  { icon: Flower2, title: 'Death', link: '/service/bereavement' },
  { icon: HandHelping, title: 'Volunteer Job', link: '/service/volunteer' },
  { icon: PenLine, title: 'Name change', link: '/service/name-change' },
  { icon: Rocket, title: 'Business', link: '/service/business-start' },
];

const GovernmentServicesSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SectionContainer title="Government online services" background="white" className="!py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {governmentServices.map((service, index) => (
          <div
            key={index}
            onClick={() => navigate(service.link)}
            className="group flex flex-col p-3 bg-white border border-secondary-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1"
          >
            <div className="flex items-start gap-2.5 mb-2">
              <div className="p-1.5 bg-primary-light text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-text-heading text-sm leading-tight pt-0.5 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
            </div>
            <div className="mt-auto pt-2 flex items-center justify-between border-t border-gray-50">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
                Citizen
              </span>
              <ChevronRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default GovernmentServicesSection;
