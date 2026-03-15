"use client";

import React from "react";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
}

export default function Checkbox({
  checked = false,
  indeterminate = false,
  onChange,
  disabled = false,
  label,
  ...rest
}: CheckboxProps) {
  const isActive = checked || indeterminate;

  const handleClick = () => {
    if (disabled) return;
    onChange?.(!checked);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-2)",
      }}
    >
      <button
        type="button"
        role="checkbox"
        aria-checked={indeterminate ? "mixed" : checked}
        disabled={disabled}
        onClick={handleClick}
        style={{
          width: 18,
          height: 18,
          borderRadius: 4,
          border: `1.5px solid ${isActive ? "var(--amber-400)" : "var(--neutral-300)"}`,
          background: isActive ? "var(--amber-400)" : "transparent",
          transition: `background var(--duration-fast) var(--ease-default), border-color var(--duration-fast) var(--ease-default)`,
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.5 : 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          outline: "none",
          flexShrink: 0,
        }}
      >
        {checked && !indeterminate && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            style={{
              transform: "scale(1)",
              transition: `transform var(--duration-fast) var(--ease-spring)`,
            }}
          >
            <polyline
              points="3,6 6,9 10,3"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        )}
        {indeterminate && (
          <div
            style={{
              width: 8,
              height: 2,
              borderRadius: 1,
              background: "#ffffff",
              transform: "scale(1)",
              transition: `transform var(--duration-fast) var(--ease-spring)`,
            }}
          />
        )}
      </button>
      {label && (
        <span
          onClick={handleClick}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-sm)",
            color: "var(--neutral-700)",
            cursor: disabled ? "not-allowed" : "pointer",
            userSelect: "none",
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
