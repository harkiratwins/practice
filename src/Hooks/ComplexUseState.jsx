import React, { useState } from "react";

const ComplexUseState = () => {
  const [registration, setRegistration] = useState({
    fname: "",
    email: "",
    phone: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    //console.log(name, value);

    setRegistration({ ...registration, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecord = { ...registration, id: new Date().getTime().toString() };

    setRecords([...records, newRecord]);

    //for empty form

    setRegistration({ fname: "", email: "", phone: "", password: "" });
  };

  return (
    <div className="App">
      <section>
        <div
          className="container"
          style={{ background: "pink", height: "350px", width: "300px" }}
        >
          <form style={{ marginTop: "50px" }} onSubmit={handleSubmit}>
            <div className="" style={{ background: "pink", margin: "auto" }}>
              <label className="mx-5 mt-3">Full Name:</label>
              <input
                type="text"
                autoComplete="off"
                value={registration.fname}
                onChange={handleInput}
                name="fname"
                id="fname"
              />

              <label className="mx-5 mt-3">E-Mail:</label>
              <input
                type="email"
                autoComplete="off"
                value={registration.email}
                onChange={handleInput}
                name="email"
                id="email"
              />

              <label className="mx-5 mt-3">Phone:</label>
              <input
                type="tele"
                autoComplete="off"
                value={registration.phone}
                onChange={handleInput}
                name="phone"
                id="phone"
              />

              <label className="mx-5 mt-3">Password:</label>
              <input
                type="password"
                autoComplete="off"
                value={registration.password}
                onChange={handleInput}
                name="password"
                id="password"
              />
              <br></br>
              <button type="submit" className="btn btn-primary mt-3">
                Primary
              </button>
            </div>
          </form>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {records.map((currElement) => {
              return (
                <>
                  <tr key={currElement.id}>
                    <td>{currElement.fname}</td>
                    <td>{currElement.email}</td>
                    <td>{currElement.phone}</td>
                    <td>{currElement.password}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};
export default ComplexUseState;
