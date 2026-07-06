import { useEffect, useRef, useState } from "react";
import { COUNTERS } from "@/lib/data";

function useCountUp(target, duration = 1800) {
  const [n, setN] = useState(0);
  const started = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (t) => {
            const p = Math.min((t - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return [ref, n];
}

function StatCard({ label, value, suffix, index }) {
  const [ref, n] = useCountUp(value);
  return (
    <div
      ref={ref}
      data-testid={`counter-${label.toLowerCase().replace(/\s+/g, "-")}`}
      className="relative group p-8 lg:p-10 border-l border-white/10 first:border-l-0"
    >
      <div className="text-xs tracking-[0.3em] uppercase text-[#D90429] font-bold mb-3">
        0{index + 1}
      </div>
      <div className="font-heading text-white text-6xl sm:text-7xl lg:text-8xl leading-none">
        {n.toLocaleString()}
        <span className="text-[#D90429]">{suffix}</span>
      </div>
      <div className="mt-4 text-sm tracking-[0.2em] uppercase text-white/60">
        {label}
      </div>
    </div>
  );
}

export default function Counters() {
  return (
    <section className="relative bg-[#080808] border-y border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
        {COUNTERS.map((c, i) => (
          <StatCard key={c.label} {...c} index={i} />
        ))}
      </div>
    </section>
  );
}
