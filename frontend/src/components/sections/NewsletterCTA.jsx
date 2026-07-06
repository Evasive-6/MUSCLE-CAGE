import { toast } from "sonner";

export default function NewsletterCTA() {
  const onSubmit = (e) => {
    e.preventDefault();
    toast.success("You're in. Watch for demo drops.");
    e.target.reset();
  };

  return (
    <section id="newsletter" className="relative py-20 bg-[#D90429] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1583500178690-f7fd39c69b1c?w=1800&q=80)",
        backgroundSize: "cover", backgroundPosition: "center",
      }}/>
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="text-xs tracking-[0.4em] uppercase font-bold text-white/80 mb-2">Newsletter</div>
          <h3 className="font-heading text-4xl sm:text-5xl leading-none uppercase">Train Smarter. Weekly.</h3>
          <p className="text-white/80 mt-2 max-w-md text-sm">Workout templates, nutrition briefs, member wins — every Sunday.</p>
        </div>
        <form onSubmit={onSubmit} className="flex w-full md:w-auto max-w-md gap-0">
          <input
            required
            type="email"
            data-testid="cta-newsletter-input"
            placeholder="you@example.com"
            className="flex-1 min-w-0 md:w-80 bg-black text-white placeholder:text-white/40 border border-black p-4 text-sm outline-none rounded-none focus:border-black"
          />
          <button
            type="submit"
            data-testid="cta-newsletter-submit"
            className="bg-black hover:bg-[#111] text-white border border-black uppercase tracking-widest font-bold text-xs px-6 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
