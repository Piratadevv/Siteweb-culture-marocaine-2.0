import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

const GastronomiePage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section 
        className="py-20 bg-cover bg-center relative "
        style={{ height: '400px',
          backgroundImage: 'url(https://i0.wp.com/www.luxeradio.ma/wp-content/uploads/2016/05/GAS-COMPETITIVITE-GASTRONOMIE-MAROCAINE-030516.jpg?fit=1798%2C1000&ssl=1)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Gastronomie Marocaine
            </h1>
            <p className="text-xl text-white opacity-90">
              Un voyage culinaire au cœur des saveurs et traditions du Maroc
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title="Une cuisine riche en histoire" 
              subtitle="La gastronomie marocaine, un patrimoine culinaire millénaire"
              centered={true}
            />
            <p className="text-lg text-gray-600 mt-6">
              La cuisine marocaine est un mélange subtil d'influences arabes, berbères, méditerranéennes et africaines. 
              Elle se caractérise par l'utilisation d'épices variées, d'herbes aromatiques et de techniques de cuisson traditionnelles.
            </p>
          </div>
        </div>
      </section>

      {/* Plats Emblématiques */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Plats Emblématiques" 
            subtitle="Découvrez les spécialités qui font la renommée de la cuisine marocaine"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64">
                <img 
                  src="https://images.pexels.com/photos/23025188/pexels-photo-23025188/free-photo-of-woman-eating-meal-in-handmade-bowl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Tajine traditionnel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Le Tajine</h3>
                <p className="text-gray-600">
                  Plat emblématique de la cuisine marocaine, le tajine tire son nom du récipient en terre cuite 
                  dans lequel il est préparé. Cette cuisson lente permet aux saveurs de se développer pleinement.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64">
                <img 
                  src="https://img.mesrecettesfaciles.fr/2024-01/le-couscous-marocain-jyw-1200.webp"
                  alt="Couscous royal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Le Couscous</h3>
                <p className="text-gray-600">
                  Servi traditionnellement le vendredi, le couscous est un plat familial par excellence. 
                  Il se compose de semoule de blé accompagnée de légumes et de viande.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64">
                <img 
                  src="https://www.riadnayanour.com/wp-content/uploads/2023/11/patisserie-marrakech-1140x628.jpg"
                  alt="Pâtisseries marocaines"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Les Pâtisseries</h3>
                <p className="text-gray-600">
                  Les pâtisseries marocaines, véritables œuvres d'art, sont préparées à base d'amandes, 
                  de miel et de fleur d'oranger. Elles accompagnent parfaitement le thé à la menthe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Art de la Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="L'Art de la Table" 
            subtitle="La tradition du partage et de l'hospitalité"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Le Rituel du Thé</h3>
              <p className="text-gray-600 mb-6">
                Le thé à la menthe est bien plus qu'une simple boisson au Maroc. Sa préparation et son 
                service sont un véritable rituel qui symbolise l'hospitalité marocaine.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-terracotta rounded-full mt-2 mr-3"></span>
                  <p className="text-gray-600">Préparation minutieuse du thé vert avec des feuilles de menthe fraîche</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-terracotta rounded-full mt-2 mr-3"></span>
                  <p className="text-gray-600">Service traditionnel avec élévation de la théière pour créer la mousse</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-terracotta rounded-full mt-2 mr-3"></span>
                  <p className="text-gray-600">Dégustation accompagnée de pâtisseries traditionnelles</p>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://www.riadnayanour.com/wp-content/uploads/2023/11/la-patisserie-marrakech.jpg"
                alt="Service du thé traditionnel"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-majorelle-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-serif font-bold mb-6">Découvrez nos ateliers de cuisine</h2>
            <p className="text-lg mb-8">
              Apprenez à préparer les plats traditionnels marocains avec nos chefs expérimentés
            </p>
            <button className="px-8 py-3 bg-terracotta hover:bg-terracotta/90 text-white rounded-full transition-colors">
              Réserver un atelier
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GastronomiePage;