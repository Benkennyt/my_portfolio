import './ProjectDetails.css';
import { ProjectData } from './ProjectData';


const ProjectDetails = (props: any) => {
  const {projectId, closeModal, isToggled} = props

  return (
    <div className='project-details'>
      <div className={isToggled ? 'project-details-container-dark-mode' : 'project-details-container'}>
        <div className={isToggled ? 'title-dark-mode' : 'title'}>
          <h2>{ProjectData[projectId].title}</h2>
        </div>
        <div className={isToggled ? 'details-summary-dark-mode' : 'details-summary'}>
            <p>{ProjectData[projectId].details}</p>
        </div>
        <div className={isToggled ? 'details-links-dark-mode' : 'details-links'}>
            <a href={ProjectData[projectId].github} target='_blank' onClick={closeModal}><button>GitHub</button></a>
            <p>/</p>
            <a href={ProjectData[projectId].url} target='_blank' onClick={closeModal}><button>Go To Site</button></a>
        </div>
        <div className={isToggled ? 'project-details-footer-dark-mode' : 'project-details-footer'}>
            <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails