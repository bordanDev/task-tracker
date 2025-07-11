export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus
}

export enum TaskStatus {
  Todo = 'todo',
  InProgress = 'inprogress',
  Done = 'done'
}
