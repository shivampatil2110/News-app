import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {
   Link
} from "react-router-dom";

const Navbar = ()=>{

    return (
      <div>
        <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Newsmonkey</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li> */}
        <li className='nav-item'><Link className='nav-link' to="/business">Business</Link></li> 
        <li className='nav-item'><Link className='nav-link' to="/entertainment">Entertainment</Link></li> 
        <li className='nav-item'><Link className='nav-link' to="/sports">Sports</Link></li> 
        <li className='nav-item'><Link className='nav-link' to="/health">Health</Link></li> 
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  
}

export default Navbar
