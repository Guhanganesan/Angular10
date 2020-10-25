import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './country.service'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AdminRoutingModule} from './admin/admin-routing.module';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ObservableExampleComponent } from './observable-example/observable-example.component';
import { PromiseExampleComponent } from './promise-example/promise-example.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminlistComponent,
    UserlistComponent,
    ObservableExampleComponent,
    PromiseExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
