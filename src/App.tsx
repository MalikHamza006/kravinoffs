import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { SoftwarePortfolioPage } from './pages/SoftwarePortfolioPage';
import { VideoPortfolioPage } from './pages/VideoPortfolioPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-obsidian-950 text-chrome-200 selection:bg-white selection:text-black overflow-x-hidden w-full max-w-full">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/software-portfolio" element={<SoftwarePortfolioPage />} />
            <Route path="/portfolio" element={<Navigate to="/software-portfolio" replace />} />
            <Route path="/video-portfolio" element={<VideoPortfolioPage />} />
            <Route path="/videos" element={<Navigate to="/video-portfolio" replace />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
};

export default App;
