import {useState} from 'react'
import './index.css'

const EditableTextInput = () => {
  const [editMode, setEditMode] = useState(true)
  const [text, setText] = useState('')

  return (
    <div className="main-container">
      <div className="card">
        <h1>Editable Text Input</h1>
        <div className="flex-cnt">
          {editMode ? (
            <input
              type="text"
              value={text}
              onChange={e => {
                setText(e.target.value)
              }}
            />
          ) : (
            <p>{text}</p>
          )}
          <button
            type="button"
            className="custom-button"
            onClick={() => {
              setEditMode(prev => !prev)
            }}
          >
            {editMode ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditableTextInput
