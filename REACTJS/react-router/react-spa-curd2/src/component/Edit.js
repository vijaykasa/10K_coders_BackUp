import React from 'react'
import Form from './Form'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edit() {

    const navigate=useNavigate()
    const params=useParams()
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
    useEffect(()=>{
        getAllData()
    },[])

    const getAllData=async ()=>{
        const response=await axios.get("http://localhost:3010/studentdata/"+params.id);
        setStudent(response.data);
    }
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
      const updatestudent = () => {
        axios.put("http://localhost:3010/studentdata/" + params.id, student);
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
      <Form data={student} handlechange={handlechange} handlesubmit={updatestudent} btntext={"Update"}/>
    </div>
  )
}
