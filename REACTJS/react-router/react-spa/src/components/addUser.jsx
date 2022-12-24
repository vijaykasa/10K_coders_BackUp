import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'

export default function AddUser() {
    const [user,setUser]=useState({
        firstname:"",
        lastname:"",
        email:"",
    })
    const handelChange=(e)=>{
        let newuser={...user}
        newuser[e.target.name]=e.target.value
        setUser(newuser)
    }
    const adduser=()=>{
        axios.post("http://localhost:3005/userdata2",user)
        clearForm()
    }
    const clearForm=()=>{
        let empty={
            firstname:"",
            lastname:"",
            email:""
        }
        setUser(empty)
    }
  return (
    <div className="d-flex justify-content-center">
    <div className='w-50 ' >
      <label className='form-label'>FirstName :</label>
      <input className='form-control' type="text" name="firstname" value={user.firstname} onChange={(e)=>{handelChange(e)}}/>
      <label className='form-label'>LastName :</label>
      <input className='form-control' type="text" name="lastname" value={user.lastname} onChange={(e)=>{handelChange(e)}}/>
      <label className='form-label'>Email :</label>
      <input className='form-control' type="text" name="email" value={user.email} onChange={(e)=>{handelChange(e)}}/>
      <Link to="/userdata"><button className='btn btn-primary mt-5' onClick={adduser}>submit</button></Link>
    </div>
    </div>
  )
}
