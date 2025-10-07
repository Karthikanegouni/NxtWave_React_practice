import './index.css'

const ProjectItem = ({ project: { name, imageUrl } }) => (
  <li className="project-item">
    <img src={imageUrl} alt={name} />
    <p>{name}</p>
  </li>
)

export default ProjectItem
