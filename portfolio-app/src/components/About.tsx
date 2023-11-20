import React, {useState, useEffect} from 'react';
import './About.css';
import MyImage from './images/my image.jpeg';
import MyImageDarkMode from './images/my image-dark-mode.jpeg';

const About = (props:any) => {
  const {innerRef, activeElement, isToggled} = props

  const [activeTrue, setActiveTrue] = useState(false)

  

  useEffect(() => {
    if (activeElement === 'about') {
      setActiveTrue(true)
    };
  }, [activeElement])
  
  const HandleDarkModeAbout = () => {
    if (isToggled && activeTrue) {
      return  'slide-in-about-dark-mode'
    } else if (!isToggled && activeTrue) {
       return  'slide-in-about'
    } else if (!activeTrue) {
        return 'hide'
    }
}
  
  return (
    <div className={isToggled ? 'about-dark-mode' :'about'} id='about' ref={innerRef}>
      <div>
        <div className='about-container' >
          <div className={HandleDarkModeAbout()}>
            <h1>About Me</h1>
          </div>
          <div className={isToggled ? 'about-details-dark-mode' :'about-details'}>
            <img src={isToggled ? MyImageDarkMode : MyImage} alt="" />
            <p className={isToggled ? 'details-dark-mode' : 'details'}>Hi! I'm Kehinde Temitayo, also known as Benkenny. I'm a passionate self-taught web developer in love with frontend development and the thrilling challenges it brings. I love bringing ideas to life through engaging, user-friendly interfaces.
            Beyond coding, I find joy in playing piano, making music and playing games.
            </p>
          </div>
        </div>
        
        <div className='quote-container'>
          <p className={isToggled ? 'quote-dark-mode' : 'quote'}>"Passion is energy. Feel the power that comes from focusing on what excites you" Oprah Winfrey</p>
        </div>
      </div>
    </div>
  )
}

export default About