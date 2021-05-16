import { Component, Directive, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css', './test.component.css']
})

// @Directive({
//   selector:'[my-directive_selector]'
// })
export class BasicsComponent implements OnInit {

  property_enable:boolean = false;
  event_data: string;
  //Data binding => communication between typescript file to html file
  db_name: string = "Guhan Ganesan";
  two_way_data: string;

  constructor(
    private elementRef: ElementRef
  ) {
    //property binding
    setTimeout(()=>{
        this.property_enable = true;
    }, 2000);
   }

  ngOnInit() {
    //this.elementRef.nativeElement.style.color ='green';
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
    //this.event_data = (<HTMLInputElement>event.target).value;
  }
  
  //attribute directive
  isBlue: boolean = true;
  show: boolean = true;
  isShow: boolean = false;
  content: boolean = true;
  other_content: boolean = true;
  selectedValue = "Anbarasan";
  
  student_data : Student[] = [
    {name: "Guhan Ganesan", age : 21, id: 1, mobile: 978767},
    {name: "Anbarasan", age : 22, id: 2, mobile: 956678},
    {name: "Kannan", age : 23, id: 3, mobile: 326523}
  ];

}

class Student{
   id : number;
   name: string;
   age: number;
   mobile: number;
}
