import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import NelaPhone from "./NelaPhone";
import { nela } from "./theme";

const screens = [
  {
    src: "/screens/nela/today.jpg",
    label: "Today",
    blurb: "Where you are, and what it means.",
  },
  {
    src: "/screens/nela/calendar.jpg",
    label: "Calendar",
    blurb: "Your whole cycle, colour-coded.",
  },
  {
    src: "/screens/nela/insights.jpg",
    label: "Insights",
    blurb: "Patterns you can actually use.",
  },
];

export default function NelaScreens() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="screens"
      ref={ref}
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: nela.bg }}
    >
      <div
        className="absolute pointer-events-none cora-blob"
        style={{
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 760,
          height: 520,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${nela.glow}80 0%, transparent 68%)`,
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="font-body text-[11px] font-semibold cora-label mb-4 block"
            style={{ color: nela.muted }}
          >
            In the wild
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2.1rem, 5vw, 3.2rem)",
              color: nela.ink,
              fontWeight: 500,
            }}
          >
            Warm, calm, and{" "}
            <em style={{ color: nela.accent, fontStyle: "italic" }}>
              never clinical
            </em>
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-start justify-center gap-10 lg:gap-14">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center"
            >
              <NelaPhone
                src={screen.src}
                alt={`Nela ${screen.label} screen`}
                width={214}
              />
              <h3
                className="font-display text-lg mt-6 mb-1"
                style={{ color: nela.ink, fontWeight: 600 }}
              >
                {screen.label}
              </h3>
              <p className="font-body text-sm" style={{ color: nela.muted }}>
                {screen.blurb}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
