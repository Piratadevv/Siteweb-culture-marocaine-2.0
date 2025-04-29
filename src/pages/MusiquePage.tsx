import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

const MusiquePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle title="Musique traditionnelle" subtitle="Découvrez les sons et rythmes de notre héritage" />
      
      <div className="mt-10 grid gap-10">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-amber-800 mb-4">Les instruments traditionnels</h3>
          <p className="text-gray-700 mb-6">
            Les instruments de musique traditionnels sont au cœur de notre patrimoine culturel.
            Ils témoignent d'un savoir-faire artisanal et d'une richesse sonore transmise de génération en génération.
          </p>

          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Medina_guitars%2C_Marrakesh%2C_Morocco.jpg" alt="Instruments de musique" className="w-full  h-[400px] object-cover rounded-lg mb-4" />
          <div className="bg-amber-50 p-4 rounded-md">
            <p className="italic text-amber-900">
              "La musique traditionnelle est la voix de notre passé qui continue à résonner dans le présent."
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-amber-800 mb-4">Les chants et danses</h3>
          <p className="text-gray-700 mb-6">
            Les chants et danses traditionnels racontent l'histoire de notre peuple, de nos célébrations 
            et de nos rituels. Chaque mélodie transporte avec elle des siècles de tradition.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Chants de célébration des récoltes</li>
            <li>Musiques de fêtes traditionnelles</li>
            <li>Berceuses et comptines ancestrales</li>
            <li>Danses rituelles et cérémoniales</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-amber-800 mb-4">Festivals et événements</h3>
          <p className="text-gray-700 mb-6">
            Découvrez les événements où la musique traditionnelle est mise à l'honneur,
            permettant aux nouvelles générations de découvrir ce précieux héritage culturel.
          </p>
          <div className="grid gap-4 mt-4">
            <div className="border-l-4 border-amber-600 pl-4">
              <img src="https://maroc-diplomatique.net/wp-content/uploads/2019/06/Festival-Gnaoua.png" alt="Festival Gnaoua" className=" w-[500px] h-[200px] object-cover rounded-lg mb-2" />
              <h4 className="font-medium text-lg">le Festival Gnaoua</h4>
              <p className="text-gray-600">Juin - Place du village</p>
            </div>
            <div className="border-l-4 border-amber-600 pl-4">
            <img src="https://www.vh.ma/wp-content/uploads/2025/02/Musique-Andalouse.jpg" alt="Festival Gnaoua" className=" w-[500px] h-[200px] object-cover rounded-lg mb-2" />
              <h4 className="font-medium text-lg">Nuits des Traditions Musicales</h4>
              <p className="text-gray-600">Août - Théâtre en plein air</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusiquePage;