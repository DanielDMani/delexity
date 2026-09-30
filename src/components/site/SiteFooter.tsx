import { Link } from "react-router-dom";
import { site, CONTACT_EMAIL } from "./theme";

export default function SiteFooter() {
  return (
    <footer
      className="relative py-14 px-6"
      style={{ background: site.bgDeep, borderTop: `1px solid ${site.line}` }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          <div className="max-w-xs">
            <span
              className="font-display text-xl block mb-3"
              style={{ color: site.ink, fontWeight: 600 }}
            >
              Delexity
            </span>
            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: site.muted }}
            >
              We build calm, considered apps for everyday life.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span
              className="font-body text-[11px] font-semibold cora-label mb-1"
              style={{ color: site.muted }}
            >
              Apps
            </span>
            <Link to="/cora" className="font-body text-sm transition-opacity hover:opacity-70" style={{ color: site.muted }}>
              Cora
            </Link>
            <Link to="/nela" className="font-body text-sm transition-opacity hover:opacity-70" style={{ color: site.muted }}>
              Nela
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <span
              className="font-body text-[11px] font-semibold cora-label mb-1"
              style={{ color: site.muted }}
            >
              Support
            </span>
            <Link to="/cora-support" className="font-body text-sm transition-opacity hover:opacity-70" style={{ color: site.muted }}>
              Cora support
            </Link>
            <Link to="/nela-support" className="font-body text-sm transition-opacity hover:opacity-70" style={{ color: site.muted }}>
              Nela support
            </Link>
            <Link to="/privacy" className="font-body text-sm transition-opacity hover:opacity-70" style={{ color: site.muted }}>
              Privacy Policy
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <span
              className="font-body text-[11px] font-semibold cora-label mb-1"
              style={{ color: site.muted }}
            >
              Get in touch
            </span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-body text-sm transition-opacity hover:opacity-70"
              style={{ color: site.muted }}
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div
          className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: `1px solid ${site.line}` }}
        >
          <p className="font-body text-xs" style={{ color: site.muted }}>
            © {new Date().getFullYear()} Delexity. All rights reserved.
          </p>
          <p className="font-body text-xs" style={{ color: site.muted }}>
            Made in the UK.
          </p>
        </div>
      </div>
    </footer>
  );
}
