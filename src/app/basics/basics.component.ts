import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css', './test.component.css']
})
export class BasicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  getStringValue(){
    return "Hello....";
  }

  //Data binding => communication between typescript file to html file
  db_name: string = "Guhan Ganesan";



}
