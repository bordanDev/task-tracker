import { Injectable } from '@angular/core';
import { Task } from '../tasks/interfaces/task';
import { BehaviorSubject, Observable } from 'rxjs';
import { mockTasks } from '../pages/mock.const';

@Injectable({
  providedIn: 'root'
})
export class  TaskService {

  constructor() { }

  private taskSubject: BehaviorSubject<FilteredTask> = new BehaviorSubject<FilteredTask>({});
  public readonly task$: Observable<FilteredTask> = this.taskSubject.asObservable();

  private allTaskSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(mockTasks);
  public readonly allTask$: Observable<Task[]> = this.allTaskSubject.asObservable();

  // Filter task by status
  public setTask(task: Task[]){
    const filteredTask: FilteredTask = task.reduce((acc: Record<string, Task[]>, cur) => {
      if(!acc[cur.status]){
        acc[cur.status] = [ cur ];
      } else {
        acc[cur.status] = [...acc[cur.status], cur]
      }
      return acc
    }, {})
    this.taskSubject.next(filteredTask)
  }

  // Return all tasks
  public getAllTask(): Task[] {
    let returner!: Task[];
    this.allTask$.subscribe((tasks) => returner = tasks)
    return returner;
  }

  public setAllTask(tasks: Task[]) {
    this.allTaskSubject.next(tasks);
  }

}

export type FilteredTask = Record<string, Task[]>
