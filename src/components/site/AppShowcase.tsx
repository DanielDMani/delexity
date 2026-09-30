import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { site } from "./theme";

export type AppEntry = {
  name: string;
  tagline: string;
  blurb: string;
  features: string[];
  screenshot: string;
  screenshotAlt: string;
  href: string;
  accent: string;
  accentText: string;
  tint: string;
  status: { label: string; live: boolean };
  appStoreUrl: string | null;
};

export default function AppShowcase({
  app,
  flipped,
}: {
  app: AppEntry;
  flipped: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65 }}
      className="rounded-[36px] overflow-hidden"
      style={{ background: app.tint, border: `1px solid ${app.accent}26` }}
    >
      <div
        className={`grid lg:grid-cols-2 gap-10 lg:gap-6 items-center p-8 sm:p-12 ${
          flipped ? "lg:[direction:rtl]" : ""
        }`}
      >
        {/* Copy */}
        <div className={flipped ? "lg:[direction:ltr]" : ""}>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <h3
              className="font-display text-3xl sm:text-4xl"
              style={{ color: app.accentText, fontWeight: 600 }}
            >
              {app.name}
            </h3>
            <span
              className="font-body text-[11px] font-semibold cora-label px-3 py-1.5 rounded-full"
              style={{
                background: app.status.live ? app.accentText : "transparent",
                color: app.status.live ? "#fff" : app.accentText,
                border: app.status.live ? "none" : `1px solid ${app.accent}4D`,
              }}
            >
              {app.status.label}
            </span>
          </div>

          <p
            className="font-body text-base font-medium mb-3"
            style={{ color: app.accentText }}
          >
            {app.tagline}
          </p>
          <p
            className="font-body text-sm leading-relaxed mb-7"
            style={{ color: site.muted }}
          >
            {app.blurb}
          </p>

          <ul className="flex flex-col gap-2.5 mb-8">
            {app.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <span
                  className="rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ width: 18, height: 18, background: `${app.accent}26` }}
                >
                  <Check size={11} style={{ color: app.accentText }} strokeWidth={3} />
                </span>
                <span
                  className="font-body text-sm leading-snug"
                  style={{ color: site.ink }}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to={app.href}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-body font-semibold text-sm transition-transform duration-200 hover:scale-[1.03]"
              style={{
                background: app.accentText,
                color: "#fff",
                boxShadow: `0 10px 26px ${app.accent}4D`,
              }}
            >
              Explore {app.name}
              <ArrowRight size={16} />
            </Link>
            {app.appStoreUrl && (
              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: app.accentText }}
              >
                App Store →
              </a>
            )}
          </div>
        </div>

        {/* Screenshot */}
        <div className={`flex justify-center ${flipped ? "lg:[direction:ltr]" : ""}`}>
          <div className="relative" style={{ width: 216 }}>
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: 28,
                background: "#fff",
                border: "3px solid #FFFFFF",
                outline: `1px solid ${site.ink}14`,
                aspectRatio: "1284/2778",
                boxShadow: `0 26px 60px ${site.ink}24`,
              }}
            >
              <img
                src={app.screenshot}
                alt={app.screenshotAlt}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
