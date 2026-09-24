import React, { useState } from 'react';
import { 
  Crown, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Lock,
  ArrowRight,
  Navigation,
  Globe
} from 'lucide-react';
import API_BASE_URL from '../utils/api';

export default function VipAccess() {
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeHub, setActiveHub] = useState('woodford-green');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    tier: 'global-elite',
    notes: ''
  });

  const hubs = {
    'woodford-green': {
      city: 'Woodford Green — Essex',
      address: '9b The Broadway, Woodford Green, Essex IG8 0HL, UK',
      phone: '+44 20 8500 0000',
      mapSrc: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
      coordinates: '51.6086° N, 0.0290° E'
    }
  };

  const hub = hubs[activeHub];

  // Click on address / map opens this location in Google Maps
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hub.address)}`;

  // Click on phone opens the dialer (keeps only digits and +)
  const telUrl = `tel:${hub.phone.replace(/[^\d+]/g, '')}`;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/vip-access`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      setErrorMsg("Server connection failed. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="relative min-h-screen text-stone-700 pb-20 px-4 md:px-8 lg:px-10 pt-6 overflow-hidden"
      style={{ 
        backgroundColor: "#F7F5F0",
        backgroundImage: "radial-gradient(#E8E3D5 0.75px, transparent 0.75px), radial-gradient(#E8E3D5 0.75px, #F7F5F0 0.75px)",
        backgroundSize: "30px 30px",
        backgroundPosition: "0 0, 15px 15px"
      }}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto space-y-12 relative z-10">
        
        {/* Header Banner */}
        <section className="bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl py-14 lg:py-16 px-6 md:px-12 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10" />
          <div className="max-w-3xl lg:max-w-4xl mx-auto space-y-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/90 border border-amber-300/80 px-4 py-1.5 lg:px-5 lg:py-2 rounded-full text-amber-800 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
              <Crown className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-amber-600" />
              <span>Restricted Access Protocol</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight uppercase bg-gradient-to-r from-stone-900 via-stone-800 to-amber-800 bg-clip-text text-transparent">
              MUSCLE EMPIRE <span className="text-amber-600">Location ACCESS</span>
            </h1>
            <p className="text-xs md:text-sm lg:text-base text-stone-600 max-w-xl lg:max-w-2xl mx-auto font-normal leading-relaxed">
              Unlock private biometric laboratory floors, custom clinical nutrition regimes, and dedicated 1-on-1 master coaching across our global hubs.
            </p>
          </div>
        </section>

        {/* Main Content Layout */}
        <section className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Location & Details */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <span className="text-amber-600 text-[10px] lg:text-xs font-mono font-bold uppercase tracking-[0.2em] block">
                  Flagship Facility
                </span>
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-stone-900">
                  Private Training Sanctuary
                </h2>
                <p className="text-xs lg:text-sm text-stone-600 leading-relaxed font-sans">
                  Inspect our secure coordinates, facility layout, and direct secure communication channel below.
                </p>
              </div>

              {/* Selected Hub Map & Details Card */}
              <div className="bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl overflow-hidden shadow-sm space-y-4">
                
                {/* Map image (click opens Google Maps) */}
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open location in Google Maps"
                  className="relative block h-56 md:h-64 lg:h-72 w-full overflow-hidden bg-stone-900 cursor-pointer"
                >
                  <img 
                    src={hub.mapSrc} 
                    alt={hub.city} 
                    className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  
                  {/* Coordinates Tag on Map */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-stone-900/90 backdrop-blur-md border border-amber-500/30 text-white px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-xl text-[10px] lg:text-xs font-mono font-bold tracking-wider shadow-sm">
                    <Navigation className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-amber-400 animate-pulse" />
                    <span>{hub.coordinates}</span>
                  </div>

                  {/* Open in Maps hint */}
                  <div className="absolute bottom-4 right-4 bg-white/90 text-amber-800 border border-amber-200 px-3 py-1.5 rounded-xl text-[10px] lg:text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                    Open in Maps
                  </div>
                </a>

                {/* Hub Info Details */}
                <div className="p-6 lg:p-7 pt-0 space-y-3 font-mono">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-stone-900 text-base lg:text-lg">{hub.city}</span>
                    <span className="text-[10px] lg:text-xs font-mono bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1 lg:px-3.5 lg:py-1.5 rounded-full font-bold uppercase tracking-wider">Secured</span>
                  </div>

                  {/* Address (opens Google Maps) */}
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs lg:text-sm text-stone-600 font-sans hover:text-amber-700 hover:underline transition-colors cursor-pointer"
                  >
                    {hub.address}
                  </a>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs lg:text-sm font-semibold text-stone-700 pt-3 border-t border-amber-100">
                    
                    {/* Phone (opens dialer) */}
                    <a
                      href={telUrl}
                      className="flex items-center gap-1.5 hover:text-amber-700 hover:underline transition-colors cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-amber-600" /> {hub.phone}
                    </a>
                  </div>
                </div>

              </div>

              {/* Security Notice */}
              <div className="bg-amber-50/60 border border-amber-200/80 rounded-3xl p-6 lg:p-7 space-y-2">
                <div className="flex items-center gap-2 text-amber-800 text-xs lg:text-sm font-bold uppercase tracking-wider font-mono">
                  <Lock className="w-4 h-4 lg:w-5 lg:h-5 text-amber-600" />
                  <span>Confidentiality Guarantee</span>
                </div>
                <p className="text-xs lg:text-sm text-stone-600 font-normal leading-relaxed">
                  All client telemetry, physical assessments, and scheduling records are protected under strict corporate NDA and biometric data privacy laws.
                </p>
              </div>

            </div>

            {/* Right Column: Application Form */}
            <div className="lg:col-span-6 bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl p-6 md:p-8 lg:p-9 shadow-sm">
              {isSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-amber-50 border border-amber-200 text-amber-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-stone-900">Application Received</h3>
                  <p className="text-xs lg:text-sm text-stone-600 max-w-md lg:max-w-lg mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-amber-700">{formData.fullName}</span>. Our membership board will review your credentials and contact your secure channel within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 border border-amber-200 bg-white hover:bg-amber-600 hover:text-white text-amber-700 text-xs lg:text-sm font-bold font-mono uppercase tracking-wider px-6 py-3 lg:px-7 lg:py-3.5 rounded-xl transition-all shadow-sm cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6 font-mono text-xs lg:text-sm">
                  
                  <div className="space-y-1.5 mb-2">
                    <span className="text-amber-600 text-[10px] lg:text-xs font-mono uppercase tracking-[0.2em] font-bold block">
                      Vetting Protocol
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-stone-900">Request for Credentials</h3>
                    <p className="text-xs lg:text-sm text-stone-600 font-sans">Complete the vetting form below to initiate facility access authorization.</p>
                  </div>

                  <div className="space-y-4 lg:space-y-5">
                    
                    <div className="space-y-1">
                      <label className="text-[10px] lg:text-xs font-bold text-stone-500 uppercase tracking-wider">Full Legal Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Lord / Executive Name"
                        className="w-full bg-stone-50/80 border border-amber-200 rounded-xl px-3.5 py-2.5 lg:px-4 lg:py-3 text-xs lg:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                      <div className="space-y-1">
                        <label className="text-[10px] lg:text-xs font-bold text-stone-500 uppercase tracking-wider">Secure Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="executive@domain.com"
                          className="w-full bg-stone-50/80 border border-amber-200 rounded-xl px-3.5 py-2.5 lg:px-4 lg:py-3 text-xs lg:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] lg:text-xs font-bold text-stone-500 uppercase tracking-wider">Direct Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-stone-50/80 border border-amber-200 rounded-xl px-3.5 py-2.5 lg:px-4 lg:py-3 text-xs lg:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] lg:text-xs font-bold text-stone-500 uppercase tracking-wider">Access Tier Level *</label>
                      <select
                        name="tier"
                        value={formData.tier}
                        onChange={handleChange}
                        className="w-full bg-stone-50/80 border border-amber-200 rounded-xl px-3.5 py-2.5 lg:px-4 lg:py-3 text-xs lg:text-sm text-stone-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                      >
                        <option value="global-elite">Global Elite Pass (All Facilities)</option>
                        <option value="private-lab">Private Laboratory 1-on-1 Only</option>
                        <option value="executive-rehab">Executive Biomechanical Rehab</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] lg:text-xs font-bold text-stone-500 uppercase tracking-wider">Specific Objectives / Notes</label>
                      <textarea
                        name="notes"
                        rows="3"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Outline any special training requirements..."
                        className="w-full bg-stone-50/80 border border-amber-200 rounded-xl px-3.5 py-2.5 lg:px-4 lg:py-3 text-xs lg:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors resize-none font-sans"
                      ></textarea>
                    </div>

                  </div>

                  {/* Error message (was set in state but never shown before) */}
                  {errorMsg && (
                    <div className="text-xs lg:text-sm text-rose-700 bg-rose-50 border border-rose-200 rounded-xl px-3.5 py-2.5">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold text-xs lg:text-sm uppercase tracking-[0.2em] py-3.5 lg:py-4 rounded-xl transition-all shadow-md shadow-amber-600/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Submitting Request...</span>
                    ) : (
                      <>
                        <span>Authorize Request</span>
                        <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}