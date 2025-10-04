import { useState } from 'react'
import { v4 as generateId } from 'uuid'
import './index.css'

const CharacterCounter = () => {
  const [input, setInput] = useState('')
  const [wordsList, setWordsList] = useState([])

  const handleAddWord = (event) => {
    event.preventDefault()
    if (input !== '') {
      setWordsList((prev) => [...prev, input])
      setInput('')
    }
  }

  const rendercount = () => (
    <ul className="words-list-cnt">
      {wordsList.map((item) => (
        <li key={generateId()}>
          <p className="word-count">{`${item} : ${item.trim().length}`}</p>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="wrapper">
      <div className="main-cnt">
        <div className="left-cnt">
          <h1 className="left-cnt-title">
            Count the characters like a Boss...
          </h1>
          {wordsList.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="no-inputs-img"
            />
          ) : (
            rendercount()
          )}
        </div>
        <div className="right-cnt">
          <h1>Character Counter</h1>
          <form className="input-cnt" onSubmit={handleAddWord}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              value={input}
              onChange={(e) => {
                setInput(e.target.value)
              }}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CharacterCounter
