import { Component, OnInit, Input } from '@angular/core';
import {FlaskService} from '../flask-server.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
// @Directive({
//   selector: '[matRowDef]'
// })

export class EmployeeComponent implements OnInit {

  constructor(private _http:FlaskService) { }

  // @Input() matRowDefColumns: string[];

  displayedColumns = ['id', 'name', 'age', 'address'];
  emp_data = [];
  dataSource:any;

  ngOnInit(): void {
      this.getEmpDetails();
  }

  getEmpDetails(){
    this._http.getEmployeeData().subscribe(val=>{
      if(val["status"] == "success"){
          this.emp_data = val["data"];
          console.log(this.emp_data);
          this.dataSource = this.emp_data;
      }
    })
  }

}

export interface EmpElement {
  id:number,
  age:number,
  name: string;
  address: string;
}
