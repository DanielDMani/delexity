import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import NelaPhone from "./NelaPhone";
import { nela } from "./theme";

const stats = [
  { label: "Cycle length", detail: "Worked out from your own logged cycles." },
  { label: "Period length", detail: "Your average, not a textbook number." },
  { label: "Cycle regularity", detail: "How predictable your cycle really is." },
  { label: "Mood patterns", detail: "Charted across the cycle, not day by day." },
  { label: "Common symptoms", detail: "What turns up, and how often each cycle." },
];

export default function NelaInsights() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="insights"
      ref={ref}
      className="relative py-28 px-6"
      style={{ background: nela.bgDeep }}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="flex justify-center order-1"
        >
          <NelaPhone
            src="/screens/nela/insights.jpg"
            alt="Nela insights showing cycle length and patterns"
            width={272}
            className="cora-float"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-2"
        >
          <span
            className="font-body text-[11px] font-semibold cora-label mb-4 block"
            style={{ color: nela.muted }}
          >
            Insights
          </span>
          <h2
            className="font-display mb-5"
            style={{
              fontSize: "clamp(2.1rem, 5vw, 3.2rem)",
              color: nela.ink,
              fontWeight: 500,
            }}
          >
            Spot the patterns{" "}
            <em style={{ color: nela.accent, fontStyle: "italic" }}>
              you live by
            </em>
          </h2>
          <p
            className="font-body leading-relaxed mb-9"
            style={{ color: nela.muted }}
          >
            Log a couple of periods and Nela stops guessing from averages and
            starts learning your actual cycle — then shows you what keeps
            repeating.
          </p>

          <div className="flex flex-col gap-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.07 }}
                className="flex items-baseline justify-between gap-4 rounded-2xl px-5 py-4"
                style={{
                  background: nela.card,
                  border: `1px solid ${nela.ink}0F`,
                }}
              >
                <span
                  className="font-display text-base whitespace-nowrap"
                  style={{ color: nela.ink, fontWeight: 600 }}
                >
                  {stat.label}
                </span>
                <span
                  className="font-body text-xs text-right"
                  style={{ color: nela.muted }}
                >
                  {stat.detail}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
