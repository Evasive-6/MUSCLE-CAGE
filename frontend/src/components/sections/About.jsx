import { Check } from "lucide-react";

const PILLARS = [
  { title: "Modern Equipment", desc: "Latest strength, cardio, and functional gear — engineered for progress." },
  { title: "Community Driven", desc: "Train alongside real people chasing real goals. No egos. Only wins." },
  { title: "Premium Environment", desc: "Cinematic lighting, spotless floors, hygienic amenities. Feel elite." },
  { title: "Expert Coaching", desc: "Certified trainers who know your name, your goals, and your numbers." },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 lg:py-40 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/37352354/pexels-photo-37352354.jpeg?w=1200"
            alt="Interior of The Muscle Cage"
            className="w-full h-[520px] object-cover"
            loading="lazy"
          />
          <div className="absolute -bottom-8 -right-8 hidden md:block bg-[#D90429] p-8 max-w-xs">
            <div className="font-heading text-white text-6xl leading-none">12+</div>
            <div className="text-xs tracking-[0.3em] uppercase text-white mt-2">Years Forging Champions</div>
          </div>
        </div>

        <div>
          <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-4">About The Cage</div>
          <h2 className="font-heading text-white text-5xl sm:text-6xl lg:text-7xl leading-[0.9] uppercase">
            Where <span className="text-[#D90429]">Weakness</span><br/>
            Comes to Die.
          </h2>
          <p className="mt-6 text-white/70 text-base sm:text-lg leading-relaxed">
            The Muscle Cage Fitness isn&apos;t just a gym — it&apos;s a training ground built
            for people who refuse to stay average. From first-time lifters to seasoned
            athletes, we architect environments where discipline compounds and results
            are inevitable.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border-l-2 border-[#D90429] pl-4">
              <div className="text-xs tracking-[0.3em] uppercase text-[#D90429] font-bold mb-1">Mission</div>
              <p className="text-white/70 text-sm leading-relaxed">Empower every member to transform physique and mindset through disciplined training.</p>
            </div>
            <div className="border-l-2 border-[#D90429] pl-4">
              <div className="text-xs tracking-[0.3em] uppercase text-[#D90429] font-bold mb-1">Vision</div>
              <p className="text-white/70 text-sm leading-relaxed">To become the most respected performance & lifestyle fitness destination in the demo experience.</p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PILLARS.map((p) => (
              <div key={p.title} className="flex gap-3">
                <div className="w-6 h-6 shrink-0 bg-[#D90429] text-white flex items-center justify-center mt-0.5">
                  <Check size={14} />
                </div>
                <div>
                  <div className="text-white font-bold text-sm uppercase tracking-wider">{p.title}</div>
                  <div className="text-white/60 text-sm mt-1">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
