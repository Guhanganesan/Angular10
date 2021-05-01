import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css', './test.component.css']
})
export class BasicsComponent implements OnInit {

  property_enable:boolean = false;
  constructor() {
    //property binding
    setTimeout(()=>{
        this.property_enable = true;
    }), 2000
   }

  ngOnInit(): void {
  }
 
  getStringValue(){
    return "Hello....";
  }

  //Data binding => communication between typescript file to html file
  db_name: string = "Guhan Ganesan";
  
}
