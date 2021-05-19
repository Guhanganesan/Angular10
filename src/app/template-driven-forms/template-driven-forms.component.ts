import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit(form){
    var firstName = form.firstName;
    console.log(firstName);
  
    var lastName = form.lastName;
    console.log(lastName);
  
    var comment = form.comment;
    console.log(comment);

    console.log(form);
  }

}
