import { Injectable } from '@angular/core';
import { Task, TaskStatus } from '../tasks/interfaces/task';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { mockTasks } from '../pages/mock.const';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class  TaskService {

  constructor(
    private http: HttpClient
  ) { }

  private taskSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  public readonly task$: Observable<Task[]> = this.taskSubject.asObservable();

  public getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>('http://localhost:3000/tasks').pipe(
      tap((tasks) => {
        console.log(tasks)
        this.taskSubject.next(tasks)
      })
    )
  }

  // Filter task by status
  filterTasksByStatus(tasks: Task[]){

    const filteredTask: FilteredTask = tasks.reduce((acc: Record<string, Task[]>, cur) => {
      if(!acc[cur.status]){
        acc[cur.status] = [ cur ];
      } else {
        acc[cur.status] = [...acc[cur.status], cur]
      }
      return acc
    }, {})

    return filteredTask
  }

}

export type FilteredTask = Record<string, Task[]>
