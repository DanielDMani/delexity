import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { site } from "./theme";

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(250,246,242,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `1px solid ${site.line}` : "1px solid transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-xl"
          style={{ color: site.ink, fontWeight: 600, letterSpacing: "-0.01em" }}
        >
          Delexity
        </button>

        <div className="flex items-center gap-6 sm:gap-8">
          <Link
            to="/cora"
            className="font-body text-sm font-medium transition-colors duration-200"
            style={{ color: site.muted }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#CB6182")}
            onMouseLeave={(e) => (e.currentTarget.style.color = site.muted)}
          >
            Cora
          </Link>
          <Link
            to="/nela"
            className="font-body text-sm font-medium transition-colors duration-200"
            style={{ color: site.muted }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#8A2D0E")}
            onMouseLeave={(e) => (e.currentTarget.style.color = site.muted)}
          >
            Nela
          </Link>
          <a
            href="#contact"
            className="hidden sm:inline font-body text-sm font-medium transition-colors duration-200"
            style={{ color: site.muted }}
            onMouseEnter={(e) => (e.currentTarget.style.color = site.ink)}
            onMouseLeave={(e) => (e.currentTarget.style.color = site.muted)}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
