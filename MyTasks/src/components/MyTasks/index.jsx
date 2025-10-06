import { useState } from 'react'
import { v4 } from 'uuid'
import TagItem from '../TagItem'
import TaskItem from '../TaskItem'
import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

const MyTasks = () => {
  const [activeTabId, setActiveTabId] = useState('')
  const [tasksList, setTasksList] = useState([])

  const [taskText, setTaskText] = useState('')
  const [taskTag, setTaskTag] = useState(tagsList[0].optionId)

  const addTask = (event) => {
    event.preventDefault()
    if (taskText.trim() !== '') {
      const selectedTag = tagsList.find((tag) => tag.optionId === taskTag)

      const taskData = {
        id: v4(),
        text: taskText.trim(),
        tag: selectedTag.displayText,
        optionId: selectedTag.optionId,
      }
      setTasksList((prev) => [...prev, taskData])
      setTaskTag(tagsList[0].optionId)
      setTaskText('')
    }
  }

  const handleTagClick = (id) => {
    setActiveTabId((prev) => (prev !== id ? id : ''))
  }

  const renderForm = () => (
    <form onSubmit={addTask} className="add-task-form">
      <h1 className="form-title">Create a task!</h1>
      <label htmlFor="task">Task</label>
      <input
        type="text"
        placeholder="Enter the task here"
        id="task"
        value={taskText}
        onChange={(e) => {
          setTaskText(e.target.value)
        }}
      />
      <label htmlFor="tag">Tags</label>
      <select
        name="tag"
        id="tag"
        value={taskTag}
        onChange={(e) => {
          setTaskTag(e.target.value)
        }}
      >
        {tagsList.map((tag) => (
          <option value={tag.optionId} key={tag.optionId}>
            {tag.displayText}
          </option>
        ))}
      </select>
      <button className="add-btn" type="submit">
        Add Task
      </button>
    </form>
  )

  const renderTagItemsList = () => (
    <ul className="tag-items-list">
      {tagsList.map((tag) => (
        <TagItem
          key={tag.optionId}
          tagData={tag}
          activeTabId={activeTabId}
          onTagClick={handleTagClick}
        />
      ))}
    </ul>
  )

  const renderTaskItemsList = () => {
    const filteredTasks =
      activeTabId !== ''
        ? tasksList.filter((task) => task.optionId === activeTabId)
        : tasksList

    return (
      <>
        {filteredTasks.length !== 0 ? (
          <ul className="tasks-items-list">
            {filteredTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
        ) : (
          <div className="no-task-view">
            <p>No Tasks Added Yet</p>
          </div>
        )}
      </>
    )
  }

  return (
    <div className="main-cnt">
      {renderForm()}
      <div className="right-cnt">
        <h1>Tags</h1>
        {renderTagItemsList()}

        <h1>Tasks</h1>
        {renderTaskItemsList()}
      </div>
    </div>
  )
}

export default MyTasks
