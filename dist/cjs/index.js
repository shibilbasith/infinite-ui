'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$e = ".infinite-btn {\n  font-family: inherit;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  outline: none;\n  border: 2px solid;\n  text-decoration: none;\n  display: inline-block;\n  text-align: center;\n}\n\n/* Variants */\n.infinite-btn--primary {\n  background-color: #007bff;\n  color: white;\n  border-color: #007bff;\n}\n\n.infinite-btn--primary:hover:not(:disabled) {\n  background-color: #0056b3;\n  border-color: #0056b3;\n}\n\n.infinite-btn--secondary {\n  background-color: #6c757d;\n  color: white;\n  border-color: #6c757d;\n}\n\n.infinite-btn--secondary:hover:not(:disabled) {\n  background-color: #545b62;\n  border-color: #545b62;\n}\n\n.infinite-btn--danger {\n  background-color: #dc3545;\n  color: white;\n  border-color: #dc3545;\n}\n\n.infinite-btn--danger:hover:not(:disabled) {\n  background-color: #c82333;\n  border-color: #c82333;\n}\n\n.infinite-btn--outline {\n  background-color: transparent;\n  color: #007bff;\n  border-color: #007bff;\n}\n\n.infinite-btn--outline:hover:not(:disabled) {\n  background-color: #007bff;\n  color: white;\n}\n\n/* Sizes */\n.infinite-btn--small {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.25rem;\n}\n\n.infinite-btn--medium {\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  border-radius: 0.375rem;\n}\n\n.infinite-btn--large {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.125rem;\n  border-radius: 0.5rem;\n}\n\n/* States */\n.infinite-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.infinite-btn:focus {\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);\n}\n\n.infinite-btn:active:not(:disabled) {\n  transform: translateY(1px);\n}";
styleInject(css_248z$e);

const Button = ({ children, variant = "primary", size = "medium", disabled = false, onClick, type = "button", className = "", ...props }) => {
    const buttonClasses = [
        "infinite-btn",
        `infinite-btn--${variant}`,
        `infinite-btn--${size}`,
        className
    ].filter(Boolean).join(" ");
    return (jsxRuntime.jsx("button", { className: buttonClasses, disabled: disabled, onClick: onClick, type: type, "data-testid": "reusable-button", ...props, children: children }));
};

var css_248z$d = ".infinite-checkbox-wrapper {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}\n\n.infinite-checkbox {\n  appearance: none;\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid #d1d5db;\n  border-radius: 0.25rem;\n  background-color: #ffffff;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n  flex-shrink: 0;\n}\n\n.infinite-checkbox:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);\n}\n\n/* Sizes */\n.infinite-checkbox--small {\n  width: 0.875rem;\n  height: 0.875rem;\n  border-radius: 0.2rem;\n}\n\n.infinite-checkbox--medium {\n  width: 1rem;\n  height: 1rem;\n  border-radius: 0.25rem;\n}\n\n.infinite-checkbox--large {\n  width: 1.25rem;\n  height: 1.25rem;\n  border-radius: 0.3rem;\n}\n\n/* Variants - Unchecked States */\n.infinite-checkbox--primary {\n  border-color: #d1d5db;\n}\n\n.infinite-checkbox--secondary {\n  border-color: #9ca3af;\n}\n\n.infinite-checkbox--success {\n  border-color: #10b981;\n}\n\n.infinite-checkbox--danger {\n  border-color: #ef4444;\n}\n\n/* Checked States */\n.infinite-checkbox--primary:checked {\n  background-color: #3b82f6;\n  border-color: #3b82f6;\n}\n\n.infinite-checkbox--secondary:checked {\n  background-color: #6b7280;\n  border-color: #6b7280;\n}\n\n.infinite-checkbox--success:checked {\n  background-color: #10b981;\n  border-color: #10b981;\n}\n\n.infinite-checkbox--danger:checked {\n  background-color: #ef4444;\n  border-color: #ef4444;\n}\n\n/* Checkmark */\n.infinite-checkbox:checked::after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) rotate(45deg);\n  width: 0.25rem;\n  height: 0.5rem;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n}\n\n.infinite-checkbox--small:checked::after {\n  width: 0.2rem;\n  height: 0.4rem;\n  border-width: 0 1.5px 1.5px 0;\n}\n\n.infinite-checkbox--large:checked::after {\n  width: 0.3rem;\n  height: 0.6rem;\n  border-width: 0 2.5px 2.5px 0;\n}\n\n/* Indeterminate State */\n.infinite-checkbox--indeterminate {\n  background-color: #3b82f6;\n  border-color: #3b82f6;\n}\n\n.infinite-checkbox--indeterminate::after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 0.5rem;\n  height: 2px;\n  background-color: white;\n  border-radius: 1px;\n}\n\n.infinite-checkbox--small.infinite-checkbox--indeterminate::after {\n  width: 0.4rem;\n  height: 1.5px;\n}\n\n.infinite-checkbox--large.infinite-checkbox--indeterminate::after {\n  width: 0.6rem;\n  height: 2.5px;\n}\n\n/* Disabled State */\n.infinite-checkbox--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.infinite-checkbox--disabled:checked {\n  background-color: #9ca3af;\n  border-color: #9ca3af;\n}\n\n/* Hover States */\n.infinite-checkbox:not(:disabled):hover {\n  border-color: #3b82f6;\n}\n\n.infinite-checkbox--secondary:not(:disabled):hover {\n  border-color: #6b7280;\n}\n\n.infinite-checkbox--success:not(:disabled):hover {\n  border-color: #059669;\n}\n\n.infinite-checkbox--danger:not(:disabled):hover {\n  border-color: #dc2626;\n}\n\n/* Label Styles */\n.infinite-checkbox__label {\n  font-size: 0.875rem;\n  color: #374151;\n  cursor: pointer;\n  user-select: none;\n  line-height: 1.5;\n}\n\n.infinite-checkbox__label--small {\n  font-size: 0.75rem;\n}\n\n.infinite-checkbox__label--medium {\n  font-size: 0.875rem;\n}\n\n.infinite-checkbox__label--large {\n  font-size: 1rem;\n}\n\n.infinite-checkbox__label--disabled {\n  color: #9ca3af;\n  cursor: not-allowed;\n}\n\n.infinite-checkbox__required {\n  color: #ef4444;\n  margin-left: 0.125rem;\n}\n\n/* Wrapper disabled state */\n.infinite-checkbox-wrapper:has(.infinite-checkbox--disabled) {\n  cursor: not-allowed;\n}";
styleInject(css_248z$d);

const Checkbox = ({ id, name, checked, defaultChecked, disabled = false, indeterminate = false, label, size = "medium", variant = "primary", onChange, onFocus, onBlur, className = "", labelClassName = "", required = false, ...props }) => {
    const inputRef = react.useRef(null);
    react.useEffect(() => {
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
    const checkboxElement = (jsxRuntime.jsx("input", { ref: inputRef, type: "checkbox", id: id, name: name, checked: checked, defaultChecked: defaultChecked, disabled: disabled, required: required, onChange: onChange, onFocus: onFocus, onBlur: onBlur, className: checkboxClasses, "data-testid": "checkbox-input", ...props }));
    if (label) {
        return (jsxRuntime.jsxs("div", { className: "infinite-checkbox-wrapper", children: [checkboxElement, jsxRuntime.jsxs("label", { htmlFor: id, className: labelClasses, children: [label, required && jsxRuntime.jsx("span", { className: "infinite-checkbox__required", children: "*" })] })] }));
    }
    return checkboxElement;
};

var css_248z$c = ".input-container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  width: 100%;\n}\n\n.input__label {\n  font-family: inherit;\n  font-weight: 500;\n  font-size: 0.875rem;\n  color: #374151;\n  margin-bottom: 0.25rem;\n}\n\n.input__required {\n  color: #dc3545;\n  margin-left: 0.125rem;\n}\n\n.input__wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n  border: 2px solid;\n  border-radius: 0.375rem;\n  background-color: white;\n  transition: all 0.2s ease-in-out;\n}\n\n.input {\n  width: 100%;\n  font-family: inherit;\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #374151;\n  transition: all 0.2s ease-in-out;\n}\n\n.input::placeholder {\n  color: #9ca3af;\n}\n\n.input__left-icon,\n.input__right-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #6b7280;\n  flex-shrink: 0;\n}\n\n.input__prefix,\n.input__suffix {\n  font-family: inherit;\n  color: #6b7280;\n  background-color: #f9fafb;\n  border-right: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n\n.input__suffix {\n  border-right: none;\n  border-left: 1px solid #e5e7eb;\n}\n\n.input__helper-text {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 0.25rem;\n}\n\n.input__error-text {\n  font-size: 0.75rem;\n  color: #dc3545;\n  margin-top: 0.25rem;\n}\n\n/* Sizes */\n.input-container--small .input {\n  padding: 0.375rem 0.75rem;\n  font-size: 0.875rem;\n}\n\n.input-container--small .input__wrapper {\n  border-radius: 0.25rem;\n}\n\n.input-container--small .input__left-icon,\n.input-container--small .input__right-icon {\n  padding: 0 0.5rem;\n  font-size: 0.875rem;\n}\n\n.input-container--small .input__prefix,\n.input-container--small .input__suffix {\n  padding: 0.375rem 0.75rem;\n  font-size: 0.875rem;\n}\n\n.input-container--medium .input {\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n}\n\n.input-container--medium .input__wrapper {\n  border-radius: 0.375rem;\n}\n\n.input-container--medium .input__left-icon,\n.input-container--medium .input__right-icon {\n  padding: 0 0.75rem;\n  font-size: 1rem;\n}\n\n.input-container--medium .input__prefix,\n.input-container--medium .input__suffix {\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n}\n\n.input-container--large .input {\n  padding: 0.75rem 1.25rem;\n  font-size: 1.125rem;\n}\n\n.input-container--large .input__wrapper {\n  border-radius: 0.5rem;\n}\n\n.input-container--large .input__left-icon,\n.input-container--large .input__right-icon {\n  padding: 0 1rem;\n  font-size: 1.125rem;\n}\n\n.input-container--large .input__prefix,\n.input-container--large .input__suffix {\n  padding: 0.75rem 1.25rem;\n  font-size: 1.125rem;\n}\n\n/* Variants - Default */\n.input-container--default .input__wrapper {\n  border-color: #d1d5db;\n  background-color: white;\n}\n\n.input-container--default .input__wrapper:hover:not(.input-container--disabled .input__wrapper) {\n  border-color: #9ca3af;\n}\n\n.input-container--default .input__wrapper:focus-within {\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n\n/* Variants - Success */\n.input-container--success .input__wrapper {\n  border-color: #28a745;\n}\n\n.input-container--success .input__wrapper:focus-within {\n  border-color: #28a745;\n  box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.1);\n}\n\n/* Variants - Warning */\n.input-container--warning .input__wrapper {\n  border-color: #ffc107;\n}\n\n.input-container--warning .input__wrapper:focus-within {\n  border-color: #ffc107;\n  box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.1);\n}\n\n/* Variants - Error */\n.input-container--error .input__wrapper {\n  border-color: #dc3545;\n}\n\n.input-container--error .input__wrapper:focus-within {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);\n}\n\n/* States */\n.input-container--disabled .input__wrapper {\n  background-color: #f9fafb;\n  border-color: #e5e7eb;\n  cursor: not-allowed;\n}\n\n.input-container--disabled .input {\n  color: #9ca3af;\n  cursor: not-allowed;\n}\n\n.input-container--disabled .input__label {\n  color: #9ca3af;\n}\n\n.input-container--readonly .input__wrapper {\n  background-color: #f9fafb;\n}\n\n.input-container--readonly .input {\n  cursor: default;\n}\n\n/* Icon adjustments */\n.input-container--with-left-icon .input {\n  padding-left: 0;\n}\n\n.input-container--with-right-icon .input {\n  padding-right: 0;\n}\n\n.input-container--with-prefix .input {\n  padding-left: 0;\n}\n\n.input-container--with-suffix .input {\n  padding-right: 0;\n}";
styleInject(css_248z$c);

const Input = ({ value, onChange, onBlur, onFocus, onKeyDown, type = "text", placeholder, disabled = false, readOnly = false, required = false, size = "medium", variant = "default", label, helperText, errorText, name, id, className = "", autoComplete, autoFocus = false, maxLength, minLength, pattern, min, max, step, "aria-label": ariaLabel, "aria-describedby": ariaDescribedBy, leftIcon, rightIcon, prefix, suffix, ...props }) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const helperTextId = `${inputId}-helper`;
    const errorTextId = `${inputId}-error`;
    const handleChange = (event) => {
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
    return (jsxRuntime.jsxs("div", { className: containerClasses, children: [label && (jsxRuntime.jsxs("label", { htmlFor: inputId, className: "input__label", children: [label, required && jsxRuntime.jsx("span", { className: "input__required", children: "*" })] })), jsxRuntime.jsxs("div", { className: "input__wrapper", children: [leftIcon && (jsxRuntime.jsx("div", { className: "input__left-icon", children: leftIcon })), prefix && (jsxRuntime.jsx("div", { className: "input__prefix", children: prefix })), jsxRuntime.jsx("input", { className: inputClasses, type: type, value: value, onChange: handleChange, onBlur: onBlur, onFocus: onFocus, onKeyDown: onKeyDown, placeholder: placeholder, disabled: disabled, readOnly: readOnly, required: required, name: name, id: inputId, autoComplete: autoComplete, autoFocus: autoFocus, maxLength: maxLength, minLength: minLength, pattern: pattern, min: min, max: max, step: step, "aria-label": ariaLabel, "aria-describedby": describedBy, "data-testid": "reusable-input", ...props }), suffix && (jsxRuntime.jsx("div", { className: "input__suffix", children: suffix })), rightIcon && (jsxRuntime.jsx("div", { className: "input__right-icon", children: rightIcon }))] }), errorText && (jsxRuntime.jsx("div", { className: "input__error-text", id: errorTextId, children: errorText })), helperText && !errorText && (jsxRuntime.jsx("div", { className: "input__helper-text", id: helperTextId, children: helperText }))] }));
};

var css_248z$b = ".custom-switch {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  user-select: none;\n  position: relative;\n}\n\n.custom-switch.disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n\n.custom-switch-input {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.custom-switch-slider {\n  position: relative;\n  width: 40px;\n  height: 20px;\n  background-color: #ccc;\n  border-radius: 20px;\n  transition: background-color 0.3s;\n}\n\n.custom-switch-slider::before {\n  content: \"\";\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  width: 16px;\n  height: 16px;\n  background-color: white;\n  border-radius: 50%;\n  transition: transform 0.3s;\n}\n\n.custom-switch-input:checked + .custom-switch-slider {\n  background-color: #4f46e5; /* Indigo */\n}\n\n.custom-switch-input:checked + .custom-switch-slider::before {\n  transform: translateX(20px);\n}\n\n.custom-switch-label {\n  font-size: 14px;\n}\n";
styleInject(css_248z$b);

const Switch = ({ checked, onChange, disabled = false, label, className = "" }) => {
    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = react.useState(false);
    const currentChecked = isControlled ? checked : internalChecked;
    const handleChange = (event) => {
        const newChecked = event.target.checked;
        if (!isControlled)
            setInternalChecked(newChecked);
        onChange?.(newChecked, event);
    };
    return (jsxRuntime.jsxs("label", { className: `custom-switch ${disabled ? "disabled" : ""} ${className}`, children: [jsxRuntime.jsx("input", { type: "checkbox", className: "custom-switch-input", checked: currentChecked, onChange: handleChange, disabled: disabled }), jsxRuntime.jsx("span", { className: "custom-switch-slider" }), label && jsxRuntime.jsx("span", { className: "custom-switch-label", children: label })] }));
};

var css_248z$a = ".infinite-select-container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n}\n\n.infinite-select-wrapper {\n  position: relative;\n}\n\n.infinite-select__native {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n}\n\n.infinite-select {\n  position: relative;\n  min-height: 2.5rem;\n  border: 2px solid #d1d5db;\n  border-radius: 0.375rem;\n  background-color: #ffffff;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  outline: none;\n}\n\n.infinite-select:focus {\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);\n}\n\n/* Sizes */\n.infinite-select--small {\n  min-height: 1rem;\n  border-radius: 0.25rem;\n}\n\n.infinite-select--medium {\n  min-height: 1.5rem;\n  border-radius: 0.375rem;\n}\n\n.infinite-select--large {\n  min-height: 2rem;\n  border-radius: 0.5rem;\n}\n\n/* Variants */\n.infinite-select--primary {\n  border-color: #d1d5db;\n}\n\n.infinite-select--primary:focus,\n.infinite-select--primary.infinite-select--open {\n  border-color: #3b82f6;\n}\n\n.infinite-select--secondary {\n  border-color: #9ca3af;\n}\n\n.infinite-select--secondary:focus,\n.infinite-select--secondary.infinite-select--open {\n  border-color: #6b7280;\n}\n\n.infinite-select--success {\n  border-color: #10b981;\n}\n\n.infinite-select--success:focus,\n.infinite-select--success.infinite-select--open {\n  border-color: #059669;\n}\n\n.infinite-select--danger,\n.infinite-select--error {\n  border-color: #ef4444;\n}\n\n.infinite-select--danger:focus,\n.infinite-select--danger.infinite-select--open,\n.infinite-select--error:focus,\n.infinite-select--error.infinite-select--open {\n  border-color: #dc2626;\n}\n\n/* Disabled state */\n.infinite-select--disabled {\n  background-color: #f9fafb;\n  border-color: #e5e7eb;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n\n/* Select value container */\n.infinite-select__value {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.2rem 0.75rem;\n  min-height: inherit;\n}\n\n.infinite-select--small .infinite-select__value {\n  padding: 0.375rem 0.5rem;\n}\n\n.infinite-select--large .infinite-select__value {\n  padding: 0.75rem 1rem;\n}\n\n.infinite-select__placeholder {\n  color: #9ca3af;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex: 1;\n}\n\n.infinite-select__placeholder--filled {\n  color: #374151;\n}\n\n.infinite-select--small .infinite-select__placeholder {\n  font-size: 0.75rem;\n}\n\n.infinite-select--large .infinite-select__placeholder {\n  font-size: 1rem;\n}\n\n/* Actions container */\n.infinite-select__actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n\n.infinite-select__clear {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.25rem;\n  height: 1.25rem;\n  border: none;\n  background: none;\n  color: #6b7280;\n  cursor: pointer;\n  border-radius: 0.25rem;\n  font-size: 1rem;\n  line-height: 1;\n  transition: all 0.2s ease-in-out;\n}\n\n.infinite-select__clear:hover {\n  background-color: #f3f4f6;\n  color: #374151;\n}\n\n.infinite-select__spinner {\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid #e5e7eb;\n  border-top: 2px solid #3b82f6;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n/* .infinite-select__arrow {\n  color: #6b7280;\n  font-size: 0.75rem;\n  transition: transform 0.2s ease-in-out;\n  user-select: none;\n} */\n .infinite-select__arrow {\n  width: 2px;\n  height: 2px;\n  background: transparent;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 6px solid #6b7280;\n  border-radius: 2px;\n  transform: rotate(0deg);\n  margin: 5px;\n  font-size: 0.75rem;\n  transition: transform 0.2s ease-in-out;\n  user-select: none;\n  transform-origin: 50% 40%;\n}\n\n.infinite-select__arrow--up {\n  transform: rotate(180deg);\n}\n\n/* Dropdown */\n.infinite-select__dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 50;\n  margin-top: 0.25rem;\n  background-color: #ffffff;\n  border: 1px solid #e5e7eb;\n  border-radius: 0.375rem;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  max-height: 16rem;\n  overflow: hidden;\n}\n\n/* Search */\n.infinite-select__search {\n  padding: 0.5rem;\n  border-bottom: 1px solid #e5e7eb;\n}\n\n.infinite-select__search-input {\n  width: 100%;\n  padding: 0.375rem 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.25rem;\n  font-size: 0.875rem;\n  outline: none;\n}\n\n.infinite-select__search-input:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.25);\n}\n\n/* Options container */\n.infinite-select__options {\n  max-height: 12rem;\n  overflow-y: auto;\n}\n\n.infinite-select__no-options {\n  padding: 0.75rem;\n  text-align: center;\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n\n/* Option groups */\n.infinite-select__group-label {\n  padding: 0.5rem 0.75rem 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background-color: #f9fafb;\n}\n\n/* Individual options */\n.infinite-select__option {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  cursor: pointer;\n  transition: background-color 0.15s ease-in-out;\n}\n\n.infinite-select__option:hover {\n  background-color: #f3f4f6;\n}\n\n.infinite-select__option--focused {\n  background-color: #eff6ff;\n}\n\n.infinite-select__option--selected {\n  background-color: #dbeafe;\n  color: #1d4ed8;\n}\n\n.infinite-select__option--disabled {\n  color: #9ca3af;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n\n.infinite-select__option--disabled:hover {\n  background-color: transparent;\n}\n\n.infinite-select__checkbox {\n  width: 1rem;\n  height: 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  background-color: #ffffff;\n}\n\n.infinite-select__checkbox--checked {\n  background-color: #3b82f6;\n  border-color: #3b82f6;\n  color: white;\n}\n\n.infinite-select__option-label {\n  font-size: 0.875rem;\n  flex: 1;\n}\n\n/* Label */\n.infinite-select__label {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #374151;\n  margin-bottom: 0.25rem;\n}\n\n.infinite-select__label--small {\n  font-size: 0.75rem;\n}\n\n.infinite-select__label--large {\n  font-size: 1rem;\n}\n\n.infinite-select__label--disabled {\n  color: #9ca3af;\n}\n\n.infinite-select__required {\n  color: #ef4444;\n  margin-left: 0.125rem;\n}\n\n/* Helper text */\n.infinite-select__helper {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-top: 0.25rem;\n}\n\n.infinite-select__helper--error {\n  color: #ef4444;\n}";
styleInject(css_248z$a);

const Select = ({ id, name, options, value, defaultValue, placeholder = "Select an option...", disabled = false, required = false, multiple = false, size = "medium", variant = "primary", label, helperText, errorText, searchable = false, clearable = false, loading = false, onChange, onFocus, onBlur, onSearch, className = "", labelClassName = "", ...props }) => {
    const [isOpen, setIsOpen] = react.useState(false);
    const [searchTerm, setSearchTerm] = react.useState("");
    const [selectedValues, setSelectedValues] = react.useState(multiple
        ? (Array.isArray(value) ? value : value ? [value] : [])
        : []);
    const [focusedIndex, setFocusedIndex] = react.useState(-1);
    const selectRef = react.useRef(null);
    const searchInputRef = react.useRef(null);
    const nativeSelectRef = react.useRef(null);
    const filteredOptions = searchable && searchTerm
        ? options.filter(option => option.label.toLowerCase().includes(searchTerm.toLowerCase()))
        : options;
    const groupedOptions = filteredOptions.reduce((groups, option) => {
        const group = option.group || "";
        if (!groups[group])
            groups[group] = [];
        groups[group].push(option);
        return groups;
    }, {});
    react.useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
                setSearchTerm("");
                setFocusedIndex(-1);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => { document.removeEventListener("mousedown", handleClickOutside); };
    }, []);
    const handleToggle = () => {
        if (disabled)
            return;
        setIsOpen(!isOpen);
        if (!isOpen && searchable && searchInputRef.current) {
            setTimeout(() => searchInputRef.current?.focus(), 0);
        }
    };
    const handleOptionSelect = (optionValue) => {
        if (multiple) {
            const newValues = selectedValues.includes(optionValue)
                ? selectedValues.filter(v => v !== optionValue)
                : [...selectedValues, optionValue];
            setSelectedValues(newValues);
            onChange?.(newValues);
        }
        else {
            setSelectedValues([optionValue]);
            onChange?.(optionValue);
            setIsOpen(false);
            setSearchTerm("");
        }
        setFocusedIndex(-1);
    };
    const handleClear = (e) => {
        e.stopPropagation();
        setSelectedValues([]);
        onChange?.(multiple ? [] : "");
    };
    const handleSearch = (term) => {
        setSearchTerm(term);
        onSearch?.(term);
        setFocusedIndex(-1);
    };
    const handleKeyDown = (e) => {
        if (disabled)
            return;
        switch (e.key) {
            case "Enter":
            case " ":
                if (!isOpen) {
                    setIsOpen(true);
                }
                else if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
                    e.preventDefault();
                    handleOptionSelect(filteredOptions[focusedIndex].value);
                }
                break;
            case "Escape":
                setIsOpen(false);
                setSearchTerm("");
                setFocusedIndex(-1);
                break;
            case "ArrowDown":
                e.preventDefault();
                if (!isOpen) {
                    setIsOpen(true);
                }
                else {
                    setFocusedIndex(prev => prev < filteredOptions.length - 1 ? prev + 1 : 0);
                }
                break;
            case "ArrowUp":
                e.preventDefault();
                if (isOpen) {
                    setFocusedIndex(prev => prev > 0 ? prev - 1 : filteredOptions.length - 1);
                }
                break;
        }
    };
    const getDisplayValue = () => {
        if (multiple) {
            if (selectedValues.length === 0)
                return placeholder;
            if (selectedValues.length === 1) {
                const option = options.find(opt => opt.value === selectedValues[0]);
                return option?.label || selectedValues[0];
            }
            return `${selectedValues.length} items selected`;
        }
        else {
            const selectedValue = value || (selectedValues.length > 0 ? selectedValues[0] : "");
            if (!selectedValue)
                return placeholder;
            const option = options.find(opt => opt.value === selectedValue);
            return option?.label || selectedValue;
        }
    };
    const selectClasses = [
        "infinite-select",
        `infinite-select--${size}`,
        `infinite-select--${variant}`,
        disabled && "infinite-select--disabled",
        errorText && "infinite-select--error",
        isOpen && "infinite-select--open",
        className
    ].filter(Boolean).join(" ");
    const labelClasses = [
        "infinite-select__label",
        `infinite-select__label--${size}`,
        disabled && "infinite-select__label--disabled",
        labelClassName
    ].filter(Boolean).join(" ");
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    return (jsxRuntime.jsxs("div", { className: "infinite-select-container", children: [label && (jsxRuntime.jsxs("label", { htmlFor: selectId, className: labelClasses, children: [label, required && jsxRuntime.jsx("span", { className: "infinite-select__required", children: "*" })] })), jsxRuntime.jsxs("div", { className: "infinite-select-wrapper", ref: selectRef, children: [jsxRuntime.jsxs("select", { ref: nativeSelectRef, id: selectId, name: name, value: multiple ? selectedValues : (value || selectedValues[0] || ""), defaultValue: defaultValue, multiple: multiple, required: required, disabled: disabled, onChange: (e) => {
                            const target = e.target;
                            if (multiple) {
                                const values = Array.from(target.selectedOptions, option => option.value);
                                setSelectedValues(values);
                                onChange?.(values, e);
                            }
                            else {
                                setSelectedValues([target.value]);
                                onChange?.(target.value, e);
                            }
                        }, className: "infinite-select__native", tabIndex: -1, "aria-hidden": "true", ...props, children: [!multiple && jsxRuntime.jsx("option", { value: "", children: placeholder }), options.map(option => (jsxRuntime.jsx("option", { value: option.value, disabled: option.disabled, children: option.label }, option.value)))] }), jsxRuntime.jsxs("div", { className: selectClasses, onClick: handleToggle, onKeyDown: handleKeyDown, tabIndex: disabled ? -1 : 0, role: "combobox", "aria-expanded": isOpen, "aria-haspopup": "listbox", "aria-labelledby": label ? `${selectId}-label` : undefined, onFocus: onFocus, onBlur: onBlur, children: [jsxRuntime.jsxs("div", { className: "infinite-select__value", children: [jsxRuntime.jsx("span", { className: `infinite-select__placeholder ${selectedValues.length > 0 || value ? "infinite-select__placeholder--filled" : ""}`, children: getDisplayValue() }), jsxRuntime.jsxs("div", { className: "infinite-select__actions", children: [clearable && (selectedValues.length > 0 || value) && (jsxRuntime.jsx("button", { type: "button", className: "infinite-select__clear", onClick: handleClear, tabIndex: -1, "aria-label": "Clear selection", children: "\u00D7" })), loading ? (jsxRuntime.jsx("div", { className: "infinite-select__spinner" })) : (jsxRuntime.jsx("div", { className: `infinite-select__arrow ${isOpen ? "infinite-select__arrow--up" : ""}` }))] })] }), isOpen && (jsxRuntime.jsxs("div", { className: "infinite-select__dropdown", children: [searchable && (jsxRuntime.jsx("div", { className: "infinite-select__search", children: jsxRuntime.jsx("input", { ref: searchInputRef, type: "text", className: "infinite-select__search-input", placeholder: "Search options...", value: searchTerm, onChange: (e) => { handleSearch(e.target.value); }, onClick: (e) => { e.stopPropagation(); } }) })), jsxRuntime.jsx("div", { className: "infinite-select__options", role: "listbox", children: filteredOptions.length === 0
                                            ? (jsxRuntime.jsx("div", { className: "infinite-select__no-options", children: "No options found" }))
                                            : (Object.entries(groupedOptions).map(([groupName, groupOptions]) => (jsxRuntime.jsxs("div", { className: "infinite-select__group", children: [groupName && (jsxRuntime.jsx("div", { className: "infinite-select__group-label", children: groupName })), groupOptions.map((option) => {
                                                        const globalIndex = filteredOptions.indexOf(option);
                                                        const isSelected = multiple
                                                            ? selectedValues.includes(option.value)
                                                            : (value || selectedValues[0]) === option.value;
                                                        const isFocused = focusedIndex === globalIndex;
                                                        return (jsxRuntime.jsxs("div", { className: [
                                                                "infinite-select__option",
                                                                isSelected && "infinite-select__option--selected",
                                                                isFocused && "infinite-select__option--focused",
                                                                option.disabled && "infinite-select__option--disabled"
                                                            ].filter(Boolean).join(" "), onClick: () => !option.disabled && handleOptionSelect(option.value), role: "option", "aria-selected": isSelected, children: [multiple && (jsxRuntime.jsx("div", { className: `infinite-select__checkbox ${isSelected ? "infinite-select__checkbox--checked" : ""}`, children: isSelected && "✓" })), jsxRuntime.jsx("span", { className: "infinite-select__option-label", children: option.label })] }, option.value));
                                                    })] }, groupName)))) })] }))] })] }), (helperText || errorText) && (jsxRuntime.jsx("div", { className: `infinite-select__helper ${errorText ? "infinite-select__helper--error" : ""}`, children: errorText || helperText }))] }));
};

