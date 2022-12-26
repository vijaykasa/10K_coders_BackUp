import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import User from './Data';

export default function Delete() {
    const params = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState([]);
    useEffect(() => {
      getAllData();
    }, []);
    const getAllData = async () => {
      let response = await axios.get(
        "http://localhost:3010/studentdata/" + params.id
      );
      setStudent(response.data);
    };
    const deleteUser = async () => {
      let response = await axios.delete(
        "http://localhost:3010/studentdata/" + params.id
      );
      console.log("user deleted");
      navigate("/");
    };
  
  return (
    <div className='container'>
       <table className='table'>
        <thead className='table-dark'>
            <tr>
                
                {Object.keys(student).map((head,i)=><td key={i}>{head}</td>)}
                
            </tr>
        </thead>
        <tbody>
        <tr>
        {Object.values(student).map((ele,i)=> <td key={i}>{ele}</td> )}
        </tr>
            
        </tbody>
        </table>
        <button className='btn btn-danger' onClick={deleteUser}>confitm delete</button>
    </div>
  )
}
