import { Link } from "react-router-dom";
import { BLOG } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  return (
    <section id="blog" className="relative py-24 sm:py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-3">Fitness Blog</div>
            <h2 className="font-heading text-white text-5xl sm:text-6xl leading-[0.9] uppercase">
              Words That <span className="text-[#D90429]">Lift.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-sm">Training tips, nutrition science and mindset — from our coaches to you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG.map((b, i) => (
            <Link
              key={b.slug}
              to={`/blog/${b.slug}`}
              data-testid={`blog-${i}`}
              className="group bg-[#0a0a0a] border border-white/10 hover:border-[#D90429] transition-all duration-500 block"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img src={b.img} alt={b.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"/>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"/>
                <div className="absolute top-4 left-4 bg-[#D90429] text-white text-[10px] tracking-[0.3em] uppercase font-bold px-2 py-1">{b.tag}</div>
              </div>
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-widest text-white/40">{b.date} · {b.readTime}</div>
                <div className="mt-2 font-heading text-white text-2xl uppercase leading-tight group-hover:text-[#D90429] transition-colors">{b.title}</div>
                <div className="text-white/60 text-sm mt-3 leading-relaxed">{b.excerpt}</div>
                <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-widest text-[#D90429] font-bold" data-testid={`blog-${i}-readmore`}>
                  Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
