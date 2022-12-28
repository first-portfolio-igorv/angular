import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CensorComponent } from './censor/censor.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { TaskTableComponent } from './lesson3/task-table/task-table.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { SortPipe } from './lesson4/sort.pipe';
import { SearchPipe } from './lesson4/search.pipe';
import { SortLastNamePipe } from './lesson4/sort-last-name.pipe';
import { SortNumberPipe } from './lesson4/sort-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CensorComponent,
    Lesson2Component,
    Lesson3Component,
    TaskTableComponent,
    Lesson4Component,
    SortPipe,
    SearchPipe,
    SortLastNamePipe,
    SortNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
