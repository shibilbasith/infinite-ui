import React, { type ReactNode } from "react";
import "./Tooltip.css";
export interface TooltipProps {
    children: ReactNode;
    text: string;
    position?: "top" | "bottom" | "left" | "right";
    className?: string;
}
declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
