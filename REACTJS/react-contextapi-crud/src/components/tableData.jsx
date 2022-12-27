import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { MyContextConsumer } from './contextapi'

export default function TableData() {
    const navigate= useNavigate()
    const {users}=MyContextConsumer()
    const editUser=(ele)=>{
        // navigate('/edit/'+ele.id)
    }
    const deleteUser=(ele)=>{
        // navigate('/delete/'+ele.id)
    }
  return (
    <div>
     <table className='table'>
        <thead className='table-dark'>
            <tr>
                 <th>Id</th>
                 <th>FullName</th>
                 <th>UserName</th>
                 <th>Email</th>
                 <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {users.map((ele,i)=> <tr key={i}><td>{ele.id}</td>
            <td>{ele.fullname}</td><td>{ele.username}</td>
            <td>{ele.email}</td>
            <td><button onClick={()=>{editUser(ele)}} className='btn btn-warning'>Edit</button><button onClick={()=>{deleteUser(ele)}} className='btn btn-danger'>Delete</button></td></tr>)}
        </tbody>
     </table>
     
    </div>
  )
}
