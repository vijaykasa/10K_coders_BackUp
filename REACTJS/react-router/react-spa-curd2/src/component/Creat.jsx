
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from './Form';

export default function Creat() {
    const [student,setStudent]=useState({
        id:"",
        university: "",
        institute: "",
        branch: "",
        degree: "",
        percentage: "",
        experince: "",
        gender: "",
        website: "",
        subjects: [],
    })
    const navigate = useNavigate();
    const handlechange = (e) => {
        let newstudent = { ...student };
    
        if (e.target.name === "subjects") {
          if (student.subjects.length === 0) {
            newstudent.subjects.push(e.target.value);
          } else {
            var check =student.subjects.find(
              (val) => val === e.target.value
            );
    
            if (check) {
              newstudent.subjects =student.subjects.filter(
                (val) => val !== e.target.value
              );
            } else {
              newstudent.subjects.push(e.target.value);
            }
          }
        } else {
          newstudent[e.target.name] = e.target.value;
        }
        setStudent(newstudent);
      };
    
  const adduser = () => {
    axios.post("http://localhost:3010/studentdata", student);
    clearForm();
    navigate("/");
  };
 const  clearForm = () => {
    let empty = {
      university: "",
      institute: "",
      branch: "",
      degree: "",
      percentage: "",
      experince: "",
      gender: "",
      website: "",
      subjects: [],
    };
    setStudent(empty);
  };
    return (
    <div>
      <Form data={student} handlechange={handlechange} handlesubmit={adduser} btntext={"submit"}/>
    </div>
  )
}
