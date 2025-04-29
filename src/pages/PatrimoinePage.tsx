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
          backgroundImage: 'url(https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
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
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/61/d3/5a/agadir-oufella-at-sunset.jpg?w=1400&h=-1&s=1"
                  alt="Kasbah d'Agadir Oufella"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Kasbah d'Agadir Oufella</h3>
                <p className="text-gray-600 mb-4">
                Forteresse historique surplombant la ville, la Kasbah d'Agadir Oufella offre un témoignage poignant de l'histoire et de la résilience d'Agadir.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Édifiée au XVIe siècle par le sultan saadien Mohammed ech-Cheikh pour surveiller les installations portugaises</li>
                  <li>• Située à 236 mètres d'altitude, offrant une vue panoramique sur la baie d'Agadir</li>
                  <li>• Partiellement détruite en 1960 lors du séisme d'Agadir, puis restaurée récemment pour accueillir les visiteurs</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64">
                <img 
                  src="https://www.ootravels.com/wp-content/uploads/2024/02/Visiter-Merzouga-et-lErg-Chebbi-Les-dunes-de-Merzouga_00.jpg"
                  alt="Les Dunes de Merzouga – Erg Chebbi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Les Dunes de Merzouga – Erg Chebbi</h3>
                <p className="text-gray-600 mb-4">
                Paysages majestueux du désert marocain, Merzouga est célèbre pour ses immenses dunes dorées et ses couchers de soleil spectaculaires.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Dunes atteignant 150 mètres de hauteur</li>
                  <li>• Balades à dos de dromadaire au lever ou coucher du soleil</li>
                  <li>• Camps berbères traditionnels sous les étoiles</li>
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