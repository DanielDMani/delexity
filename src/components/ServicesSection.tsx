import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Smartphone, Code2, Globe, Palette } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform apps built for performance, designed for users. From MVP to scale.",
    tag: "MOBILE",
    size: "large",
  },
  {
    icon: Code2,
    title: "Software Products",
    description:
      "Complex systems, internal tools, and SaaS platforms engineered with precision and care.",
    tag: "SOFTWARE",
    size: "small",
  },
  {
    icon: Globe,
    title: "Websites",
    description:
      "Marketing sites, landing pages, and digital experiences that convert and impress.",
    tag: "WEB",
    size: "small",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Interface design that balances beauty with function. Every pixel earns its place.",
    tag: "DESIGN",
    size: "large",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "#0A0D14" }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(62, 207, 207, 0.04) 0%, transparent 70%)",
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
            01 — SERVICES
          </span>
          <h2
            className="font-syne font-bold text-4xl md:text-5xl leading-tight"
            style={{ color: "#E8EDF5" }}
          >
            What We Build
          </h2>
          <p
            className="font-space text-base mt-4 max-w-lg"
            style={{ color: "#6B7A99" }}
          >
            End-to-end digital craft — from first sketch to production launch.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* Large card 1 */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-2 glass-card rounded-2xl p-8 group cursor-default transition-all duration-300 hover:scale-[1.02]"
            style={{ minHeight: 280 }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(62, 207, 207, 0.3)";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 0 30px rgba(62, 207, 207, 0.12), 0 20px 40px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <span
                  className="font-mono-jet text-xs px-2.5 py-1 rounded-md mb-6 inline-block"
                  style={{
                    color: "#3ECFCF",
                    background: "rgba(62, 207, 207, 0.08)",
                  }}
                >
                  MOBILE
                </span>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(62, 207, 207, 0.1)" }}
                >
                  <Smartphone size={22} style={{ color: "#3ECFCF" }} />
                </div>
                <h3
                  className="font-syne font-bold text-2xl mb-3"
                  style={{ color: "#E8EDF5" }}
                >
                  Mobile Apps
                </h3>
                <p
                  className="font-space text-sm leading-relaxed"
                  style={{ color: "#6B7A99" }}
                >
                  Native and cross-platform apps built for performance, designed
                  for real users. From MVP to scale-ready products.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Small card 1 */}
          <motion.div
            variants={cardVariants}
            className="glass-card rounded-2xl p-8 group cursor-default transition-all duration-300 hover:scale-[1.02]"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(139, 111, 255, 0.3)";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 0 30px rgba(139, 111, 255, 0.12), 0 20px 40px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            <span
              className="font-mono-jet text-xs px-2.5 py-1 rounded-md mb-6 inline-block"
              style={{
                color: "#8B6FFF",
                background: "rgba(139, 111, 255, 0.08)",
              }}
            >
              SOFTWARE
            </span>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ background: "rgba(139, 111, 255, 0.1)" }}
            >
              <Code2 size={22} style={{ color: "#8B6FFF" }} />
            </div>
            <h3
              className="font-syne font-bold text-xl mb-3"
              style={{ color: "#E8EDF5" }}
            >
              Software Products
            </h3>
            <p
              className="font-space text-sm leading-relaxed"
              style={{ color: "#6B7A99" }}
            >
              Complex systems and SaaS platforms engineered with precision.
            </p>
          </motion.div>

          {/* Small card 2 */}
          <motion.div
            variants={cardVariants}
            className="glass-card rounded-2xl p-8 group cursor-default transition-all duration-300 hover:scale-[1.02]"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(62, 207, 207, 0.3)";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 0 30px rgba(62, 207, 207, 0.12), 0 20px 40px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            <span
              className="font-mono-jet text-xs px-2.5 py-1 rounded-md mb-6 inline-block"
              style={{
                color: "#3ECFCF",
                background: "rgba(62, 207, 207, 0.08)",
              }}
            >
              WEB
            </span>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ background: "rgba(62, 207, 207, 0.1)" }}
            >
              <Globe size={22} style={{ color: "#3ECFCF" }} />
            </div>
            <h3
              className="font-syne font-bold text-xl mb-3"
              style={{ color: "#E8EDF5" }}
            >
              Websites
            </h3>
            <p
              className="font-space text-sm leading-relaxed"
              style={{ color: "#6B7A99" }}
            >
              Marketing sites and digital experiences that convert and impress.
            </p>
          </motion.div>

          {/* Large card 2 — full width on mobile, spans 2 on desktop */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-4 glass-card rounded-2xl p-8 group cursor-default transition-all duration-300 hover:scale-[1.01]"
            style={{ minHeight: 200 }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(139, 111, 255, 0.3)";
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 0 30px rgba(139, 111, 255, 0.12), 0 20px 40px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor =
                "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(139, 111, 255, 0.1)" }}
                >
                  <Palette size={22} style={{ color: "#8B6FFF" }} />
                </div>
                <div>
                  <span
                    className="font-mono-jet text-xs px-2.5 py-1 rounded-md mb-3 inline-block"
                    style={{
                      color: "#8B6FFF",
                      background: "rgba(139, 111, 255, 0.08)",
                    }}
                  >
                    DESIGN
                  </span>
                  <h3
                    className="font-syne font-bold text-2xl mb-2"
                    style={{ color: "#E8EDF5" }}
                  >
                    UI/UX Design
                  </h3>
                  <p
                    className="font-space text-sm leading-relaxed max-w-2xl"
                    style={{ color: "#6B7A99" }}
                  >
                    Interface design that balances beauty with function. We create
                    intuitive experiences that users love and businesses rely on.
                    Every pixel earns its place.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
