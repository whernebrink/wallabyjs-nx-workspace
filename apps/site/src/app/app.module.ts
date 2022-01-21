import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DesignSystemModule } from '@myworkspace/design-system'

import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DesignSystemModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
