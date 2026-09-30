/**
 * Delexity-level palette. Deliberately neutral and warm so the two app
 * brands — Cora's blush pink and Nela's peach — can sit side by side
 * without either one taking over the page.
 */
export const site = {
  bg: "#FAF6F2",
  bgDeep: "#F2EBE4",
  card: "#FFFFFF",
  ink: "#241C18",
  muted: "#6B5A51",
  line: "#241C1814",
  // Cora pink → Nela terracotta: the parent brand as a blend of both.
  gradient: "linear-gradient(135deg, #CB6182 0%, #E8673F 100%)",
} as const;

export const CONTACT_EMAIL = "info@delexity.com";
