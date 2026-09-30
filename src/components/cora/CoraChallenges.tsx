import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Phone from "./Phone";
import { cora } from "./theme";

const challenges = [
  { name: "The 7-Day Reset", days: "7 days", level: "Easy" },
  { name: "Dopamine Detox", days: "7 days", level: "Normal" },
  { name: "Soft Life Productivity", days: "7 days", level: "Easy" },
  { name: "Summer Glow Up", days: "14 days", level: "Popular" },
];

export default function CoraChallenges() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="challenges"
      ref={ref}
      className="relative py-28 px-6"
      style={{ background: cora.bg }}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <span
            className="font-body text-[11px] font-semibold cora-label mb-4 block"
            style={{ color: cora.muted }}
          >
            Challenges
          </span>
          <h2
            className="font-display mb-5"
            style={{
              fontSize: "clamp(2.1rem, 5vw, 3.2rem)",
              color: cora.ink,
              fontWeight: 500,
            }}
          >
            Start something{" "}
            <em style={{ color: cora.pink, fontStyle: "italic" }}>
              you'll finish
            </em>
          </h2>
          <p
            className="font-body leading-relaxed mb-9"
            style={{ color: cora.muted }}
          >
            Pick a guided challenge and Cora handles the rest — a daily
            checklist sorted into morning, afternoon, and evening, so you always
            know the next small thing to do.
          </p>

          <div className="flex flex-col gap-3">
            {challenges.map((challenge, i) => (
              <motion.div
                key={challenge.name}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                className="flex items-center justify-between rounded-2xl px-5 py-4"
                style={{
                  background: cora.card,
                  border: `1px solid ${cora.ink}0F`,
                }}
              >
                <span
                  className="font-display text-base"
                  style={{ color: cora.ink, fontWeight: 600 }}
                >
                  {challenge.name}
                </span>
                <span className="flex items-center gap-3">
                  <span
                    className="font-body text-xs px-3 py-1 rounded-full"
                    style={{ background: cora.cardTint, color: cora.pink }}
                  >
                    {challenge.level}
                  </span>
                  <span
                    className="font-body text-xs"
                    style={{ color: cora.muted }}
                  >
                    {challenge.days}
                  </span>
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex justify-center order-1 lg:order-2"
        >
          <Phone
            src="/screens/challenge-detail.jpg"
            alt="Cora Summer Glow Up challenge, day 1 of 14"
            width={272}
            className="cora-float"
          />
        </motion.div>
      </div>
    </section>
  );
}
