import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionContainer from './SectionContainer';
import Image1 from '../assets/image 1.png';
import Image2 from '../assets/image 2.png';
import Image3 from '../assets/image 3.png';

const announcements = [
  {
    id: 1,
    title: 'The National Portal app has a proof of identity function',
    description: 'The National Portal app now includes a digital proof of identity that can be used for verification services.',
    image: Image1,
  },
  {
    id: 2,
    title: 'The new National Portal citizen dashboard now offers more options',
    description: 'Explore the enhanced dashboard with improved navigation and new personalized widgets.',
    image: Image2,
  },
  {
    id: 3,
    title: 'Viewing information on getting married became more convenient',
    description: 'Access comprehensive marriage registration information and requirements in one centralized location.',
    image: Image3,
  },
];

const Announcements: React.FC = () => {
  return (
    <SectionContainer title="Announcements" background="gray">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {announcements.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col bg-white rounded-lg border border-secondary-border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden hover:-translate-y-1"
          >
            {/* Announcement Image */}
            <div className="h-48 w-full overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-[17px] font-bold text-text-heading mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-text-DEFAULT text-[14px] mb-6 line-clamp-3 leading-relaxed">
                {item.description}
              </p>
              <div className="mt-auto">
                <Link
                  to={`/announcements/${item.id}`}
                  className="inline-flex items-center text-primary font-semibold text-sm hover:underline group/link"
                >
                  Read more
                  <ChevronRight
                    size={16}
                    className="ml-1 transition-transform group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Announcements;