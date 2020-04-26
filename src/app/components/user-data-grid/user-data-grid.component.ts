import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService, Employee} from "../../services/user.service";

@Component({
  selector: 'app-user-data-grid',
  templateUrl: './user-data-grid.component.html',
  styleUrls: ['./user-data-grid.component.css']
})
export class UserDataGridComponent {
  users: Employee[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getEmployees().subscribe(user => {
      this.users = user;
    });
  }
}
