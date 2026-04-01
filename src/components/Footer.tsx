import { Link } from "react-router-dom";
import { Twitter, Github, Linkedin } from "lucide-react";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const scrollTo = (href: string) => {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export default function Footer() {
  return (
    <footer
      className="relative py-16 border-t"
      style={{
        background: "#070910",
        borderColor: "rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
          {/* Logo + tagline */}
          <div>
            <a
              href="/"
              className="font-syne font-extrabold text-2xl tracking-tight block mb-3"
              style={{ color: "#E8EDF5" }}
            >
              DELEXITY
            </a>
            <p
              className="font-space text-sm max-w-xs"
              style={{ color: "#6B7A99" }}
            >
              Modern software studio. We build apps, products, and websites for
              businesses that care about quality.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <span
              className="font-mono-jet text-xs mb-1"
              style={{ color: "#3ECFCF" }}
            >
              NAVIGATE
            </span>
            {footerLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="font-space text-sm text-left transition-colors duration-200 hover:text-[#E8EDF5]"
                style={{ color: "#6B7A99" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <span
              className="font-mono-jet text-xs mb-1"
              style={{ color: "#3ECFCF" }}
            >
              LEGAL
            </span>
            <Link
              to="/privacy"
              className="font-space text-sm transition-colors duration-200 hover:text-[#E8EDF5]"
              style={{ color: "#6B7A99" }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="font-space text-sm transition-colors duration-200 hover:text-[#E8EDF5]"
              style={{ color: "#6B7A99" }}
            >
              Terms of Service
            </Link>
            <Link
              to="/support"
              className="font-space text-sm transition-colors duration-200 hover:text-[#E8EDF5]"
              style={{ color: "#6B7A99" }}
            >
              Support
            </Link>
            <Link
              to="/cora"
              className="font-space text-sm transition-colors duration-200 hover:text-[#E8EDF5]"
              style={{ color: "#6B7A99" }}
            >
              Cora App
            </Link>
            <Link
              to="/cora-support"
              className="font-space text-sm transition-colors duration-200 hover:text-[#E8EDF5]"
              style={{ color: "#6B7A99" }}
            >
              Cora Support
            </Link>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <span
              className="font-mono-jet text-xs mb-1"
              style={{ color: "#3ECFCF" }}
            >
              CONNECT
            </span>
            <div className="flex gap-3">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
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
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <p
            className="font-mono-jet text-xs"
            style={{ color: "#6B7A99" }}
          >
            © {new Date().getFullYear()} Delexity. All rights reserved.
          </p>
          <p
            className="font-mono-jet text-xs"
            style={{ color: "#6B7A99" }}
          >
            Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
