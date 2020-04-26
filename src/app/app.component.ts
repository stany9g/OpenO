import { Component } from '@angular/core';
import { User } from './models/User';
import { UserService, Employee} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OpenO';
}
