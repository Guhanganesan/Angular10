import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';
import { Observable } from 'rxjs';
@Injectable()
export class EmployeeService {
    API_URL = 'http://localhost:3000';
    constructor(private httpClient: HttpClient) { }
    getEmployees() {
        return this.httpClient.get(`${this.API_URL}/employees`);
    }

    getEmployeeById(id: number) {  
        return this.httpClient.get<Employee>(`${this.API_URL}/employees` + '/' + id);  
      }  

    postEmployees(body:Employee):Observable<any>{
        const headers = { 'content-type': 'application/json'}  
        return this.httpClient.post(`${this.API_URL}/employees`, body, {'headers':headers});
    }

    updateEmployee(body:any, id:number){
        const headers = { 'content-type': 'application/json'}
        console.log(body);
        return this.httpClient.put(`${this.API_URL}/employees` + '/' + id, body);
    }

    deleteEmployee(id:number){
        console.log(id);
        return this.httpClient.delete(`${this.API_URL}/employees` + '/' + id);
    }
}