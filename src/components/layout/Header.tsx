import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage, Language } from '../../context/LanguageContext';

const Header = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Language options
  const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'ar', name: 'العربية' },
    { code: 'en', name: 'English' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white bg-opacity-95 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
          >
            <span className={`text-2xl font-serif font-bold ${scrolled ? 'text-majorelle-blue' : 'text-gray-600'}`}>
              Trésors du Maroc
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`${scrolled ? 'text-slate-800' : 'text-gray-600'} hover:text-terracotta transition-colors`}>
              {t('nav.home')}
            </Link>
            <Link to="/artisanat" className={`${scrolled ? 'text-slate-800' : 'text-gray-600'} hover:text-terracotta transition-colors`}>
              {t('nav.artisanat')}
            </Link>
            <Link to="/musique" className={`${scrolled ? 'text-slate-800' : 'text-gray-600'} hover:text-terracotta transition-colors`}>
              {t('nav.musique')}
            </Link>
            <Link to="/gastronomie" className={`${scrolled ? 'text-slate-800' : 'text-gray-600'} hover:text-terracotta transition-colors`}>
              {t('nav.gastronomie')}
            </Link>
            <Link to="/patrimoine" className={`${scrolled ? 'text-slate-800' : 'text-gray-600'} hover:text-terracotta transition-colors`}>
              {t('nav.patrimoine')}
            </Link>
            <Link to="/galerie" className={`${scrolled ? 'text-slate-800' : 'text-gray-600'} hover:text-terracotta transition-colors`}>
              {t('nav.gallery')}
            </Link>
            <Link to="/contact" className={`${scrolled ? 'text-slate-800' : 'text-gray-600'} hover:text-terracotta transition-colors`}>
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Language Selector */}
          <div className="hidden md:flex items-center space-x-2">
            <Globe className={`w-5 h-5 ${scrolled ? 'text-slate-800' : 'text-gray-600'}`} />
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-transparent border-none focus:outline-none cursor-pointer"
              style={{ color: scrolled ? '#1F2937' : 'gray-500' }}
            >
              {languages.map((lang) => (
                <option 
                  key={lang.code} 
                  value={lang.code}
                  className="text-gray-800"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-slate-800' : 'text-gray-600'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-slate-800' : 'text-gray-600'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 mt-2 rounded-b-lg">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-slate-800 hover:text-majorelle-blue">
                {t('nav.home')}
              </Link>
              <Link to="/artisanat" className="text-slate-800 hover:text-majorelle-blue">
                {t('nav.artisanat')}
              </Link>
              <Link to="/musique" className="text-slate-800 hover:text-majorelle-blue">
                {t('nav.musique')}
              </Link>
              <Link to="/gastronomie" className="text-slate-800 hover:text-majorelle-blue">
                {t('nav.gastronomie')}
              </Link>
              <Link to="/patrimoine" className="text-slate-800 hover:text-majorelle-blue">
                {t('nav.patrimoine')}
              </Link>
              <Link to="/galerie" className="text-slate-800 hover:text-majorelle-blue">
                {t('nav.gallery')}
              </Link>
              <Link to="/contact" className="text-slate-800 hover:text-majorelle-blue">
                {t('nav.contact')}
              </Link>
              
              {/* Mobile Language Selector */}
              <div className="flex items-center space-x-2 pt-2 border-t border-gray-200">
                <Globe className="w-5 h-5 text-slate-800" />
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="bg-transparent border-none focus:outline-none cursor-pointer text-slate-800"
                >
                  {languages.map((lang) => (
                    <option 
                      key={lang.code} 
                      value={lang.code}
                    >
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;