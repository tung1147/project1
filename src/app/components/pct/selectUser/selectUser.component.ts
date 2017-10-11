import {Component, OnInit} from '@angular/core';
import {RoleService} from "../role.service";

@Component({
  selector: 'app-select-user',
  styleUrls: ['./selectUser.component.less'],
  templateUrl: './selectUser.component.html'
})
export class SelectUserComponent  {
  role: String = "admin";

  constructor(private service: RoleService) {
    this.role = this.service.getRole();
  }

  ngOnInit() {

  }

  onChange(role){
    console.log("on change role",role);
    this.service.setRole(role);

  }

}
