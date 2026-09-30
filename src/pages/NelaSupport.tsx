import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Clock, ChevronDown, Heart, ShieldAlert } from "lucide-react";
import NelaSubNav from "@/components/nela/NelaSubNav";
import NelaFooter from "@/components/nela/NelaFooter";
import { nela, CONTACT_EMAIL } from "@/components/nela/theme";

const faqs = [
  {
    question: "What makes Nela different from other period trackers?",
    answer:
      "Most apps predict a date and stop there. Nela also tells you which phase you're in, what that usually means for your energy and mood, and what tends to help — the food, movement and self-care that suit this particular week. It's the difference between knowing when your period is due and knowing why this week feels the way it does.",
  },
  {
    question: "How accurate are the predictions?",
    answer:
      "To begin with, Nela works from the cycle length you set during setup. Once you've logged two periods it starts learning from your own cycles instead, and gets steadier from there. If your cycles vary a lot, the predictions will too — that's a reflection of your body, not a fault in the app.",
  },
  {
    question: "What do the four phases mean?",
    answer:
      "Your cycle moves through period, follicular, ovulation and luteal phases, and your hormones — along with your energy, appetite and mood — shift with them. Nela shows where you are on a colour-coded bar and explains what's typical for that stretch, so you can plan around it rather than being surprised by it.",
  },
  {
    question: "Can I use Nela to avoid or achieve pregnancy?",
    answer:
      "Nela is not a contraceptive and shouldn't be relied on to prevent pregnancy. Fertility windows shown in the app are estimates based on typical cycles, not a medical assessment. If you're trying to conceive or need contraception, please talk to a doctor or midwife.",
  },
  {
    question: "My cycle is irregular. Is Nela still useful?",
    answer:
      "Yes, though predictions will be looser. Irregular cycles are exactly where the Insights tab earns its keep — logging consistently for a few months shows you the real range of your cycle and which symptoms keep recurring, which is genuinely useful information to bring to a doctor.",
  },
  {
    question: "How do I correct my period dates?",
    answer:
      "Open the Calendar tab and tap Edit Period Dates, then adjust the days. Predictions and phases recalculate straight away — it's worth fixing rather than leaving, since every correction makes the next prediction better.",
  },
  {
    question: "Is the food and self-care guidance medical advice?",
    answer:
      "No. It's general wellbeing guidance based on what commonly helps during each phase, and it isn't tailored to your health conditions, medication or diet. It's a starting point for paying attention to your own patterns, not a substitute for advice from a healthcare professional.",
  },
  {
    question: "Something isn't working properly.",
    answer:
      "Check you're on the latest version, then try force-quitting and reopening the app. If it's still misbehaving, email us and tell us what you were doing when it happened — a screenshot helps enormously.",
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
  const panelId = `nela-faq-${index}`;

  return (
    <div
      className="rounded-[22px] overflow-hidden transition-colors duration-200"
      style={{
        background: nela.card,
        border: `1px solid ${open ? `${nela.accent}3D` : `${nela.ink}0F`}`,
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
          style={{ color: nela.ink, fontWeight: 600 }}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ color: nela.accent, flexShrink: 0, lineHeight: 0 }}
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
              style={{ color: nela.muted }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function NelaSupport() {
  useEffect(() => {
    document.title = "Nela Support";
  }, []);

  return (
    <div style={{ background: nela.bg, minHeight: "100vh" }}>
      <NelaSubNav />

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
            background: `radial-gradient(circle, ${nela.glow}99 0%, transparent 68%)`,
            filter: "blur(70px)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <span
            className="font-body text-[11px] font-semibold cora-label mb-4 block"
            style={{ color: nela.muted }}
          >
            Support
          </span>
          <h1
            className="font-display mb-5"
            style={{
              fontSize: "clamp(2.4rem, 7vw, 4rem)",
              color: nela.ink,
              fontWeight: 500,
              lineHeight: 1.05,
            }}
          >
            How can we{" "}
            <em style={{ color: nela.accent, fontStyle: "italic" }}>
              help?
            </em>
          </h1>
          <p
            className="font-body text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
            style={{ color: nela.muted }}
          >
            Questions about your cycle data, a prediction that looks wrong, or
            an idea for what Nela should do next — there's a real person on the
            other end of every message.
          </p>
        </div>
      </header>

      {/* Contact */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Nela support")}`}
            className="rounded-[26px] p-7 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: nela.card,
              border: `1px solid ${nela.ink}0F`,
              boxShadow: `0 2px 10px ${nela.ink}0A`,
            }}
          >
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: nela.cardTint }}
            >
              <Mail size={19} style={{ color: nela.accent }} />
            </div>
            <h2
              className="font-display text-lg mb-2"
              style={{ color: nela.ink, fontWeight: 600 }}
            >
              Email us
            </h2>
            <p
              className="font-body text-sm leading-relaxed mb-3"
              style={{ color: nela.muted }}
            >
              Tell us what's going on and we'll help you sort it out.
            </p>
            <span
              className="font-body text-sm font-medium"
              style={{ color: nela.accent }}
            >
              {CONTACT_EMAIL} →
            </span>
          </a>

          <div
            className="rounded-[26px] p-7"
            style={{
              background: nela.card,
              border: `1px solid ${nela.ink}0F`,
              boxShadow: `0 2px 10px ${nela.ink}0A`,
            }}
          >
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: nela.cardTint }}
            >
              <Clock size={19} style={{ color: nela.accent }} />
            </div>
            <h2
              className="font-display text-lg mb-2"
              style={{ color: nela.ink, fontWeight: 600 }}
            >
              When we'll reply
            </h2>
            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: nela.muted }}
            >
              Usually within a day, Monday to Friday. We're a small team, so
              occasionally it takes a little longer — but nothing goes unread.
            </p>
          </div>
        </div>
      </section>

      {/* Medical notice */}
      <section className="px-6 pb-20">
        <div
          className="max-w-3xl mx-auto rounded-[26px] p-7 flex gap-4 items-start"
          style={{
            background: nela.cardTint,
            border: `1px solid ${nela.accent}2E`,
          }}
        >
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: nela.card }}
          >
            <ShieldAlert size={19} style={{ color: nela.accent }} />
          </div>
          <div>
            <h2
              className="font-display text-lg mb-2"
              style={{ color: nela.ink, fontWeight: 600 }}
            >
              A note on health advice
            </h2>
            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: nela.muted }}
            >
              Nela is a wellbeing app, not a medical device, and it is not a
              contraceptive. Predictions and phase guidance are estimates based
              on typical cycles. For anything concerning — cycles that suddenly
              change, severe pain, or questions about fertility or contraception
              — please speak to a doctor.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-8 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="font-body text-[11px] font-semibold cora-label mb-4 block"
              style={{ color: nela.muted }}
            >
              Questions
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 2.6rem)",
                color: nela.ink,
                fontWeight: 500,
              }}
            >
              The ones we're{" "}
              <em style={{ color: nela.accent, fontStyle: "italic" }}>
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

          <div
            className="mt-14 rounded-[32px] px-8 py-12 text-center relative overflow-hidden"
            style={{
              background: nela.card,
              border: `1px solid ${nela.accent}26`,
              boxShadow: `0 20px 60px ${nela.ink}0F`,
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 80% 80% at 50% 20%, ${nela.terracotta}14 0%, transparent 70%)`,
              }}
            />
            <div className="relative">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: nela.cardTint }}
              >
                <Heart size={21} style={{ color: nela.accent }} />
              </div>
              <h3
                className="font-display mb-3"
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2rem)",
                  color: nela.ink,
                  fontWeight: 500,
                }}
              >
                Still stuck?
              </h3>
              <p
                className="font-body text-sm mb-7 max-w-sm mx-auto leading-relaxed"
                style={{ color: nela.muted }}
              >
                Ask us anything — no question is too small, and we'd genuinely
                rather hear from you than have you give up on it.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Nela support")}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold text-sm transition-all duration-200 hover:scale-[1.03]"
                style={{
                  background: nela.gradient,
                  color: "#fff",
                  boxShadow: `0 10px 30px ${nela.accent}3D`,
                }}
              >
                <Mail size={16} />
                Email us
              </a>
              <p
                className="font-body text-xs mt-6"
                style={{ color: nela.muted }}
              >
                Or head{" "}
                <Link
                  to="/nela"
                  className="underline underline-offset-2"
                  style={{ color: nela.accent }}
                >
                  back to the Nela site
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <NelaFooter />
    </div>
  );
}
