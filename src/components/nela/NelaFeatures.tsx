import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sun,
  CalendarDays,
  Leaf,
  BarChart3,
  Utensils,
  HeartPulse,
} from "lucide-react";
import { nela } from "./theme";

const features = [
  {
    icon: Sun,
    title: "Today at a glance",
    desc: "How many days until your next period, which phase you're in, and one insight that actually applies to today.",
  },
  {
    icon: CalendarDays,
    title: "A calendar that explains itself",
    desc: "Every day is colour-coded by phase across months and years, so you can see the shape of your cycle rather than just dates.",
  },
  {
    icon: Leaf,
    title: "Cycle sync guidance",
    desc: "Food, self-care and movement suited to the phase you're in — with the reason behind each one, not just a rule to follow.",
  },
  {
    icon: Utensils,
    title: "Eat for the phase",
    desc: "Specific, ordinary foods that support what your hormones are doing this week. Berries and leafy greens, not supplements you'll never buy.",
  },
  {
    icon: BarChart3,
    title: "Insights that build",
    desc: "Cycle length, period length and regularity, worked out from your own logs rather than a textbook average.",
  },
  {
    icon: HeartPulse,
    title: "Mood & symptom patterns",
    desc: "Log how you feel and Nela charts it across the cycle, so recurring symptoms stop feeling random.",
  },
];

export default function NelaFeatures() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-28 px-6"
      style={{ background: nela.bg }}
    >
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
            What Nela does
          </span>
          <h2
            className="font-display mb-4"
            style={{
              fontSize: "clamp(2.1rem, 5vw, 3.2rem)",
              color: nela.ink,
              fontWeight: 500,
            }}
          >
            Not just{" "}
            <em style={{ color: nela.accent, fontStyle: "italic" }}>
              when
            </em>
            . Also what to do about it.
          </h2>
          <p
            className="font-body max-w-lg mx-auto leading-relaxed"
            style={{ color: nela.muted }}
          >
            Most trackers predict a date and stop there. Nela carries on into
            the part that actually changes your week.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 26 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-[26px] p-7 transition-all duration-300"
              style={{
                background: nela.card,
                border: `1px solid ${nela.ink}0F`,
                boxShadow: `0 2px 10px ${nela.ink}0A`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 16px 40px ${nela.accent}1F`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 2px 10px ${nela.ink}0A`;
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: nela.cardTint }}
              >
                <feature.icon size={21} style={{ color: nela.accent }} />
              </div>
              <h3
                className="font-display text-xl mb-2.5"
                style={{ color: nela.ink, fontWeight: 600 }}
              >
                {feature.title}
              </h3>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: nela.muted }}
              >
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
