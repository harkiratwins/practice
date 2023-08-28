import React from "react";

const Maps =()=>{

    const Users=[
        {Name:'kirat',Email:'k@gmail.com',Contact:1234567890},
        {Name:'Preet',Email:'P@gmail.com',Contact:2222567890},
        {Name:'mani',Email:'M@gmail.com',Contact:1234567890},
        {Name:'Deep',Email:'Z@gmail.com',Contact:1234567890},
    ]

return(

   <table border={1}>
    <tr>
        <td>Name</td>
        <td>Email</td>
        <td>Contact</td>
    </tr>
    {
        Users.map((items)=>
        <tr>
            <td>{items.Name}</td>
            <td>{items.Email}</td>
            <td>{items.Contact}</td>
        </tr>
        )
    }

   </table>
)
}


export default Maps;