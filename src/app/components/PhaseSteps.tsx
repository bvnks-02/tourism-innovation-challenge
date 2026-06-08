import React from 'react';
import { motion } from 'motion/react';

function DiscordIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 127.14 96.36" fill="currentColor" {...props}>
      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
    </svg>
  );
}

function GuideIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7EC8C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="12" y1="18" x2="12" y2="12"/>
      <line x1="9" y1="15" x2="15" y2="15"/>
    </svg>
  );
}

function ResearchIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EF7B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
    </svg>
  );
}

function RegisterIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EF7B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>
    </svg>
  );
}

function Top10Icon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F4A896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

interface Step {
  number: number;
  position: 'high' | 'low';
  title: string;
  body: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: 1, position: 'high',
    title: 'Join Discord',
    body: 'Join our Discord server and connect with your team.',
    icon: <DiscordIcon className="w-8 h-8 text-[#5865F2] mx-auto" />,
  },
  {
    number: 2, position: 'low',
    title: 'Download Competition Guide',
    body: 'Download the Competition Guide to understand the full process.',
    icon: <div className="flex justify-center"><GuideIcon /></div>,
  },
  {
    number: 3, position: 'high',
    title: 'Research & Ideation',
    body: 'Research your topic deeply and develop your core idea.',
    icon: <div className="flex justify-center"><ResearchIcon /></div>,
  },
  {
    number: 4, position: 'low',
    title: 'Registration & Submission',
    body: 'Register your team and submit your project before the deadline.',
    icon: <div className="flex justify-center"><RegisterIcon /></div>,
  },
  {
    number: 5, position: 'high',
    title: 'Top 10 Team Selection',
    body: 'The best 10 teams are selected to advance to the onsite phase.',
    icon: <div className="flex justify-center"><Top10Icon /></div>,
  },
];

export default function PhaseSteps() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 relative z-10 flex flex-col items-center">
          <h2 className="font-['Space_Grotesk'] font-bold text-4xl md:text-5xl text-gray-900 mt-2 mb-3">
            Phase 1 – <span className="text-[#F67861]">Online Ideathon</span>
          </h2>
          <p className="font-['Inter'] text-sm text-gray-500 max-w-[600px] mt-3">
            Discover the registration pathway and modern comprehensive solutions for development and participation.
          </p>
        </div>

        {/* Stepper Timeline */}
        <div className="relative w-full overflow-x-auto pb-8 snap-x hide-scrollbar flex justify-center">
          <div className="relative flex gap-6 min-w-max px-8">
            
            {/* Connector Line (Wave) */}
            <svg 
              className="absolute top-[36px] left-[110px] w-[calc(100%-220px)] h-[32px] z-0 pointer-events-none"
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
            >
              <path 
                d="M 0,0 C 12.5,0 12.5,40 25,40 C 37.5,40 37.5,0 50,0 C 62.5,0 62.5,40 75,40 C 87.5,40 87.5,0 100,0" 
                stroke="#4DB6AC" 
                strokeWidth="2" 
                fill="none" 
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* Steps */}
            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative z-10 flex-shrink-0"
                style={{
                  width: '180px',
                  transform: `translateY(${step.position === 'high' ? '-24px' : '24px'})`
                }}
              >
                <div 
                  className="bg-white rounded-2xl px-4 py-5 text-center shadow-[0px_8px_20px_rgba(0,0,0,0.04)] border"
                  style={{ borderColor: 'rgba(77, 182, 172, 0.2)' }}
                >
                  {/* Icon */}
                  <div className="mb-3">
                    {step.icon}
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="w-7 h-7 rounded-full bg-[#E0F2F1] text-[#4DB6AC] font-bold flex items-center justify-center mx-auto mb-3 text-xs">
                    {step.number}
                  </div>
                  
                  <h4 className="font-['Raleway'] font-bold text-sm text-gray-900 mb-2 leading-snug">
                    {step.title}
                  </h4>
                  
                  <p className="font-['Inter'] text-xs text-gray-500 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
