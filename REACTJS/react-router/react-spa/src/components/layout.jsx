import React from 'react'
import {Router,Outlet,Link} from 'react-router-dom'

export default function Layout() {
  return (
    <div>
    <div className='d-flex justify-content-around mt-3'>
    <h2>Layout page</h2>
      <Link to="/adduser"><button className='btn btn-primary '>addUser</button></Link>  
    </div>
      <Outlet/>
    </div>
  )
}
