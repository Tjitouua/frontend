import React from 'react';
import { HelpCircle, MessageCircleQuestion, Settings, ArrowRight, Headset } from 'lucide-react';
import SectionContainer from './SectionContainer';
import { useNavigate } from 'react-router-dom';

const helpItems = [
  {
    icon: HelpCircle,
    title: 'FAQ',
    description: 'Frequently asked questions. You may find plenty of useful answers among them.',
    link: '/faq',
  },
  {
    icon: MessageCircleQuestion,
    title: 'Help using the National Portal',
    description: 'Guidelines and tips on how to effectively use the portal services.',
    link: '/help',
  },
  {
    icon: Settings,
    title: 'For service owner',
    description: 'Information and technical requirements for integrating your services.',
    link: '/self-service',
  },
  {
    icon: Headset,
    title: 'User support',
    description: 'If you are in trouble or have questions, please contact our help desk.',
    link: '/user-support',
  },
];

const GeneralHelp: React.FC = () => {
    const navigate = useNavigate();

  return (
    <SectionContainer title="General help" background="white" className="!py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {helpItems.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between p-4 bg-[#FFFBEB] rounded-lg border border-yellow-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full cursor-pointer"
             onClick={() => navigate(item.link)}
          >
            <div>
              <div className="p-2 bg-yellow-100 text-yellow-700 w-11 h-11 rounded-full flex items-center justify-center mb-3 group-hover:bg-yellow-200 transition-colors">
                <item.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-[16px] font-bold text-text-heading mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-[13px] text-text-DEFAULT leading-relaxed mb-4">
                {item.description}
              </p>
            </div>
            
            <div className="flex justify-end">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-yellow-700 group-hover:bg-yellow-600 group-hover:text-white transition-all duration-300">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default GeneralHelp;
