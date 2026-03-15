"use client";

import React from "react";

export interface BadgeProps {
  label: string;
  color?:
    | "primary"
    | "berry"
    | "terracotta"
    | "amber"
    | "sky"
    | "plum"
    | "sage"
    | "neutral"
    | "success"
    | "warning"
    | "error"
    | "info";
  variant?: "filled" | "subtle" | "outline";
  dot?: boolean;
  size?: "sm" | "md";
}

const paletteColors = new Set([
  "primary",
  "berry",
  "terracotta",
  "amber",
  "sky",
  "plum",
  "sage",
  "neutral",
]);

const semanticSubtleMap: Record<string, { bg: string; text: string }> = {
  success: { bg: "#dcfce7", text: "#166534" },
  warning: { bg: "#fef3c7", text: "#92400e" },
  error: { bg: "#fee2e2", text: "#991b1b" },
  info: { bg: "#dbeafe", text: "#1e40af" },
};

const semanticOutlineMap: Record<string, { text: string; border: string }> = {
  success: { text: "#166534", border: "1px solid #86efac" },
  warning: { text: "#92400e", border: "1px solid #fcd34d" },
  error: { text: "#991b1b", border: "1px solid #fca5a5" },
  info: { text: "#1e40af", border: "1px solid #93c5fd" },
};

function getColorStyles(
  color: string,
  variant: string
): { background: string; color: string; border: string; dotColor: string } {
  if (paletteColors.has(color)) {
    switch (variant) {
      case "filled":
        return {
          background:
            color === "neutral"
              ? "var(--neutral-800)"
              : `var(--${color}-500)`,
          color: "white",
          border: "none",
          dotColor: "white",
        };
      case "outline":
        return {
          background: "transparent",
          color: `var(--${color}-600)`,
          border: `1px solid var(--${color}-300)`,
          dotColor: `var(--${color}-500)`,
        };
      case "subtle":
      default:
        return {
          background: `var(--${color}-100)`,
          color: `var(--${color}-700)`,
          border: "none",
          dotColor: `var(--${color}-500)`,
        };
    }
  }

  // Semantic colors
  switch (variant) {
    case "filled":
      return {
        background: `var(--${color})`,
        color: "white",
        border: "none",
        dotColor: "white",
      };
    case "outline": {
      const o = semanticOutlineMap[color];
      return {
        background: "transparent",
        color: o.text,
        border: o.border,
        dotColor: `var(--${color})`,
      };
    }
    case "subtle":
    default: {
      const s = semanticSubtleMap[color];
      return {
        background: s.bg,
        color: s.text,
        border: "none",
        dotColor: `var(--${color})`,
      };
    }
  }
}

export default function Badge({
  label,
  color = "neutral",
  variant = "subtle",
  dot = false,
  size = "md",
}: BadgeProps) {
  const colors = getColorStyles(color, variant);
  const dotSize = size === "sm" ? 7 : 8;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-1)",
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        lineHeight: 1,
        textTransform: "none" as const,
        letterSpacing: "normal",
        textDecoration: "none",
        textIndent: 0,
        whiteSpace: "nowrap",
        borderRadius: "var(--radius-pill)",
        transition: "transform var(--duration-fast) var(--ease-default)",
        animation: "nb-badge-enter var(--duration-fast) var(--ease-spring) both",
        fontSize: size === "sm" ? "var(--text-xs)" : "var(--text-sm)",
        padding: size === "sm" ? "var(--space-1) var(--space-2)" : "var(--space-1) var(--space-3)",
        background: colors.background,
        color: colors.color,
        border: colors.border,
      }}
    >
      {dot && (
        <span
          style={{
            width: dotSize,
            height: dotSize,
            borderRadius: "50%",
            background: colors.dotColor,
            flexShrink: 0,
          }}
        />
      )}
      {label}
    </span>
  );
}
