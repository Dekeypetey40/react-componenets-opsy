import React from "react";

const RadioButton = ({ options, name, value, onChange }) => {
  return (
    <div>
      {options.map((option, index) => (
        <label key={index}>
          <input
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
