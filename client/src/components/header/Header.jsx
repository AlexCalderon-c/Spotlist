import React from 'react'
import '../../assets/static/css/header.css'

function Header({onClick}) {
  return (
    <header className='header-container'>
      <div className="img-container">
        Logo
      </div>
      <button className='login-button' onClick={onClick}>Login</button>
    </header>
  )
}

export default Header