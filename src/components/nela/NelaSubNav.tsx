import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import NelaWordmark from "./NelaWordmark";
import { nela, NELA_APP_STORE_URL } from "./theme";

/** Slim header for Nela sub-pages. */
export default function NelaSubNav() {
  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "rgba(249,177,144,0.9)",
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${nela.ink}12`,
      }}
    >
      <nav className="max-w-5xl mx-auto px-6 h-[72px] flex items-center justify-between gap-4">
        <Link to="/nela" aria-label="Nela — back to the Nela site">
          <NelaWordmark size={36} />
        </Link>

        <div className="flex items-center gap-5">
          <Link
            to="/nela"
            className="hidden sm:inline-flex items-center gap-1.5 font-body text-sm font-medium transition-colors duration-200"
            style={{ color: nela.muted }}
            onMouseEnter={(e) => (e.currentTarget.style.color = nela.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = nela.muted)}
          >
            <ArrowLeft size={15} />
            Back to Nela
          </Link>
          {NELA_APP_STORE_URL ? (
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
          )}
        </div>
      </nav>
    </header>
  );
}
