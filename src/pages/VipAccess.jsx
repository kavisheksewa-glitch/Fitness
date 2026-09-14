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
  const [activeHub, setActiveHub] = useState('new-york');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    tier: 'global-elite',
    notes: ''
  });

  const hubs = {
    'new-york': {
      city: 'New York — Park Avenue',
      address: '740 Park Avenue, Penthouse Level, NY 10021',
      phone: '+1 (212) 555-0199',
      mapSrc: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80',
      coordinates: '40.7682° N, 73.9626° W'
    },
    'london': {
      city: 'London — Mayfair',
      address: '45 Berkeley Square, Mayfair, London W1J 5AS',
      phone: '+44 20 7946 0912',
      mapSrc: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
      coordinates: '51.5074° N, 0.1428° W'
    },
    'tokyo': {
      city: 'Tokyo — Ginza',
      address: '6-10-1 Ginza, Chuo-ku, Tokyo 104-0061',
      phone: '+81 3 5550 0192',
      mapSrc: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      coordinates: '35.6762° N, 139.7651° E'
    }
  };

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
        <section className="bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl py-14 px-6 md:px-12 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10" />
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/90 border border-amber-300/80 px-4 py-1.5 rounded-full text-amber-800 text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm">
              <Crown className="w-3.5 h-3.5 text-amber-600" />
              <span>Restricted Access Protocol</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900 uppercase">
              MUSCLE EMPIRE <span className="text-amber-600">Location ACCESS</span>
            </h1>
            <p className="text-xs md:text-sm text-stone-600 max-w-xl mx-auto font-normal leading-relaxed">
              Unlock private biometric laboratory floors, custom clinical nutrition regimes, and dedicated 1-on-1 master coaching across our global hubs.
            </p>
          </div>
        </section>

        {/* Main Content Layout */}
        <section className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Global Locations & Interactive Map */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <span className="text-amber-600 text-[10px] font-mono font-bold uppercase tracking-[0.2em] block">
                  Flagship Facilities
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900">
                  Private Training Sanctuaries
                </h2>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  Select a global hub below to inspect secure coordinates, facility layout, and direct secure communication channels.
                </p>
              </div>

              {/* Hub Selector Tabs */}
              <div className="flex flex-wrap gap-2.5">
                {Object.keys(hubs).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveHub(key)}
                    className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm ${
                      activeHub === key
                        ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-amber-600/20 border border-amber-600'
                        : 'bg-white/95 border border-amber-200 text-stone-600 hover:border-amber-400 hover:bg-amber-50/50'
                    }`}
                  >
                    {key.replace('-', ' ')}
                  </button>
                ))}
              </div>

              {/* Selected Hub Map & Details Card */}
              <div className="bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl overflow-hidden shadow-sm space-y-4">
                
                {/* Visual Map Mockup / Image Container */}
                <div className="relative h-56 md:h-64 w-full overflow-hidden bg-stone-900">
                  <img 
                    src={hubs[activeHub].mapSrc} 
                    alt={hubs[activeHub].city} 
                    className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  
                  {/* Coordinates Tag on Map */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-stone-900/90 backdrop-blur-md border border-amber-500/30 text-white px-3.5 py-1.5 rounded-xl text-[10px] font-mono font-bold tracking-wider shadow-sm">
                    <Navigation className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                    <span>{hubs[activeHub].coordinates}</span>
                  </div>
                </div>

                {/* Hub Info Details */}
                <div className="p-6 pt-0 space-y-3 font-mono">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-stone-900 text-base">{hubs[activeHub].city}</span>
                    <span className="text-[10px] font-mono bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1 rounded-full font-bold uppercase tracking-wider">Secured</span>
                  </div>
                  <p className="text-xs text-stone-600 font-sans">{hubs[activeHub].address}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs font-semibold text-stone-700 pt-3 border-t border-amber-100">
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-600" /> Biometric Gate #01</span>
                    <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-amber-600" /> {hubs[activeHub].phone}</span>
                  </div>
                </div>

              </div>

              {/* Security Notice */}
              <div className="bg-amber-50/60 border border-amber-200/80 rounded-3xl p-6 space-y-2">
                <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-wider font-mono">
                  <Lock className="w-4 h-4 text-amber-600" />
                  <span>Confidentiality Guarantee</span>
                </div>
                <p className="text-xs text-stone-600 font-normal leading-relaxed">
                  All client telemetry, physical assessments, and scheduling records are protected under strict corporate NDA and biometric data privacy laws.
                </p>
              </div>

            </div>

            {/* Right Column: Application Form */}
            <div className="lg:col-span-6 bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
              {isSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-amber-50 border border-amber-200 text-amber-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">Application Received</h3>
                  <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-amber-700">{formData.fullName}</span>. Our membership board will review your credentials and contact your secure channel within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 border border-amber-200 bg-white hover:bg-amber-600 hover:text-white text-amber-700 text-xs font-bold font-mono uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-sm cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                  
                  <div className="space-y-1.5 mb-2">
                    <span className="text-amber-600 text-[10px] font-mono uppercase tracking-[0.2em] font-bold block">
                      Vetting Protocol
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-stone-900">Request for Credentials</h3>
                    <p className="text-xs text-stone-600 font-sans">Complete the vetting form below to initiate facility access authorization.</p>
                  </div>

                  <div className="space-y-4">
                    
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Full Legal Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Lord / Executive Name"
                        className="w-full bg-stone-50/80 border border-amber-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Secure Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="executive@domain.com"
                          className="w-full bg-stone-50/80 border border-amber-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Direct Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-stone-50/80 border border-amber-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Access Tier Level *</label>
                      <select
                        name="tier"
                        value={formData.tier}
                        onChange={handleChange}
                        className="w-full bg-stone-50/80 border border-amber-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                      >
                        <option value="global-elite">Global Elite Pass (All Facilities)</option>
                        <option value="private-lab">Private Laboratory 1-on-1 Only</option>
                        <option value="executive-rehab">Executive Biomechanical Rehab</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">Specific Objectives / Notes</label>
                      <textarea
                        name="notes"
                        rows="3"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Outline any special training requirements..."
                        className="w-full bg-stone-50/80 border border-amber-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors resize-none font-sans"
                      ></textarea>
                    </div>

                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold text-xs uppercase tracking-[0.2em] py-3.5 rounded-xl transition-all shadow-md shadow-amber-600/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Authorize Request</span>
                    <ArrowRight className="w-4 h-4" />
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