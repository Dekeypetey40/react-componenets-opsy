import PropTypes from "prop-types";
import "./TextField.css"; // Import the CSS file

const TextField = ({ label, value, onChange, count }) => {
  return (
    <>
      {label.slice(0, count).map((label, i) => (
        <div key={i} className="flex flex-col">
          <label className="mb-2">{label}</label>
          <input
            className="textfield"
            type="text"
            value={value}
            onChange={onChange}
          />
        </div>
      ))}
    </>
  );
};
TextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextField;
