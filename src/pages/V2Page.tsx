import React, { useState, lazy, Suspense } from 'react';
import { Navbar } from '../app/components/navbar';
import { Hero } from '../app/components/hero';
import { Exploria } from '../app/components/exploria';
import { SponsorsMarquee } from '../app/components/sponsors-marquee';
import PhaseSteps from '../app/components/PhaseSteps';
import Scoreboard from '../app/components/Scoreboard';
import { Agenda } from '../app/components/agenda';
import { Prizes } from '../app/components/Prizes';
import { Location } from '../app/components/location';
import { FAQ } from '../app/components/faq';
import { Footer } from '../app/components/footer';

const RegistrationModal = lazy(() => import('../app/components/RegistrationModal'));

export function V2Page() {
  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <>
      <Navbar onRegister={() => setShowRegistration(true)} />

      <main>
        <Hero onRegister={() => setShowRegistration(true)} />

        <Exploria />

        <div className="space-y-16 pb-16">
          <SponsorsMarquee />
          <PhaseSteps />
          <Agenda />
          <Scoreboard />
          <Prizes />
          <Location />
        </div>
      </main>

      <FAQ />
      <Footer />

      {showRegistration && (
        <Suspense fallback={null}>
          <RegistrationModal isOpen={showRegistration} onClose={() => setShowRegistration(false)} />
        </Suspense>
      )}
    </>
  );
}
