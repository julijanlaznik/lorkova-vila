import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StickyCTA from './StickyCTA';
import ContactSection from './ContactSection';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  // Don't show ContactSection on Contact page to avoid duplication, or if specific needed
  const showContactSection = location.pathname !== '/contact';

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      {showContactSection && <ContactSection />}
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Layout;