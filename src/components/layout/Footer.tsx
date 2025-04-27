import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and About */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-2xl font-serif font-bold">Trésors du Maroc</h3>
            </Link>
            <p className="text-gray-300 mb-4">
              Exploration de l'art et de la culture marocaine à travers les siècles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-terracotta transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-terracotta transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-terracotta transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/artisanat" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.artisanat')}
                </Link>
              </li>
              <li>
                <Link to="/musique" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.musique')}
                </Link>
              </li>
              <li>
                <Link to="/gastronomie" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.gastronomie')}
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Découvrir</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/patrimoine" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.patrimoine')}
                </Link>
              </li>
              <li>
                <Link to="/galerie" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">{t('footer.newsletter')}</h4>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="px-4 py-2 rounded-md bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-majorelle-blue"
              />
              <button 
                type="submit" 
                className="flex items-center justify-center px-4 py-2 bg-majorelle-blue hover:bg-majorelle-blue-dark text-white rounded-md transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                {t('footer.newsletter.cta')}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Trésors du Maroc. {t('footer.copyright')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;