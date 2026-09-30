import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, LifeBuoy, ArrowUpRight } from "lucide-react";
import { cora, CONTACT_EMAIL } from "./theme";

const topics = [
  { id: "feedback", label: "Feedback", subject: "Cora feedback" },
  { id: "idea", label: "Feature idea", subject: "Cora feature idea" },
  { id: "bug", label: "Something's broken", subject: "Cora bug report" },
] as const;

type TopicId = (typeof topics)[number]["id"];

const channels = [
  {
    icon: Mail,
    title: "Email us",
    desc: "The quickest way to reach a real person.",
    action: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Hello from the Cora site")}`,
    external: true,
  },
  {
    icon: LifeBuoy,
    title: "Support & FAQ",
    desc: "Answers to the questions we get most often.",
    action: "Browse help",
    href: "/cora-support",
    external: false,
  },
];

export default function CoraFeedback() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [topic, setTopic] = useState<TopicId>("feedback");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const chosen = topics.find((t) => t.id === topic)!;
  const body = message.trim()
    ? `${message.trim()}\n\n${name.trim() ? `— ${name.trim()}` : ""}`.trim()
    : "";
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    chosen.subject
  )}${body ? `&body=${encodeURIComponent(body)}` : ""}`;

  return (
    <section
      id="feedback"
      ref={ref}
      className="relative py-28 px-6"
      style={{ background: cora.bgDeep }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="font-body text-[11px] font-semibold cora-label mb-4 block"
            style={{ color: cora.muted }}
          >
            Say hello
          </span>
          <h2
            className="font-display mb-4"
            style={{
              fontSize: "clamp(2.1rem, 5vw, 3.2rem)",
              color: cora.ink,
              fontWeight: 500,
            }}
          >
            We'd love to{" "}
            <em style={{ color: cora.pink, fontStyle: "italic" }}>
              hear from you
            </em>
          </h2>
          <p
            className="font-body max-w-lg mx-auto leading-relaxed"
            style={{ color: cora.muted }}
          >
            Cora is made by a small team, and the app gets better because people
            tell us what's missing. Nothing is too small to mention.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Channels */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {channels.map((channel) => {
              const inner = (
                <>
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: cora.cardTint }}
                  >
                    <channel.icon size={19} style={{ color: cora.pink }} />
                  </div>
                  <div className="min-w-0">
                    <h3
                      className="font-display text-lg mb-1"
                      style={{ color: cora.ink, fontWeight: 600 }}
                    >
                      {channel.title}
                    </h3>
                    <p
                      className="font-body text-sm mb-2 leading-relaxed"
                      style={{ color: cora.muted }}
                    >
                      {channel.desc}
                    </p>
                    <span
                      className="font-body text-sm font-medium inline-flex items-center gap-1"
                      style={{ color: cora.pink }}
                    >
                      {channel.action}
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </>
              );

              const className =
                "cora-card rounded-[26px] p-6 flex gap-4 items-start transition-all duration-300 hover:-translate-y-1";

              return channel.external ? (
                <a
                  key={channel.title}
                  href={channel.href}
                  target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={className}
                >
                  {inner}
                </a>
              ) : (
                <Link key={channel.title} to={channel.href} className={className}>
                  {inner}
                </Link>
              );
            })}
          </motion.div>

          {/* Compose */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="cora-card rounded-[26px] p-7 sm:p-8"
          >
            <h3
              className="font-display text-xl mb-1.5"
              style={{ color: cora.ink, fontWeight: 600 }}
            >
              Send us a note
            </h3>
            <p
              className="font-body text-sm mb-6 leading-relaxed"
              style={{ color: cora.muted }}
            >
              Write it here and we'll open it in your email app, ready to send.
            </p>

            {/* Topic */}
            <div className="flex flex-wrap gap-2 mb-5">
              {topics.map((t) => {
                const active = t.id === topic;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTopic(t.id)}
                    className="font-body text-sm px-4 py-2 rounded-full transition-all duration-200"
                    style={{
                      background: active ? cora.pink : cora.cardTint,
                      color: active ? "#fff" : cora.muted,
                      border: `1px solid ${active ? cora.pink : "transparent"}`,
                      fontWeight: active ? 600 : 500,
                    }}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            <label
              className="font-body text-xs font-semibold cora-label block mb-2"
              style={{ color: cora.muted }}
              htmlFor="feedback-message"
            >
              Your message
            </label>
            <textarea
              id="feedback-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              placeholder="What's working, what isn't, or what you'd love Cora to do…"
              className="w-full rounded-2xl px-4 py-3.5 font-body text-sm outline-none transition-colors duration-200 resize-none mb-4"
              style={{
                background: cora.bg,
                color: cora.ink,
                border: `1px solid ${cora.ink}14`,
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = cora.pink)}
              onBlur={(e) => (e.currentTarget.style.borderColor = `${cora.ink}14`)}
            />

            <label
              className="font-body text-xs font-semibold cora-label block mb-2"
              style={{ color: cora.muted }}
              htmlFor="feedback-name"
            >
              Your name <span style={{ textTransform: "none" }}>(optional)</span>
            </label>
            <input
              id="feedback-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="So we know who we're talking to"
              className="w-full rounded-2xl px-4 py-3.5 font-body text-sm outline-none transition-colors duration-200 mb-6"
              style={{
                background: cora.bg,
                color: cora.ink,
                border: `1px solid ${cora.ink}14`,
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = cora.pink)}
              onBlur={(e) => (e.currentTarget.style.borderColor = `${cora.ink}14`)}
            />

            <a
              href={mailto}
              aria-disabled={!message.trim()}
              onClick={(e) => {
                if (!message.trim()) e.preventDefault();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-body font-semibold text-sm transition-all duration-200"
              style={{
                background: message.trim() ? cora.gradient : cora.cardTint,
                color: message.trim() ? "#fff" : cora.muted,
                cursor: message.trim() ? "pointer" : "not-allowed",
                boxShadow: message.trim() ? `0 10px 30px ${cora.pink}3D` : "none",
              }}
            >
              <Mail size={16} />
              Open in email
            </a>

            <p
              className="font-body text-xs mt-4 text-center"
              style={{ color: cora.muted }}
            >
              Goes straight to {CONTACT_EMAIL}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
