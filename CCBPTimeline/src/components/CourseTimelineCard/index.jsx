import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = ({item}) => {
  const {courseTitle, description, duration, tagsList} = item

  return (
    <div className="course-card">
      <h2 className="course-title">{courseTitle}</h2>
      <div className="duration">
        <AiFillClockCircle className="icon" />
        <p>{duration}</p>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-list">
        {tagsList.map(tag => (
          <li key={tag.id} className="tag">
            {tag.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
