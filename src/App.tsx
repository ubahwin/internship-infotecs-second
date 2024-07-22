import React from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import useLocalStorage from './hooks/useLocalStorage'
import { Task } from './types/task.ts'
import './styles/main.scss'

const App: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', [])

  const addTask = (task: Task) => {
    setTasks([...tasks, task])
  }

  const updateTask = (updatedTask: Task) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="content-container">
        <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
        <TaskForm addTask={addTask} />
      </div>
    </div>
  )
}

export default App
