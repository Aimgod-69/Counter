import React, { useState } from "react";
import "./Counter.css";

import { handleIncrement, handleDecrement, handleIpChange } from "./Handlers";

const Counter = () => {
  const [num, setNum] = useState("1");

  return (
    <div className="counter">
      <div>
        <button className="decBtn" onClick={() => handleDecrement(num, setNum)}>
          -
        </button>

        <input type="text" id="counterInput" autoComplete="off" value={num} onChange={(e) => handleIpChange(e, setNum)} />

        <button className="incBtn" onClick={() => handleIncrement(num, setNum)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
