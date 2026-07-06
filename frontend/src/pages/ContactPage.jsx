import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_WHATSAPP_DISPLAY,
  CONTACT_ADDRESS_LINES,
  PHONE_TEL,
  WHATSAPP_URL,
  MAPS_EMBED_URL,
  OPENING_HOURS,
} from "@/lib/data";

export default function ContactPage() {
  const onSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! Your inquiry has been received. We will contact you shortly.");
    e.target.reset();
  };

  return (
    <div data-testid="contact-page" className="pt-28 sm:pt-32 pb-0 bg-[#050505]">
      {/* Header */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/17211446/pexels-photo-17211446.jpeg?w=2000)",
            backgroundSize: "cover", backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"/>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-4">Contact</div>
          <h1 className="font-heading text-white text-6xl sm:text-8xl lg:text-9xl leading-[0.85] uppercase">
            Get In <span className="text-[#D90429]">Touch.</span>
          </h1>
          <p className="mt-6 max-w-xl text-white/70">
            Questions, tours, memberships or just curious? Drop a message or reach us
            directly through the channels below.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info cards */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href={PHONE_TEL}
              data-testid="contact-info-phone"
              className="flex items-start gap-4 p-6 bg-[#0a0a0a] border border-white/10 hover:border-[#D90429] transition-colors group"
            >
              <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-[#D90429]/10 text-[#D90429] group-hover:bg-[#D90429] group-hover:text-white transition-all">
                <Phone size={20}/>
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-widest text-white/50">Phone</div>
                <div className="text-white font-semibold mt-1">{CONTACT_PHONE_DISPLAY}</div>
                <div className="text-white/50 text-xs mt-1">Tap to call</div>
              </div>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              data-testid="contact-info-whatsapp"
              className="flex items-start gap-4 p-6 bg-[#0a0a0a] border border-white/10 hover:border-[#D90429] transition-colors group"
            >
              <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-[#D90429]/10 text-[#D90429] group-hover:bg-[#D90429] group-hover:text-white transition-all">
                <MessageCircle size={20}/>
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-widest text-white/50">WhatsApp</div>
                <div className="text-white font-semibold mt-1">{CONTACT_WHATSAPP_DISPLAY}</div>
                <div className="text-white/50 text-xs mt-1">Chat with us</div>
              </div>
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              data-testid="contact-info-email"
              className="flex items-start gap-4 p-6 bg-[#0a0a0a] border border-white/10 hover:border-[#D90429] transition-colors group"
            >
              <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-[#D90429]/10 text-[#D90429] group-hover:bg-[#D90429] group-hover:text-white transition-all">
                <Mail size={20}/>
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-widest text-white/50">Email</div>
                <div className="text-white font-semibold mt-1 break-all">{CONTACT_EMAIL}</div>
                <div className="text-white/50 text-xs mt-1">Send an email</div>
              </div>
            </a>

            <div
              data-testid="contact-info-address"
              className="flex items-start gap-4 p-6 bg-[#0a0a0a] border border-white/10 hover:border-[#D90429] transition-colors group"
            >
              <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-[#D90429]/10 text-[#D90429] group-hover:bg-[#D90429] group-hover:text-white transition-all">
                <MapPin size={20}/>
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-widest text-white/50">Address</div>
                <div className="text-white font-semibold mt-1 leading-relaxed">
                  {CONTACT_ADDRESS_LINES.map((l) => (<div key={l}>{l}</div>))}
                </div>
              </div>
            </div>

            <div
              data-testid="contact-info-hours"
              className="flex items-start gap-4 p-6 bg-[#0a0a0a] border border-white/10"
            >
              <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-[#D90429]/10 text-[#D90429]">
                <Clock size={20}/>
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-widest text-white/50 mb-2">Opening Hours</div>
                <div className="space-y-1 text-sm">
                  {OPENING_HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between text-white/80 gap-4">
                      <span>{h.day}</span>
                      <span className="text-white text-right">{h.h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} data-testid="contact-form" className="lg:col-span-3 glass border border-white/10 p-8 self-start">
            <div className="text-xs tracking-[0.3em] uppercase text-[#D90429] font-bold mb-6">Send a Message</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required data-testid="contact-name" placeholder="Full Name" className="bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-4 text-sm rounded-none"/>
              <input required data-testid="contact-phone" placeholder="Phone" className="bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-4 text-sm rounded-none"/>
              <input required type="email" data-testid="contact-email" placeholder="Email" className="sm:col-span-2 bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-4 text-sm rounded-none"/>
              <textarea required data-testid="contact-message" placeholder="Message" rows={6} className="sm:col-span-2 bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-4 text-sm rounded-none resize-none"/>
            </div>
            <button type="submit" data-testid="contact-submit" className="mt-6 w-full bg-[#D90429] hover:bg-[#EF233C] text-white uppercase tracking-widest font-bold text-sm py-4 transition-all hover:-translate-y-0.5 red-glow flex items-center justify-center gap-2">
              Send Message <Send size={16}/>
            </button>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-white/10">
        <div className="relative w-full aspect-[21/9] max-h-[520px]">
          <iframe
            title="The Muscle Cage Fitness — Goregaon East, Mumbai"
            data-testid="contact-map"
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
      </section>
    </div>
  );
}
