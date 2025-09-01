import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = ({item}) => {
  const {projectTitle, description, duration, imageUrl, projectUrl} = item

  return (
    <div className="project-card">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="card-header">
        <h2 className="project-title">{projectTitle}</h2>
        <div className="duration">
          <AiFillCalendar className="icon" />
          <p>{duration}</p>
        </div>
      </div>

      <p className="description">{description}</p>
      <a href={projectUrl} target="__blank" className="visit-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
