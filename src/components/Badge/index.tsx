import React from "react";
import "./Badge.css";
import { type BadgeProps } from "./type";

const Badge: React.FC<BadgeProps> = ({
  type = "number",
  content,
  position = "top-right",
  className = "",
  children
}) => {
  return (
    <div className={`infinite-badge-wrapper ${className}`}>
      {children}
      <span
        className={`infinite-badge infinite-badge-${type} infinite-badge-${position}`}
      >
        {type !== "dot" && content}
      </span>
    </div>
  );
};

export default Badge;
