import React from "react";
import UserForm from "./userForm";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Edit() {
  const params = useParams();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    let newuser = { ...user };
    newuser[e.target.name] = e.target.value;
    setUser(newuser);
  };
  useEffect(() => {
    getAllData();
  }, []);
  const getAllData = async () => {
    let response = await axios.get(
      "http://localhost:3005/userdata2/" + params.id
    );
    setUser(response.data);
  };
  const updateUser = () => {
    axios.put("http://localhost:3005/userdata2/" + params.id, user);
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
    <div>
      <h2>edit page</h2>
      <UserForm
        user={user}
        handleChange={handleChange}
        handleSubmit={updateUser}
        btntext={"update"}
      />
    </div>
  );
}
