import PropTypes from "prop-types";
import "./TextField.css"; // Import the CSS file

const TextField = ({ label, value, onChange }) => {
  return (
    <div className="textfield-container">
      {label && <label className="textfield-label">{label}</label>}
      <input
        type="text"
        className="textfield"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextField;
