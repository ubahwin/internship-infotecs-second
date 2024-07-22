import React from 'react'
import '@styles/task-sorter.scss'

interface TaskSorterProps {
  onSortChange: (sortDirection: 'asc' | 'desc') => void
}

const TaskSorter: React.FC<TaskSorterProps> = ({ onSortChange }) => {
  return (
    <div className="task-sorter">
      <button onClick={() => onSortChange('asc')}>▲</button>
      <button onClick={() => onSortChange('desc')}>▼</button>
    </div>
  )
}

export default TaskSorter
