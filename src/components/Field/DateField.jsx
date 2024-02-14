import React from "react";
import PropTypes from "prop-types";
import "./Fields.css";

const DateField = ({ label, value, onChange }) => {
  return (
    <div className="textfield-container">
      <label>{label}</label>
      <input
        className="textfield"
        type="date"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

DateField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DateField;
