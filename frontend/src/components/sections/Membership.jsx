import { Link } from "react-router-dom";
import { Check, Star } from "lucide-react";
import { MEMBERSHIP_PLANS } from "@/lib/data";

export default function Membership() {
  return (
    <section id="membership" className="relative py-24 sm:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-3">Membership</div>
          <h2 className="font-heading text-white text-5xl sm:text-6xl lg:text-7xl leading-[0.9] uppercase">
            Choose Your <span className="text-[#D90429]">Commitment.</span>
          </h2>
          <p className="mt-6 text-white/60">
            Transparent plans built for every stage of your fitness journey. Sample
            pricing shown below can be adjusted anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMBERSHIP_PLANS.map((plan) => {
            const featured = plan.badge === "Best Value";
            return (
              <div
                key={plan.name}
                data-testid={`plan-${plan.name.toLowerCase()}`}
                className={`relative p-8 border transition-all duration-500 hover:-translate-y-2 ${
                  featured
                    ? "bg-[#D90429] border-[#D90429] text-white red-glow"
                    : "bg-[#0a0a0a] border-white/10 hover:border-[#D90429]"
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-3 left-6 px-3 py-1 text-[10px] tracking-[0.3em] uppercase font-bold ${
                    featured ? "bg-white text-[#D90429]" : "bg-[#D90429] text-white"
                  }`}>
                    <Star size={10} className="inline mr-1 -mt-0.5" fill="currentColor" />
                    {plan.badge}
                  </div>
                )}
                <div className={`text-xs tracking-[0.3em] uppercase font-bold ${featured ? "text-white/80" : "text-[#D90429]"}`}>
                  {plan.tag}
                </div>
                <div className={`font-heading text-4xl mt-3 uppercase ${featured ? "text-white" : "text-white"}`}>
                  {plan.name}
                </div>
                <div className={`mt-6 pb-6 border-b ${featured ? "border-white/20" : "border-white/10"}`}>
                  <div className={`flex items-baseline gap-1 ${featured ? "text-white" : "text-white"}`}>
                    <span className="font-heading text-2xl leading-none">₹</span>
                    <span className="font-heading text-5xl leading-none">{plan.price}</span>
                  </div>
                  <div className={`text-xs uppercase tracking-widest mt-2 ${featured ? "text-white/70" : "text-white/40"}`}>
                    Sample pricing · easily editable
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <Check size={16} className={`mt-0.5 shrink-0 ${featured ? "text-white" : "text-[#D90429]"}`} />
                      <span className={featured ? "text-white/90" : "text-white/70"}>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  data-testid={`plan-cta-${plan.name.toLowerCase()}`}
                  className={`mt-8 block text-center uppercase tracking-widest font-bold text-xs py-3 transition-all ${
                    featured
                      ? "bg-white text-[#D90429] hover:bg-white/90"
                      : "bg-[#D90429] text-white hover:bg-[#EF233C]"
                  }`}
                >
                  Enquire Now
                </Link>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs uppercase tracking-widest text-white/40">
          * Prices shown are demo samples and can be updated to match live gym pricing.
        </p>
      </div>
    </section>
  );
}
