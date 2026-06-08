import React from 'react';
import { Navbar } from '../app/components/navbar';
import { Registration } from '../app/components/registration';
import { Footer } from '../app/components/footer';

export function RegisterPage() {
  return (
    <>
      <Navbar />
      <main>
        <Registration />
      </main>
      <Footer />
    </>
  );
}
