import { AiFillCalendar } from "react-icons/ai"
import "./index.css"

const ProjectTimelineCard = ({ item }) => {
  const { projectTitle, description, duration, imageUrl, projectUrl } = item

  return (
    <div className="project-card">
      <img src={imageUrl} alt={projectTitle} className="project-image" />
      <h2 className="project-title">{projectTitle}</h2>
      <div className="duration">
        <AiFillCalendar className="icon" />
        <p>{duration}</p>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} target="_blank" className="visit-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
