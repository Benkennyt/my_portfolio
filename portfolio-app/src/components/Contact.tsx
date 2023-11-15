import React from 'react';
import './Contact.css';
import TwitterIcon from './images/x-twitter.svg';
import LinkedinIcon from './images/linkedin.svg';
import InstagramIcon from './images/instagram.svg';
import GithubIcon from './images/github-square.svg';

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-container'>
            <h1>Reach out to me</h1>
            <p>Feel free to reach out to me if you have any inquiries or opportunities you'd like to discuss further</p>
            <div className='mail-button'>
                <a href="mailto:kehindetemitayo.b@gmail.com">
                    <button className='main-button' >Drop a Message</button>
                </a>
            </div>
            <p className='last-quote'>"Just for today, smile a little more" &#128522;</p>
            <div className='footer'>
                <div className='myfooter'>
                    <p>Made by Yours truly <span>Benkenny</span>  &#128522;  2023</p>
                    <div className='socials'>
                        <a href="https://x.com/BenKenny_T" target='_blank'>
                            <img src={TwitterIcon} alt="" />
                        </a>

                        <a href="https://www.linkedin.com/in/temitayo-kehinde-347a38185" target='_blank'>
                            <img src={LinkedinIcon} alt="" />
                        </a>

                        <a href="https://instagram.com/iambenkenny" target='_blank'>
                            <img src={InstagramIcon} alt="" />
                        </a>

                        <a href="https://github.com/Benkennyt" target='_blank'>
                            <img src={GithubIcon} alt="" />
                        </a>
                        <div className='line-container'>
                            <div className='line'></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact