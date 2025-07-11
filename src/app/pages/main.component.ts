import { Component, effect, inject, OnInit, signal, Signal } from '@angular/core';
import { TaskComponent } from '../shared/task/task.component';
import { IconsModule } from '../icons/icons.module';
import { mockTasks } from './mock.const';
import { LayoutComponent } from '../shared/layout/layout.component';
import { FilteredTask, TaskService } from '../services/task.service';
import { Task } from '../tasks/interfaces/task';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [
    TaskComponent,
    IconsModule,
    LayoutComponent
  ],
  standalone: true
})
export class MainComponent implements OnInit{

  private taskService = inject(TaskService)

  constructor() {

  }

  ngOnInit(){
    this.taskService.task$.subscribe((x) =>  this.tasks = x)
    this.taskService.setTask(mockTasks)
  }

  tasks!: any;


  protected readonly mockTasks = mockTasks;
  protected readonly Object = Object;
}
