import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dropdown: 'option1',
    radio: '',
    checkbox: false,
    textarea: ''
  });

  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    
    // Handle checkbox input separately
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prevData => ({
      ...prevData,
      [name]: newValue
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
    // You can perform further actions, such as sending data to a server
  };

  return (
    <div>
      <h1>React Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div>
          <label>Dropdown:</label>
          <select
            name="dropdown"
            value={formData.dropdown}
            onChange={handleChange}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <br></br>
        <div>
          <label>Radio:</label>
          <input
            type="radio"
            name="radio"
            value="radioOption1"
            checked={formData.radio === 'radioOption1'}
            onChange={handleChange}
          /> Option 1
          <input
            type="radio"
            name="radio"
            value="radioOption2"
            checked={formData.radio === 'radioOption2'}
            onChange={handleChange}
          /> Option 2
        </div>
        <br></br>
        <div>
          <label>Checkbox:</label>
          <input
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div>
          <label>Textarea:</label>
          <textarea
            name="textarea"
            value={formData.textarea}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
