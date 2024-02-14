import { useState } from "react";
import "./assets/css/style.css";
import TextField from "./components/Field/TextField";
import RadioButton from "./components/Field/RadioField";
import DateField from "./components/Field/DateField";

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (value) => {
    if (endDate) {
      // Only perform validation if endDate has a value
      const startDateValue = new Date(value);
      const endDateValue = new Date(endDate);

      if (startDateValue < endDateValue) {
        setStartDate(value);
      } else {
        alert("Start date must be before end date");
      }
    } else {
      setStartDate(value); // If endDate doesn't have a value, just set the start date
    }
  };

  const handleEndDateChange = (value) => {
    if (startDate) {
      // Only perform validation if startDate has a value
      const startDateValue = new Date(startDate);
      const endDateValue = new Date(value);

      if (endDateValue > startDateValue) {
        setEndDate(value);
      } else {
        alert("End date must be after start date");
      }
    } else {
      setEndDate(value); // If startDate doesn't have a value, just set the end date
    }
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
    // add more options here
  ];
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center my-8">
          Storybook Components
        </h1>
        <TextField
          label="Label 1"
          value={value1}
          onChange={(event) => setValue1(event.target.value)}
          required
        />
        <TextField
          label="Label 2"
          value={value2}
          onChange={(event) => setValue2(event.target.value)}
          required
        />
        <TextField
          label="Label 3"
          value={value3}
          onChange={(event) => setValue3(event.target.value)}
        />

        <div className="radio-field">
          <RadioButton
            options={options}
            name="options"
            value={selectedOption}
            onChange={handleChange}
          />
        </div>
        <div className="datefield-container">
          <DateField
            label="Från"
            value={startDate}
            onChange={(event) => handleStartDateChange(event.target.value)}
          />
          <DateField
            label="Till"
            value={endDate}
            onChange={(event) => handleEndDateChange(event.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
