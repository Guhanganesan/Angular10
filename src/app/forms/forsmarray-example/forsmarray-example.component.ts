import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forsmarray-example',
  templateUrl: './forsmarray-example.component.html',
  styleUrls: ['./forsmarray-example.component.css']
})
export class ForsmarrayExampleComponent implements OnInit {

  skills = new FormArray([]);
  data = [];
  get_data: any;

  constructor() { }

  ngOnInit(): void {
  }

  addSkills(){
    this.skills.push(new FormControl(''));
  }

  removeSkill(index: number){
    this.skills.removeAt(index);
  }

  displayDetails(){
    console.log(this.skills);
    //Remove duplicates
    for(var i=0; i<this.skills.value.length; i++){
      if(this.data.indexOf(this.skills.value[i]) === -1) {
        //this.data.push(...this.skills.value);
        this.data.push(this.skills.value[i]);
      } 
    }
    console.log(this.data);
  }

  insertDetails(index:number){
    this.skills.insert(index, new FormControl(''));
  }
}
