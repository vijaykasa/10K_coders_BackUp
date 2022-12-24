import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <header>
         <a href='#' ><h1>Logo</h1></a>
         <nav>
            <ul>
                <li><Link to="/" className='link'>Home</Link></li>
                <li><Link to="/" className='link'>services</Link></li>
                <li><Link to="/" className='link'>AboutUs</Link></li>
                <li><Link to="/" className='link'>Contacts</Link></li>
                <li><Link to="/" className='link'>Blog</Link></li>
            </ul>
         </nav>
         <div>
            <span><Link to="/Login" className='link'>Login</Link></span><span>|</span><span><Link className='link' to="/">signUp</Link></span>
         </div>
    </header>
  )
}
