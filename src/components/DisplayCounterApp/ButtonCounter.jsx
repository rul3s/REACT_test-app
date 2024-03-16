import React from "react";

function ButtonCounter(props) {
  return (
    <div className="subComponent">
      <h3>Button Counter Component</h3>
      <button onClick={props.increment} onDoubleClick={props.reset}>
        +{props.incrementValue}
      </button>
    </div>
  );
}

export default ButtonCounter;
