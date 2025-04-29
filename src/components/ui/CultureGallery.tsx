import React, { useState } from 'react';

type GalleryItemType = 'all' | 'art' | 'music' | 'food' | 'heritage';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  type: GalleryItemType;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'zellige', 
    image: 'https://images.pexels.com/photos/12494923/pexels-photo-12494923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'art'
  },
  {
    id: 2,
    title: 'Musique Gnaoua',
    image: 'https://images.unsplash.com/photo-1567981964169-7c2597346322?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'music'
  },
  {
    id: 3,
    title: 'Cuisine Marocaine',
    image: 'https://images.unsplash.com/photo-1661081988119-58e40ee39201?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'food'
  },
  {
    id: 4,
    title: 'Patrimoine Architectural',
    image: 'https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg',
    type: 'heritage'
  },
  {
    id: 5,
    title: 'Artisanat de Marrakech',
    image: 'https://images.pexels.com/photos/29903735/pexels-photo-29903735/free-photo-of-intricate-moroccan-doorway-in-fes-morocco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Artisanat" className="rounded-full w-16 h-16 transition-transform duration-800 hover:scale-110',
    type: 'art'
  },
  {
    id: 6,
    title: 'Tajine traditionnel',
    image: 'https://images.pexels.com/photos/23025188/pexels-photo-23025188/free-photo-of-woman-eating-meal-in-handmade-bowl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'food'
  },
  {
    id: 7,
    title: 'Instruments traditionnels',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Medina_guitars%2C_Marrakesh%2C_Morocco.jpg',
    type: 'music',
  },
  {
    id: 8,
    title: "Kasbah d'Agadir Oufella",
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/61/d3/5a/agadir-oufella-at-sunset.jpg?w=1400&h=-1&s=1',
    type: 'heritage',
  },
  {
    id: 9,
    title: 'Céramique et Poterie',  
    image: 'https://images.pexels.com/photos/2162938/pexels-photo-2162938.jpeg',
    type: 'art'
  },
  {
    id: 10,
    title: 'Couscous royal',
    image: 'https://img.mesrecettesfaciles.fr/2024-01/le-couscous-marocain-jyw-1200.webp',
    type: 'food',
  },
  {
    id: 11,
    title: 'Festival Gnaoua',
    image: 'https://static.latribune.fr/full_width/1005943/ceremonie-ouverture-gnaoua-festival.jpg',
    type: 'music',
  },
  {
    id: 12,
    title: 'Les Dunes de Merzouga – Erg Chebbi',
    image: 'https://www.ootravels.com/wp-content/uploads/2024/02/Visiter-Merzouga-et-lErg-Chebbi-Les-dunes-de-Merzouga_00.jpg',
    type: 'heritage',
  },
  {
    id: 13,
    title: 'Poterie de Safi',  
    image: 'https://plus.unsplash.com/premium_photo-1679811672112-dfe811796cf9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'art'
  },
  {
    id: 14,
    title: 'Pâtisseries marocaines',
    image: 'https://www.riadnayanour.com/wp-content/uploads/2023/11/patisserie-marrakech-1140x628.jpg',
    type: 'food',
  },
  {
    id: 15,
    title: 'Musique Amazigh', 
    image: 'https://images.pexels.com/photos/30132757/pexels-photo-30132757/free-photo-of-close-up-of-a-traditional-moroccan-musical-instrument.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Musique" className="rounded-full w-16 h-16 transition-transform duration-800 hover:scale-110',
    type: 'music'
  },
  {
    id: 16,
    title: 'Kasbah de Aït-Ben-Haddou',
    image: 'https://images.pexels.com/photos/943510/pexels-photo-943510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Patrimoine" className="rounded-full w-16 h-16 transition-transform duration-800 hover:scale-110',
    type: 'heritage'
  },
  {
    id: 17,
    title: 'Textiles et Tapis',
    image: 'https://images.pexels.com/photos/15829237/pexels-photo-15829237/free-photo-of-street-stall-with-carpets.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'art'
  },
  {
    id: 18,
    title: 'Service du thé traditionnel',
    image: 'https://www.riadnayanour.com/wp-content/uploads/2023/11/la-patisserie-marrakech.jpg',
    type: 'food',
  },
  {
    id: 19,
    title: 'Nuits des Traditions Musicales',
    image: 'https://www.vh.ma/wp-content/uploads/2025/02/Musique-Andalouse.jpg',
    type: 'music',
  },
  {
    id: 20,
    title: 'Tapis Berbères',
    image: 'https://plus.unsplash.com/premium_photo-1725572259393-11b98c82dcc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'art'
  },
  {
    id: 21,
    title: 'Gastronomie Marocaine',
    image: 'https://i0.wp.com/www.luxeradio.ma/wp-content/uploads/2016/05/GAS-COMPETITIVITE-GASTRONOMIE-MAROCAINE-030516.jpg?fit=1798%2C1000&ssl=1',
    type: 'food',
  },
  {
    id: 22,
    title: 'Artisanat de Chefchaouen',
    image: 'https://images.unsplash.com/photo-1616089180418-56172f6c3c2b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'art'
  },
  {
    id: 23,
    title: 'Tagines Traditionnelles',
    image: 'https://images.pexels.com/photos/30068444/pexels-photo-30068444/free-photo-of-traditional-moroccan-lamb-tagine-with-almonds-and-prunes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Gastronomie" className="rounded-full w-16 h-16 transition-transform duration-800 hover:scale-110',
    type: 'food'
  },
  {
    id: 24,
    title: 'Lanternes marocaines',
    image: 'https://images.unsplash.com/photo-1571139318801-2456d345c6f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'art',
  },
  {
    id: 25,
    title: 'Travail du metal',  
    image: 'https://images.unsplash.com/photo-1654076847645-b72b3b66d576?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'art'
  },
  {
    id: 26,
    title: 'Théières en cuivre',
    image: 'https://images.pexels.com/photos/31094855/pexels-photo-31094855/free-photo-of-intricate-brass-teapot-with-arabic-calligraphy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'art',
  }, {
    id: 27,
    title: 'Mosquée Hassan II',
    image: 'https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg',
    type: 'heritage',
  },
  {
    id: 28,
    title: 'Médina de Fès',
    image: 'https://images.pexels.com/photos/31732400/pexels-photo-31732400/free-photo-of-traditional-leather-tannery-in-fes-morocco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'heritage',
  },
  {
    id: 29,
    title: 'Ksar d\'Aït-Ben-Haddou',
    image: 'https://images.pexels.com/photos/2347774/pexels-photo-2347774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'heritage',
  },
  {
    id: 30,
    title: 'Jamaa el-Fna',
    image: 'https://images.pexels.com/photos/20895317/pexels-photo-20895317/free-photo-of-bazaar-in-city-in-evening.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    type: 'heritage',
  },

];

const CultureGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryItemType>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === activeFilter);
    
  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeFilter === 'all' 
              ? 'bg-majorelle-blue text-white' 
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Tous
        </button>
        <button
          onClick={() => setActiveFilter('art')}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeFilter === 'art' 
              ? 'bg-majorelle-blue text-white' 
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Artisanat
        </button>
        <button
          onClick={() => setActiveFilter('music')}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeFilter === 'music' 
              ? 'bg-majorelle-blue text-white' 
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Musique
        </button>
        <button
          onClick={() => setActiveFilter('food')}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeFilter === 'food' 
              ? 'bg-majorelle-blue text-white' 
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Gastronomie
        </button>
        <button
          onClick={() => setActiveFilter('heritage')}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeFilter === 'heritage' 
              ? 'bg-majorelle-blue text-white' 
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Patrimoine
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map(item => (
          <div 
            key={item.id}
            className="group overflow-hidden rounded-lg relative cursor-pointer transition-transform duration-300 hover:-translate-y-1"
            onClick={() => setSelectedItem(item)}
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src={item.image || 'default-image.jpg'} 
                alt={item.title || 'Default Title'}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <h3 className="text-white font-serif font-medium">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute -top-12 right-0 text-white hover:text-terracotta transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              Fermer
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-xl">
              <img 
                src={selectedItem?.image || 'default-image.jpg'} 
                alt={selectedItem?.title || 'Default Title'}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-4">
                <h3 className="text-xl font-serif font-bold">{selectedItem?.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CultureGallery;