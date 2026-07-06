import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div data-testid="terms-page" className="pt-28 sm:pt-32 pb-24 bg-[#050505]">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 hover:text-[#D90429] mb-6">
          <ArrowLeft size={14}/> Back to Home
        </Link>
        <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-3">Legal</div>
        <h1 className="font-heading text-white text-5xl sm:text-6xl uppercase leading-none">Terms &amp; Conditions</h1>

        <div className="mt-10 space-y-6 text-white/80 leading-relaxed">
          <p>By using The Muscle Cage Fitness website and services, you agree to the following terms.</p>

          <h2 className="font-heading text-white text-2xl uppercase mt-8">Membership</h2>
          <p>Memberships are non-transferable. Access to the gym facility is limited to the enrolled member for the term of the purchased plan. All members must follow gym rules and instructions from staff at all times.</p>

          <h2 className="font-heading text-white text-2xl uppercase mt-8">Health &amp; Safety</h2>
          <p>Members train at their own risk. We recommend consulting a physician before starting any new exercise program. Any pre-existing medical conditions must be disclosed to your trainer.</p>

          <h2 className="font-heading text-white text-2xl uppercase mt-8">Payments &amp; Refunds</h2>
          <p>Membership fees are payable in advance. Refunds are handled on a case-by-case basis at the discretion of gym management.</p>

          <h2 className="font-heading text-white text-2xl uppercase mt-8">Website Content</h2>
          <p>All content, imagery and branding on this website is owned by The Muscle Cage Fitness and may not be reproduced without written permission.</p>

          <h2 className="font-heading text-white text-2xl uppercase mt-8">Contact</h2>
          <p>Questions? Email <a className="text-[#D90429] hover:underline" href="mailto:info@musclecagefitness.in">info@musclecagefitness.in</a>.</p>

          <p className="text-xs uppercase tracking-widest text-white/40 pt-8 border-t border-white/10">Last updated · December 2025</p>
        </div>
      </div>
    </div>
  );
}
