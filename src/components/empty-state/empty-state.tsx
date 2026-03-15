import React from "react";

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "full" | "minimal";
}

export default function EmptyState({
  icon,
  title,
  description,
  action,
  variant = "full",
}: EmptyStateProps) {
  const isFull = variant === "full";

  const wrapperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: isFull ? "var(--space-12)" : "var(--space-6)",
    gap: isFull ? "var(--space-4)" : "var(--space-2)",
    ...(isFull && {
      position: "relative" as const,
      borderRadius: "var(--radius-surface)",
    }),
  };

  const iconStyle: React.CSSProperties = {
    color: "var(--neutral-300)",
    marginBottom: isFull ? "var(--space-2)" : undefined,
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontWeight: isFull ? 600 : 500,
    fontSize: isFull ? "var(--text-lg)" : "var(--text-sm)",
    color: isFull ? "var(--neutral-900)" : "var(--neutral-700)",
    margin: 0,
  };

  const descriptionStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: isFull ? "var(--text-sm)" : "var(--text-xs)",
    color: isFull ? "var(--neutral-500)" : "var(--neutral-400)",
    maxWidth: isFull ? 320 : 240,
    lineHeight: 1.5,
    margin: 0,
  };

  return (
    <div style={wrapperStyle}>
      {isFull && (
        <svg
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <rect
            x="1"
            y="1"
            rx="12"
            ry="12"
            fill="none"
            stroke="var(--neutral-300)"
            strokeWidth="2"
            strokeDasharray="8 12"
            style={{ width: "calc(100% - 2px)", height: "calc(100% - 2px)" }}
          />
        </svg>
      )}
      {icon && <div style={iconStyle}>{icon}</div>}
      <h3 style={titleStyle}>{title}</h3>
      {description && <p style={descriptionStyle}>{description}</p>}
      {action && <div>{action}</div>}
    </div>
  );
}
