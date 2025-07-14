import { Component, inject, OnInit } from '@angular/core';
import { TaskComponent } from '../shared/task/task.component';
import { IconsModule } from '../icons/icons.module';
import { LayoutComponent } from '../shared/layout/layout.component';
import { TaskService } from '../services/task.service';
import { StepperComponent } from '../shared/stepper/stepper.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [
    IconsModule,
    LayoutComponent,
    StepperComponent
  ],
  standalone: true
})
export class MainComponent implements OnInit{

  private taskService = inject(TaskService)

  constructor() {

  }

  ngOnInit(){
    this.taskService.getTasks().subscribe()
    this.taskService.task$.subscribe((x) => {
      this.tasks = x
    })
  }

  tasks!: any;

  initialNumber = 0;

  protected readonly Object = Object;
}
