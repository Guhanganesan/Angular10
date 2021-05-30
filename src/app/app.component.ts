import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Welcome to Angular10!'; //simple property which is used to load/bind on frontend
  name:string;

  ngOnInit() {
  }
  

  //For installing bootstrap => npm install --save bootstrap@4 
  //and update the angular.json config files (location of bootstrap file)
  //For generating directive => ng generate directive mydirective
  //npm install -g json-server
  //B:\GithubRepo\Angular10\myapp\src\app>json-server --watch server/employee.json
  //ng g interface emploeyee
  
}
