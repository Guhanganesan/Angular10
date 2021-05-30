import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../employee.model';
import {EmployeeService} from '../../employee.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-update-employees',
  templateUrl: './update-employees.component.html',
  styleUrls: ['./update-employees.component.css']
})
export class UpdateEmployeesComponent implements OnInit {

  updateForm: FormGroup;
  employee_data: Employee;
  employees: Employee;
  id: number;
  name: string;
  city: string;
  gender: string;
  department: string;
  

  constructor(private formBuilder: FormBuilder,
    private _empService: EmployeeService,
    private router:Router) { }

ngOnInit(): void {
//list employees from server
this.getEmployeeById(1);

//update employee form with specific id
this.updateForm = this.formBuilder.group({
      name:['', Validators.required],
      city:['', Validators.required],
      gender:['', Validators.required],
      department:['', Validators.required],
      id:['', Validators.required]
  })
}

public getEmployeeById(id:number) {
  this._empService.getEmployeeById(id).subscribe((data: any) => {
    this.employees = data;
    this.id = this.employees.id;
    this.name = this.employees.name;
    this.city = this.employees.city;
    this.gender = this.employees.gender;
    this.department = this.employees.department;
  });
}

updateEmployee(){
    const body ={
      name:this.name,
      city: this.city,
      gender: this.gender,
      department: this.department
    }
    this._empService.updateEmployee(body, this.id).subscribe(data=>{
      console.log(data);
    })
  }
  
}
