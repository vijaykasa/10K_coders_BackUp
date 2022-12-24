import React from "react";
import axios from "axios";
// import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "./user";

export default function Users() {
  const navigate = useNavigate();
  const [users, setUser] = useState([]);
  useEffect(() => {
    getAllData();
  }, []);
  const getAllData = async () => {
    let response = await axios.get("http://localhost:3005/userdata2");
    setUser(response.data);
  };

  return (
    <div>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((ele, i) => (
            <User usr={ele} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
