"use client";

import React, { useState } from "react";

export interface TabItem {
  label: string;
  value: string;
  count?: number;
}

export interface TabsProps {
  items: TabItem[];
  activeValue: string;
  onChange: (value: string) => void;
  variant?: "landing" | "bracket";
  size?: "sm" | "md";
  surface?: "light" | "dark";
}

export default function Tabs({
  items,
  activeValue,
  onChange,
  variant = "bracket",
  size = "md",
  surface = "light",
}: TabsProps) {
  const isSm = size === "sm";
  const isBracket = variant === "bracket";
  const isDark = surface === "dark";

  return (
    <div role="tablist" style={{ display: "flex", gap: "var(--space-1)" }}>
      {items.map((item) => {
        const isActive = item.value === activeValue;

        return (
          <TabButton
            key={item.value}
            item={item}
            isActive={isActive}
            isBracket={isBracket}
            isSm={isSm}
            isDark={isDark}
            onClick={() => onChange(item.value)}
          />
        );
      })}
    </div>
  );
}

function TabButton({
  item,
  isActive,
  isBracket,
  isSm,
  isDark,
  onClick,
}: {
  item: TabItem;
  isActive: boolean;
  isBracket: boolean;
  isSm: boolean;
  isDark: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  const activeColor = isDark ? "var(--neutral-50)" : "var(--neutral-900)";
  const hoverColor = isDark ? "var(--neutral-200)" : "var(--neutral-600)";
  const inactiveColor = "var(--neutral-400)";
  const barColor = isDark ? "var(--neutral-50)" : "var(--neutral-800)";

  const baseStyle: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    cursor: "pointer",
    border: "none",
    background: "transparent",
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    fontSize: isSm ? "var(--text-sm)" : "var(--text-base)",
    outline: "none",
    position: "relative",
  };

  let variantStyle: React.CSSProperties;

  if (isBracket) {
    variantStyle = {
      padding: isSm
        ? "var(--space-1) var(--space-5)"
        : "var(--space-2) var(--space-6)",
      color: isActive
        ? activeColor
        : hovered
          ? hoverColor
          : inactiveColor,
      transform: isActive ? "translateY(1px)" : "translateY(0)",
      transition: "transform 0.35s var(--ease-spring), color 0.15s ease",
    };
  } else {
    variantStyle = {
      padding: isSm
        ? "var(--space-1) var(--space-3)"
        : "var(--space-2) var(--space-4)",
      color: isActive
        ? activeColor
        : hovered
          ? hoverColor
          : inactiveColor,
      transform: isActive ? "translateY(3px)" : "translateY(0)",
      background: isActive
        ? isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"
        : "transparent",
      borderRadius: "var(--radius-control)",
      boxShadow: isActive
        ? "inset 0 2px 4px rgba(0,0,0,0.06)"
        : "inset 0 2px 4px rgba(0,0,0,0)",
      transition: "transform 0.35s var(--ease-spring), box-shadow 0.2s ease, background 0.15s ease, color 0.15s ease",
    };
  }

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ ...baseStyle, ...variantStyle }}
    >
      {isBracket && (
        <span
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            width: 4,
            height: 18,
            borderRadius: "var(--radius-pill)",
            background: barColor,
            transform: `translateY(-50%) ${isActive ? "scaleY(1)" : "scaleY(0)"}`,
            opacity: isActive ? 1 : 0,
            transition:
              "transform 0.25s var(--ease-spring), opacity 0.15s ease",
          }}
        />
      )}
      {item.label}
      {item.count !== undefined && (
        <span
          style={{
            fontSize: "var(--text-xs)",
            color: inactiveColor,
          }}
        >
          {item.count}
        </span>
      )}
      {isBracket && (
        <span
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            width: 4,
            height: 18,
            borderRadius: "var(--radius-pill)",
            background: barColor,
            transform: `translateY(-50%) ${isActive ? "scaleY(1)" : "scaleY(0)"}`,
            opacity: isActive ? 1 : 0,
            transition:
              "transform 0.25s var(--ease-spring), opacity 0.15s ease",
          }}
        />
      )}
    </button>
  );
}
