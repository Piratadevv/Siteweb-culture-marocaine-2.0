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
    title: 'Poterie traditionnelle de Safi',
    image: 'https://images.pexels.com/photos/2162938/pexels-photo-2162938.jpeg',
    type: 'art'
  },
  {
    id: 2,
    title: 'Musiciens Gnaoua',
    image: 'https://images.pexels.com/photos/3810817/pexels-photo-3810817.jpeg',
    type: 'music'
  },
  {
    id: 3,
    title: 'Tajine marocain',
    image: 'https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg',
    type: 'food'
  },
  {
    id: 4,
    title: 'Médina de Chefchaouen',
    image: 'https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg',
    type: 'heritage'
  },
  {
    id: 5,
    title: 'Tapis berbère',
    image: 'https://images.pexels.com/photos/10832432/pexels-photo-10832432.jpeg',
    type: 'art'
  },
  {
    id: 6,
    title: 'Danse Ahidous',
    image: 'https://images.pexels.com/photos/1154190/pexels-photo-1154190.jpeg',
    type: 'music'
  },
  {
    id: 7,
    title: 'Pâtisseries marocaines',
    image: 'https://images.pexels.com/photos/4193830/pexels-photo-4193830.jpeg',
    type: 'food'
  },
  {
    id: 8,
    title: 'Kasbah des Oudayas',
    image: 'https://images.pexels.com/photos/4344786/pexels-photo-4344786.jpeg',
    type: 'heritage'
  }
  ,{
    id: 9,
    title: 'Poterie traditionnelle de Safi',
    image: 'https://images.pexels.com/photos/2162938/pexels-photo-2162938.jpeg',
    type: 'art'
  },
  {
    id: 10,
    title: 'Musiciens Gnaoua',
    image: 'https://images.pexels.com/photos/3810817/pexels-photo-3810817.jpeg',
    type: 'music'
  },
  {
    id: 11,
    title: 'Tajine marocain',
    image: 'https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg',
    type: 'food'
  },
  {
    id: 12,
    title: 'Médina de Chefchaouen',
    image: 'https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg',
    type: 'heritage'
  },
  {
    id: 13,
    title: 'Tapis berbère',
    image: 'https://images.pexels.com/photos/10832432/pexels-photo-10832432.jpeg',
    type: 'art'
  },
  {
    id: 14,
    title: 'Danse Ahidous',
    image: 'https://images.pexels.com/photos/1154190/pexels-photo-1154190.jpeg',
    type: 'music'
  },
  {
    id: 15,
    title: 'Pâtisseries marocaines',
    image: 'https://images.pexels.com/photos/4193830/pexels-photo-4193830.jpeg',
    type: 'food'
  },
  {
    id: 16,
    title: 'Kasbah des Oudayas',
    image: 'https://images.pexels.com/photos/4344786/pexels-photo-4344786.jpeg',
    type: 'heritage'
  }
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
                src={item.image} 
                alt={item.title}
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
                src={selectedItem.image} 
                alt={selectedItem.title}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-4">
                <h3 className="text-xl font-serif font-bold">{selectedItem.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CultureGallery;