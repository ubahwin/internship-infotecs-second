import React, { useState, FormEvent } from 'react';
import { Task } from '../types/task.ts'
import '../styles/task.scss'

interface TaskFormProps {
  addTask: (task: Task) => void
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (title && description && dueDate) {
      addTask({
        id: Date.now().toString(),
        title,
        description,
        dueDate
      })
      setTitle('')
      setDescription('')
      setDueDate('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm
