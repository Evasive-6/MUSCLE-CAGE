import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, to) => {
    setOpen(false);
    if (to.startsWith("/#")) {
      e.preventDefault();
      const id = to.slice(2);
      if (location.pathname !== "/") {
        navigate(`/#${id}`);
      } else {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header
      data-testid="site-navbar"
      className={`relative z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        <Link
          to="/"
          data-testid="nav-logo"
          onClick={(e) => handleNav(e, "/#home")}
          className="font-heading text-white text-2xl sm:text-3xl tracking-widest hover:text-[#D90429] transition-colors"
        >
          MUSCLE <span className="text-[#D90429]">CAGE</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              onClick={(e) => handleNav(e, link.to)}
              className="text-xs tracking-[0.2em] uppercase text-white/80 hover:text-[#D90429] transition-colors font-semibold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to={isAuthenticated ? "/dashboard" : "/auth"}
            data-testid="nav-auth-link"
            className="hidden sm:inline-flex border border-white/10 hover:border-[#D90429] text-white uppercase tracking-widest font-bold text-xs px-5 py-3 transition-all duration-300 hover:-translate-y-0.5"
          >
            {isAuthenticated ? (user?.name || "Dashboard") : "Member Login"}
          </Link>
          <Link
            to="/#membership"
            onClick={(e) => handleNav(e, "/#membership")}
            data-testid="nav-cta-join"
            className="hidden sm:inline-flex bg-[#D90429] hover:bg-[#EF233C] text-white uppercase tracking-widest font-bold text-xs px-6 py-3 transition-all duration-300 hover:-translate-y-0.5 red-glow"
          >
            Join Now
          </Link>
          <button
            data-testid="nav-mobile-toggle"
            aria-label="Toggle menu"
            className="lg:hidden text-white p-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ease-out ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <nav className="glass border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          <Link
            to={isAuthenticated ? "/dashboard" : "/auth"}
            data-testid="nav-mobile-auth-link"
            className="text-white/80 hover:text-[#D90429] uppercase tracking-[0.2em] text-sm font-semibold py-2 border-b border-white/5"
          >
            {isAuthenticated ? "Dashboard" : "Member Login"}
          </Link>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              data-testid={`nav-mobile-link-${link.label.toLowerCase()}`}
              onClick={(e) => handleNav(e, link.to)}
              className="text-white/80 hover:text-[#D90429] uppercase tracking-[0.2em] text-sm font-semibold py-2 border-b border-white/5"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
