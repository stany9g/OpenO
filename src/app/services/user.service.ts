import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient} from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersUrl:string = 'http://localhost:3000/users';

  usersLimit = '?_limit=50';
  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(`${this.usersUrl}${this.usersLimit}`);
  }
}