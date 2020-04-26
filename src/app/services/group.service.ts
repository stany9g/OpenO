import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient} from '@angular/common/http';
import { Groups } from '../models/Groups';


@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groupsUrl:string = 'http://localhost:3000/groups';

  groupsLimit = '?_limit=50';
  constructor(private http:HttpClient) { }

  getGroups():Observable<Groups[]> {
    return this.http.get<Groups[]>(`${this.groupsUrl}${this.groupsLimit}`);
  }
}
