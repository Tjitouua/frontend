import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  link: string;
  badge?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  link, 
  badge 
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      className="bg-white border border-gray-200 p-3 rounded-lg flex items-start gap-3 cursor-pointer transition-all duration-200 hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 group h-full"
    >
      {/* Icon Container */}
      <div className="bg-blue-50 p-2 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
        <Icon size={22} />
      </div>

      {/* Text Content */}
      <div className="flex-grow">
        <div className="flex justify-between items-start gap-2">
          <h4 className="text-[13.5px] font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors min-h-[40px] flex items-center">
            {title}
          </h4>
          {badge && (
            <span className="shrink-0 px-1.5 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded uppercase leading-none">
              {badge}
            </span>
          )}
        </div>
        
        {subtitle && (
          <p className="text-xs text-gray-500 mt-1.5 leading-relaxed line-clamp-2">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
