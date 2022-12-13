import "./navbar.css";

import React, { Component } from "react";

export class Navabar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav class="content">
        <div className="leftside">
        <div className="logocontainer">
        <img
            className="logo"
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="logo"
            
          />
          <a href="#"><i>Explore</i></a></div>
        <div className="searchbar">
        <input
              className="input"
              type="text"
              placeholder="search for product,barnds and more"
            />
           <i class="fa-solid fa-magnifying-glass"></i></div>
           
        </div>
        
          <ul>
            <li>vijay </li>
            <li>Become a seller</li>
            <li>More</li>
            <li>Cart</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navabar;
