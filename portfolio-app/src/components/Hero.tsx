import React from 'react';
import './Hero.css';
import MyImage from './images/personimage.png';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='circle'>
        </div>
        <img src={MyImage} alt='my-image'/>
        <div className='my-intro'>
          <h1>Kehinde Temitayo</h1>
          <p>Frontend Web Developer</p>
        </div>
    </div>
  )
}

export default Hero