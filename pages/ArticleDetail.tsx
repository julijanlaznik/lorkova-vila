
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CalendarDays, Share2, Facebook, Twitter } from 'lucide-react';
import { NEWS } from '../constants';
import Button from '../components/ui/Button';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = NEWS.find(n => n.id === id);

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="h-screen flex items-center justify-center bg-stone-50 text-stone-900">
        <div className="text-center">
           <h1 className="text-4xl font-display mb-4">Článek nenalezen</h1>
           <Button onClick={() => navigate('/')} variant="outline" className="border-stone-900">Zpět na domů</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* --- HERO IMAGE --- */}
      <div className="relative h-[60vh] w-full overflow-hidden">
         <motion.img 
           initial={{ scale: 1.1 }}
           animate={{ scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           src={article.image} 
           alt={article.title} 
           className="absolute inset-0 w-full h-full object-cover" 
         />
         <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent opacity-90"></div>
         
         {/* Navigation Top Left */}
         <div className="absolute top-32 left-6 md:left-12 z-20">
           <Link to="/" className="text-white/70 hover:text-white flex items-center gap-2 text-xs uppercase tracking-widest transition-colors">
             <ArrowLeft size={16} /> Zpět na úvod
           </Link>
         </div>

         {/* Title Block */}
         <div className="absolute bottom-0 left-0 right-0 p-6 md:p-20 container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 text-gold-500 text-xs uppercase tracking-widest mb-4 font-semibold">
                <span>{article.tag}</span>
                <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                <span className="flex items-center gap-2 text-stone-300 font-normal"><CalendarDays size={14}/> {article.date}</span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
                {article.title}
              </h1>
            </motion.div>
         </div>
      </div>

      {/* --- CONTENT --- */}
      <div className="container mx-auto px-6 md:px-12 py-20">
         <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Text */}
            <motion.div 
               className="lg:w-8/12"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
            >
               <p className="text-xl md:text-2xl text-stone-800 font-display leading-relaxed mb-10">
                 {article.excerpt}
               </p>
               
               <div className="prose prose-stone prose-lg text-stone-600 font-light leading-loose whitespace-pre-line">
                 {article.content}
               </div>

               {/* Signature / Footer of article */}
               <div className="mt-16 pt-8 border-t border-stone-200 flex items-center justify-between">
                  <span className="font-display text-stone-900">Lorkova Vila Team</span>
                  <div className="flex gap-4">
                     <button className="text-stone-400 hover:text-stone-900 transition-colors"><Share2 size={20}/></button>
                  </div>
               </div>
            </motion.div>

            {/* Sidebar / More News */}
            <div className="lg:w-4/12">
               <div className="sticky top-32">
                 <h3 className="font-display text-xl text-stone-900 mb-8 pb-4 border-b border-stone-200">Další čtení</h3>
                 <div className="space-y-8">
                   {NEWS.filter(n => n.id !== article.id).map(news => (
                     <Link to={`/journal/${news.id}`} key={news.id} className="block group">
                        <div className="aspect-[3/2] overflow-hidden rounded-sm mb-4">
                           <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-gold-600 mb-1 block">{news.tag}</span>
                        <h4 className="font-display text-lg text-stone-900 group-hover:text-gold-600 transition-colors">{news.title}</h4>
                     </Link>
                   ))}
                 </div>
               </div>
            </div>

         </div>
      </div>

    </div>
  );
};

export default ArticleDetail;
