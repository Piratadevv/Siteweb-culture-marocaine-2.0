import React, { useState } from 'react';

// Heritage site data
interface HeritageSite {
  id: number;
  name: string;
  image: string;
  description: string;
  location: string;
  latitude: number;
  longitude: number;
}

const heritageSites: HeritageSite[] = [
  {
    id: 1,
    name: 'Mosquée Hassan II',
    image: 'https://images.pexels.com/photos/13458334/pexels-photo-13458334.jpeg',
    description: 'Située à Casablanca, c\'est la plus grande mosquée du Maroc et la 5ème plus grande au monde.',
    location: 'Casablanca',
    latitude: 33.6083,
    longitude: -7.6383
  },
  {
    id: 2,
    name: 'Médina de Fès',
    image: 'https://images.pexels.com/photos/4344870/pexels-photo-4344870.jpeg',
    description: 'Fondée au 9ème siècle, c\'est l\'une des médinas les plus grandes et les mieux préservées du monde arabe.',
    location: 'Fès',
    latitude: 34.0657,
    longitude: -4.9773
  },
  {
    id: 3,
    name: 'Ksar d\'Aït-Ben-Haddou',
    image: 'https://images.pexels.com/photos/4216244/pexels-photo-4216244.jpeg',
    description: 'Un exemple frappant d\'architecture du sud marocain, inscrit au patrimoine mondial de l\'UNESCO.',
    location: 'Ouarzazate',
    latitude: 31.0470,
    longitude: -7.1281
  },
  {
    id: 4,
    name: 'Jardin Majorelle',
    image: 'https://images.pexels.com/photos/4913751/pexels-photo-4913751.jpeg',
    description: 'Un jardin botanique enchanteur créé par le peintre français Jacques Majorelle, plus tard acquis par Yves Saint Laurent.',
    location: 'Marrakech',
    latitude: 31.6412,
    longitude: -8.0027
  }
];

const HeritageMap: React.FC = () => {
  const [selectedSite, setSelectedSite] = useState<HeritageSite | null>(null);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        {/* Map Placeholder */}
        <div className="bg-slate-100 p-6 flex flex-col">
          <h3 className="text-xl font-serif font-bold mb-4">Carte du patrimoine</h3>
          <div className="flex-grow relative bg-slate-200 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-slate-500">Carte interactive du Maroc</p>
              <img src="" > </img>
              {/* This is a placeholder for the actual map implementation */}
              {/* In a real implementation, we would use a mapping library like Leaflet or Google Maps */}
            </div>
            
            {/* Location Markers */}
            <div className="absolute inset-0">
              {heritageSites.map(site => (
                <button
                  key={site.id}
                  className={`absolute w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center
                    ${selectedSite?.id === site.id 
                      ? 'bg-terracotta scale-125' 
                      : 'bg-majorelle-blue hover:bg-terracotta'
                    }`}
                  style={{ 
                    top: `${(1 - (site.latitude - 30) / 5) * 90}%`, 
                    left: `${((site.longitude + 9) / 3) * 90}%`
                  }}
                  onClick={() => setSelectedSite(site)}
                  aria-label={`Voir ${site.name}`}
                >
                  <span className="block w-2 h-2 bg-white rounded-full"></span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {heritageSites.map(site => (
              <button
                key={site.id}
                className={`px-3 py-1 text-sm rounded-full transition-colors
                  ${selectedSite?.id === site.id 
                    ? 'bg-terracotta text-white' 
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                onClick={() => setSelectedSite(site)}
              >
                {site.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Site Information */}
        <div className="p-6">
          {selectedSite ? (
            <div className="animate-fadeIn">
              <div className="rounded-lg overflow-hidden h-48 mb-4">
                <img 
                  src={selectedSite.image} 
                  alt={selectedSite.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-serif font-bold mb-2">{selectedSite.name}</h3>
              <p className="text-majorelle-blue font-medium mb-3">{selectedSite.location}</p>
              <p className="text-gray-600">{selectedSite.description}</p>
              
              <button className="mt-4 px-4 py-2 bg-majorelle-blue text-white rounded hover:bg-majorelle-blue-dark transition-colors">
                Découvrir en détail
              </button>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-center">
              <p className="text-slate-500">
                Sélectionnez un site sur la carte ou dans la liste pour en savoir plus.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeritageMap;