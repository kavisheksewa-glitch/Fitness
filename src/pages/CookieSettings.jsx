import React, { useState } from 'react';
import { Cookie, ShieldCheck, Check, Sliders, Sparkles } from 'lucide-react';

export default function CookieSettings() {
  const [preferences, setPreferences] = useState({
    essential: true, // Always true and locked
    analytics: true,
    functional: false,
    marketing: false,
  });

  const [saved, setSaved] = useState(false);

  const handleToggle = (key) => {
    if (key === 'essential') return; // Cannot toggle essential cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 4000);
  };

  return (
    <div 
      className="relative text-stone-700 min-h-screen pt-6 pb-16 px-4 md:px-8 lg:px-10 overflow-hidden"
      style={{ 
        backgroundColor: "#F7F5F0",
        backgroundImage: "radial-gradient(#E8E3D5 0.75px, transparent 0.75px), radial-gradient(#E8E3D5 0.75px, #F7F5F0 0.75px)",
        backgroundSize: "30px 30px",
        backgroundPosition: "0 0, 15px 15px"
      }}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto space-y-10 relative z-10">
        
        {/* ================= PAGE HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 font-sans">
          <div className="inline-flex items-center gap-1.5 border border-amber-300/80 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-800">
              Governance & Legal
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-900 tracking-tight font-serif uppercase">
            COOKIE SETTINGS
          </h1>

          <p className="text-stone-600 text-xs md:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
            Manage your digital tracking and data preference choices on ATSEWA platforms.
          </p>
        </div>

        {/* ================= CONTENT CONTAINER ================= */}
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl p-6 md:p-10 space-y-8 shadow-sm font-sans">
          
          <div className="text-xs text-stone-600 leading-relaxed font-normal">
            <p>
              We use cookies and similar telemetry tools to enhance your browsing experience, secure facility access logins, and analyze site performance. You can customize your cookie permissions below.
            </p>
          </div>

          {/* Settings Form */}
          <form onSubmit={handleSave} className="space-y-6">
            <div className="space-y-4">
              
              {/* Essential Cookies */}
              <div className="flex items-center justify-between p-4 bg-stone-50/80 border border-amber-200/80 rounded-2xl">
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-bold text-stone-900">Essential Cookies</h4>
                  <p className="text-xs text-stone-500">Required for core site functionality, security, and session authentication.</p>
                </div>
                <span className="font-mono text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200 shrink-0">
                  Always Active
                </span>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between p-4 bg-white/90 border border-amber-200/80 rounded-2xl shadow-sm">
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-bold text-stone-900">Performance & Analytics</h4>
                  <p className="text-xs text-stone-500">Helps us understand how visitors interact with our digital ecosystem.</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleToggle('analytics')}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors shrink-0 cursor-pointer ${
                    preferences.analytics ? 'bg-gradient-to-r from-amber-600 to-yellow-600' : 'bg-stone-300'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                      preferences.analytics ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Functional Cookies */}
              <div className="flex items-center justify-between p-4 bg-white/90 border border-amber-200/80 rounded-2xl shadow-sm">
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-bold text-stone-900">Functional Preferences</h4>
                  <p className="text-xs text-stone-500">Remembers your custom configurations, region settings, and dashboard layouts.</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleToggle('functional')}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors shrink-0 cursor-pointer ${
                    preferences.functional ? 'bg-gradient-to-r from-amber-600 to-yellow-600' : 'bg-stone-300'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                      preferences.functional ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between p-4 bg-white/90 border border-amber-200/80 rounded-2xl shadow-sm">
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-bold text-stone-900">Marketing & Insights</h4>
                  <p className="text-xs text-stone-500">Used to deliver tailored private workout blueprints and specialized announcements.</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleToggle('marketing')}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors shrink-0 cursor-pointer ${
                    preferences.marketing ? 'bg-gradient-to-r from-amber-600 to-yellow-600' : 'bg-stone-300'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                      preferences.marketing ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-mono text-xs font-bold uppercase tracking-widest py-3.5 px-8 rounded-xl transition-all shadow-md shadow-amber-600/25 cursor-pointer"
              >
                Save Preferences
              </button>

              {saved && (
                <p className="text-xs text-emerald-700 font-mono font-bold animate-fadeIn">
                  ✓ Your cookie settings have been updated securely.
                </p>
              )}
            </div>
          </form>

        </div>

      </div>
    </div>
  );
}