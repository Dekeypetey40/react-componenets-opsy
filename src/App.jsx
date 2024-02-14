import { useState } from "react";
import "./assets/css/style.css";
import TextField from "./components/Field/TextField";

function App() {
  const [texts, setTexts] = useState(["", "", ""]); // Initialize state with three empty strings

  const handleTextChange = (index) => (event) => {
    const newValues = [...texts];
    newValues[index] = event.target.value;
    setTexts(newValues); // Update state when TextField changes
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      {texts.map((text, index) => (
        <TextField
          key={index}
          label={`Label ${index + 1}`}
          value={text}
          onChange={handleTextChange(index)}
        />
      ))}
    </div>
  );
}

export default App;
