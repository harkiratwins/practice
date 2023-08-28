import React, { useState } from 'react'

const SpreadOpr=()=>{

 const [registration,setRegistration]=useState({
    name:'',
    city:'',
    biography:'',
 })

 
  
 const handleInput=(e)=>{
      const name = e.target.name;
      const value =e.target.value;
      setRegistration({...registration,[name]:value})
   } ;  

   const handleSubmit = (event) => {
    event.preventDefault();
    console.log(registration);
 }


    return(
        <>
        <div className="App">
            <h2>Spread Operator</h2>
            <br></br>
                <hr></hr>
            <form onSubmit={handleSubmit}>
                <input value={registration.name} name="name" onChange={handleInput} placeholder='Enter Your Name'/>
                <br></br>
                <hr></hr>
                <select value={registration.city} name='city' onChange={handleInput}>  
                    <option hidden>Choose a city</option>
                    <option value="1">Bathinda</option>
                    <option value="2">Mohali</option>
                    <option value="3">Chandigarh</option>
                </select>
                <br></br>
                <hr></hr>
                <textarea rows={10} name="biography"  onChange={handleInput} value={registration.biography} placeholder='BioGraphy'/>
                <br></br>
                <hr></hr>
                  <button>Send</button>
                  <hr></hr>
            </form>
        </div>
        </>
    )
}

export default SpreadOpr;