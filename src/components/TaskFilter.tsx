import React from 'react'
import { TaskState } from '../types/task.ts'
import '@styles/task-filter.scss'

interface TaskFilterProps {
  currentFilter: TaskState | 'all'
  onFilterChange: (filter: TaskState | 'all') => void
}

const TaskFilter: React.FC<TaskFilterProps> = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="task-filter">
      <label>
        <input
          type="radio"
          value="all"
          checked={currentFilter === 'all'}
          onChange={() => onFilterChange('all')}
        />
        all
      </label>
      <label>
        <input
          type="radio"
          value="done"
          checked={currentFilter === 'done'}
          onChange={() => onFilterChange('done')}
        />
        done
      </label>
      <label>
        <input
          type="radio"
          value="in-work"
          checked={currentFilter === 'in-work'}
          onChange={() => onFilterChange('in-work')}
        />
        in work
      </label>
    </div>
  )
}

export default TaskFilter
