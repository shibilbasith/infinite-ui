import React, { useState, useRef, useEffect } from "react";
import { type SelectProps, type SelectOption } from "./types";
import "./Select.css";

const Select: React.FC<SelectProps> = ({
  id,
  name,
  options,
  value,
  defaultValue,
  placeholder = "Select an option...",
  disabled = false,
  required = false,
  multiple = false,
  size = "medium",
  variant = "primary",
  label,
  helperText,
  errorText,
  searchable = false,
  clearable = false,
  loading = false,
  onChange,
  onFocus,
  onBlur,
  onSearch,
  className = "",
  labelClassName = "",
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedValues, setSelectedValues] = useState<string[]>(
    multiple
      ? (Array.isArray(value) ? value : value ? [value] : [])
      : []
  );
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const selectRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const nativeSelectRef = useRef<HTMLSelectElement>(null);

  const filteredOptions = searchable && searchTerm
    ? options.filter(option =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : options;

  const groupedOptions = filteredOptions.reduce<Record<string, SelectOption[]>>((groups, option) => {
    const group = option.group || "";
    if (!groups[group]) groups[group] = [];
    groups[group].push(option);
    return groups;
  }, {});

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm("");
        setFocusedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => { document.removeEventListener("mousedown", handleClickOutside); };
  }, []);

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
    if (!isOpen && searchable && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 0);
    }
  };

  const handleOptionSelect = (optionValue: string) => {
    if (multiple) {
      const newValues = selectedValues.includes(optionValue)
        ? selectedValues.filter(v => v !== optionValue)
        : [...selectedValues, optionValue];
      setSelectedValues(newValues);
      onChange?.(newValues);
    } else {
      setSelectedValues([optionValue]);
      onChange?.(optionValue);
      setIsOpen(false);
      setSearchTerm("");
    }
    setFocusedIndex(-1);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedValues([]);
    onChange?.(multiple ? [] : "");
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    onSearch?.(term);
    setFocusedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case "Enter":
      case " ":
        if (!isOpen) {
          setIsOpen(true);
        } else if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
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
        } else {
          setFocusedIndex(prev =>
            prev < filteredOptions.length - 1 ? prev + 1 : 0
          );
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (isOpen) {
          setFocusedIndex(prev =>
            prev > 0 ? prev - 1 : filteredOptions.length - 1
          );
        }
        break;
    }
  };

  const getDisplayValue = () => {
    if (multiple) {
      if (selectedValues.length === 0) return placeholder;
      if (selectedValues.length === 1) {
        const option = options.find(opt => opt.value === selectedValues[0]);
        return option?.label || selectedValues[0];
      }
      return `${selectedValues.length} items selected`;
    } else {
      const selectedValue = value || (selectedValues.length > 0 ? selectedValues[0] : "");
      if (!selectedValue) return placeholder;
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

  return (
    <div className="infinite-select-container">
      {label && (
        <label htmlFor={selectId} className={labelClasses}>
          {label}
          {required && <span className="infinite-select__required">*</span>}
        </label>
      )}

      <div className="infinite-select-wrapper" ref={selectRef}>
        {/* Native select for form submission */}
        <select
          ref={nativeSelectRef}
          id={selectId}
          name={name}
          value={multiple ? selectedValues : (value || selectedValues[0] || "")}
          defaultValue={defaultValue}
          multiple={multiple}
          required={required}
          disabled={disabled}
          onChange={(e) => {
            const target = e.target as HTMLSelectElement;
            if (multiple) {
              const values = Array.from(target.selectedOptions, option => option.value);
              setSelectedValues(values);
              onChange?.(values, e);
            } else {
              setSelectedValues([target.value]);
              onChange?.(target.value, e);
            }
          }}
          className="infinite-select__native"
          tabIndex={-1}
          aria-hidden="true"
          {...props}
        >
          {!multiple && <option value="">{placeholder}</option>}
          {options.map(option => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        {/* Custom select display */}
        <div
          className={selectClasses}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          tabIndex={disabled ? -1 : 0}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-labelledby={label ? `${selectId}-label` : undefined}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          <div className="infinite-select__value">
            <span className={`infinite-select__placeholder ${selectedValues.length > 0 || value ? "infinite-select__placeholder--filled" : ""}`}>
              {getDisplayValue()}
            </span>

            <div className="infinite-select__actions">
              {clearable && (selectedValues.length > 0 || value) && (
                <button
                  type="button"
                  className="infinite-select__clear"
                  onClick={handleClear}
                  tabIndex={-1}
                  aria-label="Clear selection"
                >
                  ×
                </button>
              )}
              {loading ? (
                <div className="infinite-select__spinner" />
              ) : (
                <div className={`infinite-select__arrow ${isOpen ? "infinite-select__arrow--up" : ""}`}>
                  {/* ▼ */}
                </div>
              )}
            </div>
          </div>

          {isOpen && (
            <div className="infinite-select__dropdown">
              {searchable && (
                <div className="infinite-select__search">
                  <input
                    ref={searchInputRef}
                    type="text"
                    className="infinite-select__search-input"
                    placeholder="Search options..."
                    value={searchTerm}
                    onChange={(e) => { handleSearch(e.target.value); }}
                    onClick={(e) => { e.stopPropagation(); }}
                  />
                </div>
              )}

              <div className="infinite-select__options" role="listbox">
                {filteredOptions.length === 0
                  ? (
                  <div className="infinite-select__no-options">No options found</div>
                    )
                  : (
                      Object.entries(groupedOptions).map(([groupName, groupOptions]) => (
                    <div key={groupName} className="infinite-select__group">
                      {groupName && (
                        <div className="infinite-select__group-label">{groupName}</div>
                      )}
                      {groupOptions.map((option) => {
                        const globalIndex = filteredOptions.indexOf(option);
                        const isSelected = multiple
                          ? selectedValues.includes(option.value)
                          : (value || selectedValues[0]) === option.value;
                        const isFocused = focusedIndex === globalIndex;

                        return (
                          <div
                            key={option.value}
                            className={[
                              "infinite-select__option",
                              isSelected && "infinite-select__option--selected",
                              isFocused && "infinite-select__option--focused",
                              option.disabled && "infinite-select__option--disabled"
                            ].filter(Boolean).join(" ")}
                            onClick={() => !option.disabled && handleOptionSelect(option.value)}
                            role="option"
                            aria-selected={isSelected}
                          >
                            {multiple && (
                              <div className={`infinite-select__checkbox ${isSelected ? "infinite-select__checkbox--checked" : ""}`}>
                                {isSelected && "✓"}
                              </div>
                            )}
                            <span className="infinite-select__option-label">{option.label}</span>
                          </div>
                        );
                      })}
                    </div>
                      ))
                    )}
              </div>
            </div>
          )}
        </div>
      </div>

      {(helperText || errorText) && (
        <div className={`infinite-select__helper ${errorText ? "infinite-select__helper--error" : ""}`}>
          {errorText || helperText}
        </div>
      )}
    </div>
  );
};

export default Select;
