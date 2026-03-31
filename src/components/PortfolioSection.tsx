import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Luminary",
    category: "MOBILE APP",
    description:
      "A subscription wellness platform for iOS and Android, featuring guided sessions, habit tracking, and AI-powered recommendations for 50k+ users.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    accent: "#3ECFCF",
  },
  {
    name: "Vaultex",
    category: "SAAS PLATFORM",
    description:
      "An enterprise-grade document management and e-signature SaaS built for legal and financial teams. Handles compliance workflows at scale.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    accent: "#8B6FFF",
  },
  {
    name: "Studio Nord",
    category: "WEBSITE",
    description:
      "Award-winning portfolio and booking site for an architectural firm. Custom animations, CMS integration, and a 98 Lighthouse score.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    accent: "#3ECFCF",
  },
];

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
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(62, 207, 207, 0.05) 0%, transparent 60%)",
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
            style={{ color: "#3ECFCF" }}
          >
            03 — WORK
          </span>
          <h2
            className="font-syne font-bold text-4xl md:text-5xl leading-tight"
            style={{ color: "#E8EDF5" }}
          >
            Featured Projects
          </h2>
        </motion.div>

        {/* Project Cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
      className="glass-card rounded-2xl overflow-hidden cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        borderColor: hovered
          ? `${project.accent}40`
          : "rgba(255,255,255,0.08)",
        boxShadow: hovered
          ? `0 0 40px ${project.accent}15, 0 30px 60px rgba(0,0,0,0.4)`
          : "none",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-64 lg:h-80 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700"
            style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
          />
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: `linear-gradient(135deg, ${project.accent}20 0%, rgba(0,0,0,0.4) 100%)`,
              opacity: hovered ? 1 : 0.3,
            }}
          />
          {/* Category tag overlay */}
          <div
            className="absolute top-4 left-4 transition-all duration-300"
            style={{ opacity: hovered ? 1 : 0 }}
          >
            <span
              className="font-mono-jet text-xs px-3 py-1.5 rounded-md"
              style={{
                color: project.accent,
                background: "rgba(10,13,20,0.8)",
                border: `1px solid ${project.accent}40`,
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
            className="font-mono-jet text-xs mb-4 block"
            style={{ color: project.accent }}
          >
            {project.category}
          </span>
          <h3
            className="font-syne font-bold text-3xl lg:text-4xl mb-4"
            style={{ color: "#E8EDF5" }}
          >
            {project.name}
          </h3>
          <p
            className="font-space text-sm leading-relaxed mb-8"
            style={{ color: "#6B7A99" }}
          >
            {project.description}
          </p>
          <div
            className="flex items-center gap-2 text-sm font-medium font-space transition-colors duration-200"
            style={{ color: hovered ? project.accent : "#6B7A99" }}
          >
            View Case Study
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
