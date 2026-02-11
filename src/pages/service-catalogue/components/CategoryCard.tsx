import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServiceCategory } from '../types';

interface CategoryCardProps {
  category: ServiceCategory;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      to={`/catalog/category/${category.id}`}
      className="group bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer relative flex flex-col min-h-[240px] overflow-hidden text-left"
    >
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-dark transition-colors">
          {category.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3 mb-12 leading-relaxed">
          {category.description}
        </p>
      </div>
      
      {/* Background Transparent Icon */}
      <div className="absolute bottom-[-10px] left-[-10px] text-primary opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-300 pointer-events-none">
        <category.icon size={140} strokeWidth={1.5} />
      </div>

      <div className="absolute bottom-6 right-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white opacity-90 group-hover:bg-primary-dark group-hover:scale-110 transition-all duration-300 shadow-md z-20">
        <ArrowRight size={24} />
      </div>
    </Link>
  );
};

export default CategoryCard;
