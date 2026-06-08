import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoUrl from 'figma:asset/a002ade102e5647cc4c4dd616ef16005db30d643.png';
import sponsor1 from 'figma:asset/2c32bd0d66e6e7b25974d1c324e66dad7c2f9744.png';
import sponsor2 from 'figma:asset/ccaef7492b4d1c76c1542c20896ad21866be7011.png';
import leagueLogo from 'figma:asset/league.png';

const logos = [
  { src: sponsor1, alt: 'Sponsor 1', className: 'h-12 sm:h-14 md:h-16 object-contain opacity-80 grayscale hover:grayscale-0 transition-all duration-300' },
  { src: sponsor2, alt: 'Sponsor 2', className: 'h-12 sm:h-14 md:h-16 object-contain opacity-80 grayscale hover:grayscale-0 transition-all duration-300' },
  { src: logoUrl, alt: 'Logo', className: 'h-10 sm:h-12 md:h-14 object-contain opacity-80 grayscale hover:grayscale-0 transition-all duration-300' },
  { src: sponsor2, alt: 'Dar Chabab', className: 'h-10 sm:h-12 md:h-14 object-contain opacity-80 hover:opacity-100 transition-all duration-300' },
  { src: sponsor1, alt: 'Maison de Jeunes', className: 'h-10 sm:h-12 md:h-14 object-contain opacity-80 hover:opacity-100 transition-all duration-300' },
  { src: leagueLogo, alt: 'League', className: 'h-10 sm:h-12 md:h-14 object-contain opacity-80 hover:opacity-100 transition-all duration-300' },
];

export function SponsorsMarquee() {
  return (
    <div className="w-full overflow-hidden bg-white/40 backdrop-blur-sm py-6 sm:py-8 border-y border-gray-200/50 relative">
      {/* Edge fade gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10 pointer-events-none" />

      {/* Scrolling track - pure CSS animation */}
      <div
        className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 whitespace-nowrap will-change-transform"
        style={{
          animation: 'scroll-left 30s linear infinite',
          width: 'max-content',
        }}
      >
        {/* Double the logos for seamless loop */}
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex-shrink-0 px-2 sm:px-4">
            <ImageWithFallback src={logo.src} alt={logo.alt} className={logo.className} />
          </div>
        ))}
      </div>
    </div>
  );
}
