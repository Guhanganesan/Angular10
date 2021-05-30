import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee.model';
// Import EmployeeService
import { EmployeeService } from '../../employee.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];
  constructor(private _employeeService: EmployeeService,
              private router:Router
              ) { }

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees() {
    this._employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
      console.log(this.employees);
    });
  }

  updateEmployee(id:any){
   console.log(id);
   localStorage.setItem('id', id);
   console.log(this.employees);
   this.router.navigateByUrl('/update-employees');
  }
}
