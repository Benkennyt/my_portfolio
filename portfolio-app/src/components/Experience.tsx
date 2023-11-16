import React, {useState, useEffect} from 'react';
import './Experience.css'

const Experience = (props: any) => {
    const {innerRef, activeElement} = props

   const [activeTrue, setActiveTrue] = useState(false)
    console.log(activeTrue)


  useEffect(() => {
  if (activeElement === 'experience') {
      setActiveTrue(true)
  };
  }, [activeElement])
  
  return (
    <div className='experience' id='experience' ref={innerRef}>
        <div className='experience-container'>
            <div className={activeTrue ? 'slide-in-exp' : 'hide'}>
                <h1>Experience</h1>
            </div>
          <div className='experience-details'>
            <div className='experience-details-1'>
                <h2 >My Experience</h2>
                <p>I currently have a year of experience in web development, and a perpetual enthusiasm to expand my knowledge in thr ever-evolving industry</p>
            </div>

            <h2>My Skills</h2>

            <div className='experience-details-2'>
                <div className='skills '>
                    <div className='skills-1 html'>
                        <div className='html-2'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className='skills'>
                    <div className='skills-1 css'>
                        <div className='css-2'>  
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>

                <div className='skills'>
                    <div className='skills-1 js'>
                        <div className='js-2'>
                            <h3>JS</h3>   
                        </div>
                    </div>
                </div>

                <div className='skills'>
                    <div className='skills-1 ts'>
                        <div className='ts-2'>
                            <h3>TS</h3>  
                        </div>
                    </div>
                </div>

                <div className='skills'>
                    <div className='skills-1 react'>
                        <div className='react-2'>
                            <h3>React JS</h3>                          
                        </div>
                    </div>
                </div>

                <div className='skills'>
                    <div className='skills-1 ps'>
                        <div className='ps-2'>
                            <h3>PS</h3>                           
                        </div>
                    </div>
                </div>

                <div className='skills'>
                    <div className='skills-1 git'>
                        <div className='git-2'>
                            <h3>GitHub</h3>    
                        </div>
                    </div>
                </div> 
            </div>
          </div>
        </div>
        <p className='quote'>"All our dreams can come true, if we have the courage to pursue them."  Walt Disney</p>
    </div>
  )
}

export default Experience