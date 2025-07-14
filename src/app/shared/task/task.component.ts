import { Component, computed, inject, input, InputSignal, OnInit } from '@angular/core';
import { Task, TaskStatus } from '../../tasks/interfaces/task';
import { FeatherModule } from 'angular-feather';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Switcher, SwitcherComponent } from '../switcher/switcher.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  imports: [
    FeatherModule,
    ReactiveFormsModule,
    SwitcherComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit{

  private taskService = inject(TaskService)

  cardConfig: InputSignal<Task | undefined> = input();

  isEdit = false;

  form = new FormGroup({
    id: new FormControl(this.cardConfig()?.id),
    title: new FormControl(this.cardConfig()?.title),
    description: new FormControl(this.cardConfig()?.description),
    status: new FormControl(this.cardConfig()?.status)
  })

  ngOnInit() {
    setTimeout(() => {
      const task = this.cardConfig();
      if (task) {
        this.form.patchValue({
          id: task.id,
          title: task.title,
          description: task.description,
          status: task.status
        });
      }

    }, 0)
  }

  outdata(element: Switcher){

    // const updatedData = this.taskService.task$().map((item) => {
    //   if(item.id === this.cardConfig()?.id){
    //     return { ...item, status: element.text as TaskStatus }
    //   }
    //   return item
    // })
    //
    // this.taskService.getTasks()
    // this.taskService.setAllTask(updatedData)

  }


  getSwitcherData(card: Task): Switcher[] {

    if (card.status == TaskStatus.Todo) {
      return [
        {text: TaskStatus.Todo, isActive: true},
        {text: TaskStatus.InProgress, isActive: false},
        {text: TaskStatus.Done, isActive: false}
      ]
    }

    if (card.status == TaskStatus.InProgress) {
      return [
        {text: TaskStatus.Todo, isActive: false},
        {text: TaskStatus.InProgress, isActive: true},
        {text: TaskStatus.Done, isActive: false}
      ]
    }

    if (card.status == TaskStatus.Done) {
      return [
        {text: TaskStatus.Todo, isActive: false},
        {text: TaskStatus.InProgress, isActive: false},
        {text: TaskStatus.Done, isActive: true}
      ]
    }

    return []
  }

  data = computed(() => this.getSwitcherData(this.cardConfig()!))

  protected readonly TaskStatus = TaskStatus;
}
