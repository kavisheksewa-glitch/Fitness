import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components (ab apni apni alag files se import ho rahe hain)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Diets from './pages/Diets';
import Equipment from './pages/Equipment';
import Trainers from './pages/Trainers';
import Contact from './pages/Contact';
import VipAccess from './pages/VipAccess';

// Governance Pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfAccess from './pages/TermsOfAccess';
import ClientNDA from './pages/ClientNDA';
import CookieSettings from './pages/CookieSettings';

// Utils
import { hasConsentedToCookies, setCookieConsent } from './utils/cookieUtils';

// Icons
import { Sparkles } from 'lucide-react';

// ============================================================================
// HELPER: Scroll To Top On Route Change
// ============================================================================
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

// ============================================================================
// COMPONENT: Cookie Consent Banner
// ============================================================================
function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!hasConsentedToCookies()) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setCookieConsent(true);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 bg-white/95 backdrop-blur-xl border border-amber-300 rounded-2xl p-6 shadow-2xl space-y-4 font-sans animate-slideUp">
      <div className="flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
            Cookie & Telemetry Preference
          </h4>
          <p className="text-[11px] text-slate-600 font-normal leading-relaxed">
            We utilize secure session cookies and performance telemetry to maintain VIP authorization states and optimize high-definition 3D apparatus rendering.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 pt-1 font-mono">
        <button
          onClick={handleAccept}
          className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white text-xs font-bold uppercase tracking-[0.15em] py-2.5 rounded-xl transition-colors shadow-md shadow-amber-600/20"
        >
          Accept All
        </button>
        <button
          onClick={() => setShowBanner(false)}
          className="w-full border border-amber-300 hover:border-amber-500 text-slate-700 text-xs font-bold uppercase py-2.5 rounded-xl transition-colors bg-white/50"
        >
          Essential Only
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div
        className="min-h-screen text-slate-900 flex flex-col font-serif selection:bg-amber-500 selection:text-white"
        style={{
          fontFamily: "Georgia, 'Times New Roman', Times, serif",
          backgroundImage: `radial-gradient(at 0% 0%, rgba(212, 175, 55, 0.07) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(197, 160, 89, 0.05) 0px, transparent 50%), linear-gradient(to bottom, #ffffff, #f7f2ea)`
        }}
      >
        <Navbar />

        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/diets" element={<Diets />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/vip-access" element={<VipAccess />} />

            {/* Governance Routes */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-access" element={<TermsOfAccess />} />
            <Route path="/client-nda" element={<ClientNDA />} />
            <Route path="/cookie-settings" element={<CookieSettings />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}