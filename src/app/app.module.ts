import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//import new modules from packages
import{ FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BasicsComponent } from './basics/basics.component';
import { MydirectiveDirective } from './mydirective.directive';
import { MyReactiveFormsComponent } from './my-reactive-forms/my-reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    MydirectiveDirective,
    MyReactiveFormsComponent,
    TemplateDrivenFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
