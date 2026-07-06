import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { BLOG } from "@/lib/data";

export default function BlogArticlePage() {
  const { slug } = useParams();
  const post = BLOG.find((b) => b.slug === slug);
  if (!post) return <Navigate to="/#blog" replace />;

  const others = BLOG.filter((b) => b.slug !== slug).slice(0, 2);

  return (
    <div data-testid="blog-article-page" className="pt-28 sm:pt-32 pb-0 bg-[#050505]">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-white/10">
        <img
          src={post.img}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/85 to-black"/>
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <Link to="/#blog" data-testid="article-back" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 hover:text-[#D90429] transition-colors mb-6">
            <ArrowLeft size={14}/> Back to Blog
          </Link>
          <div className="inline-block bg-[#D90429] text-white text-[10px] tracking-[0.3em] uppercase font-bold px-3 py-1 mb-4">
            {post.tag}
          </div>
          <h1 className="font-heading text-white text-4xl sm:text-6xl lg:text-7xl leading-[0.9] uppercase">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs uppercase tracking-widest text-white/60">
            <div className="flex items-center gap-2"><Calendar size={14} className="text-[#D90429]"/> {post.date}</div>
            <div className="flex items-center gap-2"><Clock size={14} className="text-[#D90429]"/> {post.readTime}</div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 sm:py-24">
        <article className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-white/80 text-lg leading-relaxed italic mb-8 border-l-2 border-[#D90429] pl-4">
            {post.excerpt}
          </p>
          <div className="space-y-6">
            {post.content.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2 key={i} className="font-heading text-white text-3xl sm:text-4xl uppercase mt-10 tracking-wide">
                    {block.text}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-white/80 text-base sm:text-lg leading-relaxed">
                  {block.text}
                </p>
              );
            })}
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs uppercase tracking-widest text-white/50">
              Published · The Muscle Cage Fitness
            </div>
            <Link
              to="/contact"
              data-testid="article-cta-contact"
              className="inline-flex items-center gap-2 bg-[#D90429] hover:bg-[#EF233C] text-white uppercase tracking-widest font-bold text-xs px-6 py-3 transition-all hover:-translate-y-0.5"
            >
              Talk to a Coach <ArrowRight size={14}/>
            </Link>
          </div>
        </article>
      </section>

      {/* Related */}
      {others.length > 0 && (
        <section className="py-16 border-t border-white/10 bg-[#080808]">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-xs tracking-[0.4em] uppercase text-[#D90429] font-bold mb-4">Read Next</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {others.map((o) => (
                <Link key={o.slug} to={`/blog/${o.slug}`} data-testid={`related-${o.slug}`} className="group bg-[#0a0a0a] border border-white/10 hover:border-[#D90429] transition-all block">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={o.img} alt={o.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"/>
                    <div className="absolute inset-0 bg-black/40"/>
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] uppercase tracking-widest text-[#D90429]">{o.tag}</div>
                    <div className="font-heading text-white text-2xl uppercase mt-2 group-hover:text-[#D90429] transition-colors">{o.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
