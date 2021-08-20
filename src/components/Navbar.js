iimport React, {useState} from 'react'

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
          TRVL <i className=" fab fa-typo3"></i>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
