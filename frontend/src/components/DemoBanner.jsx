import { useState } from "react";
import { X, Info } from "lucide-react";

export default function DemoBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div
      data-testid="demo-banner"
      className="relative bg-[#D90429] text-white text-xs sm:text-sm"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-2.5 flex items-center justify-center gap-3">
        <Info size={14} className="shrink-0 hidden sm:block" />
        <div className="tracking-wide text-center font-medium">
          <span className="uppercase font-bold tracking-[0.2em] mr-2">Demo</span>
          This is a demo website — not the original site of The Muscle Cage Fitness.
        </div>
        <button
          data-testid="demo-banner-close"
          aria-label="Dismiss demo notice"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
