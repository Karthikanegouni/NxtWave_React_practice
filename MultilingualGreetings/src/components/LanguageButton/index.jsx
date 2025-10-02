import './index.css'

const LanguageButton = ({ activeButtonId, buttonData, setActiveButtonId }) => {
  const { id, buttonText } = buttonData
  const buttonClass = activeButtonId === id ? 'active-btn' : 'button'

  return (
    <li>
      <button
        type="button"
        onClick={() => {
          setActiveButtonId(id)
        }}
        className={buttonClass}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageButton
