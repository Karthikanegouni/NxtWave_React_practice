import { Link } from 'react-router-dom'
import './index.css'

const CourseItem = ({ course: { id, logoUrl, name } }) => (
  <li>
    <Link to={`/courses/${id}`} className="course-item">
      <img src={logoUrl} alt={name} />
      <p>{name}</p>
    </Link>
  </li>
)

export default CourseItem
