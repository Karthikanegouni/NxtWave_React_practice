import { AiFillCheckCircle } from "react-icons/ai"
import { RiErrorWarningFill } from "react-icons/ri"
import { MdWarning, MdInfo } from "react-icons/md"
import Notification from "../Notification"
import "./index.css"

const alertData = [
  {
    type: "success",
    title: "Success",
    message: "You can access all the files in the folder",
    icon: <AiFillCheckCircle size={35} />,
  },
  {
    type: "error",
    title: "Error",
    message:
      "Sorry, you are not authorized to have access to delete the file",
    icon: <RiErrorWarningFill size={35} />,
  },
  {
    type: "warning",
    title: "Warning",
    message: "Viewers of this file can see comments and suggestions",
    icon: <MdWarning size={35} />,
  },
  {
    type: "info",
    title: "Info",
    message: "Anyone on the internet can view these files",
    icon: <MdInfo size={35} />,
  },
]

const AlertNotifications = () => (
  <div className="alert-notifications-cnt">
    <h1>Alert Notifications</h1>
    {alertData.map(({ type, title, message, icon }, index) => (
      <Notification key={index}>
        <div className="alert-cnt">
          <span className={`notification-icon ${type}`}>{icon}</span>
          <div className="notification-description-cnt">
            <h1 className={type}>{title}</h1>
            <p className="notification-description">{message}</p>
          </div>
        </div>
      </Notification>
    ))}
  </div>
)

export default AlertNotifications
