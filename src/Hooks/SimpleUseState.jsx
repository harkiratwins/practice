import React, { useState } from "react";

const SimpleUseState = () => {
  const [count, setCount] = useState(0);

  const CountingNum = () => {
    setCount(count + 1);
    // console.log("clicked"+Count++);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        style={{ background: "blue", color: "white" }}
        onClick={CountingNum}
      >
        Click Me
      </button>
    </div>
  );
};
export default SimpleUseState;
