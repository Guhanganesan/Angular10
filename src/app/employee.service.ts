import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class EmployeeService {
    API_URL = 'http://localhost:3000';
    constructor(private httpClient: HttpClient) { }
    getEmployees() {
        return this.httpClient.get(`${this.API_URL}/employees`);
    }
}