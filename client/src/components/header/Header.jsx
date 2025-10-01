import React from 'react'

function Header({onClick}) {
  return (
    <header className='headerContainer'>
      <div className="imgContainer">
        Logo
      </div>
      <button className='login-button' onClick={onClick}>Login</button>
    </header>
  )
}

export default Header