var css_248z$9 = ".infinite-radio-group {\n  display: flex;\n  gap: 0.75rem;\n}\n\n.infinite-radio-group--vertical {\n  flex-direction: column;\n}\n\n.infinite-radio-group--horizontal {\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.infinite-radio-group--disabled {\n  opacity: 0.6;\n}\n\n.infinite-radio-group__label {\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n}\n\n.infinite-radio-group__label--small {\n  font-size: 0.75rem;\n  margin-bottom: 0.375rem;\n}\n\n.infinite-radio-group__label--medium {\n  font-size: 0.875rem;\n  margin-bottom: 0.5rem;\n}\n\n.infinite-radio-group__label--large {\n  font-size: 1rem;\n  margin-bottom: 0.625rem;\n}\n\n.infinite-radio-wrapper {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}\n\n.infinite-radio {\n  appearance: none;\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid #d1d5db;\n  border-radius: 50%;\n  background-color: #ffffff;\n  cursor: pointer;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n  flex-shrink: 0;\n}\n\n.infinite-radio:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);\n}\n\n/* Sizes */\n.infinite-radio--small {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n\n.infinite-radio--medium {\n  width: 1rem;\n  height: 1rem;\n}\n\n.infinite-radio--large {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n\n/* Variants - Unchecked States */\n.infinite-radio--primary {\n  border-color: #d1d5db;\n}\n\n.infinite-radio--secondary {\n  border-color: #9ca3af;\n}\n\n.infinite-radio--success {\n  border-color: #10b981;\n}\n\n.infinite-radio--danger {\n  border-color: #ef4444;\n}\n\n/* Checked States */\n.infinite-radio--primary:checked {\n  background-color: #ffffff;\n  border-color: #3b82f6;\n}\n\n.infinite-radio--secondary:checked {\n  background-color: #ffffff;\n  border-color: #6b7280;\n}\n\n.infinite-radio--success:checked {\n  background-color: #ffffff;\n  border-color: #10b981;\n}\n\n.infinite-radio--danger:checked {\n  background-color: #ffffff;\n  border-color: #ef4444;\n}\n\n/* Radio dot */\n.infinite-radio:checked::after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  background-color: #3b82f6;\n}\n\n.infinite-radio--small:checked::after {\n  width: 0.375rem;\n  height: 0.375rem;\n}\n\n.infinite-radio--large:checked::after {\n  width: 0.625rem;\n  height: 0.625rem;\n}\n\n.infinite-radio--secondary:checked::after {\n  background-color: #6b7280;\n}\n\n.infinite-radio--success:checked::after {\n  background-color: #10b981;\n}\n\n.infinite-radio--danger:checked::after {\n  background-color: #ef4444;\n}\n\n/* Disabled State */\n.infinite-radio--disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.infinite-radio--disabled:checked::after {\n  background-color: #9ca3af;\n}\n\n/* Hover States */\n.infinite-radio:not(:disabled):hover {\n  border-color: #3b82f6;\n}\n\n.infinite-radio--secondary:not(:disabled):hover {\n  border-color: #6b7280;\n}\n\n.infinite-radio--success:not(:disabled):hover {\n  border-color: #059669;\n}\n\n.infinite-radio--danger:not(:disabled):hover {\n  border-color: #dc2626;\n}\n\n/* Label Styles */\n.infinite-radio__label {\n  font-size: 0.875rem;\n  color: #374151;\n  cursor: pointer;\n  user-select: none;\n  line-height: 1.5;\n}\n\n.infinite-radio__label--small {\n  font-size: 0.75rem;\n}\n\n.infinite-radio__label--medium {\n  font-size: 0.875rem;\n}\n\n.infinite-radio__label--large {\n  font-size: 1rem;\n}\n\n.infinite-radio__label--disabled {\n  color: #9ca3af;\n  cursor: not-allowed;\n}\n\n.infinite-radio__required {\n  color: #ef4444;\n  margin-left: 0.125rem;\n}\n\n/* Wrapper disabled state */\n.infinite-radio-wrapper:has(.infinite-radio--disabled) {\n  cursor: not-allowed;\n}";
styleInject(css_248z$9);

