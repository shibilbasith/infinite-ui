import React, { useState } from "react";
import "./Slider.css";
import { type SliderProps } from "./types";

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 0,
  label,
  className = "",
  onChange
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={`infinite-slider-container ${className}`}>
      {label && (
        <label className="infinite-slider-label">
          {label}: {value}
        </label>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="infinite-slider"
      />
      <div className="infinite-slider-range">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default Slider;
