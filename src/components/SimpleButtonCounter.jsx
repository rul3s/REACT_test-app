import React, { useState } from "react";

function SimpleButtonCounter() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter(counter + 1);
  const handleDoubleClick = () => setCounter(0);

  return (
    <div className="component">
      <h2>Simple Button Counter Component</h2>
      <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
        {counter}
      </button>
    </div>
  );
}

export default SimpleButtonCounter;
