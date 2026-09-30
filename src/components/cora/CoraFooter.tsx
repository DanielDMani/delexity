import { Link } from "react-router-dom";
import Wordmark from "./Wordmark";
import { cora, APP_STORE_URL } from "./theme";

export default function CoraFooter() {
  return (
    <footer
      className="relative py-14 px-6"
      style={{
        background: cora.bgDeep,
        borderTop: `1px solid ${cora.ink}12`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          <div className="max-w-xs">
            <div className="mb-4">
              <Wordmark size={42} />
            </div>
            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: cora.muted }}
            >
              A gentler home for your rituals, habits, routines, journal, and
              challenges. Made with care by Delexity.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span
              className="font-body text-[11px] font-semibold cora-label mb-1"
              style={{ color: cora.pink }}
            >
              App
            </span>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm transition-opacity hover:opacity-70"
              style={{ color: cora.muted }}
            >
              Download on iOS
            </a>
            <Link
              to="/cora-support"
              className="font-body text-sm transition-opacity hover:opacity-70"
              style={{ color: cora.muted }}
            >
              Support &amp; FAQ
            </Link>
            <a
              href="/cora#feedback"
              className="font-body text-sm transition-opacity hover:opacity-70"
              style={{ color: cora.muted }}
            >
              Send feedback
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <span
              className="font-body text-[11px] font-semibold cora-label mb-1"
              style={{ color: cora.pink }}
            >
              Legal
            </span>
            <Link
              to="/privacy"
              className="font-body text-sm transition-opacity hover:opacity-70"
              style={{ color: cora.muted }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/support"
              className="font-body text-sm transition-opacity hover:opacity-70"
              style={{ color: cora.muted }}
            >
              Contact Support
            </Link>
          </div>
        </div>

        <div
          className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: `1px solid ${cora.ink}12` }}
        >
          <p className="font-body text-xs" style={{ color: cora.muted }}>
            © {new Date().getFullYear()} Delexity. All rights reserved.
          </p>
          <p className="font-body text-xs" style={{ color: cora.muted }}>
            Made for people who want their day back.
          </p>
        </div>
      </div>
    </footer>
  );
}
