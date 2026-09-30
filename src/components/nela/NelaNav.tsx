import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import NelaWordmark from "./NelaWordmark";
import { nela, NELA_APP_STORE_URL } from "./theme";

const links = [
  { label: "Features", id: "features" },
  { label: "Your cycle", id: "phases" },
  { label: "Screens", id: "screens" },
  { label: "Insights", id: "insights" },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 76,
    behavior: "smooth",
  });
};

export default function NelaNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollTo(id);
  };

  const cta = NELA_APP_STORE_URL ? (
    <a
      href={NELA_APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="font-body text-sm font-semibold px-5 py-2.5 rounded-full transition-transform duration-200 hover:scale-105"
      style={{
        background: nela.gradient,
        color: "#fff",
        boxShadow: `0 6px 18px ${nela.accent}3D`,
      }}
    >
      Get Nela
    </a>
  ) : (
    <span
      className="font-body text-sm font-semibold px-5 py-2.5 rounded-full"
      style={{
        background: nela.cardTint,
        color: nela.muted,
        border: `1px solid ${nela.accent}33`,
      }}
    >
      Coming soon
    </span>
  );

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(249,177,144,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? `1px solid ${nela.ink}12`
          : "1px solid transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link to="/nela" aria-label="Nela — back to top">
          <NelaWordmark size={38} />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="font-body text-sm font-medium transition-colors duration-200"
              style={{ color: nela.muted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = nela.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = nela.muted)}
            >
              {link.label}
            </button>
          ))}
          {cta}
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          style={{ color: nela.ink }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{
            background: "rgba(249,177,144,0.97)",
            backdropFilter: "blur(16px)",
            borderBottom: `1px solid ${nela.ink}12`,
          }}
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="font-body text-base font-medium text-left"
              style={{ color: nela.muted }}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-1">{cta}</div>
        </div>
      )}
    </header>
  );
}
