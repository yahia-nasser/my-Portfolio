import React from "react";

interface DividerProps {
  orientation?: "horizontal" | "vertical";
  length?: string;
  thickness?: string;
  color?: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  length = "full",
  thickness = "1px",
  color = "#00EEFF",
  className = "mx-auto",
}) => {
  if (orientation === "horizontal") {
    return (
      <div
        className={`border-t ${className}`}
        style={{
          borderTopWidth: thickness,
          borderColor: color,
          width: length === "full" ? "100%" : length,
        }}
      />
    );
  } else {
    return (
      <div
        className={`border-l ${className}`}
        style={{
          borderLeftWidth: thickness,
          borderColor: color,
          height: length === "full" ? "100%" : length,
        }}
      />
    );
  }
};
