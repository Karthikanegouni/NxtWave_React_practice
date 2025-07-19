import React, { Component } from "react"
import LatestMatch from "../LatestMatch"
import MatchCard from "../MatchCard"
import { RingLoader } from "react-spinners"

import "./index.css"

export default class TeamMatches extends Component {
  state = {
    teamMatchesData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  convertToCamelCase = (data) => {
    const { latest_match_details, recent_matches, team_banner_url } = data

    const formattedLatestMatch = {
      umpires: latest_match_details.umpires,
      result: latest_match_details.result,
      manOfTheMatch: latest_match_details.man_of_the_match,
      id: latest_match_details.id,
      date: latest_match_details.date,
      venue: latest_match_details.venue,
      competingTeam: latest_match_details.competing_team,
      competingTeamLogo: latest_match_details.competing_team_logo,
      firstInnings: latest_match_details.first_innings,
      secondInnings: latest_match_details.second_innings,
      matchStatus: latest_match_details.match_status,
    }

    const formattedRecentMatches = recent_matches.map((match) => ({
      umpires: match.umpires,
      result: match.result,
      manOfTheMatch: match.man_of_the_match,
      id: match.id,
      date: match.date,
      venue: match.venue,
      competingTeam: match.competing_team,
      competingTeamLogo: match.competing_team_logo,
      firstInnings: match.first_innings,
      secondInnings: match.second_innings,
      matchStatus: match.match_status,
    }))

    return {
      latestMatchDetails: formattedLatestMatch,
      recentMatches: formattedRecentMatches,
      teamBannerUrl: team_banner_url,
    }
  }

  getTeamMatchesData = async () => {
    try {
      const { match, history } = this.props
      const { params } = match
      const { id } = params
      const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
      if (!response.ok) {
        history.replace("/not-found")
        return
      }
      const data = await response.json()

      const formatedData = this.convertToCamelCase(data)
      this.setState({
        teamMatchesData: formatedData,
        isLoading: false,
      })
    } catch (error) {
      console.log(error.message)
      const { history } = this.props
      history.replace("/not-found")
      this.setState({
        isLoading: false,
      })
    }
  }

  render() {
    const { teamMatchesData, isLoading } = this.state
    const { latestMatchDetails, teamBannerUrl, recentMatches } = teamMatchesData
    const { match } = this.props
    const { params } = match
    const { id } = params
    const teamBg = id.toLowerCase() + "-bg"

    return (
      <div className={`team-match-cnt ${teamBg}`}>
        {isLoading ? (
          <div testid="loader" className="loader">
            <RingLoader color="#ffffff" size={50} />
          </div>
        ) : (
          <div className="wrapper">
            <img
              src={teamBannerUrl}
              alt="team Banner"
              className="team-banner"
            />
            <h1 className="latest-matches-title">Latest Matches</h1>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="recent-matches-cnt">
              {recentMatches.map((matchDetails) => (
                <MatchCard key={matchDetails.id} matchDetails={matchDetails} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
