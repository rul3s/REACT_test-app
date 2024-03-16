import React from "react";

function DisplayCounter(props) {
  return (
    <div className="subComponent">
      <h3>Display Component</h3>
      <div>{props.counter}</div>
    </div>
  );
}

export default DisplayCounter;
