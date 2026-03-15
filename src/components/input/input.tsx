"use client";

import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: "default" | "search";
  size?: "sm" | "md";
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  placeholder?: string;
  prefixIcon?: React.ReactNode;
}

export default function Input({
  variant = "default",
  size = "md",
  label,
  helperText,
  error = false,
  errorMessage,
  disabled = false,
  placeholder,
  prefixIcon,
  onFocus,
  onBlur,
  style,
  ...rest
}: InputProps) {
  const id = React.useId();
  const inputId = `input-${id}`;
  const errorId = `${inputId}-error`;
  const [focused, setFocused] = useState(false);

  const isSearch = variant === "search";
  const isSm = size === "sm";
  const icon = prefixIcon ?? (isSearch ? <MagnifyingGlassIcon style={{ width: 16, height: 16 }} /> : null);

  let borderColor = "transparent";
  if (error) borderColor = "var(--error)";
  else if (focused) borderColor = "var(--sky-200)";
  else if (isSearch) borderColor = "var(--neutral-300)";

  let background = "var(--neutral-50)";
  if (disabled) background = "var(--neutral-200)";
  else if (isSearch) background = "white";

  const showError = error && errorMessage;
  const bottomText = showError ? errorMessage : helperText;

  return (
    <div style={{ animation: "nb-input-enter var(--duration-fast) var(--ease-spring) both" }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "var(--text-sm)",
            color: "var(--neutral-700)",
            marginBottom: "var(--space-1)",
            display: "block",
          }}
        >
          {label}
        </label>
      )}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-2)",
          borderRadius: "var(--radius-control)",
          fontFamily: "var(--font-body)",
          border: `1px solid ${borderColor}`,
          background,
          height: isSm ? 32 : 40,
          padding: isSm ? "0 var(--space-3)" : "0 var(--space-4)",
          fontSize: isSm ? "var(--text-sm)" : "var(--text-base)",
          opacity: disabled ? 0.5 : 1,
          cursor: disabled ? "not-allowed" : undefined,
          transition: "border-color var(--duration-base) var(--ease-default), background var(--duration-base) var(--ease-default)",
        }}
      >
        {icon && (
          <span style={{ color: "var(--neutral-400)", flexShrink: 0, display: "flex", alignItems: "center", fontSize: isSm ? "var(--text-sm)" : "var(--text-base)" }}>
            {icon}
          </span>
        )}

        <input
          id={inputId}
          disabled={disabled}
          placeholder={placeholder}
          aria-invalid={error || undefined}
          aria-describedby={showError ? errorId : undefined}
          onFocus={(e) => { setFocused(true); onFocus?.(e); }}
          onBlur={(e) => { setFocused(false); onBlur?.(e); }}
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            flex: 1,
            fontFamily: "inherit",
            fontSize: "inherit",
            color: "var(--neutral-900)",
            fontWeight: 500,
            width: "100%",
            cursor: disabled ? "not-allowed" : undefined,
          }}
          {...rest}
        />
      </div>

      {bottomText && (
        <span
          id={showError ? errorId : undefined}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-xs)",
            marginTop: "var(--space-1)",
            display: "block",
            color: showError ? "var(--error)" : "var(--neutral-400)",
          }}
        >
          {bottomText}
        </span>
      )}
    </div>
  );
}
