import { Component, input, InputSignal, output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-switcher',
  imports: [
    NgClass
  ],
  templateUrl: './switcher.component.html',
  styleUrl: './switcher.component.scss'
})
export class SwitcherComponent {

  listOfSwitch: InputSignal<Switcher[]> = input.required()

  changeStyle(item: Switcher){
    if(!item.isActive){
      this.listOfSwitch().map((x) => x.isActive = false)
      item.isActive = true;
      this.statusChange.emit(item)
    }
  }

  statusChange = output<Switcher>()

}

export interface Switcher {
  text: string;
  isActive: boolean;
}
