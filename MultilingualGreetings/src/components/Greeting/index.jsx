import { useState } from 'react'
import LanguageButton from '../LanguageButton'
import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

const Greeting = () => {
  const [activeButtonId, setActiveButtonId] = useState(
    languageGreetingsList[0].id
  )

  const greetingData = languageGreetingsList.find(
    (item) => item.id === activeButtonId
  )

  return (
    <div className="greeting-container">
      <h1>Multilingual Greetings</h1>
      <ul className="buttons-list">
        {languageGreetingsList.map((item) => (
          <LanguageButton
            key={item.id}
            activeButtonId={activeButtonId}
            buttonData={item}
            setActiveButtonId={setActiveButtonId}
          />
        ))}
      </ul>
      <img
        src={greetingData.imageUrl}
        alt={greetingData.imageAltText}
        className="image"
      />
    </div>
  )
}

export default Greeting
