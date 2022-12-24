import axios from "axios";
import React from "react";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserForm from "./userForm";

export default function AddUser() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  console.log(user);
  const navigate = useNavigate();
  const handleChange = (e) => {
    let newuser = { ...user };
    newuser[e.target.name] = e.target.value;
    setUser(newuser);
  };
  const adduser = () => {
    axios.post("http://localhost:3005/userdata2", user);
    clearForm();
    navigate("/");
  };
  const clearForm = () => {
    let empty = {
      firstname: "",
      lastname: "",
      email: "",
    };
    setUser(empty);
  };
  return (
    <>
      <h1>hello</h1>
      <UserForm
        handleChange={handleChange}
        user={user}
        handleSubmit={adduser}
        btntext={"submit"}
      />
    </>
  );
}
