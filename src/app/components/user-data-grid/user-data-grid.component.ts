import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';
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
    this.users = this.userService.getEmployees();
  }
}
