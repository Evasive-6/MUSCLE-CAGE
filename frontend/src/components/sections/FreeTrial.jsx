import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import { submitLead } from "@/services/leads";

export default function FreeTrial() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("trial-name"),
      phone: formData.get("trial-phone"),
      email: formData.get("trial-email"),
      plan: `Trial · ${formData.get("trial-goal")}`,
      message: `Preferred trial date: ${formData.get("trial-date") || "anytime"}`,
      source: "free-trial",
    };

    try {
      await submitLead("/leads/enquiry", payload);
      toast.success("Trial request received. We'll be in touch shortly.");
      e.currentTarget.reset();
    } catch (_error) {
      toast.error("Unable to submit your trial request right now.");
    }
  };

  return (
    <section id="trial" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1583500178690-f7fd39c69b1c?w=1800&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-3">Free Trial</div>
          <h2 className="font-heading text-white text-5xl sm:text-6xl lg:text-7xl leading-[0.9] uppercase">
            Try Us <span className="text-[#D90429]">Free.</span>
            <br />No Strings.
          </h2>
          <p className="mt-6 text-white/70 max-w-md">
            Book a single-day trial pass and feel the difference. Access to the full
            floor, one class, and a fitness consultation.
          </p>

          <ul className="mt-8 space-y-3">
            {["Full gym floor access", "1 group class of your choice", "Trainer consultation"].map((p) => (
              <li key={p} className="flex items-center gap-3 text-white/80">
                <CheckCircle2 size={18} className="text-[#D90429]" /> {p}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="glass border border-white/10 p-8"
          data-testid="trial-form"
        >
          <div className="text-xs tracking-[0.3em] uppercase text-white/60 font-bold mb-6">Book a Free Trial</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="trial-name" required data-testid="trial-name" placeholder="Full Name" className="bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-3 text-sm rounded-none"/>
            <input name="trial-phone" required data-testid="trial-phone" placeholder="Phone" className="bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-3 text-sm rounded-none"/>
            <input name="trial-email" required type="email" data-testid="trial-email" placeholder="Email" className="sm:col-span-2 bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-3 text-sm rounded-none"/>
            <input name="trial-date" type="date" data-testid="trial-date" className="bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-3 text-sm rounded-none"/>
            <select name="trial-goal" data-testid="trial-goal" className="bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-3 text-sm rounded-none">
              <option>Weight Loss</option>
              <option>Muscle Gain</option>
              <option>Strength</option>
              <option>General Fitness</option>
            </select>
          </div>
          <button
            type="submit"
            data-testid="trial-submit"
            className="mt-6 w-full bg-[#D90429] hover:bg-[#EF233C] text-white uppercase tracking-widest font-bold text-sm py-4 transition-all hover:-translate-y-0.5 red-glow"
          >
            Claim Free Trial
          </button>
        </form>
      </div>
    </section>
  );
}
