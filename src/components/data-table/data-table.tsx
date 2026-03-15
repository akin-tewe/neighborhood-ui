"use client";

import React, { useState } from "react";
import Checkbox from "../checkbox/checkbox";

export type Column = {
  key: string;
  label: string;
  width?: number | string;
};

export type Row = {
  id: string;
  [key: string]: React.ReactNode;
};

export interface DataTableProps {
  columns: Column[];
  rows: Row[];
  selectable?: boolean;
  actions?: (row: Row) => React.ReactNode;
}

export default function DataTable({
  columns,
  rows,
  selectable = false,
  actions,
}: DataTableProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const allSelected = rows.length > 0 && rows.every((r) => selectedIds.has(r.id));
  const someSelected = rows.some((r) => selectedIds.has(r.id));

  const toggleAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(new Set(rows.map((r) => r.id)));
    } else {
      setSelectedIds(new Set());
    }
  };

  const toggleRow = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div
      style={{
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
      }}
    >
    <div
      style={{
        borderRadius: "var(--radius-surface)",
        border: "1px solid var(--neutral-200)",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-sm)",
        }}
      >
        <thead>
          <tr style={{ background: "var(--neutral-50)" }}>
            {selectable && (
              <th
                style={{
                  padding: "var(--space-3) var(--space-4)",
                  textAlign: "left",
                  borderBottom: "1px solid var(--neutral-200)",
                  width: 48,
                }}
              >
                <Checkbox
                  checked={allSelected}
                  indeterminate={someSelected && !allSelected}
                  onChange={toggleAll}
                />
              </th>
            )}
            {columns.map((col) => (
              <th
                key={col.key}
                style={{
                  padding: "var(--space-3) var(--space-4)",
                  textAlign: "left",
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "var(--text-xs)",
                  color: "var(--neutral-500)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderBottom: "1px solid var(--neutral-200)",
                  width: col.width,
                }}
              >
                {col.label}
              </th>
            ))}
            {actions && (
              <th
                style={{
                  padding: "var(--space-3) var(--space-4)",
                  borderBottom: "1px solid var(--neutral-200)",
                }}
              />
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const isSelected = selectedIds.has(row.id);
            return (
              <tr
                key={row.id}
                style={{
                  borderBottom: "1px solid var(--neutral-200)",
                  transition: `background var(--duration-fast) var(--ease-default)`,
                  background: isSelected ? "var(--sky-50)" : undefined,
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.background = "var(--neutral-50)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isSelected
                    ? "var(--sky-50)"
                    : "";
                }}
              >
                {selectable && (
                  <td
                    style={{
                      padding: "var(--space-3) var(--space-4)",
                      color: "var(--neutral-700)",
                      verticalAlign: "middle",
                    }}
                  >
                    <Checkbox
                      checked={isSelected}
                      onChange={() => toggleRow(row.id)}
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <td
                    key={col.key}
                    style={{
                      padding: "var(--space-3) var(--space-4)",
                      color: "var(--neutral-700)",
                      verticalAlign: "middle",
                    }}
                  >
                    {row[col.key]}
                  </td>
                ))}
                {actions && (
                  <td
                    style={{
                      padding: "var(--space-3) var(--space-4)",
                      color: "var(--neutral-700)",
                      verticalAlign: "middle",
                      textAlign: "right",
                    }}
                  >
                    {actions(row)}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
}
