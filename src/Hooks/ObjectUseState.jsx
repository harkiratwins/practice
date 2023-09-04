import React,{useState} from 'react';

function ObjectUseState (){
    const[user,setUser]=useState({name:"",age:0})

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log('Submitted:', user);
    }
    return(
      <form onSubmit={handleSubmit}>
      <input
      type='text'
      value={user.name}
      onChange={(e)=>setUser({...user,name:e.target.value})}
      />
      <input
      type='number'
      value={user.age}
      onChange={(e)=>setUser({...user,age:parseInt(e.target.value)})}
      />
      <button type='submit'>Submit</button>
      </form>
    )
}

export default ObjectUseState;