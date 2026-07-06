import { Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GALLERY } from "@/lib/data";

export default function GymTour() {
  const tiles = GALLERY.slice(0, 6);
  return (
    <section id="gym-tour" className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-3">Gym Tour</div>
            <h2 className="font-heading text-white text-5xl sm:text-6xl lg:text-7xl leading-[0.9] uppercase">
              Step Inside<br/>
              <span className="text-[#D90429]">The Cage.</span>
            </h2>
            <p className="mt-6 text-white/70 max-w-md leading-relaxed">
              Cinematic lighting, premium equipment, spotless floors — a training
              environment engineered for progress. Take a walk through the space
              before you arrive.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#gallery"
                data-testid="gymtour-view-gallery"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-3 bg-[#D90429] hover:bg-[#EF233C] text-white uppercase tracking-widest font-bold text-sm px-6 py-3 transition-all hover:-translate-y-0.5"
              >
                View Full Gallery
                <ArrowRight size={16}/>
              </a>
              <Link
                to="/contact"
                data-testid="gymtour-book-visit"
                className="inline-flex items-center gap-3 border border-white/20 hover:border-[#D90429] hover:text-[#D90429] text-white uppercase tracking-widest font-bold text-sm px-6 py-3 transition-all"
              >
                Book a Visit
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-6">
              <div>
                <div className="font-heading text-white text-4xl">8,000</div>
                <div className="text-xs uppercase tracking-widest text-white/50 mt-1">sq ft floor</div>
              </div>
              <div>
                <div className="font-heading text-white text-4xl">120+</div>
                <div className="text-xs uppercase tracking-widest text-white/50 mt-1">machines</div>
              </div>
              <div>
                <div className="font-heading text-white text-4xl">24/6</div>
                <div className="text-xs uppercase tracking-widest text-white/50 mt-1">access</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {tiles.map((t, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
                >
                  <img
                    src={t.src}
                    alt={`Gym tour ${i + 1}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors"/>
                </div>
              ))}
            </div>
            <a
              href="#gallery"
              data-testid="gymtour-play-button"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-[#D90429] text-white px-5 py-4 uppercase tracking-widest font-bold text-xs red-glow hover:bg-[#EF233C] transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-white text-[#D90429] flex items-center justify-center">
                <Play size={12} fill="currentColor"/>
              </span>
              Explore Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
