import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';


@Component({
  selector: 'meals-list',
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">Show all meals</option>


      <option value="isDone" selected="selected">High calorie meals</option>
      <option value="notDone" selected="selected">Low calorie meals</option>
    </select>
    <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness">
      <task-display [task]="currentTask"></task-display>

      <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
    </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "notDone";

  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
}
