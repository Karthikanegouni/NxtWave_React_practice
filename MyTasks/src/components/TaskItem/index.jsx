import './index.css'

const TaskItem = ({ task }) => {
  const { text, tag } = task
  return (
    <li className="task-item">
      <p>{text}</p>
      <p className="task-tag-item">{tag}</p>
    </li>
  )
}

export default TaskItem
