import { useEffect, useState } from 'react'
import LoaderComponent from '../LoaderComponent'
import Header from '../Header'
import CourseItem from '../CourseItem'
import FailureView from '../FailureView'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const Home = () => {
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [coursesList, setCoursesList] = useState([])

  const getCoursesList = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    try {
      const apiUrl = 'https://apis.ccbp.in/te/courses'
      const response = await fetch(apiUrl)
      if (response.ok) {
        const { courses } = await response.json()
        const formatedData = courses.map((course) => ({
          id: course.id,
          name: course.name,
          logoUrl: course.logo_url,
        }))
        setCoursesList(formatedData)
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

  useEffect(() => {
    getCoursesList()
  }, [])

  const renderCourses = () => (
    <>
      <Header />
      <div className="TechEra-cnt">
        <h1>Courses</h1>
        <ul className="courses-list-cnt">
          {coursesList.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
        </ul>
      </div>
    </>
  )

  const renderHomeView = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderComponent />
      case apiStatusConstants.success:
        return renderCourses()
      case apiStatusConstants.failure:
        return <FailureView apiCall={getCoursesList} />
      default:
        return null
    }
  }

  return <>{renderHomeView()}</>
}

export default Home
