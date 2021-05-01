import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css', './test.component.css']
})
export class BasicsComponent implements OnInit {

  property_enable:boolean = false;
  event_data: string;
  //Data binding => communication between typescript file to html file
  db_name: string = "Guhan Ganesan";
  two_way_data: string;

  constructor() {
    //property binding
    setTimeout(()=>{
        this.property_enable = true;
    }, 2000);
   }

  ngOnInit(): void {
  }
 
  getStringValue(){
    return "Hello....";
  }
  
  getEventBindingData(){
    console.log("event is called");
    this.event_data = "Guhan Ganesan";
  }
  
  getInputEvent(event:any){
    console.log(event);
    //this.event_data = event.target.value;
    this.event_data = (<HTMLInputElement>event.target).value;
  }
}
