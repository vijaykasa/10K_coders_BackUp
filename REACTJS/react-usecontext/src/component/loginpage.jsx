import React from 'react'

export default function Loginpage() {
    const userlogin=()=>{

    }
  return (
    <div className='container w-50 text-start'>
    <label className='form-label'>username :</label>
    <input className='form-control' type={"text"}  name="username" onChange={(e)=>{userlogin(e)}}/>
    
    <label className='form-label'>password :</label>
    <input className='form-control' type={"password"} name="password" onChange={(e)=>{userlogin(e)}}/>
    <button className='btn btn-primary mt-3'>submit</button>
    </div>

  )
}
