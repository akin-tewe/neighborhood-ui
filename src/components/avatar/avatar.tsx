"use client";

export interface AvatarProps {
  src?: string;
  initials?: string;
  size?: "sm" | "md" | "lg";
  status?: "online" | "busy" | "away" | "offline";
}

const AVATAR_COLORS = [
  { bg: "var(--primary-500)", text: "white" },
  { bg: "var(--berry-500)", text: "white" },
  { bg: "var(--terracotta-500)", text: "white" },
  { bg: "var(--amber-400)", text: "var(--neutral-900)" },
  { bg: "var(--sky-500)", text: "white" },
  { bg: "var(--plum-500)", text: "white" },
  { bg: "var(--sage-500)", text: "white" },
];

function getAvatarColor(initials: string) {
  let hash = 0;
  for (let i = 0; i < initials.length; i++) {
    hash = initials.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

const sizeMap = {
  sm: { box: 24, fontSize: 10, dot: 8 },
  md: { box: 32, fontSize: "var(--text-xs)", dot: 10 },
  lg: { box: 48, fontSize: "var(--text-sm)", dot: 12 },
} as const;

const statusColors: Record<string, string> = {
  online: "var(--success)",
  busy: "var(--error)",
  away: "var(--amber-400)",
  offline: "var(--neutral-300)",
};

export default function Avatar({
  src,
  initials,
  size = "md",
  status,
}: AvatarProps) {
  const s = sizeMap[size];
  const avatarColor = getAvatarColor(initials || "");

  return (
    <div
      style={{
        position: "relative",
        display: "inline-flex",
        borderRadius: "50%",
        overflow: "hidden",
        flexShrink: 0,
        width: s.box,
        height: s.box,
        animation: "nb-avatar-enter var(--duration-fast) var(--ease-spring) both",
      }}
    >
      {src ? (
        <img
          src={src}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <span
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: avatarColor.bg,
            color: avatarColor.text,
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: s.fontSize,
          }}
        >
          {initials}
        </span>
      )}
      {status && (
        <span
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: s.dot,
            height: s.dot,
            borderRadius: "50%",
            border: "2px solid white",
            background: statusColors[status],
          }}
        />
      )}
    </div>
  );
}
