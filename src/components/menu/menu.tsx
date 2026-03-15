"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Checkbox from "../checkbox/checkbox";
import Divider from "../divider/divider";

export type MenuItem = {
  label: string;
  onClick?: () => void;
  description?: string;
  shortcut?: string;
  icon?: React.ReactNode;
  destructive?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  dividerAfter?: boolean;
};

export interface MenuProps {
  trigger: React.ReactNode;
  items: MenuItem[];
  align?: "left" | "right";
}

export default function Menu({
  trigger,
  items,
  align = "left",
}: MenuProps) {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pos, setPos] = useState<{ top: number; left: number; right: number } | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setPos({
      top: rect.bottom + 8,
      left: rect.left,
      right: window.innerWidth - rect.right,
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    updatePosition();
    const handler = (e: MouseEvent) => {
      if (
        triggerRef.current && !triggerRef.current.contains(e.target as Node) &&
        panelRef.current && !panelRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      document.removeEventListener("mousedown", handler);
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [open, updatePosition]);

  const isCheckboxItem = (item: MenuItem) =>
    item.checked !== undefined || item.onCheckedChange !== undefined;

  return (
    <>
      <div ref={triggerRef} style={{ display: "inline-block" }}>
        <div onClick={() => setOpen((v) => !v)}>{trigger}</div>
      </div>

      {open && pos && typeof document !== "undefined" && createPortal(
        <div
          ref={panelRef}
          style={{
            position: "fixed",
            top: pos.top,
            left: align === "left" ? pos.left : undefined,
            right: align === "right" ? pos.right : undefined,
            minWidth: 200,
            maxWidth: "min(280px, calc(100vw - 2rem))",
            background: "white",
            borderRadius: "var(--radius-surface)",
            border: "1px solid var(--neutral-200)",
            boxShadow: "var(--shadow-overlay)",
            padding: "var(--space-2) 0",
            zIndex: 9999,
            animation: "nb-menu-enter var(--duration-fast) var(--ease-spring)",
          }}
        >
          {items.map((item, i) => {
            const isCheckbox = isCheckboxItem(item);
            const destructiveColor = "var(--error)";
            const itemColor = item.destructive ? destructiveColor : "var(--neutral-700)";

            return (
              <React.Fragment key={i}>
                {isCheckbox ? (
                  <div
                    style={{
                      width: "100%",
                      padding: "var(--space-2) var(--space-3)",
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-2)",
                      background: hoveredIndex === i ? "var(--neutral-50)" : "transparent",
                      cursor: "pointer",
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-sm)",
                      color: itemColor,
                      transition: "background var(--duration-fast) var(--ease-default)",
                    }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Checkbox
                      checked={item.checked}
                      onChange={(checked) => item.onCheckedChange?.(checked)}
                      label={item.label}
                    />
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      item.onClick?.();
                      setOpen(false);
                    }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      width: "100%",
                      padding: "var(--space-2) var(--space-3)",
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-2)",
                      background: hoveredIndex === i ? "var(--neutral-50)" : "transparent",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-sm)",
                      color: itemColor,
                      textAlign: "left",
                      borderRadius: 0,
                      transition: "background var(--duration-fast) var(--ease-default)",
                    }}
                  >
                    {item.icon && (
                      <span
                        style={{
                          flexShrink: 0,
                          width: 16,
                          height: 16,
                          color: item.destructive ? destructiveColor : "var(--neutral-400)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </span>
                    )}
                    <span style={{ flex: 1 }}>
                      {item.label}
                      {item.description && (
                        <span
                          style={{
                            display: "block",
                            fontSize: "var(--text-xs)",
                            color: "var(--neutral-400)",
                            marginTop: 2,
                          }}
                        >
                          {item.description}
                        </span>
                      )}
                    </span>
                    {item.shortcut && (
                      <span
                        style={{
                          fontSize: "var(--text-xs)",
                          color: "var(--neutral-300)",
                          fontFamily: "var(--font-display)",
                          flexShrink: 0,
                        }}
                      >
                        {item.shortcut}
                      </span>
                    )}
                  </button>
                )}
                {item.dividerAfter && (
                  <div style={{ margin: "var(--space-1) 0" }}>
                    <Divider />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>,
        document.body,
      )}
    </>
  );
}