const RadioGroup = ({ name, options, value, defaultValue, disabled = false, size = "medium", variant = "primary", orientation = "vertical", onChange, onFocus, onBlur, className = "", labelClassName = "", groupLabel, required = false, ...props }) => {
    const handleChange = (event) => {
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
    return (jsxRuntime.jsxs("div", { className: groupClasses, role: "radiogroup", "aria-labelledby": groupLabel ? `${name}-group-label` : undefined, ...props, children: [groupLabel && (jsxRuntime.jsxs("div", { id: `${name}-group-label`, className: `infinite-radio-group__label infinite-radio-group__label--${size}`, children: [groupLabel, required && jsxRuntime.jsx("span", { className: "infinite-radio__required", children: "*" })] })), options.map((option, index) => {
                const radioId = `${name}-${index}`;
                const isDisabled = disabled || option.disabled;
                return (jsxRuntime.jsxs("div", { className: "infinite-radio-wrapper", children: [jsxRuntime.jsx("input", { type: "radio", id: radioId, name: name, value: option.value, checked: value ? value === option.value : undefined, defaultChecked: defaultValue ? defaultValue === option.value : undefined, disabled: isDisabled, required: required, onChange: handleChange, onFocus: onFocus, onBlur: onBlur, className: radioClasses, "data-testid": `infinite-radio-${option.value}` }), jsxRuntime.jsx("label", { htmlFor: radioId, className: [
                                labelClasses,
                                isDisabled && "infinite-radio__label--disabled"
                            ].filter(Boolean).join(" "), children: option.label })] }, option.value));
            })] }));
};

var css_248z$8 = "/* Tab.css */\n\n.infinite-tab-container {\n  display: flex;\n  width: 100%;\n}\n\n.infinite-tab-horizontal {\n  flex-direction: column;\n}\n\n.infinite-tab-vertical {\n  flex-direction: row;\n}\n\n.infinite-tab-full-width .infinite-tab-list {\n  width: 100%;\n}\n\n.infinite-tab-disabled {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n/* Tab List */\n.infinite-tab-list {\n  display: flex;\n  position: relative;\n}\n\n.infinite-tab-list-horizontal {\n  flex-direction: row;\n  border-bottom: 1px solid #e5e7eb;\n}\n\n.infinite-tab-list-vertical {\n  flex-direction: column;\n  border-right: 1px solid #e5e7eb;\n  min-width: 200px;\n}\n\n/* Tab Items */\n.infinite-tab-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  /* font-weight: 500; */\n  color: #6b7280;\n  transition: all 0.2s ease-in-out;\n  white-space: nowrap;\n  position: relative;\n  text-align: left;\n}\n\n.infinite-tab-item:hover:not(.infinite-tab-item-disabled):not(.infinite-tab-item-active) {\n  color: #374151;\n  background-color: #f9fafb;\n}\n\n.infinite-tab-item:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #3b82f6;\n  z-index: 1;\n}\n\n.infinite-tab-item-active {\n  color: #3b82f6;\n  /* font-weight: 600; */\n}\n\n.infinite-tab-item-disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  color: #9ca3af;\n}\n\n.infinite-tab-item-icon {\n  display: flex;\n  align-items: center;\n  font-size: 1em;\n}\n\n.infinite-tab-item-label {\n  flex: 1;\n}\n\n.infinite-tab-item-badge {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 1.25rem;\n  height: 1.25rem;\n  padding: 0 0.375rem;\n  background-color: #ef4444;\n  color: white;\n  border-radius: 0.625rem;\n  font-size: 0.75rem;\n  /* font-weight: 600; */\n  line-height: 1;\n}\n\n/* Sizes */\n.infinite-tab-small .infinite-tab-item {\n  padding: 0.5rem 0.75rem;\n  font-size: 0.875rem;\n  gap: 0.375rem;\n}\n\n.infinite-tab-small .infinite-tab-item-badge {\n  min-width: 1rem;\n  height: 1rem;\n  font-size: 0.6875rem;\n}\n\n.infinite-tab-medium .infinite-tab-item {\n  padding: 0.75rem 1rem;\n  font-size: 0.875rem;\n  gap: 0.5rem;\n}\n\n.infinite-tab-large .infinite-tab-item {\n  padding: 1rem 1.25rem;\n  font-size: 1rem;\n  gap: 0.625rem;\n}\n\n.infinite-tab-large .infinite-tab-item-badge {\n  min-width: 1.5rem;\n  height: 1.5rem;\n  font-size: 0.8125rem;\n}\n\n/* Variants */\n\n/* Default variant - underline style */\n.infinite-tab-default .infinite-tab-item-active {\n  position: relative;\n}\n\n.infinite-tab-default.infinite-tab-horizontal .infinite-tab-item-active::after {\n  content: '';\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background-color: #3b82f6;\n  border-radius: 1px 1px 0 0;\n}\n\n.infinite-tab-default.infinite-tab-vertical .infinite-tab-item-active::after {\n  content: '';\n  position: absolute;\n  right: -1px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background-color: #3b82f6;\n  border-radius: 0 1px 1px 0;\n}\n\n/* Pills variant */\n.infinite-tab-pills .infinite-tab-list {\n  border: none;\n  padding: 0.25rem;\n  background-color: #f3f4f6;\n  border-radius: 0.5rem;\n  gap: 0.25rem;\n}\n\n.infinite-tab-pills .infinite-tab-item {\n  border-radius: 0.375rem;\n  margin: 0;\n}\n\n.infinite-tab-pills .infinite-tab-item-active {\n  background-color: #ffffff;\n  color: #1f2937;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n\n/* Underline variant */\n.infinite-tab-underline .infinite-tab-list {\n  border-bottom: 2px solid #f3f4f6;\n}\n\n.infinite-tab-underline .infinite-tab-item {\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n}\n\n.infinite-tab-underline .infinite-tab-item-active {\n  border-bottom-color: #3b82f6;\n}\n\n/* Bordered variant */\n.infinite-tab-bordered .infinite-tab-list {\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem 0.5rem 0 0;\n  background-color: #f9fafb;\n}\n\n.infinite-tab-bordered .infinite-tab-item {\n  border-right: 1px solid #e5e7eb;\n}\n\n.infinite-tab-bordered .infinite-tab-item:last-child {\n  border-right: none;\n}\n\n.infinite-tab-bordered .infinite-tab-item-active {\n  background-color: #ffffff;\n  border-bottom: 1px solid #ffffff;\n  margin-bottom: -1px;\n}\n\n/* Cards variant */\n.infinite-tab-cards .infinite-tab-list {\n  border: none;\n  gap: 0.5rem;\n}\n\n.infinite-tab-cards .infinite-tab-item {\n  border: 1px solid #e5e7eb;\n  border-radius: 0.5rem;\n  background-color: #ffffff;\n}\n\n.infinite-tab-cards .infinite-tab-item:hover:not(.infinite-tab-item-disabled):not(.infinite-tab-item-active) {\n  border-color: #d1d5db;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n\n.infinite-tab-cards .infinite-tab-item-active {\n  border-color: #3b82f6;\n  background-color: #eff6ff;\n  box-shadow: 0 1px 3px 0 rgba(59, 130, 246, 0.1);\n}\n\n/* Tab Content */\n.infinite-tab-content {\n  flex: 1;\n  padding: 1.5rem 0;\n  min-height: 200px;\n}\n\n.infinite-tab-vertical .infinite-tab-content {\n  padding: 0 0 0 1.5rem;\n}\n\n.infinite-tab-small .infinite-tab-content {\n  padding: 1rem 0;\n}\n\n.infinite-tab-large .infinite-tab-content {\n  padding: 2rem 0;\n}\n\n/* Full width tabs */\n.infinite-tab-full-width .infinite-tab-item {\n  flex: 1;\n  justify-content: center;\n}\n\n/* Responsive */\n@media (max-width: 768px) {\n  .infinite-tab-vertical {\n    flex-direction: column;\n  }\n  \n  .infinite-tab-list-vertical {\n    flex-direction: row;\n    border-right: none;\n    border-bottom: 1px solid #e5e7eb;\n    min-width: unset;\n    overflow-x: auto;\n  }\n  \n  .infinite-tab-vertical .infinite-tab-content {\n    padding: 1.5rem 0 0 0;\n  }\n  \n  .infinite-tab-item {\n    padding: 0.625rem 0.875rem;\n    font-size: 0.875rem;\n  }\n}\n\n/* Scrollable tabs for overflow */\n.infinite-tab-list::-webkit-scrollbar {\n  height: 2px;\n}\n\n.infinite-tab-list::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.infinite-tab-list::-webkit-scrollbar-thumb {\n  background: #d1d5db;\n  border-radius: 1px;\n}\n\n/* High contrast mode */\n@media (prefers-contrast: high) {\n  .infinite-tab-item {\n    border: 1px solid transparent;\n  }\n  \n  .infinite-tab-item-active {\n    border-color: currentColor;\n  }\n}\n\n/* Reduced motion */\n@media (prefers-reduced-motion: reduce) {\n  .infinite-tab-item {\n    transition: none;\n  }\n}";
styleInject(css_248z$8);

const Tab = ({ tabs, defaultActiveTab, onChange, variant = "default", size = "medium", position = "horizontal", fullWidth = false, disabled = false, className = "", tabsClassName = "", contentClassName = "" }) => {
    const [activeTab, setActiveTab] = react.useState(defaultActiveTab || tabs[0]?.key);
    const handleTabClick = (tabKey) => {
        if (disabled)
            return;
        const tab = tabs.find(t => t.key === tabKey);
        if (tab?.disabled)
            return;
        setActiveTab(tabKey);
        onChange?.(tabKey);
    };
    const activeTabContent = tabs.find(tab => tab.key === activeTab)?.content;
    return (jsxRuntime.jsxs("div", { className: `
        infinite-tab-container 
        infinite-tab-${variant} 
        infinite-tab-${size}
        infinite-tab-${position}
        ${fullWidth ? "infinite-tab-full-width" : ""}
        ${disabled ? "infinite-tab-disabled" : ""}
        ${className}
      `.trim(), children: [jsxRuntime.jsx("div", { className: `infinite-tab-list infinite-tab-list-${position} ${tabsClassName}`, role: "tablist", "aria-orientation": position, children: tabs.map((tab) => (jsxRuntime.jsxs("div", { 
                    // type="button"
                    role: "tab", "aria-selected": activeTab === tab.key, "aria-controls": `infinite-tab-panel-${tab.key}`, id: `infinite-tab-${tab.key}`, className: `
              infinite-tab-item
              ${activeTab === tab.key ? "infinite-tab-item-active" : ""}
              ${tab.disabled ? "infinite-tab-item-disabled" : ""}
            `.trim(), onClick: () => { handleTabClick(tab.key); }, children: [tab.icon && (jsxRuntime.jsx("span", { className: "infinite-tab-item-icon", children: tab.icon })), jsxRuntime.jsx("span", { className: "infinite-tab-item-label", children: tab.label }), tab.badge && (jsxRuntime.jsx("span", { className: "infinite-tab-item-badge", children: tab.badge }))] }, tab.key))) }), jsxRuntime.jsx("div", { className: `infinite-tab-content ${contentClassName}`, role: "tabpanel", id: `infinite-tab-panel-${activeTab}`, "aria-labelledby": `infinite-tab-${activeTab}`, children: activeTabContent })] }));
};

var css_248z$7 = ".infinite-tooltip-wrapper {\n  position: relative;\n  display: inline-block;\n  cursor: help;\n}\n\n.infinite-tooltip {\n  visibility: hidden;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 6px 10px;\n  position: absolute;\n  z-index: 1000;\n  white-space: nowrap;\n  font-size: 12px;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  pointer-events: none;\n}\n\n.infinite-tooltip-wrapper:hover .infinite-tooltip {\n  visibility: visible;\n  opacity: 1;\n}\n\n/* Tooltip Positions */\n.infinite-tooltip--top {\n  bottom: 125%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.infinite-tooltip--bottom {\n  top: 125%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.infinite-tooltip--left {\n  right: 110%;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.infinite-tooltip--right {\n  left: 110%;\n  top: 50%;\n  transform: translateY(-50%);\n}\n";
styleInject(css_248z$7);

const Tooltip = ({ children, text, position = "top", className = "" }) => {
    const tooltipClasses = [
        "infinite-tooltip",
        `infinite-tooltip--${position}`,
        className
    ].filter(Boolean).join(" ");
    return (jsxRuntime.jsxs("div", { className: "infinite-tooltip-wrapper", children: [children, jsxRuntime.jsx("span", { className: tooltipClasses, "data-testid": "reusable-tooltip", children: text })] }));
};

var css_248z$6 = "/* SegmentedControl.css */\n\n.infinite-segmented {\n  display: inline-flex;\n  background-color: #f3f4f6;\n  border-radius: 0.5rem;\n  padding: 0.125rem;\n  position: relative;\n  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease-in-out;\n}\n\n.infinite-segmented-full-width {\n  width: 100%;\n}\n\n/* Sizes */\n.infinite-segmented-small {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.infinite-segmented-medium {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.infinite-segmented-large {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n/* Variants */\n.infinite-segmented-default {\n  background-color: #f3f4f6;\n  border: 1px solid #e5e7eb;\n}\n\n.infinite-segmented-outlined {\n  background-color: transparent;\n  border: 2px solid #e5e7eb;\n}\n\n.infinite-segmented-filled {\n  background-color: #1f2937;\n  border: 1px solid #374151;\n}\n\n.infinite-segmented-filled .infinite-segmented-option {\n  color: #d1d5db;\n}\n\n.infinite-segmented-filled .infinite-segmented-option-active {\n  background-color: #374151;\n  color: #ffffff;\n}\n\n/* Options */\n.infinite-segmented-option {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.375rem;\n  flex: 1;\n  padding: 0.5rem 1rem;\n  background-color: transparent;\n  border: none;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  font-weight: 500;\n  color: #6b7280;\n  transition: all 0.15s ease-in-out;\n  white-space: nowrap;\n  user-select: none;\n  position: relative;\n  z-index: 1;\n}\n\n.infinite-segmented-small .infinite-segmented-option {\n  padding: 0.375rem 0.75rem;\n  gap: 0.25rem;\n}\n\n.infinite-segmented-large .infinite-segmented-option {\n  padding: 0.75rem 1.25rem;\n  gap: 0.5rem;\n}\n\n.infinite-segmented-option:hover:not(.infinite-segmented-option-disabled):not(.infinite-segmented-option-active) {\n  background-color: rgba(0, 0, 0, 0.05);\n  color: #374151;\n}\n\n.infinite-segmented-option:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #3b82f6;\n}\n\n.infinite-segmented-option-active {\n  background-color: #ffffff;\n  color: #1f2937;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  z-index: 2;\n}\n\n.infinite-segmented-option-active:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.infinite-segmented-option-disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  color: #9ca3af;\n}\n\n.infinite-segmented-option-icon {\n  display: flex;\n  align-items: center;\n  font-size: 1em;\n}\n\n.infinite-segmented-option-label {\n  font-weight: inherit;\n}\n\n/* Disabled state */\n.infinite-segmented-disabled {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n/* Outlined variant specific styles */\n.infinite-segmented-outlined .infinite-segmented-option-active {\n  background-color: #3b82f6;\n  color: #ffffff;\n}\n\n.infinite-segmented-outlined .infinite-segmented-option:hover:not(.infinite-segmented-option-disabled):not(.infinite-segmented-option-active) {\n  background-color: #f3f4f6;\n}\n\n/* Animation for active state transition */\n.infinite-segmented-option {\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n/* Responsive adjustments */\n@media (max-width: 640px) {\n  .infinite-segmented-option {\n    padding: 0.5rem 0.75rem;\n  }\n  \n  .infinite-segmented-small .infinite-segmented-option {\n    padding: 0.25rem 0.5rem;\n  }\n  \n  .infinite-segmented-large .infinite-segmented-option {\n    padding: 0.625rem 1rem;\n  }\n}\n\n/* High contrast mode support */\n@media (prefers-contrast: high) {\n  .infinite-segmented {\n    border: 2px solid #000000;\n  }\n  \n  .infinite-segmented-option-active {\n    border: 2px solid #000000;\n  }\n}\n\n/* Reduced motion support */\n@media (prefers-reduced-motion: reduce) {\n  .infinite-segmented,\n  .infinite-segmented-option {\n    transition: none;\n  }\n}";
styleInject(css_248z$6);

const Segmented = ({ options, defaultValue, onChange, size = "medium", variant = "default", disabled = false, className = "", fullWidth = false }) => {
    const [selectedValue, setSelectedValue] = react.useState(defaultValue || options[0]?.value);
    const handleSelect = (value) => {
        if (disabled)
            return;
        setSelectedValue(value);
        onChange?.(value);
    };
    return (jsxRuntime.jsx("div", { className: `
        infinite-segmented 
        infinite-segmented-${size} 
        infinite-segmented-${variant}
        ${fullWidth ? "infinite-segmented-full-width" : ""}
        ${disabled ? "infinite-segmented-disabled" : ""}
        ${className}
      `.trim(), children: options.map((option) => (jsxRuntime.jsxs("button", { type: "button", className: `
            infinite-segmented-option
            ${selectedValue === option.value ? "infinite-segmented-option-active" : ""}
            ${option.disabled ? "infinite-segmented-option-disabled" : ""}
          `.trim(), onClick: () => { handleSelect(option.value); }, disabled: disabled || option.disabled, "aria-pressed": selectedValue === option.value, children: [option.icon && (jsxRuntime.jsx("span", { className: "infinite-segmented-option-icon", children: option.icon })), jsxRuntime.jsx("span", { className: "infinite-segmented-option-label", children: option.label })] }, option.value))) }));
};

var css_248z$5 = "/* Base styles */\n.infinite-alert {\n  padding: 10px 18px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  margin: 10px 0;\n  color: #000000;\n  display: inline-block;\n  transition: all 0.3s ease-in-out;\n}\n\n/* Success */\n.infinite-alert-success {\n  background-color: #e7f8eb;\n  border: 1px solid #3ac259;\n}\n\n/* Error */\n.infinite-alert-error {\n  background-color: #ffeceb;\n  border: 1px solid #ff7e74;\n}\n\n/* Warning */\n.infinite-alert-warning {\n  background-color: #fff8e1;\n  border: 1px solid #ffc107;\n}\n\n/* Info */\n.infinite-alert-info {\n  background-color: #e7fcff;\n  border: 1px solid #17a2b8;\n}\n";
styleInject(css_248z$5);

const Alert = ({ message, type = "info", className = "" }) => {
    return (jsxRuntime.jsx("div", { className: `infinite-alert infinite-alert-${type} ${className}`, children: message }));
};

var css_248z$4 = ".infinite-accordion {\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  overflow: hidden;\n  background: white;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.infinite-accordion-item {\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.infinite-accordion-item:last-child {\n  border-bottom: none;\n}\n.infinite-accordion-header {\n  padding: 16px 20px;\n  background: #f8fafc;\n  border: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 500;\n  color: #374151;\n  transition: all 0.3s ease;\n}\n\n.infinite-accordion-header:hover {\n  background: #f1f5f9;\n}\n\n.infinite-accordion-header:focus {\n  outline: 2px solid #3b82f6;\n  outline-offset: -2px;\n}\n\n.infinite-accordion-icon {\n  transition: transform 0.3s ease;\n  color: #6b7280;\n}\n\n.infinite-accordion-icon.infinite-accordion-icon-open {\n  transform: rotate(180deg);\n}\n\n.infinite-accordion-content {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease, opacity 0.3s ease;\n  opacity: 0;\n  will-change: max-height, opacity;\n}\n\n.infinite-accordion-content.infinite-accordion-content-open {\n  max-height: 500px; /* make sure it's big enough */\n  opacity: 1;\n}\n\n.infinite-accordion-body {\n  padding: 20px;\n  color: #4b5563;\n  line-height: 1.6;\n  background: white;\n}\n";
styleInject(css_248z$4);

const InfiniteAccordionItem = ({ item, isOpen, onToggle }) => {
    return (jsxRuntime.jsxs("div", { className: "infinite-accordion-item", children: [jsxRuntime.jsxs("button", { className: "infinite-accordion-header", onClick: onToggle, role: "button", tabIndex: 0, "aria-expanded": isOpen, "aria-controls": `infinite-accordion-content-${item.id}`, children: [jsxRuntime.jsx("span", { children: item.title }), jsxRuntime.jsx("div", { style: { width: "30px", height: "30px" }, className: `infinite-accordion-icon ${isOpen ? "infinite-accordion-icon-open" : ""}`, children: jsxRuntime.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }), jsxRuntime.jsx("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsxs("g", { id: "SVGRepo_iconCarrier", children: [" ", jsxRuntime.jsx("path", { d: "M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z", fill: "#0F0F0F" }), " "] })] }) })] }), jsxRuntime.jsx("div", { id: `infinite-accordion-content-${item.id}`, className: `infinite-accordion-content ${isOpen ? "infinite-accordion-content-open" : ""}`, role: "region", "aria-labelledby": `infinite-accordion-header-${item.id}`, children: jsxRuntime.jsx("div", { className: "infinite-accordion-body", children: item.content }) })] }));
};
// Main Accordion Component
const InfiniteAccordion = ({ items, allowMultiple = false, className = "" }) => {
    const [openItems, setOpenItems] = react.useState(new Set());
    const toggleItem = (id) => {
        if (allowMultiple) {
            setOpenItems(prev => {
                const newOpenItems = new Set(prev);
                if (newOpenItems.has(id)) {
                    newOpenItems.delete(id);
                }
                else {
                    newOpenItems.add(id);
                }
                return newOpenItems;
            });
        }
        else {
            setOpenItems(prev => {
                return prev.has(id) ? new Set() : new Set([id]);
            });
        }
    };
    return (jsxRuntime.jsx("div", { className: `infinite-accordion ${className}`, children: items.map((item) => (jsxRuntime.jsx(InfiniteAccordionItem, { item: item, isOpen: openItems.has(item.id), onToggle: () => { toggleItem(item.id); } }, item.id))) }));
};

var css_248z$3 = ".infinite-badge-wrapper {\n  position: relative;\n  display: inline-block;\n}\n\n.infinite-badge {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  border-radius: 9999px;\n  padding: 0.2em 0.5em;\n  background-color: red;\n  color: white;\n  font-weight: bold;\n  height: 1.5em;\n  box-sizing: border-box;\n  white-space: nowrap;\n}\n\n.infinite-badge-number {\n  background-color: red;\n}\n\n.infinite-badge-dot {\n  width: 10px;\n  height: 10px;\n  padding: 0;\n  background-color: red;\n}\n\n.infinite-badge-icon {\n  background-color: #3b82f6; /* blue */\n  padding: 0.25em;\n  font-size: 1em;\n}\n\n.infinite-badge-top-right {\n  top: 0;\n  right: 0;\n  transform: translate(50%, -50%);\n}\n\n.infinite-badge-top-left {\n  top: 0;\n  left: 0;\n  transform: translate(-50%, -50%);\n}\n\n.infinite-badge-bottom-right {\n  bottom: 0;\n  right: 0;\n  transform: translate(50%, 50%);\n}\n\n.infinite-badge-bottom-left {\n  bottom: 0;\n  left: 0;\n  transform: translate(-50%, 50%);\n}\n";
styleInject(css_248z$3);

const Badge = ({ type = "number", content, position = "top-right", className = "", children }) => {
    return (jsxRuntime.jsxs("div", { className: `infinite-badge-wrapper ${className}`, children: [children, jsxRuntime.jsx("span", { className: `infinite-badge infinite-badge-${type} infinite-badge-${position}`, children: type !== "dot" && content })] }));
};

var css_248z$2 = ".infinite-slider-container {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: 100%;\n  max-width: 300px;\n  margin: 0 auto;\n}\n\n.infinite-slider-label {\n  font-size: 14px;\n  font-weight: 500;\n  color: #333;\n}\n\n.infinite-slider {\n  width: 100%;\n  height: 8px;\n  background: #e0e0e0;\n  border-radius: 4px;\n  outline: none;\n  cursor: pointer;\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.infinite-slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 16px;\n  height: 16px;\n  background: #2563eb;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.infinite-slider::-moz-range-thumb {\n  width: 16px;\n  height: 16px;\n  background: #2563eb;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.infinite-slider-range {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #666;\n}";
styleInject(css_248z$2);

const Slider = ({ min = 0, max = 100, step = 1, defaultValue = 0, label, className = "", onChange }) => {
    const [value, setValue] = react.useState(defaultValue);
    const handleChange = (e) => {
        const newValue = Number(e.target.value);
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };
    return (jsxRuntime.jsxs("div", { className: `infinite-slider-container ${className}`, children: [label && (jsxRuntime.jsxs("label", { className: "infinite-slider-label", children: [label, ": ", value] })), jsxRuntime.jsx("input", { type: "range", min: min, max: max, step: step, value: value, onChange: handleChange, className: "infinite-slider" }), jsxRuntime.jsxs("div", { className: "infinite-slider-range", children: [jsxRuntime.jsx("span", { children: min }), jsxRuntime.jsx("span", { children: max })] })] }));
};

var css_248z$1 = ".popover-trigger {\n  display: inline-block;\n  cursor: pointer;\n}\n\n.popover-trigger--disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n\n.popover-content {\n  position: fixed;\n  border-radius: 0.5rem;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  border: 1px solid;\n  background-color: white;\n  animation: popover-appear 0.2s ease-out;\n  max-width: 320px;\n  word-wrap: break-word;\n}\n\n.popover-inner {\n  padding: 0.75rem 1rem;\n  font-family: inherit;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n.popover-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: 6px solid transparent;\n}\n\n/* Sizes */\n.popover-content--small .popover-inner {\n  padding: 0.5rem 0.75rem;\n  font-size: 0.75rem;\n}\n\n.popover-content--small .popover-arrow {\n  border-width: 4px;\n}\n\n.popover-content--medium .popover-inner {\n  padding: 0.75rem 1rem;\n  font-size: 0.875rem;\n}\n\n.popover-content--medium .popover-arrow {\n  border-width: 6px;\n}\n\n.popover-content--large .popover-inner {\n  padding: 1rem 1.25rem;\n  font-size: 1rem;\n}\n\n.popover-content--large .popover-arrow {\n  border-width: 8px;\n}\n\n/* Variants */\n.popover-content--default {\n  border-color: #e5e7eb;\n  background-color: white;\n  color: #374151;\n}\n\n.popover-content--success {\n  border-color: #10b981;\n  background-color: #ecfdf5;\n  color: #065f46;\n}\n\n.popover-content--warning {\n  border-color: #f59e0b;\n  background-color: #fffbeb;\n  color: #92400e;\n}\n\n.popover-content--error {\n  border-color: #ef4444;\n  background-color: #fef2f2;\n  color: #991b1b;\n}\n\n.popover-content--info {\n  border-color: #3b82f6;\n  background-color: #eff6ff;\n  color: #1e40af;\n}\n\n/* Arrow positioning */\n.popover-content--top .popover-arrow {\n  bottom: -6px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-top-color: #e5e7eb;\n  border-bottom: none;\n}\n\n.popover-content--top-start .popover-arrow {\n  bottom: -6px;\n  left: 1rem;\n  border-top-color: #e5e7eb;\n  border-bottom: none;\n}\n\n.popover-content--top-end .popover-arrow {\n  bottom: -6px;\n  right: 1rem;\n  border-top-color: #e5e7eb;\n  border-bottom: none;\n}\n\n.popover-content--bottom .popover-arrow {\n  top: -6px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-bottom-color: #e5e7eb;\n  border-top: none;\n}\n\n.popover-content--bottom-start .popover-arrow {\n  top: -6px;\n  left: 1rem;\n  border-bottom-color: #e5e7eb;\n  border-top: none;\n}\n\n.popover-content--bottom-end .popover-arrow {\n  top: -6px;\n  right: 1rem;\n  border-bottom-color: #e5e7eb;\n  border-top: none;\n}\n\n.popover-content--left .popover-arrow {\n  right: -6px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-left-color: #e5e7eb;\n  border-right: none;\n}\n\n.popover-content--right .popover-arrow {\n  left: -6px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-right-color: #e5e7eb;\n  border-left: none;\n}\n\n/* Variant arrow colors */\n.popover-content--success .popover-arrow {\n  border-color: #10b981 transparent transparent transparent;\n}\n\n.popover-content--success.popover-content--bottom .popover-arrow {\n  border-color: transparent transparent #10b981 transparent;\n}\n\n.popover-content--success.popover-content--left .popover-arrow {\n  border-color: transparent transparent transparent #10b981;\n}\n\n.popover-content--success.popover-content--right .popover-arrow {\n  border-color: transparent #10b981 transparent transparent;\n}\n\n.popover-content--warning .popover-arrow {\n  border-color: #f59e0b transparent transparent transparent;\n}\n\n.popover-content--warning.popover-content--bottom .popover-arrow {\n  border-color: transparent transparent #f59e0b transparent;\n}\n\n.popover-content--warning.popover-content--left .popover-arrow {\n  border-color: transparent transparent transparent #f59e0b;\n}\n\n.popover-content--warning.popover-content--right .popover-arrow {\n  border-color: transparent #f59e0b transparent transparent;\n}\n\n.popover-content--error .popover-arrow {\n  border-color: #ef4444 transparent transparent transparent;\n}\n\n.popover-content--error.popover-content--bottom .popover-arrow {\n  border-color: transparent transparent #ef4444 transparent;\n}\n\n.popover-content--error.popover-content--left .popover-arrow {\n  border-color: transparent transparent transparent #ef4444;\n}\n\n.popover-content--error.popover-content--right .popover-arrow {\n  border-color: transparent #ef4444 transparent transparent;\n}\n\n.popover-content--info .popover-arrow {\n  border-color: #3b82f6 transparent transparent transparent;\n}\n\n.popover-content--info.popover-content--bottom .popover-arrow {\n  border-color: transparent transparent #3b82f6 transparent;\n}\n\n.popover-content--info.popover-content--left .popover-arrow {\n  border-color: transparent transparent transparent #3b82f6;\n}\n\n.popover-content--info.popover-content--right .popover-arrow {\n  border-color: transparent #3b82f6 transparent transparent;\n}\n\n/* Animation */\n@keyframes popover-appear {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n";
styleInject(css_248z$1);

const Popover = ({ children, content, trigger = "click", placement = "bottom", variant = "default", size = "medium", open: controlledOpen, onOpenChange, disabled = false, offset = 8, showArrow = true, closeOnClickOutside = true, closeOnEscape = true, className = "", contentClassName = "", delay = 0, hideDelay = 0, id, ...props }) => {
    const [internalOpen, setInternalOpen] = react.useState(false);
    const [position, setPosition] = react.useState({ top: 0, left: 0 });
    const triggerRef = react.useRef(null);
    const contentRef = react.useRef(null);
    const timeoutRef = react.useRef();
    const hideTimeoutRef = react.useRef();
    const isControlled = controlledOpen !== undefined;
    const isOpen = isControlled ? controlledOpen : internalOpen;
    const popoverId = id || `popover-${Math.random().toString(36).substr(2, 9)}`;
    const setOpen = react.useCallback((open) => {
        if (disabled)
            return;
        if (isControlled) {
            onOpenChange?.(open);
        }
        else {
            setInternalOpen(open);
        }
    }, [disabled, isControlled, onOpenChange]);
    const calculatePosition = react.useCallback(() => {
        if (!triggerRef.current || !contentRef.current)
            return;
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const contentRect = contentRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        let top = 0;
        let left = 0;
        switch (placement) {
            case "top":
                top = triggerRect.top - contentRect.height - offset;
                left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
                break;
            case "top-start":
                top = triggerRect.top - contentRect.height - offset;
                left = triggerRect.left;
                break;
            case "top-end":
                top = triggerRect.top - contentRect.height - offset;
                left = triggerRect.right - contentRect.width;
                break;
            case "bottom":
                top = triggerRect.bottom + offset;
                left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
                break;
            case "bottom-start":
                top = triggerRect.bottom + offset;
                left = triggerRect.left;
                break;
            case "bottom-end":
                top = triggerRect.bottom + offset;
                left = triggerRect.right - contentRect.width;
                break;
            case "left":
                top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
                left = triggerRect.left - contentRect.width - offset;
                break;
            case "right":
                top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
                left = triggerRect.right + offset;
                break;
        }
        // Boundary detection and adjustment
        if (left < 0)
            left = 8;
        if (left + contentRect.width > viewportWidth)
            left = viewportWidth - contentRect.width - 8;
        if (top < 0)
            top = 8;
        if (top + contentRect.height > viewportHeight)
            top = viewportHeight - contentRect.height - 8;
        setPosition({ top, left });
    }, [placement, offset]);
    const handleShow = react.useCallback(() => {
        if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current);
            hideTimeoutRef.current = undefined;
        }
        if (delay > 0) {
            timeoutRef.current = setTimeout(() => { setOpen(true); }, delay);
        }
        else {
            setOpen(true);
        }
    }, [delay, setOpen]);
    const handleHide = react.useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = undefined;
        }
        if (hideDelay > 0) {
            hideTimeoutRef.current = setTimeout(() => { setOpen(false); }, hideDelay);
        }
        else {
            setOpen(false);
        }
    }, [hideDelay, setOpen]);
    const handleTriggerClick = () => {
        if (trigger === "click") {
            setOpen(!isOpen);
        }
    };
    const handleTriggerMouseEnter = () => {
        if (trigger === "hover") {
            handleShow();
        }
    };
    const handleTriggerMouseLeave = () => {
        if (trigger === "hover") {
            handleHide();
        }
    };
    const handleTriggerFocus = () => {
        if (trigger === "focus") {
            handleShow();
        }
    };
    const handleTriggerBlur = () => {
        if (trigger === "focus") {
            handleHide();
        }
    };
    const handleContentMouseEnter = () => {
        if (trigger === "hover" && hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current);
            hideTimeoutRef.current = undefined;
        }
    };
    const handleContentMouseLeave = () => {
        if (trigger === "hover") {
            handleHide();
        }
    };
    // Click outside handler
    react.useEffect(() => {
        if (!isOpen || !closeOnClickOutside)
            return;
        const handleClickOutside = (event) => {
            if (triggerRef.current &&
                contentRef.current &&
                !triggerRef.current.contains(event.target) &&
                !contentRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => { document.removeEventListener("mousedown", handleClickOutside); };
    }, [isOpen, closeOnClickOutside, setOpen]);
    // Escape key handler
    react.useEffect(() => {
        if (!isOpen || !closeOnEscape)
            return;
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => { document.removeEventListener("keydown", handleEscape); };
    }, [isOpen, closeOnEscape, setOpen]);
    // Position calculation
    react.useEffect(() => {
        if (isOpen) {
            calculatePosition();
            const handleResize = () => { calculatePosition(); };
            window.addEventListener("resize", handleResize);
            window.addEventListener("scroll", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
                window.removeEventListener("scroll", handleResize);
            };
        }
        return undefined;
    }, [isOpen, calculatePosition]);
    // Cleanup timeouts
    react.useEffect(() => {
        return () => {
            if (timeoutRef.current)
                clearTimeout(timeoutRef.current);
            if (hideTimeoutRef.current)
                clearTimeout(hideTimeoutRef.current);
        };
    }, []);
    const triggerClasses = [
        "popover-trigger",
        disabled ? "popover-trigger--disabled" : "",
        className
    ].filter(Boolean).join(" ");
    const contentClasses = [
        "popover-content",
        `popover-content--${variant}`,
        `popover-content--${size}`,
        `popover-content--${placement}`,
        showArrow ? "popover-content--with-arrow" : "",
        contentClassName
    ].filter(Boolean).join(" ");
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { ref: triggerRef, className: triggerClasses, onClick: handleTriggerClick, onMouseEnter: handleTriggerMouseEnter, onMouseLeave: handleTriggerMouseLeave, onFocus: handleTriggerFocus, onBlur: handleTriggerBlur, "aria-describedby": isOpen ? popoverId : undefined, ...props, children: children }), isOpen && (jsxRuntime.jsxs("div", { ref: contentRef, className: contentClasses, style: {
                    position: "fixed",
                    top: position.top,
                    left: position.left,
                    zIndex: 1000
                }, id: popoverId, role: "tooltip", onMouseEnter: handleContentMouseEnter, onMouseLeave: handleContentMouseLeave, children: [showArrow && jsxRuntime.jsx("div", { className: "popover-arrow" }), jsxRuntime.jsx("div", { className: "popover-inner", children: content })] }))] }));
};

