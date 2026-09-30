// Palette sampled directly from the Cora iOS app screenshots.
export const cora = {
  // surfaces
  bg: "#FFF1E9", // warm blush cream — the app's page background
  bgDeep: "#FEEEE6", // very slightly deeper blush, for alternating sections
  card: "#FFF8F5", // elevated card, near-white warm
  cardTint: "#FDEBE3", // tinted card / secondary surface

  // type
  ink: "#331723", // deep plum — headings and body
  muted: "#784F5E", // mauve — secondary text

  // accents
  pink: "#CB6182", // primary rose — buttons, active tabs, play controls
  coral: "#DC7371", // section labels, morning accent
  green: "#6BA382", // habit pills

  gradient: "linear-gradient(135deg, #DC7371 0%, #CB6182 100%)",
} as const;

export const APP_STORE_URL =
  "https://apps.apple.com/gb/app/cora-daily-habit-tracker/id6759983237";

// The public support address already used across the Cora support pages.
export const CONTACT_EMAIL = "info@delexity.com";
