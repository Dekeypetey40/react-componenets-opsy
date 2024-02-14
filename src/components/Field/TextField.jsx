import PropTypes from "prop-types";
import "./TextField.css"; // Import the CSS file
import React, { useState } from "react";

const TextField = ({ label, value, onChange, required }) => {
  const [error, setError] = useState(null);

  const handleOnChange = (event) => {
    if (required && !event.target.value) {
      if (event.target.value === "") {
        setError("This field is required");
      } else {
        setError(null);
      }
      console.error("This field is required");
    }
    onChange(event);
  };
  return (
    <>
      <div className="flex flex-col">
        <label className="mb-2">
          {label} {required && "*"}
        </label>
        <input
          className="textfield"
          type="text"
          value={value}
          onChange={handleOnChange}
        />
        {error && <div className="error">{error}</div>}
      </div>
    </>
  );
};
TextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default TextField;
