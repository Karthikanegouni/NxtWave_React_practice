import { Component } from "react"
import TeamCard from "../TeamCard"

import "./index.css"
import { RingLoader } from "react-spinners"

export default class Home extends Component {
  state = {
    iplTeams: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIPLTeams()
  }

  getIPLTeams = async () => {
    try {
      const response = await fetch("https://apis.ccbp.in/ipl")
      const data = await response.json()
      const { teams } = data
      const formatedData = teams.map((item) => ({
        id: item.id,
        name: item.name,
        teamImageUrl: item.team_image_url,
      }))
      this.setState({
        iplTeams: formatedData,
        isLoading: false,
      })
    } catch (error) {
      console.log(error.message)
      this.setState({
        isLoading: false,
      })
    }
  }

  render() {
    const { iplTeams, isLoading } = this.state
    return (
      <div className="home-cnt">
        <div className="home-title-cnt">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="home-title">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader" className="loader">
            <RingLoader color="#ffffff" size={60} />
          </div>
        ) : (
          <ul className="team-cards-cnt">
            {iplTeams.map((team) => (
              <TeamCard key={team.id} teamData={team} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
