import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import HeritageMap from '../components/ui/HeritageMap';

const PatrimoinePage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/4344786/pexels-photo-4344786.jpeg)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Patrimoine Culturel
            </h1>
            <p className="text-xl text-white opacity-90">
              Explorez les trésors architecturaux et historiques du Maroc
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title="Un héritage millénaire" 
              subtitle="Découvrez les sites historiques qui racontent l'histoire du Maroc"
              centered={true}
            />
            <p className="text-lg text-gray-600 mt-6">
              Le Maroc possède un patrimoine architectural exceptionnel, témoin de son histoire riche 
              et diverse. Des médinas labyrinthiques aux imposantes kasbahs, chaque monument raconte 
              une partie de l'histoire du royaume.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage Map Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Carte du patrimoine" 
            subtitle="Explorez les sites historiques majeurs du Maroc"
          />
          
          <div className="mt-12">
            <HeritageMap />
          </div>
        </div>
      </section>

      {/* Featured Sites */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Sites remarquables" 
            subtitle="Des joyaux architecturaux classés au patrimoine mondial"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64">
                <img 
                  src="https://images.pexels.com/photos/13458334/pexels-photo-13458334.jpeg"
                  alt="Mosquée Hassan II"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Mosquée Hassan II</h3>
                <p className="text-gray-600 mb-4">
                  Chef-d'œuvre de l'architecture moderne marocaine, la mosquée Hassan II de Casablanca 
                  est la plus grande mosquée d'Afrique et la 5e plus grande au monde.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Construction achevée en 1993</li>
                  <li>• Capacité de 25 000 fidèles</li>
                  <li>• Minaret de 210 mètres de hauteur</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64">
                <img 
                  src="https://images.pexels.com/photos/4344870/pexels-photo-4344870.jpeg"
                  alt="Médina de Fès"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Médina de Fès</h3>
                <p className="text-gray-600 mb-4">
                  Plus grande médina piétonne au monde, la médina de Fès est un labyrinthe vivant 
                  de ruelles, souks et monuments historiques.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fondée au IXe siècle</li>
                  <li>• Plus de 9000 ruelles</li>
                  <li>• Classée au patrimoine mondial de l'UNESCO</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title="Préservation du patrimoine" 
              subtitle="Initiatives pour protéger notre héritage culturel"
              centered={true}
            />
            
            <p className="text-lg text-gray-600 mt-6 mb-8">
              La préservation de notre patrimoine est une priorité nationale. De nombreux projets 
              de restauration et de conservation sont en cours pour transmettre cet héritage aux 
              générations futures.
            </p>

            <button className="px-8 py-3 bg-majorelle-blue hover:bg-majorelle-blue-dark text-white rounded-full transition-colors">
              Soutenir nos projets
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatrimoinePage;