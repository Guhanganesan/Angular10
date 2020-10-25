import { Component, OnInit } from '@angular/core';  
import { CountryService } from '../country.service';  
 
@Component({  
  selector: 'app-observable-example',  
  templateUrl: './observable-example.component.html',  
  styleUrls: ['./observable-example.component.css']  
})  

export class ObservableExampleComponent {  
  public country = [];
  constructor(private service: CountryService) { }

  searchCountry(keyword){  
       this.service.getSearchedCountry(keyword).subscribe((res: any) => {
        this.country = res;
        console.log(this.country);
      }, err => {
        console.log(err);
      });
    }
} 

