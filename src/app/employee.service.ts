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

    postEmployees(body:Employee):Observable<any>{
        const headers = { 'content-type': 'application/json'}  
        const data=JSON.stringify(body);
        return this.httpClient.post(`${this.API_URL}/employees`, data, {'headers':headers});
    }
}