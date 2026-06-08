import React from 'react';
import { Facebook, Instagram, Youtube, Pin as Pinterest, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#F8F9FA] pt-10 pb-6 border-t border-[#E0E0E0]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Top Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Column 1: Branding */}
          <div className="lg:w-full">
            <div className="relative inline-block">
              <svg 
                width="64" 
                height="64" 
                viewBox="0 0 64 64" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-sm"
              >
                <defs>
                  <linearGradient id="footer-logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4DB6AC" />
                    <stop offset="100%" stopColor="#E57373" />
                  </linearGradient>
                </defs>
                {/* Abstract Icon combining Pin, Screen, and Arrow */}
                <path 
                  d="M32 4L48 16V48L32 60L16 48V16L32 4Z" 
                  stroke="url(#footer-logo-gradient)" 
                  strokeWidth="3" 
                  strokeLinejoin="round"
                />
                <rect x="22" y="18" width="20" height="28" rx="2" stroke="url(#footer-logo-gradient)" strokeWidth="2" />
                <path d="M30 10V4H38" stroke="url(#footer-logo-gradient)" strokeWidth="2" strokeLinecap="round" />
                <path d="M38 4L34 8M38 4L42 8" stroke="url(#footer-logo-gradient)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="32" cy="28" r="4" fill="url(#footer-logo-gradient)" />
              </svg>
            </div>
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
            <div className="flex flex-row items-center gap-4">
              {/* Maison de Jeunes placeholder style */}
              <div className="flex items-center gap-2">
                <div className="flex flex-col gap-0.5">
                  <div className="w-6 h-1 bg-[#4DB6AC]" />
                  <div className="w-6 h-1 bg-[#F67861]" />
                  <div className="w-6 h-1 bg-[#FCE58D]" />
                </div>
                <span className="text-[10px] font-bold text-gray-400 leading-tight">MAISON DE<br/>JEUNES</span>
              </div>
              
              {/* Exploria Mini Icon */}
              <div className="w-8 h-8 rounded-full border border-[#4DB6AC] flex items-center justify-center">
                <div className="w-4 h-4 text-[#4DB6AC]">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Community Emblem */}
              <div className="w-8 h-8 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" stroke="#E0E0E0" strokeWidth="1" fill="none" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <line 
                      key={angle}
                      x1="50" y1="50" 
                      x2={50 + 40 * Math.cos((angle * Math.PI) / 180)} 
                      y2={50 + 40 * Math.sin((angle * Math.PI) / 180)} 
                      stroke={['#4DB6AC', '#E57373', '#FCE58D', '#81C784'][i % 4]} 
                      strokeWidth="4"
                    />
                  ))}
                </svg>
              </div>
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
