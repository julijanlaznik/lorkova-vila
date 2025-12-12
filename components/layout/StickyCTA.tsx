import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-stone-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] p-4 md:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <Link to="/booking" className="flex items-center justify-center gap-2 w-full bg-stone-900 text-white font-medium py-3 rounded-full shadow-lg">
        <Calendar size={18} />
        <span>Rezervovat Pobyty</span>
      </Link>
    </div>
  );
};

export default StickyCTA;