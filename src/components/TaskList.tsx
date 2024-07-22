import React from 'react'
import { Task } from '../types/task.ts'
import TaskItem from './TaskItem'
import '../styles/task.scss'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

interface TaskListProps {
  tasks: Task[]
  updateTask: (task: Task) => void
  deleteTask: (id: string) => void
}

const TaskList: React.FC<TaskListProps> = ({ tasks, updateTask, deleteTask }) => {
  return (
    <TransitionGroup className="task-list">
      {tasks.map((task) => (
        <CSSTransition key={task.id} timeout={500} classNames="task-cell">
          <TaskItem task={task} updateTask={updateTask} deleteTask={deleteTask} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}

export default TaskList
