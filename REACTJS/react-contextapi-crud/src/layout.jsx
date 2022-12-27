import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { MyContextProvider } from './components/contextapi'


export default function Layout() {
  return (
    <div>
      <Link to="/adduser" className='btn btn-primary'>adduser</Link> 
    <MyContextProvider>
    <Outlet/>
    </MyContextProvider>
    
      
    </div>
  )
}
