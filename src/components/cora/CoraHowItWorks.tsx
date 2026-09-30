import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Phone from "./Phone";
import { cora } from "./theme";

const steps = [
  {
    n: "01",
    title: "Set your rituals",
    desc: "Choose what a good morning, afternoon, and evening look like for you.",
  },
  {
    n: "02",
    title: "Let Cora lay out the day",
    desc: "Your habits, routines, and challenge steps land on one gentle timeline.",
  },
  {
    n: "03",
    title: "Follow along",
    desc: "Press play on a routine, tick things off, and keep your streak alive.",
  },
  {
    n: "04",
    title: "Reflect",
    desc: "Journal at the end of the day and see how far you've actually come.",
  },
];

export default function CoraHowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how"
      ref={ref}
      className="relative py-28 px-6"
      style={{ background: cora.bgDeep }}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <Phone
            src="/screens/routines.jpg"
            alt="Cora routines with morning routine and evening wind down"
            width={272}
            className="cora-float"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span
            className="font-body text-[11px] font-semibold cora-label mb-4 block"
            style={{ color: cora.muted }}
          >
            How it works
          </span>
          <h2
            className="font-display mb-5"
            style={{
              fontSize: "clamp(2.1rem, 5vw, 3.2rem)",
              color: cora.ink,
              fontWeight: 500,
            }}
          >
            Your whole day,{" "}
            <em style={{ color: cora.pink, fontStyle: "italic" }}>one app</em>
          </h2>
          <p
            className="font-body leading-relaxed mb-12"
            style={{ color: cora.muted }}
          >
            Cora isn't another to-do list to feel guilty about. It's a softer
            structure for the day — one you'll actually want to keep.
          </p>

          <div className="space-y-8 relative">
            <div
              className="absolute left-6 top-8 bottom-8 w-px"
              style={{ background: `${cora.pink}33` }}
            />
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex gap-5 items-start relative"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                  style={{
                    background: cora.card,
                    border: `1px solid ${cora.pink}44`,
                  }}
                >
                  <span
                    className="font-body font-semibold text-xs"
                    style={{ color: cora.pink }}
                  >
                    {step.n}
                  </span>
                </div>
                <div className="pt-2">
                  <h3
                    className="font-display text-lg mb-1"
                    style={{ color: cora.ink, fontWeight: 600 }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: cora.muted }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
