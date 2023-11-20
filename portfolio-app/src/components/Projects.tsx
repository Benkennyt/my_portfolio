import React, {useState, useEffect} from 'react';
import './Projects.css';
import MyPortfolio from './images/my portfolio.png';
import YoutubeClone from './images/youtube clone.png';
import ExerciseApp from './images/workout app.png';
import MultiStepFrom from './images/multi-step form.png';
import Newsletter from './images/newsletter.png';
import ThreeD from './images/3d shirt customizer.png';

const Projects = (props: any) => {
  const {innerRef, activeElement, setProjectId, setModalOpen,isToggled} = props

  const [activeTrue, setActiveTrue,] = useState(false)



  useEffect(() => {
  if (activeElement === 'projects') {
      setActiveTrue(true)
  };
  }, [activeElement])

  const CheckProjectId = (id: string) => {
    if (id === '1') {
      setProjectId('1')
      setModalOpen(true)
      document.body.classList.add('modalIsOpen')
    }else if (id === '2') {
      setProjectId('2')
      setModalOpen(true)
      document.body.classList.add('modalIsOpen')
    }else if (id === '3') {
      setProjectId('3')
      setModalOpen(true)
      document.body.classList.add('modalIsOpen')
    }else if (id === '4') {
      setProjectId('4')
      setModalOpen(true)
      document.body.classList.add('modalIsOpen')
    }else if (id === '5') {
      setProjectId('5')
      setModalOpen(true)
      document.body.classList.add('modalIsOpen')
    }else if (id === '6') {
      setProjectId('6')
      setModalOpen(true)
      document.body.classList.add('modalIsOpen')
    }
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
          <h2 className={isToggled ? 'dark-mode-h2-project': 'h2-project'}>My Projects</h2>
          <div className='projects-container-2'>
            {/* ssssssssssssss */}
            
            <div className={isToggled ? 'project-dark-mode': ' project'}>
              <img className={isToggled ? 'project-image-dark-mode'  : 'project-image'} src={MyPortfolio} alt="portfolio" />
              <button onClick={()=>CheckProjectId('1')} className={isToggled ? 'project-overlay-dark-mode' : 'project-overlay'}>
                <h2>My Portfolio</h2>
                <p>...read more</p>
              </button>
            </div>

            <div className={isToggled ? 'project-dark-mode': ' project'}>
            <img className={isToggled ? 'project-image-dark-mode'  : 'project-image'} src={YoutubeClone} alt="youtbube-clone" />
              <button onClick={()=>CheckProjectId('2')} className={isToggled ? 'project-overlay-dark-mode' : 'project-overlay'}>
                <h2>Youtube Clone</h2>
                <p>...read more</p>
              </button>
            </div>

            <div className={isToggled ? 'project-dark-mode': ' project'}>
              <img className={isToggled ? 'project-image-dark-mode'  : 'project-image'} src={ThreeD} alt="3D image" />
              <button onClick={()=>CheckProjectId('3')} className={isToggled ? 'project-overlay-dark-mode' : 'project-overlay'}>
                <h2>3D Shirt Customizer</h2>
                <p>...read more</p>
              </button>
            </div>

            <div className={isToggled ? 'project-dark-mode': ' project'}>
              <img className={isToggled ? 'project-image-dark-mode'  : 'project-image'} src={MultiStepFrom} alt="multi-step-form" />
              <button onClick={()=>CheckProjectId('4')} className={isToggled ? 'project-overlay-dark-mode' : 'project-overlay'}>
                <h2>Multi-Step Form</h2>
                <p>...read more</p>
              </button>
            </div>

            <div className={isToggled ? 'project-dark-mode': ' project'}>
              <img className={isToggled ? 'project-image-dark-mode'  : 'project-image'} src={ExerciseApp} alt="exercise-search-app" />
              <button onClick={()=>CheckProjectId('5')} className={isToggled ? 'project-overlay-dark-mode' : 'project-overlay'}>
                <h2>Exercise Search App</h2>
                <p>...read more</p>
              </button>
            </div>

            <div className={isToggled ? 'project-dark-mode': ' project'}>
              <img className={isToggled ? 'project-image-dark-mode'  : 'project-image'} src={Newsletter} alt="newsletter" />
              <button onClick={()=>CheckProjectId('6')} className={isToggled ? 'project-overlay-dark-mode' : 'project-overlay'}>
                <h2>Newsletter Subscription Page</h2>
                <p>...read more</p>
              </button>
            </div>
            
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