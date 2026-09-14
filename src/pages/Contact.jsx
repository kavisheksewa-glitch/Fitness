import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Crown
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'VIP Membership Consultation',
    message: '',
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setErrorMsg("");

  try {
    const response = await fetch("http://localhost:5001/api/contact", {
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

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      inquiryType: 'VIP Membership Consultation',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <div 
      className="relative text-stone-700 min-h-screen pt-6 pb-16 px-4 md:px-8 lg:px-10 overflow-hidden"
      style={{ 
        backgroundColor: "#F7F5F0",
        backgroundImage: "radial-gradient(#E8E3D5 0.75px, transparent 0.75px), radial-gradient(#E8E3D5 0.75px, #F7F5F0 0.75px)",
        backgroundSize: "30px 30px",
        backgroundPosition: "0 0, 15px 15px",
        fontFamily: "Georgia, 'Times New Roman', Times, serif"
      }}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto space-y-10 relative z-10">
        
        {/* ================= PAGE HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 font-sans">
          <div className="inline-flex items-center gap-1.5 border border-amber-300/80 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
            <Crown className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-800">
              Private Concierge & Access
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-900 tracking-tight font-serif uppercase">
            DIRECT COMMUNICATIONS
          </h1>

          <p className="text-stone-600 text-xs md:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
            Schedule a private biological assessment, request a private coaching consultation, or inquire about membership availability in our ultra-exclusive facility.
          </p>
        </div>

        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start font-sans">
          
          {/* LEFT COLUMN: STUDIO INFO & CONCIERGE CHANNELS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channels Card */}
            <div className="bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
              <span className="text-amber-600 text-[10px] font-mono uppercase tracking-[0.2em] block font-bold">
                Direct Channels
              </span>

              <div className="space-y-5 text-xs">
                
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-700 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-stone-400 font-mono uppercase text-[9px] block font-bold tracking-widest">Headquarters & Facility</span>
                    <p className="text-stone-800 font-medium text-xs leading-relaxed">
                      ATSEWA PVT.LTD <br />
                      740 Park Avenue, Executive Level 4 <br />
                      New York, NY 10021
                    </p>
                  </div>
                </div>

                {/* Phone Line */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-700 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-stone-400 font-mono uppercase text-[9px] block font-bold tracking-widest">VIP Desk & Concierge</span>
                    <p className="text-amber-700 font-bold text-xs font-mono">
                      +1 (800) 555-ATSEWA
                    </p>
                    <span className="text-[10px] text-stone-500 block">Direct Line for Private Members</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-700 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-stone-400 font-mono uppercase text-[9px] block font-bold tracking-widest">Encrypted Inquiries</span>
                    <p className="text-stone-800 font-medium text-xs font-mono">
                      ATSEWA@Gmail.com
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-700 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-stone-400 font-mono uppercase text-[9px] block font-bold tracking-widest">Operational Hours</span>
                    <p className="text-stone-800 text-xs leading-relaxed font-mono">
                      Mon – Sat: 05:00 AM – 11:00 PM <br />
                      Sunday: Private Member Access Only
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Confidentiality Commitment Box */}
            <div className="bg-amber-50/60 border border-amber-200/80 rounded-3xl p-6 space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>Confidentiality Guarantee</span>
              </div>
              <p className="text-xs text-stone-600 font-normal leading-relaxed">
                All client communications, health data, and athletic assessments are strictly governed by non-disclosure agreements. Your privacy is paramount.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: CONSULTATION FORM */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl p-6 md:p-8 shadow-sm relative">
            
            {/* Form Title */}
            <div className="space-y-1.5 mb-6">
              <span className="text-amber-600 text-[10px] font-mono uppercase tracking-[0.2em] font-bold block">
                VIP Application
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-stone-900 font-serif uppercase">
                REQUEST A PRIVATE CONSULTATION
              </h2>
              <p className="text-xs text-stone-600">
                Fill out the required parameters below. Our concierge director will respond within two business hours.
              </p>
            </div>

            {isSubmitted ? (
              /* Submission Success State */
              <div className="py-10 text-center space-y-4 bg-amber-50/80 border border-amber-200 rounded-2xl p-6">
                <div className="w-12 h-12 bg-white border border-amber-200 rounded-full flex items-center justify-center mx-auto text-amber-700 shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-stone-900 font-serif uppercase">
                    INQUIRY TRANSMITTED SUCCESSFULLY
                  </h3>
                  <p className="text-xs text-stone-600 max-w-md mx-auto leading-normal">
                    Thank you, <strong className="text-amber-700">{formData.fullName}</strong>. Your consultation request has been routed to our Senior Performance Director.
                  </p>
                </div>

                <div className="p-3.5 bg-white border border-amber-200 rounded-xl max-w-sm mx-auto text-left text-xs space-y-1 text-stone-700 shadow-sm font-mono">
                  <div className="text-amber-700 font-bold uppercase text-[10px]">Reference Summary:</div>
                  <div>Inquiry Type: {formData.inquiryType}</div>
                  <div>Direct Phone: {formData.phone || 'N/A'}</div>
                </div>

                <button
                  onClick={resetForm}
                  className="inline-flex items-center gap-2 border border-amber-200 bg-white hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-600 hover:text-white text-amber-700 font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              /* Active Form */
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                
                {/* Full Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-wider text-stone-500 font-bold">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Jonathan Sterling"
                      className="w-full bg-stone-50/80 border border-amber-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-wider text-stone-500 font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jonathan@domain.com"
                      className="w-full bg-stone-50/80 border border-amber-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Inquiry Type Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-wider text-stone-500 font-bold">
                      Phone Number *
                    </label>
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

                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase tracking-wider text-stone-500 font-bold">
                      Inquiry Category *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full bg-stone-50/80 border border-amber-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors cursor-pointer"
                    >
                      <option>VIP Membership Consultation</option>
                      <option>1-on-1 Master Coaching</option>
                      <option>Precision Nutrition Frameworks</option>
                      <option>Facility Tour & Assessment</option>
                      <option>Pro Athlete High-Performance</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-1">
                  <label className="block text-[10px] uppercase tracking-wider text-stone-500 font-bold">
                    Primary Fitness Objectives & Notes
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your current training baseline, timeline, and primary targets..."
                    className="w-full bg-stone-50/80 border border-amber-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold text-xs uppercase tracking-[0.2em] py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-amber-600/25 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Transmitting Application...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Consultation Request</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}