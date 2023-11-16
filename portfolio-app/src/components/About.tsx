import React, {useState, useEffect} from 'react';
import './About.css';
import MyImage from './images/my image.jpeg'

const About = (props:any) => {
  const {innerRef, activeElement} = props

  const [activeTrue, setActiveTrue] = useState(false)

  

  useEffect(() => {
    if (activeElement === 'about') {
      setActiveTrue(true)
    };
  }, [activeElement])
  
  
  return (
    <div className='about' id='about' ref={innerRef}>
        <div className='about-container' >
          <div className={activeTrue ? 'slide-in-about' : 'hide'}>
            <h1>ABOUT ME</h1>
          </div>
          <div className='about-details'>
            <img src={MyImage} alt="" />
            <p className='details'>Hi! I'm Kehinde Temitayo, known as Benkenny. I'm a passionate self-taught web developer in love with frontend development and the thrilling challenges it brings. I love bringing ideas to life through engaging, user-friendly interfaces.
            Beyond coding, I find joy in playing piano, making music and playing games.
            </p>
          </div>
        </div>
        <p className='quote'>"Passion is energy. Feel the power that comes from focusing on what excites you" Oprah Winfrey</p>
    </div>
  )
}

export default About