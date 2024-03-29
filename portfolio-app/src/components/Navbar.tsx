import React, { useState, }  from 'react';
import { Link} from 'react-scroll';
import Logo1 from './images/white logo.png';
import Logo2 from './images/white benkenny.png';
import Logo3 from './images/white logo dark mode.png';
import Logo4 from './images/white benkenny dark mode.png';
import MoonIcon from './images/moon-regular.svg';
import LightIcon from './images/sun-regular.svg';
import MoonIconDarkMode from './images/moon-regular-dark-mode.svg';
import LightIconDarkMode from './images/sun-regular-dark-mode.svg';
import Hamburger from './images/hamburger.svg';
import HamburgerDarkMode from './images/hamburger-dark-mode.svg';
import useWindowResize from "../Hooks/useWindowResize";
import './Navbar.css';


const Navbar = (props: any) => {
    const [navbarToggled, setNavbarToggled] = useState(false)
    const {width, height} = useWindowResize();


    const HandleNavbarToggle = () => {
        if (!navbarToggled) {
            return setNavbarToggled(true)
        } else if (navbarToggled) {
            return setNavbarToggled(false)
        }
    }

    const {activeElement, isToggled, onToggle,} = props

    const HandleDarkMode = () => {
        if (isToggled) {
          return  'navbar-dark-mode'
        } else if (!isToggled && activeElement === 'hero') {
           return  'navbar'
        } else {
            return 'navbar-black'
        }
    }

    const HandleNavItem = () => {


        if (width! <= 770 ) {
            if (isToggled && navbarToggled) {
                return 'nav-item-dark-mode'
             }else if (!isToggled && navbarToggled) {
                return 'nav-item'
             } else  {
                 return 'nav-item-closed'
             } 
        } else {
            if (isToggled) {
                return 'nav-item-dark-mode'
             }else {
                return 'nav-item'
            }
        }
    }

    
  return (
    <div className='header' >
        <nav  className={HandleDarkMode()}>
            <Link onClick={HandleNavbarToggle}  to="hero" spy={false} smooth={true} offset={0} duration={700} delay={0} className='logo'>
                <img className='logo1' src={ isToggled ? Logo3 :Logo1} alt='logo'/>
                <img className='logo2' src={isToggled ? Logo4 : Logo2} alt='logo'/>
            </Link>

            <div className='nav-mode'>

                <ul className={navbarToggled ? 'nav-menu' : 'nav-menu-close'}>
                    <li className={HandleNavItem()}>

                        <Link onClick={HandleNavbarToggle} className={'not-active'} to="about" spy={true} smooth={true} offset={isToggled ? 0 : -90} duration={700} delay={0}>About</Link>

                        <Link onClick={HandleNavbarToggle} className={'not-active'} to="experience" spy={true} smooth={true} offset={isToggled ? 0 : -90} duration={700} delay={0}>Experience</Link>

                        <Link onClick={HandleNavbarToggle} className={'not-active'} to="projects" spy={true} smooth={true} offset={isToggled ? 0 : -90} duration={700} delay={0}>Projects</Link>

                        <Link onClick={HandleNavbarToggle} className={'not-active'} to="contact" spy={true} smooth={true} offset={isToggled ? 10 : -80} duration={700} delay={0}>Connect with me </Link>
                    </li>
                </ul>

                <div className='mode '>
                    <div className='switch'>
                        <input type="checkbox" checked={isToggled} id='darkmode-toggle' onChange={onToggle}/>
                        <label htmlFor="darkmode-toggle">
                            <img className='sun-icon' src={isToggled ? LightIconDarkMode : LightIcon } alt="sun-icon" />
                            <img className='moon-icon' src={isToggled ? MoonIconDarkMode : MoonIcon } alt="moon-icon" />
                        </label>
                    </div>    
                </div>
            </div>
            <div className='hamburger'>
                <button onClick={() => HandleNavbarToggle()}>
                    <img src={isToggled ? HamburgerDarkMode : Hamburger} alt="hamburger" />
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar