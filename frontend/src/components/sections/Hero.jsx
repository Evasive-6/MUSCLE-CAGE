import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden grain">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=2400&q=85"
        alt="Muscle Cage Gym hero"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

      {/* Vertical side bar */}
      <div className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-10">
        <div className="w-[1px] h-24 bg-white/20" />
        <div className="text-xs tracking-[0.4em] uppercase text-white/50 rotate-180 [writing-mode:vertical-rl]">
          Est · Goregaon East · Mumbai
        </div>
        <div className="w-[1px] h-24 bg-white/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 pb-24 sm:pb-32 pt-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-6">
            <span className="w-8 h-[1px] bg-[#D90429]" /> Premium Fitness · Mumbai
          </div>
          <h1 className="font-heading text-white text-6xl sm:text-8xl lg:text-[9rem] leading-[0.85] tracking-tight uppercase">
            Build <span className="text-[#D90429]">Strength.</span>
            <br />
            Build Confidence.
          </h1>
          <p className="mt-8 max-w-xl text-white/70 text-base sm:text-lg leading-relaxed">
            Step into Goregaon East&apos;s most disciplined training ground. Iron. Sweat.
            Community. Everything you need to forge the strongest version of yourself.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/#membership"
              data-testid="hero-join-now"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("membership")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-3 bg-[#D90429] hover:bg-[#EF233C] text-white uppercase tracking-widest font-bold text-sm px-8 py-4 transition-all duration-300 hover:-translate-y-1 red-glow"
            >
              Join Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              data-testid="hero-contact-gym"
              className="inline-flex items-center gap-3 border border-white/30 hover:border-[#D90429] hover:text-[#D90429] text-white uppercase tracking-widest font-bold text-sm px-8 py-4 transition-all duration-300"
            >
              Contact Gym
            </Link>

            <a
              href="#gym-tour"
              data-testid="hero-watch-tour"
              onClick={(e) => {
                e.preventDefault();
                const tour = document.getElementById("gym-tour") || document.getElementById("about");
                tour?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hidden sm:inline-flex items-center gap-3 text-white/70 hover:text-white text-sm uppercase tracking-widest ml-2 group"
            >
              <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#D90429] group-hover:text-[#D90429] transition-colors">
                <Play size={14} className="ml-0.5" fill="currentColor" />
              </span>
              Gym Tour
            </a>
          </div>
        </div>
      </div>

      {/* Ticker at bottom */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/40 backdrop-blur-md py-4 overflow-hidden z-10">
        <div className="flex whitespace-nowrap ticker">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12 shrink-0">
              {["STRENGTH", "DISCIPLINE", "COMMUNITY", "TRANSFORMATION", "IRON", "SWEAT", "GRIT"].map((w) => (
                <span key={w} className="font-heading text-2xl sm:text-4xl tracking-widest text-white/80">
                  {w} <span className="text-[#D90429] mx-6">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
