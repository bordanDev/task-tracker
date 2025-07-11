import { Task, TaskStatus } from '../tasks/interfaces/task';

export const mockTasks: Task[] = [
  {
    id: 1,
    title: 'First task',
    description: 'Test description for task',
    status: TaskStatus.Todo
  },
  {
    id: 2,
    title: 'Test',
    description: 'Test tes test',
    status: TaskStatus.Todo
  },
  {
    id: 3,
    title: 'Third task',
    description: 'Important meeting preparation',
    status: TaskStatus.Done
  },
  {
    id: 4,
    title: 'Fourth task',
    description: 'Bug fixes for main project',
    status: TaskStatus.Todo
  },
  {
    id: 5,
    title: 'Fifth task',
    description: 'Code review for PR #42',
    status: TaskStatus.InProgress
  },
  {
    id: 6,
    title: 'Sixth task',
    description: 'Deploy new version to production',
    status: TaskStatus.Done
  }
];
