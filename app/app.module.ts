import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealsListComponent } from './meal-list.component';
import { TaskListComponent } from './task-list.component';
import { EditMealComponent } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';
import { CompletenessPipe } from './completeness.pipe';
import { TaskComponent } from './task.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    MealsListComponent,
    AppComponent,
    TaskListComponent,
    EditMealComponent,
    NewMealComponent,
    CompletenessPipe,
    TaskComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
