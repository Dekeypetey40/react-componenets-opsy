import React from "react";
import "./Fields.css";

const RadioButton = ({ options, name, value, onChange }) => {
  return (
    <div className="radiofield-container">
      {options.map((option, index) => (
        <label key={index}>
          <input
            className="radiofield-input"
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
