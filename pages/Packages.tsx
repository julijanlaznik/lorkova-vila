
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PACKAGES } from '../constants';
import Button from '../components/ui/Button';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Packages: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(PACKAGES[0].id);

  return (
    <div className="bg-stone-900 h-screen w-full overflow-hidden flex flex-col md:flex-row">
      
      {/* Mobile Header (Only visible on small screens) */}
      <div className="md:hidden p-8 pt-24 bg-stone-900 text-white shrink-0">
        <h1 className="font-display text-4xl mb-2">Balíčky</h1>
        <p className="text-stone-400 text-sm">Vyberte si svůj pobyt.</p>
      </div>

      {PACKAGES.map((pkg) => (
        <PackagePane 
          key={pkg.id} 
          pkg={pkg} 
          isActive={activeId === pkg.id} 
          onHover={() => setActiveId(pkg.id)} 
        />
      ))}
    </div>
  );
};

const PackagePane: React.FC<{ pkg: any, isActive: boolean, onHover: () => void }> = ({ pkg, isActive, onHover }) => {
  return (
    <motion.div 
      layout
      onMouseEnter={onHover}
      onClick={onHover} // Fallback for touch devices
      className={`relative h-[400px] md:h-full cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-stone-800 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group
        ${isActive ? 'flex-[3] md:flex-[4]' : 'flex-[1] opacity-60 hover:opacity-100 hover:bg-stone-800'}
      `}
    >
      {/* Background Image - Darkened */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src={pkg.promoImage} 
          alt={pkg.title} 
          className="w-full h-full object-cover"
          animate={{ scale: isActive ? 1.05 : 1, filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)' }}
          transition={{ duration: 1.2 }}
        />
        <div className={`absolute inset-0 bg-stone-900/50 ${isActive ? 'bg-stone-900/30' : 'bg-stone-900/70'} transition-colors duration-700`}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-end">
        
        {/* Main Title & Content Area */}
        <div className="mt-auto">
          
          {/* Duration Badge - Now moved here above title */}
           <motion.div 
             layout
             className={`mb-4 transition-all duration-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 md:hidden'}`}
           >
             <span className="inline-block border border-gold-500/50 text-gold-400 px-3 py-1 text-[10px] uppercase tracking-widest rounded-full backdrop-blur-md">
               {pkg.duration}
             </span>
           </motion.div>

          <motion.h2 
            layout="position"
            className={`font-display text-3xl md:text-5xl text-white mb-4 ${!isActive && 'md:-rotate-90 md:origin-bottom-left md:absolute md:bottom-12 md:left-12 md:whitespace-nowrap transition-transform duration-500'}`}
          >
            {pkg.title}
          </motion.h2>

          <AnimatePresence mode="wait">
            {isActive && (
              <motion.div 
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: 10, height: 0, transition: { duration: 0.2 } }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="max-w-xl overflow-hidden"
              >
                <p className="text-stone-300 text-lg mb-8 font-light border-l-2 border-gold-500 pl-4">
                  {pkg.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-8">
                  {pkg.inclusions.map((inc: string, i: number) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.05) }}
                      className="flex items-start gap-3 text-stone-400 text-sm"
                    >
                      <Check size={14} className="text-gold-500 mt-1 shrink-0" />
                      <span>{inc}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-8 pt-6 border-t border-white/10">
                  <div>
                    <span className="text-xs text-stone-400 uppercase">Cena od</span>
                    <p className="text-3xl font-display text-white">{pkg.price} Kč</p>
                  </div>
                  <Link to="/booking" onClick={(e) => e.stopPropagation()}>
                    <Button variant="secondary" className="bg-gold-500 hover:bg-gold-400 border-none text-stone-900">
                      Vybrat Balíček
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Packages;
