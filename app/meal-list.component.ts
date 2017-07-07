import { Component } from '@angular/core';

@Component({
  selector: 'meals',
  template: `
  <h3>Here are my favourite meals.</h3>
  <div *ngFor="let currentPie of favoriteMeals">
    <p>{{currentPie}}</p>
  </div>
  `
})

export class MealsListComponent {
  favoriteMeals: string[] = [
    "1. Toasted bread, fried eggs and coffee",
    "2. Double cheese burger and fries",
    "3. Ugali and chicken stew",
    "4. Fish and Chips",
    "5. Ugali and Omena",
    "6. Pilau Biryani"
  ];
}
