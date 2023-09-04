import React, { useState } from "react";

function UseState1() {
  const [count, setCount] = useState(0);
  const [isToggled,setToggled]=useState(false)

  const Increament=()=>{
    setCount(prevCount=>prevCount+1)
  }

  return (
    <>
    <p>Toggled:{isToggled?'on':'off'}</p>
    <button onClick={()=>setToggled(!isToggled)}>Toggled</button>
      <p>Count : {count}</p>
      <button onClick={Increament}>Increament</button>
    </>
  );
}
export default UseState1;
