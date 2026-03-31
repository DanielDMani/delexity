import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.06]"
          : "border-b border-transparent"
      }`}
      style={{
        background: scrolled
          ? "rgba(10, 13, 20, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="font-syne font-extrabold text-2xl tracking-tight"
          style={{ color: "#E8EDF5" }}
        >
          DELEXITY
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="font-space text-sm font-medium transition-colors duration-200 hover:text-[#3ECFCF]"
              style={{ color: "#6B7A99" }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("#contact")}
            className="pulse-glow-btn font-space text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-150 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #3ECFCF, #2ab5c9)",
              color: "#0A0D14",
              fontWeight: 600,
            }}
          >
            Start a Project
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#E8EDF5]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{
            background: "rgba(10, 13, 20, 0.97)",
            backdropFilter: "blur(20px)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="font-space text-base font-medium text-left py-2 border-b border-white/[0.06]"
              style={{ color: "#E8EDF5" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="font-space text-sm font-semibold px-5 py-3 rounded-lg mt-2"
            style={{
              background: "linear-gradient(135deg, #3ECFCF, #2ab5c9)",
              color: "#0A0D14",
            }}
          >
            Start a Project
          </button>
        </div>
      )}
    </nav>
  );
}
