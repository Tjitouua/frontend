import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Heart, ExternalLink } from 'lucide-react';
import { ServiceSection as IServiceSection } from '../types';

interface ServiceSectionProps {
  section: IServiceSection;
  isExpanded: boolean;
  onToggle: () => void;
  favorites: Record<string, boolean>;
  onToggleFavorite: (e: React.MouseEvent, id: string) => void;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ 
  section, 
  isExpanded, 
  onToggle, 
  favorites, 
  onToggleFavorite 
}) => {
  return (
    <div className="border-b border-gray-100 last:border-0 pb-4">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 text-left group hover:bg-gray-50 -mx-2 px-4 rounded-lg transition-colors"
        aria-expanded={isExpanded}
      >
        <span className="font-bold text-gray-900 text-lg group-hover:text-primary transition-colors">
          {section.title}
        </span>
        <ChevronDown 
          className={`text-gray-400 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : 'rotate-0'
          }`} 
        />
      </button>

      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 animate-in slide-in-from-top-2 duration-200">
          {section.items.map((item) => (
            <div 
              key={item.id}
              className="flex justify-between items-start p-4 rounded-lg border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-sm cursor-pointer transition-all duration-200 group/item relative"
            >
              <Link 
                to={`/service/${item.id}`}
                className="flex-1 pr-4"
              >
                <h4 className="text-primary font-medium mb-1 group-hover/item:text-primary-dark flex items-center gap-1">
                  {item.title}
                  {item.isExternal && <ExternalLink size={14} className="text-gray-400" />}
                </h4>
                <p className="text-sm text-gray-500">{item.description}</p>
              </Link>
              <button
                onClick={(e) => onToggleFavorite(e, item.id)}
                className="p-1 hover:bg-gray-50 rounded-full transition-colors z-10"
                aria-label={favorites[item.id] ? "Remove from favorites" : "Add to favorites"}
              >
                <Heart 
                  size={20} 
                  className={`transition-colors duration-200 ${
                    favorites[item.id] 
                      ? 'fill-red-500 text-red-500' 
                      : 'text-gray-300 hover:text-red-500'
                  }`} 
                />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceSection;
