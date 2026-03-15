"use client";

import { useState } from "react";

export interface SegmentedControlProps {
  options: Array<{ label: string; value: string }>;
  activeValue: string;
  onChange: (value: string) => void;
  size?: "sm" | "md";
}

export default function SegmentedControl({
  options,
  activeValue,
  onChange,
  size = "md",
}: SegmentedControlProps) {
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);

  const isSmall = size === "sm";

  const wrapperStyle: React.CSSProperties = {
    display: "inline-flex",
    background: "var(--neutral-200)",
    borderRadius: "var(--radius-control)",
    padding: 3,
    gap: 2,
  };

  const getButtonStyle = (value: string): React.CSSProperties => {
    const isActive = value === activeValue;
    const isHovered = value === hoveredValue && !isActive;

    return {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: isSmall ? "var(--text-xs)" : "var(--text-sm)",
      padding: isSmall
        ? "var(--space-1) var(--space-3)"
        : "var(--space-1) var(--space-4)",
      border: "none",
      cursor: "pointer",
      borderRadius: 6,
      transition:
        "background var(--duration-fast) var(--ease-default), color var(--duration-fast) var(--ease-default), box-shadow var(--duration-fast) var(--ease-default)",
      background: isActive ? "white" : "transparent",
      color: isActive
        ? "var(--neutral-900)"
        : isHovered
          ? "var(--neutral-700)"
          : "var(--neutral-500)",
      boxShadow: isActive ? "var(--shadow-subtle)" : "none",
    };
  };

  return (
    <div className="nb-segmented" style={wrapperStyle}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          style={getButtonStyle(option.value)}
          onClick={() => onChange(option.value)}
          onMouseEnter={() => setHoveredValue(option.value)}
          onMouseLeave={() => setHoveredValue(null)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
