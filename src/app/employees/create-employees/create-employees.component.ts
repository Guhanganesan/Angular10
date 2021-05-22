import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../employee.model';
import {EmployeeService} from '../../employee.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {

  createForm: FormGroup;
  employee_data: Employee;
  

  constructor(private formBuilder: FormBuilder,
              private _empService: EmployeeService,
              private router:Router) { }

  ngOnInit(): void {

    this.createForm = this.formBuilder.group({
      name:['', Validators.required],
      city:['', Validators.required],
      gender:['', Validators.required],
      department:['', Validators.required]
    })
  }

  onSubmit(){
    this._empService.postEmployees(this.createForm.value).subscribe(data=>{
      console.log(data);
    })
    this.router.navigateByUrl('/list-employees');
  }
}
