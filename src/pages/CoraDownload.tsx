import { useEffect } from "react";
import { Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Wordmark from "@/components/cora/Wordmark";
import Phone from "@/components/cora/Phone";
import { cora, APP_STORE_URL } from "@/components/cora/theme";

export default function CoraDownload() {
  useEffect(() => {
    document.title = "Download Cora — Daily Habit Tracker";
  }, []);

  return (
    <div
      className="relative flex flex-col items-center overflow-hidden px-6 pt-12 pb-16"
      style={{
        minHeight: "100vh",
        background: `linear-gradient(180deg, ${cora.bg} 0%, #FEE9E1 60%, ${cora.bg} 100%)`,
        color: cora.ink,
      }}
    >
      {/* soft blush blooms */}
      <div
        className="absolute pointer-events-none cora-blob"
        style={{
          top: "-12%",
          left: "-10%",
          width: 460,
          height: 460,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${cora.coral}2E 0%, transparent 68%)`,
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none cora-blob"
        style={{
          top: "25%",
          right: "-12%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${cora.pink}26 0%, transparent 68%)`,
          filter: "blur(70px)",
          animationDelay: "-7s",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-md">
        <Link to="/cora" className="mb-7">
          <Wordmark size={52} />
        </Link>

        {/* badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{
            background: "rgba(255,255,255,0.72)",
            border: `1px solid ${cora.pink}2E`,
            boxShadow: `0 2px 10px ${cora.ink}0A`,
          }}
        >
          <Sparkles size={13} style={{ color: cora.pink }} />
          <span
            className="font-body text-[11px] font-semibold cora-label"
            style={{ color: cora.pink }}
          >
            Now on the App Store
          </span>
        </div>

        <h1
          className="font-display leading-[1.05] mb-3"
          style={{
            fontSize: "clamp(2.4rem, 11vw, 3.6rem)",
            color: cora.ink,
            fontWeight: 500,
          }}
        >
          Own your{" "}
          <em style={{ color: cora.pink, fontStyle: "italic" }}>day</em>, softly.
        </h1>

        <p
          className="font-body mb-9 leading-relaxed max-w-sm"
          style={{ fontSize: "1rem", color: cora.muted }}
        >
          Your rituals, habits, routines, journal, and challenges — gathered
          into one calm space.
        </p>

        {/* Primary CTA */}
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full px-8 py-5 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] font-body"
          style={{
            background: cora.gradient,
            color: "#fff",
            boxShadow: `0 14px 36px ${cora.pink}4D`,
            fontSize: "1.02rem",
            fontWeight: 600,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download on the App Store
        </a>

        {/* trust line */}
        <div className="flex items-center gap-2 mt-5 mb-10">
          <div className="flex gap-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={13} fill={cora.pink} color={cora.pink} />
            ))}
          </div>
          <span className="font-body text-xs" style={{ color: cora.muted }}>
            Free · iOS 16.0+ · No ads, ever
          </span>
        </div>

        <Phone
          src="/screens/today.jpg"
          alt="Cora today screen with daily rituals"
          width={230}
          className="cora-float"
        />

        <Link
          to="/cora"
          className="font-body text-sm font-medium mt-10 transition-opacity hover:opacity-70"
          style={{ color: cora.pink }}
        >
          See everything Cora does →
        </Link>
      </div>
    </div>
  );
}
