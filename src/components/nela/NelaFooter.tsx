import { Link } from "react-router-dom";
import NelaWordmark from "./NelaWordmark";
import { nela, CONTACT_EMAIL, NELA_APP_STORE_URL } from "./theme";

export default function NelaFooter() {
  return (
    <footer
      className="relative py-14 px-6"
      style={{
        background: nela.bgDeep,
        borderTop: `1px solid ${nela.ink}12`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          <div className="max-w-xs">
            <div className="mb-4">
              <NelaWordmark size={42} />
            </div>
            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: nela.muted }}
            >
              Cycle tracking that explains itself — phases, guidance, and
              patterns worth knowing. Made with care by Delexity.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span
              className="font-body text-[11px] font-semibold cora-label mb-1"
              style={{ color: nela.accent }}
            >
              App
            </span>
            {NELA_APP_STORE_URL ? (
              <a
                href={NELA_APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm transition-opacity hover:opacity-70"
                style={{ color: nela.muted }}
              >
                Download on iOS
              </a>
            ) : (
              <span className="font-body text-sm" style={{ color: nela.muted }}>
                Coming soon to iOS
              </span>
            )}
            <Link
              to="/nela-support"
              className="font-body text-sm transition-opacity hover:opacity-70"
              style={{ color: nela.muted }}
            >
              Support &amp; FAQ
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Nela feedback")}`}
              className="font-body text-sm transition-opacity hover:opacity-70"
              style={{ color: nela.muted }}
            >
              Send feedback
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <span
              className="font-body text-[11px] font-semibold cora-label mb-1"
              style={{ color: nela.accent }}
            >
              More
            </span>
            <Link
              to="/cora"
              className="font-body text-sm transition-opacity hover:opacity-70"
              style={{ color: nela.muted }}
            >
              Cora app
            </Link>
            <Link
              to="/nela-privacy"
              className="font-body text-sm transition-opacity hover:opacity-70"
              style={{ color: nela.muted }}
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <div
          className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: `1px solid ${nela.ink}12` }}
        >
          <p className="font-body text-xs" style={{ color: nela.muted }}>
            © {new Date().getFullYear()} Delexity. All rights reserved.
          </p>
          <p className="font-body text-xs" style={{ color: nela.muted }}>
            Nela is not a contraceptive and does not provide medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
