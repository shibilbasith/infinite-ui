import React, { type ReactNode } from "react";
import "./Tooltip.css";

export interface TooltipProps {
  children: ReactNode
  text: string
  position?: "top" | "bottom" | "left" | "right"
  className?: string
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  position = "top",
  className = ""
}) => {
  const tooltipClasses = [
    "infinite-tooltip",
    `infinite-tooltip--${position}`,
    className
  ].filter(Boolean).join(" ");

  return (
    <div className="infinite-tooltip-wrapper">
      {children}
      <span className={tooltipClasses} data-testid="reusable-tooltip">
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
