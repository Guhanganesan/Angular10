import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlaskService {
 
  employees: any[];  
  
  private url = "http://localhost:5000/get_employee";

  constructor(public http: HttpClient) {  
  }  

  getEmployeeData() {  
    return this.http.get<any[]>(this.url);  
  }  

}