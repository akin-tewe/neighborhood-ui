import React from "react";
import Divider from "../divider/divider";

export interface ContentSectionProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}

export default function ContentSection({
  title,
  description,
  action,
  children,
}: ContentSectionProps) {
  return (
    <section style={{ marginBottom: "var(--space-12)" }}>
      <Divider />

      <div
        className="nb-content-section-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: "var(--space-6)",
          marginBottom: "var(--space-6)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-1)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "var(--text-xl)",
              color: "var(--neutral-900)",
            }}
          >
            {title}
          </h2>
          {description && (
            <p
              className="nb-content-section-desc"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                color: "var(--neutral-500)",
                lineHeight: 1.5,
              }}
            >
              {description}
            </p>
          )}
        </div>
        {action && <div style={{ flexShrink: 0 }}>{action}</div>}
      </div>

      <div>{children}</div>
    </section>
  );
}
