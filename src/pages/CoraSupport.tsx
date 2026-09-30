import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Clock,
  ChevronDown,
  Sunrise,
  Repeat,
  Trophy,
  Heart,
} from "lucide-react";
import CoraSubNav from "@/components/cora/CoraSubNav";
import CoraFooter from "@/components/cora/CoraFooter";
import { cora, CONTACT_EMAIL } from "@/components/cora/theme";

const faqs = [
  {
    question: "I've just downloaded Cora. Where do I start?",
    answer:
      "Start with Today. Add a couple of things you'd genuinely like to do each morning — make your bed, set your intentions, a little skincare — and let them sit on your timeline for a few days. Once that feels natural, add an evening wind down. Cora works best when you build it up slowly rather than filling it in all at once.",
  },
  {
    question: "What's the difference between a habit and a routine?",
    answer:
      "A habit is one thing you're repeating — meditate, drink water, walk 10k — and it builds a streak over time. A routine is a sequence of steps you move through together, like a Morning Routine or an Evening Wind Down, with a duration and a play button you can follow along with. Habits can live inside your routines, so you're never tracking the same thing twice.",
  },
  {
    question: "How do challenges work?",
    answer:
      "Open Challenges and pick one that appeals — The 7-Day Reset, Dopamine Detox, Summer Glow Up. Each one gives you a daily checklist sorted into morning, afternoon, and evening, so you always know the next small thing to do. You can see how many days it runs and how demanding it is before you commit.",
  },
  {
    question: "Is Cora free?",
    answer:
      "Yes — Cora is free to download from the App Store, and there are no ads anywhere in the app.",
  },
  {
    question: "Can I use Cora on my iPad?",
    answer:
      "Yes. Cora runs on iPhone and iPad, and needs iOS 16.0 or later.",
  },
  {
    question: "Will I lose my streak if I miss a day?",
    answer:
      "Streaks are there to encourage you, not to punish you. If you miss a day, pick it back up the next morning — one skipped day doesn't undo the weeks behind it. Consistency over a month matters far more than a perfect run.",
  },
  {
    question: "Something isn't working properly.",
    answer:
      "First, check you're on the latest version of Cora from the App Store, then try force-quitting and reopening the app. If it's still misbehaving, email us and tell us what you were doing when it happened — a screenshot helps enormously.",
  },
  {
    question: "How do I delete my account and my data?",
    answer:
      "Go to Settings → Account → Delete Account inside the app. This removes your account and everything in it, and it can't be undone. If you'd rather we handled it for you, email us and we'll take care of it.",
  },
  {
    question: "Is my data private?",
    answer:
      "Your data is encrypted, and we don't sell your personal information to anyone. The full details are in our Privacy Policy, linked at the bottom of this page.",
  },
];

