import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-3">Frequently Asked</div>
          <h2 className="font-heading text-white text-5xl sm:text-6xl leading-[0.9] uppercase">
            Questions <span className="text-[#D90429]">Answered.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} data-testid={`faq-${i}`} className={`border transition-all duration-300 ${isOpen ? "border-[#D90429] bg-[#0a0a0a]" : "border-white/10 bg-[#080808]"}`}>
                <button
                  data-testid={`faq-toggle-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between text-left p-5 sm:p-6 group"
                >
                  <span className="font-heading text-white text-xl sm:text-2xl uppercase group-hover:text-[#D90429] transition-colors pr-6">
                    {f.q}
                  </span>
                  <span className={`w-8 h-8 shrink-0 flex items-center justify-center border ${isOpen ? "border-[#D90429] bg-[#D90429] text-white" : "border-white/20 text-white"}`}>
                    {isOpen ? <Minus size={14}/> : <Plus size={14}/>}
                  </span>
                </button>
                <div className={`overflow-hidden transition-[max-height] duration-500 ${isOpen ? "max-h-40" : "max-h-0"}`}>
                  <div className="px-5 sm:px-6 pb-6 text-white/70 leading-relaxed border-t border-white/10 pt-4">
                    {f.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
