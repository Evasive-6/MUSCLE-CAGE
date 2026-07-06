import { useEffect, useState } from "react";

export default function Loader() {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHide(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      data-testid="page-loader"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-500 ${hide ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="font-heading text-white text-5xl sm:text-7xl tracking-widest">
        THE <span className="text-[#D90429]">MUSCLE</span> CAGE
      </div>
      <div className="mt-8 w-56 h-[2px] bg-white/10 overflow-hidden">
        <div className="h-full bg-[#D90429] bar-load" />
      </div>
      <div className="mt-4 text-xs tracking-[0.4em] text-white/50 uppercase">Loading Experience</div>
    </div>
  );
}
