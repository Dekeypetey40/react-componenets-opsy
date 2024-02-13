import PropTypes from "prop-types";
import "./TextField.css"; // Import the CSS file

const TextField = ({ label, value, onChange, count = 1 }) => {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <>
          <div className="flex flex-col textfield-container">
            <label className="mb-2">{label}</label>
            <input
              key={i}
              className="textfield"
              type="text"
              value={value}
              onChange={onChange}
            />
          </div>
        </>
      ))}
    </>
  );
};

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextField;
