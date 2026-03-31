import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Delexity delivered our MVP in 8 weeks flat — on time, on budget, and honestly better than we'd envisioned. Their attention to detail is rare.",
    name: "Sarah Chen",
    company: "Luminary Health",
    role: "Founder & CEO",
  },
  {
    quote:
      "Working with Delexity felt like having a world-class engineering team in-house. They asked the right questions, pushed back when needed, and shipped flawlessly.",
    name: "Marcus Webb",
    company: "Vaultex",
    role: "CTO",
  },
  {
    quote:
      "The website they built for us won a design award within three months. But more importantly, our conversion rate doubled. Form and function, perfectly balanced.",
    name: "Ingrid Holt",
    company: "Studio Nord",
    role: "Creative Director",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "#0A0D14" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(62, 207, 207, 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20"
        >
          <span
            className="font-mono-jet text-xs mb-4 block"
            style={{ color: "#3ECFCF" }}
          >
            05 — TESTIMONIALS
          </span>
          <h2
            className="font-syne font-bold text-4xl md:text-5xl leading-tight"
            style={{ color: "#E8EDF5" }}
          >
            Words From
            <br />
            Our Clients
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.12 }}
              className="glass-card rounded-2xl p-8 flex flex-col gap-6"
            >
              <Quote
                size={28}
                style={{ color: "#3ECFCF", opacity: 0.6 }}
                className="flex-shrink-0"
              />
              <p
                className="font-space text-sm leading-relaxed flex-1"
                style={{ color: "#E8EDF5", opacity: 0.85 }}
              >
                "{t.quote}"
              </p>
              <div
                className="pt-6 border-t"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <div
                  className="font-syne font-bold text-sm"
                  style={{ color: "#E8EDF5" }}
                >
                  {t.name}
                </div>
                <div
                  className="font-mono-jet text-xs mt-1"
                  style={{ color: "#6B7A99" }}
                >
                  {t.role} — {t.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
