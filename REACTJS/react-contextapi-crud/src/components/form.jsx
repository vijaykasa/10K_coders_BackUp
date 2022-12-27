import React from 'react'
import { MyContextConsumer } from './contextapi'

export default function Form() {
    const{user,handlechange,adduser}=MyContextConsumer()
  return (
    <div className='container mt-5 text-start w-50 '>
      <lable className="form-lable">FullName :</lable>
      <input type="text" className='form-control' name="fullname" value={user.fullname} 
      onChange={(e)=>{handlechange(e)}} />
      <lable className="form-lable">UserName :</lable>
      <input type="text" className='form-control' name="username" value={user.username} 
      onChange={(e)=>{handlechange(e)}} />
      <lable className="form-lable">Email :</lable>
      <input type="text" className='form-control' name="email" value={user.email} 
      onChange={(e)=>{handlechange(e)}} />
      <button onClick={adduser} className='btn btn-primary mt-3'>submit</button>
    </div>
  )
}
