import React from 'react';
import { Shield, Lock, Eye, FileText, UserCheck, Globe, Mail, Clock, AlertCircle } from 'lucide-react';

export default function PrivacyPolicy() {
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
            <Shield className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-800">
              Governance & Legal — UK GDPR Compliant
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-900 tracking-tight font-serif uppercase">
            PRIVACY POLICY
          </h1>

          <p className="text-stone-500 text-xs font-mono">
            Last Updated: January 2026 |ASEWA PVT. Ltd.
          </p>
          <p className="text-stone-400 text-[11px] font-mono max-w-2xl mx-auto">
            This policy is issued in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
        </div>

        {/* ================= CONTENT CONTAINER ================= */}
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border border-amber-200/80 rounded-3xl p-6 md:p-10 space-y-8 shadow-sm font-sans">

          {/* 1. Data Controller */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-600 shrink-0" /> 1. Data Controller
            </h3>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-normal">
              ATSEWA PVT. Ltd. ("ATSEWA", "we", "us", "our") is the data controller responsible for your personal data under UK data protection law. We are registered in England and Wales and, where applicable, registered with the Information Commissioner's Office (ICO) as a data controller.
            </p>
          </div>

          {/* 2. Data We Collect */}
          <div className="space-y-3 border-t border-amber-100 pt-6">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
              <Eye className="w-4 h-4 text-amber-600 shrink-0" /> 2. Information We Collect
            </h3>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-normal">
              We collect biometric measurements, training progression metrics, dietary preferences, contact details, payment information, and facility access credentials strictly for the purpose of personalising your high-performance coaching protocols. This may include special category data (e.g. health information) processed under Article 9 UK GDPR, only with your explicit consent or where necessary for the provision of health and fitness services.
            </p>
          </div>

          {/* 3. Lawful Basis for Processing */}
          <div className="space-y-3 border-t border-amber-100 pt-6">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-600 shrink-0" /> 3. Our Lawful Basis for Processing
            </h3>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-normal">
              We process your personal data under one or more of the following lawful bases set out in Article 6 UK GDPR: performance of a contract (delivering coaching and membership services), your explicit consent (for health data and marketing communications), legitimate interests (improving our services and facility security), and compliance with a legal obligation (e.g. tax and financial reporting).
            </p>
          </div>

          {/* 4. How We Use Your Data */}
          <div className="space-y-3 border-t border-amber-100 pt-6">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-amber-600 shrink-0" /> 4. How We Use Your Data
            </h3>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-normal">
              Your data is used to manage your membership, personalise training and nutrition programmes, process payments, maintain facility security, communicate service updates, and, where you have consented, send you marketing communications. We do not use your data for any purpose incompatible with these stated uses.
            </p>
          </div>

          {/* 5. Data Retention */}
          <div className="space-y-3 border-t border-amber-100 pt-6">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600 shrink-0" /> 5. Data Retention
            </h3>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-normal">
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, including satisfying any legal, accounting, or reporting requirements. Membership and health-related records are typically retained for the duration of your membership plus a period required by law, after which data is securely deleted or anonymised.
            </p>
          </div>

          {/* 6. Secure Storage & Encryption */}
          <div className="space-y-3 border-t border-amber-100 pt-6">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-600 shrink-0" /> 6. Secure Storage & Encryption
            </h3>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-normal">
              All digital communication, profile data, and research telemetry are protected using industry-standard encryption both in transit and at rest, alongside access controls and regular security audits. We do not sell client information to third parties.
            </p>
          </div>

          {/* 7. International Transfers */}
          <div className="space-y-3 border-t border-amber-100 pt-6">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
              <Globe className="w-4 h-4 text-amber-600 shrink-0" /> 7. International Data Transfers
            </h3>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-normal">
              Where personal data is transferred outside the UK (for example, to our London, New York, or Tokyo facilities, or third-party service providers), we ensure appropriate safeguards are in place, such as UK International Data Transfer Agreements (IDTA) or adequacy regulations recognised under UK GDPR.
            </p>
          </div>

          {/* 8. Your Rights */}
          <div className="space-y-3 border-t border-amber-100 pt-6">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-amber-600 shrink-0" /> 8. Your Rights Under UK GDPR
            </h3>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-normal mb-2">
              As a data subject under UK law, you have the right to:
            </p>
            <ul className="text-xs md:text-sm text-stone-600 leading-relaxed font-normal list-disc pl-5 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request rectification of inaccurate or incomplete data</li>
              <li>Request erasure of your data ("right to be forgotten")</li>
              <li>Restrict or object to certain processing activities</li>
              <li>Request data portability in a structured, machine-readable format</li>
              <li>Withdraw consent at any time, where processing is based on consent</li>
              <li>Lodge a complaint with the Information Commissioner's Office (ICO)</li>
            </ul>
          </div>

          {/* 9. Cookies */}
          <div className="space-y-3 border-t border-amber-100 pt-6">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-600 shrink-0" /> 9. Cookies & Tracking
            </h3>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-normal">
              Our website uses cookies and similar technologies in accordance with the Privacy and Electronic Communications Regulations (PECR). You can manage your cookie preferences at any time via our Cookie Settings page.
            </p>
          </div>

          {/* 10. Contact & Complaints */}
          <div className="space-y-3 border-t border-amber-100 pt-6">
            <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-600 shrink-0" /> 10. Contact Us
            </h3>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed font-normal">
              For any questions regarding this policy or to exercise your data protection rights, please contact our Data Protection point of contact at privacy atsewa@gmail.com. If you are unsatisfied with our response, you have the right to lodge a complaint with the ICO at{' '}
              <span className="text-amber-700 font-medium">ico.org.uk</span> or by calling 0303 123 1113.
            </p>
          </div>

          {/* Disclaimer note */}
          <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-[11px] text-stone-500 leading-relaxed font-normal">
              This is a general template for illustrative purposes and does not constitute legal advice. Please consult a qualified solicitor to ensure full compliance with UK GDPR and the Data Protection Act 2018 for your specific business.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}