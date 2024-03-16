// SimpleComponent.jsx

// Import React and useState hook from React library
import React, { useState } from "react";

// Define a functional component named SimpleComponent
const SimpleComponent = () => {
  // Define a state variable using useState hook
  const [count, setCount] = useState(0);

  // Define a function to handle incrementing the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Return JSX representing the component's UI
  return (
    <div className="component">
      <h2>Simple React Component</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

// Export the SimpleComponent so it can be used elsewhere in the application
export default SimpleComponent;
