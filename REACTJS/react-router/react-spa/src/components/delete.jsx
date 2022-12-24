import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Delete() {
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();
  const [users, setUser] = useState([]);
  useEffect(() => {
    getAllData();
  }, []);
  const getAllData = async () => {
    let response = await axios.get(
      "http://localhost:3005/userdata2/" + params.id
    );
    setUser(response.data);
  };
  const deleteUser = async () => {
    let response = await axios.delete(
      "http://localhost:3005/userdata2/" + params.id
    );
    console.log("user deleted");
    navigate("/");
  };

  return (
    <div>
      <h1>delete page</h1>
      <ul>
        <li>{users.id}</li>
        <li>{users.firstname}</li>
        <li>{users.lastname}</li>
        <li>{users.email}</li>
      </ul>
      <button className="btn btn-danger" onClick={deleteUser}>
        confirm delete
      </button>
    </div>
  );
}
