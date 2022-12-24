import React from 'react'
import  axios  from "axios";
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'
import { useEffect,useState} from 'react'

export default function Users() {
    const [users,setUser]=useState([])
    useEffect(() => {
        getAllData();
      }, []);
    const getAllData=async()=>{
        let response=await axios.get("http://localhost:3005/userdata2")
        setUser(response.data)
    }
    const deleteUser=(ele)=>{
         
    }
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
      {users.map((ele,i)=> <tr key={i}><td>{i}</td><td>{ele.firstname}</td><td>{ele.lastname}</td>
      <td>{ele.email}</td><td><button className='btn btn-warning'>Edit</button></td>
      <td><Link to={"/delete"} ><button className='btn btn-danger'onClick={deleteUser(ele)}>Delete</button></Link></td>
      </tr>)}
  </tbody>
</table>
    </div>
  )
}
