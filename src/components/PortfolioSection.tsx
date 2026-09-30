import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ACCENT = "#FF3C3C";

const project = {
  name: "Cora",
  tagline: "Daily Habit Tracker",
  category: "iOS APP",
  description:
    "An all-in-one productivity app that unifies tasks, habits, routines, and focus sessions into a single daily timeline. Designed, built, and shipped to the App Store by Delexity.",
  highlights: [
    "Habit streaks & targets",
    "Unified daily timeline",
    "Routines & sequences",
    "Deep focus sessions",
  ],
  icon: "/cora-icon.png",
  screens: [
    { src: "/screens/habits.jpg", alt: "Cora habits screen" },
    { src: "/screens/today.jpg", alt: "Cora today timeline screen" },
    { src: "/screens/routines.jpg", alt: "Cora routines screen" },
  ],
  href: "/cora",
  appStore: "https://apps.apple.com/gb/app/cora-daily-habit-tracker/id6759983237",
};

export default function PortfolioSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="work"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "#0A0D14" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255, 60, 60, 0.05) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20"
        >
          <span
            className="font-mono-jet text-xs mb-4 block"
            style={{ color: ACCENT }}
          >
            02 — WORK
          </span>
          <h2
            className="font-syne font-bold text-4xl md:text-5xl leading-tight"
            style={{ color: "#E8EDF5" }}
          >
            Our Own Product
          </h2>
          <p
            className="font-space text-sm leading-relaxed mt-5 max-w-xl"
            style={{ color: "#6B7A99" }}
          >
            We build for ourselves the same way we build for clients. Cora is
            our flagship app — live on the App Store.
          </p>
        </motion.div>

        <ProjectCard inView={inView} />
      </div>
    </section>
  );
}

function ProjectCard({ inView }: { inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="glass-card rounded-2xl overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        borderColor: hovered ? `${ACCENT}40` : "rgba(255,255,255,0.08)",
        boxShadow: hovered
          ? `0 0 40px ${ACCENT}15, 0 30px 60px rgba(0,0,0,0.4)`
          : "none",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Screens */}
        <div
          className="relative h-80 lg:h-[30rem] overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 60%, rgba(255,60,60,0.18) 0%, #0c0f1a 70%)",
          }}
        >
          <div className="absolute inset-0 flex items-end justify-center gap-3 pt-14">
            {project.screens.map((screen, i) => (
              <PhoneScreen
                key={screen.src}
                src={screen.src}
                alt={screen.alt}
                featured={i === 1}
                hovered={hovered}
              />
            ))}
          </div>

          {/* Category tag overlay */}
          <div
            className="absolute top-4 left-4 transition-all duration-300"
            style={{ opacity: hovered ? 1 : 0 }}
          >
            <span
              className="font-mono-jet text-xs px-3 py-1.5 rounded-md"
              style={{
                color: ACCENT,
                background: "rgba(10,13,20,0.8)",
                border: `1px solid ${ACCENT}40`,
                backdropFilter: "blur(8px)",
              }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <span
            className="font-mono-jet text-xs mb-5 block"
            style={{ color: ACCENT }}
          >
            {project.category}
          </span>

          <div className="flex items-center gap-4 mb-4">
            <img
              src={project.icon}
              alt="Cora app icon"
              className="w-14 h-14 rounded-2xl"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            />
            <div>
              <h3
                className="font-syne font-bold text-3xl lg:text-4xl leading-none"
                style={{ color: "#E8EDF5" }}
              >
                {project.name}
              </h3>
              <span
                className="font-space text-sm"
                style={{ color: "#6B7A99" }}
              >
                {project.tagline}
              </span>
            </div>
          </div>

          <p
            className="font-space text-sm leading-relaxed mb-6"
            style={{ color: "#6B7A99" }}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.highlights.map((highlight) => (
              <span
                key={highlight}
                className="font-space text-xs px-3 py-1.5 rounded-full"
                style={{
                  color: "#E8EDF5",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {highlight}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              to={project.href}
              className="flex items-center gap-2 text-sm font-medium font-space transition-colors duration-200"
              style={{ color: hovered ? ACCENT : "#6B7A99" }}
            >
              Explore Cora
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium font-space transition-colors duration-200 hover:opacity-80"
              style={{ color: "#6B7A99" }}
            >
              App Store
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PhoneScreen({
  src,
  alt,
  featured,
  hovered,
}: {
  src: string;
  alt: string;
  featured: boolean;
  hovered: boolean;
}) {
  return (
    <div
      className="relative rounded-[20px] overflow-hidden transition-transform duration-700"
      style={{
        width: featured ? 150 : 120,
        aspectRatio: "1284/2778",
        background: "#111",
        border: "2px solid rgba(255,255,255,0.12)",
        boxShadow: featured
          ? `0 20px 50px rgba(0,0,0,0.6), 0 0 40px ${ACCENT}25`
          : "0 16px 40px rgba(0,0,0,0.5)",
        transform: hovered ? "translateY(-10px)" : "translateY(0)",
        opacity: featured ? 1 : 0.75,
        zIndex: featured ? 2 : 1,
      }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
    </div>
  );
}
