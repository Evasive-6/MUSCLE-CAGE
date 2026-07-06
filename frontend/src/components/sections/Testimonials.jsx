import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % total), 5500);
    return () => clearInterval(t);
  }, [total]);

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-[#080808] overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1800&q=80)",
        backgroundSize: "cover", backgroundPosition: "center",
      }}/>
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#080808]/90 to-[#080808]"/>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-3">Member Stories</div>
        <h2 className="font-heading text-white text-5xl sm:text-6xl leading-[0.9] uppercase">
          What Members <span className="text-[#D90429]">Say.</span>
        </h2>

        <div className="mt-12 relative min-h-[280px]">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              data-testid={`testimonial-${idx}`}
              className={`absolute inset-0 transition-all duration-700 ${
                i === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <Quote size={40} className="mx-auto text-[#D90429] mb-6"/>
              <div className="flex items-center justify-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => (
                  <Star key={s} size={16} className="text-[#D90429] fill-[#D90429]"/>
                ))}
              </div>
              <p className="text-white/90 text-xl sm:text-2xl leading-relaxed font-light italic max-w-3xl mx-auto">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-8">
                <div className="font-heading text-white text-2xl uppercase">{t.name}</div>
                <div className="text-[#D90429] text-xs tracking-[0.3em] uppercase mt-1">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button data-testid="testimonial-prev" aria-label="Previous" onClick={() => setI((v) => (v - 1 + total) % total)} className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-[#D90429] hover:text-[#D90429] text-white">
            <ChevronLeft size={16}/>
          </button>
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                data-testid={`testimonial-dot-${idx}`}
                aria-label={`Testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1 transition-all ${i === idx ? "w-8 bg-[#D90429]" : "w-4 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>
          <button data-testid="testimonial-next" aria-label="Next" onClick={() => setI((v) => (v + 1) % total)} className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-[#D90429] hover:text-[#D90429] text-white">
            <ChevronRight size={16}/>
          </button>
        </div>
      </div>
    </section>
  );
}
