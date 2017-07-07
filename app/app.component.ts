import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker - Angular 2 JS</h1>
    <meals></meals>
    <meals-list
      [childTaskList]="masterMealList"
      (clickSender)="showDetails($event)"
     ></meals-list>
    <edit-meal
      [childSelectedTask]="selectedTask"
      (doneClickedSender)="finishedEditing()"
    ></edit-meal>
    <new-meal
      (newTaskSender)="addTask($event)"
    ></new-meal>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Task[] = [
      new Task("Toasted bread, fried eggs and coffee.", 500),
      new Task("Double cheese burger and fries.", 365),
      new Task("Ugali and chicken stew.", 600),
      new Task("Fish and Chips.", 450)

  ];

  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  addTask(newTaskFromChild: Task) {
    this.masterMealList.push(newTaskFromChild);
  }
}
