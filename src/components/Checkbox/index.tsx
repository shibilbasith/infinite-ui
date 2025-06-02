import React, { useEffect, useRef } from "react";
import { type CheckboxProps } from "./types";
import "./Checkbox.css";

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  checked,
  defaultChecked,
  disabled = false,
  indeterminate = false,
  label,
  size = "medium",
  variant = "primary",
  onChange,
  onFocus,
  onBlur,
  className = "",
  labelClassName = "",
  required = false,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const checkboxClasses = [
    "infinite-checkbox",
    `infinite-checkbox--${size}`,
    `infinite-checkbox--${variant}`,
    disabled && "infinite-checkbox--disabled",
    indeterminate && "infinite-checkbox--indeterminate",
    className
  ].filter(Boolean).join(" ");

  const labelClasses = [
    "infinite-checkbox__label",
    `infinite-checkbox__label--${size}`,
    disabled && "infinite-checkbox__label--disabled",
    labelClassName
  ].filter(Boolean).join(" ");

  const checkboxElement = (
    <input
      ref={inputRef}
      type="checkbox"
      id={id}
      name={name}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      required={required}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      className={checkboxClasses}
      data-testid="checkbox-input"
      {...props}
    />
  );

  if (label) {
    return (
      <div className="infinite-checkbox-wrapper">
        {checkboxElement}
        <label htmlFor={id} className={labelClasses}>
          {label}
          {required && <span className="infinite-checkbox__required">*</span>}
        </label>
      </div>
    );
  }

  return checkboxElement;
};

export default Checkbox;
