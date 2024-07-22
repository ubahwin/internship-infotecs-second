import React from 'react'
import { Task } from '../types/task.ts'
import TaskItem from './TaskItem'
import '../styles/task.scss'

interface TaskListProps {
  tasks: Task[]
  updateTask: (task: Task) => void
  deleteTask: (id: string) => void
}

const TaskList: React.FC<TaskListProps> = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
      ))}
    </div>
  )
}

export default TaskList
