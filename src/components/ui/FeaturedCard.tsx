import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeaturedCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  category?: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ 
  title, 
  description, 
  image, 
  link,
  category 
}) => {
  return (
    <div className="group overflow-hidden rounded-lg shadow-lg relative transition-all duration-300 hover:shadow-xl">
      {/* Image */}
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 bg-white">
        {category && (
          <span className="inline-block px-3 py-1 text-xs font-semibold text-majorelle-blue bg-majorelle-blue bg-opacity-10 rounded-full mb-3">
            {category}
          </span>
        )}
        <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Link 
          to={link}
          className="inline-flex items-center text-majorelle-blue hover:text-majorelle-blue-dark transition-colors font-medium"
        >
          En savoir plus
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCard;