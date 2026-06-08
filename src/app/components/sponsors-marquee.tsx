import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoUrl from 'figma:asset/a002ade102e5647cc4c4dd616ef16005db30d643.png';
import sponsor1 from 'figma:asset/2c32bd0d66e6e7b25974d1c324e66dad7c2f9744.png';
import sponsor2 from 'figma:asset/ccaef7492b4d1c76c1542c20896ad21866be7011.png';

export function SponsorsMarquee() {
  return (
    <div className="w-full overflow-hidden bg-white/40 backdrop-blur-sm py-8 border-y border-gray-200/50 relative">
      {/* Subtle gradients to fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex items-center gap-24 whitespace-nowrap px-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
      >
        {/* Double the list for seamless loop */}
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-4">
              <ImageWithFallback src={sponsor1} alt="Sponsor" className="h-16 object-contain opacity-80 grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="flex items-center gap-4">
              <ImageWithFallback src={sponsor2} alt="Sponsor" className="h-16 object-contain opacity-80 grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="flex items-center gap-4">
              <ImageWithFallback src={logoUrl} alt="Sponsor" className="h-14 object-contain opacity-80 grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="flex items-center gap-4">
              <span className="font-['Space_Grotesk'] text-2xl font-bold text-gray-500 tracking-wider">DAR EL CHABAB</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-['Space_Grotesk'] text-2xl font-bold text-gray-500 tracking-wider">MAISON DE JEUNES</span>
            </div>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
