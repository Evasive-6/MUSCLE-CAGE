import { toast } from "sonner";
import { Send } from "lucide-react";
import { submitLead } from "@/services/leads";

export default function Enquiry() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("enquiry-name"),
      phone: formData.get("enquiry-phone"),
      email: formData.get("enquiry-email"),
      plan: formData.get("enquiry-plan"),
      message: formData.get("enquiry-message"),
      source: "enquiry",
    };

    try {
      await submitLead("/leads/enquiry", payload);
      toast.success("Enquiry sent. We'll respond within 24 hours.");
      e.currentTarget.reset();
    } catch (_error) {
      toast.error("Unable to submit your enquiry right now.");
    }
  };

  return (
    <section id="enquiry" className="relative py-24 sm:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-3">Membership Enquiry</div>
            <h2 className="font-heading text-white text-5xl sm:text-6xl leading-[0.9] uppercase">
              Ready To <span className="text-[#D90429]">Commit?</span>
            </h2>
            <p className="mt-6 text-white/60 max-w-md">
              Drop a quick enquiry and our membership team will get in touch with the
              latest plans, offers and a tour of the facility.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-[#D90429]"/>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/50">Fast Response</div>
                  <div className="text-white font-bold">Under 24 hours</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-[#D90429]"/>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/50">Zero Obligation</div>
                  <div className="text-white font-bold">Chat first, decide later</div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} data-testid="enquiry-form" className="glass border border-white/10 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="enquiry-name" required data-testid="enquiry-name" placeholder="Full Name" className="bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-3 text-sm rounded-none"/>
              <input name="enquiry-phone" required data-testid="enquiry-phone" placeholder="Phone" className="bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-3 text-sm rounded-none"/>
              <input name="enquiry-email" required type="email" data-testid="enquiry-email" placeholder="Email" className="sm:col-span-2 bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-3 text-sm rounded-none"/>
              <select name="enquiry-plan" data-testid="enquiry-plan" className="sm:col-span-2 bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-3 text-sm rounded-none">
                <option>Interested in — Monthly</option>
                <option>Interested in — Quarterly</option>
                <option>Interested in — Half-Yearly</option>
                <option>Interested in — Annual</option>
              </select>
              <textarea name="enquiry-message" data-testid="enquiry-message" placeholder="Anything specific?" rows={4} className="sm:col-span-2 bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-3 text-sm rounded-none resize-none"/>
            </div>
            <button type="submit" data-testid="enquiry-submit" className="mt-6 w-full bg-[#D90429] hover:bg-[#EF233C] text-white uppercase tracking-widest font-bold text-sm py-4 transition-all hover:-translate-y-0.5 red-glow flex items-center justify-center gap-2">
              Send Enquiry <Send size={16}/>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
