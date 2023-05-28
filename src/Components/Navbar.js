import React from 'react'
import logo from '../Images/Tutedude_Logo.png'
import userIcon from '../Images/UserIcon.png'
import signOnDropdown from '../Images/signOn.png'

const Navbar = () => {
  return (
    <header className="header">
        <div className='logo'>
            <img src={logo} alt="logo"/>
        </div>
        <nav className="navbar">
            <div className='assignment'>My Assignments</div>
            <div className='mentor'>Chat With Mentor</div>
            <div className='signOn'>
                <img src={userIcon} alt="user" width="20px" height="20px"/>
                <span>ProfileName</span>
                <button className='signOnDropdown'><img src={signOnDropdown} alt="signOnDropdown" width="12px" height="7px"/></button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
