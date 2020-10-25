import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  employees: any[];  
  private url = '';  
  private baseUrl = "http://127.0.0.1:5000/api/v1.0/task";//Replace it with your http address and port  
  constructor(public http: HttpClient) {  
  }  

  getSearchedCountry(keyWord) {  
    this.url = this.baseUrl + '?CountryName='+keyWord;
    console.log(this.url); 
    //this.url = this.baseUrl;
    return this.http.get<any[]>(this.url);  
  }  

}
