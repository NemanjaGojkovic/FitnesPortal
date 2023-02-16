import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
    return (
    <div className="inner-width">  
        <nav className="navigation-menu">
          <h1 className='title'>OutworkEm</h1>
          <Link to="/"> Početna</Link>
          <Link to="/service"> Usluge</Link>
          <Link to="/about"> O nama</Link>
          <Link to="/contacts"> Kontakt</Link>
          <Link to="/register" className='sing'> Registracija</Link>
          <Link to="/login" className='log'> Login</Link>
        </nav>
      </div>

    );
}

export default Navbar