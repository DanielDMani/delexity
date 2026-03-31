import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5 yrs", label: "In the Industry" },
  { value: "3", label: "Continents Served" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0A0D14 0%, #0c0f1a 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 80% 30%, rgba(139, 111, 255, 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
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
              04 — ABOUT
            </span>
            <h2
              className="font-syne font-bold text-4xl md:text-5xl leading-tight mb-8"
              style={{ color: "#E8EDF5" }}
            >
              Built Different,
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #3ECFCF 0%, #8B6FFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                On Purpose
              </span>
            </h2>

            <p
              className="font-space text-base leading-relaxed mb-6"
              style={{ color: "#6B7A99" }}
            >
              Delexity was founded on a simple belief: great software is both
              technically excellent and beautifully crafted. We reject the
              false choice between engineering rigor and design quality.
            </p>

            <p
              className="font-space text-base leading-relaxed"
              style={{ color: "#6B7A99" }}
            >
              Our team operates at the intersection of precision engineering and
              modern digital craft — building products that earn trust through
              reliability, and loyalty through experience.
            </p>

            <div
              className="mt-10 pt-8 border-t"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <p
                className="font-space text-sm italic"
                style={{ color: "#E8EDF5", opacity: 0.7 }}
              >
                "We don't just build what you ask for — we build what you
                actually need."
              </p>
            </div>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.25 + i * 0.1,
                }}
                className="glass-card rounded-2xl p-8"
              >
                <div
                  className="font-syne font-extrabold text-5xl mb-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #3ECFCF 0%, #8B6FFF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-space text-sm"
                  style={{ color: "#6B7A99" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
