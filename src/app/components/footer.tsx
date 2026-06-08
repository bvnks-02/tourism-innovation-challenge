import React from 'react';
import { Facebook, Instagram, Youtube, Pin as Pinterest } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoUrl from 'figma:asset/a002ade102e5647cc4c4dd616ef16005db30d643.png';
import leagueLogo from 'figma:asset/league.png';

export function Footer() {
  return (
    <footer className="bg-[#F8F9FA] pt-10 pb-6 border-t border-[#E0E0E0]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Top Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Column 1: Branding */}
          <div className="lg:w-full">
            <ImageWithFallback src={logoUrl} alt="Exploria Logo" className="h-14 w-auto object-contain" />
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-['Inter'] font-bold text-[16px] text-[#111111] mb-4">Quick Links</h3>
            <ul className="flex flex-col space-y-2">
              {[
                { label: "About", url: "#about" },
                { label: "Online Phase", url: "#online-phase" },
                { label: "Agenda", url: "#agenda" },
                { label: "FAQ", url: "#faq" },
                { label: "Location", url: "#location" }
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.url} 
                    className="font-['Inter'] font-medium text-[14px] text-[#2D3436] hover:text-[#4DB6AC] transition-colors leading-[2.0]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Organizer */}
          <div>
            <h3 className="font-['Inter'] font-bold text-[16px] text-[#111111] mb-4">Organizer</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="flex flex-col gap-0.5">
                  <div className="w-6 h-1 bg-[#4DB6AC]" />
                  <div className="w-6 h-1 bg-[#F67861]" />
                  <div className="w-6 h-1 bg-[#FCE58D]" />
                </div>
                <span className="text-[10px] font-bold text-gray-400 leading-tight">MAISON DE<br/>JEUNES</span>
              </div>
              <ImageWithFallback src={leagueLogo} alt="League" className="h-10 w-auto object-contain" />
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="font-['Inter'] font-bold text-[16px] text-[#111111] mb-4">Social Media</h3>
            <div className="flex flex-row gap-3">
              {[
                { platform: "Facebook", icon: <Facebook size={18} />, bg: "#4DB6AC" },
                { platform: "Instagram", icon: <Instagram size={18} />, bg: "#A2B59F" },
                { platform: "Pinterest", icon: <Pinterest size={18} />, bg: "#E5B09E" },
                { platform: "YouTube", icon: <Youtube size={18} />, bg: "#D38173" }
              ].map((social) => (
                <a 
                  key={social.platform}
                  href="#" 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
                  style={{ backgroundColor: social.bg }}
                  aria-label={social.platform}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider line */}
        <div className="h-[1px] w-full bg-[#E0E0E0] mb-6" />

        {/* Bottom Sub Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-['Inter'] font-normal text-[12px] text-[#777777]">
            Copyright © Exploria Inc.
          </p>
          <a 
            href="https://www.exploriaco.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-['Inter'] font-normal text-[12px] text-[#777777] hover:text-[#4DB6AC] transition-colors"
          >
            www.exploriaco.com
          </a>
        </div>
      </div>
    </footer>
  );
}
