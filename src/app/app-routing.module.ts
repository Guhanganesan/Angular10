import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicsComponent } from './basics/basics.component';
import { MydirectiveDirective } from './mydirective.directive';
import { MyReactiveFormsComponent } from './my-reactive-forms/my-reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';

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
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
