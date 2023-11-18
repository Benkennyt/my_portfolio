import React from 'react';
import './Hero.css';
import MyImage from './images/personimage.png';
import MyImageDarkMode from './images/personimage-dark-mode.png';


const Hero = (props:any) => {

  const {isToggled, innerRef} = props

  console.log(isToggled)
    
  return (
    <div className={isToggled ? 'hero-dark-mode' :'hero'} id='hero' ref={innerRef}>
        <div className={isToggled ? 'circle-dark-mode' :'circle'}>
        </div>
        <img className='myimage' src={isToggled ? MyImageDarkMode : MyImage} alt='my-image'/>
        <div className={isToggled ? 'my-intro-dark-mode' : 'my-intro'}>
          <div className='name'>
            <h1 >Kehinde Temitayo</h1>
            <p>Frontend Web Developer</p>
          </div>
        </div>
    </div>
  )
}

export default Hero