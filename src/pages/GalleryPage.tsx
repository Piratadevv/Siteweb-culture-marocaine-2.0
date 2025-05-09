import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import CultureGallery from '../components/ui/CultureGallery';

const GalleryPage: React.FC = () => {
  return (
    <div className="pt-24 -mt-[30px]">
      {/* Hero Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ height: '400px',
          backgroundImage: 'url(https://images.pexels.com/photos/30532059/pexels-photo-30532059/free-photo-of-majestic-hassan-tower-in-rabat-morocco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Galerie culturelle
            </h1>
            <p className="text-xl text-white opacity-90">
              Explorez la richesse culturelle du Maroc à travers notre collection d'images représentant l'artisanat, la musique, la gastronomie et le patrimoine marocain.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Découvrez notre galerie" 
            subtitle="Filtrez par catégorie pour explorer les différentes facettes de la culture marocaine"
          />
          
          <CultureGallery />
        </div>
      </section>

      {/* Contribute Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title="Partagez votre vision du Maroc" 
              subtitle="Contribuez à notre galerie en partageant vos propres photos et expériences"
              centered={true}
            />
            
            <div className="mt-8">
              <button className="px-6 py-3 bg-majorelle-blue hover:bg-majorelle-blue-dark text-white rounded-full transition-colors">
                Soumettre une image
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;