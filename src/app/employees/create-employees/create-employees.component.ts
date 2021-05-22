import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {

  createForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.createForm = this.formBuilder.group({
      name:['', Validators.required],
      city:['', Validators.required],
      gender:['', Validators.required],
      dept:['', Validators.required]
    })
  }
  
  onSubmit(){
    console.log(this.createForm);
  }
}
