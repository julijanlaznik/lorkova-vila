
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GALLERY } from '../constants';

const Gallery: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* --- INTRO PARALLAX SECTION --- */}
      <section className="relative h-[60vh] overflow-hidden flex items-end pb-24 px-6 md:px-12">
        <ParallaxImage src="/images/gallery-hero.webp" />
        
        <div className="relative z-10 max-w-4xl">
           <motion.h1 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             className="font-display text-7xl md:text-9xl text-stone-900 leading-none mb-6"
           >
             Momenty
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="text-stone-600 text-xl font-light"
           >
             Hra světla a stínů v srdci Beskyd.
           </motion.p>
        </div>
      </section>

      {/* --- ASYMMETRICAL GRID (BENTO) --- */}
      <div className="container mx-auto px-4 md:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4 md:gap-6">
          
          {GALLERY.map((item, idx) => {
            // Determine size classes based on index to create a "mosaic" feel
            // 0: Large square (2x2)
            // 1: Tall (1x2)
            // 2: Standard (1x1)
            // 3: Wide (2x1)
            // 4, 5, 6: Standard
            // 7: Wide
            // etc.
            
            let gridClass = "md:col-span-1 md:row-span-1";
            
            if (idx === 0) gridClass = "md:col-span-2 md:row-span-2";
            else if (idx === 1) gridClass = "md:col-span-1 md:row-span-2";
            else if (idx === 3) gridClass = "md:col-span-2 md:row-span-1";
            else if (idx === 6) gridClass = "md:col-span-2 md:row-span-2";
            else if (idx === 8) gridClass = "md:col-span-3 md:row-span-2 h-[500px] md:h-auto"; // Full width cinematic

            return (
              <GalleryItem 
                key={item.id} 
                item={item} 
                className={gridClass} 
                delay={idx * 0.1}
              />
            );
          })}

        </div>
      </div>
      
      {/* --- FOOTER CTA --- */}
      <section className="bg-stone-900 text-white py-32 text-center overflow-hidden relative">
          <div className="absolute inset-0 opacity-20">
             <img src="/images/bg-footer.webp" className="w-full h-full object-cover" alt="Footer bg" />
          </div>
          <div className="relative z-10 container mx-auto px-6">
             <h2 className="font-display text-4xl md:text-6xl mb-6">Zažijte to na vlastní oči.</h2>
          </div>
      </section>
    </div>
  );
};

const ParallaxImage = ({ src }: { src: string }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <motion.div style={{ y }} className="w-full h-[120%] -mt-[10%]">
        <img src={src} className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000" alt="Background" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50/0 via-stone-50/20 to-stone-50"></div>
    </div>
  );
};

const GalleryItem = ({ item, className, delay }: { item: any, className: string, delay: number }) => {
  return (
    <motion.div 
      className={`relative group overflow-hidden rounded-sm cursor-zoom-in ${className}`}
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-full h-full overflow-hidden">
        <motion.img 
          src={item.src} 
          alt={item.alt} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
      
      {/* Pop-up Text Info */}
      <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
        <span className="bg-white/90 backdrop-blur-sm text-stone-900 text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full">
          {item.category}
        </span>
      </div>
    </motion.div>
  );
};

export default Gallery;
