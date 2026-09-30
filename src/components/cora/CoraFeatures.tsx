import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sunrise, Flame, Repeat, BookHeart, Trophy, CalendarDays } from "lucide-react";
import { cora } from "./theme";

const features = [
  {
    icon: Sunrise,
    title: "Today's Rituals",
    desc: "Morning, afternoon, and evening, laid out as a gentle timeline. Make your bed, set your intentions, reflect on your day — all in order, all in one place.",
  },
  {
    icon: Flame,
    title: "Habits & Streaks",
    desc: "Meditate, skincare, drink water, walk 10k. Habits sit right inside your day and build a streak you'll want to protect.",
  },
  {
    icon: Repeat,
    title: "Routines",
    desc: "Build a Morning Routine or an Evening Wind Down, give it steps and a duration, schedule the reminder, then press play and follow along.",
  },
  {
    icon: BookHeart,
    title: "Journal",
    desc: "Close the loop on your day. A quiet space to reflect, notice what worked, and plan tomorrow before you put your phone down.",
  },
  {
    icon: Trophy,
    title: "Challenges",
    desc: "Guided multi-day resets — The 7-Day Reset, Dopamine Detox, Summer Glow Up — each with a daily checklist and an honest difficulty rating.",
  },
  {
    icon: CalendarDays,
    title: "A Week at a Glance",
    desc: "Swipe across the week to see what's coming and what you've kept up. Planning ahead takes seconds, not a Sunday afternoon.",
  },
];

export default function CoraFeatures() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-28 px-6"
      style={{ background: cora.bg }}
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
            style={{ color: cora.muted }}
          >
            Everything you need
          </span>
          <h2
            className="font-display mb-4"
            style={{
              fontSize: "clamp(2.1rem, 5vw, 3.2rem)",
              color: cora.ink,
              fontWeight: 500,
            }}
          >
            One app for your{" "}
            <em style={{ color: cora.pink, fontStyle: "italic" }}>whole day</em>
          </h2>
          <p
            className="font-body max-w-lg mx-auto leading-relaxed"
            style={{ color: cora.muted }}
          >
            Rituals, habits, routines, journalling, and challenges — no more
            juggling five apps that don't talk to each other.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 26 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="cora-card rounded-[26px] p-7 transition-all duration-300"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 16px 40px ${cora.pink}1F`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 2px 10px ${cora.ink}0A`;
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: cora.cardTint }}
              >
                <feature.icon size={21} style={{ color: cora.pink }} />
              </div>
              <h3
                className="font-display text-xl mb-2.5"
                style={{ color: cora.ink, fontWeight: 600 }}
              >
                {feature.title}
              </h3>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: cora.muted }}
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
