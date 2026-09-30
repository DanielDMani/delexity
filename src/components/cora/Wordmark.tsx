import { cora } from "./theme";

/**
 * Cora wordmark. Uses the app's logo mark when present in /public,
 * falling back to a serif wordmark if the image fails to load.
 */
export default function Wordmark({ size = 36 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <img
        src="/cora-logo.png"
        alt=""
        width={size}
        height={size}
        className="rounded-full object-cover"
        style={{ background: "#FDE3E8" }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <span
        className="font-display font-semibold"
        style={{ color: cora.ink, fontSize: size * 0.58 }}
      >
        Cora
      </span>
    </span>
  );
}
