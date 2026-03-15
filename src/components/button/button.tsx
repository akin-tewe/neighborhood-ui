"use client";

import React, { useState } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "destructive";
  size?: "sm" | "md";
  iconOnly?: boolean;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

function getVariantStyles(
  variant: string,
): React.CSSProperties {
  switch (variant) {
    case "primary":
      return { background: "var(--primary-500)", color: "white", border: "none" };
    case "secondary":
      return { background: "transparent", color: "var(--neutral-800)", border: "1px solid var(--neutral-300)" };
    case "ghost":
      return { background: "var(--neutral-200)", color: "var(--neutral-600)", border: "none" };
    case "destructive":
      return { background: "var(--error)", color: "white", border: "none" };
    default:
      return {};
  }
}

export default function Button({
  variant = "primary",
  size = "md",
  iconOnly = false,
  disabled = false,
  loading = false,
  children,
  onClick,
  style,
  type = "button",
  ...rest
}: ButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const isDisabled = disabled || loading;
  const effectiveHovered = isDisabled ? false : hovered;
  const effectiveActive = isDisabled ? false : active;

  const isSm = size === "sm";
  const height = isSm ? 32 : 40;
  const fontSize = isSm ? "var(--text-sm)" : "var(--text-base)";

  let padding: string | number = isSm ? "0 var(--space-3)" : "0 var(--space-4)";
  let width: number | undefined;
  if (iconOnly) {
    padding = 0;
    width = height;
  }

  const variantStyles = getVariantStyles(variant);

  const baseStyles: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    borderRadius: "var(--radius-control)",
    cursor: isDisabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    transition:
      "background var(--duration-fast) var(--ease-default), border-color var(--duration-fast) var(--ease-default), opacity var(--duration-fast) var(--ease-default), transform var(--duration-fast) var(--ease-spring)",
    transform: effectiveActive ? "scale(0.96)" : effectiveHovered ? "scale(1.03)" : "scale(1)",
    whiteSpace: "nowrap",
    lineHeight: 1,
    textTransform: "none" as const,
    letterSpacing: "normal",
    height,
    padding,
    fontSize,
    width,
    opacity: isDisabled ? 0.5 : 1,
    pointerEvents: isDisabled ? "none" : undefined,
    ...variantStyles,
    ...style,
  };

  const twinDotSize = isSm ? 6 : 8;
  const twinDotA: React.CSSProperties = {
    display: "inline-block",
    width: twinDotSize,
    height: twinDotSize,
    background: "currentColor",
    animation: "nb-morph-twin-a 1.4s ease-in-out infinite",
  };
  const twinDotB: React.CSSProperties = {
    display: "inline-block",
    width: twinDotSize,
    height: twinDotSize,
    background: "currentColor",
    animation: "nb-morph-twin-b 1.4s ease-in-out infinite",
  };

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setActive(false);
      }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={baseStyles}
      {...rest}
    >
      {loading ? <><span style={twinDotA} /><span style={twinDotB} /></> : children}
    </button>
  );
}
