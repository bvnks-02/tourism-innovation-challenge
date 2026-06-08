import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Palette, Users, Target } from 'lucide-react';

export function Exploria() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="font-['Raleway'] font-semibold text-sm md:text-base text-[#26A19E] uppercase tracking-widest">
              About the Event
            </span>
            <h2 className="font-['Space_Grotesk'] font-bold text-4xl md:text-5xl text-gray-900 mt-3 mb-6">
              What is <span className="text-[#F67861]">Exploria</span>?
            </h2>
            <p className="font-['Inter'] text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              Exploria is a tourism innovation challenge that combines an <strong className="text-gray-900">Ideathon</strong> and a <strong className="text-gray-900">Designathon</strong> to encourage participants to create innovative digital solutions and experiences that contribute to the development of tourism in Algeria. Participation is open to teams of two members.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-5 py-4 border border-[#A4E2DB]/40 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E0F2F1] flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-[#26A19E]" />
                </div>
                <div>
                  <span className="font-['Raleway'] font-bold text-sm text-gray-900">Ideathon</span>
                  <p className="font-['Inter'] text-xs text-gray-500">Generate ideas</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-5 py-4 border border-[#A4E2DB]/40 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FEF0EC] flex items-center justify-center">
                  <Palette className="w-5 h-5 text-[#F67861]" />
                </div>
                <div>
                  <span className="font-['Raleway'] font-bold text-sm text-gray-900">Designathon</span>
                  <p className="font-['Inter'] text-xs text-gray-500">Design solutions</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-[#A4E2DB]/40 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] text-center">
                <Target className="w-8 h-8 text-[#26A19E] mx-auto mb-3" />
                <span className="font-['Raleway'] font-bold text-sm text-gray-900">Innovation</span>
                <p className="font-['Inter'] text-xs text-gray-500 mt-1">Digital tourism solutions</p>
              </div>
              <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-[#A4E2DB]/40 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] text-center mt-6">
                <Users className="w-8 h-8 text-[#F67861] mx-auto mb-3" />
                <span className="font-['Raleway'] font-bold text-sm text-gray-900">Teams of 2</span>
                <p className="font-['Inter'] text-xs text-gray-500 mt-1">Collaborate & create</p>
              </div>
              <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-[#A4E2DB]/40 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] text-center -mt-6">
                <Palette className="w-8 h-8 text-[#4DB6AC] mx-auto mb-3" />
                <span className="font-['Raleway'] font-bold text-sm text-gray-900">Design</span>
                <p className="font-['Inter'] text-xs text-gray-500 mt-1">User experiences</p>
              </div>
              <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-[#A4E2DB]/40 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] text-center">
                <Lightbulb className="w-8 h-8 text-[#FCE58D] mx-auto mb-3" />
                <span className="font-['Raleway'] font-bold text-sm text-gray-900">Ideas</span>
                <p className="font-['Inter'] text-xs text-gray-500 mt-1">Algeria tourism</p>
              </div>
            </div>

            {/* Decorative dashed line */}
            <svg className="absolute -top-4 -right-4 w-24 h-24 text-gray-300 opacity-40 pointer-events-none" viewBox="0 0 100 100" fill="none">
              <path d="M10,90 Q50,10 90,50" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
