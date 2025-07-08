import "./index.css"

export default function UserInfo() {
  return (
    <div className="user-info">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="user-avatar"
      />
      <h1 className="user-name">Wade Warren</h1>
      <p className="user-role">Software developer at UK</p>
    </div>
  )
}
