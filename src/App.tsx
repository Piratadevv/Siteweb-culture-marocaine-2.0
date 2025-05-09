import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import ScrollToTop from './components/ui/ScrollToTop.jsx';

// Layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import ArtisanatPage from './pages/ArtisanatPage';
import MusiquePage from './pages/MusiquePage';
import GastronomiePage from './pages/GastronomiePage';
import PatrimoinePage from './pages/PatrimoinePage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div
          className="flex flex-col min-h-screen"
          style={{
            background:
              'linear-gradient(to bottom, rgb(241, 241, 241) 0px, rgb(132, 138, 146) 80px)',
          }}
        >
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/artisanat" element={<ArtisanatPage />} />
              <Route path="/musique" element={<MusiquePage />} />
              <Route path="/gastronomie" element={<GastronomiePage />} />
              <Route path="/patrimoine" element={<PatrimoinePage />} />
              <Route path="/galerie" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
