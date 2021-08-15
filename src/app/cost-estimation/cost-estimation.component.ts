// import { Component, OnInit } from '@angular/core';
import {ServerType} from '../common.model';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cost-estimation',
  templateUrl: './cost-estimation.component.html',
  styleUrls: ['./cost-estimation.component.css']
})
export class CostEstimationComponent implements OnInit {

  /*
    State level:
      memory size => 1 to 5GB 
      Period => 2 Years
      Cost => 10000/Year
      Total cost => Years * Cost

      memory size => 6 to 10GB 
      Period => 2 Years
      Cost => 20000/Year
      
      memory size => 11 to 20GB 
      Period => 2 Years
      Cost => 40000/Year

      memory size => above 20 GB 
      Period => 2 Years
      Cost => 60000/Year

    Country level:
      memory size => 1 to 5GB 
      Period => 2 Years
      Cost => 20000/Year
      Total cost => Years * Cost

      memory size => 6 to 10GB 
      Period => 2 Years
      Cost => 40000/Year
      
      memory size => 11 to 20GB 
      Period => 2 Years
      Cost => 60000/Year

      memory size => above 20 GB 
      Period => 2 Years
      Cost => 80000/Year

      Display:
      Remain: 1 user can select multiple server 
      Total Cost: as common for overal server selection
          name:
          user:
          region:
          server:
          server type:
          period:
          cost:
  */

  costEstimationForm: FormGroup;
  server_map = new Map<any, any>();
  server_level_data = [{
    server_name: "",
    server_type: "",
    memory_size: ""
  }];
  public server_details = new FormArray([
    new FormGroup({
      server_name : new FormControl(null),
      server_type : new FormControl(null),
      periods     : new FormControl(null),
      memory_size : new FormControl(null)
    })
  ])
  
  public server_data = ["127.0.0.1", "127.0.0.2", "127.0.0.3", "127.0.0.8", "127.0.0.12"];
  public years = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  public server_level = [ServerType.state_level, ServerType.contry_level];

  
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(){
    this.costEstimationForm = this.formBuilder.group({
       server_details : this.server_details,
       user_name: ["", [Validators.required]],
       user_region: ["", [Validators.required]],
    })
  }

  public initForm(){
    
  }


  addServer(){
    this.server_details.push(
      new FormGroup({
        server_name : new FormControl(null),
        server_type : new FormControl(null),
        periods     : new FormControl(null),
        memory_size : new FormControl(null)
      })
    )
  }

  removeServer(index:number){
    (this.costEstimationForm.get('server_details') as FormArray).removeAt(index)
  }

  displayCost(index: number){
    console.log(this.costEstimationForm.get('user_name').value);
    // console.log(this.costEstimationForm.get('server_details')['controls'][index].controls);
    // console.log(this.costEstimationForm.get('server_details')['controls'][index].controls.server_name.value);
    const server_name = this.costEstimationForm.get('server_details')['controls'][index].controls.server_name.value;
    const server_level = this.costEstimationForm.get('server_details')['controls'][index].controls.server_type.value;
    const size = Number(this.costEstimationForm.get('server_details')['controls'][index].controls.memory_size.value);
    const timing = Number(this.costEstimationForm.get('server_details')['controls'][index].controls.periods.value);
    console.log(server_name);
    console.log(size);
    console.log(timing);

    if(server_level == 'State Level'){
      if(size>=1 && size<=5){
        //console.log("pusing data into map....")
        this.server_map.set(server_name,{
          years: timing,
          cost: timing * 10000 
        })
      }
      else if(size>=6 && size<=10){
        this.server_map.set(server_name,{
          years: timing,
          cost: timing * 20000 
        })
      }
      else if(size>=11 && size<=20){
        this.server_map.set(server_name,{
          years: timing,
          cost: timing * 40000 
        })
      }
      else if(size>20){
        this.server_map.set(server_name,{
          years: timing,
          cost: timing * 60000 
        })
      }
    }

    if(server_level == 'Country Level'){
      if(size>=1 && size<=5){
        this.server_map.set(server_name,{
          years: timing,
          cost: timing * 20000 
        })
      }
      else if(size>=6 && size<=10){
        this.server_map.set(server_name,{
          years: timing,
          cost: timing * 40000 
        })
      }
      else if(size>=11 && size<=20){
        this.server_map.set(server_name,{
          years: timing,
          cost: timing * 60000 
        })
      }
      else if(size>20){
        this.server_map.set(server_name,{
          years: timing,
          cost: timing * 80000 
        })
      }
    }
    console.log(this.server_map);
    console.log(this.server_map.get(server_name).cost);
    
  }
 
  
}
