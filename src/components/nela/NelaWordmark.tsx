import { nela } from "./theme";

/**
 * Nela wordmark. Uses /nela-logo.png when present, falling back to a
 * serif wordmark if the image is missing or fails to load.
 */
export default function NelaWordmark({ size = 36 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <img
        src="/nela-logo.png"
        alt=""
        width={size}
        height={size}
        className="rounded-full object-cover"
        style={{ background: nela.cardTint }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <span
        className="font-display font-semibold"
        style={{ color: nela.ink, fontSize: size * 0.58 }}
      >
        Nela
      </span>
    </span>
  );
}
