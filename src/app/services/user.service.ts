import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders} from '@angular/common/http';
// import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersUrl:string = 'http://localhost:3000/employees';

  usersLimit = '?_limit=50';
  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.usersUrl}${this.usersLimit}`);
  }
}

export class Employee {
    ID: number;
    FirstName: string;
    LastName: string;
    Prefix: string;
    Position: string;
    BirthDate: string;
    HireDate: string;
    Notes: string;
    Address: string;
    StateID: number;
}