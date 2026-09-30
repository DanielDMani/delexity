import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";
import Phone from "./Phone";
import AppStoreButton from "./AppStoreButton";
import { cora, APP_STORE_URL } from "./theme";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 76,
    behavior: "smooth",
  });
};

export default function CoraHero() {
  return (
    <section
      className="relative overflow-hidden pt-36 pb-24 px-6"
      style={{
        background: `linear-gradient(180deg, ${cora.bg} 0%, #FEE9E1 55%, ${cora.bg} 100%)`,
      }}
    >
      {/* soft blush blooms */}
      <div
        className="absolute pointer-events-none cora-blob"
        style={{
          top: "-8%",
          left: "-6%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${cora.coral}2E 0%, transparent 68%)`,
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none cora-blob"
        style={{
          top: "18%",
          right: "-8%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${cora.pink}26 0%, transparent 68%)`,
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
            background: "rgba(255,255,255,0.72)",
            border: `1px solid ${cora.pink}2E`,
            boxShadow: `0 2px 10px ${cora.ink}0A`,
          }}
        >
          <Sparkles size={14} style={{ color: cora.pink }} />
          <span
            className="font-body text-[11px] font-semibold cora-label"
            style={{ color: cora.pink }}
          >
            Now on the App Store
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display leading-[1.02] mb-6"
          style={{
            fontSize: "clamp(2.9rem, 8.5vw, 6rem)",
            color: cora.ink,
            fontWeight: 500,
          }}
        >
          Own your
          <br />
          <em style={{ color: cora.pink, fontStyle: "italic" }}>day</em>, softly.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="font-body max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 2.2vw, 1.15rem)", color: cora.muted }}
        >
          Cora gathers your rituals, habits, routines, journal, and challenges
          into one calm space — so your day feels intentional instead of
          overwhelming.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-6"
        >
          <AppStoreButton href={APP_STORE_URL} />
          <button
            onClick={() => scrollTo("features")}
            className="font-body font-semibold text-sm px-7 py-4 rounded-full transition-all duration-200 hover:scale-[1.03]"
            style={{
              color: cora.ink,
              background: "rgba(255,255,255,0.8)",
              border: `1px solid ${cora.ink}14`,
            }}
          >
            See what's inside
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="flex items-center justify-center gap-2 mb-20"
        >
          <div className="flex gap-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={13} style={{ color: cora.pink }} fill={cora.pink} />
            ))}
          </div>
          <span className="font-body text-xs" style={{ color: cora.muted }}>
            Free · iOS 16.0+ · No ads, ever
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-end justify-center gap-4 sm:gap-7"
        >
          <Phone
            src="/screens/routines.jpg"
            alt="Cora routines screen"
            width={166}
            className="hidden sm:block cora-float"
            style={{ animationDelay: "-2s" }}
          />
          <Phone
            src="/screens/today.jpg"
            alt="Cora today screen with daily rituals"
            width={226}
            className="cora-float"
          />
          <Phone
            src="/screens/challenges.jpg"
            alt="Cora challenges screen"
            width={166}
            className="hidden sm:block cora-float"
            style={{ animationDelay: "-4s" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
