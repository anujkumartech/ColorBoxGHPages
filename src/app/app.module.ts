import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorBoxComponent } from '../app/components/color-box/color-box.component';


@NgModule({
  declarations: [AppComponent, ColorBoxComponent],
  imports: [
    BrowserModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
