import React from "react";

export interface SettingRowProps {
  label: string;
  description?: string;
  control: React.ReactNode;
}

export default function SettingRow({ label, description, control }: SettingRowProps) {
  return (
    <div
      className="nb-setting-row"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "var(--space-4)",
        padding: "var(--space-4) 0",
        minHeight: 48,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-1)",
          flex: 1,
          minWidth: 0,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "var(--text-base)",
            color: "var(--neutral-900)",
          }}
        >
          {label}
        </span>
        {description && (
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              color: "var(--neutral-500)",
              lineHeight: 1.5,
            }}
          >
            {description}
          </span>
        )}
      </div>
      <div className="nb-setting-control" style={{ flexShrink: 0 }}>{control}</div>
    </div>
  );
}
