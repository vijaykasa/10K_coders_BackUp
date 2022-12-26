import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='container w-50 p-2 mt-2 mb-2 d-flex bg-dark text-light justify-content-between'>
      <h3>students data</h3>
      <Link to='/create' className='btn btn-primary'>Registration</Link>
    </div>
  )
}
