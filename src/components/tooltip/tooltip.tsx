"use client";

import React, { useState } from "react";

export interface TooltipProps {
  content: string;
  position?: "top" | "bottom";
  children: React.ReactNode;
}

export default function Tooltip({
  content,
  position = "top",
  children,
}: TooltipProps) {
  const [hovered, setHovered] = useState(false);

  const isTop = position === "top";

  const tooltipStyle: React.CSSProperties = {
    position: "absolute",
    ...(isTop
      ? { bottom: "calc(100% + 6px)" }
      : { top: "calc(100% + 6px)" }),
    left: "50%",
    transform: hovered
      ? "translateX(-50%)"
      : "translateX(-50%) scale(0.9)",
    background: "var(--neutral-800)",
    color: "white",
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-xs)",
    fontWeight: 500,
    padding: "var(--space-1) var(--space-2)",
    borderRadius: "var(--radius-control)",
    whiteSpace: "nowrap",
    pointerEvents: "none",
    opacity: hovered ? 1 : 0,
    transition:
      "opacity var(--duration-fast) var(--ease-default), transform var(--duration-fast) var(--ease-spring)",
    zIndex: 50,
  };

  return (
    <span
      style={{ display: "inline-flex", position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <span style={tooltipStyle}>{content}</span>
    </span>
  );
}
