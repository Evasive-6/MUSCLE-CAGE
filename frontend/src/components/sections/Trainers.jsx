import { Instagram, Award } from "lucide-react";
import { TRAINERS } from "@/lib/data";

export default function Trainers() {
  return (
    <section id="trainers" className="relative py-24 sm:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-3">Coaching Team</div>
            <h2 className="font-heading text-white text-5xl sm:text-6xl lg:text-7xl leading-[0.9] uppercase">
              Meet Your <span className="text-[#D90429]">Coaches.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-sm sm:text-base">
            Certified professionals who program, coach and hold you accountable —
            from your very first session to your strongest lift.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRAINERS.map((t, i) => (
            <div
              key={i}
              data-testid={`trainer-${i}`}
              className="group relative overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-[#D90429] transition-all duration-500"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute top-4 right-4 text-[10px] tracking-[0.3em] uppercase bg-[#D90429] text-white px-3 py-1 font-bold">
                  {t.specialty}
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs tracking-[0.3em] uppercase text-[#D90429] font-bold">0{i + 1}</div>
                  <div className="font-heading text-white text-4xl uppercase mt-1">{t.name}</div>
                  <div className="text-white/70 text-sm mt-1">{t.role}</div>
                </div>
              </div>
              <div className="p-6 flex items-center justify-between border-t border-white/10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/60">
                  <Award size={14} className="text-[#D90429]" /> Certified
                </div>
                <a
                  href="#"
                  aria-label="Instagram"
                  data-testid={`trainer-${i}-instagram`}
                  className="w-9 h-9 flex items-center justify-center border border-white/10 hover:border-[#D90429] hover:text-[#D90429] text-white/70 transition-all"
                >
                  <Instagram size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
