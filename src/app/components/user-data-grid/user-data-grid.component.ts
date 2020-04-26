import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService} from "../../services/user.service";
import { Roles } from 'src/app/models/Roles';
import { Groups } from 'src/app/models/Groups';
import { RoleService } from 'src/app/services/role.service';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-user-data-grid',
  templateUrl: './user-data-grid.component.html',
  styleUrls: ['./user-data-grid.component.css']
})
export class UserDataGridComponent {
  users: User[];
  groupsData: string[];
  rolesData: string[];

  constructor(private userService:UserService, private roleService:RoleService, private groupService:GroupService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(user => {
      this.users = user;
    });
    this.groupService.getGroups().subscribe(group => {
      this.groupsData = group.map(x => x.name);
    });
    this.roleService.getRoles().subscribe(role => {
      this.rolesData = role.map(x => x.name);;
    });
  }

  ArrayColumnCustomizeText (cellInfo) {
    return cellInfo.value.map(x=> x.name).join(", ");
}
}
