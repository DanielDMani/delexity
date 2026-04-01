import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MessageSquare, Clock, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import Footer from "@/components/Footer";
import { useState } from "react";

const faqs = [
  {
    question: "How do I start a project with Delexity?",
    answer:
      "Simply reach out via our contact form on the homepage or email us at hello@delexity.com. We'll schedule a discovery call to understand your needs, timeline, and goals — then put together a tailored proposal.",
  },
  {
    question: "What types of projects do you take on?",
    answer:
      "We work on web apps, mobile apps, SaaS products, marketing websites, UI/UX redesigns, and custom software builds. We're comfortable with early-stage ideas as well as established products that need a technical overhaul.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by scope. A focused marketing website typically takes 3–5 weeks. A full-featured web app can range from 8–20 weeks depending on complexity. We'll give you a realistic estimate during our discovery phase.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We offer retainer-based maintenance and support packages that cover bug fixes, performance monitoring, feature updates, and priority response. Ask about our post-launch plans during your onboarding call.",
  },
  {
    question: "What does your design process look like?",
    answer:
      "We follow a Discovery → Design → Build → Launch process. During the Design phase, we deliver wireframes and high-fidelity mockups in Figma before a single line of code is written. You'll have full visibility and sign-off at every stage.",
  },
  {
    question: "Can I get a cost estimate before committing?",
    answer:
      "Absolutely. After a brief discovery call we put together a scoped proposal with a fixed-price or time-and-materials estimate. There's no obligation until you sign off on the proposal.",
  },
  {
    question: "Do you work with clients outside your time zone?",
    answer:
      "We work with clients across three continents. We're async-first with structured weekly check-ins and we use shared project boards so you always know what's in progress, regardless of time zone.",
  },
  {
    question: "Who owns the code and design assets after delivery?",
    answer:
      "You do. On project completion, full intellectual property — code, design files, and all assets — transfers to you. We retain no licensing claims on deliverables.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-xl transition-all duration-200 cursor-pointer"
      style={{
        background: open ? "rgba(62,207,207,0.04)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${open ? "rgba(62,207,207,0.2)" : "rgba(255,255,255,0.07)"}`,
      }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-4 px-6 py-5">
        <span
          className="font-syne font-semibold text-base leading-snug"
          style={{ color: "#E8EDF5" }}
        >
          {question}
        </span>
        <span style={{ color: "#3ECFCF", flexShrink: 0 }}>
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </div>
      {open && (
        <div className="px-6 pb-5">
          <p className="font-space text-sm leading-relaxed" style={{ color: "#6B7A99" }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

const channels = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a message and we'll respond within one business day.",
    cta: "hello@delexity.com",
    href: "mailto:hello@delexity.com",
  },
  {
    icon: MessageSquare,
    title: "Start a Project",
    description: "Ready to build something? Tell us about your idea.",
    cta: "Get in touch",
    href: "/#contact",
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "We typically reply within 24 hours on business days (Mon–Fri).",
    cta: null,
    href: null,
  },
  {
    icon: BookOpen,
    title: "Privacy Concerns",
    description: "Questions about how we handle your data? We're happy to help.",
    cta: "privacy@delexity.com",
    href: "mailto:privacy@delexity.com",
  },
];

export default function Support() {
  return (
    <div style={{ background: "#0A0D14", minHeight: "100vh" }}>
      {/* Back link */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono-jet text-xs tracking-widest uppercase transition-colors duration-200"
          style={{ color: "#6B7A99" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#3ECFCF")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#6B7A99")}
        >
          <ArrowLeft size={13} />
          Back to Home
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 lg:px-12 pt-16 pb-20">
        <p
          className="font-mono-jet text-xs tracking-widest uppercase mb-4"
          style={{ color: "#3ECFCF" }}
        >
          Support
        </p>
        <h1
          className="font-syne font-extrabold text-5xl md:text-6xl leading-none tracking-tight mb-6"
          style={{ color: "#E8EDF5" }}
        >
          How can we help?
        </h1>
        <p
          className="font-space text-lg max-w-xl leading-relaxed"
          style={{ color: "#6B7A99" }}
        >
          Find answers to common questions below, or reach out directly — we're
          a small team and we actually read every message.
        </p>
      </header>

      {/* Contact Channels */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12 pb-24">
        <h2
          className="font-syne font-bold text-xl mb-8"
          style={{ color: "#E8EDF5" }}
        >
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {channels.map(({ icon: Icon, title, description, cta, href }) => (
            <div
              key={title}
              className="rounded-xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{
                  background: "rgba(62,207,207,0.08)",
                  border: "1px solid rgba(62,207,207,0.15)",
                }}
              >
                <Icon size={18} style={{ color: "#3ECFCF" }} />
              </div>
              <h3
                className="font-syne font-semibold text-base mb-2"
                style={{ color: "#E8EDF5" }}
              >
                {title}
              </h3>
              <p
                className="font-space text-sm leading-relaxed mb-4"
                style={{ color: "#6B7A99" }}
              >
                {description}
              </p>
              {cta && href && (
                <a
                  href={href}
                  className="font-mono-jet text-xs tracking-wide transition-colors duration-200"
                  style={{ color: "#3ECFCF" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#4AF0E4")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#3ECFCF")
                  }
                >
                  {cta} →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        className="pb-32"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-20">
          <h2
            className="font-syne font-bold text-xl mb-10"
            style={{ color: "#E8EDF5" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Still need help? */}
          <div
            className="mt-16 rounded-2xl px-8 py-10 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(62,207,207,0.06) 0%, rgba(139,111,255,0.06) 100%)",
              border: "1px solid rgba(62,207,207,0.12)",
            }}
          >
            <h3
              className="font-syne font-extrabold text-2xl mb-3"
              style={{ color: "#E8EDF5" }}
            >
              Still have questions?
            </h3>
            <p
              className="font-space text-sm mb-6"
              style={{ color: "#6B7A99" }}
            >
              We're happy to help. Drop us a line and we'll get back to you
              within one business day.
            </p>
            <a
              href="mailto:hello@delexity.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-space font-medium text-sm transition-all duration-200"
              style={{
                background: "#3ECFCF",
                color: "#0A0D14",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background = "#4AF0E4")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background = "#3ECFCF")
              }
            >
              <Mail size={15} />
              hello@delexity.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
