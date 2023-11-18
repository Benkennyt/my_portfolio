import React from 'react';
import { animateScroll } from 'react-scroll';
import './Contact.css';
import TwitterIcon from './images/x-twitter.svg';
import TwitterIconDarkMode from './images/x-twitter-darkmode.svg';
import LinkedinIcon from './images/linkedin.svg';
import LinkedinIconDarkMode from './images/linkedin-darkmode.svg';
import InstagramIcon from './images/instagram.svg';
import InstagramIconDarkMode from './images/instagram-darkmode.svg';
import GithubIcon from './images/github.svg';
import GithubIconDarkMode from './images/github-darkmode.svg';
import TopIcon from './images/jet-fighter-up-solid.svg';
import TopIconDarkMode from './images/jet-fighter-up-solid-dark-mode.svg';

const Contact = (props: any) => {

    const { innerRef, isToggled} = props

    const options = {
        smooth: true,
        duration:1500,
        delay: 50
    }
  return (
    <div className='contact' id='contact' ref={innerRef}>
        <div className={isToggled ? 'contact-container-dark-mode' : 'contact-container'}>
            <h1>Reach out to me</h1>
            <div className={isToggled ? 'message-dark-mode' : 'message'}>

                <p>Feel free to reach out to me if you have any inquiries or opportunities you'd like to discuss further</p>
            </div>
            <div className='mail-button'>
                <a href="mailto:kehindetemitayo.b@gmail.com">
                    <button className={isToggled ? 'main-button-dark-mode' : 'main-button'} >Drop a Message</button>
                </a>
            </div>
            <p className={isToggled ? 'last-quote-dark-mode' : 'last-quote'}>"Just for today, smile a little more" &#128522;</p>

            <button onClick={() => {animateScroll.scrollToTop(options)}} className='to-the-top'>
                <img className='top-icon-image' src={isToggled ? TopIconDarkMode : TopIcon} alt="to-the-top" />
                <p className='take-me'>Take me to the top!!</p>
            </button>
            <div className='footer'>
                <div className='myfooter'>
                    <p className={isToggled ? 'footer-p-dark-mode' : ''}>Made by Yours truly <span>Benkenny</span>  &#128522;  2023</p>
                    <div className='socials'>
                        <a href="https://x.com/BenKenny_T" target='_blank'>
                            <img src={isToggled ? TwitterIconDarkMode :TwitterIcon} alt="" />
                        </a>

                        <a href="https://www.linkedin.com/in/temitayo-kehinde-347a38185" target='_blank'>
                            <img src={isToggled ? LinkedinIconDarkMode : LinkedinIcon} alt="" />
                        </a>

                        <a href="https://instagram.com/iambenkenny" target='_blank'>
                            <img src={isToggled ? InstagramIconDarkMode : InstagramIcon} alt="" />
                        </a>

                        <a  href="https://github.com/Benkennyt" target='_blank'>
                            <img src={isToggled ? GithubIconDarkMode : GithubIcon} alt="" />
                        </a>
                        <div className='line-container'>
                            <div className={isToggled ? 'line-dark-mode' : 'line'}></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact