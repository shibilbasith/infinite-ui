import React from "react";
import { type InputProps } from "./types";
import "./Input.css";

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  type = "text",
  placeholder,
  disabled = false,
  readOnly = false,
  required = false,
  size = "medium",
  variant = "default",
  label,
  helperText,
  errorText,
  name,
  id,
  className = "",
  autoComplete,
  autoFocus = false,
  maxLength,
  minLength,
  pattern,
  min,
  max,
  step,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedBy,
  leftIcon,
  rightIcon,
  prefix,
  suffix,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const helperTextId = `${inputId}-helper`;
  const errorTextId = `${inputId}-error`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && !readOnly && onChange) {
      onChange(event.target.value, event);
    }
  };

  const containerClasses = [
    "input-container",
    `input-container--${size}`,
    `input-container--${variant}`,
    disabled ? "input-container--disabled" : "",
    readOnly ? "input-container--readonly" : "",
    leftIcon ? "input-container--with-left-icon" : "",
    rightIcon ? "input-container--with-right-icon" : "",
    prefix ? "input-container--with-prefix" : "",
    suffix ? "input-container--with-suffix" : "",
    className
  ].filter(Boolean).join(" ");

  const inputClasses = [
    "input",
    `input--${size}`,
    `input--${variant}`
  ].filter(Boolean).join(" ");

  const describedBy = [
    ariaDescribedBy,
    helperText ? helperTextId : null,
    errorText ? errorTextId : null
  ].filter(Boolean).join(" ") || undefined;

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={inputId} className="input__label">
          {label}
          {required && <span className="input__required">*</span>}
        </label>
      )}

      <div className="input__wrapper">
        {leftIcon && (
          <div className="input__left-icon">
            {leftIcon}
          </div>
        )}

        {prefix && (
          <div className="input__prefix">
            {prefix}
          </div>
        )}

        <input
          className={inputClasses}
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          name={name}
          id={inputId}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          min={min}
          max={max}
          step={step}
          aria-label={ariaLabel}
          aria-describedby={describedBy}
          data-testid="reusable-input"
          {...props}
        />

        {suffix && (
          <div className="input__suffix">
            {suffix}
          </div>
        )}

        {rightIcon && (
          <div className="input__right-icon">
            {rightIcon}
          </div>
        )}
      </div>

      {errorText && (
        <div className="input__error-text" id={errorTextId}>
          {errorText}
        </div>
      )}

      {helperText && !errorText && (
        <div className="input__helper-text" id={helperTextId}>
          {helperText}
        </div>
      )}
    </div>
  );
};

export default Input;
