import React, { useState } from 'react';
import mapImage from '../../images/mapmar.jpg';
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
    image: 'https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg',
    description: 'Située à Casablanca, c\'est la plus grande mosquée du Maroc et la 5ème plus grande au monde.',
    location: 'Casablanca',
    latitude: 32.6083,
    longitude: -8.05
  },
  {
    id: 2,
    name: 'Médina de Fès',
    image: 'https://images.pexels.com/photos/31732400/pexels-photo-31732400/free-photo-of-traditional-leather-tannery-in-fes-morocco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Fondée au 9ème siècle, c\'est l\'une des médinas les plus grandes et les mieux préservées du monde arabe.',
    location: 'Fès',
    latitude: 32.98083,
    longitude: -7
  },
  {
    id: 3,
    name: 'Ksar d\'Aït-Ben-Haddou',
    image: 'https://images.pexels.com/photos/2347774/pexels-photo-2347774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Un exemple frappant d\'architecture du sud marocain, inscrit au patrimoine mondial de l\'UNESCO.',
    location: 'Ouarzazate',
    latitude: 30.5470,
    longitude: -7.8281
  },
  {
    id: 4,
    name: 'Jamaa el-Fna',
    image: 'https://images.pexels.com/photos/20895317/pexels-photo-20895317/free-photo-of-bazaar-in-city-in-evening.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Un jardin botanique enchanteur créé par le peintre français Jacques Majorelle, plus tard acquis par Yves Saint Laurent.',
    location: 'Marrakech',
    latitude: 31.412,
    longitude: -7.89
  },
  {
    id: 5,
    name: 'Caves of Hercules',
    image: 'https://images.unsplash.com/photo-1682972443796-1da80df666f3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Un jardin botanique enchanteur créé par le peintre français Jacques Majorelle, plus tard acquis par Yves Saint Laurent.',
    location: 'Tanger',
    latitude: 34.7912,
    longitude: -7.292027
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
            <img src={mapImage} alt="Map" />


              
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
             <div className="rounded-lg overflow-hidden mb-4">
                  <img 
                       src={selectedSite.image} 
                       alt={selectedSite.name}
                         className="object-cover w-[700px] h-[400px] mx-auto" // Example: Set width and height
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