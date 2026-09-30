import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import AppStoreButton from "./AppStoreButton";
import Wordmark from "./Wordmark";
import { cora, APP_STORE_URL } from "./theme";

export default function CoraDownload() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="download"
      ref={ref}
      className="relative py-28 px-6"
      style={{ background: cora.bg }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto rounded-[32px] p-10 sm:p-16 text-center overflow-hidden"
        style={{
          background: cora.card,
          border: `1px solid ${cora.pink}26`,
          boxShadow: `0 20px 60px ${cora.ink}0F`,
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 80% at 50% 20%, ${cora.coral}1A 0%, transparent 70%)`,
          }}
        />

        <div className="relative">
          <div className="flex justify-center mb-7">
            <Wordmark size={56} />
          </div>
          <h2
            className="font-display mb-4"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 3.1rem)",
              color: cora.ink,
              fontWeight: 500,
            }}
          >
            Start{" "}
            <em style={{ color: cora.pink, fontStyle: "italic" }}>
              owning your day
            </em>
          </h2>
          <p
            className="font-body mb-9 leading-relaxed max-w-md mx-auto"
            style={{ color: cora.muted, fontSize: "1.02rem" }}
          >
            Cora is free on the App Store. No ads, no hidden fees — just a
            calmer, more intentional day.
          </p>

          <div className="flex justify-center">
            <AppStoreButton href={APP_STORE_URL} />
          </div>

          <p className="font-body text-xs mt-5" style={{ color: cora.muted }}>
            iOS 16.0+ · iPhone &amp; iPad · Free
          </p>

          <Link
            to="/cora-support"
            className="font-body text-sm font-medium inline-block mt-8 transition-opacity hover:opacity-70"
            style={{ color: cora.pink }}
          >
            Questions? Support &amp; FAQ →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
