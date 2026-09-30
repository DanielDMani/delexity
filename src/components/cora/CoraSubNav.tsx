import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Wordmark from "./Wordmark";
import { cora, APP_STORE_URL } from "./theme";

/** Slim header for Cora sub-pages (support, privacy, etc). */
export default function CoraSubNav() {
  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "rgba(255,241,233,0.88)",
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${cora.ink}12`,
      }}
    >
      <nav className="max-w-5xl mx-auto px-6 h-[72px] flex items-center justify-between gap-4">
        <Link to="/cora" aria-label="Cora — back to the Cora site">
          <Wordmark size={36} />
        </Link>

        <div className="flex items-center gap-5">
          <Link
            to="/cora"
            className="hidden sm:inline-flex items-center gap-1.5 font-body text-sm font-medium transition-colors duration-200"
            style={{ color: cora.muted }}
            onMouseEnter={(e) => (e.currentTarget.style.color = cora.pink)}
            onMouseLeave={(e) => (e.currentTarget.style.color = cora.muted)}
          >
            <ArrowLeft size={15} />
            Back to Cora
          </Link>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-semibold px-5 py-2.5 rounded-full transition-transform duration-200 hover:scale-105"
            style={{
              background: cora.gradient,
              color: "#fff",
              boxShadow: `0 6px 18px ${cora.pink}3D`,
            }}
          >
            Get Cora Free
          </a>
        </div>
      </nav>
    </header>
  );
}
