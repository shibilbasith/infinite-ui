import React from "react";
import { type RadioGroupProps } from "./types";
import "./Radio.css";

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  defaultValue,
  disabled = false,
  size = "medium",
  variant = "primary",
  orientation = "vertical",
  onChange,
  onFocus,
  onBlur,
  className = "",
  labelClassName = "",
  groupLabel,
  required = false,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value, event);
    }
  };

  const groupClasses = [
    "infinite-radio-group",
    `infinite-radio-group--${orientation}`,
    disabled && "infinite-radio-group--disabled",
    className
  ].filter(Boolean).join(" ");

  const radioClasses = [
    "infinite-radio",
    `infinite-radio--${size}`,
    `infinite-radio--${variant}`,
    disabled && "infinite-radio--disabled"
  ].filter(Boolean).join(" ");

  const labelClasses = [
    "infinite-radio__label",
    `infinite-radio__label--${size}`,
    disabled && "infinite-radio__label--disabled",
    labelClassName
  ].filter(Boolean).join(" ");

  return (
    <div
      className={groupClasses}
      role="radiogroup"
      aria-labelledby={groupLabel ? `${name}-group-label` : undefined}
      {...props}
    >
      {groupLabel && (
        <div
          id={`${name}-group-label`}
          className={`infinite-radio-group__label infinite-radio-group__label--${size}`}
        >
          {groupLabel}
          {required && <span className="infinite-radio__required">*</span>}
        </div>
      )}

      {options.map((option, index) => {
        const radioId = `${name}-${index}`;
        const isDisabled = disabled || option.disabled;

        return (
          <div key={option.value} className="infinite-radio-wrapper">
            <input
              type="radio"
              id={radioId}
              name={name}
              value={option.value}
              checked={value ? value === option.value : undefined}
              defaultChecked={defaultValue ? defaultValue === option.value : undefined}
              disabled={isDisabled}
              required={required}
              onChange={handleChange}
              onFocus={onFocus}
              onBlur={onBlur}
              className={radioClasses}
              data-testid={`infinite-radio-${option.value}`}
            />
            <label
              htmlFor={radioId}
              className={[
                labelClasses,
                isDisabled && "infinite-radio__label--disabled"
              ].filter(Boolean).join(" ")}
            >
              {option.label}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioGroup;
