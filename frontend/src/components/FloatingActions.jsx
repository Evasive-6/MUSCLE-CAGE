import { useEffect, useState } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { PLACEHOLDER_TEL, PLACEHOLDER_WHATSAPP } from "@/lib/data";

export default function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-40 flex flex-col gap-3 items-end">
      <a
        href={PLACEHOLDER_WHATSAPP}
        target="_blank"
        rel="noreferrer"
        data-testid="float-whatsapp"
        aria-label="WhatsApp"
        className="pulse-red w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#25D366] hover:bg-[#1ea952] text-white shadow-lg transition-all hover:scale-110"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href={PLACEHOLDER_TEL}
        data-testid="float-call"
        aria-label="Call"
        className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#D90429] hover:bg-[#EF233C] text-white shadow-lg transition-all hover:scale-110"
      >
        <Phone size={22} />
      </a>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        data-testid="float-backtotop"
        aria-label="Back to top"
        className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white text-black shadow-lg transition-all hover:scale-110 ${
          show ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp size={22} />
      </button>
    </div>
  );
}
