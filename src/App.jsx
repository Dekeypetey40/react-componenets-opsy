import { useState } from "react";
import "./assets/css/style.css";
import TextField from "./components/Field/TextField";

function App() {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value); // Update state when TextField changes
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <TextField label="Label" value={text} onChange={handleTextChange} />
      {/* Rest of your App components */}
    </div>
  );
}

export default App;
