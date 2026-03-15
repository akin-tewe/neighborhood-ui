import React from "react";

export interface PropertyRowProps {
  label: string;
  value: React.ReactNode;
  icon?: React.ReactNode;
}

export default function PropertyRow({ label, value, icon }: PropertyRowProps) {
  return (
    <div
      className="nb-property-row"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        padding: "var(--space-2) 0",
        minHeight: 36,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-2)",
        }}
      >
        {icon && (
          <span
            style={{
              color: "var(--neutral-400)",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            {icon}
          </span>
        )}
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            fontSize: "var(--text-sm)",
            color: "var(--neutral-500)",
            minWidth: 120,
            flexShrink: 0,
          }}
        >
          {label}
        </span>
      </div>

      <div
        style={{
          flex: 1,
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-sm)",
          color: "var(--neutral-900)",
        }}
      >
        {value}
      </div>
    </div>
  );
}
