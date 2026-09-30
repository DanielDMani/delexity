import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import NelaPhone from "./NelaPhone";
import { nela } from "./theme";

const detail = [
  {
    name: "Period",
    days: "Days 1–5",
    color: nela.period,
    feeling: "Low energy, inward, tender.",
    guidance:
      "Warmth, iron-rich food, and genuine rest. Nela nudges you to do less, not more.",
  },
  {
    name: "Follicular",
    days: "Days 6–8",
    color: nela.follicular,
    feeling: "Energy climbing, curious, open.",
    guidance:
      "A good window to begin things — new plans, harder workouts, fresh ideas.",
  },
  {
    name: "Ovulation",
    days: "Days 9–15",
    color: nela.ovulation,
    feeling: "Confident, social, energised.",
    guidance:
      "Make the most of the glow. Antioxidants, zinc and fibre support the hormone surge.",
  },
  {
    name: "Luteal",
    days: "Days 16–28",
    color: nela.luteal,
    feeling: "Winding down, more sensitive.",
    guidance:
      "Steady blood sugar, gentler movement, and protecting your sleep pay off most here.",
  },
];

export default function NelaPhases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(2); // Ovulation, as in the screenshots

  return (
    <section
      id="phases"
      ref={ref}
      className="relative py-28 px-6"
      style={{ background: nela.bgDeep }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="font-body text-[11px] font-semibold cora-label mb-4 block"
            style={{ color: nela.muted }}
          >
            Sync with your cycle
          </span>
          <h2
            className="font-display mb-4"
            style={{
              fontSize: "clamp(2.1rem, 5vw, 3.2rem)",
              color: nela.ink,
              fontWeight: 500,
            }}
          >
            Four phases,{" "}
            <em style={{ color: nela.accent, fontStyle: "italic" }}>
              four different weeks
            </em>
          </h2>
          <p
            className="font-body max-w-xl mx-auto leading-relaxed"
            style={{ color: nela.muted }}
          >
            Your energy, mood and appetite aren't the same every week — and they
            aren't supposed to be. Nela tells you where you are and what usually
            helps.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* phase selector */}
            <div className="flex flex-wrap gap-2 mb-7">
              {detail.map((phase, i) => (
                <button
                  key={phase.name}
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  className="font-body text-sm px-4 py-2 rounded-full transition-all duration-200"
                  style={{
                    background: i === active ? phase.color : nela.card,
                    color: i === active ? nela.ink : nela.muted,
                    border: `1px solid ${i === active ? phase.color : `${nela.ink}12`}`,
                    fontWeight: i === active ? 600 : 500,
                  }}
                >
                  {phase.name}
                </button>
              ))}
            </div>

            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-[26px] p-8"
              style={{
                background: nela.card,
                border: `1px solid ${nela.ink}0F`,
                borderLeft: `4px solid ${detail[active].color}`,
              }}
            >
              <span
                className="font-body text-[11px] font-semibold cora-label block mb-3"
                style={{ color: nela.muted }}
              >
                {detail[active].days}
              </span>
              <h3
                className="font-display text-2xl mb-3"
                style={{ color: nela.ink, fontWeight: 600 }}
              >
                {detail[active].name} phase
              </h3>
              <p
                className="font-body text-sm leading-relaxed mb-4"
                style={{ color: nela.ink }}
              >
                {detail[active].feeling}
              </p>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: nela.muted }}
              >
                {detail[active].guidance}
              </p>
            </motion.div>

            <p
              className="font-body text-xs mt-5 leading-relaxed"
              style={{ color: nela.muted }}
            >
              Day ranges shown for a typical 28-day cycle. Nela adjusts to your
              own cycles once you've logged a couple of periods.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center"
          >
            <NelaPhone
              src="/screens/nela/sync.jpg"
              alt="Nela ovulation phase guidance with food suggestions"
              width={272}
              className="cora-float"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
