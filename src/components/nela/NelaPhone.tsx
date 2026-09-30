import { nela } from "./theme";

export default function NelaPhone({
  src,
  alt,
  width = 200,
  className = "",
  style,
}: {
  src: string;
  alt: string;
  width?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`relative ${className}`} style={{ width, ...style }}>
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: width * 0.13,
          background: "#fff",
          border: "3px solid #FFFFFF",
          outline: `1px solid ${nela.ink}14`,
          aspectRatio: "1284/2778",
          boxShadow: `0 26px 60px ${nela.ink}1F, 0 6px 18px ${nela.accent}14`,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>
    </div>
  );
}
