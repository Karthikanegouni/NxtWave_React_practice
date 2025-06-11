import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  const messageText = isLoggedIn ? 'Welcome User' : 'Please Login'

  return <h1 className="message">{messageText}</h1>
}

export default Message

