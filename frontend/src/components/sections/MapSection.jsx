import { MapPin, Clock, Phone, Mail } from "lucide-react";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_EMAIL,
  CONTACT_ADDRESS_LINES,
  OPENING_HOURS,
  MAPS_EMBED_URL,
  PHONE_TEL,
} from "@/lib/data";

export default function MapSection() {
  return (
    <section id="visit" className="relative py-24 sm:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 relative border border-white/10 overflow-hidden aspect-[16/10] lg:aspect-auto">
          <iframe
            title="The Muscle Cage Fitness — Goregaon East, Mumbai"
            data-testid="map-embed"
            src={MAPS_EMBED_URL}
            className="absolute inset-0 w-full h-full"
            style={{ filter: "grayscale(1) invert(0.85) contrast(0.9)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="absolute top-4 left-4 bg-black/70 border border-white/20 px-3 py-1 text-[10px] tracking-[0.3em] uppercase text-white/80">
            Goregaon East · Mumbai
          </div>
        </div>

        <div className="bg-[#0a0a0a] border border-white/10 p-8 flex flex-col justify-between">
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-3">Visit The Cage</div>
            <h3 className="font-heading text-white text-4xl uppercase leading-none">Goregaon East<br/>Mumbai</h3>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#D90429] mt-0.5" size={18}/>
                <div className="text-white text-sm leading-relaxed">
                  {CONTACT_ADDRESS_LINES.map((l) => (<div key={l}>{l}</div>))}
                </div>
              </div>
              <a href={PHONE_TEL} className="flex items-start gap-3 group">
                <Phone className="text-[#D90429] mt-0.5" size={18}/>
                <div className="text-white text-sm group-hover:text-[#D90429] transition-colors">{CONTACT_PHONE_DISPLAY}</div>
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-start gap-3 group">
                <Mail className="text-[#D90429] mt-0.5" size={18}/>
                <div className="text-white text-sm group-hover:text-[#D90429] transition-colors break-all">{CONTACT_EMAIL}</div>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="text-[#D90429]" size={16}/>
              <div className="text-xs tracking-[0.3em] uppercase text-white/70 font-bold">Opening Hours</div>
            </div>
            <div className="space-y-2 text-sm">
              {OPENING_HOURS.map((h) => (
                <div key={h.day} className="flex justify-between text-white/80">
                  <span>{h.day}</span>
                  <span className="text-white">{h.h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
