"use client";

import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import {
  InformationCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import Button from "../button/button";

export interface BannerProps {
  severity?: "info" | "warning" | "error" | "success";
  title?: string;
  message: string;
  action?: { label: string; onClick: () => void };
  dismissible?: boolean;
  onDismiss?: () => void;
}

const severityMap = {
  info: {
    bg: "var(--sky-500)",
    text: "white",
    icon: InformationCircleIcon,
  },
  warning: {
    bg: "var(--amber-500)",
    text: "white",
    icon: ExclamationTriangleIcon,
  },
  error: {
    bg: "var(--berry-500)",
    text: "white",
    icon: XCircleIcon,
  },
  success: {
    bg: "var(--primary-600)",
    text: "white",
    icon: CheckCircleIcon,
  },
};

export default function Banner({
  severity = "info",
  title,
  message,
  action,
  dismissible = false,
  onDismiss,
}: BannerProps) {
  const [exiting, setExiting] = useState(false);
  const s = severityMap[severity];
  const Icon = s.icon;
  const isLightText = s.text === "white";

  const buttonStyle: React.CSSProperties = isLightText
    ? { background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "white" }
    : { background: "var(--neutral-50)", border: "1px solid var(--neutral-200)" };

  const handleDismiss = () => {
    setExiting(true);
  };

  return (
    <div
      className="nb-banner"
      onAnimationEnd={(e) => {
        if (e.animationName === "nb-banner-exit" && exiting) {
          onDismiss?.();
        }
      }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        padding: "var(--space-3) var(--space-4)",
        borderRadius: "var(--radius-surface)",
        background: s.bg,
        color: s.text,
        animation: exiting
          ? "nb-banner-exit var(--duration-base) var(--ease-default) forwards"
          : "nb-banner-enter var(--duration-base) var(--ease-spring) both",
      }}
    >
      <Icon style={{ width: 24, height: 24, flexShrink: 0, color: "currentColor" }} />

      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
        {title && (
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "var(--text-sm)",
              color: "inherit",
            }}
          >
            {title}
          </span>
        )}
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-sm)",
            color: "inherit",
            opacity: 0.85,
            lineHeight: 1.5,
          }}
        >
          {message}
        </span>
      </div>

      {action && (
        <Button variant="ghost" size="sm" onClick={action.onClick} style={buttonStyle}>
          {action.label}
        </Button>
      )}

      {dismissible && (
        <Button variant="ghost" size="sm" iconOnly onClick={handleDismiss} aria-label="Dismiss" style={buttonStyle}>
          <XMarkIcon style={{ width: 16, height: 16 }} />
        </Button>
      )}
    </div>
  );
}
