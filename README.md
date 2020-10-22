# Install Angular 
1. npm -v
2. node -v
3. npm install -g @angular/cli
4. ng new myapp

# Lazy Loading
1. Make a module
2. Make Components
3. Use module in lazy loading way
4. Make Routing 
5. Make Routing Link
=> ng g m admin --routing
=> ng g c admin/login
=> ng g c admin/list

admin-routing.module.ts:-

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ListComponent} from './list/list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'list', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

app.module.ts:-

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AdminRoutingModule} from './admin/admin-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

app-routing.module.ts:-

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "admin", loadChildren:()=>import('./admin/admin.module').then(
    mod => mod.AdminModule
  )
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


app.component.html:-

<!DOCTYPE html>
<html lang="english">
<head>
  <meta charset='utf-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <title>Page Title</title>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
</head>
<body>
  <h2>Anguar10!</h2>
  <ul>
    <ol><a routerLink="admin/login">Login  </a></ol>
    <ol><a routerLink="admin/list">List </a></ol>
  </ul>
  <router-outlet> </router-outlet>
</body>
</html>

# Lazy Loading Component
1. Make two components
2. Make two buttons for loading the components
3. Write a component loading functions

=> ng g c adminlist
=> ng g c userlist

4. app.component.html

<!DOCTYPE html>
<html lang="english">
<head>
  <meta charset='utf-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <title>Page Title</title>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
</head>
<body>
  <h2>Anguar10!</h2>
  <h3> Lazy loading for routing </h3>
  <ul>
    <ol><a routerLink="admin/login">Login  </a></ol>
    <ol><a routerLink="admin/list">List </a></ol>
  </ul>
  <router-outlet> </router-outlet>
  <h3>Lazy loading component</h3>
  <button (click)="adminLoad()">Admin Loading</button>
  <button (click)="userLoad()">User Loading</button>
</body>
</html>

5. app.component.ts

import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  constructor(private vcr:ViewContainerRef, private cfr:ComponentFactoryResolver)
  {
     this.title="Angular10";
  }
  /*  Lazy Loading component */
  async adminLoad() {
    this.vcr.clear();
    const {AdminlistComponent} = await import('./adminlist/adminlist.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(AdminlistComponent)
    )
  }

  async userLoad() {
    this.vcr.clear();
    const {UserlistComponent} = await import('./userlist/userlist.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(UserlistComponent)
    )
  }
  
}










