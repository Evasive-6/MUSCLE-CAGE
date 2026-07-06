import { GALLERY } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-3">Gallery</div>
          <h2 className="font-heading text-white text-5xl sm:text-6xl lg:text-7xl leading-[0.9] uppercase">
            Inside <span className="text-[#D90429]">The Cage.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-3">
          {GALLERY.map((g, i) => (
            <div
              key={i}
              data-testid={`gallery-item-${i}`}
              className={`group relative overflow-hidden ${g.h}`}
            >
              <img
                src={g.src}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/70">Muscle Cage</div>
                <div className="text-white text-sm font-bold uppercase">Photo 0{i + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
