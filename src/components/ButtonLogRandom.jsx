import React from "react";

function logConsole() {
  console.log(Math.random());
}

function ButtonLogRandom() {
  return (
    <div className="component">
      <h2>Button Log Random Component</h2>
      <button onClick={logConsole}>Get random on console</button>
    </div>
  );
}

export default ButtonLogRandom;
