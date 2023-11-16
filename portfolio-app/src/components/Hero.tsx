import React from 'react';
import './Hero.css';
import MyImage from './images/personimage.png';
import DarkModeIcon from './images/dark.png';
import LightModeIcon from './images/light.png'

const Hero = (props:any) => {

  const {isToggled, onToggle, innerRef} = props


  console.log(isToggled)
    
  return (
    <div className='hero' id='hero' ref={innerRef}>
        <div className='mode'>

          <div className={isToggled ? 'mode-holder-dark' : 'mode-holder-light'}>
            <div className='light-mode'>
              <img className={isToggled ? 'dark-icon' : 'light-icon'} src={LightModeIcon} alt="light mode" />
            </div>

            <label className="switch">
              <input type="checkbox" checked={isToggled} onChange={onToggle}/>
              <span className={isToggled ? 'dark' : 'light'}/>
            </label>

            <div className='dark-mode'>
              <img className={isToggled ? 'dark-icon' : 'light-icon'} src={DarkModeIcon} alt="dark mode" />
            </div>
          </div>
        </div>
        <div className='circle'>
        </div>
        <img className='myimage' src={MyImage} alt='my-image'/>
        <div className='my-intro'>
          <h1 >Kehinde Temitayo</h1>
          <p>Frontend Web Developer</p>
        </div>
    </div>
  )
}

export default Hero