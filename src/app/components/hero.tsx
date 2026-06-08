import React from 'react';
import { motion } from 'motion/react';
import { Plane } from 'lucide-react';

function TimeUnit({ value, label }: { value: string, label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-['Space_Grotesk'] font-bold text-5xl md:text-[76px] leading-none text-gray-900 mb-4 tracking-tighter">
        {value}
      </span>
      <span className="font-['Raleway'] font-medium text-lg md:text-[22px] text-gray-600 tracking-wide uppercase">{label}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative pt-40 pb-16 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Decorative Path */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <svg className="absolute top-[15%] right-[10%] w-64 h-32 opacity-30 text-gray-800" viewBox="0 0 200 100" fill="none">
          <path d="M0,100 Q50,0 150,50 T200,20" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-6xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-['Space_Grotesk'] font-bold text-6xl md:text-8xl lg:text-[110px] leading-[1.05] text-[#23706f] tracking-tight mb-8">
            Tourism Innovation<br />Exploria Challenge
          </h1>
          
          <div className="relative max-w-4xl mx-auto">
            <Plane className="absolute -top-12 right-12 text-gray-800 rotate-45 h-8 w-8 opacity-80" />
          </div>

          <p className="font-['Inter'] text-xl md:text-[22px] text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
            An interactive arena where <span className="font-['Raleway'] font-bold text-[#26a19e]">design meets technology</span> to reimagine Algeria's tourism experience for the digital age. Compete, showcase, and inspire.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <button className="bg-[#2B7C75] hover:bg-[#1E625B] text-white font-['Montserrat'] font-semibold text-lg md:text-xl px-10 py-4 rounded-[40px] transition-all hover:scale-105 shadow-xl cursor-pointer">
              Register now
            </button>
            <button className="bg-transparent border-2 border-[#2B7C75] text-gray-900 font-['Montserrat'] font-semibold text-lg md:text-xl px-10 py-4 rounded-[40px] transition-colors hover:bg-[#2B7C75]/5 cursor-pointer">
              Download Competition Guide
            </button>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] rounded-[40px] py-12 px-8"
        >
          <h3 className="font-['Montserrat'] font-semibold text-2xl md:text-3xl mb-10 text-gray-800">Registration ends in</h3>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-14">
            <TimeUnit value="05" label="Days" />
            <div className="w-2 h-2 rounded-full bg-[#F67861] hidden md:block ring-4 ring-[#F67861]/20 -mt-8" />
            <TimeUnit value="18" label="Hours" />
            <div className="w-2 h-2 rounded-full bg-[#F67861] hidden md:block ring-4 ring-[#F67861]/20 -mt-8" />
            <TimeUnit value="24" label="Minutes" />
            <div className="w-2 h-2 rounded-full bg-[#F67861] hidden md:block ring-4 ring-[#F67861]/20 -mt-8" />
            <TimeUnit value="02" label="Seconds" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
