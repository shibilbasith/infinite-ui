// SegmentedControl.tsx
import React, { useState } from "react";
import "./Segmented.css";
import { type SegmentedControlProps } from "./type";

const Segmented: React.FC<SegmentedControlProps> = ({
  options,
  defaultValue,
  onChange,
  size = "medium",
  variant = "default",
  disabled = false,
  className = "",
  fullWidth = false
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || options[0]?.value);

  const handleSelect = (value: string) => {
    if (disabled) return;
    setSelectedValue(value);
    onChange?.(value);
  };

  return (
    <div
      className={`
        infinite-segmented 
        infinite-segmented-${size} 
        infinite-segmented-${variant}
        ${fullWidth ? "infinite-segmented-full-width" : ""}
        ${disabled ? "infinite-segmented-disabled" : ""}
        ${className}
      `.trim()}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`
            infinite-segmented-option
            ${selectedValue === option.value ? "infinite-segmented-option-active" : ""}
            ${option.disabled ? "infinite-segmented-option-disabled" : ""}
          `.trim()}
          onClick={() => { handleSelect(option.value); }}
          disabled={disabled || option.disabled}
          aria-pressed={selectedValue === option.value}
        >
          {option.icon && (
            <span className="infinite-segmented-option-icon">
              {option.icon}
            </span>
          )}
          <span className="infinite-segmented-option-label">
            {option.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Segmented;
