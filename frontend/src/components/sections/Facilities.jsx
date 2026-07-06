import { FACILITIES } from "@/lib/data";

export default function Facilities() {
  return (
    <section id="facilities" className="relative py-24 sm:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-3">Facilities</div>
            <h2 className="font-heading text-white text-5xl sm:text-6xl lg:text-7xl leading-[0.9] uppercase">
              Everything You <span className="text-[#D90429]">Need.</span>
              <br />Nothing You Don&apos;t.
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-sm sm:text-base leading-relaxed">
            From heavy iron to functional turf, cardio row to steam recovery — every
            square foot of The Cage is engineered for one purpose. Your progress.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/5">
          {FACILITIES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                data-testid={`facility-${i}`}
                className="group bg-[#0a0a0a] hover:bg-[#111] p-8 transition-all duration-500 cursor-pointer border-b-2 border-transparent hover:border-[#D90429]"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-[#D90429]/10 text-[#D90429] group-hover:bg-[#D90429] group-hover:text-white transition-all duration-300">
                  <Icon size={26} />
                </div>
                <div className="mt-6 font-heading text-white text-2xl uppercase tracking-wide">
                  {f.title}
                </div>
                <div className="mt-2 text-sm text-white/60">{f.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
