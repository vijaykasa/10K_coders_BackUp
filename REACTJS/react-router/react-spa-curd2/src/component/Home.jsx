import React, { useState, useEffect } from 'react'
import Data from './Data';
import axios from 'axios'
import User from './Data';



export default function Home() {
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
    const [students,setData]=useState([]);
     
    useEffect(() => {
        getAlldata();
      }, []);
     const getAlldata =  async()=>{
          const response=await axios.get("http://localhost:3010/studentdata");
          setData(response.data);
     }
     
  return (
    <div className='container'>

      <table className='table'>
        <thead className='table-dark'>
            <tr>
                {Object.keys(student).map((head,i)=><td key={i}>{head}</td>)}
                 <td>Edit</td>
                 <td>Delete</td>
            </tr>
        </thead>
        <tbody>
        {students.map((ele, i) => (
            <User data={ele} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
