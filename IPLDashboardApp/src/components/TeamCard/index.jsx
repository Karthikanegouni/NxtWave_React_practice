import { Component } from "react"
import "./index.css"
import { Link } from "react-router-dom"

export default class TeamCard extends Component {
  render() {
    const { teamData } = this.props
    const { id, name, teamImageUrl } = teamData
    return (
      <li className="team-card-item">
        <Link to={`/team-matches/${id}`} className="team-card-cnt">
          <div className="team-card-img-cnt">
            <img src={teamImageUrl} alt={name} className="team-card-img" />
          </div>

          <h1 className="team-card-name">{name}</h1>
        </Link>
      </li>
    )
  }
}
