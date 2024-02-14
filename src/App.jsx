import { useState } from "react";
import "./assets/css/style.css";
import TextField from "./components/Field/TextField";

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  return (
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
    </div>
  );
}

export default App;
