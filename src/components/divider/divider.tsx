export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  color?: string;
}

export default function Divider({
  orientation = "horizontal",
  color = "var(--neutral-200)",
}: DividerProps) {
  const isVertical = orientation === "vertical";

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      style={{
        width: isVertical ? 1 : "100%",
        height: isVertical ? "100%" : 1,
        background: color,
        alignSelf: isVertical ? "stretch" : undefined,
        flexShrink: 0,
      }}
    />
  );
}
