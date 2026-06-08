import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

const Home = lazy(() => import('../pages/Home').then(m => ({ default: m.Home })));
const RegisterPage = lazy(() => import('../pages/Register').then(m => ({ default: m.RegisterPage })));
const V2Page = lazy(() => import('../pages/V2Page').then(m => ({ default: m.V2Page })));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-3 border-[#26A19E] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-['Inter'] text-gray-900 overflow-x-hidden selection:bg-[#26A19E]/30 selection:text-[#23706f]">
        {/* Global Gradient Background */}
        <div className="fixed inset-0 -z-20 bg-gradient-to-br from-[#E0F2F1] via-white to-[#FCE4EC] opacity-80" />

        {/* Abstract background blobs - CSS containment for paint performance */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" style={{ contain: 'strict' }}>
          <div
            className="absolute top-[-10%] left-[-5%] w-[50%] h-[60%] bg-gradient-to-br from-[#E4F2ED] to-[#C9E7E0] rounded-[100%] blur-[120px] opacity-40 mix-blend-multiply"
            style={{ willChange: 'auto', contain: 'layout style paint' }}
          />
          <div
            className="absolute top-[10%] right-[-10%] w-[45%] h-[70%] bg-gradient-to-bl from-[#FBE3D4] to-[#F7C6B2] rounded-[100%] blur-[140px] opacity-30 mix-blend-multiply"
            style={{ willChange: 'auto', contain: 'layout style paint' }}
          />
          <div
            className="absolute bottom-[-10%] left-[15%] w-[60%] h-[50%] bg-gradient-to-tr from-[#FFF4D4] to-[#FCE58D] rounded-[100%] blur-[130px] opacity-30 mix-blend-multiply"
            style={{ willChange: 'auto', contain: 'layout style paint' }}
          />
        </div>

        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/v2" element={<V2Page />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}
