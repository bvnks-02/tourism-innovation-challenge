import React, { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoUrl from 'figma:asset/a002ade102e5647cc4c4dd616ef16005db30d643.png';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ImageWithFallback src={logoUrl} alt="Logo" className="h-12 w-auto object-contain" />
        </div>
        
        <nav className="hidden md:flex items-center gap-8 bg-black/5 px-8 py-3 rounded-full backdrop-blur-sm border border-white/40">
          <a href="#" className="font-['Raleway'] font-bold text-gray-900 bg-white/60 px-5 py-1.5 rounded-lg shadow-sm">Home</a>
          <a href="#about" className="font-['Raleway'] font-semibold text-gray-700 hover:text-black transition">About us</a>
          <a href="#agenda" className="font-['Raleway'] font-semibold text-gray-700 hover:text-black transition">Agenda</a>
          <a href="#faq" className="font-['Raleway'] font-semibold text-gray-700 hover:text-black transition">FAQ</a>
          <a href="#contact" className="font-['Raleway'] font-semibold text-gray-700 hover:text-black transition">Contact us</a>
        </nav>
        
        <button className="bg-[#26A19E] hover:bg-[#1f8784] text-white font-['Raleway'] font-bold text-lg px-8 py-3 rounded-xl transition shadow-lg shadow-teal-500/20 cursor-pointer">
          Register
        </button>
      </div>
    </header>
  );
}
