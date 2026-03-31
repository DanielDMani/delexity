import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    description:
      "We start by deeply understanding your goals, constraints, users, and market. Strategy before pixels, always.",
  },
  {
    num: "02",
    title: "Design",
    description:
      "High-fidelity designs, interactive prototypes, and a refined visual language. You see it before we build it.",
  },
  {
    num: "03",
    title: "Build",
    description:
      "Clean, well-documented code. Scalable architecture. Regular check-ins and demos throughout.",
  },
  {
    num: "04",
    title: "Launch",
    description:
      "Rigorous testing, deployment, performance optimization, and post-launch support. We see it through.",
  },
];

export default function HowWeWorkSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0A0D14 0%, #0c1020 50%, #0A0D14 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 20% 50%, rgba(139, 111, 255, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span
              className="font-mono-jet text-xs mb-4 block"
              style={{ color: "#3ECFCF" }}
            >
              02 — PROCESS
            </span>
            <h2
              className="font-syne font-bold text-4xl md:text-5xl leading-tight mb-6"
              style={{ color: "#E8EDF5" }}
            >
              How We
              <br />
              Work
            </h2>
            <p
              className="font-space text-base leading-relaxed max-w-sm"
              style={{ color: "#6B7A99" }}
            >
              A clear, collaborative process that gives you visibility and
              confidence at every stage of the project.
            </p>
          </motion.div>

          {/* Right — Steps */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[22px] top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(180deg, rgba(62,207,207,0.4) 0%, rgba(139,111,255,0.4) 100%)",
              }}
            />

            <div className="flex flex-col gap-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.1 + i * 0.12,
                  }}
                  className="flex gap-8 items-start relative"
                >
                  {/* Dot */}
                  <div
                    className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                    style={{
                      background: "#0A0D14",
                      border: "1px solid rgba(62,207,207,0.3)",
                    }}
                  >
                    <span
                      className="font-mono-jet text-xs font-medium"
                      style={{ color: "#3ECFCF" }}
                    >
                      {step.num}
                    </span>
                  </div>

                  <div className="pt-1">
                    <h3
                      className="font-syne font-bold text-xl mb-2"
                      style={{ color: "#E8EDF5" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="font-space text-sm leading-relaxed"
                      style={{ color: "#6B7A99" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
