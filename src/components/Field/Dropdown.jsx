import React, { useState } from "react";

const Dropdown = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select value={selectedOption} onChange={handleSelectChange}>
      {options.map((option, index) => (
        <option className="textfield" key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
