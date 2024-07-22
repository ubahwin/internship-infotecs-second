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
  const [errors, setErrors] = useState<{ title?: string, dueDate?: string }>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const newErrors: { title?: string, dueDate?: string } = {}
    if (!title) newErrors.title = 'Title is required'
    if (!dueDate) newErrors.dueDate = 'Due date is required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    addTask({
      id: Date.now().toString(),
      title,
      description,
      dueDate,
      state: 'in-work'
    })
    setTitle('')
    setDescription('')
    setDueDate('')
    setErrors({})
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {errors.title && <span className="error">{errors.title}</span>}
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
      {errors.dueDate && <span className="error">{errors.dueDate}</span>}
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm
