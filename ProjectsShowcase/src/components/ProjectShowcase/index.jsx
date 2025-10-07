import { useEffect, useState, useCallback } from 'react'
import Loader from 'react-loader-spinner'
import ProjectItem from '../ProjectItem'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  in_progress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const categoriesList = [
  { id: 'ALL', displayText: 'All' },
  { id: 'STATIC', displayText: 'Static' },
  { id: 'RESPONSIVE', displayText: 'Responsive' },
  { id: 'DYNAMIC', displayText: 'Dynamic' },
  { id: 'REACT', displayText: 'React' },
]

const ProjectShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState(categoriesList[0].id)
  const [projectsList, setProjectsList] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  const getProjects = useCallback(async () => {
    setApiStatus(apiStatusConstants.in_progress)
    try {
      const apiUrl = `https://apis.ccbp.in/ps/projects?category=${selectedCategory}`
      const res = await fetch(apiUrl)
      if (res.ok) {
        const { projects } = await res.json()
        const formatedData = projects.map((project) => ({
          id: project.id,
          name: project.name,
          imageUrl: project.image_url,
        }))
        setProjectsList(formatedData)
        setApiStatus(apiStatusConstants.success)
        return
      }
      setApiStatus(apiStatusConstants.failure)
    } catch (e) {
      console.log(e.message)
      setApiStatus(apiStatusConstants.failure)
    }
  }, [selectedCategory])

  useEffect(() => {
    getProjects()
  }, [getProjects])

  const renderHeader = () => (
    <div className="header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
        alt="website logo"
      />
    </div>
  )

  const renderSuccessView = () => (
    <ul className="projects-items-list">
      {projectsList.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ul>
  )

  const renderFailureview = () => (
    <div className="failure-cnt">
      <img
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for.</p>
      <button type="button" className="retry-btn" onClick={getProjects}>
        Retry
      </button>
    </div>
  )

  const renderLoadingView = () => (
    <div data-testid="loader" className="loader-cnt">
      <Loader type="ThreeDots" color="#328af2" />
    </div>
  )

  const renderHome = () => {
    switch (apiStatus) {
      case apiStatusConstants.in_progress:
        return renderLoadingView()
      case apiStatusConstants.success:
        return renderSuccessView()
      case apiStatusConstants.failure:
        return renderFailureview()
      default:
        return null
    }
  }

  return (
    <>
      {renderHeader()}

      <div className="home-cnt">
        <select
          name="project"
          id="project"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value)
          }}
          className="category-select-input"
        >
          {categoriesList.map((category) => (
            <option value={category.id} key={category.id}>
              {category.displayText}
            </option>
          ))}
        </select>
        {renderHome()}
      </div>
    </>
  )
}

export default ProjectShowcase
