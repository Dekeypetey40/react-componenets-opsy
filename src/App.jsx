import { useState } from "react";
import "./assets/css/style.css";
import TextField from "./components/Field/TextField";
import RadioButton from "./components/Field/RadioField";

function App() {
  const [selectedOption, setSelectedOption] = useState("");

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
        <h1 className="text-4xl font-bold text-center my-8">Storybook</h1>
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
      </div>
    </>
  );
}

export default App;
