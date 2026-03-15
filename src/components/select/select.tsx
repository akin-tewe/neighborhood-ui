"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export interface SelectProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  placeholder?: string;
  variant?: "form" | "inline";
  size?: "sm" | "md";
  disabled?: boolean;
  onClick?: () => void;
}

export default function Select({
  value,
  placeholder,
  variant = "form",
  size = "md",
  disabled = false,
  onClick,
  style,
  ...rest
}: SelectProps) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const showPlaceholder = !value && !!placeholder;
  const displayText = value || placeholder || "";

  const isForm = variant === "form";
  const isSm = size === "sm";

  const scale = disabled ? 1 : pressed ? 0.98 : hovered ? 1.02 : 1;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-2)",
        fontFamily: "var(--font-body)",
        borderRadius: "var(--radius-control)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: `border-color var(--duration-base) var(--ease-default), transform var(--duration-fast) var(--ease-spring)`,
        transform: `scale(${scale})`,
        // variant styles
        background: isForm ? "var(--neutral-50)" : "transparent",
        border: isForm ? "1px solid var(--neutral-300)" : "none",
        color: isForm
          ? showPlaceholder
            ? "var(--neutral-400)"
            : "var(--neutral-900)"
          : "var(--neutral-700)",
        fontWeight: isForm ? 400 : 500,
        // size styles
        height: isSm ? 32 : 40,
        padding: isSm ? "0 var(--space-3)" : "0 var(--space-4)",
        fontSize: isSm ? "var(--text-sm)" : "var(--text-base)",
        outline: "none",
        ...style,
      }}
      {...rest}
    >
      <span>{displayText}</span>
      <span
        style={{
          color: "var(--neutral-400)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ChevronDownIcon style={{ width: 16, height: 16 }} />
      </span>
    </button>
  );
}
