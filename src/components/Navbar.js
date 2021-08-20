import React, {useState} from 'react'

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
          TRVL
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
