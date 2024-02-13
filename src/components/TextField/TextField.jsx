import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextField;
