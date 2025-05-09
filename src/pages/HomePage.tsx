import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

import SectionTitle from '../components/ui/SectionTitle';
import FeaturedCard from '../components/ui/FeaturedCard';
import HeritageMap from '../components/ui/HeritageMap';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  const featuredItems = [
    {
      title: 'L\'art du zellige',
      description: 'Découvrez cette mosaïque traditionnelle marocaine, symbole de l\'excellence artisanale.',
      image: 'https://images.pexels.com/photos/12494923/pexels-photo-12494923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/artisanat',
      category: 'Artisanat'
    },
    {
      title: 'La musique Gnaoua',
      description: 'Un patrimoine musical unique, mêlant influences africaines et spiritualité soufie.',
      image: 'https://images.unsplash.com/photo-1567981964169-7c2597346322?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/musique',
      category: 'Musique'
    },
    {
      title: 'La cuisine marocaine',
      description: 'Une gastronomie riche en saveurs et en histoire, reconnue dans le monde entier.',
      image: 'https://images.unsplash.com/photo-1661081988119-58e40ee39201?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/gastronomie',
      category: 'Gastronomie'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            {t('home.hero.subtitle')}
          </p>
          <Link 
            to="/galerie"
            className="inline-block px-6 py-3 bg-majorelle-blue hover:bg-majorelle-blue-dark text-white rounded-full transition-colors"
          >
            {t('home.hero.cta')}
          </Link>
        </div>
        
        {/* Decorative Moroccan Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-repeat-x opacity-50">
          {/* Pattern would be implemented as background image in CSS */}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title={t('home.welcome.title')} 
              centered={true}
            />
            <p className="text-lg text-gray-600 mb-8">
              {t('home.welcome.description')}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <Link 
                to="/artisanat" 
                className="flex flex-col items-center p-4 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-majorelle-blue bg-opacity-10 mb-3">
                  <img src="https://images.pexels.com/photos/29903735/pexels-photo-29903735/free-photo-of-intricate-moroccan-doorway-in-fes-morocco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Artisanat" className="rounded-full w-16 h-16 transition-transform duration-800 hover:scale-110" />
                </div>
                <span className="font-medium text-slate-800">Artisanat</span>
              </Link>
              <Link 
                to="/musique" 
                className="flex flex-col items-center p-4 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-terracotta bg-opacity-10 mb-3">
                  <img src="https://images.pexels.com/photos/30132757/pexels-photo-30132757/free-photo-of-close-up-of-a-traditional-moroccan-musical-instrument.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Musique" className="rounded-full w-16 h-16 transition-transform duration-800 hover:scale-110" />
                </div>
                <span className="font-medium text-slate-800">Musique</span>
              </Link>
              <Link 
                to="/gastronomie" 
                className="flex flex-col items-center p-4 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-ochre bg-opacity-10 mb-3">
                  <img src="https://images.pexels.com/photos/30068444/pexels-photo-30068444/free-photo-of-traditional-moroccan-lamb-tagine-with-almonds-and-prunes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Gastronomie" className="rounded-full w-16 h-16 transition-transform duration-800 hover:scale-110" />
                </div>
                <span className="font-medium text-slate-800">Gastronomie</span>
              </Link>
              <Link 
                to="/patrimoine" 
                className="flex flex-col items-center p-4 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-majorelle-blue-dark bg-opacity-10 mb-3">
                  <img src="https://images.pexels.com/photos/943510/pexels-photo-943510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Patrimoine" className="rounded-full w-16 h-16 transition-transform duration-800 hover:scale-110" />
                </div>
                <span className="font-medium text-slate-800">Patrimoine</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={t('home.featured.title')} 
            subtitle="Explorez nos contenus les plus populaires"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <FeaturedCard 
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
                category={item.category}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/galerie"
              className="inline-flex items-center px-6 py-3 bg-white border border-majorelle-blue text-majorelle-blue rounded-full hover:bg-majorelle-blue hover:text-white transition-colors"
            >
              Découvrir plus de contenus
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Heritage Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Explorez le patrimoine marocain" 
            subtitle="Découvrez les sites historiques et culturels emblématiques du Maroc"
          />
          
          <HeritageMap />
        </div>
      </section>

      {/* Newsletter Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/4553373/pexels-photo-4553373.jpeg)'
        }}
      >
        <div className="absolute inset-0 bg-blue-200 bg-opacity-85"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <SectionTitle 
              title="Restez informé" 
              subtitle="Inscrivez-vous à notre newsletter pour recevoir les dernières actualités culturelles et artistiques du Maroc"
              centered={true}
              light={true}
            />
            
            <form className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="px-6 py-3 rounded-full bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-terracotta w-full sm:w-auto"
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-terracotta hover:bg-terracotta/90 text-white rounded-full transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;