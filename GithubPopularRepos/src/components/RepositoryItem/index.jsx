import './index.css'

const RepositoryItem = ({repoDetails}) => {
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = repoDetails
  return (
    <li className="repo-item">
      <img src={avatarUrl} alt={name} className="repo-img" />
      <h1 className="repo-title">{name}</h1>
      <div className="info-cnt">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p>{starsCount} stars</p>
      </div>
      <div className="info-cnt">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p>{forksCount} forks</p>
      </div>
      <div className="info-cnt">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p>{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
