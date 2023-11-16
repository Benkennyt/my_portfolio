import React, { useState, }  from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link, animateScroll } from 'react-scroll';
import Logo1 from './images/white logo.png';
import Logo2 from './images/white benkenny.png';
import './Navbar.css';


const Navbar = (activeElement: any) => {
    
    
  return (
    <div className='header' >
        <nav  className={activeElement.activeElement === 'hero' ? 'navbar' : 'navbar-black'} >
            
            <Link  to="hero" spy={false} smooth={true} offset={0} duration={1500} delay={500} className='logo'>
                <img className='logo1' src={Logo1} alt='logo'/>
                <img className='logo2' src={ Logo2} alt='logo'/>
            </Link>
            <div className='hamburger'>
                <FaBars/>
            </div>
            <ul className='nav-menu'>
                <li className={'nav-item'}>

                    <Link className={activeElement.activeElement === 'about' ? 'now-active' : 'not-active'} to="about" spy={false} smooth={true} offset={0} duration={1500} delay={500}>About</Link>

                    <Link className={activeElement.activeElement === 'experience' ? 'now-active' : 'not-active'} to="experience" spy={false} smooth={true} offset={0} duration={1500} delay={500}>Experience</Link>

                    <Link className={activeElement.activeElement === 'projects' ? 'now-active' : 'not-active'} to="projects" spy={true} smooth={true} offset={0} duration={1500} delay={500}>Projects</Link>

                    <Link className={activeElement.activeElement === 'contact' ? 'now-active' : 'not-active'} to="contact" spy={true} smooth={true} offset={10} duration={1500} delay={500}>Connect with me </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar