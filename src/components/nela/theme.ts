// Palette sampled directly from the Nela iOS app screenshots.
export const nela = {
  // surfaces — a strong peach lifted from the Today screen's gradient,
  // deliberately unlike Cora's blush cream.
  bg: "#F9B190", // strong peach page background
  bgDeep: "#F59D77", // deeper peach, for alternating sections
  card: "#FFF6F0", // warm cream card — the content layer
  cardTint: "#FCE3D5", // tinted tile inside cards

  // type
  ink: "#2B1610", // deep cocoa — 9.6:1 on peach
  muted: "#5E3B2E", // warm brown — 5.5:1 on peach

  // accents
  // `accent` is for anything legible: text, links, icons, borders.
  // `terracotta` is the app's brand orange, decorative fills only —
  // it only reaches 1.8:1 against the peach background.
  accent: "#8A2D0E",
  terracotta: "#E8673F",
  glow: "#FFE4D2", // cream bloom, for depth on the peach

  // cycle phases, straight from the calendar view
  period: "#F3AABB",
  follicular: "#B8D6C4",
  ovulation: "#FEC49A",
  luteal: "#BDD3E2",

  gradient: "linear-gradient(135deg, #E8673F 0%, #C6441F 100%)",
} as const;

export const phases = [
  {
    name: "Period",
    color: nela.period,
    blurb: "Rest, warmth, and iron-rich food. Permission to do less.",
  },
  {
    name: "Follicular",
    color: nela.follicular,
    blurb: "Energy returns. A good window for starting things.",
  },
  {
    name: "Ovulation",
    color: nela.ovulation,
    blurb: "Confident, social, energised. Make the most of the glow.",
  },
  {
    name: "Luteal",
    color: nela.luteal,
    blurb: "Wind down, steady blood sugar, protect your sleep.",
  },
] as const;

/**
 * Set this once Nela is live on the App Store; until then the pages
 * show a "coming soon" state instead of a dead link.
 */
export const NELA_APP_STORE_URL: string | null = null;

// Shared support address, same as the Cora pages.
export const CONTACT_EMAIL = "info@delexity.com";
