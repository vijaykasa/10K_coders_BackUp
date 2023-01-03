import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='text-light'>
      <nav className="navbar navbar-expand-lg  bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to='/login' className='nav-link'>login</Link>
        
        
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}
