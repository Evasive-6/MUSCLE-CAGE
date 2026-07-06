import { TRANSFORMATIONS } from "@/lib/data";

export default function Transformations() {
  return (
    <section id="transformations" className="relative py-24 sm:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-3">Transformations</div>
          <h2 className="font-heading text-white text-5xl sm:text-6xl lg:text-7xl leading-[0.9] uppercase">
            Real <span className="text-[#D90429]">Results.</span>
          </h2>
          <p className="mt-6 text-white/60">Demo before/after visuals — real member transformations available on request.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRANSFORMATIONS.map((t, i) => (
            <div key={i} data-testid={`transformation-${i}`} className="group bg-[#0a0a0a] border border-white/10 hover:border-[#D90429] transition-all duration-500">
              <div className="grid grid-cols-2 relative">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={t.before} alt="Before" loading="lazy" className="absolute inset-0 w-full h-full object-cover grayscale" />
                  <div className="absolute top-3 left-3 bg-black/70 border border-white/20 text-white text-[10px] tracking-[0.3em] uppercase px-2 py-1">Before</div>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={t.after} alt="After" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-[#D90429] text-white text-[10px] tracking-[0.3em] uppercase px-2 py-1">After</div>
                </div>
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-8 bg-[#D90429] text-white text-[10px] tracking-[0.3em] uppercase font-bold flex items-center justify-center pointer-events-none">
                  Demo Content
                </div>
              </div>
              <div className="p-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-heading text-white text-3xl leading-none">{t.weeks} Weeks</div>
                  <div className="text-white/60 text-xs uppercase tracking-widest mt-1">{t.desc}</div>
                </div>
                <div className="text-xs uppercase tracking-widest text-white/40">0{i + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
