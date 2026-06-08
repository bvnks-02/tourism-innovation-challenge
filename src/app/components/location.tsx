import React from 'react';
import { MapPin, Clock, CalendarDays, Navigation } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import algiersWilaya from 'figma:asset/algiers-wilaya.png';

export function Location() {
  return (
    <section id="contact" className="py-[60px]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="font-sans text-[28px] font-bold text-[#111111] block">
            Location Section
          </span>
          <h2 className="font-sans text-[24px] font-semibold text-[#111111] mt-2 mb-8">
            Event Location
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-[24px]">
          {/* Left Column: Map */}
          <div className="w-full lg:w-[65%] rounded-[16px] border-[1.5px] border-[#A4E2DB] overflow-hidden relative shadow-[0px_6px_18px_rgba(0,0,0,0.03)] h-[400px] bg-gray-100 flex-shrink-0">
            <iframe
              title="Event Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12792.839097782354!2d3.0644!3d36.7431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad4a43cb7527%3A0x679549cd0ebbc620!2sMaqam%20Echahid!5e0!3m2!1sen!2sdz!4v1717887300000!5m2!1sen!2sdz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Floating Overlay Card */}
            <div className="absolute top-[16px] left-[16px] bg-white rounded-[8px] p-[16px] shadow-[0px_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-between gap-6 z-10 min-w-[220px]">
              <div className="flex items-center gap-3">
                <ImageWithFallback src={algiersWilaya} alt="Algiers Wilaya" className="w-10 h-10 object-contain" />
                <div>
                  <h4 className="font-sans font-bold text-gray-900 text-sm">Maqam Echahid,</h4>
                  <p className="font-sans text-xs text-gray-500 mt-0.5">Algiers, Algeria</p>
                </div>
              </div>
              <div className="bg-blue-50 p-2 rounded-full cursor-pointer hover:bg-blue-100 transition-colors">
                <Navigation className="w-5 h-5 text-[#007BFF]" />
              </div>
            </div>
          </div>

          {/* Right Column: Info */}
          <div className="w-full lg:w-[35%] bg-white/60 rounded-[16px] border-[1.5px] border-[#A4E2DB] pt-[24px] px-[20px] pb-0 flex flex-col justify-between overflow-hidden relative backdrop-blur-sm">
            {/* Details List */}
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#4DB6AC] flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans font-semibold text-[#111111] text-[16px]">Magam Echahid,</h5>
                  <p className="font-sans text-[#555555] text-[14px]">Algiers, Algeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#4DB6AC] flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans font-semibold text-[#111111] text-[16px]">12 - 14 2026</h5>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CalendarDays className="w-6 h-6 text-[#4DB6AC] flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans font-semibold text-[#111111] text-[16px]">13 - Production</h5>
                </div>
              </div>
            </div>

            {/* Bottom Graphic Illustration */}
            <div className="relative h-[120px] -mx-[20px] mb-0 mt-8 shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1561571994-3c61c554181a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHN1bnNldCUyMHNpbGhvdWV0dGV8ZW58MXx8fHwxNzgwODc4MTUyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Sunset graphic" 
                className="w-full h-full object-cover rounded-b-[14px]"
              />
              <div className="absolute inset-0 bg-[#4DB6AC]/10 mix-blend-color rounded-b-[14px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
