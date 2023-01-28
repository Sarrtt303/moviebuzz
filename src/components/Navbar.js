import React from 'react'

import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
        <div className="container">
            <nav className='navbar__nav'>
                <h3 className="nav__items">
                  <Link to='/'>
                      <i className='fas fa-video'></i>Movie Buzz
                  </Link>
                  <ul>
                    <li className="links__link">
                        <Link to='/'>Home</Link>
                    </li> 
                    <li className="links__link">
                        <Link to='/Booking'>Booking</Link>
                    </li> 
                  </ul>
                </h3>
            </nav>
        </div>
    </div>
  );
};

export default Navbar;