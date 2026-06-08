import React from 'react';
import { motion } from 'motion/react';

function DiscordIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 127.14 96.36" fill="currentColor" {...props}>
      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
    </svg>
  );
}

interface Step {
  number: number;
  position: 'high' | 'low';
  title: string;
  body: string;
  icon?: React.ReactNode;
}

const steps: Step[] = [
  {
    number: 1,
    position: 'high',
    title: 'Join Discord',
    body: 'Join the official server to connect with your team.',
    icon: <DiscordIcon className="w-8 h-8 text-[#5865F2] mx-auto" />
  },
  {
    number: 2,
    position: 'low',
    title: 'Download Competition Guide',
    body: 'Review guidelines, criteria, and process documentation.'
  },
  {
    number: 3,
    position: 'high',
    title: 'Research & Ideation',
    body: 'Brainstorm problem statements and align target solutions.'
  },
  {
    number: 4,
    position: 'low',
    title: 'Registration & Submission',
    body: 'Register your official team details and hand in your proposal.'
  },
  {
    number: 5,
    position: 'high',
    title: 'Top 10 Team Selection',
    body: 'Shortlisted entries advance to evaluation phases.'
  }
];

export function OnlinePhase() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 relative z-10 flex flex-col items-center">
          <span className="font-sans font-semibold text-base text-[#1A1A1A] uppercase tracking-wider">
            Online Phase Overview (Phase 1)
          </span>
          <h2 className="font-sans font-bold text-4xl text-[#111111] mt-2 mb-3">
            Phase 1 – Online Ideathon
          </h2>
          <p className="font-sans text-sm text-[#555555] max-w-[600px] mt-3">
            Description: The ideathon is meant to capture initial attention, gather creative input, and build interactive communication between developers and end users.
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
                  {/* Step Number Badge */}
                  <div className="w-7 h-7 rounded-full bg-[#E0F2F1] text-[#4DB6AC] font-bold flex items-center justify-center mx-auto mb-3 text-xs">
                    {step.number}
                  </div>
                  
                  {/* Optional Icon (Discord only for step 1) */}
                  {step.icon && (
                    <div className="mb-3">
                      {step.icon}
                    </div>
                  )}
                  
                  <h4 className="font-sans font-bold text-sm text-gray-900 mb-2 leading-snug">
                    {step.title}
                  </h4>
                  
                  <p className="font-sans text-xs text-gray-500 leading-relaxed">
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
