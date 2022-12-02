import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CensorComponent } from './censor/censor.component';
import { Lesson2Component } from './lesson2/lesson2.component';

@NgModule({
  declarations: [
    AppComponent,
    CensorComponent,
    Lesson2Component
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
