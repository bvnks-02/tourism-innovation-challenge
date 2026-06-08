import React from 'react';
import { motion } from 'motion/react';
import { Ticket, Plane, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import cameraImg from 'figma:asset/1b6cb66c180a72fcf39bb259734c67e97b6ce153.png';
import stampImg from 'figma:asset/d57fe42fa93139ff83ee83e991383e0763b1ce29.png';
import polaroidBg from 'figma:asset/3a8c26b3f5e66db8dbf1e84821aca7ef4a7171ea.png';

export function Agenda() {
  return (
    <section id="agenda" className="py-16 relative min-h-[800px]">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="font-['Space_Grotesk'] font-bold text-4xl md:text-6xl mb-16">
          Our Event <span className="text-[#F67861]">Agenda</span>
        </h2>

        <div className="relative">
          {/* Background dashed path */}
          <svg className="absolute inset-0 w-full h-full text-gray-400 opacity-40 pointer-events-none z-0" style={{ minHeight: '500px' }}>
            <path d="M 100 200 Q 300 50, 500 200 T 900 300 T 1100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
          </svg>

          {/* CSS Grid for Calendar */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-gray-300/60 bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden relative z-10">
            
            {/* Row 1 Headers */}
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday'].map((day) => (
              <div key={day} className="p-3 border-r border-b border-gray-300/60 bg-white/40 text-center">
                <span className="font-['Raleway'] font-medium text-xl md:text-2xl text-gray-800">{day}</span>
              </div>
            ))}

            {/* Row 1 Content */}
            <div className="h-56 p-5 border-r border-b border-gray-300/60 relative overflow-hidden group">
              <span className="font-['Space_Grotesk'] font-bold text-5xl text-gray-900 relative z-10">10</span>
              <div className="absolute inset-0 flex items-center justify-center opacity-60">
                <svg className="w-4/5 h-4/5 text-[#26A19E]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10,10 L90,90 M90,10 L10,90" />
                </svg>
              </div>
            </div>

            <div className="h-56 p-5 border-r border-b border-gray-300/60 relative overflow-hidden">
              <span className="font-['Space_Grotesk'] font-bold text-5xl text-gray-900 relative z-10">11</span>
              <div className="absolute top-5 left-5 w-20 h-20 rounded-full border-[3px] border-[#F67861] opacity-70 border-dashed" />
            </div>

            <div className="h-56 p-5 border-r border-b border-gray-300/60 relative overflow-hidden">
              <span className="font-['Space_Grotesk'] font-bold text-5xl text-gray-900">12</span>
            </div>

            <div className="h-56 p-5 border-r border-b border-gray-300/60 relative overflow-hidden flex flex-col justify-between">
              <span className="font-['Space_Grotesk'] font-bold text-5xl text-gray-900">13</span>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 transform -rotate-[20deg] opacity-90 transition-transform group-hover:rotate-0">
                <ImageWithFallback src={cameraImg} alt="Camera" className="w-full h-full object-contain drop-shadow-2xl" />
              </div>
            </div>

            {/* Row 2 Content */}
            <div className="h-56 p-5 border-r border-b border-gray-300/60 relative overflow-hidden">
              <span className="font-['Space_Grotesk'] font-bold text-5xl text-gray-900">14</span>
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[85%] bg-red-50/80 backdrop-blur-sm border border-red-200/50 rounded-xl px-4 py-2.5 flex items-center justify-between shadow-sm shadow-red-100">
                <span className="font-['Raleway'] font-bold text-lg text-[#F67861]">Final Day</span>
                <Ticket className="w-5 h-5 text-[#F67861]" />
              </div>
            </div>

            <div className="h-56 p-5 border-r border-b border-gray-300/60 relative">
              <span className="font-['Space_Grotesk'] font-bold text-5xl text-gray-900">15</span>
            </div>

            <div className="h-56 p-5 border-r border-b border-gray-300/60 relative bg-white/5">
            </div>

            <div className="h-56 p-5 border-r border-b border-gray-300/60 relative overflow-hidden">
              <span className="font-['Space_Grotesk'] font-bold text-5xl text-gray-900">17</span>
              <div className="absolute bottom-4 right-4 w-28 h-36 transform rotate-6 hover:rotate-12 transition-transform shadow-lg shadow-black/5 rounded">
                <ImageWithFallback src={stampImg} alt="Stamp" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Overlapping Interactive Card */}
          <motion.div 
            className="absolute top-[50%] left-[50%] md:left-[62.5%] lg:left-[62.5%] transform -translate-x-1/2 -translate-y-[40%] z-20"
            initial={{ rotate: -8 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative w-64 h-72 md:w-72 md:h-[300px] bg-[#26A19E] rounded-2xl shadow-[0_30px_60px_-15px_rgba(38,161,158,0.4)] overflow-hidden flex flex-col items-center justify-center p-6 cursor-pointer group border border-white/10">
              <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                <ImageWithFallback src={polaroidBg} alt="Map Background" className="w-full h-full object-cover" />
              </div>
              
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30">
                <div className="w-10 h-10 bg-[#F67861] rounded-full border-4 border-[#23706F] shadow-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-white/50 rounded-full mb-2 ml-2" />
                </div>
                <div className="w-1 h-6 bg-[#23706F] mx-auto -mt-2" />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <Plane className="w-8 h-8 text-white mb-4 opacity-80 -rotate-45" />
                
                <h4 className="font-['Raleway'] font-bold text-2xl md:text-[28px] leading-tight text-white mb-6">
                  Click To Check<br />The Agenda
                </h4>
                
                <div className="bg-cyan-50/20 backdrop-blur-md px-8 py-2.5 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#26A19E] transition-colors text-white">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
