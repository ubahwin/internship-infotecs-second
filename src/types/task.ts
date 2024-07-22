export interface Task {
  id: string
  title: string
  description: string
  dueDate: string
  status: "none" | "done" | "in-work"
}
