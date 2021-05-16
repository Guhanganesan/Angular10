import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//import new modules from packages
import{ FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BasicsComponent } from './basics/basics.component';
import { MydirectiveDirective } from './mydirective.directive';
import { MyReactiveFormsComponent } from './my-reactive-forms/my-reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    MydirectiveDirective,
    MyReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
