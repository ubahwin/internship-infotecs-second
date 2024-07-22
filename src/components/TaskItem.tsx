import React, { useState } from 'react'
import { Task } from '../types/task.ts'
import '../styles/task.scss'

interface TaskItemProps {
  task: Task
  updateTask: (task: Task) => void
  deleteTask: (id: string) => void
}

const TaskItem: React.FC<TaskItemProps> = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)
  const [dueDate, setDueDate] = useState(task.dueDate)

  const handleUpdate = () => {
    updateTask({ ...task, title, description, dueDate })
    setIsEditing(false)
  }

  return (
    <div className="task-item">
      {isEditing ? (
        <div className="task-item-editing">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <>
          <div className="task-item-labels">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.dueDate}</p>
          </div>
          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  )
}

export default TaskItem
