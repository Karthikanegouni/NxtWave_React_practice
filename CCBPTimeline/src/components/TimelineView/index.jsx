import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = ({timelineItemsList}) => (
  <div className="chrono-container">
    <h1 className="heading">MY JOURNEY OF</h1>
    <h1 className="second-heading">CCBP 4.0</h1>

    <Chrono
      className="chrono"
      mode="VERTICAL_ALTERNATING"
      enableBreakPoint
      items={timelineItemsList.map(item => ({title: item.title}))}
      theme={{
        primary: '#2b237c',
        secondary: '#ffffff',
        titleColor: '#1e293b',
      }}
      disableToolbar
      cardHeight="auto"
    >
      {timelineItemsList.map(item =>
        item.categoryId === 'COURSE' ? (
          <CourseTimelineCard key={item.id} item={item} />
        ) : (
          <ProjectTimelineCard key={item.id} item={item} />
        ),
      )}
    </Chrono>
  </div>
)

export default TimelineView
