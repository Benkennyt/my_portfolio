import React, {useState, useEffect} from 'react';
import './Projects.css';

const Projects = (props: any) => {
  const {innerRef, activeElement} = props

  const [activeTrue, setActiveTrue] = useState(false)



  useEffect(() => {
  if (activeElement === 'projects') {
      setActiveTrue(true)
  };
  }, [activeElement])

  const readmore = {
    YtClone:{
      name: 'Youtube Clone',
      details: "I created a Youtube clone using ReactJS, seemlessly blending user-friendly design with efficient functionality. I implemented features such as video or channel search bar, video playback ,and a dynamic video list. The app's responsive layout ensures seamless viewing experience across devices. ",
      github: '',
      url:''
    },
    
    ThreeDCustomizer:{
      name: '3D Shirt Customizer',
      details: ' I developd a 3D shirt customizer using ReactJS, Three.js for the 3D rendering and OpenAI for the AI image generator. Users can interactively customize shirt designs in a realistic virtual environment. The AI component on request by the user creates images based on the prompt given. The customizer supports a wide range of options, including color section and image imports.',
      github: '',
      url:''
    },

    MultiStepForm:{
      name: 'Multi-Step-Form',
      details: 'I created a user-friendly multistep form. The form is divided into several steps, guiding users through seemless journey',
      github: '',
      url:''
    },

    ExerciseSearch:{
      name: 'Exercise Search App',
      details: " I developed an exercise search app that facilitates targeted workouts by selecting specific muscles. The app incorporates search bar for finding exercises by name and dynamycally updates the display based on the choseb muscles. Additionally, it seamlessly integrates with Youtube, providing instructional videos for each exercise to enhance the user's understanding and guidance.",
      github: '',
      url:''
    },

    Newsletter:{
      name: 'Newsletter Subscription Page',
      details: ' Just a functional subscription page',
      github: '',
      url:''
    },

    MyPortfolios:{
      name: 'My Portfolios',
      details: 'Well, you are currently on it',
      github: '',
      url:''
    },
  }

  return (
    <div className='projects' id='projects'  ref={innerRef}>
      <div className='projects-container'>

        <div className={activeTrue ? 'slide-in-projects' : 'hide'}>
          <h1>Projects</h1>
        </div>
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
                <h2>Newsletter Subscription Page</h2>
                <button>...read more</button>
              </div>
            </div>
            
          </div>

        </div>
      </div>

      <p className='quote'>"Believe you can and you're halfway there." Theodore Roosevelt</p>
      <script> </script>

    </div>
  )
}

export default Projects