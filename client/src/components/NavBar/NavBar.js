import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


const NavBar = () =>{

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <span className="navbar-brande mb-0 h1 text-white">Google React Books</span>
      <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item h3 ml-4 mt-2">
          <Link to='/'> Search</Link>
        </li>
        <li className="nav-item h3 ml-2 mt-2">
          <Link to='/saved'> Saved</Link>
        </li>
      </ul> 
      </div>
    </nav>
  )

}

export default NavBar