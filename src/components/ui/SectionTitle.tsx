import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  light = false 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`font-serif text-3xl md:text-4xl font-bold mb-3 relative inline-block
        ${light ? 'text-white' : 'text-slate-800'}
      `}>
        {title}
        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-terracotta"></span>
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${light ? 'text-gray-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;