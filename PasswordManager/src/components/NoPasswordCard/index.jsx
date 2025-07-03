import "./index.css";

export default function NoPasswordCard() {
  return (
    <div className="no-password-card">
      <img
      className="no-password-img"
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
      />
      <p className="no-passwords-text">No Passwords</p>
    </div>
  );
}