var css_248z = "/* Modal.css */\n\n.infinite-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  padding: 1rem;\n  overflow-y: auto;\n  animation: infinite-modal-fade-in 0.2s ease-out;\n}\n\n.infinite-modal-overlay-centered {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.infinite-modal {\n  background-color: #ffffff;\n  border-radius: 0.75rem;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  width: 100%;\n  max-height: calc(100vh - 2rem);\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  animation: infinite-modal-scale-in 0.2s ease-out;\n}\n\n/* Sizes */\n.infinite-modal-small {\n  max-width: 400px;\n}\n\n.infinite-modal-medium {\n  max-width: 500px;\n}\n\n.infinite-modal-large {\n  max-width: 700px;\n}\n\n.infinite-modal-extra-large {\n  max-width: 900px;\n}\n\n.infinite-modal-fullscreen {\n  max-width: none;\n  max-height: none;\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  border-radius: 0;\n}\n\n\n.infinite-modal-centered {\n  margin: auto;\n}\n\n.infinite-modal-drawer {\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100vh;\n  max-height: none;\n  border-radius: 0;\n  animation: infinite-modal-slide-in-right 0.3s ease-out;\n}\n\n.infinite-modal-fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  max-width: none;\n  max-height: none;\n  border-radius: 0;\n  animation: infinite-modal-fade-in 0.2s ease-out;\n}\n\n/* Header */\n.infinite-modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.5rem 1.5rem 0 1.5rem;\n  border-bottom: 1px solid transparent;\n  flex-shrink: 0;\n}\n\n.infinite-modal-title {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1f2937;\n  line-height: 1.5;\n}\n\n.infinite-modal-close {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  background: none;\n  border: none;\n  border-radius: 0.375rem;\n  cursor: pointer;\n  color: #6b7280;\n  transition: all 0.2s ease-in-out;\n  padding: 0;\n  margin-left: 1rem;\n  flex-shrink: 0;\n}\n\n.infinite-modal-close:hover {\n  background-color: #f3f4f6;\n  color: #1f2937;\n}\n\n.infinite-modal-close:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #3b82f6;\n}\n\n.infinite-modal-close-icon {\n  font-size: 1.5rem;\n  line-height: 1;\n  font-weight: 300;\n}\n\n/* Body */\n.infinite-modal-body {\n  padding: 1.5rem;\n  flex: 1;\n  overflow-y: auto;\n  color: #374151;\n  line-height: 1.6;\n}\n\n/* Footer */\n.infinite-modal-footer {\n  padding: 1rem 1.5rem 1.5rem 1.5rem;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n  flex-shrink: 0;\n  background-color: #f9fafb;\n  border-radius: 0 0 0.75rem 0.75rem;\n}\n\n/* Animations */\n@keyframes infinite-modal-fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes infinite-modal-scale-in {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n@keyframes infinite-modal-slide-in-right {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n@keyframes infinite-modal-slide-in-left {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n/* Size-specific adjustments for small screens */\n@media (max-width: 640px) {\n  .infinite-modal-overlay {\n    padding: 0;\n    align-items: flex-end;\n  }\n  \n  .infinite-modal {\n    max-width: none;\n    width: 100%;\n    max-height: 90vh;\n    border-radius: 1rem 1rem 0 0;\n    animation: infinite-modal-slide-up 0.3s ease-out;\n  }\n  \n  .infinite-modal-fullscreen {\n    border-radius: 0;\n    max-height: 100vh;\n  }\n  \n  .infinite-modal-header {\n    padding: 1rem 1rem 0 1rem;\n  }\n  \n  .infinite-modal-body {\n    padding: 1rem;\n  }\n  \n  .infinite-modal-footer {\n    padding: 0.75rem 1rem 1rem 1rem;\n  }\n  \n  .infinite-modal-drawer {\n    width: 100%;\n    height: 100vh;\n    border-radius: 0;\n    animation: infinite-modal-slide-up 0.3s ease-out;\n  }\n}\n\n@keyframes infinite-modal-slide-up {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n\n/* Drawer variant specific styles */\n.infinite-modal-drawer .infinite-modal-header {\n  border-bottom: 1px solid #e5e7eb;\n  padding-bottom: 1rem;\n}\n\n.infinite-modal-drawer .infinite-modal-footer {\n  background-color: #ffffff;\n  border-top: 1px solid #e5e7eb;\n  border-radius: 0;\n}\n\n/* Scrollbar styling for modal body */\n.infinite-modal-body::-webkit-scrollbar {\n  width: 6px;\n}\n\n.infinite-modal-body::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.infinite-modal-body::-webkit-scrollbar-thumb {\n  background: #d1d5db;\n  border-radius: 3px;\n}\n\n.infinite-modal-body::-webkit-scrollbar-thumb:hover {\n  background: #9ca3af;\n}\n\n/* Focus trap styling */\n.infinite-modal:focus {\n  outline: none;\n}\n\n/* High contrast mode support */\n@media (prefers-contrast: high) {\n  .infinite-modal {\n    border: 2px solid #000000;\n  }\n  \n  .infinite-modal-header {\n    border-bottom: 2px solid #000000;\n  }\n  \n  .infinite-modal-footer {\n    border-top: 2px solid #000000;\n  }\n}\n\n/* Reduced motion support */\n@media (prefers-reduced-motion: reduce) {\n  .infinite-modal-overlay,\n  .infinite-modal {\n    animation: none;\n  }\n  \n  .infinite-modal-close {\n    transition: none;\n  }\n}\n\n/* Print styles */\n@media print {\n  .infinite-modal-overlay {\n    position: static !important;\n    background: none !important;\n    padding: 0 !important;\n  }\n  \n  .infinite-modal {\n    box-shadow: none !important;\n    border: 1px solid #000000 !important;\n    page-break-inside: avoid;\n  }\n  \n  .infinite-modal-close {\n    display: none !important;\n  }\n}\n\n/* Dark mode support (when parent has dark class) */\n.dark .infinite-modal {\n  background-color: #1f2937;\n  color: #f9fafb;\n}\n\n.dark .infinite-modal-title {\n  color: #f9fafb;\n}\n\n.dark .infinite-modal-body {\n  color: #d1d5db;\n}\n\n.dark .infinite-modal-footer {\n  background-color: #111827;\n  border-top-color: #374151;\n}\n\n.dark .infinite-modal-header {\n  border-bottom-color: #374151;\n}\n\n.dark .infinite-modal-close {\n  color: #9ca3af;\n}\n\n.dark .infinite-modal-close:hover {\n  background-color: #374151;\n  color: #f9fafb;\n}";
styleInject(css_248z);

