import React, { useState } from "react";

function ArrayUseState() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    age: "",
    phone: "",
    address: "",
  });
  const [formList, setFormList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormList([...formList, formData]);
    setFormData({
      name: "",
      lastname: "",
      age: "",
      phone: "",
      address: "",
    }); // for clear form data
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br></br>
        <input
          type="text"
          name="firstname"
          placeholder="Enter your First Name"
          value={formData.firstname}
          onChange={handleChange}
        />
         <br></br>
        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
        />
         <br></br>
        <input
          type="number"
          name="phone"
          placeholder="Enter your Number"
          value={formData.number}
          onChange={handleChange}
        />
         <br></br>
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
        />
         <br></br>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Submitted Data:</h2>
        <ul>
          {formList.map((data, index) => (
            <li key={index}>
              Name: {data.name}, Last Name: {data.lastname}, Age: {data.age},
              Phone: {data.phone}, Address: {data.address}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ArrayUseState;
