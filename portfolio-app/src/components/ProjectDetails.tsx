import React from 'react';
import './ProjectDetails.css';


const ProjectDetails = (props: any) => {
  const {projectId, closeModal, isToggled} = props

  const ProjectInfo = () => {
    if (projectId === '1') {
      return {
        title: 'My Portfolios',
        details: 'Well, you are currently on it',
        github: 'www.github.com',
        url:'www.github.com',
      }
    }else if (projectId === '2'){
      return {
        title: 'Youtube Clone',
          details: "I created a Youtube clone using ReactJS, seemlessly blending user-friendly design with efficient functionality. I implemented features such as video or channel search bar, video playback ,and a dynamic video list. The app's responsive layout ensures seamless viewing experience across devices. ",
          github: '',
          url:'',
      }
    } else if (projectId === '3') {
      return {
        title: '3D Shirt Customizer',
        details: ' I developd a 3D shirt customizer using ReactJS, Three.js for the 3D rendering and OpenAI for the AI image generator. Users can interactively customize shirt designs in a realistic virtual environment. The AI component on request by the user creates images based on the prompt given. The customizer supports a wide range of options, including color section and image imports.',
        github: '',
        url:'',
      }
    } else if (projectId === '4') {
      return {
        title: 'Multi-Step-Form',
        details: 'I created a user-friendly multistep form. The form is divided into several steps, guiding users through seemless journey',
        github: 'www.github.com',
        url:'www.github.com',
      }
    } else if (projectId === '5') {
      return {
        title: 'Exercise Search App',
        details: " I developed an exercise search app that facilitates targeted workouts by selecting specific muscles. The app incorporates search bar for finding exercises by name and dynamycally updates the display based on the choseb muscles. Additionally, it seamlessly integrates with Youtube, providing instructional videos for each exercise to enhance the user's understanding and guidance.",
        github: 'www.github.com',
        url:'www.github.com',
      }
    } else if (projectId === '6') {
      return {
        title: 'Newsletter Subscription Page',
          details: ' Just a functional subscription page',
          github: 'www.github.com',
          url:'www.github.com',
      }
    }
}
  

  return (
    <div className='project-details'>
        <div className={isToggled ? 'project-details-container-dark-mode' : 'project-details-container'}>
          <div className={isToggled ? 'title-dark-mode' : 'title'}>
            <h1>{ProjectInfo()?.title}</h1>
          </div>
          <div className={isToggled ? 'details-summary-dark-mode' : 'details-summary'}>
            <p>{ProjectInfo()?.details}</p>
          </div>
          <div className={isToggled ? 'details-links-dark-mode' : 'details-links'}>
            <a href=""><button>GitHub</button></a>
            <p>/</p>
            <a href=""><button>Go To Site</button></a>
          </div>
          <div className={isToggled ? 'project-details-footer-dark-mode' : 'project-details-footer'}>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
    
    </div>
  )
}

export default ProjectDetails