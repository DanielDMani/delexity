import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import AppShowcase, { type AppEntry } from "@/components/site/AppShowcase";
import { site, CONTACT_EMAIL } from "@/components/site/theme";
import { cora, APP_STORE_URL as CORA_APP_STORE } from "@/components/cora/theme";
import { nela, NELA_APP_STORE_URL } from "@/components/nela/theme";

const apps: AppEntry[] = [
  {
    name: "Cora",
    tagline: "Rituals, habits, routines & challenges",
    blurb:
      "A gentler structure for your day. Cora lays your morning, afternoon, and evening out as one timeline, weaves your habits through it, and gives you guided challenges when you need momentum.",
    features: [
      "Daily rituals on a single timeline",
      "Habit streaks that build quietly",
      "Routines you press play on and follow",
      "Guided multi-day challenges",
    ],
    screenshot: "/screens/today.jpg",
    screenshotAlt: "Cora today screen showing daily rituals",
    href: "/cora",
    accent: cora.pink,
    accentText: "#A33C5E",
    tint: cora.bg,
    status: { label: "On the App Store", live: true },
    appStoreUrl: CORA_APP_STORE,
  },
  {
    name: "Nela",
    tagline: "Period tracker & cycle guidance",
    blurb:
      "More than a period tracker. Nela tells you which phase you're in, what that means for your energy and mood, and how to eat, move, and rest to work with your body instead of against it.",
    features: [
      "Know your phase, not just your dates",
      "Food, movement & self-care that fit the week",
      "A calendar that explains itself",
      "Patterns learned from your own cycles",
    ],
    screenshot: "/screens/nela/today.jpg",
    screenshotAlt: "Nela today screen showing days until next period",
    href: "/nela",
    accent: nela.terracotta,
    accentText: nela.accent,
    tint: "#FDE7D9",
    status: {
      label: NELA_APP_STORE_URL ? "On the App Store" : "Coming soon",
      live: Boolean(NELA_APP_STORE_URL),
    },
    appStoreUrl: NELA_APP_STORE_URL,
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-40 pb-24">
      <div
        className="absolute pointer-events-none cora-blob"
        style={{
          top: "-20%",
          left: "8%",
          width: 460,
          height: 460,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${cora.pink}26 0%, transparent 68%)`,
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute pointer-events-none cora-blob"
        style={{
          top: "-10%",
          right: "6%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${nela.terracotta}26 0%, transparent 68%)`,
          filter: "blur(70px)",
          animationDelay: "-7s",
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-body text-[11px] font-semibold cora-label block mb-6"
          style={{ color: site.muted }}
        >
          Delexity · Two apps
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-display leading-[1.04]"
          style={{
            fontSize: "clamp(2.6rem, 7.5vw, 5rem)",
            color: site.ink,
            fontWeight: 500,
          }}
        >
          Calm apps for
          <br />
          <em
            style={{
              fontStyle: "italic",
              background: site.gradient,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            everyday life
          </em>
        </motion.h1>
      </div>
    </section>
  );
}

function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="px-6 py-24"
      style={{ background: site.bgDeep }}
    >
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <span
          className="font-body text-[11px] font-semibold cora-label mb-4 block"
          style={{ color: site.muted }}
        >
          Say hello
        </span>
        <h2
          className="font-display mb-4"
          style={{
            fontSize: "clamp(1.9rem, 5vw, 2.9rem)",
            color: site.ink,
            fontWeight: 500,
          }}
        >
          Questions, ideas, or feedback?
        </h2>
        <p
          className="font-body leading-relaxed mb-9 max-w-md mx-auto"
          style={{ color: site.muted }}
        >
          We're a small team and we read everything. Whether it's about Cora,
          Nela, or something we haven't built yet — get in touch.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold text-sm transition-transform duration-200 hover:scale-[1.03]"
          style={{
            background: site.gradient,
            color: "#fff",
            boxShadow: `0 10px 30px ${site.ink}1F`,
          }}
        >
          {CONTACT_EMAIL}
        </a>
      </motion.div>
    </section>
  );
}

function Home() {
  useEffect(() => {
    document.title = "Delexity — Calm apps for everyday life";
  }, []);

  return (
    <div className="min-h-screen" style={{ background: site.bg, color: site.ink }}>
      <SiteNav />
      <Hero />

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          {apps.map((app, i) => (
            <AppShowcase key={app.name} app={app} flipped={i % 2 === 1} />
          ))}
        </div>
      </section>

      <Contact />
      <SiteFooter />
    </div>
  );
}

export default Home;
