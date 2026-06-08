import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoUrl from 'figma:asset/a002ade102e5647cc4c4dd616ef16005db30d643.png';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Online Phase', href: '#online-phase' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Location', href: '#contact' },
];

const GUIDE_URL = 'https://drive.google.com/file/d/1r-1ppzAilOFRcHQyhK8qaJ1J06_aK30-/view';

export function Navbar({ onRegister }: { onRegister?: () => void }) {
  const location = useLocation();
  const isV2 = location.pathname === '/v2';
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    setMobileOpen(false);
    // If on home page, use smooth scroll
    if (location.pathname === '/' || location.pathname === '/v2') {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm border-b border-[#e8e4df]'
          : 'bg-white border-b border-[#e8e4df]'
      }`}
    >
      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-9 py-3.5 max-w-[1400px] mx-auto">
        {/* Logo - kept as original image */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <ImageWithFallback src={logoUrl} alt="Exploria Logo" className="h-8 w-auto object-contain" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick(link.href)}
              className="font-['Plus_Jakarta_Sans',sans-serif] text-sm font-medium text-[#1a3a35] no-underline tracking-[0.01em] transition-colors duration-200 hover:text-[#2a7a6a]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href={GUIDE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block font-['Plus_Jakarta_Sans',sans-serif] text-[13.5px] font-semibold text-white bg-[#1d5c4e] border-none rounded-[30px] px-5 py-[9px] no-underline tracking-[0.01em] whitespace-nowrap transition-all duration-200 hover:bg-[#2a7a6a] hover:-translate-y-px cursor-pointer"
        >
          Download Guide
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-transparent border-none cursor-pointer gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-[#1a3a35] rounded transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#1a3a35] rounded transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#1a3a35] rounded transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-[#e8e4df] ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-5 py-4 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick(link.href)}
              className="font-['Plus_Jakarta_Sans',sans-serif] text-sm font-medium text-[#1a3a35] no-underline py-3 px-2 rounded-lg transition-colors duration-200 hover:bg-[#f0ece6] hover:text-[#2a7a6a]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={GUIDE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Plus_Jakarta_Sans',sans-serif] text-sm font-semibold text-white bg-[#1d5c4e] rounded-[30px] px-5 py-3 no-underline text-center mt-2 transition-all duration-200 hover:bg-[#2a7a6a]"
          >
            Download Guide
          </a>
        </nav>
      </div>
    </header>
  );
}
