import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = (e) => {
    e.preventDefault(); 
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>

      <form onSubmit={handleEqual}>
        <input
          type="text"
          value={input}
          placeholder="0"
          readOnly
          className="display"
        />

        <div className="buttons">
          
          {[1,2,3,4,5,6,7,8,9,0].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => handleClick(num.toString())}
            >
              {num}
            </button>
          ))}

          {["+", "-", "*", "/"].map((op) => (
            <button
              key={op}
              type="button"
              onClick={() => handleClick(op)}
              className="operator"
            >
              {op}
            </button>
          ))}

          <button type="button" onClick={handleClear} className="clear">
            C
          </button>

          <button type="submit" className="equals">
            =
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
