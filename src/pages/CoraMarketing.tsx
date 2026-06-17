import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  Calendar,
  Target,
  Zap,
  Clock,
  BarChart2,
  Shield,
  Star,
  ChevronDown,
  ArrowRight,
  Play,
} from "lucide-react";
import Footer from "@/components/Footer";

// ── Intersection Observer Hook ──────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Phone Mockup with screenshot ────────────────────────────────────────────
function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto" style={{ width: 220 }}>
      {/* phone shell */}
      <div
        className="relative rounded-[40px] overflow-hidden"
        style={{
          background: "#111",
          border: "2px solid rgba(255,255,255,0.12)",
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.12)",
          aspectRatio: "9/19",
        }}
      >
        {/* notch */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 z-10 rounded-b-xl"
          style={{ width: 80, height: 20, background: "#111" }}
        />
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
      {/* glow */}
      <div
        className="absolute inset-0 rounded-[40px] pointer-events-none"
        style={{
          boxShadow: "0 0 60px rgba(255,60,60,0.25)",
        }}
      />
    </div>
  );
}

// ── Section wrapper ──────────────────────────────────────────────────────────
function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </section>
  );
}

// ── Feature card ────────────────────────────────────────────────────────────
function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="group rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] cursor-default"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(255,60,60,0.4)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 0 30px rgba(255,60,60,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(255,255,255,0.07)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{ background: "rgba(255,60,60,0.12)" }}
      >
        <span style={{ color: "#FF3C3C" }}>{icon}</span>
      </div>
      <h3
        className="font-syne font-700 text-base mb-2"
        style={{ color: "#E8EDF5" }}
      >
        {title}
      </h3>
      <p className="font-space text-sm leading-relaxed" style={{ color: "#6B7A99" }}>
        {desc}
      </p>
    </div>
  );
}


// ── Main Component ───────────────────────────────────────────────────────────
export default function CoraMarketing() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Screenshot URLs (using placeholder gradients via CSS since actual screenshots are device images)
  const screenshots = [
    {
      src: "https://storage.googleapis.com/tempo-image-previews/github%7C140651050-1775059860837-IMG_4899.PNG",
      alt: "Habits screen",
    },
    {
      src: "https://storage.googleapis.com/tempo-image-previews/github%7C140651050-1775059862826-IMG_4900.PNG",
      alt: "Today screen",
    },
    {
      src: "https://storage.googleapis.com/tempo-image-previews/github%7C140651050-1775059864409-IMG_4901.PNG",
      alt: "Tasks screen",
    },
    {
      src: "https://storage.googleapis.com/tempo-image-previews/github%7C140651050-1775059866232-IMG_4903.PNG",
      alt: "Focus screen",
    },
    {
      src: "https://storage.googleapis.com/tempo-image-previews/github%7C140651050-1775059868118-IMG_4905.PNG",
      alt: "Routines screen",
    },
  ];

  return (
    <div
      style={{
        background: "#070910",
        color: "#E8EDF5",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* ── Sticky Nav ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 transition-all duration-300"
        style={{
          height: 64,
          background: scrolled
            ? "rgba(7,9,16,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
      >
        <Link
          to="/"
          className="font-syne font-extrabold text-lg tracking-tight"
          style={{ color: "#E8EDF5" }}
        >
          delexity
        </Link>
        <div className="flex items-center gap-6">
          <a
            href="#features"
            className="font-space text-sm transition-colors hover:text-white"
            style={{ color: "#6B7A99" }}
          >
            Features
          </a>
          <a
            href="#screenshots"
            className="font-space text-sm transition-colors hover:text-white"
            style={{ color: "#6B7A99" }}
          >
            Screenshots
          </a>
          <a
            href="#reviews"
            className="font-space text-sm transition-colors hover:text-white"
            style={{ color: "#6B7A99" }}
          >
            Reviews
          </a>
          <a
            href="#download"
            className="font-space text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #FF3C3C, #C8102E)",
              color: "#fff",
              boxShadow: "0 0 20px rgba(255,60,60,0.3)",
            }}
          >
            Download
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: "100vh", paddingTop: 80 }}
      >
        {/* mesh gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,60,60,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 80% 80%, rgba(139,111,255,0.08) 0%, transparent 60%)",
          }}
        />

        {/* badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 font-space text-xs font-medium animate-fade-in"
          style={{
            background: "rgba(255,60,60,0.1)",
            border: "1px solid rgba(255,60,60,0.25)",
            color: "#FF7A7A",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#FF3C3C" }}
          />
          Now on the App Store
        </div>

        {/* headline */}
        <h1
          className="font-syne font-extrabold leading-none mb-4 px-4"
          style={{ fontSize: "clamp(3rem, 9vw, 7rem)", color: "#E8EDF5" }}
        >
          Own Your
          <br />
          <span style={{ color: "#FF3C3C" }}>Day.</span>
        </h1>

        <p
          className="font-space max-w-xl mx-auto mb-10 px-6 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: "#6B7A99" }}
        >
          Cora is the all-in-one productivity app that unifies your tasks, habits,
          routines, and focus sessions — so you can stop planning and start doing.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 px-6">
          <a
            href="#download"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full font-space font-semibold text-sm transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #FF3C3C, #C8102E)",
              color: "#fff",
              boxShadow: "0 0 30px rgba(255,60,60,0.35)",
            }}
          >
            <Play size={15} fill="white" />
            Get Cora Free
          </a>
          <a
            href="#screenshots"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full font-space text-sm transition-all duration-200 hover:bg-white/5"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#E8EDF5",
            }}
          >
            See it in action
            <ChevronDown size={15} />
          </a>
        </div>

        {/* Hero phones */}
        <div className="relative flex items-end justify-center gap-4 px-6" style={{ maxWidth: 900, margin: "0 auto" }}>
          {/* side phones */}
          <div className="hidden md:block opacity-60 scale-90 mb-4">
            <PhoneMockup src={screenshots[4].src} alt={screenshots[4].alt} />
          </div>
          {/* center phone */}
          <div className="relative z-10 scale-110">
            <PhoneMockup src={screenshots[1].src} alt={screenshots[1].alt} />
          </div>
          {/* side phones */}
          <div className="hidden md:block opacity-60 scale-90 mb-4">
            <PhoneMockup src={screenshots[2].src} alt={screenshots[2].alt} />
          </div>
        </div>

        {/* stats bar */}
        <div
          className="flex flex-wrap justify-center gap-8 mt-16 px-6 pb-16"
        >
          {[
            { value: "Free", label: "To Download" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="font-syne font-extrabold text-2xl"
                style={{ color: "#FF3C3C" }}
              >
                {s.value}
              </p>
              <p
                className="font-space text-xs mt-0.5"
                style={{ color: "#6B7A99" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <Section id="features" className="py-32 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="mb-16">
          <p
            className="font-mono text-xs mb-3 tracking-widest uppercase"
            style={{ color: "#FF3C3C", fontFamily: "'JetBrains Mono', monospace" }}
          >
            Everything you need
          </p>
          <h2
            className="font-syne font-extrabold text-4xl lg:text-5xl"
            style={{ color: "#E8EDF5" }}
          >
            Built for how you
            <br />
            actually work.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard
            icon={<CheckCircle size={20} />}
            title="Smart Task Management"
            desc="Organize tasks into custom lists. Prioritize, tag, and complete with a single tap. Your inbox, finally under control."
          />
          <FeatureCard
            icon={<Target size={20} />}
            title="Daily Habit Tracking"
            desc="Build streaks, set targets, and visualize progress. Wake up early. Hit the gym. Journal. Make it stick."
          />
          <FeatureCard
            icon={<Calendar size={20} />}
            title="Today's Timeline"
            desc="A visual daily planner that maps your schedule, habits, and tasks onto a unified calendar timeline."
          />
          <FeatureCard
            icon={<Zap size={20} />}
            title="Routines & Sequences"
            desc="Chain steps into routines — Morning, Study, Bedtime. Track each step, set durations, and run them on demand."
          />
          <FeatureCard
            icon={<Clock size={20} />}
            title="Deep Focus Sessions"
            desc="Pomodoro-style focus timer with ambient sounds — Fireplace, White Noise, Lo-Fi Chill. Stay in the zone."
          />
          <FeatureCard
            icon={<BarChart2 size={20} />}
            title="Progress Insights"
            desc="Weekly summaries, streaks, and completion rates give you a clear picture of your growth over time."
          />
          <FeatureCard
            icon={<Shield size={20} />}
            title="Private by Design"
            desc="Your data stays on your device. No ads, no tracking, no selling your habits to third parties. Ever."
          />
          <FeatureCard
            icon={<Star size={20} />}
            title="Beautiful Dark UI"
            desc="A dark-first design that's easy on the eyes at any hour. Clean typography, bold color accents, zero clutter."
          />
          <FeatureCard
            icon={<ArrowRight size={20} />}
            title="Frictionless Capture"
            desc="Add tasks, habits, or focus sessions in seconds. Cora gets out of your way so you can get into yours."
          />
        </div>
      </Section>

      {/* ── Screenshots ── */}
      <Section
        id="screenshots"
        className="py-32 overflow-hidden"
      >
        <div className="px-6 lg:px-16 max-w-7xl mx-auto mb-16">
          <p
            className="font-mono text-xs mb-3 tracking-widest uppercase"
            style={{ color: "#FF3C3C", fontFamily: "'JetBrains Mono', monospace" }}
          >
            In the wild
          </p>
          <h2
            className="font-syne font-extrabold text-4xl lg:text-5xl"
            style={{ color: "#E8EDF5" }}
          >
            Every screen,
            <br />
            designed to focus.
          </h2>
        </div>

        {/* screenshot grid */}
        <div className="flex gap-6 px-6 lg:px-16 overflow-x-auto pb-4 scrollbar-hide" style={{ WebkitOverflowScrolling: "touch" }}>
          {[
            { src: screenshots[1].src, alt: "Today Timeline", label: "Today" },
            { src: screenshots[0].src, alt: "Daily Habits", label: "Habits" },
            { src: screenshots[2].src, alt: "Tasks", label: "Tasks" },
            { src: screenshots[3].src, alt: "Focus Session", label: "Focus" },
            { src: screenshots[4].src, alt: "Routines", label: "Routines" },
          ].map((s) => (
            <div key={s.label} className="flex-shrink-0">
              <div className="mb-3">
                <PhoneMockup src={s.src} alt={s.alt} />
              </div>
              <p
                className="text-center font-space text-sm font-medium"
                style={{ color: "#6B7A99", fontFamily: "'JetBrains Mono', monospace" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── How It Works ── */}
      <Section id="how" className="py-32 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p
              className="font-mono text-xs mb-3 tracking-widest uppercase"
              style={{ color: "#FF3C3C", fontFamily: "'JetBrains Mono', monospace" }}
            >
              How it works
            </p>
            <h2
              className="font-syne font-extrabold text-4xl lg:text-5xl mb-6"
              style={{ color: "#E8EDF5" }}
            >
              Your whole day,
              <br />
              one app.
            </h2>
            <p
              className="font-space text-base leading-relaxed mb-10"
              style={{ color: "#6B7A99" }}
            >
              Cora isn't just a to-do list. It's a complete operating system for
              your day — weaving together tasks, habits, routines, and deep work
              into one cohesive flow.
            </p>

            {/* steps */}
            <div className="space-y-8 relative">
              {/* connecting line */}
              <div
                className="absolute left-5 top-6 bottom-6 w-px"
                style={{ background: "rgba(255,60,60,0.15)" }}
              />
              {[
                {
                  n: "01",
                  title: "Capture",
                  desc: "Quickly add tasks, set habits, and plan your routines.",
                },
                {
                  n: "02",
                  title: "Schedule",
                  desc: "Your Today timeline maps everything onto a visual calendar.",
                },
                {
                  n: "03",
                  title: "Execute",
                  desc: "Start focus sessions, run routines, check off habits.",
                },
                {
                  n: "04",
                  title: "Reflect",
                  desc: "Review streaks and progress to stay consistently motivated.",
                },
              ].map((step) => (
                <div key={step.n} className="flex gap-6 items-start relative">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                    style={{
                      background: "#070910",
                      border: "1px solid rgba(255,60,60,0.4)",
                    }}
                  >
                    <span
                      style={{
                        color: "#FF3C3C",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        fontWeight: 700,
                      }}
                    >
                      {step.n}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="font-syne font-bold text-lg mb-1"
                      style={{ color: "#E8EDF5" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="font-space text-sm leading-relaxed"
                      style={{ color: "#6B7A99" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* large phone */}
          <div className="flex justify-center lg:justify-end">
            <div style={{ transform: "scale(1.3)" }}>
              <PhoneMockup src={screenshots[1].src} alt="Today timeline" />
            </div>
          </div>
        </div>
      </Section>

      {/* ── Download CTA ── */}
      <Section
        id="download"
        className="py-32 px-6 lg:px-16 mx-auto text-center max-w-3xl"
      >
        <div
          className="rounded-3xl p-16 relative overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,60,60,0.2)",
          }}
        >
          {/* glow bg */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(255,60,60,0.07) 0%, transparent 70%)",
            }}
          />
          <p
            className="font-mono text-xs mb-4 tracking-widest uppercase"
            style={{ color: "#FF7A7A", fontFamily: "'JetBrains Mono', monospace" }}
          >
            Download Now
          </p>
          <h2
            className="font-syne font-extrabold mb-4"
            style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", color: "#E8EDF5" }}
          >
            Start owning your day.
          </h2>
          <p
            className="font-space mb-10 leading-relaxed"
            style={{ color: "#6B7A99", fontSize: "1.05rem" }}
          >
            Cora is free to download on the App Store. No ads, no hidden fees,
            just pure productivity.
          </p>

          {/* App Store button */}
          <a
            href="https://apps.apple.com/gb/app/cora-daily-habit-tracker/id6759983237"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-space font-semibold transition-all duration-200 hover:scale-105 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #FF3C3C, #C8102E)",
              color: "#fff",
              boxShadow: "0 0 40px rgba(255,60,60,0.3)",
              fontSize: "1rem",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on the App Store
          </a>

          <p
            className="font-space text-xs mt-4"
            style={{ color: "#6B7A99" }}
          >
            iOS 16.0+ · iPhone & iPad · Free
          </p>
        </div>
      </Section>

      {/* ── Footer note ── */}
      <div className="text-center pb-4 px-6">
        <Link
          to="/cora-support"
          className="font-space text-xs transition-colors hover:text-white"
          style={{ color: "#6B7A99" }}
        >
          Support & FAQ for Cora →
        </Link>
      </div>

      <Footer />
    </div>
  );
}
