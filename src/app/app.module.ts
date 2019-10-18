import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Ex1Component} from './ex1/ex1.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatRadioModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {Ex2Component} from './ex2/ex2.component';
import {RainbowDirective} from './rainbow.directive';
import {Ex3Component} from './ex3/ex3.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex1Component,
    Ex2Component,
    RainbowDirective,
    Ex3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
