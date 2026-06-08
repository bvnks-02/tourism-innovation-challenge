import React from 'react';
import { Navbar } from '../app/components/navbar';
import { Hero } from '../app/components/hero';
import { Exploria } from '../app/components/exploria';
import { SponsorsMarquee } from '../app/components/sponsors-marquee';
import { OnlinePhase } from '../app/components/online-phase';
import { Agenda } from '../app/components/agenda';
import { Location } from '../app/components/location';
import { FAQ } from '../app/components/faq';
import { Footer } from '../app/components/footer';

export function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Exploria />

        <div className="space-y-16 pb-16">
          <SponsorsMarquee />
          <OnlinePhase />
          <Agenda />
          <Location />
        </div>
      </main>

      <FAQ />
      <Footer />
    </>
  );
}
