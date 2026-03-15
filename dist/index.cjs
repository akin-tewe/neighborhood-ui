'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React4 = require('react');
var solid$1 = require('@heroicons/react/20/solid');
var solid = require('@heroicons/react/24/solid');
var reactDom = require('react-dom');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React4__default = /*#__PURE__*/_interopDefault(React4);

// src/components/avatar/avatar.tsx
var AVATAR_COLORS = [
  { bg: "var(--primary-500)", text: "white" },
  { bg: "var(--berry-500)", text: "white" },
  { bg: "var(--terracotta-500)", text: "white" },
  { bg: "var(--amber-400)", text: "var(--neutral-900)" },
  { bg: "var(--sky-500)", text: "white" },
  { bg: "var(--plum-500)", text: "white" },
  { bg: "var(--sage-500)", text: "white" }
];
function getAvatarColor(initials) {
  let hash = 0;
  for (let i = 0; i < initials.length; i++) {
    hash = initials.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}
var sizeMap = {
  sm: { box: 24, fontSize: 10, dot: 8 },
  md: { box: 32, fontSize: "var(--text-xs)", dot: 10 },
  lg: { box: 48, fontSize: "var(--text-sm)", dot: 12 }
};
var statusColors = {
  online: "var(--success)",
  busy: "var(--error)",
  away: "var(--amber-400)",
  offline: "var(--neutral-300)"
};
function Avatar({
  src,
  initials,
  size = "md",
  status
}) {
  const s = sizeMap[size];
  const avatarColor = getAvatarColor(initials || "");
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      style: {
        position: "relative",
        display: "inline-flex",
        borderRadius: "50%",
        overflow: "hidden",
        flexShrink: 0,
        width: s.box,
        height: s.box,
        animation: "nb-avatar-enter var(--duration-fast) var(--ease-spring) both"
      },
      children: [
        src ? /* @__PURE__ */ jsxRuntime.jsx(
          "img",
          {
            src,
            alt: "",
            style: { width: "100%", height: "100%", objectFit: "cover" }
          }
        ) : /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: avatarColor.bg,
              color: avatarColor.text,
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: s.fontSize
            },
            children: initials
          }
        ),
        status && /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: {
              position: "absolute",
              bottom: 0,
              right: 0,
              width: s.dot,
              height: s.dot,
              borderRadius: "50%",
              border: "2px solid white",
              background: statusColors[status]
            }
          }
        )
      ]
    }
  );
}
var paletteColors = /* @__PURE__ */ new Set([
  "primary",
  "berry",
  "terracotta",
  "amber",
  "sky",
  "plum",
  "sage",
  "neutral"
]);
var semanticSubtleMap = {
  success: { bg: "#dcfce7", text: "#166534" },
  warning: { bg: "#fef3c7", text: "#92400e" },
  error: { bg: "#fee2e2", text: "#991b1b" },
  info: { bg: "#dbeafe", text: "#1e40af" }
};
var semanticOutlineMap = {
  success: { text: "#166534", border: "1px solid #86efac" },
  warning: { text: "#92400e", border: "1px solid #fcd34d" },
  error: { text: "#991b1b", border: "1px solid #fca5a5" },
  info: { text: "#1e40af", border: "1px solid #93c5fd" }
};
function getColorStyles(color, variant) {
  if (paletteColors.has(color)) {
    switch (variant) {
      case "filled":
        return {
          background: color === "neutral" ? "var(--neutral-800)" : `var(--${color}-500)`,
          color: "white",
          border: "none",
          dotColor: "white"
        };
      case "outline":
        return {
          background: "transparent",
          color: `var(--${color}-600)`,
          border: `1px solid var(--${color}-300)`,
          dotColor: `var(--${color}-500)`
        };
      case "subtle":
      default:
        return {
          background: `var(--${color}-100)`,
          color: `var(--${color}-700)`,
          border: "none",
          dotColor: `var(--${color}-500)`
        };
    }
  }
  switch (variant) {
    case "filled":
      return {
        background: `var(--${color})`,
        color: "white",
        border: "none",
        dotColor: "white"
      };
    case "outline": {
      const o = semanticOutlineMap[color];
      return {
        background: "transparent",
        color: o.text,
        border: o.border,
        dotColor: `var(--${color})`
      };
    }
    case "subtle":
    default: {
      const s = semanticSubtleMap[color];
      return {
        background: s.bg,
        color: s.text,
        border: "none",
        dotColor: `var(--${color})`
      };
    }
  }
}
function Badge({
  label,
  color = "neutral",
  variant = "subtle",
  dot = false,
  size = "md"
}) {
  const colors = getColorStyles(color, variant);
  const dotSize = size === "sm" ? 7 : 8;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-1)",
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        lineHeight: 1,
        textTransform: "none",
        letterSpacing: "normal",
        textDecoration: "none",
        textIndent: 0,
        whiteSpace: "nowrap",
        borderRadius: "var(--radius-pill)",
        transition: "transform var(--duration-fast) var(--ease-default)",
        animation: "nb-badge-enter var(--duration-fast) var(--ease-spring) both",
        fontSize: size === "sm" ? "var(--text-xs)" : "var(--text-sm)",
        padding: size === "sm" ? "var(--space-1) var(--space-2)" : "var(--space-1) var(--space-3)",
        background: colors.background,
        color: colors.color,
        border: colors.border
      },
      children: [
        dot && /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: {
              width: dotSize,
              height: dotSize,
              borderRadius: "50%",
              background: colors.dotColor,
              flexShrink: 0
            }
          }
        ),
        label
      ]
    }
  );
}
function getVariantStyles(variant) {
  switch (variant) {
    case "primary":
      return { background: "var(--primary-500)", color: "white", border: "none" };
    case "secondary":
      return { background: "transparent", color: "var(--neutral-800)", border: "1px solid var(--neutral-300)" };
    case "ghost":
      return { background: "var(--neutral-200)", color: "var(--neutral-600)", border: "none" };
    case "destructive":
      return { background: "var(--error)", color: "white", border: "none" };
    default:
      return {};
  }
}
function Button({
  variant = "primary",
  size = "md",
  iconOnly = false,
  disabled = false,
  loading = false,
  children,
  onClick,
  style,
  type = "button",
  ...rest
}) {
  const [hovered, setHovered] = React4.useState(false);
  const [active, setActive] = React4.useState(false);
  const isDisabled = disabled || loading;
  const effectiveHovered = isDisabled ? false : hovered;
  const effectiveActive = isDisabled ? false : active;
  const isSm = size === "sm";
  const height = isSm ? 32 : 40;
  const fontSize = isSm ? "var(--text-sm)" : "var(--text-base)";
  let padding = isSm ? "0 var(--space-3)" : "0 var(--space-4)";
  let width;
  if (iconOnly) {
    padding = 0;
    width = height;
  }
  const variantStyles = getVariantStyles(variant);
  const baseStyles = {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    borderRadius: "var(--radius-control)",
    cursor: isDisabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-2)",
    transition: "background var(--duration-fast) var(--ease-default), border-color var(--duration-fast) var(--ease-default), opacity var(--duration-fast) var(--ease-default), transform var(--duration-fast) var(--ease-spring)",
    transform: effectiveActive ? "scale(0.96)" : effectiveHovered ? "scale(1.03)" : "scale(1)",
    whiteSpace: "nowrap",
    lineHeight: 1,
    textTransform: "none",
    letterSpacing: "normal",
    height,
    padding,
    fontSize,
    width,
    opacity: isDisabled ? 0.5 : 1,
    pointerEvents: isDisabled ? "none" : void 0,
    ...variantStyles,
    ...style
  };
  const twinDotSize = isSm ? 6 : 8;
  const twinDotA = {
    display: "inline-block",
    width: twinDotSize,
    height: twinDotSize,
    background: "currentColor",
    animation: "nb-morph-twin-a 1.4s ease-in-out infinite"
  };
  const twinDotB = {
    display: "inline-block",
    width: twinDotSize,
    height: twinDotSize,
    background: "currentColor",
    animation: "nb-morph-twin-b 1.4s ease-in-out infinite"
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type,
      disabled: isDisabled,
      "aria-busy": loading || void 0,
      onClick,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => {
        setHovered(false);
        setActive(false);
      },
      onMouseDown: () => setActive(true),
      onMouseUp: () => setActive(false),
      style: baseStyles,
      ...rest,
      children: loading ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { style: twinDotA }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { style: twinDotB })
      ] }) : children
    }
  );
}
var severityMap = {
  info: {
    bg: "var(--sky-500)",
    text: "white",
    icon: solid.InformationCircleIcon
  },
  warning: {
    bg: "var(--amber-500)",
    text: "white",
    icon: solid.ExclamationTriangleIcon
  },
  error: {
    bg: "var(--berry-500)",
    text: "white",
    icon: solid.XCircleIcon
  },
  success: {
    bg: "var(--primary-600)",
    text: "white",
    icon: solid.CheckCircleIcon
  }
};
function Banner({
  severity = "info",
  title,
  message,
  action,
  dismissible = false,
  onDismiss
}) {
  const [exiting, setExiting] = React4.useState(false);
  const s = severityMap[severity];
  const Icon = s.icon;
  const isLightText = s.text === "white";
  const buttonStyle = isLightText ? { background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "white" } : { background: "var(--neutral-50)", border: "1px solid var(--neutral-200)" };
  const handleDismiss = () => {
    setExiting(true);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: "nb-banner",
      onAnimationEnd: (e) => {
        if (e.animationName === "nb-banner-exit" && exiting) {
          onDismiss?.();
        }
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        padding: "var(--space-3) var(--space-4)",
        borderRadius: "var(--radius-surface)",
        background: s.bg,
        color: s.text,
        animation: exiting ? "nb-banner-exit var(--duration-base) var(--ease-default) forwards" : "nb-banner-enter var(--duration-base) var(--ease-spring) both"
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(Icon, { style: { width: 24, height: 24, flexShrink: 0, color: "currentColor" } }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "var(--space-1)" }, children: [
          title && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              style: {
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "var(--text-sm)",
                color: "inherit"
              },
              children: title
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              style: {
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                color: "inherit",
                opacity: 0.85,
                lineHeight: 1.5
              },
              children: message
            }
          )
        ] }),
        action && /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "ghost", size: "sm", onClick: action.onClick, style: buttonStyle, children: action.label }),
        dismissible && /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "ghost", size: "sm", iconOnly: true, onClick: handleDismiss, "aria-label": "Dismiss", style: buttonStyle, children: /* @__PURE__ */ jsxRuntime.jsx(solid$1.XMarkIcon, { style: { width: 16, height: 16 } }) })
      ]
    }
  );
}
function Checkbox({
  checked = false,
  indeterminate = false,
  onChange,
  disabled = false,
  label,
  ...rest
}) {
  const isActive = checked || indeterminate;
  const handleClick = () => {
    if (disabled) return;
    onChange?.(!checked);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-2)"
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          "button",
          {
            type: "button",
            role: "checkbox",
            "aria-checked": indeterminate ? "mixed" : checked,
            disabled,
            onClick: handleClick,
            style: {
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
              flexShrink: 0
            },
            children: [
              checked && !indeterminate && /* @__PURE__ */ jsxRuntime.jsx(
                "svg",
                {
                  width: "12",
                  height: "12",
                  viewBox: "0 0 12 12",
                  fill: "none",
                  style: {
                    transform: "scale(1)",
                    transition: `transform var(--duration-fast) var(--ease-spring)`
                  },
                  children: /* @__PURE__ */ jsxRuntime.jsx(
                    "polyline",
                    {
                      points: "3,6 6,9 10,3",
                      stroke: "#ffffff",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      fill: "none"
                    }
                  )
                }
              ),
              indeterminate && /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
                    width: 8,
                    height: 2,
                    borderRadius: 1,
                    background: "#ffffff",
                    transform: "scale(1)",
                    transition: `transform var(--duration-fast) var(--ease-spring)`
                  }
                }
              )
            ]
          }
        ),
        label && /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            onClick: handleClick,
            style: {
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              color: "var(--neutral-700)",
              cursor: disabled ? "not-allowed" : "pointer",
              userSelect: "none"
            },
            children: label
          }
        )
      ]
    }
  );
}
function Divider({
  orientation = "horizontal",
  color = "var(--neutral-200)"
}) {
  const isVertical = orientation === "vertical";
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      role: "separator",
      "aria-orientation": orientation,
      style: {
        width: isVertical ? 1 : "100%",
        height: isVertical ? "100%" : 1,
        background: color,
        alignSelf: isVertical ? "stretch" : void 0,
        flexShrink: 0
      }
    }
  );
}
function ContentSection({
  title,
  description,
  action,
  children
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("section", { style: { marginBottom: "var(--space-12)" }, children: [
    /* @__PURE__ */ jsxRuntime.jsx(Divider, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: "nb-content-section-header",
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: "var(--space-6)",
          marginBottom: "var(--space-6)"
        },
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-1)"
              },
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  "h2",
                  {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "var(--text-xl)",
                      color: "var(--neutral-900)"
                    },
                    children: title
                  }
                ),
                description && /* @__PURE__ */ jsxRuntime.jsx(
                  "p",
                  {
                    className: "nb-content-section-desc",
                    style: {
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-sm)",
                      color: "var(--neutral-500)",
                      lineHeight: 1.5
                    },
                    children: description
                  }
                )
              ]
            }
          ),
          action && /* @__PURE__ */ jsxRuntime.jsx("div", { style: { flexShrink: 0 }, children: action })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx("div", { children })
  ] });
}
function DataTable({
  columns,
  rows,
  selectable = false,
  actions
}) {
  const [selectedIds, setSelectedIds] = React4.useState(/* @__PURE__ */ new Set());
  const allSelected = rows.length > 0 && rows.every((r) => selectedIds.has(r.id));
  const someSelected = rows.some((r) => selectedIds.has(r.id));
  const toggleAll = (checked) => {
    if (checked) {
      setSelectedIds(new Set(rows.map((r) => r.id)));
    } else {
      setSelectedIds(/* @__PURE__ */ new Set());
    }
  };
  const toggleRow = (id) => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      style: {
        overflowX: "auto",
        WebkitOverflowScrolling: "touch"
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          style: {
            borderRadius: "var(--radius-surface)",
            border: "1px solid var(--neutral-200)"
          },
          children: /* @__PURE__ */ jsxRuntime.jsxs(
            "table",
            {
              style: {
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)"
              },
              children: [
                /* @__PURE__ */ jsxRuntime.jsx("thead", { children: /* @__PURE__ */ jsxRuntime.jsxs("tr", { style: { background: "var(--neutral-50)" }, children: [
                  selectable && /* @__PURE__ */ jsxRuntime.jsx(
                    "th",
                    {
                      style: {
                        padding: "var(--space-3) var(--space-4)",
                        textAlign: "left",
                        borderBottom: "1px solid var(--neutral-200)",
                        width: 48
                      },
                      children: /* @__PURE__ */ jsxRuntime.jsx(
                        Checkbox,
                        {
                          checked: allSelected,
                          indeterminate: someSelected && !allSelected,
                          onChange: toggleAll
                        }
                      )
                    }
                  ),
                  columns.map((col) => /* @__PURE__ */ jsxRuntime.jsx(
                    "th",
                    {
                      style: {
                        padding: "var(--space-3) var(--space-4)",
                        textAlign: "left",
                        fontFamily: "var(--font-display)",
                        fontWeight: 500,
                        fontSize: "var(--text-xs)",
                        color: "var(--neutral-500)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        borderBottom: "1px solid var(--neutral-200)",
                        width: col.width
                      },
                      children: col.label
                    },
                    col.key
                  )),
                  actions && /* @__PURE__ */ jsxRuntime.jsx(
                    "th",
                    {
                      style: {
                        padding: "var(--space-3) var(--space-4)",
                        borderBottom: "1px solid var(--neutral-200)"
                      }
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntime.jsx("tbody", { children: rows.map((row) => {
                  const isSelected = selectedIds.has(row.id);
                  return /* @__PURE__ */ jsxRuntime.jsxs(
                    "tr",
                    {
                      style: {
                        borderBottom: "1px solid var(--neutral-200)",
                        transition: `background var(--duration-fast) var(--ease-default)`,
                        background: isSelected ? "var(--sky-50)" : void 0
                      },
                      onMouseEnter: (e) => {
                        if (!isSelected) {
                          e.currentTarget.style.background = "var(--neutral-50)";
                        }
                      },
                      onMouseLeave: (e) => {
                        e.currentTarget.style.background = isSelected ? "var(--sky-50)" : "";
                      },
                      children: [
                        selectable && /* @__PURE__ */ jsxRuntime.jsx(
                          "td",
                          {
                            style: {
                              padding: "var(--space-3) var(--space-4)",
                              color: "var(--neutral-700)",
                              verticalAlign: "middle"
                            },
                            children: /* @__PURE__ */ jsxRuntime.jsx(
                              Checkbox,
                              {
                                checked: isSelected,
                                onChange: () => toggleRow(row.id)
                              }
                            )
                          }
                        ),
                        columns.map((col) => /* @__PURE__ */ jsxRuntime.jsx(
                          "td",
                          {
                            style: {
                              padding: "var(--space-3) var(--space-4)",
                              color: "var(--neutral-700)",
                              verticalAlign: "middle"
                            },
                            children: row[col.key]
                          },
                          col.key
                        )),
                        actions && /* @__PURE__ */ jsxRuntime.jsx(
                          "td",
                          {
                            style: {
                              padding: "var(--space-3) var(--space-4)",
                              color: "var(--neutral-700)",
                              verticalAlign: "middle",
                              textAlign: "right"
                            },
                            children: actions(row)
                          }
                        )
                      ]
                    },
                    row.id
                  );
                }) })
              ]
            }
          )
        }
      )
    }
  );
}
function EmptyState({
  icon,
  title,
  description,
  action,
  variant = "full"
}) {
  const isFull = variant === "full";
  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: isFull ? "var(--space-12)" : "var(--space-6)",
    gap: isFull ? "var(--space-4)" : "var(--space-2)",
    ...isFull && {
      position: "relative",
      borderRadius: "var(--radius-surface)"
    }
  };
  const iconStyle = {
    color: "var(--neutral-300)",
    marginBottom: isFull ? "var(--space-2)" : void 0
  };
  const titleStyle = {
    fontFamily: "var(--font-display)",
    fontWeight: isFull ? 600 : 500,
    fontSize: isFull ? "var(--text-lg)" : "var(--text-sm)",
    color: isFull ? "var(--neutral-900)" : "var(--neutral-700)",
    margin: 0
  };
  const descriptionStyle = {
    fontFamily: "var(--font-body)",
    fontSize: isFull ? "var(--text-sm)" : "var(--text-xs)",
    color: isFull ? "var(--neutral-500)" : "var(--neutral-400)",
    maxWidth: isFull ? 320 : 240,
    lineHeight: 1.5,
    margin: 0
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { style: wrapperStyle, children: [
    isFull && /* @__PURE__ */ jsxRuntime.jsx(
      "svg",
      {
        "aria-hidden": "true",
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ jsxRuntime.jsx(
          "rect",
          {
            x: "1",
            y: "1",
            rx: "12",
            ry: "12",
            fill: "none",
            stroke: "var(--neutral-300)",
            strokeWidth: "2",
            strokeDasharray: "8 12",
            style: { width: "calc(100% - 2px)", height: "calc(100% - 2px)" }
          }
        )
      }
    ),
    icon && /* @__PURE__ */ jsxRuntime.jsx("div", { style: iconStyle, children: icon }),
    /* @__PURE__ */ jsxRuntime.jsx("h3", { style: titleStyle, children: title }),
    description && /* @__PURE__ */ jsxRuntime.jsx("p", { style: descriptionStyle, children: description }),
    action && /* @__PURE__ */ jsxRuntime.jsx("div", { children: action })
  ] });
}
function FormSection({
  title,
  description,
  children,
  footer
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { style: { marginBottom: "var(--space-6)" }, children: /* @__PURE__ */ jsxRuntime.jsx(Divider, {}) }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { marginBottom: "var(--space-6)" }, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "h3",
        {
          style: {
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "var(--text-xl)",
            color: "var(--neutral-900)"
          },
          children: title
        }
      ),
      description && /* @__PURE__ */ jsxRuntime.jsx(
        "p",
        {
          style: {
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-sm)",
            color: "var(--neutral-500)",
            lineHeight: 1.5,
            marginTop: "var(--space-1)"
          },
          children: description
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { children }),
    footer && /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "nb-form-footer",
        style: {
          marginTop: "var(--space-6)",
          display: "flex",
          gap: "var(--space-3)",
          justifyContent: "flex-end"
        },
        children: footer
      }
    )
  ] });
}
function Input({
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
}) {
  const id = React4__default.default.useId();
  const inputId = `input-${id}`;
  const errorId = `${inputId}-error`;
  const [focused, setFocused] = React4.useState(false);
  const isSearch = variant === "search";
  const isSm = size === "sm";
  const icon = prefixIcon ?? (isSearch ? /* @__PURE__ */ jsxRuntime.jsx(solid$1.MagnifyingGlassIcon, { style: { width: 16, height: 16 } }) : null);
  let borderColor = "transparent";
  if (error) borderColor = "var(--error)";
  else if (focused) borderColor = "var(--sky-200)";
  else if (isSearch) borderColor = "var(--neutral-300)";
  let background = "var(--neutral-50)";
  if (disabled) background = "var(--neutral-200)";
  else if (isSearch) background = "white";
  const showError = error && errorMessage;
  const bottomText = showError ? errorMessage : helperText;
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { animation: "nb-input-enter var(--duration-fast) var(--ease-spring) both" }, children: [
    label && /* @__PURE__ */ jsxRuntime.jsx(
      "label",
      {
        htmlFor: inputId,
        style: {
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "var(--text-sm)",
          color: "var(--neutral-700)",
          marginBottom: "var(--space-1)",
          display: "block"
        },
        children: label
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        style: {
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
          cursor: disabled ? "not-allowed" : void 0,
          transition: "border-color var(--duration-base) var(--ease-default), background var(--duration-base) var(--ease-default)"
        },
        children: [
          icon && /* @__PURE__ */ jsxRuntime.jsx("span", { style: { color: "var(--neutral-400)", flexShrink: 0, display: "flex", alignItems: "center", fontSize: isSm ? "var(--text-sm)" : "var(--text-base)" }, children: icon }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "input",
            {
              id: inputId,
              disabled,
              placeholder,
              "aria-invalid": error || void 0,
              "aria-describedby": showError ? errorId : void 0,
              onFocus: (e) => {
                setFocused(true);
                onFocus?.(e);
              },
              onBlur: (e) => {
                setFocused(false);
                onBlur?.(e);
              },
              style: {
                border: "none",
                outline: "none",
                background: "transparent",
                flex: 1,
                fontFamily: "inherit",
                fontSize: "inherit",
                color: "var(--neutral-900)",
                fontWeight: 500,
                width: "100%",
                cursor: disabled ? "not-allowed" : void 0
              },
              ...rest
            }
          )
        ]
      }
    ),
    bottomText && /* @__PURE__ */ jsxRuntime.jsx(
      "span",
      {
        id: showError ? errorId : void 0,
        style: {
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-xs)",
          marginTop: "var(--space-1)",
          display: "block",
          color: showError ? "var(--error)" : "var(--neutral-400)"
        },
        children: bottomText
      }
    )
  ] });
}
function Menu({
  trigger,
  items,
  align = "left"
}) {
  const [open, setOpen] = React4.useState(false);
  const [hoveredIndex, setHoveredIndex] = React4.useState(null);
  const [pos, setPos] = React4.useState(null);
  const triggerRef = React4.useRef(null);
  const panelRef = React4.useRef(null);
  const updatePosition = React4.useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setPos({
      top: rect.bottom + 8,
      left: rect.left,
      right: window.innerWidth - rect.right
    });
  }, []);
  React4.useEffect(() => {
    if (!open) return;
    updatePosition();
    const handler = (e) => {
      if (triggerRef.current && !triggerRef.current.contains(e.target) && panelRef.current && !panelRef.current.contains(e.target)) {
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
  const isCheckboxItem = (item) => item.checked !== void 0 || item.onCheckedChange !== void 0;
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { ref: triggerRef, style: { display: "inline-block" }, children: /* @__PURE__ */ jsxRuntime.jsx("div", { onClick: () => setOpen((v) => !v), children: trigger }) }),
    open && pos && typeof document !== "undefined" && reactDom.createPortal(
      /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          ref: panelRef,
          style: {
            position: "fixed",
            top: pos.top,
            left: align === "left" ? pos.left : void 0,
            right: align === "right" ? pos.right : void 0,
            minWidth: 200,
            maxWidth: "min(280px, calc(100vw - 2rem))",
            background: "white",
            borderRadius: "var(--radius-surface)",
            border: "1px solid var(--neutral-200)",
            boxShadow: "var(--shadow-overlay)",
            padding: "var(--space-2) 0",
            zIndex: 9999,
            animation: "nb-menu-enter var(--duration-fast) var(--ease-spring)"
          },
          children: items.map((item, i) => {
            const isCheckbox = isCheckboxItem(item);
            const destructiveColor = "var(--error)";
            const itemColor = item.destructive ? destructiveColor : "var(--neutral-700)";
            return /* @__PURE__ */ jsxRuntime.jsxs(React4__default.default.Fragment, { children: [
              isCheckbox ? /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  style: {
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
                    transition: "background var(--duration-fast) var(--ease-default)"
                  },
                  onMouseEnter: () => setHoveredIndex(i),
                  onMouseLeave: () => setHoveredIndex(null),
                  children: /* @__PURE__ */ jsxRuntime.jsx(
                    Checkbox,
                    {
                      checked: item.checked,
                      onChange: (checked) => item.onCheckedChange?.(checked),
                      label: item.label
                    }
                  )
                }
              ) : /* @__PURE__ */ jsxRuntime.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    item.onClick?.();
                    setOpen(false);
                  },
                  onMouseEnter: () => setHoveredIndex(i),
                  onMouseLeave: () => setHoveredIndex(null),
                  style: {
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
                    transition: "background var(--duration-fast) var(--ease-default)"
                  },
                  children: [
                    item.icon && /* @__PURE__ */ jsxRuntime.jsx(
                      "span",
                      {
                        style: {
                          flexShrink: 0,
                          width: 16,
                          height: 16,
                          color: item.destructive ? destructiveColor : "var(--neutral-400)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        },
                        children: item.icon
                      }
                    ),
                    /* @__PURE__ */ jsxRuntime.jsxs("span", { style: { flex: 1 }, children: [
                      item.label,
                      item.description && /* @__PURE__ */ jsxRuntime.jsx(
                        "span",
                        {
                          style: {
                            display: "block",
                            fontSize: "var(--text-xs)",
                            color: "var(--neutral-400)",
                            marginTop: 2
                          },
                          children: item.description
                        }
                      )
                    ] }),
                    item.shortcut && /* @__PURE__ */ jsxRuntime.jsx(
                      "span",
                      {
                        style: {
                          fontSize: "var(--text-xs)",
                          color: "var(--neutral-300)",
                          fontFamily: "var(--font-display)",
                          flexShrink: 0
                        },
                        children: item.shortcut
                      }
                    )
                  ]
                }
              ),
              item.dividerAfter && /* @__PURE__ */ jsxRuntime.jsx("div", { style: { margin: "var(--space-1) 0" }, children: /* @__PURE__ */ jsxRuntime.jsx(Divider, {}) })
            ] }, i);
          })
        }
      ),
      document.body
    )
  ] });
}
function PropertyRow({ label, value, icon }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: "nb-property-row",
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        padding: "var(--space-2) 0",
        minHeight: 36
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "var(--space-2)"
            },
            children: [
              icon && /* @__PURE__ */ jsxRuntime.jsx(
                "span",
                {
                  style: {
                    color: "var(--neutral-400)",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center"
                  },
                  children: icon
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "span",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    fontSize: "var(--text-sm)",
                    color: "var(--neutral-500)",
                    minWidth: 120,
                    flexShrink: 0
                  },
                  children: label
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            style: {
              flex: 1,
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              color: "var(--neutral-900)"
            },
            children: value
          }
        )
      ]
    }
  );
}
function SegmentedControl({
  options,
  activeValue,
  onChange,
  size = "md"
}) {
  const [hoveredValue, setHoveredValue] = React4.useState(null);
  const isSmall = size === "sm";
  const wrapperStyle = {
    display: "inline-flex",
    background: "var(--neutral-200)",
    borderRadius: "var(--radius-control)",
    padding: 3,
    gap: 2
  };
  const getButtonStyle = (value) => {
    const isActive = value === activeValue;
    const isHovered = value === hoveredValue && !isActive;
    return {
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: isSmall ? "var(--text-xs)" : "var(--text-sm)",
      padding: isSmall ? "var(--space-1) var(--space-3)" : "var(--space-1) var(--space-4)",
      border: "none",
      cursor: "pointer",
      borderRadius: 6,
      transition: "background var(--duration-fast) var(--ease-default), color var(--duration-fast) var(--ease-default), box-shadow var(--duration-fast) var(--ease-default)",
      background: isActive ? "white" : "transparent",
      color: isActive ? "var(--neutral-900)" : isHovered ? "var(--neutral-700)" : "var(--neutral-500)",
      boxShadow: isActive ? "var(--shadow-subtle)" : "none"
    };
  };
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "nb-segmented", style: wrapperStyle, children: options.map((option) => /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      type: "button",
      style: getButtonStyle(option.value),
      onClick: () => onChange(option.value),
      onMouseEnter: () => setHoveredValue(option.value),
      onMouseLeave: () => setHoveredValue(null),
      children: option.label
    },
    option.value
  )) });
}
function Select({
  value,
  placeholder,
  variant = "form",
  size = "md",
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hovered, setHovered] = React4.useState(false);
  const [pressed, setPressed] = React4.useState(false);
  const showPlaceholder = !value && !!placeholder;
  const displayText = value || placeholder || "";
  const isForm = variant === "form";
  const isSm = size === "sm";
  const scale = disabled ? 1 : pressed ? 0.98 : hovered ? 1.02 : 1;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      type: "button",
      disabled,
      onClick,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => {
        setHovered(false);
        setPressed(false);
      },
      onMouseDown: () => setPressed(true),
      onMouseUp: () => setPressed(false),
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-2)",
        fontFamily: "var(--font-body)",
        borderRadius: "var(--radius-control)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: `border-color var(--duration-base) var(--ease-default), transform var(--duration-fast) var(--ease-spring)`,
        transform: `scale(${scale})`,
        // variant styles
        background: isForm ? "var(--neutral-50)" : "transparent",
        border: isForm ? "1px solid var(--neutral-300)" : "none",
        color: isForm ? showPlaceholder ? "var(--neutral-400)" : "var(--neutral-900)" : "var(--neutral-700)",
        fontWeight: isForm ? 400 : 500,
        // size styles
        height: isSm ? 32 : 40,
        padding: isSm ? "0 var(--space-3)" : "0 var(--space-4)",
        fontSize: isSm ? "var(--text-sm)" : "var(--text-base)",
        outline: "none",
        ...style
      },
      ...rest,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: displayText }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: {
              color: "var(--neutral-400)",
              display: "flex",
              alignItems: "center"
            },
            children: /* @__PURE__ */ jsxRuntime.jsx(solid$1.ChevronDownIcon, { style: { width: 16, height: 16 } })
          }
        )
      ]
    }
  );
}
function SettingRow({ label, description, control }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: "nb-setting-row",
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "var(--space-4)",
        padding: "var(--space-4) 0",
        minHeight: 48
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-1)",
              flex: 1,
              minWidth: 0
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "span",
                {
                  style: {
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "var(--text-base)",
                    color: "var(--neutral-900)"
                  },
                  children: label
                }
              ),
              description && /* @__PURE__ */ jsxRuntime.jsx(
                "span",
                {
                  style: {
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-sm)",
                    color: "var(--neutral-500)",
                    lineHeight: 1.5
                  },
                  children: description
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "nb-setting-control", style: { flexShrink: 0 }, children: control })
      ]
    }
  );
}
function Tabs({
  items,
  activeValue,
  onChange,
  variant = "bracket",
  size = "md",
  surface = "light"
}) {
  const isSm = size === "sm";
  const isBracket = variant === "bracket";
  const isDark = surface === "dark";
  return /* @__PURE__ */ jsxRuntime.jsx("div", { role: "tablist", style: { display: "flex", gap: "var(--space-1)" }, children: items.map((item) => {
    const isActive = item.value === activeValue;
    return /* @__PURE__ */ jsxRuntime.jsx(
      TabButton,
      {
        item,
        isActive,
        isBracket,
        isSm,
        isDark,
        onClick: () => onChange(item.value)
      },
      item.value
    );
  }) });
}
function TabButton({
  item,
  isActive,
  isBracket,
  isSm,
  isDark,
  onClick
}) {
  const [hovered, setHovered] = React4.useState(false);
  const activeColor = isDark ? "var(--neutral-50)" : "var(--neutral-900)";
  const hoverColor = isDark ? "var(--neutral-200)" : "var(--neutral-600)";
  const inactiveColor = "var(--neutral-400)";
  const barColor = isDark ? "var(--neutral-50)" : "var(--neutral-800)";
  const baseStyle = {
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    cursor: "pointer",
    border: "none",
    background: "transparent",
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    fontSize: isSm ? "var(--text-sm)" : "var(--text-base)",
    outline: "none",
    position: "relative"
  };
  let variantStyle;
  if (isBracket) {
    variantStyle = {
      padding: isSm ? "var(--space-1) var(--space-5)" : "var(--space-2) var(--space-6)",
      color: isActive ? activeColor : hovered ? hoverColor : inactiveColor,
      transform: isActive ? "translateY(1px)" : "translateY(0)",
      transition: "transform 0.35s var(--ease-spring), color 0.15s ease"
    };
  } else {
    variantStyle = {
      padding: isSm ? "var(--space-1) var(--space-3)" : "var(--space-2) var(--space-4)",
      color: isActive ? activeColor : hovered ? hoverColor : inactiveColor,
      transform: isActive ? "translateY(3px)" : "translateY(0)",
      background: isActive ? isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)" : "transparent",
      borderRadius: "var(--radius-control)",
      boxShadow: isActive ? "inset 0 2px 4px rgba(0,0,0,0.06)" : "inset 0 2px 4px rgba(0,0,0,0)",
      transition: "transform 0.35s var(--ease-spring), box-shadow 0.2s ease, background 0.15s ease, color 0.15s ease"
    };
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "button",
    {
      type: "button",
      role: "tab",
      "aria-selected": isActive,
      onClick,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: { ...baseStyle, ...variantStyle },
      children: [
        isBracket && /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: {
              position: "absolute",
              left: 0,
              top: "50%",
              width: 4,
              height: 18,
              borderRadius: "var(--radius-pill)",
              background: barColor,
              transform: `translateY(-50%) ${isActive ? "scaleY(1)" : "scaleY(0)"}`,
              opacity: isActive ? 1 : 0,
              transition: "transform 0.25s var(--ease-spring), opacity 0.15s ease"
            }
          }
        ),
        item.label,
        item.count !== void 0 && /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: {
              fontSize: "var(--text-xs)",
              color: inactiveColor
            },
            children: item.count
          }
        ),
        isBracket && /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            style: {
              position: "absolute",
              right: 0,
              top: "50%",
              width: 4,
              height: 18,
              borderRadius: "var(--radius-pill)",
              background: barColor,
              transform: `translateY(-50%) ${isActive ? "scaleY(1)" : "scaleY(0)"}`,
              opacity: isActive ? 1 : 0,
              transition: "transform 0.25s var(--ease-spring), opacity 0.15s ease"
            }
          }
        )
      ]
    }
  );
}
function Toggle({
  checked,
  onChange,
  disabled = false,
  ...rest
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      className: "nb-toggle",
      type: "button",
      role: "switch",
      "aria-checked": checked,
      disabled,
      onClick: () => onChange(!checked),
      onKeyDown: (e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          if (!disabled) onChange(!checked);
        }
      },
      style: {
        position: "relative",
        width: 40,
        height: 24,
        borderRadius: "var(--radius-pill)",
        background: checked ? "var(--amber-400)" : "var(--neutral-200)",
        border: "none",
        outline: "2px solid transparent",
        padding: 0,
        cursor: disabled ? "not-allowed" : "pointer",
        pointerEvents: disabled ? "none" : "auto",
        opacity: disabled ? 0.5 : 1,
        display: "inline-flex",
        alignItems: "center",
        transition: `background var(--duration-fast) var(--ease-default)`
      },
      ...rest,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "span",
        {
          style: {
            position: "absolute",
            top: checked ? 3 : 5,
            left: checked ? 19 : 5,
            width: checked ? 18 : 14,
            height: checked ? 18 : 14,
            borderRadius: "var(--radius-pill)",
            background: "white",
            boxShadow: "var(--shadow-subtle)",
            transition: `left var(--duration-fast) var(--ease-spring), width var(--duration-fast) var(--ease-spring), height var(--duration-fast) var(--ease-spring), top var(--duration-fast) var(--ease-spring)`
          }
        }
      )
    }
  );
}
function Tooltip({
  content,
  position = "top",
  children
}) {
  const [hovered, setHovered] = React4.useState(false);
  const isTop = position === "top";
  const tooltipStyle = {
    position: "absolute",
    ...isTop ? { bottom: "calc(100% + 6px)" } : { top: "calc(100% + 6px)" },
    left: "50%",
    transform: hovered ? "translateX(-50%)" : "translateX(-50%) scale(0.9)",
    background: "var(--neutral-800)",
    color: "white",
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-xs)",
    fontWeight: 500,
    padding: "var(--space-1) var(--space-2)",
    borderRadius: "var(--radius-control)",
    whiteSpace: "nowrap",
    pointerEvents: "none",
    opacity: hovered ? 1 : 0,
    transition: "opacity var(--duration-fast) var(--ease-default), transform var(--duration-fast) var(--ease-spring)",
    zIndex: 50
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      style: { display: "inline-flex", position: "relative" },
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx("span", { style: tooltipStyle, children: content })
      ]
    }
  );
}

exports.Avatar = Avatar;
exports.Badge = Badge;
exports.Banner = Banner;
exports.Button = Button;
exports.Checkbox = Checkbox;
exports.ContentSection = ContentSection;
exports.DataTable = DataTable;
exports.Divider = Divider;
exports.EmptyState = EmptyState;
exports.FormSection = FormSection;
exports.Input = Input;
exports.Menu = Menu;
exports.PropertyRow = PropertyRow;
exports.SegmentedControl = SegmentedControl;
exports.Select = Select;
exports.SettingRow = SettingRow;
exports.Tabs = Tabs;
exports.Toggle = Toggle;
exports.Tooltip = Tooltip;
