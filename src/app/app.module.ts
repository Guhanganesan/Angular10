import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//import new modules from packages
import{ FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";


import { EmployeeService } from './employee.service';

import { BasicsComponent } from './basics/basics.component';
import { MydirectiveDirective } from './mydirective.directive';
import { MyReactiveFormsComponent } from './my-reactive-forms/my-reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreateEmployeesComponent } from './employees/create-employees/create-employees.component';
import { UpdateEmployeesComponent } from './employees/update-employees/update-employees.component';
import { ForsmarrayExampleComponent } from './forms/forsmarray-example/forsmarray-example.component';
import { CostEstimationComponent } from './cost-estimation/cost-estimation.component';
import { EmployeeComponent } from './flask-server/employee/employee.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    MydirectiveDirective,
    MyReactiveFormsComponent,
    TemplateDrivenFormsComponent,
    ListEmployeesComponent,
    CreateEmployeesComponent,
    UpdateEmployeesComponent,
    ForsmarrayExampleComponent,
    CostEstimationComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
