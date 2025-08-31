import { Chrono } from "react-chrono"
import CourseTimelineCard from "../CourseTimelineCard"
import ProjectTimelineCard from "../ProjectTimelineCard"
import "./index.css"

const TimelineView = ({ timelineItemsList }) => (
  <div className="chrono-container">
    <h1 className="main-heading">CCBP Timeline</h1>
    <Chrono
      mode="VERTICAL_ALTERNATING"
      items={timelineItemsList.map((item) => ({ title: item.title }))}
      theme={{
        primary: "gray",
        secondary: "white",
        titleColor: "black",
      }}
      disableToolbar={true}
    >
      {timelineItemsList.map((item) =>
        item.categoryId === "COURSE" ? (
          <CourseTimelineCard key={item.id} item={item} />
        ) : (
          <ProjectTimelineCard key={item.id} item={item} />
        )
      )}
    </Chrono>
  </div>
)

export default TimelineView
