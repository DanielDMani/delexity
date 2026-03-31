import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Check, Loader2, Twitter, Github, Linkedin, Mail } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [state, setState] = useState<FormState>("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setState("loading");
    // Simulate async submit
    await new Promise((r) => setTimeout(r, 1800));
    setState("success");
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass = (error?: string) =>
    `w-full bg-transparent rounded-xl px-5 py-4 font-space text-sm outline-none transition-all duration-200 placeholder:text-[#6B7A99] focus:border-[#3ECFCF]` +
    (error
      ? " border border-red-500/60 focus:border-red-500"
      : " border border-white/[0.08] hover:border-white/20");

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "#0A0D14" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(139, 111, 255, 0.1) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 10% 50%, rgba(62, 207, 207, 0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span
              className="font-mono-jet text-xs mb-4 block"
              style={{ color: "#3ECFCF" }}
            >
              06 — CONTACT
            </span>
            <h2
              className="font-syne font-bold text-4xl md:text-6xl leading-tight mb-6"
              style={{ color: "#E8EDF5" }}
            >
              Let's Build
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #3ECFCF 0%, #8B6FFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Something
              </span>
            </h2>
            <p
              className="font-space text-base leading-relaxed mb-10 max-w-md"
              style={{ color: "#6B7A99" }}
            >
              Have a project in mind? We'd love to hear about it. Send us a
              message and we'll get back to you within 24 hours.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@delexity.com"
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(62, 207, 207, 0.1)" }}
                >
                  <Mail size={16} style={{ color: "#3ECFCF" }} />
                </div>
                <span
                  className="font-space text-sm transition-colors duration-200 group-hover:text-[#3ECFCF]"
                  style={{ color: "#6B7A99" }}
                >
                  hello@delexity.com
                </span>
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-8">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:border-[#3ECFCF]/40 hover:bg-[#3ECFCF]/05"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#6B7A99",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#3ECFCF";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(62,207,207,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#6B7A99";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(255,255,255,0.08)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            {state === "success" ? (
              <div className="glass-card rounded-2xl p-12 flex flex-col items-center justify-center text-center gap-4 min-h-[400px]">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(62, 207, 207, 0.15)" }}
                >
                  <Check size={28} style={{ color: "#3ECFCF" }} />
                </div>
                <h3
                  className="font-syne font-bold text-2xl"
                  style={{ color: "#E8EDF5" }}
                >
                  Message Sent!
                </h3>
                <p
                  className="font-space text-sm"
                  style={{ color: "#6B7A99" }}
                >
                  We'll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setState("idle")}
                  className="mt-4 font-space text-sm underline"
                  style={{ color: "#3ECFCF" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-8 flex flex-col gap-5"
                noValidate
              >
                {/* Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    className={inputClass(errors.name)}
                    style={{ color: "#E8EDF5" }}
                  />
                  {errors.name && (
                    <p
                      className="font-mono-jet text-xs mt-1.5 ml-1"
                      style={{ color: "#ff6b6b" }}
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      if (errors.email)
                        setErrors({ ...errors, email: undefined });
                    }}
                    className={inputClass(errors.email)}
                    style={{ color: "#E8EDF5" }}
                  />
                  {errors.email && (
                    <p
                      className="font-mono-jet text-xs mt-1.5 ml-1"
                      style={{ color: "#ff6b6b" }}
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    placeholder="Tell us about your project..."
                    value={form.message}
                    rows={5}
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                      if (errors.message)
                        setErrors({ ...errors, message: undefined });
                    }}
                    className={`${inputClass(errors.message)} resize-none`}
                    style={{ color: "#E8EDF5" }}
                  />
                  {errors.message && (
                    <p
                      className="font-mono-jet text-xs mt-1.5 ml-1"
                      style={{ color: "#ff6b6b" }}
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="pulse-glow-btn w-full font-space font-semibold text-sm py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-150 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, #3ECFCF, #2ab5c9)",
                    color: "#0A0D14",
                  }}
                >
                  {state === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
