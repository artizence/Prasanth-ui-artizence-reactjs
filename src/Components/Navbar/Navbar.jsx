import React from 'react';

import { Link } from 'react-router-dom'
import './navbar.css'
import Logo from './images/Logo.svg'

const Navbar = () => {


  return (
    <div class="navbar">
      <div className='nav-logo'>

        
          <img src={Logo} alt='img' style={{width:"30px"}} />
     
        <h3 className='logo'>Artizence</h3>

      </div>

      <div class="navbar-menu">
        <Link class="navbar-item1" to="/">Pricing</Link>
        <Link class="navbar-item2" to="/">Signin</Link>
        <Link class="navbar-item3" to="/"><span>Start for free</span></Link>
      </div>
    </div>
  )
}

export default Navbar


