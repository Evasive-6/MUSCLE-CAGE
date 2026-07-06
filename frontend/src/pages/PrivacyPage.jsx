import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div data-testid="privacy-page" className="pt-28 sm:pt-32 pb-24 bg-[#050505]">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 hover:text-[#D90429] mb-6">
          <ArrowLeft size={14}/> Back to Home
        </Link>
        <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-3">Legal</div>
        <h1 className="font-heading text-white text-5xl sm:text-6xl uppercase leading-none">Privacy Policy</h1>

        <div className="mt-10 space-y-6 text-white/80 leading-relaxed">
          <p>The Muscle Cage Fitness respects your privacy. This policy describes how information submitted through this website is handled.</p>

          <h2 className="font-heading text-white text-2xl uppercase mt-8">Information We Collect</h2>
          <p>When you fill out any form on this site (free trial, personal training booking, membership enquiry, newsletter or contact form) we may collect your name, phone, email and any message you provide.</p>

          <h2 className="font-heading text-white text-2xl uppercase mt-8">How We Use It</h2>
          <p>Your information is used only to respond to your enquiry, provide the services you requested and — if you subscribe — to send occasional fitness updates. We do not sell or share your data with third parties.</p>

          <h2 className="font-heading text-white text-2xl uppercase mt-8">Cookies</h2>
          <p>The site uses minimal cookies to enable navigation and analytics. You can control cookies through your browser settings at any time.</p>

          <h2 className="font-heading text-white text-2xl uppercase mt-8">Contact</h2>
          <p>For any privacy questions, write to <a className="text-[#D90429] hover:underline" href="mailto:info@musclecagefitness.in">info@musclecagefitness.in</a>.</p>

          <p className="text-xs uppercase tracking-widest text-white/40 pt-8 border-t border-white/10">Last updated · December 2025</p>
        </div>
      </div>
    </div>
  );
}
