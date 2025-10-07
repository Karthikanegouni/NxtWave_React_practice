import { useEffect, useState } from 'react'
import LoaderComponent from '../LoaderComponent'
import FailureView from '../FailureView'
import './index.css'
import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const CourseItemDetailed = ({ match }) => {
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [courseData, setCourseData] = useState({})

  const getCourseData = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    try {
      const {
        params: { id },
      } = match
      const apiUrl = `https://apis.ccbp.in/te/courses/${id}`
      const response = await fetch(apiUrl)
      if (response.ok) {
        const { course_details: courseDetails } = await response.json()
        const formatedCourseData = {
          description: courseDetails.description,
          id: courseDetails.id,
          imageUrl: courseDetails.image_url,
          name: courseDetails.name,
        }
        setCourseData(formatedCourseData)
        setApiStatus(apiStatusConstants.success)
        return
      }
      setApiStatus(apiStatusConstants.failure)
      return
    } catch (error) {
      console.log(error.message)
      setApiStatus(apiStatusConstants.failure)
    }
  }

  const renderCourseView = () => {
    const { name, imageUrl, description } = courseData
    return (
      <>
        <Header />
        <div className="detailed-course-cnt">
          <img src={imageUrl} alt={name} />
          <div className="text-container">
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </div>
      </>
    )
  }

  useEffect(() => {
    getCourseData()
  }, [])

  const renderCourseDetailedView = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderComponent />
      case apiStatusConstants.success:
        return renderCourseView()
      case apiStatusConstants.failure:
        return <FailureView apiCall={getCourseData} />
      default:
        return null
    }
  }

  return <div>{renderCourseDetailedView()}</div>
}

export default CourseItemDetailed
