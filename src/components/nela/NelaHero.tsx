import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import NelaPhone from "./NelaPhone";
import NelaCTA from "./NelaCTA";
import { nela, phases } from "./theme";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 76,
    behavior: "smooth",
  });
};

export default function NelaHero() {
  return (
    <section
      className="relative overflow-hidden pt-36 pb-24 px-6"
      style={{
        background: `linear-gradient(180deg, ${nela.bgDeep} 0%, ${nela.bg} 55%, ${nela.bg} 100%)`,
      }}
    >
      <div
        className="absolute pointer-events-none cora-blob"
        style={{
          top: "-8%",
          left: "-6%",
          width: 540,
          height: 540,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${nela.glow}99 0%, transparent 68%)`,
          filter: "blur(65px)",
        }}
      />
      <div
        className="absolute pointer-events-none cora-blob"
        style={{
          top: "20%",
          right: "-8%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${nela.period}66 0%, transparent 68%)`,
          filter: "blur(70px)",
          animationDelay: "-7s",
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: "rgba(255,255,255,0.75)",
            border: `1px solid ${nela.accent}2E`,
            boxShadow: `0 2px 10px ${nela.ink}0A`,
          }}
        >
          <Leaf size={14} style={{ color: nela.accent }} />
          <span
            className="font-body text-[11px] font-semibold cora-label"
            style={{ color: nela.accent }}
          >
            Cycle tracking &amp; guidance
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display leading-[1.02] mb-6"
          style={{
            fontSize: "clamp(2.9rem, 8.5vw, 6rem)",
            color: nela.ink,
            fontWeight: 500,
          }}
        >
          Live in sync
          <br />
          with your{" "}
          <em style={{ color: nela.accent, fontStyle: "italic" }}>cycle</em>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="font-body max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 2.2vw, 1.15rem)", color: nela.muted }}
        >
          Nela is more than a period tracker. It tells you which phase you're
          in, what that means for your energy and mood, and how to eat, move,
          and rest to work with your body instead of against it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <NelaCTA />
          <button
            onClick={() => scrollTo("phases")}
            className="font-body font-semibold text-sm px-7 py-4 rounded-full transition-all duration-200 hover:scale-[1.03]"
            style={{
              color: nela.ink,
              background: "rgba(255,255,255,0.85)",
              border: `1px solid ${nela.ink}14`,
            }}
          >
            See how it works
          </button>
        </motion.div>

        {/* phase ribbon, echoing the app's phase bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="flex items-center justify-center gap-2 sm:gap-3 mb-20 flex-wrap"
        >
          {phases.map((phase) => (
            <span key={phase.name} className="flex items-center gap-2">
              <span
                className="rounded-full"
                style={{
                  width: 28,
                  height: 5,
                  background: phase.color,
                }}
              />
              <span
                className="font-body text-[11px] font-semibold cora-label"
                style={{ color: nela.muted }}
              >
                {phase.name}
              </span>
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-end justify-center gap-4 sm:gap-7"
        >
          <NelaPhone
            src="/screens/nela/calendar.jpg"
            alt="Nela cycle calendar"
            width={166}
            className="hidden sm:block cora-float"
            style={{ animationDelay: "-2s" }}
          />
          <NelaPhone
            src="/screens/nela/today.jpg"
            alt="Nela today screen showing days until next period"
            width={226}
            className="cora-float"
          />
          <NelaPhone
            src="/screens/nela/sync.jpg"
            alt="Nela cycle sync guidance"
            width={166}
            className="hidden sm:block cora-float"
            style={{ animationDelay: "-4s" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
