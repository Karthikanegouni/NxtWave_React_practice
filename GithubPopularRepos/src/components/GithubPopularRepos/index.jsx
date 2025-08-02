import { Component } from "react"
import { BeatLoader } from "react-spinners"
import LanguageFilterItem from "../LanguageFilterItem"
import RepositoryItem from "../RepositoryItem"
import "./index.css"

const languageFiltersData = [
  { id: "ALL", language: "All" },
  { id: "JAVASCRIPT", language: "Javascript" },
  { id: "RUBY", language: "Ruby" },
  { id: "JAVA", language: "Java" },
  { id: "CSS", language: "CSS" },
]

class GithubPopularRepos extends Component {
  state = {
    activeTabId: languageFiltersData[0].id,
    isLoading: false,
    popularRepos: [],
    fetchError: false,
  }

  componentDidMount() {
    this.fetchRepos()
  }

  fetchRepos = async () => {
    try {
      this.setState({ isLoading: true })
      const { activeTabId } = this.state
      const url = `https://apis.ccbp.in/popular-repos?language=${activeTabId}`
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
        const { popular_repos } = data
        const formatedList = popular_repos.map((item) => ({
          id: item.id,
          name: item.name,
          issuesCount: item.issues_count,
          forksCount: item.forks_count,
          starsCount: item.stars_count,
          avatarUrl: item.avatar_url,
        }))
        this.setState({
          isLoading: false,
          fetchError: false,
          popularRepos: formatedList,
        })
      } else {
        this.setState({ isLoading: false, fetchError: true })
      }
    } catch (error) {
      console.log(error.message)
      this.setState({
        isLoading: false,
        fetchError: true,
      })
    }
  }

  setFilter = (id) => {
    const { activeTabId } = this.state
    if (id !== activeTabId) {
      this.setState({ activeTabId: id }, this.fetchRepos)
    }
  }

  renderFailureView = () => (
    <div className="error-cnt">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1 className="failure-title">Something Went Wrong</h1>
    </div>
  )

  renderContent = () => {
    const { isLoading, fetchError, popularRepos } = this.state

    if (isLoading) {
      return (
        <div data-testid="loader" className="loader-cnt">
          <BeatLoader color="#0284c7" size={40} />
        </div>
      )
    }

    if (fetchError) {
      return this.renderFailureView()
    }

    return (
      <ul className="repos-list">
        {popularRepos.map((repo) => (
          <RepositoryItem key={repo.id} repoDetails={repo} />
        ))}
      </ul>
    )
  }

  render() {
    const { activeTabId } = this.state

    return (
      <div className="github-popular-repo-cnt">
        <h1 className="main-title">Popular Repos</h1>
        <ul className="filters-cnt">
          {languageFiltersData.map((filterItem) => (
            <LanguageFilterItem
              key={filterItem.id}
              filterItem={filterItem}
              activeTabId={activeTabId}
              setFilter={this.setFilter}
            />
          ))}
        </ul>

        {this.renderContent()}
      </div>
    )
  }
}

export default GithubPopularRepos
