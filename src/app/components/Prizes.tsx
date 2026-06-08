import React from 'react';

function TrophySVG({ label, color }: { label: string; color: string }) {
  return (
    <svg className="trophy-icon" viewBox="0 0 64 64" fill="none" style={{ color }}>
      <text
        x="50%"
        y="22"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Syne, sans-serif"
        fontWeight="800"
        fontSize="12"
        fill="currentColor"
      >
        {label}
      </text>
      <path
        d="M20 18 Q18 32 24 38 Q28 42 32 42 Q36 42 40 38 Q46 32 44 18 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M20 22 Q14 22 14 28 Q14 34 20 34"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M44 22 Q50 22 50 28 Q50 34 44 34"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <line x1="32" y1="42" x2="32" y2="48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M25 48 L39 48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M27 52 L37 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="25" y1="48" x2="27" y2="52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="39" y1="48" x2="37" y2="52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

interface PrizeCardProps {
  place: string;
  amount: string;
  variant: 'first' | 'second' | 'third';
  delay: number;
}

function PrizeCard({ place, amount, variant, delay }: PrizeCardProps) {
  const styles: Record<string, { bg: string; width: string; trophyColor: string; amountColor: string; shadow: string; paddingTop: string; paddingBottom: string }> = {
    first: {
      bg: '#e8c96e',
      width: '178px',
      trophyColor: '#b8860b',
      amountColor: '#7a5c10',
      shadow: '0 8px 32px rgba(200,155,60,0.35)',
      paddingTop: '32px',
      paddingBottom: '28px',
    },
    second: {
      bg: '#e8e8e8',
      width: '160px',
      trophyColor: '#aaa',
      amountColor: '#888',
      shadow: '0 4px 20px rgba(0,0,0,0.08)',
      paddingTop: '28px',
      paddingBottom: '24px',
    },
    third: {
      bg: '#e8a89a',
      width: '150px',
      trophyColor: '#c0604a',
      amountColor: '#a04030',
      shadow: '0 4px 20px rgba(0,0,0,0.08)',
      paddingTop: '20px',
      paddingBottom: '24px',
    },
  };

  const s = styles[variant];

  return (
    <div
      className="flex flex-col items-center gap-3.5 rounded-[20px] px-6 transition-all duration-300 hover:-translate-y-1.5"
      style={{
        background: s.bg,
        width: s.width,
        maxWidth: '100%',
        boxShadow: s.shadow,
        paddingTop: s.paddingTop,
        paddingBottom: s.paddingBottom,
        opacity: 0,
        animation: `slide-up 0.5s ease forwards`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className={variant === 'first' ? 'w-20 h-20' : 'w-[70px] h-[70px]'}>
        <TrophySVG label={place} color={s.trophyColor} />
      </div>
      <span
        className={`font-['Syne',sans-serif] font-bold tracking-[-0.3px] ${
          variant === 'first' ? 'text-2xl' : 'text-xl'
        }`}
        style={{ color: s.amountColor }}
      >
        {amount}
      </span>
    </div>
  );
}

export function Prizes() {
  return (
    <section className="py-16 md:py-20 px-5">
      <div className="text-center max-w-4xl mx-auto">
        <h2
          className="font-['Syne',sans-serif] text-3xl md:text-4xl font-extrabold text-[#1a1a2e] mb-8 tracking-[-0.5px]"
        >
          Prizes
        </h2>

        <div className="flex items-end justify-center gap-3 sm:gap-4 flex-wrap">
          {/* 2nd Place */}
          <PrizeCard place="2nd" amount="30 000 DA" variant="second" delay={0.1} />

          {/* 1st Place */}
          <PrizeCard place="1st" amount="40 000 DA" variant="first" delay={0} />

          {/* 3rd Place */}
          <PrizeCard place="3rd" amount="20 000 DA" variant="third" delay={0.2} />
        </div>
      </div>
    </section>
  );
}
