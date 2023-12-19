import React, {useState, useEffect} from 'react';
import './Experience.css';
import MyResume from './documents/Temitayo Frontend resume V2.pdf'

const Experience = (props: any) => {
    const {innerRef, activeElement, isToggled} = props

   const [activeTrue, setActiveTrue] = useState(false)


  useEffect(() => {
  if (activeElement === 'experience') {
      setActiveTrue(true)
  };
  }, [activeElement])

  const HandleDarkModeExperience = () => {
    if (isToggled && activeTrue) {
      return  'slide-in-exp-dark-mode'
    } else if (!isToggled && activeTrue) {
       return  'slide-in-exp'
    } else if (!activeTrue) {
        return 'hide'
    }
  }
  return (
    <div className={isToggled ? 'experience-dark-mode' :'experience'} id='experience' ref={innerRef}>
    

        <div className={HandleDarkModeExperience()}>
            <h1>Experience</h1>
        </div>
        <div className='experience-container'>
            <div className={isToggled ? 'experience-details-dark-mode' :'experience-details'}>

                <div className={isToggled ? 'experience-details-1-dark-mode' :'experience-details-1'}>
                    <h2>My Experience</h2>
                    <p>I currently have a year of experience in web development, and a perpetual enthusiasm to expand my knowledge in the ever-evolving industry.</p>
                    <h2>My Skills</h2>
                </div>


                <div className={isToggled ? 'experience-details-2-dark-mode' :'experience-details-2'}>

                    <div className={isToggled ? 'skills-dark-mode' :'skills'}>
                        <div className='skills-1 html'>
                            <div className={isToggled ? 'html-2-dark-mode' : 'html-2'}>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>

                    <div className={isToggled ? 'skills-dark-mode' :'skills'}>
                        <div className='skills-1 css'>
                            <div className={isToggled ? 'css-2-dark-mode' : 'css-2'}>  
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className={isToggled ? 'skills-dark-mode' :'skills'}>
                        <div className='skills-1 js'>
                            <div className={isToggled ? 'js-2-dark-mode' : 'js-2'}>
                                <h3>JS</h3>   
                            </div>
                        </div>
                    </div>

                    <div className={isToggled ? 'skills-dark-mode' :'skills'}>
                        <div className='skills-1 ts'>
                            <div className={isToggled ? 'ts-2-dark-mode' : 'ts-2'}>
                                <h3>TS</h3>  
                            </div>
                        </div>
                    </div>

                    <div className={isToggled ? 'skills-dark-mode' :'skills'}>
                        <div className='skills-1 react'>
                            <div className={isToggled ? 'react-2-dark-mode' : 'react-2'}>
                                <h3>React JS</h3>                          
                            </div>
                        </div>
                    </div>

                    <div className={isToggled ? 'skills-dark-mode' :'skills'}>
                        <div className='skills-1 ps'>
                            <div className={isToggled ? 'ps-2-dark-mode' : 'ps-2'}>
                                <h3>PS</h3>                           
                            </div>
                        </div>
                    </div>

                    <div className={isToggled ? 'skills-dark-mode' :'skills'}>
                        <div className='skills-1 git'>
                            <div className={isToggled ? 'git-2-dark-mode' : 'git-2'}>
                                <h3>GitHub</h3>    
                            </div>
                        </div>
                    </div> 
                </div>

                <div className={isToggled ? 'resume-dark-mode' : 'resume'}>
                   <a href={MyResume} download={'resume2023'}>
                    <button>GET MY RÉSUMÉ</button>
                   </a>
                </div>
            </div>
        <div className='quote-container'>
            <p className={isToggled ? 'quote-dark-mode' : 'quote'}>"All our dreams can come true, if we have the courage to pursue them."  Walt Disney</p>
        </div>
        </div>
    </div>
    
  )
}

export default Experience;