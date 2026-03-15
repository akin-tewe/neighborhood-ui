"use client";

import React from "react";

export interface ToggleProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export default function Toggle({
  checked,
  onChange,
  disabled = false,
  ...rest
}: ToggleProps) {
  return (
    <button
      className="nb-toggle"
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          if (!disabled) onChange(!checked);
        }
      }}
      style={{
        position: "relative",
        width: 40,
        height: 24,
        borderRadius: "var(--radius-pill)",
        background: checked ? "var(--amber-400)" : "var(--neutral-200)",
        border: "none",
        outline: "2px solid transparent",
        padding: 0,
        cursor: disabled ? "not-allowed" : "pointer",
        pointerEvents: disabled ? "none" : "auto",
        opacity: disabled ? 0.5 : 1,
        display: "inline-flex",
        alignItems: "center",
        transition: `background var(--duration-fast) var(--ease-default)`,
      }}
      {...rest}
    >
      <span
        style={{
          position: "absolute",
          top: checked ? 3 : 5,
          left: checked ? 19 : 5,
          width: checked ? 18 : 14,
          height: checked ? 18 : 14,
          borderRadius: "var(--radius-pill)",
          background: "white",
          boxShadow: "var(--shadow-subtle)",
          transition: `left var(--duration-fast) var(--ease-spring), width var(--duration-fast) var(--ease-spring), height var(--duration-fast) var(--ease-spring), top var(--duration-fast) var(--ease-spring)`,
        }}
      />
    </button>
  );
}
