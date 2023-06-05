import React, { useState } from "react";
import axios from "axios";

const FormInput = () => {
  const [userCreate, setUserCreate] = useState({ nama: "", email: "" });

  const handleInputChange = (event) => {
    setUserCreate({
      ...userCreate,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/users", userCreate)
      .then((response) => {
        console.log(response.data);
        setUserCreate({ nama: "", email: "" });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="nama"
          name="nama"
          value={userCreate.nama}
          onChange={handleInputChange}
        ></input>{" "}
        <br />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={userCreate.email}
          onChange={handleInputChange}
        ></input>{" "}
        <br />
        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
};

export default FormInput;
