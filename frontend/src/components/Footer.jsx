import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_ADDRESS_LINES,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/data";

export default function Footer() {
  const onNewsletter = (e) => {
    e.preventDefault();
    const email = e.target.elements["footer-newsletter"].value;
    if (!email) return;
    toast.success("Subscribed. Watch your inbox for our next update.");
    e.target.reset();
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#080808] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="font-heading text-3xl tracking-widest text-white">
            THE <span className="text-[#D90429]">MUSCLE</span> CAGE
          </div>
          <p className="mt-4 text-white/60 max-w-md leading-relaxed">
            A premium fitness experience for the demo site. Build strength.
            Build confidence. Build the version of you the world hasn&apos;t met yet.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-white/70">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-[#D90429] mt-0.5"/>
              <div>
                {CONTACT_ADDRESS_LINES.map((l) => (<div key={l}>{l}</div>))}
              </div>
            </div>
            <a href={PHONE_TEL} className="flex items-center gap-3 hover:text-[#D90429] transition-colors">
              <Phone size={16} className="text-[#D90429]"/> {CONTACT_PHONE_DISPLAY}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 hover:text-[#D90429] transition-colors">
              <Mail size={16} className="text-[#D90429]"/> {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-[#D90429] font-bold mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link data-testid="footer-link-home" to="/" className="hover:text-[#D90429]">Home</Link></li>
            <li><Link data-testid="footer-link-about" to="/#about" className="hover:text-[#D90429]">About</Link></li>
            <li><Link data-testid="footer-link-facilities" to="/#facilities" className="hover:text-[#D90429]">Facilities</Link></li>
            <li><Link data-testid="footer-link-membership" to="/#membership" className="hover:text-[#D90429]">Membership</Link></li>
            <li><Link data-testid="footer-link-gallery" to="/#gallery" className="hover:text-[#D90429]">Gallery</Link></li>
            <li><Link data-testid="footer-link-blog" to="/#blog" className="hover:text-[#D90429]">Blog</Link></li>
            <li><Link data-testid="footer-link-contact" to="/contact" className="hover:text-[#D90429]">Contact</Link></li>
            <li><Link data-testid="footer-privacy" to="/privacy" className="hover:text-[#D90429]">Privacy Policy</Link></li>
            <li><Link data-testid="footer-terms" to="/terms" className="hover:text-[#D90429]">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-[#D90429] font-bold mb-4">Newsletter</div>
          <p className="text-sm text-white/60 mb-4">Get training tips and gym updates. No spam.</p>
          <form onSubmit={onNewsletter} className="flex flex-col gap-3">
            <input
              type="email"
              name="footer-newsletter"
              data-testid="footer-newsletter-input"
              required
              placeholder="Your email"
              className="bg-[#121212] border border-[#262626] focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-3 text-sm rounded-none"
            />
            <button
              type="submit"
              data-testid="footer-newsletter-submit"
              className="bg-[#D90429] hover:bg-[#EF233C] text-white uppercase tracking-widest font-bold text-xs py-3 transition-all hover:-translate-y-0.5"
            >
              Subscribe
            </button>
          </form>

          <div className="mt-6 flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" data-testid="footer-social-instagram" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#D90429] hover:text-[#D90429] text-white/70 transition-all"><Instagram size={16}/></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" data-testid="footer-social-facebook" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#D90429] hover:text-[#D90429] text-white/70 transition-all"><Facebook size={16}/></a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" data-testid="footer-social-whatsapp" aria-label="WhatsApp" className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#D90429] hover:text-[#D90429] text-white/70 transition-all"><MessageCircle size={16}/></a>
            <a href={PHONE_TEL} data-testid="footer-social-phone" aria-label="Phone" className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#D90429] hover:text-[#D90429] text-white/70 transition-all"><Phone size={16}/></a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <div data-testid="footer-copyright">© {new Date().getFullYear()} The Muscle Cage Fitness. All rights reserved.</div>
        <div className="tracking-[0.2em] uppercase">Demo Website Created by Prathamesh</div>
      </div>
    </footer>
  );
}
