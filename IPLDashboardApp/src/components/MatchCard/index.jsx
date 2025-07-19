import "./index.css"

export default function MatchCard({ matchDetails }) {
  const { result, competingTeam, competingTeamLogo, matchStatus } = matchDetails

  const statusClass = matchStatus === "Won" ? "won" : "lost"

  return (
    <li className="match-card-cnt">
      <div className="logo-cnt">
        <img
          src={competingTeamLogo}
          alt={competingTeam}
          className="match-card-logo"
        />
      </div>

      <h1 className="competing-team">{competingTeam}</h1>
      <p className="match-result">{result}</p>
      <p className={`match-status ${statusClass}`}>{matchStatus}</p>
    </li>
  )
}
