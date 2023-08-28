import React, { useEffect, useState } from "react";


const UseEffect1 = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  useEffect(() => {
    alert("i am clicked");
  },[num]);

  return (
    <>
      <div className="container">
        <br></br>
        <button className="button"
          onClick={() => {
            setNum(num + 1);
          }}
        >
          Click Me{num}
        </button>
        <br></br>
        <hr></hr>
        <button className="button"
          onClick={() => {
            setNums(nums + 1);
          }}
        >
          Click Me{nums}
        </button>
      </div>
    </>
  );
};

export default UseEffect1;
