import React from 'react';
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { SponsorsMarquee } from './components/sponsors-marquee';
import { OnlinePhase } from './components/online-phase';
import { Agenda } from './components/agenda';
import { Location } from './components/location';
import { FAQ } from './components/faq';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen font-['Inter'] text-gray-900 overflow-x-hidden selection:bg-[#26A19E]/30 selection:text-[#23706f]">
      {/* Global Gradient Background */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-[#E0F2F1] via-white to-[#FCE4EC] opacity-80" />
      
      {/* Abstract background blobs for extra depth */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[60%] bg-gradient-to-br from-[#E4F2ED] to-[#C9E7E0] rounded-[100%] blur-[120px] opacity-40 mix-blend-multiply" />
        <div className="absolute top-[10%] right-[-10%] w-[45%] h-[70%] bg-gradient-to-bl from-[#FBE3D4] to-[#F7C6B2] rounded-[100%] blur-[140px] opacity-30 mix-blend-multiply" />
        <div className="absolute bottom-[-10%] left-[15%] w-[60%] h-[50%] bg-gradient-to-tr from-[#FFF4D4] to-[#FCE58D] rounded-[100%] blur-[130px] opacity-30 mix-blend-multiply" />
      </div>

      <Navbar />
      
      <main>
        <Hero />
        
        <div className="space-y-16 pb-16">
          <SponsorsMarquee />
          <OnlinePhase />
          <Agenda />
          <Location />
        </div>
      </main>

      <FAQ />
      <Footer />
    </div>
  );
}
