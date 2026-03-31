import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden noise-bg"
      style={{ background: "#0A0D14" }}
    >
      {/* Mesh gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(139, 111, 255, 0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(62, 207, 207, 0.1) 0%, transparent 60%)",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span
            className="font-mono-jet text-xs px-4 py-1.5 rounded-full border"
            style={{
              color: "#3ECFCF",
              borderColor: "rgba(62, 207, 207, 0.25)",
              background: "rgba(62, 207, 207, 0.06)",
            }}
          >
            SOFTWARE STUDIO
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="font-syne font-extrabold leading-[1.05] tracking-tight mb-6"
          style={{
            fontSize: "clamp(3rem, 7vw, 6rem)",
            color: "#E8EDF5",
          }}
        >
          We Build{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3ECFCF 0%, #8B6FFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Digital Products
          </span>
          <br />
          That Matter
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="font-space font-light text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: "#6B7A99" }}
        >
          Delexity is a modern software studio crafting apps, software products,
          and websites for founders and businesses who demand precision.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="pulse-glow-btn font-space font-semibold text-sm px-8 py-4 rounded-xl flex items-center gap-2 transition-all duration-150 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #3ECFCF, #2ab5c9)",
              color: "#0A0D14",
            }}
          >
            Start a Project
            <ArrowRight size={16} />
          </button>

          <button
            onClick={() => scrollTo("work")}
            className="font-space font-medium text-sm px-8 py-4 rounded-xl border transition-all duration-200 hover:bg-white/[0.06] hover:border-white/20 group"
            style={{
              borderColor: "rgba(255,255,255,0.12)",
              color: "#E8EDF5",
            }}
          >
            View Our Work
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="font-mono-jet text-xs"
            style={{ color: "#6B7A99" }}
          >
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} style={{ color: "#6B7A99" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
