import React, { useState } from "react";
import ButtonCounter from "./ButtonCounter";
import DisplayCounter from "./DisplayCounter";

function DisplayButtonCounter() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  const resetCounter = () => setCounter(0);
  const increment = 1;

  return (
    <div className="component">
      <h2>Display Button App Component </h2>
      <ButtonCounter
        incrementValue={increment}
        incrementFunc={incrementCounter}
        resetFunc={resetCounter}
      />
      <DisplayCounter counter={counter} />
    </div>
  );
}

export default DisplayButtonCounter;
