import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const arrowVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

function DiscordSvg() {
  return (
    <svg className="discord-icon" viewBox="0 0 127.14 96.36" fill="#5865F2">
      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z" />
    </svg>
  );
}

const steps = [
  {
    icon: <DiscordSvg />,
    iconClass: 'discord',
    title: 'Join Discord',
    body: 'Join our Discord server and connect with your team.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7EC8C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="12" y1="18" x2="12" y2="12"/>
        <line x1="9" y1="15" x2="15" y2="15"/>
      </svg>
    ),
    iconClass: 'guide',
    title: 'Download Competition Guide',
    body: 'Download the Competition Guide to understand the full process.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EF7B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    ),
    iconClass: 'research',
    title: 'Research & Ideation',
    body: 'Research your topic deeply and develop your core idea.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EF7B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>
      </svg>
    ),
    iconClass: 'register',
    title: 'Registration & Submission',
    body: 'Register your team and submit your project before the deadline.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F4A896" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    iconClass: 'top10',
    title: 'Top 10 Team Selection',
    body: 'The best 10 teams are selected to advance to the onsite phase.',
  },
];

export default function PhaseSteps() {
  return (
    <>
      <style>{`
        .ps-section {
          position: relative;
          padding: 80px 24px 96px;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
        }
        .ps-torn-top {
          position: absolute;
          top: 0; left: 0; width: 100%;
          height: 64px;
          overflow: hidden;
          pointer-events: none;
        }
        .ps-torn-top svg { display: block; width: 100%; height: 64px; }
        .ps-header { text-align: center; margin-bottom: 56px; }
        .ps-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #4a5568;
          letter-spacing: 0.04em;
          margin-bottom: 10px;
        }
        .ps-label::before, .ps-label::after {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .ps-label::before { background: #EF7B6B; }
        .ps-label::after { background: #7EC8C8; }
        .ps-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 5vw, 46px);
          font-weight: 800;
          color: #1a2e3b;
          line-height: 1.1;
          margin-bottom: 16px;
        }
        .ps-title em { font-style: normal; color: #EF7B6B; }
        .ps-desc {
          max-width: 520px;
          margin: 0 auto;
          font-size: 15px;
          color: #4a5568;
          line-height: 1.65;
        }
        .ps-wrapper { position: relative; max-width: 1080px; margin: 0 auto; }
        .ps-track {
          display: flex;
          align-items: stretch;
          gap: 0;
          position: relative;
        }
        .ps-track::before {
          content: '';
          position: absolute;
          top: 56px;
          left: calc(10% + 24px);
          right: calc(10% + 24px);
          height: 2px;
          background: repeating-linear-gradient(90deg, #7EC8C8 0px, #7EC8C8 8px, transparent 8px, transparent 18px);
          opacity: 0.7;
          z-index: 0;
        }
        .ps-step {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 10px;
          position: relative;
          z-index: 1;
        }
        .ps-connector {
          display: flex;
          align-items: center;
          padding-top: 48px;
          z-index: 2;
        }
        .ps-connector svg { width: 22px; height: 22px; color: #7EC8C8; flex-shrink: 0; }
        .ps-card {
          background: #ffffff;
          border: 1.5px solid rgba(255,255,255,0.9);
          border-radius: 10px;
          padding: 22px 16px 20px;
          text-align: center;
          width: 100%;
          box-shadow: 0 2px 16px rgba(100,160,160,0.12);
          transition: transform 0.25s cubic-bezier(0.23,1,0.32,1), box-shadow 0.25s cubic-bezier(0.23,1,0.32,1), border-color 0.25s cubic-bezier(0.23,1,0.32,1);
          cursor: default;
        }
        .ps-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 24px rgba(100,160,160,0.2);
          border-color: rgba(126,200,200,0.5);
        }
        .ps-step:first-child .ps-card {
          border-color: rgba(126,200,200,0.5);
          background: linear-gradient(145deg, #ffffff, #f0fbfb);
        }
        .ps-icon {
          width: 48px; height: 48px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 14px;
        }
        .ps-icon.discord  { background: #e8f4f4; }
        .ps-icon.guide    { background: #e8f4f4; }
        .ps-icon.research { background: #fef0ec; }
        .ps-icon.register { background: #fde8e4; }
        .ps-icon.top10    { background: #fef7e8; }
        .ps-num {
          position: absolute;
          top: -10px; right: 12px;
          width: 22px; height: 22px;
          border-radius: 50%;
          background: #EF7B6B;
          color: white;
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 700;
          display: flex; align-items: center; justify-content: center;
        }
        .ps-inner { position: relative; }
        .ps-step-title {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #1a2e3b;
          margin-bottom: 8px;
          line-height: 1.3;
        }
        .ps-body { font-size: 13px; color: #9ca3af; line-height: 1.55; }
        .discord-icon { width: 30px; height: 30px; fill: #5865F2; }

        @media (max-width: 768px) {
          .ps-section { padding: 60px 16px 72px; }
          .ps-track { flex-direction: column; gap: 0; }
          .ps-track::before { display: none; }
          .ps-step { padding: 0; width: 100%; }
          .ps-connector { display: none; }
          .ps-card { display: flex; align-items: flex-start; gap: 14px; text-align: left; padding: 16px; }
          .ps-icon { margin: 0; flex-shrink: 0; }
          .ps-inner { flex: 1; position: relative; }
          .ps-step + .ps-step::before {
            content: '';
            display: block;
            width: 2px; height: 20px;
            background: repeating-linear-gradient(180deg, #7EC8C8 0px, #7EC8C8 5px, transparent 5px, transparent 10px);
            margin: 0 auto;
            opacity: 0.7;
          }
        }
      `}</style>

      <section id="phase-steps-section" className="ps-section">
        {/* Torn paper top */}
        <div className="ps-torn-top">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none">
            <path d="M0,0 L0,32 C40,48 70,18 110,30 C150,42 175,14 220,26 C265,38 290,10 340,22 C390,34 415,8 460,20 C505,32 530,6 580,18 C630,30 655,4 700,16 C745,28 770,2 820,14 C870,26 895,0 940,12 C985,24 1010,0 1055,12 C1100,24 1125,0 1170,12 C1215,24 1240,2 1290,14 C1340,26 1380,8 1440,20 L1440,0 Z" fill="white" opacity="0.9"/>
          </svg>
        </div>

        <div className="ps-header">
          <span className="ps-label">Online Phase Overview (Phase 1)</span>
          <h2 className="ps-title">Phase 1 – <em>Online Ideathon</em></h2>
          <p className="ps-desc">Discover the registration pathway and internal attention, and modern comprehensive solutions for development and participation.</p>
        </div>

        <div className="ps-wrapper">
          <motion.div className="ps-track" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
            {steps.map((step, i) => (
              <>
                {i > 0 && (
                  <motion.div className="ps-connector" key={`arr-${i}`} variants={arrowVariants}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </motion.div>
                )}
                <motion.div className="ps-step" key={i} variants={stepVariants}>
                  <div className="ps-card">
                    <div className="ps-inner">
                      <span className="ps-num">{i + 1}</span>
                      <div className={`ps-icon ${step.iconClass}`}>{step.icon}</div>
                      <div className="ps-step-title">{step.title}</div>
                      <div className="ps-body">{step.body}</div>
                    </div>
                  </div>
                </motion.div>
              </>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
