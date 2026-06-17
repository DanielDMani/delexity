import { useEffect } from "react";
import { Star } from "lucide-react";

const APP_STORE_URL =
  "https://apps.apple.com/gb/app/cora-daily-habit-tracker/id6759983237";

export default function CoraDownload() {
  useEffect(() => {
    document.title = "Download Cora — Daily Habit Tracker";
  }, []);

  return (
    <div
      className="relative flex flex-col items-center overflow-hidden px-6 pt-10 pb-16"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(160deg, #D08A55 0%, #BE7644 35%, #A05B33 65%, #7E4527 100%)",
        color: "#FFF7EF",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {/* soft center glow, echoing the icon's highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 25%, rgba(255,239,222,0.22) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-md">
        {/* app icon */}
        <img
          src="/cora-icon.png"
          alt="Cora app icon"
          width={92}
          height={92}
          style={{ borderRadius: 21, boxShadow: "0 16px 38px rgba(60,30,12,0.45)" }}
        />

        {/* badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mt-5 mb-4 text-xs font-bold"
          style={{
            background: "rgba(255,247,239,0.18)",
            border: "1px solid rgba(255,247,239,0.35)",
            color: "#FFF7EF",
            backdropFilter: "blur(6px)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#FFF7EF" }}
          />
          Now on the App Store
        </div>

        {/* app name */}
        <h1
          className="leading-none mb-2"
          style={{ fontSize: "clamp(2.6rem, 13vw, 3.8rem)", color: "#FFF8F0", fontWeight: 900 }}
        >
          Cora
        </h1>
        <p
          className="font-extrabold mb-2"
          style={{ fontSize: "1.05rem", color: "#FBE6D2" }}
        >
          ADHD Planner, Routines &amp; Focus
        </p>
        <p
          className="mb-7 leading-relaxed font-semibold max-w-sm"
          style={{ fontSize: "0.98rem", color: "rgba(255,247,239,0.82)" }}
        >
          Your tasks, habits, routines &amp; focus — all in one app.
        </p>

        {/* ── BIG CTA (above the fold) ── */}
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-3 w-full px-8 py-5 rounded-2xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          style={{
            background: "#2A211B",
            color: "#FFF7EF",
            boxShadow: "0 16px 42px rgba(42,33,27,0.5)",
            fontSize: "1.15rem",
            fontWeight: 800,
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download Cora on the App Store
        </a>

        {/* trust line */}
        <div className="flex items-center gap-1.5 mt-5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={15} fill="#FFF3E6" color="#FFF3E6" />
          ))}
        </div>
      </div>
    </div>
  );
}
