import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicsComponent } from './basics/basics.component';
import { MyReactiveFormsComponent } from './my-reactive-forms/my-reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreateEmployeesComponent } from './employees/create-employees/create-employees.component';


const routes: Routes = [
    {
      path: 'basics',
      component: BasicsComponent
    },
    {
      path: 'reactive-forms',
      component: MyReactiveFormsComponent
    },
    {
      path: 'template-driven-forms',
      component: TemplateDrivenFormsComponent
    },
    {
      path: 'list-employees',
      component: ListEmployeesComponent
    },
    {
      path: 'create-employees',
      component: CreateEmployeesComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
