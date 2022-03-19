# Install Angular 
1. npm -v
2. node -v
3. npm install -g @angular/cli
4. ng new myapp
5. cd myapp
6. ng serve

# Check supporting browsers
1. npx browserslist

# Angular10 Features
1. Date range
2. Strict Mode
   a. ng new --strict
   b. It resolves AOT(Ahead of time) problems
   c. Code will more maintainable
   d. Catch bug easily
3. Typescript 3.9 is supported
   a. Typescript library updated with v2.0v
4. TS Lint library updated with 6.0v
5. tsconfig.base.json for better IDE support
   -> check supported browser list => npx browserslist
6. ESM5 is removed
   a. It saves around 250MB while installing
7. Removed supports for IE9 and IE10
8. 700 bugs has been fixed
9. ng update @angular/cli @angular/core

# Installing the bootrstap 
1. ng add @ng-bootstrap/schematics Or
2. npm install --save bootstrap
3. Add this "./node_modules/bootstrap/dist/css/bootstrap.css", in styles[] in angular.json
4. Visit this link https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css 
   Copy the entire code and paste it in style.css

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

# Template Driven form

1. import forms module in app.module
2. write a html form in app.component.html
3. Get data in component.ts file

4. app.component.html
<h3>Template driven forms</h3>
  <form #userForm="ngForm" (ngSubmit)="onSubmit(userForm.value)">
    <input type="text" name="email" ngModel>
    <br><br>
    <input type="password" name="pass" ngModel>
    <br><br>
    <button type="submit">submit</button>
  </form>

5. app.component.ts
 /* Template driven form */
  onSubmit(formsdata)
  {
     console.log(formsdata);
     console.log(formsdata.email);
     console.log(formsdata.pass);
  }





  # Forms validations
  1. Add bootstrap forms
  2. import forms module
  3. app.component.html

   <h3>Form Validations</h3>
 
  <div class="col-sm-6">
    <form #userForm="ngForm" (ngSubmit)="onSubmit(userForm.value)"> 
      <div class="form-group">
        <label>Email address</label>
        <input type="email" #email="ngModel" class="form-control"  name="email" placeholder="Enter email" ngModel required>
        <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        <span *ngIf="email.invalid && email.touched" class="error">Email field is required!!</span>
        {{email.touched}}
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control"  name="password" placeholder="Password" ngModel required>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input">
        <label class="form-check-label">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>

  4. app.component.css
  /*You can right click inspect element to know about classes like invalid, touched, pristine */
  input{background-color: ghostwhite;}
  input.ng-invalid{border-left: 4px solid red;}
  input.ng-valid{border-left: 4px solid green;}
  .error{color: red;}

  # Reactive forms
  1. import reactive form modules
  2. Make html form
  3. Define form group
  4. Get form value
  
  app.component.html
   <h3>Reactive forms</h3>
  <div class="col-sm-6">
      <form [formGroup]="loginForm" (ngSubmit)="collectData()">
        <div class="form-group">
          <label >Email address:</label>
          <input type="email" class="form-control" name="email" formControlName="email">
        </div>

        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" name="pass" formControlName="pass">
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  </div>

  app.component.ts

  loginForm = new FormGroup(
    {
      user : new FormControl(''),
      pass : new FormControl('')
    }
  )
   /* Collect Reactive forms data*/
  collectData()
  {
    console.log(this.loginForm.value);
  }

# Promises and Observables
=> Promises represents a single value but in observable takes more than one values
=> Promises are aysnc but obsrvable sync / async

1. Create data base -> country
2. Create table
   
CREATE TABLE tbl_Countries  
(  
     CountryID INT  
    ,CountryName VARCHAR(50)  
    ,TwoCharCountryCode CHAR(2)  
    ,ThreeCharCountryCode CHAR(3)      
); 

3. Insert values into tbl_Countries

  INSERT INTO tbl_Countries VALUES (1,'Afghanistan','AF','AFG') ,(2,'Bland Islands','AX','ALA') ,(3,'Zlbania','AL','ALB') ,(4,'Klgeria','DZ','DZA') ,(5,'American Samoa','AS','ASM') ,(6,'Fndorra','AD','AND') ,(7,'Angola','AO','AGO') ,(8,'Anguilla','AI','AIA') ,(9,'Entarctica','AQ','ATA')

4. Create a stored procedure
    MariaDB [country]> delimiter //
    MariaDB [country]> CREATE procedure searchCountryByName( IN searchValue varchar(100))
    -> begin
    -> set searchValue = '%' + searchValue + '';
    -> select * from tbl_countries where countryName like searchValue;
    -> end
    -> //
    MariaDB [country]> delimiter ;

   OR 
   select * from tbl_countries where countryName like searchValue;

5. Make service ulr http://127.0.0.1:5000/api/v1.0/task?CountryName=Afghanistan (Python REST API)

=> IN Amgular FrontEnd

6. Generate component => ng g c observable-example

7. Generate component => ng g c promise-example

8. promise-example.component.html

<div style="text-align: center;"> 
  <h1>  
    Example of Fetching data using Promise    
  </h1>  
  <div>  
    <h2>  
      Country Name Search  
    </h2> 
    <input #term type="text" (keyup)="searchCountryUsingPromise(term.value)">  
    <div>  
      <li *ngFor="let result of country">  
        {{result.CountryName}}  
      </li> 
    </div>  
  </div>  
</div>  

9. promise-example.component.ts:-

import { Component, OnInit } from '@angular/core';
import {CountryService} from '../country.service';

@Component({
  selector: 'app-promise-example',
  templateUrl: './promise-example.component.html',
  styleUrls: ['./promise-example.component.css']
})
export class PromiseExampleComponent implements OnInit {
    country: any;  
    constructor(private _countryService:CountryService) { }  
    ngOnInit() {  
    }  
    public searchCountryUsingPromise(keyWord){ 
      console.log(keyWord); 
      this._countryService.getSearchedCountry(keyWord).toPromise()  
      .then((data:any) =>{  
        console.log(data);  
        this.country =data;  
      });  
    }
}

11. observable.component.html

<p>observable-example works!</p>

<div style="text-align: center;">  
      <h1> 
        Example of Fetching data using Observable  
      </h1> 
      <div>  
        <h2>  
          Country Name Search 
        </h2>  
      <input #term type="text" (keyup)="searchCountry(term.value)">  
      <div>  
        <li *ngFor="let result of country">  
          {{result.CountryName}}  
        </li> 
      </div>
</div>


12. observable-example.component.ts:-

import { Component, OnInit } from '@angular/core';  
import { CountryService } from '../country.service';  
 
@Component({  
  selector: 'app-observable-example',  
  templateUrl: './observable-example.component.html',  
  styleUrls: ['./observable-example.component.css']  
})  

export class ObservableExampleComponent {  
  public country = [];
  constructor(private service: CountryService) { }

  searchCountry(keyword){  
       this.service.getSearchedCountry(keyword).subscribe((res: any) => {
        this.country = res;
        console.log(this.country);
      }, err => {
        console.log(err);
      });
    }
} 


# Material Angular

npm install angular-material


