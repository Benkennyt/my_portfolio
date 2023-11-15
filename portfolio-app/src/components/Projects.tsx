import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className='projects'>
      <div className='projects-container'>
        <h1>Projects</h1>
        <div className='projects-details'>
          <h2>My Projects</h2>
          <div className='projects-container-2'>
            
            <div className='yt project'>
              <div className='project-overlay'>
                <h2>Youtube Clone</h2>
                <button>...read more</button>
              </div>
            </div>

            <div className='shirt project'>
              <div className='project-overlay'>
                <h2>3D Shirt Customizer</h2>
                <button>...read more</button>
              </div>
            </div>

            <div className='multi-step-form project'>
              <div className='project-overlay'>
                <h2>Multi-Step Form</h2>
                <button>...read more</button>
              </div>
            </div>

            <div className='exercise project'>
              <div className='project-overlay'>
                <h2>Exercise Search App</h2>
                <button>...read more</button>
              </div>
            </div>

            <div className='newsletter project'>
              <div className='project-overlay'>
                <h2>Newsletter Subscription page</h2>
                <button>...read more</button>
              </div>
            </div>
            
          </div>

        </div>
      </div>

      <p className='quote'>"Believe you can and you're halfway there." Theodore Roosevelt</p>

    </div>
  )
}

export default Projects