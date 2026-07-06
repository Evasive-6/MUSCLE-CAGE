import { useState } from "react";
import { Calculator } from "lucide-react";

function computeBMI(h, w) {
  if (!h || !w) return null;
  const m = h / 100;
  return +(w / (m * m)).toFixed(1);
}

function category(bmi) {
  if (bmi === null) return null;
  if (bmi < 18.5) return { label: "Underweight", color: "#60A5FA" };
  if (bmi < 25) return { label: "Healthy", color: "#22C55E" };
  if (bmi < 30) return { label: "Overweight", color: "#F59E0B" };
  return { label: "Obese", color: "#D90429" };
}

export default function BMICalculator() {
  const [h, setH] = useState("");
  const [w, setW] = useState("");
  const bmi = computeBMI(+h, +w);
  const cat = category(bmi);

  return (
    <section id="bmi" className="relative py-24 sm:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-3">BMI Calculator</div>
          <h2 className="font-heading text-white text-5xl sm:text-6xl leading-[0.9] uppercase">
            Know Your <span className="text-[#D90429]">Number.</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-md">
            BMI is a rough indicator. Real progress comes from consistent training,
            nutrition, and coaching. Talk to our team to build your plan.
          </p>
        </div>

        <div className="glass p-8 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="text-[#D90429]" size={20} />
            <div className="text-xs tracking-[0.3em] uppercase font-bold text-white/80">Calculate</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs tracking-widest uppercase text-white/60">Height (cm)</label>
              <input
                type="number"
                value={h}
                onChange={(e) => setH(e.target.value)}
                data-testid="bmi-height"
                placeholder="175"
                className="mt-2 w-full bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-3 rounded-none"
              />
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase text-white/60">Weight (kg)</label>
              <input
                type="number"
                value={w}
                onChange={(e) => setW(e.target.value)}
                data-testid="bmi-weight"
                placeholder="70"
                className="mt-2 w-full bg-black/40 border border-white/10 focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] outline-none text-white p-3 rounded-none"
              />
            </div>
          </div>

          <div className="mt-8 flex items-end justify-between border-t border-white/10 pt-6">
            <div>
              <div className="text-xs tracking-widest uppercase text-white/50">Your BMI</div>
              <div data-testid="bmi-result" className="font-heading text-white text-6xl leading-none mt-2">
                {bmi ?? "--"}
              </div>
            </div>
            {cat && (
              <div className="text-right">
                <div className="text-xs tracking-widest uppercase text-white/50">Category</div>
                <div className="font-heading text-3xl mt-2" style={{ color: cat.color }}>
                  {cat.label}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
