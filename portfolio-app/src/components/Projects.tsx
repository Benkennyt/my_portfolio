import React, {useState, useEffect} from 'react';
import './Projects.css';
import { ProjectData } from './ProjectData';

const Projects = (props: any) => {
  const {innerRef, activeElement, setProjectId, setModalOpen,isToggled} = props

  const [activeTrue, setActiveTrue,] = useState(false)



  useEffect(() => {
  if (activeElement === 'projects') {
      setActiveTrue(true)
  };
  }, [activeElement])

  const CheckProjectId = (id: number) => {
    setProjectId(id)
    setModalOpen(true)
    document.body.classList.add('modalIsOpen')
  }

  const HandleDarkModeProjects = () => {
    if (isToggled && activeTrue) {
      return  'slide-in-projects-dark-mode'
    } else if (!isToggled && activeTrue) {
       return  'slide-in-projects'
    } else if (!activeTrue) {
        return 'hide'
    }
  }

  return (
    <div className={isToggled ? 'projects-dark-mode' :'projects'} id='projects'  ref={innerRef}>
      <div className='projects-container'>

        <div className={HandleDarkModeProjects()}>
          <h1>Projects</h1>
        </div>
        <div className='projects-details'>
          <h2 className={isToggled ? 'dark-mode-h2-project': 'h2-project'}>Selected Projects</h2>
          
          <div className='projects-container-2'>
            { ProjectData.map((data, index) => 
            <div key={index} className={isToggled ? 'project-dark-mode': ' project'}>
              <img className={isToggled ? 'project-image-dark-mode'  : 'project-image'} src={data.image} alt="portfolio" />
              <button onClick={()=>CheckProjectId(index)} className={isToggled ? 'project-overlay-dark-mode' : 'project-overlay'}>
                <h2>{data.title}</h2>
                <p>...read more</p>
              </button>
              </div>)}
            </div>
        </div>
        <div className='quote-container'>

          <p className={isToggled ? 'quote-dark-mode' : 'quote'}>"Believe you can and you're halfway there." Theodore Roosevelt</p>
        </div>
      </div>

    </div>
  )
}

export default Projects