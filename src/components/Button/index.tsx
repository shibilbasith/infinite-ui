import React from "react";
import { type ButtonProps } from "./types";
import "./Button.css";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  type = "button",
  className = "",
  ...props
}) => {
  const buttonClasses = [
    "infinite-btn",
    `infinite-btn--${variant}`,
    `infinite-btn--${size}`,
    className
  ].filter(Boolean).join(" ");

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      type={type}
      data-testid="reusable-button"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
