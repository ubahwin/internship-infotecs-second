import React, {useState} from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import useLocalStorage from './hooks/useLocalStorage'
import {Task, TaskState} from './types/task.ts'
import './styles/main.scss'
import TaskFilter from '@components/TaskFilter.tsx'
import TaskSorter from '@components/TaskSorter.tsx'

const App: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', [])
  const [filter, setFilter] = useState<TaskState | 'all'>('all');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleFilterChange = (newFilter: TaskState | 'all') => {
    setFilter(newFilter)
  }

  const handleSortChange = (newSortDirection: 'asc' | 'desc') => {
    setSortDirection(newSortDirection)
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true
    return task.state === filter
  })

  const sortedTasks = filteredTasks.sort((a, b) => {
    const dateA = new Date(a.dueDate)
    const dateB = new Date(b.dueDate)
    return sortDirection === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime()
  })

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
        <TaskList tasks={sortedTasks} updateTask={updateTask} deleteTask={deleteTask} />
        <div className="right-container">
          <TaskForm addTask={addTask} />
          <TaskFilter currentFilter={filter} onFilterChange={handleFilterChange} />
          <TaskSorter onSortChange={handleSortChange} />
        </div>
      </div>
    </div>
  )
}

export default App
