import { Salad, Apple, Beef, Wheat } from "lucide-react";

const PROGRAMS = [
  { icon: Beef, title: "Muscle Gain Diet", desc: "High-protein macro plans engineered for hypertrophy." },
  { icon: Apple, title: "Fat Loss Diet", desc: "Calorie-controlled, satisfying, sustainable." },
  { icon: Wheat, title: "Balanced Lifestyle", desc: "For members who want energy, health, longevity." },
  { icon: Salad, title: "Vegetarian / Vegan", desc: "Plant-forward plans that still hit your macros." },
];

export default function Nutrition() {
  return (
    <section id="nutrition" className="relative py-24 sm:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-3">Nutrition Program</div>
            <h2 className="font-heading text-white text-5xl sm:text-6xl leading-[0.9] uppercase">
              Fuel The <span className="text-[#D90429]">Machine.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-sm">
            Training breaks you down. Nutrition builds you back. Custom plans tailored to your goals, preferences and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROGRAMS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={p.title} data-testid={`nutrition-${i}`} className="group bg-[#0a0a0a] border border-white/10 hover:border-[#D90429] p-8 transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 flex items-center justify-center bg-[#D90429] text-white">
                  <Icon size={22} />
                </div>
                <div className="font-heading text-white text-3xl mt-6 uppercase">{p.title}</div>
                <div className="text-white/60 text-sm mt-2">{p.desc}</div>
                <div className="mt-6 text-xs uppercase tracking-widest text-[#D90429]">Contact Gym →</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
