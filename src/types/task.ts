export interface Task {
  id: string
  title: string
  description: string
  dueDate: string
  state: TaskState
}

export type TaskState = 'in-work' | 'done'
