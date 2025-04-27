import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

// Craft categories and their items
const craftCategories = [
  {
    id: 'ceramics',
    name: 'Céramique et Poterie',
    description: 'L\'art de la céramique et de la poterie marocaine est reconnu pour ses formes uniques et ses motifs colorés.',
    image: 'https://images.pexels.com/photos/2162938/pexels-photo-2162938.jpeg',
    items: [
      {
        name: 'Poterie de Safi',
        description: 'Safi est réputée pour sa céramique bleue et blanche, inspirée des traditions portugaises et espagnoles.',
        image: 'https://plus.unsplash.com/premium_photo-1679811672112-dfe811796cf9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        name: 'Céramique de Fès',
        description: 'Caractérisée par ses motifs bleus sur fond blanc, la céramique de Fès est emblématique de l\'artisanat marocain.',
        image: 'https://images.unsplash.com/photo-1719852255246-898f965e04e4?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ]
  },
  {
    id: 'textiles',
    name: 'Textiles et Tapis',
    description: 'Les tapis marocains racontent des histoires à travers leurs motifs, symboles et techniques de tissage.',
    image: 'https://images.pexels.com/photos/15829237/pexels-photo-15829237/free-photo-of-street-stall-with-carpets.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    items: [
      {
        name: 'Tapis berbères',
        description: 'Les tapis berbères sont reconnaissables à leurs motifs géométriques et leurs couleurs naturelles.',
        image: 'https://plus.unsplash.com/premium_photo-1725572259393-11b98c82dcc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        name: 'Tissage de Chefchaouen',
        description: 'La ville bleue est connue pour ses tissages colorés, souvent réalisés avec des techniques ancestrales.',
        image: 'https://images.unsplash.com/photo-1616089180418-56172f6c3c2b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ]
  },
  {
    id: 'metal',
    name: 'Travail du Métal',
    description: 'De la ciselure à la dinanderie, les artisans marocains transforment le métal en véritables œuvres d\'art.',
    image: 'https://images.unsplash.com/photo-1654076847645-b72b3b66d576?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    items: [
      {
        name: 'Lanternes marocaines',
        description: 'Ces lanternes en métal ajouré créent des jeux d\'ombre et de lumière caractéristiques.',
        image: 'https://images.unsplash.com/photo-1571139318801-2456d345c6f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        name: 'Théières en cuivre',
        description: 'Symbole d\'hospitalité, les théières marocaines sont souvent finement ciselées et décorées.',
        image: 'https://images.pexels.com/photos/31094855/pexels-photo-31094855/free-photo-of-intricate-brass-teapot-with-arabic-calligraphy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  }
];

const ArtisanatPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1721508490084-1b1de5b230d4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              L'Artisanat Marocain
            </h1>
            <p className="text-xl text-white opacity-90">
              Découvrez les savoir-faire ancestraux et les techniques artisanales qui font la renommée du Maroc à travers le monde.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title="Un patrimoine artisanal exceptionnel" 
              centered={true}
            />
            <p className="text-lg text-gray-600">
              L'artisanat marocain est riche de traditions millénaires transmises de génération en génération. Des souks animés de Marrakech aux ateliers de Fès, en passant par les coopératives féminines de l'Atlas, chaque région du Maroc possède ses spécialités artisanales distinctives.
            </p>
          </div>
        </div>
      </section>

      {/* Craft Categories */}
      {craftCategories.map((category, index) => (
        <section 
          key={category.id}
          className={`py-16 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Category description */}
              <div className={`${index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}`}>
                <SectionTitle title={category.name} />
                <p className="text-lg text-gray-600 mb-6">
                  {category.description}
                </p>
                
                <div className="space-y-6 mt-8">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex flex-col sm:flex-row gap-4">
                      <div className="sm:w-1/3 w-full">
                        <div className="rounded-lg overflow-hidden h-40">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="sm:w-2/3">
                        <h4 className="text-xl font-serif font-bold mb-2">{item.name}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Category image */}
              <div className={`${index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}`}>
                <div className="rounded-lg overflow-hidden shadow-lg h-96">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Artisan Stories Section */}
      <section className="py-16 bg-majorelle-blue">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Témoignages d'artisans" 
            subtitle="Découvrez les histoires et le savoir-faire des maîtres artisans marocains"
            centered={true}
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://poterieserghini.com/storage/2023/04/SN_Serghini-Safi-0106-1024x684.jpg" 
                  alt="Artisan potier"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Moulay Ahmed Serghini</h3>
                <p className="text-majorelle-blue font-medium mb-4">Maître potier à Safi</p>
                <p className="text-gray-600">
                  "Je pratique cet art depuis 40 ans, comme mon père et mon grand-père avant moi. Chaque pièce raconte une histoire de notre culture."
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://tissusetartisansdumonde.fr/wp-content/uploads/2011/11/fatima-tisserande-berbere.jpg" 
                  alt="Tisseuse de tapis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Fatima</h3>
                <p className="text-majorelle-blue font-medium mb-4">Tisseuse dans l'Atlas</p>
                <p className="text-gray-600">
                  "Nos tapis racontent l'histoire de notre tribu. Chaque symbole a une signification que nous transmettons à nos filles."
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1677700375023-536d895b4080?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Artisan du cuir"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">Hassan</h3>
                <p className="text-majorelle-blue font-medium mb-4">Maroquinier à Fès</p>
                <p className="text-gray-600">
                  "Le travail du cuir demande patience et précision. Dans notre atelier de la médina, nous perpétuons des techniques centenaires."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title="Ateliers et démonstrations" 
              subtitle="Participez à des expériences artisanales lors de votre visite au Maroc"
              centered={true}
            />
            
            <div className="mt-8">
              <button className="px-6 py-3 bg-terracotta hover:bg-terracotta/90 text-white rounded-full transition-colors">
                Découvrir nos ateliers
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtisanatPage;