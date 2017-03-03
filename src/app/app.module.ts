import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppComponent2 } from './app.component2';

import {Logger} from './LoggerService';
@NgModule({
  declarations: [
    AppComponent,
    AppComponent2
  ],
  imports: [
    BrowserModule
  ],
  providers: [Logger],
  bootstrap: [AppComponent,AppComponent2]
})
export class AppModule { }
