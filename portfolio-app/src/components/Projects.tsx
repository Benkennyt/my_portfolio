import React, {useState, useEffect} from 'react';
import './Projects.css';

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
          <h2 className={isToggled ? 'dark-mode-h2': ''}>My Projects</h2>
          <div className='projects-container-2'>
            
          <div className={isToggled ? 'portfolio-dark-mode project': 'portfolio project'}>
              <button onClick={()=>CheckProjectId('1')} className='project-overlay'>
                <h2>My Portfolio</h2>
                <p>...read more</p>
              </button>
            </div>

            <div className={isToggled ? 'yt-dark-mode project': 'yt project'}>
              <button onClick={()=>CheckProjectId('2')} className='project-overlay'>
                <h2>Youtube Clone</h2>
                <p>...read more</p>
              </button>
            </div>

            <div className={isToggled ? 'shirt-dark-mode project': 'shirt project'}>
              <button onClick={()=>CheckProjectId('3')} className='project-overlay'>
                <h2>3D Shirt Customizer</h2>
                <p>...read more</p>
              </button>
            </div>

            <div className={isToggled ? 'multi-step-form-dark-mode project': 'multi-step-form project'}>
              <button onClick={()=>CheckProjectId('4')} className='project-overlay'>
                <h2>Multi-Step Form</h2>
                <p>...read more</p>
              </button>
            </div>

            <div className={isToggled ? 'exercise-dark-mode project': 'exercise project'}>
              <button onClick={()=>CheckProjectId('5')} className='project-overlay'>
                <h2>Exercise Search App</h2>
                <p>...read more</p>
              </button>
            </div>

            <div className={isToggled ? 'newsletter-dark-mode project': 'newsletter project'}>
              <button onClick={()=>CheckProjectId('6')} className='project-overlay'>
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