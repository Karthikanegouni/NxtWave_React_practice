import "./index.css"

export default function LatestMatch({ latestMatchDetails }) {
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-main-cnt">
      <div className="latest-match-top-cnt">
        <div className="text-card">
          <h1 className="competing-team">{competingTeam}</h1>
          <p className="match-date">{date}</p>
          <p className="match-venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <div className="competing-team-logo-cnt">
          <img
            src={competingTeamLogo}
            alt={competingTeam}
            className="competing-team-logo"
          />
        </div>
      </div>
      <div className="latestmatch-bottom-cnt">
        <p className="latestmatch-bottom-title">First Innings</p>
        <p className="latestmatch-bottom-data">{firstInnings}</p>
        <p className="latestmatch-bottom-title">Second Innings</p>
        <p className="latestmatch-bottom-data">{secondInnings}</p>
        <p className="latestmatch-bottom-title">Man Of The Match</p>
        <p className="latestmatch-bottom-data">{manOfTheMatch}</p>
        <p className="latestmatch-bottom-title">Umpires</p>
        <p className="latestmatch-bottom-data">{umpires}</p>
      </div>
    </div>
  )
}
