import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import NelaCTA from "./NelaCTA";
import NelaWordmark from "./NelaWordmark";
import { nela, NELA_APP_STORE_URL } from "./theme";

export default function NelaDownload() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="download"
      ref={ref}
      className="relative py-28 px-6"
      style={{ background: nela.bg }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto rounded-[32px] p-10 sm:p-16 text-center overflow-hidden"
        style={{
          background: nela.card,
          border: `1px solid ${nela.accent}26`,
          boxShadow: `0 20px 60px ${nela.ink}0F`,
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 80% at 50% 20%, ${nela.terracotta}1A 0%, transparent 70%)`,
          }}
        />

        <div className="relative">
          <div className="flex justify-center mb-7">
            <NelaWordmark size={56} />
          </div>
          <h2
            className="font-display mb-4"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 3.1rem)",
              color: nela.ink,
              fontWeight: 500,
            }}
          >
            Start working{" "}
            <em style={{ color: nela.accent, fontStyle: "italic" }}>
              with your body
            </em>
          </h2>
          <p
            className="font-body mb-9 leading-relaxed max-w-md mx-auto"
            style={{ color: nela.muted, fontSize: "1.02rem" }}
          >
            {NELA_APP_STORE_URL
              ? "Download Nela and see which phase you're in today."
              : "Nela is on its way to the App Store. We'll let you know the moment it lands."}
          </p>

          <div className="flex justify-center">
            <NelaCTA />
          </div>

          <Link
            to="/nela-support"
            className="font-body text-sm font-medium inline-block mt-8 transition-opacity hover:opacity-70"
            style={{ color: nela.accent }}
          >
            Questions? Support &amp; FAQ →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
