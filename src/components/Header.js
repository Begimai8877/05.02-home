import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    
    <div className='header__wrapper'>
        <NavLink to ='/' className ='header__logo'>
            Zero
        </NavLink>
        <nav className='header__nav'>
            <NavLink to = '/' className = 'header__link'>
                Home
            </NavLink>
            <NavLink to= '/about'className = 'header__link'>
                Adout
            </NavLink>
            <NavLink to = '/contact' className = 'header__link'>
                Contact
            </NavLink>
        </nav>
    </div>
    
  )
}

export default Header