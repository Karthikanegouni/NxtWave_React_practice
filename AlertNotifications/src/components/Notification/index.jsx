import { GrFormClose } from "react-icons/gr"
import "./index.css"

const Notification = ({ children }) => {
  return (
    <div className="notification-cnt">
      <div>{children}</div>
      <GrFormClose color="#475569" size={30} className="close-icon" />
    </div>
  )
}

export default Notification
