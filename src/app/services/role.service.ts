import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient} from '@angular/common/http';
import { Roles } from '../models/Roles';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  usersUrl:string = 'http://localhost:3000/roles';

  usersLimit = '?_limit=50';
  constructor(private http:HttpClient) { }

  getRoles():Observable<Roles[]> {
    return this.http.get<Roles[]>(`${this.usersUrl}${this.usersLimit}`);
  }
}
