import React, { useState } from "react";
import "./Switch.css";

interface SwitchProps {
  checked?: boolean
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  label?: string
  className?: string
}

const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
  className = ""
}) => {
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState(false);
  const currentChecked = isControlled ? checked : internalChecked;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    if (!isControlled) setInternalChecked(newChecked);
    onChange?.(newChecked, event);
  };

  return (
    <label className={`custom-switch ${disabled ? "disabled" : ""} ${className}`}>
      <input
        type="checkbox"
        className="custom-switch-input"
        checked={currentChecked}
        onChange={handleChange}
        disabled={disabled}
      />
      <span className="custom-switch-slider" />
      {label && <span className="custom-switch-label">{label}</span>}
    </label>
  );
};

export default Switch;
