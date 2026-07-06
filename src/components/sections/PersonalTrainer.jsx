import { toast } from "sonner";
import { UserCog } from "lucide-react";
import { submitLead } from "@/services/leads";

export default function PersonalTrainer() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("pt-name"),
      phone: formData.get("pt-phone"),
      email: formData.get("pt-email"),
      plan: `PT · ${formData.get("pt-coach")}`,
      message: `Frequency: ${formData.get("pt-frequency")} | Goals: ${formData.get("pt-goals")}`,
      source: "trainer-request",
    };

    try {
      await submitLead("/leads/enquiry", payload);
      toast.success("PT booking request submitted. Coach will reach out.");
      e.currentTarget.reset();
    } catch (_error) {
      toast.error("Unable to submit your PT request right now.");
    }
  };

  return (
    <section id="pt" className="relative py-24 sm:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-2 lg:sticky lg:top-28">
          <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-3">Personal Training</div>
          <h2 className="font-heading text-white text-5xl sm:text-6xl leading-[0.9] uppercase">
            One-on-One<br/><span className="text-[#D90429]">Coaching.</span>
          </h2>
          <p className="mt-6 text-white/60">
            Structured programming, weekly check-ins, form correction and accountability
            — everything you need to skip the guesswork and just execute.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 bg-[#D90429]/10 text-[#D90429] flex items-center justify-center">
              <UserCog size={22} />
            </div>
            <div className="text-white/70 text-sm">Contact gym for PT session pricing.</div>
          </div>
        </div>

        <form onSubmit={onSubmit} data-testid="pt-form" className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#0a0a0a] border border-white/10 p-8">
          <input name="pt-name" required data-testid="pt-name" placeholder="Full Name" className="bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-3 text-sm rounded-none"/>
          <input name="pt-phone" required data-testid="pt-phone" placeholder="Phone" className="bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-3 text-sm rounded-none"/>
          <input name="pt-email" required type="email" data-testid="pt-email" placeholder="Email" className="sm:col-span-2 bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-3 text-sm rounded-none"/>
          <select name="pt-coach" data-testid="pt-coach" className="bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-3 text-sm rounded-none">
            <option>Any Coach</option>
            <option>Trainer 1</option>
            <option>Trainer 2</option>
            <option>Trainer 3</option>
          </select>
          <select name="pt-frequency" data-testid="pt-frequency" className="bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-3 text-sm rounded-none">
            <option>1 session / week</option>
            <option>2 sessions / week</option>
            <option>3 sessions / week</option>
          </select>
          <textarea name="pt-goals" data-testid="pt-goals" placeholder="Tell us your goals" rows={4} className="sm:col-span-2 bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-3 text-sm rounded-none resize-none"/>
          <button type="submit" data-testid="pt-submit" className="sm:col-span-2 bg-[#D90429] hover:bg-[#EF233C] text-white uppercase tracking-widest font-bold text-sm py-4 transition-all hover:-translate-y-0.5">
            Book PT Session
          </button>
        </form>
      </div>
    </section>
  );
}
