import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo1 from './images/white logo.png'
import Logo2 from './images/white benkenny.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='header'>
        <nav className='navbar'>
            <a href='/' className='logo'>
                <img className='logo1' src={Logo1} alt='logo'/>
                <img className='logo2' src={Logo2} alt='logo'/>
            </a>
            <div className='hamburger'>
                <FaBars/>
            </div>
            <ul className='nav-menu'>
                <li className='nav-item'>
                    <a href='/about'>About</a>
                    <a href='/experience'>Experience</a>
                    <a href='/projects'>Projects</a>
                    <a href='/connect-with-me'>Connect with me </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar