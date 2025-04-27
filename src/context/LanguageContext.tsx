import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'fr' | 'ar' | 'en';

// Language context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.artisanat': 'Artisanat',
    'nav.musique': 'Musique & Danse',
    'nav.gastronomie': 'Gastronomie',
    'nav.patrimoine': 'Patrimoine',
    'nav.gallery': 'Galerie',
    'nav.contact': 'Contact',
    
    // Home Page
    'home.hero.title': 'Trésors du Maroc',
    'home.hero.subtitle': 'Art et Culture Marocaine',
    'home.hero.cta': 'Découvrir',
    'home.welcome.title': 'Bienvenue au cœur de la culture marocaine',
    'home.welcome.description': 'Explorez la richesse et la diversité du patrimoine culturel marocain à travers notre plateforme dédiée aux arts, à la musique, à la gastronomie et aux traditions séculaires.',
    'home.featured.title': 'À découvrir',
    
    // Footer
    'footer.copyright': 'Tous droits réservés',
    'footer.newsletter': 'Abonnez-vous à notre newsletter',
    'footer.newsletter.cta': 'S\'abonner',
    'footer.newsletter.placeholder': 'Votre email',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.artisanat': 'الحرف اليدوية',
    'nav.musique': 'الموسيقى والرقص',
    'nav.gastronomie': 'فن الطبخ',
    'nav.patrimoine': 'التراث',
    'nav.gallery': 'معرض الصور',
    'nav.contact': 'اتصل بنا',
    
    // Home Page
    'home.hero.title': 'كنوز المغرب',
    'home.hero.subtitle': 'الفن والثقافة المغربية',
    'home.hero.cta': 'اكتشف',
    'home.welcome.title': 'مرحبًا بكم في قلب الثقافة المغربية',
    'home.welcome.description': 'استكشف ثراء وتنوع التراث الثقافي المغربي من خلال منصتنا المخصصة للفنون والموسيقى وفن الطبخ والتقاليد القديمة.',
    'home.featured.title': 'للاكتشاف',
    
    // Footer
    'footer.copyright': 'جميع الحقوق محفوظة',
    'footer.newsletter': 'اشترك في نشرتنا الإخبارية',
    'footer.newsletter.cta': 'اشتراك',
    'footer.newsletter.placeholder': 'بريدك الإلكتروني',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.artisanat': 'Crafts',
    'nav.musique': 'Music & Dance',
    'nav.gastronomie': 'Cuisine',
    'nav.patrimoine': 'Heritage',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    
    // Home Page
    'home.hero.title': 'Treasures of Morocco',
    'home.hero.subtitle': 'Moroccan Art and Culture',
    'home.hero.cta': 'Discover',
    'home.welcome.title': 'Welcome to the heart of Moroccan culture',
    'home.welcome.description': 'Explore the richness and diversity of Moroccan cultural heritage through our platform dedicated to arts, music, cuisine, and age-old traditions.',
    'home.featured.title': 'Featured',
    
    // Footer
    'footer.copyright': 'All rights reserved',
    'footer.newsletter': 'Subscribe to our newsletter',
    'footer.newsletter.cta': 'Subscribe',
    'footer.newsletter.placeholder': 'Your email',
  }
};

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook for using the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};