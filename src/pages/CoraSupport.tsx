import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  MessageSquare,
  Clock,
  Smartphone,
  Star,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Zap,
  Shield,
  RefreshCw,
} from "lucide-react";
import Footer from "@/components/Footer";
import { useState } from "react";

const faqs = [
  {
    question: "How do I get started with Cora?",
    answer:
      "After downloading Cora from the App Store, open the app and follow the quick onboarding flow. Cora will guide you through setting up your workspace, connecting your tasks, and personalising your productivity preferences in just a few minutes.",
  },
  {
    question: "Is Cora free to use?",
    answer:
      "Cora offers a free tier with core productivity features. A premium plan is available for power users who want advanced organisation tools, priority sync, and additional integrations. You can upgrade at any time from within the app.",
  },
  {
    question: "How do I sync my data across devices?",
    answer:
      "Cora syncs automatically using your Apple ID. Simply sign in with the same account on all your devices and your tasks, notes, and settings will stay up to date in real time.",
  },
  {
    question: "I forgot my password. How do I reset it?",
    answer:
      "Tap 'Forgot Password' on the sign-in screen and enter your email address. You'll receive a reset link within a few minutes. If you don't see it, check your spam folder or contact us at info@delexity.com.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "Subscriptions are managed through your Apple ID. Go to Settings → Apple ID → Subscriptions on your iPhone, find Cora, and tap Cancel Subscription. Your access will remain active until the end of the current billing period.",
  },
  {
    question: "My data isn't syncing. What should I do?",
    answer:
      "First, check your internet connection and ensure you're running the latest version of Cora. Try signing out and back in, or force-quitting and reopening the app. If the issue persists, reach out to us at info@delexity.com and we'll help you resolve it.",
  },
  {
    question: "Can I export my data from Cora?",
    answer:
      "Yes. You can export your tasks and notes from the Settings menu inside the app. We support CSV and plain text formats. If you need assistance with a bulk export, contact us directly.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "To delete your account and all associated data, go to Settings → Account → Delete Account within the app. This action is irreversible. If you need help, email info@delexity.com and we'll process your request within 30 days.",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Absolutely. Cora encrypts all data in transit and at rest. We do not sell your personal data to third parties. For full details, please review our Privacy Policy linked in the footer below.",
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

const features = [
  {
    icon: Zap,
    title: "Smart Task Management",
    description: "Capture, prioritise, and complete tasks with intelligent suggestions tailored to your workflow.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Sync",
    description: "Your data stays in sync across all your Apple devices, instantly and automatically.",
  },
  {
    icon: Shield,
    title: "Private by Design",
    description: "End-to-end encryption keeps your productivity data private. We never sell your information.",
  },
];

export default function CoraSupport() {
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
          Back to Delexity
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 lg:px-12 pt-16 pb-20">
        {/* App badge */}
        <div className="flex items-center gap-3 mb-8">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(62,207,207,0.15) 0%, rgba(139,111,255,0.15) 100%)",
              border: "1px solid rgba(62,207,207,0.25)",
            }}
          >
            <Smartphone size={26} style={{ color: "#3ECFCF" }} />
          </div>
          <div>
            <p className="font-mono-jet text-xs tracking-widest uppercase" style={{ color: "#3ECFCF" }}>
              iOS App
            </p>
            <p className="font-syne font-bold text-xl" style={{ color: "#E8EDF5" }}>
              Cora
            </p>
          </div>
        </div>

        <h1
          className="font-syne font-extrabold text-5xl md:text-6xl leading-none tracking-tight mb-6"
          style={{ color: "#E8EDF5" }}
        >
          Cora Support
        </h1>
        <p
          className="font-space text-lg max-w-xl leading-relaxed"
          style={{ color: "#6B7A99" }}
        >
          We're always happy to help. Whether you have a question, run into an
          issue, or want to share feedback — reach out and we'll get back to
          you promptly.
        </p>
      </header>

      {/* App Features snapshot */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                style={{
                  background: "rgba(62,207,207,0.08)",
                  border: "1px solid rgba(62,207,207,0.15)",
                }}
              >
                <Icon size={16} style={{ color: "#3ECFCF" }} />
              </div>
              <h3
                className="font-syne font-semibold text-sm mb-2"
                style={{ color: "#E8EDF5" }}
              >
                {title}
              </h3>
              <p
                className="font-space text-xs leading-relaxed"
                style={{ color: "#6B7A99" }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Channels */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12 pb-24">
        <h2
          className="font-syne font-bold text-xl mb-8"
          style={{ color: "#E8EDF5" }}
        >
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Email */}
          <div
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
              <Mail size={18} style={{ color: "#3ECFCF" }} />
            </div>
            <h3
              className="font-syne font-semibold text-base mb-2"
              style={{ color: "#E8EDF5" }}
            >
              Email Support
            </h3>
            <p
              className="font-space text-sm leading-relaxed mb-4"
              style={{ color: "#6B7A99" }}
            >
              Send us a message and we'll respond within one business day.
            </p>
            <a
              href="mailto:info@delexity.com"
              className="font-mono-jet text-xs tracking-wide transition-colors duration-200"
              style={{ color: "#3ECFCF" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#4AF0E4")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#3ECFCF")
              }
            >
              info@delexity.com →
            </a>
          </div>

          {/* Feedback */}
          <div
            className="rounded-xl p-6"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
              style={{
                background: "rgba(139,111,255,0.08)",
                border: "1px solid rgba(139,111,255,0.15)",
              }}
            >
              <Star size={18} style={{ color: "#8B6FFF" }} />
            </div>
            <h3
              className="font-syne font-semibold text-base mb-2"
              style={{ color: "#E8EDF5" }}
            >
              Share Feedback
            </h3>
            <p
              className="font-space text-sm leading-relaxed mb-4"
              style={{ color: "#6B7A99" }}
            >
              We love hearing from our users. Feature ideas, bug reports, or
              just thoughts — we read everything.
            </p>
            <a
              href="mailto:info@delexity.com?subject=Cora%20Feedback"
              className="font-mono-jet text-xs tracking-wide transition-colors duration-200"
              style={{ color: "#8B6FFF" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#A990FF")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#8B6FFF")
              }
            >
              Send Feedback →
            </a>
          </div>

          {/* Response time */}
          <div
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
              <Clock size={18} style={{ color: "#3ECFCF" }} />
            </div>
            <h3
              className="font-syne font-semibold text-base mb-2"
              style={{ color: "#E8EDF5" }}
            >
              Response Time
            </h3>
            <p
              className="font-space text-sm leading-relaxed"
              style={{ color: "#6B7A99" }}
            >
              We typically reply within 24 hours on business days (Mon–Fri). We
              aim to respond to all messages as quickly as possible.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="pb-32"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-12 pt-20">
          <div className="flex items-center gap-3 mb-10">
            <HelpCircle size={18} style={{ color: "#3ECFCF" }} />
            <h2
              className="font-syne font-bold text-xl"
              style={{ color: "#E8EDF5" }}
            >
              Frequently Asked Questions
            </h2>
          </div>
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
            <div className="flex justify-center mb-4">
              <MessageSquare size={28} style={{ color: "#3ECFCF" }} />
            </div>
            <h3
              className="font-syne font-extrabold text-2xl mb-3"
              style={{ color: "#E8EDF5" }}
            >
              Still have questions?
            </h3>
            <p
              className="font-space text-sm mb-6 max-w-sm mx-auto"
              style={{ color: "#6B7A99" }}
            >
              We're always happy to help — and even happier to hear your
              feedback on Cora. Drop us a line any time.
            </p>
            <a
              href="mailto:info@delexity.com"
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
              info@delexity.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
