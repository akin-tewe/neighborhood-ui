import React from "react";
import Divider from "../divider/divider";

export interface FormSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export default function FormSection({
  title,
  description,
  children,
  footer,
}: FormSectionProps) {
  return (
    <div>
      <div style={{ marginBottom: "var(--space-6)" }}>
        <Divider />
      </div>

      <div style={{ marginBottom: "var(--space-6)" }}>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "var(--text-xl)",
            color: "var(--neutral-900)",
          }}
        >
          {title}
        </h3>
        {description && (
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              color: "var(--neutral-500)",
              lineHeight: 1.5,
              marginTop: "var(--space-1)",
            }}
          >
            {description}
          </p>
        )}
      </div>

      <div>{children}</div>

      {footer && (
        <div
          className="nb-form-footer"
          style={{
            marginTop: "var(--space-6)",
            display: "flex",
            gap: "var(--space-3)",
            justifyContent: "flex-end",
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
}
