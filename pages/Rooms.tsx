
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Maximize, ArrowRight, Check } from 'lucide-react';
import Button from '../components/ui/Button';
import { ROOMS } from '../constants';
import { Link } from 'react-router-dom';

const Rooms: React.FC = () => {
  return (
    <div className="bg-stone-50">
      
      {/* --- Intro Header --- */}
      <div className="h-[50vh] flex flex-col justify-center items-center text-center px-6 bg-stone-100">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-display text-5xl md:text-7xl text-stone-900 mb-6"
        >
          Soukromé Svatyně
        </motion.h1>
        <p className="text-stone-500 text-lg max-w-xl mx-auto font-light">
          Tři typy pokojů. Jeden standard: Dokonalost.
        </p>
      </div>

      {/* --- Cinematic Room Stack --- */}
      <div className="relative">
        {ROOMS.map((room, index) => (
          <RoomSection key={room.id} room={room} index={index} total={ROOMS.length} />
        ))}
      </div>

      <div className="h-[20vh] bg-stone-900 flex items-center justify-center">
         <p className="text-stone-500 text-sm uppercase tracking-widest">End of Collection</p>
      </div>
    </div>
  );
};

// Sub-component for individual room section to handle complex layout
const RoomSection: React.FC<{ room: any, index: number, total: number }> = ({ room, index, total }) => {
  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row bg-stone-50 border-t border-stone-200">
      
      {/* Left: Content Panel */}
      <div className={`w-full md:w-1/3 bg-stone-50 p-8 md:p-16 flex flex-col justify-center relative z-20 order-2 md:order-1 ${index % 2 !== 0 ? 'md:order-2 border-l border-stone-200' : 'border-r border-stone-200'}`}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
             <span className="text-4xl font-display text-stone-200">0{index + 1}</span>
             <span className="h-px w-12 bg-stone-300"></span>
             <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold">{room.slug.replace('-', ' ')}</span>
          </div>

          <Link to={`/rooms/${room.slug}`} className="group block">
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-6 leading-tight group-hover:text-gold-600 transition-colors">
              {room.title}
            </h2>
          </Link>
          
          <p className="text-stone-600 font-light leading-relaxed mb-8">
            {room.longDesc}
          </p>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-6 mb-10 border-y border-stone-100 py-6">
             <div>
               <span className="block text-xs text-stone-400 uppercase tracking-widest mb-1">Hosté</span>
               <span className="text-lg font-display text-stone-800">{room.capacity} Osob</span>
             </div>
             <div>
               <span className="block text-xs text-stone-400 uppercase tracking-widest mb-1">Rozloha</span>
               <span className="text-lg font-display text-stone-800">{room.area} m²</span>
             </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
             <Link to={`/rooms/${room.slug}`}>
               <Button variant="primary" className="bg-stone-900 text-white">
                 Prozkoumat pokoj
               </Button>
             </Link>
             <Link to={`/booking?room=${room.id}`}>
               <span className="text-xs uppercase tracking-widest border-b border-stone-300 hover:border-gold-500 hover:text-gold-500 transition-all pb-1 cursor-pointer">
                 Rychlá rezervace
               </span>
             </Link>
          </div>

        </motion.div>
      </div>

      {/* Right: Immersive Image */}
      <div className={`w-full md:w-2/3 h-[50vh] md:h-full relative overflow-hidden order-1 md:order-2 group`}>
         <Link to={`/rooms/${room.slug}`}>
           <motion.div 
             className="w-full h-full"
             whileHover={{ scale: 1.05 }}
             transition={{ duration: 10, ease: "linear" }}
           >
             <img src={room.coverImage} alt={room.title} className="w-full h-full object-cover" />
           </motion.div>
           
           <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-all duration-500 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500">
                <ArrowRight className="text-white w-8 h-8" />
              </div>
           </div>
         </Link>
      </div>

    </div>
  );
};

export default Rooms;
