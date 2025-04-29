import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title="Contactez-nous" 
              subtitle="Nous sommes à votre écoute pour toute question, suggestion ou collaboration"
              centered={true}
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-serif font-bold mb-6">Nos coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-majorelle-blue mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Adresse</h4>
                    <p className="text-gray-600">
                      123 Avenue Hassan II<br />
                      Rabat, Maroc
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-majorelle-blue mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-gray-600">
                      contact@tresorsdumaroc.ma
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-majorelle-blue mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Téléphone</h4>
                    <p className="text-gray-600">
                      +212 5XX XX XX XX
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold text-lg mb-4">Heures d'ouverture</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Lundi - Vendredi:</span>
                    <span>9h00 - 18h00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Samedi:</span>
                    <span>10h00 - 15h00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dimanche:</span>
                    <span>Fermé</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-majorelle-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-majorelle-blue"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-majorelle-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-majorelle-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-majorelle-blue"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-majorelle-blue hover:bg-majorelle-blue-dark text-white rounded-md transition-colors"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="h-[400px] bg-slate-200 rounded-lg relative flex items-center justify-center">
            <p className="text-slate-500">Carte interactive</p>
            <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21303051.708749257!2d-17.50471495463685!3d31.50849016735607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda739a4cfaa9937%3A0xf5ca0b1a2c90ed1f!2sMorocco!5e0!3m2!1sen!2sma!4v1681349090647!5m2!1sen!2sma"
    width="600"
    height="450"
    style={{ border: 0 }}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    loading="lazy"
    title="Google Maps"
    className="absolute inset-0 w-full h-full rounded-lg"
    ></iframe>
  
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;