const highlights = [
  {
    icon: Sunrise,
    title: "Rituals & habits",
    description:
      "Your morning, afternoon, and evening laid out gently, with streaks that build as you go.",
  },
  {
    icon: Repeat,
    title: "Routines",
    description:
      "Sequences you can schedule, then press play and follow along, step by step.",
  },
  {
    icon: Trophy,
    title: "Challenges",
    description:
      "Guided multi-day resets with a daily checklist, so momentum doesn't rely on willpower.",
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;

  return (
    <div
      className="rounded-[22px] overflow-hidden transition-colors duration-200"
      style={{
        background: cora.card,
        border: `1px solid ${open ? `${cora.pink}3D` : `${cora.ink}0F`}`,
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span
          className="font-display text-base sm:text-lg leading-snug"
          style={{ color: cora.ink, fontWeight: 600 }}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ color: cora.pink, flexShrink: 0, lineHeight: 0 }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="font-body text-sm leading-relaxed px-6 pb-6"
              style={{ color: cora.muted }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CoraSupport() {
  return (
    <div style={{ background: cora.bg, minHeight: "100vh" }}>
      <CoraSubNav />

      {/* Header */}
      <header className="relative overflow-hidden px-6 pt-20 pb-16">
        <div
          className="absolute pointer-events-none cora-blob"
          style={{
            top: "-30%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 720,
            height: 520,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${cora.coral}26 0%, transparent 68%)`,
            filter: "blur(70px)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <span
            className="font-body text-[11px] font-semibold cora-label mb-4 block"
            style={{ color: cora.muted }}
          >
            Support
          </span>
          <h1
            className="font-display mb-5"
            style={{
              fontSize: "clamp(2.4rem, 7vw, 4rem)",
              color: cora.ink,
              fontWeight: 500,
              lineHeight: 1.05,
            }}
          >
            How can we{" "}
            <em style={{ color: cora.pink, fontStyle: "italic" }}>help?</em>
          </h1>
          <p
            className="font-body text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
            style={{ color: cora.muted }}
          >
            Stuck on something, found a bug, or just want to tell us what Cora
            should do next? There's a real person on the other end of every
            message.
          </p>
        </div>
      </header>

      {/* Contact cards */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Cora support")}`}
            className="cora-card rounded-[26px] p-7 transition-all duration-300 hover:-translate-y-1"
          >
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: cora.cardTint }}
            >
              <Mail size={19} style={{ color: cora.pink }} />
            </div>
            <h2
              className="font-display text-lg mb-2"
              style={{ color: cora.ink, fontWeight: 600 }}
            >
              Email us
            </h2>
            <p
              className="font-body text-sm leading-relaxed mb-3"
              style={{ color: cora.muted }}
            >
              Tell us what's going on and we'll help you sort it out.
            </p>
            <span
              className="font-body text-sm font-medium"
              style={{ color: cora.pink }}
            >
              {CONTACT_EMAIL} →
            </span>
          </a>

          <div className="cora-card rounded-[26px] p-7">
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: cora.cardTint }}
            >
              <Clock size={19} style={{ color: cora.pink }} />
            </div>
            <h2
              className="font-display text-lg mb-2"
              style={{ color: cora.ink, fontWeight: 600 }}
            >
              When we'll reply
            </h2>
            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: cora.muted }}
            >
              Usually within a day, Monday to Friday. We're a small team, so
              occasionally it takes a little longer — but nothing goes unread.
            </p>
          </div>
        </div>
      </section>

      {/* What's in the app */}
      <section className="px-6 pb-20" style={{ background: cora.bgDeep }}>
        <div className="max-w-5xl mx-auto pt-20">
          <div className="text-center mb-12">
            <span
              className="font-body text-[11px] font-semibold cora-label mb-4 block"
              style={{ color: cora.muted }}
            >
              New to Cora?
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                color: cora.ink,
                fontWeight: 500,
              }}
            >
              Here's how it{" "}
              <em style={{ color: cora.pink, fontStyle: "italic" }}>
                fits together
              </em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="cora-card rounded-[26px] p-6">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: cora.cardTint }}
                >
                  <Icon size={19} style={{ color: cora.pink }} />
                </div>
                <h3
                  className="font-display text-base mb-2"
                  style={{ color: cora.ink, fontWeight: 600 }}
                >
                  {title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: cora.muted }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="font-body text-[11px] font-semibold cora-label mb-4 block"
              style={{ color: cora.muted }}
            >
              Questions
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                color: cora.ink,
                fontWeight: 500,
              }}
            >
              The ones we're{" "}
              <em style={{ color: cora.pink, fontStyle: "italic" }}>
                asked most
              </em>
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={i}
              />
            ))}
          </div>

          {/* Still stuck */}
          <div
            className="mt-14 rounded-[32px] px-8 py-12 text-center relative overflow-hidden"
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
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: cora.cardTint }}
              >
                <Heart size={21} style={{ color: cora.pink }} />
              </div>
              <h3
                className="font-display mb-3"
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2rem)",
                  color: cora.ink,
                  fontWeight: 500,
                }}
              >
                Still stuck?
              </h3>
              <p
                className="font-body text-sm mb-7 max-w-sm mx-auto leading-relaxed"
                style={{ color: cora.muted }}
              >
                Ask us anything — no question is too small, and we'd genuinely
                rather hear from you than have you give up on it.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Cora support")}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold text-sm transition-all duration-200 hover:scale-[1.03]"
                style={{
                  background: cora.gradient,
                  color: "#fff",
                  boxShadow: `0 10px 30px ${cora.pink}3D`,
                }}
              >
                <Mail size={16} />
                Email us
              </a>
              <p
                className="font-body text-xs mt-6"
                style={{ color: cora.muted }}
              >
                Or head{" "}
                <Link
                  to="/cora"
                  className="underline underline-offset-2"
                  style={{ color: cora.pink }}
                >
                  back to the Cora site
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <CoraFooter />
    </div>
  );
}