const Modal = ({ isOpen = false, onClose, title, children, footer, size = "medium", variant = "default", closeOnOverlayClick = true, closeOnEscape = true, showCloseButton = true, centered = true, fullScreen = false, className = "", overlayClassName = "", contentClassName = "", headerClassName = "", bodyClassName = "", footerClassName = "" }) => {
    // Handle escape key
    react.useEffect(() => {
        if (!isOpen || !closeOnEscape)
            return;
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose?.();
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => { document.removeEventListener("keydown", handleEscape); };
    }, [isOpen, closeOnEscape, onClose]);
    // Prevent body scroll when modal is open
    react.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);
    if (!isOpen)
        return null;
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget && closeOnOverlayClick) {
            onClose?.();
        }
    };
    return (jsxRuntime.jsx("div", { className: `
        infinite-modal-overlay
        ${centered ? "infinite-modal-overlay-centered" : ""}
        ${overlayClassName}
      `.trim(), onClick: handleOverlayClick, role: "dialog", "aria-modal": "true", "aria-labelledby": title ? "infinite-modal-title" : undefined, children: jsxRuntime.jsxs("div", { className: `
          infinite-modal
          infinite-modal-${size}
          infinite-modal-${variant}
          ${fullScreen ? "infinite-modal-fullscreen" : ""}
          ${className}
        `.trim(), onClick: (e) => { e.stopPropagation(); }, children: [(title || showCloseButton) && (jsxRuntime.jsxs("div", { className: `infinite-modal-header ${headerClassName}`, children: [title && (jsxRuntime.jsx("h2", { id: "infinite-modal-title", className: "infinite-modal-title", children: title })), showCloseButton && (jsxRuntime.jsx("button", { type: "button", className: "infinite-modal-close", onClick: onClose, "aria-label": "Close modal", children: jsxRuntime.jsx("span", { className: "infinite-modal-close-icon", children: "\u00D7" }) }))] })), jsxRuntime.jsx("div", { className: `infinite-modal-body ${bodyClassName} ${contentClassName}`, children: children }), footer && (jsxRuntime.jsx("div", { className: `infinite-modal-footer ${footerClassName}`, children: footer }))] }) }));
};

exports.Accordion = InfiniteAccordion;
exports.Alert = Alert;
exports.Badge = Badge;
exports.Button = Button;
exports.Checkbox = Checkbox;
exports.Input = Input;
exports.Modal = Modal;
exports.Popover = Popover;
exports.RadioGroup = RadioGroup;
exports.Segmented = Segmented;
exports.Select = Select;
exports.Slider = Slider;
exports.Switch = Switch;
exports.Tab = Tab;
exports.Tooltip = Tooltip;
//# sourceMappingURL=index.js.map
