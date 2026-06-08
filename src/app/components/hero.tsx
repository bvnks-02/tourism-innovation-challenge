import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Plane } from 'lucide-react';
import heroBanner from '../../assets/Gemini_Generated_Image_b93p9tb93p9tb93p 1 1.svg';

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

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState(() => computeTimeLeft(target));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(computeTimeLeft(target));
    }, 1000);
    return () => clearInterval(timer);
  }, [target]);

  return timeLeft;
}

function computeTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: '00', hours: '00', minutes: '00', seconds: '00' };

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  };
}

export function Hero({ onRegister }: { onRegister?: () => void }) {
  // Registration deadline: June 14, 2026, 23:59:59
  const target = new Date(2026, 5, 14, 23, 59, 59);
  const timeLeft = useCountdown(target);

  return (
    <section className="relative pb-16 flex flex-col overflow-hidden">
      {/* Decorative Path */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <svg className="absolute top-[15%] right-[10%] w-64 h-32 opacity-30 text-gray-800" viewBox="0 0 200 100" fill="none">
          <path d="M0,100 Q50,0 150,50 T200,20" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
        </svg>
      </div>

      {/* Hero Banner Image - directly under navbar, full width */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full pt-16 sm:pt-18 md:pt-20"
      >
        <img
          src={heroBanner}
          alt="Exploria Hero Banner"
          className="w-full h-auto object-cover"
        />
      </motion.div>

      <div className="container mx-auto px-6 max-w-6xl text-center relative z-10 mt-8 md:mt-12">
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
            <button onClick={onRegister} className="bg-[#2B7C75] hover:bg-[#1E625B] text-white font-['Montserrat'] font-semibold text-lg md:text-xl px-10 py-4 rounded-[40px] transition-all hover:scale-105 shadow-xl cursor-pointer">
              Register now
            </button>
            <a
              href="https://drive.google.com/file/d/1r-1ppzAilOFRcHQyhK8qaJ1J06_aK30-/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-[#2B7C75] text-gray-900 font-['Montserrat'] font-semibold text-lg md:text-xl px-10 py-4 rounded-[40px] transition-colors hover:bg-[#2B7C75]/5 cursor-pointer inline-block"
            >
              Download Competition Guide
            </a>
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
            <TimeUnit value={timeLeft.days} label="Days" />
            <div className="w-2 h-2 rounded-full bg-[#F67861] hidden md:block ring-4 ring-[#F67861]/20 -mt-8" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <div className="w-2 h-2 rounded-full bg-[#F67861] hidden md:block ring-4 ring-[#F67861]/20 -mt-8" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <div className="w-2 h-2 rounded-full bg-[#F67861] hidden md:block ring-4 ring-[#F67861]/20 -mt-8" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
